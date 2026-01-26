import { useRef, useEffect, useCallback, useMemo, useState } from 'react';
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

// Dark mode detection hook
function useDarkMode() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof document !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          setIsDark(document.documentElement.classList.contains('dark'));
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  return isDark;
}

interface EnneagramCircleProps {
  width?: number;
  height?: number;
}

const GROUP_COLORS: Record<string, string> = {
  // Harmonic groups - Warm Editorial palette
  positive_outlook: '#2D5A52', // Deep Verdigris (Heart-like)
  competency: '#364C63',      // Storm Slate (Head-like)
  reactive: '#8C3A2B',        // Iron Oxide (Gut-like)
  // Hornevian groups
  assertive: '#C9A962',       // Gold
  compliant: '#7D9B84',       // Sage
  withdrawn: '#5C584E',       // Charcoal light
  // Object relations
  frustration: '#C4785C',     // Terracotta
  rejection: '#7D9B84',       // Sage
  attachment: '#364C63'       // Storm Slate
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

// Get wings for a given type (adjacent types on the circle)
function getWings(typeNumber: TypeNumber): [TypeNumber, TypeNumber] {
  const lower = typeNumber === 1 ? 9 : (typeNumber - 1) as TypeNumber;
  const upper = typeNumber === 9 ? 1 : (typeNumber + 1) as TypeNumber;
  return [lower, upper];
}

export function EnneagramCircle({ width = 600, height = 600 }: EnneagramCircleProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  // Use selectors to prevent unnecessary re-renders
  const selectedType = useAppStore((state) => state.selectedType);
  const selectType = useAppStore((state) => state.selectType);
  const circleLayer = useAppStore((state) => state.circleLayer);
  const userProfile = useAppStore((state) => state.userProfile);
  const setViewMode = useAppStore((state) => state.setViewMode);
  const isDark = useDarkMode();

  // Theme-aware colors
  const themeColors = useMemo(() => ({
    // Strokes for circle and lines
    circleStroke: isDark ? '#4b5563' : '#e5e7eb',  // gray-600 / gray-200
    innerLines: isDark ? '#6b7280' : '#d1d5db',     // gray-500 / gray-300
    // Text colors
    legendText: isDark ? '#9ca3af' : '#6b7280',     // gray-400 / gray-500
    dynamicsLegendText: isDark ? '#d1d5db' : '#5C584E', // gray-300 / charcoal-light
    centerLabel: isDark ? '#6b7280' : '#9ca3af',    // gray-500 / gray-400
  }), [isDark]);

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

    // Glow filter for selected node - intense radiant effect
    const glowFilter = defs.append('filter')
      .attr('id', 'selected-glow')
      .attr('x', '-100%')
      .attr('y', '-100%')
      .attr('width', '300%')
      .attr('height', '300%');

    // Multiple blur layers for a rich glow
    glowFilter.append('feGaussianBlur')
      .attr('in', 'SourceGraphic')
      .attr('stdDeviation', 12)
      .attr('result', 'blur1');
    glowFilter.append('feGaussianBlur')
      .attr('in', 'SourceGraphic')
      .attr('stdDeviation', 6)
      .attr('result', 'blur2');
    glowFilter.append('feGaussianBlur')
      .attr('in', 'SourceGraphic')
      .attr('stdDeviation', 3)
      .attr('result', 'blur3');

    // Brighten the glow
    glowFilter.append('feColorMatrix')
      .attr('in', 'blur1')
      .attr('type', 'matrix')
      .attr('values', '1 0 0 0 0.1  0 1 0 0 0.1  0 0 1 0 0.1  0 0 0 1.5 0')
      .attr('result', 'glow1');
    glowFilter.append('feColorMatrix')
      .attr('in', 'blur2')
      .attr('type', 'matrix')
      .attr('values', '1 0 0 0 0.2  0 1 0 0 0.2  0 0 1 0 0.2  0 0 0 1.2 0')
      .attr('result', 'glow2');

    const glowMerge = glowFilter.append('feMerge');
    glowMerge.append('feMergeNode').attr('in', 'glow1');
    glowMerge.append('feMergeNode').attr('in', 'glow2');
    glowMerge.append('feMergeNode').attr('in', 'blur3');
    glowMerge.append('feMergeNode').attr('in', 'SourceGraphic');

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
      .attr('stroke', themeColors.circleStroke)
      .attr('stroke-width', 1.5)
      .attr('stroke-opacity', 0.4);

    // Draw inner enneagram symbol (triangle + hexagon)
    if (circleLayer === 'dynamics' || circleLayer === 'basic') {
      // Inner triangle (3-6-9)
      const triangle = [3, 6, 9].map(n => getTypePosition(n as TypeNumber));
      linesGroup.append('path')
        .attr('d', `M ${triangle[0].x} ${triangle[0].y} L ${triangle[1].x} ${triangle[1].y} L ${triangle[2].x} ${triangle[2].y} Z`)
        .attr('fill', 'none')
        .attr('stroke', themeColors.innerLines)
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
        .attr('stroke', themeColors.innerLines)
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
          .attr('stroke', themeColors.innerLines)
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
        .attr('fill', '#7D9B84'); // Sage - integration

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
        .attr('fill', '#C4785C'); // Terracotta - stress

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
          .attr('stroke', '#7D9B84') // Sage - integration
          .attr('stroke-width', 2)
          .attr('marker-end', 'url(#arrow-green)')
          .attr('class', 'integration-line');
      });

      // Stress lines (dashed with arrows)
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
          .attr('stroke', '#C4785C') // Terracotta - stress
          .attr('stroke-width', 2)
          .attr('stroke-dasharray', '6,4')
          .attr('marker-end', 'url(#arrow-red)')
          .attr('class', 'stress-line');
      });
    }

    // Draw selected type's integration/disintegration arrows (shown on any layer when a type is selected)
    if (selectedType) {
      const integrationTarget = integrationMap[selectedType];
      const disintegrationTarget = disintegrationMap[selectedType];
      const wings = getWings(selectedType);

      // Arrow markers for selected type arrows
      if (!defs.select('#arrow-integration').node()) {
        defs.append('marker')
          .attr('id', 'arrow-integration')
          .attr('viewBox', '0 -5 10 10')
          .attr('refX', 8)
          .attr('refY', 0)
          .attr('markerWidth', 6)
          .attr('markerHeight', 6)
          .attr('orient', 'auto')
          .append('path')
          .attr('d', 'M0,-5L10,0L0,5')
          .attr('fill', '#7D9B84'); // Sage - integration

        defs.append('marker')
          .attr('id', 'arrow-disintegration')
          .attr('viewBox', '0 -5 10 10')
          .attr('refX', 8)
          .attr('refY', 0)
          .attr('markerWidth', 6)
          .attr('markerHeight', 6)
          .attr('orient', 'auto')
          .append('path')
          .attr('d', 'M0,-5L10,0L0,5')
          .attr('fill', '#C4785C'); // Terracotta - stress
      }

      // Draw integration arrow (solid sage green)
      if (integrationTarget) {
        const fromPos = getTypePosition(selectedType);
        const toPos = getTypePosition(integrationTarget);

        const dx = toPos.x - fromPos.x;
        const dy = toPos.y - fromPos.y;
        const len = Math.sqrt(dx * dx + dy * dy);
        const offsetFrom = nodeRadius + 5;
        const offsetTo = nodeRadius + 12;

        const startX = fromPos.x + (dx / len) * offsetFrom;
        const startY = fromPos.y + (dy / len) * offsetFrom;
        const endX = toPos.x - (dx / len) * offsetTo;
        const endY = toPos.y - (dy / len) * offsetTo;

        linesGroup.append('line')
          .attr('x1', startX)
          .attr('y1', startY)
          .attr('x2', endX)
          .attr('y2', endY)
          .attr('stroke', '#7D9B84') // Sage - integration
          .attr('stroke-width', 3)
          .attr('marker-end', 'url(#arrow-integration)')
          .attr('class', 'selected-integration-line')
          .attr('opacity', 0.9);
      }

      // Draw disintegration arrow (dashed terracotta)
      if (disintegrationTarget) {
        const fromPos = getTypePosition(selectedType);
        const toPos = getTypePosition(disintegrationTarget);

        const dx = toPos.x - fromPos.x;
        const dy = toPos.y - fromPos.y;
        const len = Math.sqrt(dx * dx + dy * dy);
        const offsetFrom = nodeRadius + 5;
        const offsetTo = nodeRadius + 12;

        const startX = fromPos.x + (dx / len) * offsetFrom;
        const startY = fromPos.y + (dy / len) * offsetFrom;
        const endX = toPos.x - (dx / len) * offsetTo;
        const endY = toPos.y - (dy / len) * offsetTo;

        linesGroup.append('line')
          .attr('x1', startX)
          .attr('y1', startY)
          .attr('x2', endX)
          .attr('y2', endY)
          .attr('stroke', '#C4785C') // Terracotta - stress
          .attr('stroke-width', 3)
          .attr('stroke-dasharray', '8,4')
          .attr('marker-end', 'url(#arrow-disintegration)')
          .attr('class', 'selected-stress-line')
          .attr('opacity', 0.9);
      }

      // Draw wing connection highlights (glowing arcs)
      wings.forEach(wingType => {
        const fromPos = getTypePosition(selectedType);
        const toPos = getTypePosition(wingType);

        // Glow effect for wing line
        linesGroup.append('line')
          .attr('x1', fromPos.x)
          .attr('y1', fromPos.y)
          .attr('x2', toPos.x)
          .attr('y2', toPos.y)
          .attr('stroke', '#C9A962') // Gold for wings
          .attr('stroke-width', 4)
          .attr('opacity', 0.6)
          .attr('class', 'wing-highlight');
      });
    }

    // Draw type nodes
    enneagramTypes.forEach(type => {
      const pos = getTypePosition(type.number as TypeNumber);
      const color = circleLayer === 'groups'
        ? GROUP_COLORS[harmonicGroupMap[type.number as TypeNumber]]
        : getCenterColor(type.center);
      const isSelected = selectedType === type.number;
      const wings = selectedType ? getWings(selectedType) : null;
      const isWing = wings !== null && (wings[0] === type.number || wings[1] === type.number);
      const isIntegrationTarget = selectedType && integrationMap[selectedType] === type.number;
      const isDisintegrationTarget = selectedType && disintegrationMap[selectedType] === type.number;

      // Check if this node is "related" to the selected type
      const isRelated = isSelected || isWing || isIntegrationTarget || isDisintegrationTarget;
      // Dim unrelated nodes when something is selected
      const shouldDim = selectedType && !isRelated;

      // For selected node, apply larger scale and glow
      const baseScale = isSelected ? 1.15 : 1;

      const nodeGroup = nodesGroup.append('g')
        .attr('transform', `translate(${pos.x}, ${pos.y}) scale(${baseScale})`)
        .attr('opacity', shouldDim ? 0.25 : 1)
        .attr('class', 'cursor-pointer')
        .style('transition', 'transform 0.2s ease')
        .on('click', () => selectType(type.number as TypeNumber))
        .on('mouseenter', function() {
          const hoverScale = isSelected ? 1.2 : 1.1;
          d3.select(this).attr('transform', `translate(${pos.x}, ${pos.y}) scale(${hoverScale})`);
        })
        .on('mouseleave', function() {
          d3.select(this).attr('transform', `translate(${pos.x}, ${pos.y}) scale(${baseScale})`);
        });

      // Selection indicator - subtle glow
      if (isSelected) {
        // Soft outer glow
        nodeGroup.append('circle')
          .attr('r', nodeRadius + 12)
          .attr('fill', color)
          .attr('fill-opacity', 0.15);

        // Selection ring
        nodeGroup.append('circle')
          .attr('r', nodeRadius + 6)
          .attr('fill', 'none')
          .attr('stroke', color)
          .attr('stroke-width', 2)
          .attr('stroke-opacity', 0.6);
      }

      // Wing highlight ring (golden glow)
      if (isWing && !isSelected) {
        nodeGroup.append('circle')
          .attr('r', nodeRadius + 6)
          .attr('fill', 'none')
          .attr('stroke', '#C9A962') // Gold
          .attr('stroke-width', 3)
          .attr('stroke-opacity', 0.7);
      }

      // Integration target highlight (sage green glow)
      if (isIntegrationTarget && !isSelected) {
        nodeGroup.append('circle')
          .attr('r', nodeRadius + 6)
          .attr('fill', 'none')
          .attr('stroke', '#7D9B84') // Sage
          .attr('stroke-width', 3)
          .attr('stroke-opacity', 0.8);
      }

      // Disintegration target highlight (terracotta glow)
      if (isDisintegrationTarget && !isSelected) {
        nodeGroup.append('circle')
          .attr('r', nodeRadius + 6)
          .attr('fill', 'none')
          .attr('stroke', '#C4785C') // Terracotta
          .attr('stroke-width', 3)
          .attr('stroke-opacity', 0.8)
          .attr('stroke-dasharray', '4,2');
      }

      // Node circle with shadow (or glow for selected)
      nodeGroup.append('circle')
        .attr('r', nodeRadius)
        .attr('fill', color)
        .attr('stroke', 'white')
        .attr('stroke-width', isSelected ? 4 : 3)
        .attr('filter', isSelected ? 'url(#selected-glow)' : 'url(#drop-shadow)');

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
          .attr('font-size', '12px')
          .attr('fill', themeColors.legendText)
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
          .attr('font-size', '12px')
          .attr('fill', themeColors.legendText)
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
        .attr('stroke', '#7D9B84') // Sage
        .attr('stroke-width', 2);
      legend.append('text')
        .attr('x', 38).attr('y', 4)
        .attr('font-size', '12px')
        .attr('fill', themeColors.dynamicsLegendText)
        .text('Integration (Growth)');

      // Stress
      legend.append('line')
        .attr('x1', 0).attr('y1', 22)
        .attr('x2', 30).attr('y2', 22)
        .attr('stroke', '#C4785C') // Terracotta
        .attr('stroke-width', 2)
        .attr('stroke-dasharray', '6,4');
      legend.append('text')
        .attr('x', 38).attr('y', 26)
        .attr('font-size', '12px')
        .attr('fill', themeColors.dynamicsLegendText)
        .text('Disintegration (Stress)');
    }

    // Center label
    if (!selectedType) {
      svg.append('text')
        .attr('x', centerX)
        .attr('y', centerY)
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')
        .attr('fill', themeColors.centerLabel)
        .attr('font-size', '12px')
        .text('Click a type to explore');
    }

    // Legend for selected type (shows what wings and arrows mean)
    if (selectedType && circleLayer !== 'dynamics') {
      const legend = svg.append('g')
        .attr('transform', `translate(20, ${height - 100})`);

      // Wings
      legend.append('line')
        .attr('x1', 0).attr('y1', 0)
        .attr('x2', 24).attr('y2', 0)
        .attr('stroke', '#C9A962') // Gold
        .attr('stroke-width', 4)
        .attr('opacity', 0.7);
      legend.append('text')
        .attr('x', 32).attr('y', 4)
        .attr('font-size', '11px')
        .attr('fill', themeColors.dynamicsLegendText)
        .text('Wings (adjacent influences)');

      // Integration
      legend.append('line')
        .attr('x1', 0).attr('y1', 26)
        .attr('x2', 24).attr('y2', 26)
        .attr('stroke', '#7D9B84') // Sage
        .attr('stroke-width', 2);
      legend.append('text')
        .attr('x', 32).attr('y', 30)
        .attr('font-size', '11px')
        .attr('fill', themeColors.dynamicsLegendText)
        .text('Growth direction');

      // Disintegration
      legend.append('line')
        .attr('x1', 0).attr('y1', 52)
        .attr('x2', 24).attr('y2', 52)
        .attr('stroke', '#C4785C') // Terracotta
        .attr('stroke-width', 2)
        .attr('stroke-dasharray', '6,4');
      legend.append('text')
        .attr('x', 32).attr('y', 56)
        .attr('font-size', '11px')
        .attr('fill', themeColors.dynamicsLegendText)
        .text('Stress direction');
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps -- selectType is stable from Zustand
  }, [centerX, centerY, radius, nodeRadius, selectedType, circleLayer, getTypePosition, integrationLines, stressLines, height, themeColors]);

  // Show CTA when user hasn't taken the quiz and no type is selected
  const showDiscoverCta = !userProfile && !selectedType;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.15 }}
      className="flex flex-col justify-center items-center gap-4"
    >
      <svg
        ref={svgRef}
        width={width}
        height={height}
        className="overflow-visible"
      />
      {showDiscoverCta && (
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.3 }}
          onClick={() => setViewMode('quiz')}
          className="px-6 py-3 bg-terracotta-500 hover:bg-terracotta-600 text-white font-medium rounded-xl shadow-warm transition-all hover:scale-105 flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          Discover Your Type
        </motion.button>
      )}
    </motion.div>
  );
}
