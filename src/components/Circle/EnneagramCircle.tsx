import { useRef, useEffect, useCallback, useMemo } from 'react';
import * as d3 from 'd3';
import { motion } from 'framer-motion';
import { useAppStore } from '../../stores';
import {
  enneagramTypes,
  getCenterColor,
  integrationMap,
  disintegrationMap,
  harmonicGroupMap
} from '../../data';
import type { TypeNumber, HarmonicGroup } from '../../types';

interface EnneagramCircleProps {
  width?: number;
  height?: number;
}

const GROUP_COLORS: Record<string, string> = {
  // Harmonic groups
  positive_outlook: '#22c55e',
  competency: '#3b82f6',
  reactive: '#ef4444',
  // Hornevian groups
  assertive: '#f59e0b',
  compliant: '#8b5cf6',
  withdrawn: '#06b6d4',
  // Object relations
  frustration: '#ec4899',
  rejection: '#84cc16',
  attachment: '#6366f1'
};

// Static data - defined outside component to avoid recreation
const WING_LINES: { from: TypeNumber; to: TypeNumber }[] = [
  { from: 1, to: 2 },
  { from: 2, to: 3 },
  { from: 3, to: 4 },
  { from: 4, to: 5 },
  { from: 5, to: 6 },
  { from: 6, to: 7 },
  { from: 7, to: 8 },
  { from: 8, to: 9 },
  { from: 9, to: 1 }
];

const TYPE_ORDER = [9, 1, 2, 3, 4, 5, 6, 7, 8] as const;

export function EnneagramCircle({ width = 600, height = 600 }: EnneagramCircleProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  // Use selectors to prevent unnecessary re-renders
  const selectedType = useAppStore((state) => state.selectedType);
  const selectType = useAppStore((state) => state.selectType);
  const circleLayer = useAppStore((state) => state.circleLayer);

  // Memoize derived dimensions
  const dimensions = useMemo(() => ({
    centerX: width / 2,
    centerY: height / 2,
    radius: Math.min(width, height) / 2 - 60,
    nodeRadius: 28
  }), [width, height]);

  const { centerX, centerY, radius, nodeRadius } = dimensions;

  // Calculate positions for each type on the circle
  const getTypePosition = useCallback((typeNumber: TypeNumber) => {
    const index = TYPE_ORDER.indexOf(typeNumber);
    const angle = ((index * 360) / 9 - 90) * (Math.PI / 180);

    return {
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle)
    };
  }, [centerX, centerY, radius]);

  // Memoize integration lines (derived from static data)
  const integrationLines = useMemo(() =>
    Object.entries(integrationMap).map(([from, to]) => ({
      from: parseInt(from) as TypeNumber,
      to: to as TypeNumber
    })), []);

  // Memoize disintegration lines (derived from static data)
  const stressLines = useMemo(() =>
    Object.entries(disintegrationMap).map(([from, to]) => ({
      from: parseInt(from) as TypeNumber,
      to: to as TypeNumber
    })), []);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    // Create defs for gradients and filters
    const defs = svg.append('defs');

    // Drop shadow filter
    const filter = defs.append('filter')
      .attr('id', 'drop-shadow')
      .attr('height', '130%');
    filter.append('feGaussianBlur')
      .attr('in', 'SourceAlpha')
      .attr('stdDeviation', 3);
    filter.append('feOffset')
      .attr('dx', 0)
      .attr('dy', 2);
    filter.append('feComponentTransfer')
      .append('feFuncA')
      .attr('type', 'linear')
      .attr('slope', 0.2);
    const merge = filter.append('feMerge');
    merge.append('feMergeNode');
    merge.append('feMergeNode').attr('in', 'SourceGraphic');

    // Create groups for layers
    const bgGroup = svg.append('g').attr('class', 'background');
    const linesGroup = svg.append('g').attr('class', 'lines');
    const nodesGroup = svg.append('g').attr('class', 'nodes');

    // Draw center zones for groups layer
    if (circleLayer === 'groups') {
      // Draw group regions as background arcs
      const groupTypes: Record<HarmonicGroup, TypeNumber[]> = {
        positive_outlook: [7, 9, 2],
        competency: [1, 3, 5],
        reactive: [4, 6, 8]
      };

      Object.entries(groupTypes).forEach(([group, types]) => {
        types.forEach(typeNum => {
          const pos = getTypePosition(typeNum as TypeNumber);
          bgGroup.append('circle')
            .attr('cx', pos.x)
            .attr('cy', pos.y)
            .attr('r', nodeRadius + 15)
            .attr('fill', GROUP_COLORS[group])
            .attr('fill-opacity', 0.15);
        });
      });
    }

    // Draw outer circle
    svg.append('circle')
      .attr('cx', centerX)
      .attr('cy', centerY)
      .attr('r', radius)
      .attr('fill', 'none')
      .attr('stroke', '#e5e7eb')
      .attr('stroke-width', 2);

    // Draw inner enneagram symbol (triangle + hexagon)
    if (circleLayer === 'dynamics' || circleLayer === 'basic') {
      // Inner triangle (3-6-9)
      const triangle = [3, 6, 9].map(n => getTypePosition(n as TypeNumber));
      linesGroup.append('path')
        .attr('d', `M ${triangle[0].x} ${triangle[0].y} L ${triangle[1].x} ${triangle[1].y} L ${triangle[2].x} ${triangle[2].y} Z`)
        .attr('fill', 'none')
        .attr('stroke', '#d1d5db')
        .attr('stroke-width', 1);

      // Hexad (1-4-2-8-5-7-1)
      const hexadOrder = [1, 4, 2, 8, 5, 7, 1];
      const hexadPath = hexadOrder.map((n, i) => {
        const pos = getTypePosition(n as TypeNumber);
        return `${i === 0 ? 'M' : 'L'} ${pos.x} ${pos.y}`;
      }).join(' ');
      linesGroup.append('path')
        .attr('d', hexadPath)
        .attr('fill', 'none')
        .attr('stroke', '#d1d5db')
        .attr('stroke-width', 1);
    }

    // Draw wing lines (outer circle arc connections)
    if (circleLayer === 'basic' || circleLayer === 'subtypes') {
      WING_LINES.forEach(({ from, to }) => {
        const fromPos = getTypePosition(from);
        const toPos = getTypePosition(to);

        linesGroup.append('line')
          .attr('x1', fromPos.x)
          .attr('y1', fromPos.y)
          .attr('x2', toPos.x)
          .attr('y2', toPos.y)
          .attr('stroke', '#d1d5db')
          .attr('stroke-width', 1);
      });
    }

    // Draw integration and stress arrows (dynamics layer)
    if (circleLayer === 'dynamics') {
      // Arrow marker
      defs.append('marker')
        .attr('id', 'arrow-green')
        .attr('viewBox', '0 -5 10 10')
        .attr('refX', 8)
        .attr('refY', 0)
        .attr('markerWidth', 6)
        .attr('markerHeight', 6)
        .attr('orient', 'auto')
        .append('path')
        .attr('d', 'M0,-5L10,0L0,5')
        .attr('fill', '#22c55e');

      defs.append('marker')
        .attr('id', 'arrow-red')
        .attr('viewBox', '0 -5 10 10')
        .attr('refX', 8)
        .attr('refY', 0)
        .attr('markerWidth', 6)
        .attr('markerHeight', 6)
        .attr('orient', 'auto')
        .append('path')
        .attr('d', 'M0,-5L10,0L0,5')
        .attr('fill', '#ef4444');

      // Integration lines (solid green with arrows)
      integrationLines.forEach(({ from, to }) => {
        const fromPos = getTypePosition(from);
        const toPos = getTypePosition(to);

        // Calculate shortened line to not overlap with nodes
        const dx = toPos.x - fromPos.x;
        const dy = toPos.y - fromPos.y;
        const len = Math.sqrt(dx * dx + dy * dy);
        const offsetFrom = nodeRadius + 5;
        const offsetTo = nodeRadius + 10;

        const startX = fromPos.x + (dx / len) * offsetFrom;
        const startY = fromPos.y + (dy / len) * offsetFrom;
        const endX = toPos.x - (dx / len) * offsetTo;
        const endY = toPos.y - (dy / len) * offsetTo;

        linesGroup.append('line')
          .attr('x1', startX)
          .attr('y1', startY)
          .attr('x2', endX)
          .attr('y2', endY)
          .attr('stroke', '#22c55e')
          .attr('stroke-width', 2)
          .attr('marker-end', 'url(#arrow-green)')
          .attr('class', 'integration-line');
      });

      // Stress lines (dashed red with arrows)
      stressLines.forEach(({ from, to }) => {
        const fromPos = getTypePosition(from);
        const toPos = getTypePosition(to);

        const dx = toPos.x - fromPos.x;
        const dy = toPos.y - fromPos.y;
        const len = Math.sqrt(dx * dx + dy * dy);
        const offsetFrom = nodeRadius + 5;
        const offsetTo = nodeRadius + 10;

        const startX = fromPos.x + (dx / len) * offsetFrom;
        const startY = fromPos.y + (dy / len) * offsetFrom;
        const endX = toPos.x - (dx / len) * offsetTo;
        const endY = toPos.y - (dy / len) * offsetTo;

        linesGroup.append('line')
          .attr('x1', startX)
          .attr('y1', startY)
          .attr('x2', endX)
          .attr('y2', endY)
          .attr('stroke', '#ef4444')
          .attr('stroke-width', 2)
          .attr('stroke-dasharray', '6,4')
          .attr('marker-end', 'url(#arrow-red)')
          .attr('class', 'stress-line');
      });
    }

    // Draw type nodes
    enneagramTypes.forEach(type => {
      const pos = getTypePosition(type.number as TypeNumber);
      const color = circleLayer === 'groups'
        ? GROUP_COLORS[harmonicGroupMap[type.number as TypeNumber]]
        : getCenterColor(type.center);
      const isSelected = selectedType === type.number;

      const nodeGroup = nodesGroup.append('g')
        .attr('transform', `translate(${pos.x}, ${pos.y})`)
        .attr('class', 'cursor-pointer')
        .style('transition', 'transform 0.2s ease')
        .on('click', () => selectType(type.number as TypeNumber))
        .on('mouseenter', function() {
          d3.select(this).attr('transform', `translate(${pos.x}, ${pos.y}) scale(1.1)`);
        })
        .on('mouseleave', function() {
          d3.select(this).attr('transform', `translate(${pos.x}, ${pos.y}) scale(1)`);
        });

      // Selection ring
      if (isSelected) {
        nodeGroup.append('circle')
          .attr('r', nodeRadius + 8)
          .attr('fill', 'none')
          .attr('stroke', color)
          .attr('stroke-width', 3)
          .attr('stroke-opacity', 0.6)
          .attr('stroke-dasharray', '4,2');
      }

      // Node circle with shadow
      nodeGroup.append('circle')
        .attr('r', nodeRadius)
        .attr('fill', color)
        .attr('stroke', 'white')
        .attr('stroke-width', 3)
        .attr('filter', 'url(#drop-shadow)');

      // Type number
      nodeGroup.append('text')
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'central')
        .attr('fill', 'white')
        .attr('font-size', '18px')
        .attr('font-weight', 'bold')
        .attr('pointer-events', 'none')
        .text(type.number);

      // Subtype indicators (for subtypes layer)
      if (circleLayer === 'subtypes') {
        const subtypeColors = { sp: '#f59e0b', so: '#8b5cf6', sx: '#ec4899' };
        const subtypes = ['sp', 'so', 'sx'] as const;
        subtypes.forEach((st, i) => {
          const angle = ((i - 1) * 30 - 90) * (Math.PI / 180);
          const dist = nodeRadius + 18;
          nodeGroup.append('circle')
            .attr('cx', dist * Math.cos(angle))
            .attr('cy', dist * Math.sin(angle))
            .attr('r', 6)
            .attr('fill', subtypeColors[st])
            .attr('stroke', 'white')
            .attr('stroke-width', 1.5);
        });
      }
    });

    // Legend for groups layer
    if (circleLayer === 'groups') {
      const legendData = [
        { label: 'Positive Outlook (7,9,2)', color: GROUP_COLORS.positive_outlook },
        { label: 'Competency (1,3,5)', color: GROUP_COLORS.competency },
        { label: 'Reactive (4,6,8)', color: GROUP_COLORS.reactive }
      ];

      const legend = svg.append('g')
        .attr('transform', `translate(20, ${height - 80})`);

      legendData.forEach((item, i) => {
        const row = legend.append('g')
          .attr('transform', `translate(0, ${i * 22})`);

        row.append('circle')
          .attr('r', 6)
          .attr('fill', item.color);

        row.append('text')
          .attr('x', 14)
          .attr('y', 4)
          .attr('font-size', '11px')
          .attr('fill', '#6b7280')
          .text(item.label);
      });
    }

    // Legend for subtypes layer
    if (circleLayer === 'subtypes') {
      const legendData = [
        { label: 'Self-Preservation (SP)', color: '#f59e0b' },
        { label: 'Social (SO)', color: '#8b5cf6' },
        { label: 'Sexual/One-to-One (SX)', color: '#ec4899' }
      ];

      const legend = svg.append('g')
        .attr('transform', `translate(20, ${height - 80})`);

      legendData.forEach((item, i) => {
        const row = legend.append('g')
          .attr('transform', `translate(0, ${i * 22})`);

        row.append('circle')
          .attr('r', 6)
          .attr('fill', item.color);

        row.append('text')
          .attr('x', 14)
          .attr('y', 4)
          .attr('font-size', '11px')
          .attr('fill', '#6b7280')
          .text(item.label);
      });
    }

    // Legend for dynamics layer
    if (circleLayer === 'dynamics') {
      const legend = svg.append('g')
        .attr('transform', `translate(20, ${height - 60})`);

      // Integration
      legend.append('line')
        .attr('x1', 0).attr('y1', 0)
        .attr('x2', 30).attr('y2', 0)
        .attr('stroke', '#22c55e')
        .attr('stroke-width', 2);
      legend.append('text')
        .attr('x', 38).attr('y', 4)
        .attr('font-size', '11px')
        .attr('fill', '#6b7280')
        .text('Integration (Growth)');

      // Stress
      legend.append('line')
        .attr('x1', 0).attr('y1', 22)
        .attr('x2', 30).attr('y2', 22)
        .attr('stroke', '#ef4444')
        .attr('stroke-width', 2)
        .attr('stroke-dasharray', '6,4');
      legend.append('text')
        .attr('x', 38).attr('y', 26)
        .attr('font-size', '11px')
        .attr('fill', '#6b7280')
        .text('Disintegration (Stress)');
    }

    // Center label
    if (!selectedType) {
      svg.append('text')
        .attr('x', centerX)
        .attr('y', centerY)
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')
        .attr('fill', '#9ca3af')
        .attr('font-size', '12px')
        .text('Click a type to explore');
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps -- selectType is stable from Zustand
  }, [centerX, centerY, radius, nodeRadius, selectedType, circleLayer, getTypePosition, integrationLines, stressLines, height]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.15 }}
      className="flex justify-center items-center"
    >
      <svg
        ref={svgRef}
        width={width}
        height={height}
        className="overflow-visible"
      />
    </motion.div>
  );
}
