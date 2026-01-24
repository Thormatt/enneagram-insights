import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppStore } from '../../stores';
import {
  enneagramTypes,
  getCenterColor,
  getIntegrationPath,
  getDisintegrationPath
} from '../../data';
import type { TypeNumber } from '../../types';

interface DiagramsProps {
  width?: number;
  height?: number;
}

export function Diagrams({ width = 600, height = 500 }: DiagramsProps) {
  // Use selectors to prevent unnecessary re-renders
  const selectedType = useAppStore((state) => state.selectedType);
  const selectType = useAppStore((state) => state.selectType);
  const diagramType = useAppStore((state) => state.diagramType);

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Diagram Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={diagramType}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.1 }}
        >
          {diagramType === 'centers' && (
            <CentersDiagram
              width={width}
              height={height}
              selectedType={selectedType}
              onSelectType={selectType}
            />
          )}
          {diagramType === 'triads' && (
            <TriadsDiagram
              width={width}
              height={height}
              selectedType={selectedType}
              onSelectType={selectType}
            />
          )}
          {diagramType === 'relationships' && (
            <RelationshipsDiagram
              width={width}
              height={height}
              selectedType={selectedType}
              onSelectType={selectType}
            />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// Centers Diagram - Gut, Heart, Head (horizontal layout)
function CentersDiagram({
  width,
  height,
  selectedType,
  onSelectType
}: {
  width: number;
  height: number;
  selectedType: TypeNumber | null;
  onSelectType: (type: TypeNumber | null) => void;
}) {
  const padding = 40;
  const boxWidth = (width - padding * 4) / 3;
  const boxHeight = height - padding * 2;

  const centers = [
    {
      key: 'gut',
      label: 'Body Center',
      subtitle: 'Instinct & Action',
      color: getCenterColor('gut'),
      types: [8, 9, 1] as TypeNumber[],
      coreEmotion: 'Anger'
    },
    {
      key: 'heart',
      label: 'Heart Center',
      subtitle: 'Feelings & Image',
      color: getCenterColor('heart'),
      types: [2, 3, 4] as TypeNumber[],
      coreEmotion: 'Shame'
    },
    {
      key: 'head',
      label: 'Head Center',
      subtitle: 'Thinking & Security',
      color: getCenterColor('head'),
      types: [5, 6, 7] as TypeNumber[],
      coreEmotion: 'Fear'
    },
  ];

  return (
    <svg width={width} height={height} className="overflow-visible">
      {centers.map((center, centerIndex) => {
        const boxX = padding + centerIndex * (boxWidth + padding);
        const boxY = padding;

        return (
          <g key={center.key}>
            {/* Background box */}
            <rect
              x={boxX}
              y={boxY}
              width={boxWidth}
              height={boxHeight}
              rx={16}
              fill={center.color}
              fillOpacity={0.1}
              stroke={center.color}
              strokeWidth={2}
              strokeOpacity={0.4}
            />

            {/* Center label */}
            <text
              x={boxX + boxWidth / 2}
              y={boxY + 30}
              textAnchor="middle"
              className="font-serif text-base font-semibold fill-charcoal dark:fill-white"
            >
              {center.label}
            </text>

            {/* Subtitle */}
            <text
              x={boxX + boxWidth / 2}
              y={boxY + 50}
              textAnchor="middle"
              className="text-xs fill-charcoal-muted dark:fill-gray-400"
            >
              {center.subtitle}
            </text>

            {/* Core emotion badge */}
            <g transform={`translate(${boxX + boxWidth / 2}, ${boxY + 75})`}>
              <rect
                x={-35}
                y={-10}
                width={70}
                height={20}
                rx={10}
                fill={center.color}
                fillOpacity={0.2}
              />
              <text
                x={0}
                y={4}
                textAnchor="middle"
                className="text-xs font-medium"
                fill={center.color}
              >
                {center.coreEmotion}
              </text>
            </g>

            {/* Type nodes - vertical stack */}
            {center.types.map((typeNum, i) => {
              const nodeX = boxX + boxWidth / 2;
              const nodeY = boxY + 120 + i * 80;
              const isSelected = selectedType === typeNum;
              const type = enneagramTypes.find(t => t.number === typeNum);

              return (
                <g
                  key={typeNum}
                  onClick={() => onSelectType(typeNum)}
                  className="cursor-pointer"
                >
                  <circle
                    cx={nodeX}
                    cy={nodeY}
                    r={isSelected ? 30 : 26}
                    fill={isSelected ? center.color : 'white'}
                    stroke={center.color}
                    strokeWidth={isSelected ? 3 : 2}
                    className="dark:fill-gray-800 transition-all duration-200"
                  />
                  <text
                    x={nodeX}
                    y={nodeY + 1}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className={`font-serif font-bold text-xl ${
                      isSelected ? 'fill-white' : 'fill-charcoal dark:fill-white'
                    }`}
                  >
                    {typeNum}
                  </text>
                  {/* Type name */}
                  {type && (
                    <text
                      x={nodeX}
                      y={nodeY + 42}
                      textAnchor="middle"
                      className="text-xs fill-charcoal-muted dark:fill-gray-400"
                    >
                      {type.name}
                    </text>
                  )}
                </g>
              );
            })}
          </g>
        );
      })}
    </svg>
  );
}

// Triads Diagram - Harmonic, Hornevian, Object Relations
function TriadsDiagram({
  width,
  height,
  selectedType,
  onSelectType
}: {
  width: number;
  height: number;
  selectedType: TypeNumber | null;
  onSelectType: (type: TypeNumber | null) => void;
}) {
  const [triadType, setTriadType] = useState<'harmonic' | 'hornevian' | 'object'>('harmonic');

  const triads = {
    harmonic: {
      groups: [
        { name: 'Positive Outlook', types: [2, 7, 9] as TypeNumber[], color: '#7D9B84', description: 'Reframe problems positively' },
        { name: 'Competency', types: [1, 3, 5] as TypeNumber[], color: '#C9A962', description: 'Solve problems objectively' },
        { name: 'Reactive', types: [4, 6, 8] as TypeNumber[], color: '#C4785C', description: 'React emotionally to problems' },
      ]
    },
    hornevian: {
      groups: [
        { name: 'Assertive', types: [3, 7, 8] as TypeNumber[], color: '#C4785C', description: 'Move against others' },
        { name: 'Compliant', types: [1, 2, 6] as TypeNumber[], color: '#7D9B84', description: 'Move toward others' },
        { name: 'Withdrawn', types: [4, 5, 9] as TypeNumber[], color: '#6B7BA8', description: 'Move away from others' },
      ]
    },
    object: {
      groups: [
        { name: 'Attachment', types: [3, 6, 9] as TypeNumber[], color: '#C9A962', description: 'Issues with attachment figures' },
        { name: 'Frustration', types: [1, 4, 7] as TypeNumber[], color: '#C4785C', description: 'Frustrated by environment' },
        { name: 'Rejection', types: [2, 5, 8] as TypeNumber[], color: '#6B7BA8', description: 'Rejected nurturing figure' },
      ]
    }
  };

  const currentTriad = triads[triadType];
  const groupWidth = (width - 60) / 3;

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Triad Type Selector */}
      <div className="flex gap-2">
        {[
          { id: 'harmonic', label: 'Harmonic' },
          { id: 'hornevian', label: 'Hornevian' },
          { id: 'object', label: 'Object Relations' },
        ].map(({ id, label }) => (
          <button
            key={id}
            onClick={() => setTriadType(id as typeof triadType)}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
              triadType === id
                ? 'bg-terracotta-500 text-white'
                : 'bg-cream-200 dark:bg-gray-700 text-charcoal-muted dark:text-gray-400 hover:bg-cream-300 dark:hover:bg-gray-600'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Triad Groups */}
      <svg width={width} height={height - 50}>
        {currentTriad.groups.map((group, groupIndex) => {
          const groupX = 30 + groupIndex * groupWidth + groupWidth / 2;

          return (
            <g key={group.name}>
              {/* Group background */}
              <rect
                x={groupX - groupWidth / 2 + 10}
                y={20}
                width={groupWidth - 20}
                height={height - 90}
                rx={16}
                fill={group.color}
                fillOpacity={0.1}
                stroke={group.color}
                strokeWidth={2}
                strokeOpacity={0.3}
              />

              {/* Group name */}
              <text
                x={groupX}
                y={50}
                textAnchor="middle"
                className="font-serif font-semibold text-sm fill-charcoal dark:fill-white"
              >
                {group.name}
              </text>

              {/* Description */}
              <text
                x={groupX}
                y={70}
                textAnchor="middle"
                className="text-xs fill-charcoal-muted dark:fill-gray-400"
              >
                {group.description}
              </text>

              {/* Type nodes */}
              {group.types.map((typeNum, i) => {
                const nodeY = 120 + i * 80;
                const isSelected = selectedType === typeNum;
                const type = enneagramTypes.find(t => t.number === typeNum);

                return (
                  <g
                    key={typeNum}
                    onClick={() => onSelectType(typeNum)}
                    className="cursor-pointer"
                  >
                    <circle
                      cx={groupX}
                      cy={nodeY}
                      r={isSelected ? 28 : 24}
                      fill={isSelected ? group.color : 'white'}
                      stroke={group.color}
                      strokeWidth={isSelected ? 3 : 2}
                      className="dark:fill-gray-800 transition-all duration-200"
                    />
                    <text
                      x={groupX}
                      y={nodeY + 1}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className={`font-serif font-bold text-lg ${
                        isSelected ? 'fill-white' : 'fill-charcoal dark:fill-white'
                      }`}
                    >
                      {typeNum}
                    </text>
                    {type && (
                      <text
                        x={groupX}
                        y={nodeY + 38}
                        textAnchor="middle"
                        className="text-xs fill-charcoal-muted dark:fill-gray-400"
                      >
                        {type.name}
                      </text>
                    )}
                  </g>
                );
              })}
            </g>
          );
        })}
      </svg>
    </div>
  );
}

// Relationships Diagram - Wings, Integration, Disintegration
function RelationshipsDiagram({
  width,
  height,
  selectedType,
  onSelectType
}: {
  width: number;
  height: number;
  selectedType: TypeNumber | null;
  onSelectType: (type: TypeNumber | null) => void;
}) {
  const centerX = width / 2;
  const centerY = height / 2;

  if (!selectedType) {
    return (
      <div
        className="flex items-center justify-center bg-cream-100 dark:bg-gray-800 rounded-2xl border-2 border-dashed border-warm-border dark:border-gray-600"
        style={{ width, height }}
      >
        <div className="text-center p-8">
          <p className="text-charcoal-muted dark:text-gray-400 mb-4">
            Select a type to see its relationships
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {([1, 2, 3, 4, 5, 6, 7, 8, 9] as TypeNumber[]).map(num => (
              <button
                key={num}
                onClick={() => onSelectType(num)}
                className="w-10 h-10 rounded-full bg-cream-200 dark:bg-gray-700 hover:bg-terracotta-100 dark:hover:bg-terracotta-900/30 text-charcoal dark:text-white font-serif font-bold transition-colors"
              >
                {num}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const type = enneagramTypes.find(t => t.number === selectedType);
  const integration = getIntegrationPath(selectedType);
  const disintegration = getDisintegrationPath(selectedType);
  const color = type ? getCenterColor(type.center) : '#C4785C';

  // Calculate wing types
  const wingLeft = selectedType === 1 ? 9 : (selectedType - 1) as TypeNumber;
  const wingRight = selectedType === 9 ? 1 : (selectedType + 1) as TypeNumber;

  // Positions
  const mainRadius = 40;
  const relatedRadius = 30;
  const distance = 120;

  const positions = {
    main: { x: centerX, y: centerY },
    wingLeft: { x: centerX - distance, y: centerY },
    wingRight: { x: centerX + distance, y: centerY },
    integration: { x: centerX, y: centerY - distance },
    disintegration: { x: centerX, y: centerY + distance },
  };

  const TypeNode = ({
    typeNum,
    x,
    y,
    radius,
    nodeColor,
    label,
    isMain = false
  }: {
    typeNum: TypeNumber;
    x: number;
    y: number;
    radius: number;
    nodeColor: string;
    label?: string;
    isMain?: boolean;
  }) => {
    const nodeType = enneagramTypes.find(t => t.number === typeNum);
    return (
      <g onClick={() => !isMain && onSelectType(typeNum)} className={isMain ? '' : 'cursor-pointer'}>
        <circle
          cx={x}
          cy={y}
          r={radius}
          fill={isMain ? nodeColor : 'white'}
          stroke={nodeColor}
          strokeWidth={isMain ? 4 : 2}
          className="dark:fill-gray-800"
        />
        <text
          x={x}
          y={y + 1}
          textAnchor="middle"
          dominantBaseline="middle"
          className={`font-serif font-bold ${isMain ? 'text-2xl fill-white' : 'text-lg fill-charcoal dark:fill-white'}`}
        >
          {typeNum}
        </text>
        {label && (
          <text
            x={x}
            y={y + radius + 18}
            textAnchor="middle"
            className="text-xs font-medium fill-charcoal-muted dark:fill-gray-400"
          >
            {label}
          </text>
        )}
        {nodeType && (
          <text
            x={x}
            y={y + radius + (label ? 32 : 18)}
            textAnchor="middle"
            className="text-xs fill-charcoal-light dark:fill-gray-500"
          >
            {nodeType.name}
          </text>
        )}
      </g>
    );
  };

  return (
    <svg width={width} height={height}>
      {/* Connection lines */}
      {/* Wings - dashed lines */}
      <line
        x1={positions.main.x - mainRadius}
        y1={positions.main.y}
        x2={positions.wingLeft.x + relatedRadius}
        y2={positions.wingLeft.y}
        stroke="#C9A962"
        strokeWidth={2}
        strokeDasharray="6,4"
      />
      <line
        x1={positions.main.x + mainRadius}
        y1={positions.main.y}
        x2={positions.wingRight.x - relatedRadius}
        y2={positions.wingRight.y}
        stroke="#C9A962"
        strokeWidth={2}
        strokeDasharray="6,4"
      />

      {/* Integration - green arrow up */}
      <defs>
        <marker id="arrow-green" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#7D9B84" />
        </marker>
        <marker id="arrow-red" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#C4785C" />
        </marker>
      </defs>
      <line
        x1={positions.main.x}
        y1={positions.main.y - mainRadius}
        x2={positions.integration.x}
        y2={positions.integration.y + relatedRadius + 10}
        stroke="#7D9B84"
        strokeWidth={2}
        markerEnd="url(#arrow-green)"
      />

      {/* Disintegration - red arrow down */}
      <line
        x1={positions.main.x}
        y1={positions.main.y + mainRadius}
        x2={positions.disintegration.x}
        y2={positions.disintegration.y - relatedRadius - 10}
        stroke="#C4785C"
        strokeWidth={2}
        markerEnd="url(#arrow-red)"
      />

      {/* Type nodes */}
      <TypeNode
        typeNum={integration?.movesTo as TypeNumber}
        x={positions.integration.x}
        y={positions.integration.y}
        radius={relatedRadius}
        nodeColor="#7D9B84"
        label="Growth"
      />
      <TypeNode
        typeNum={disintegration?.movesTo as TypeNumber}
        x={positions.disintegration.x}
        y={positions.disintegration.y}
        radius={relatedRadius}
        nodeColor="#C4785C"
        label="Stress"
      />
      <TypeNode
        typeNum={wingLeft}
        x={positions.wingLeft.x}
        y={positions.wingLeft.y}
        radius={relatedRadius}
        nodeColor="#C9A962"
        label="Wing"
      />
      <TypeNode
        typeNum={wingRight}
        x={positions.wingRight.x}
        y={positions.wingRight.y}
        radius={relatedRadius}
        nodeColor="#C9A962"
        label="Wing"
      />

      {/* Main type in center */}
      <TypeNode
        typeNum={selectedType}
        x={positions.main.x}
        y={positions.main.y}
        radius={mainRadius}
        nodeColor={color}
        isMain
      />

      {/* Legend */}
      <g transform={`translate(${width - 120}, ${height - 80})`}>
        <rect x={-10} y={-10} width={120} height={80} rx={8} fill="white" fillOpacity={0.9} className="dark:fill-gray-800" />
        <line x1={0} y1={10} x2={25} y2={10} stroke="#7D9B84" strokeWidth={2} markerEnd="url(#arrow-green)" />
        <text x={35} y={14} className="text-xs fill-charcoal-muted dark:fill-gray-400">Growth</text>
        <line x1={0} y1={30} x2={25} y2={30} stroke="#C4785C" strokeWidth={2} markerEnd="url(#arrow-red)" />
        <text x={35} y={34} className="text-xs fill-charcoal-muted dark:fill-gray-400">Stress</text>
        <line x1={0} y1={50} x2={25} y2={50} stroke="#C9A962" strokeWidth={2} strokeDasharray="6,4" />
        <text x={35} y={54} className="text-xs fill-charcoal-muted dark:fill-gray-400">Wings</text>
      </g>
    </svg>
  );
}
