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

// Mobile breakpoint for responsive layouts
const MOBILE_BREAKPOINT = 480;

export function Diagrams({ width = 600, height = 500 }: DiagramsProps) {
  // Use selectors to prevent unnecessary re-renders
  const selectedType = useAppStore((state) => state.selectedType);
  const selectType = useAppStore((state) => state.selectType);
  const diagramType = useAppStore((state) => state.diagramType);

  // Determine if we're in mobile layout based on width
  const isMobile = width < MOBILE_BREAKPOINT;

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      {/* Diagram Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={diagramType}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.1 }}
          className="w-full flex justify-center"
        >
          {diagramType === 'centers' && (
            <CentersDiagram
              width={width}
              height={height}
              selectedType={selectedType}
              onSelectType={selectType}
              isMobile={isMobile}
            />
          )}
          {diagramType === 'triads' && (
            <TriadsDiagram
              width={width}
              height={height}
              selectedType={selectedType}
              onSelectType={selectType}
              isMobile={isMobile}
            />
          )}
          {diagramType === 'relationships' && (
            <RelationshipsDiagram
              width={width}
              height={height}
              selectedType={selectedType}
              onSelectType={selectType}
              isMobile={isMobile}
            />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// Centers Diagram - Gut, Heart, Head (horizontal on desktop, vertical on mobile)
function CentersDiagram({
  width,
  height,
  selectedType,
  onSelectType,
  isMobile
}: {
  width: number;
  height: number;
  selectedType: TypeNumber | null;
  onSelectType: (type: TypeNumber | null) => void;
  isMobile: boolean;
}) {
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

  // Mobile layout: vertical stacked cards with horizontal type nodes
  if (isMobile) {
    const cardHeight = 100;
    const cardGap = 12;
    const padding = 16;
    const cardWidth = width - padding * 2;
    const mobileHeight = centers.length * (cardHeight + cardGap) + padding * 2;
    const nodeRadius = 22; // Minimum 44px touch target

    return (
      <svg width={width} height={mobileHeight} className="overflow-visible">
        {centers.map((center, centerIndex) => {
          const cardY = padding + centerIndex * (cardHeight + cardGap);

          return (
            <g key={center.key}>
              {/* Background card */}
              <rect
                x={padding}
                y={cardY}
                width={cardWidth}
                height={cardHeight}
                rx={12}
                fill={center.color}
                fillOpacity={0.1}
                stroke={center.color}
                strokeWidth={2}
                strokeOpacity={0.4}
              />

              {/* Center label and emotion - left side */}
              <text
                x={padding + 12}
                y={cardY + 24}
                className="font-serif text-sm font-semibold fill-charcoal dark:fill-white"
              >
                {center.label}
              </text>
              <text
                x={padding + 12}
                y={cardY + 42}
                className="text-xs fill-charcoal-muted dark:fill-gray-400"
              >
                {center.coreEmotion}
              </text>

              {/* Type nodes - horizontal row on right */}
              {center.types.map((typeNum, i) => {
                const nodeX = cardWidth - 30 - i * 56;
                const nodeY = cardY + cardHeight / 2;
                const isSelected = selectedType === typeNum;

                return (
                  <g
                    key={typeNum}
                    onClick={() => onSelectType(typeNum)}
                    className="cursor-pointer"
                    role="button"
                    tabIndex={0}
                    aria-label={`Select Type ${typeNum}`}
                  >
                    <circle
                      cx={nodeX}
                      cy={nodeY}
                      r={isSelected ? nodeRadius + 2 : nodeRadius}
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
                      className={`font-serif font-bold text-lg ${
                        isSelected ? 'fill-white' : 'fill-charcoal dark:fill-white'
                      }`}
                    >
                      {typeNum}
                    </text>
                  </g>
                );
              })}
            </g>
          );
        })}
      </svg>
    );
  }

  // Desktop layout: horizontal columns
  const padding = 40;
  const boxWidth = (width - padding * 4) / 3;
  const boxHeight = height - padding * 2;

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
                  role="button"
                  tabIndex={0}
                  aria-label={`Select Type ${typeNum}`}
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
  onSelectType,
  isMobile
}: {
  width: number;
  height: number;
  selectedType: TypeNumber | null;
  onSelectType: (type: TypeNumber | null) => void;
  isMobile: boolean;
}) {
  const [triadType, setTriadType] = useState<'harmonic' | 'hornevian' | 'object'>('harmonic');

  const triads = {
    harmonic: {
      groups: [
        { name: 'Positive Outlook', types: [2, 7, 9] as TypeNumber[], color: '#7D9B84', description: 'Reframe positively' },
        { name: 'Competency', types: [1, 3, 5] as TypeNumber[], color: '#C9A962', description: 'Solve objectively' },
        { name: 'Reactive', types: [4, 6, 8] as TypeNumber[], color: '#C4785C', description: 'React emotionally' },
      ]
    },
    hornevian: {
      groups: [
        { name: 'Assertive', types: [3, 7, 8] as TypeNumber[], color: '#C4785C', description: 'Move against' },
        { name: 'Compliant', types: [1, 2, 6] as TypeNumber[], color: '#7D9B84', description: 'Move toward' },
        { name: 'Withdrawn', types: [4, 5, 9] as TypeNumber[], color: '#6B7B8A', description: 'Move away' },
      ]
    },
    object: {
      groups: [
        { name: 'Attachment', types: [3, 6, 9] as TypeNumber[], color: '#C9A962', description: 'Attachment issues' },
        { name: 'Frustration', types: [1, 4, 7] as TypeNumber[], color: '#C4785C', description: 'Environmental' },
        { name: 'Rejection', types: [2, 5, 8] as TypeNumber[], color: '#6B7B8A', description: 'Nurturing' },
      ]
    }
  };

  const currentTriad = triads[triadType];

  // Mobile layout: vertical cards with horizontal type nodes
  if (isMobile) {
    const cardHeight = 90;
    const cardGap = 10;
    const padding = 12;
    const cardWidth = width - padding * 2;
    const nodeRadius = 22; // Minimum 44px touch target

    return (
      <div className="flex flex-col items-center gap-3 w-full">
        {/* Triad Type Selector - mobile optimized with larger touch targets */}
        <div className="flex gap-1.5 w-full px-3">
          {[
            { id: 'harmonic', label: 'Harmonic' },
            { id: 'hornevian', label: 'Hornevian' },
            { id: 'object', label: 'Object' },
          ].map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setTriadType(id as typeof triadType)}
              className={`flex-1 min-h-[44px] px-2 py-2.5 text-xs font-medium rounded-lg transition-colors ${
                triadType === id
                  ? 'bg-terracotta-500 text-white'
                  : 'bg-cream-200 dark:bg-gray-700 text-charcoal-muted dark:text-gray-400 active:bg-cream-300 dark:active:bg-gray-600'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Triad Groups */}
        <svg width={width} height={currentTriad.groups.length * (cardHeight + cardGap) + padding}>
          {currentTriad.groups.map((group, groupIndex) => {
            const cardY = padding + groupIndex * (cardHeight + cardGap);

            return (
              <g key={group.name}>
                {/* Group background */}
                <rect
                  x={padding}
                  y={cardY}
                  width={cardWidth}
                  height={cardHeight}
                  rx={12}
                  fill={group.color}
                  fillOpacity={0.1}
                  stroke={group.color}
                  strokeWidth={2}
                  strokeOpacity={0.3}
                />

                {/* Group name and description - left side */}
                <text
                  x={padding + 12}
                  y={cardY + 24}
                  className="font-serif font-semibold text-sm fill-charcoal dark:fill-white"
                >
                  {group.name}
                </text>
                <text
                  x={padding + 12}
                  y={cardY + 42}
                  className="text-xs fill-charcoal-muted dark:fill-gray-400"
                >
                  {group.description}
                </text>

                {/* Type nodes - horizontal row on right */}
                {group.types.map((typeNum, i) => {
                  const nodeX = cardWidth - 26 - i * 52;
                  const nodeY = cardY + cardHeight / 2;
                  const isSelected = selectedType === typeNum;

                  return (
                    <g
                      key={typeNum}
                      onClick={() => onSelectType(typeNum)}
                      className="cursor-pointer"
                      role="button"
                      tabIndex={0}
                      aria-label={`Select Type ${typeNum}`}
                    >
                      <circle
                        cx={nodeX}
                        cy={nodeY}
                        r={isSelected ? nodeRadius + 2 : nodeRadius}
                        fill={isSelected ? group.color : 'white'}
                        stroke={group.color}
                        strokeWidth={isSelected ? 3 : 2}
                        className="dark:fill-gray-800 transition-all duration-200"
                      />
                      <text
                        x={nodeX}
                        y={nodeY + 1}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className={`font-serif font-bold text-lg ${
                          isSelected ? 'fill-white' : 'fill-charcoal dark:fill-white'
                        }`}
                      >
                        {typeNum}
                      </text>
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

  // Desktop layout: horizontal columns
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
            className={`px-4 py-2 min-h-[44px] text-sm font-medium rounded-lg transition-colors ${
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
                    role="button"
                    tabIndex={0}
                    aria-label={`Select Type ${typeNum}`}
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
  onSelectType,
  isMobile
}: {
  width: number;
  height: number;
  selectedType: TypeNumber | null;
  onSelectType: (type: TypeNumber | null) => void;
  isMobile: boolean;
}) {
  const centerX = width / 2;
  const centerY = height / 2;

  // Type selector when no type is selected
  if (!selectedType) {
    return (
      <div
        className="flex items-center justify-center bg-cream-100 dark:bg-gray-800 rounded-2xl border-2 border-dashed border-warm-border dark:border-gray-600"
        style={{ width, height: isMobile ? 280 : height }}
      >
        <div className="text-center p-4 sm:p-8">
          <p className="text-charcoal-muted dark:text-gray-400 mb-4 text-sm sm:text-base">
            Select a type to see its relationships
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {([1, 2, 3, 4, 5, 6, 7, 8, 9] as TypeNumber[]).map(num => (
              <button
                key={num}
                onClick={() => onSelectType(num)}
                className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-cream-200 dark:bg-gray-700 hover:bg-terracotta-100 dark:hover:bg-terracotta-900/30 active:bg-terracotta-200 text-charcoal dark:text-white font-serif font-bold transition-colors"
                aria-label={`Select Type ${num}`}
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

  // Mobile layout: compact vertical arrangement
  if (isMobile) {
    const mobileHeight = 380;
    const mainRadius = 32;
    const relatedRadius = 24; // 48px diameter - meets 44px touch target
    const verticalSpacing = 80;
    const horizontalSpacing = 70;
    const mobileCenterY = mobileHeight / 2 + 20;

    const mobilePositions = {
      main: { x: centerX, y: mobileCenterY },
      wingLeft: { x: centerX - horizontalSpacing, y: mobileCenterY },
      wingRight: { x: centerX + horizontalSpacing, y: mobileCenterY },
      integration: { x: centerX, y: mobileCenterY - verticalSpacing },
      disintegration: { x: centerX, y: mobileCenterY + verticalSpacing },
    };

    // Helper to render mobile type nodes inline
    const renderMobileNode = (
      typeNum: TypeNumber,
      x: number,
      y: number,
      radius: number,
      nodeColor: string,
      label?: string,
      isMain = false
    ) => (
      <g
        key={`node-${typeNum}-${label || 'main'}`}
        onClick={() => !isMain && onSelectType(typeNum)}
        className={isMain ? '' : 'cursor-pointer'}
        role={isMain ? undefined : 'button'}
        tabIndex={isMain ? undefined : 0}
        aria-label={isMain ? undefined : `Select Type ${typeNum}`}
      >
        <circle
          cx={x}
          cy={y}
          r={radius}
          fill={isMain ? nodeColor : 'white'}
          stroke={nodeColor}
          strokeWidth={isMain ? 3 : 2}
          className="dark:fill-gray-800"
        />
        <text
          x={x}
          y={y + 1}
          textAnchor="middle"
          dominantBaseline="middle"
          className={`font-serif font-bold ${isMain ? 'text-xl fill-white' : 'text-base fill-charcoal dark:fill-white'}`}
        >
          {typeNum}
        </text>
        {label && (
          <text
            x={x}
            y={y + radius + 14}
            textAnchor="middle"
            className="text-xs font-medium fill-charcoal-muted dark:fill-gray-400"
          >
            {label}
          </text>
        )}
      </g>
    );

    return (
      <div className="flex flex-col items-center gap-2 w-full">
        <svg width={width} height={mobileHeight} className="overflow-visible">
          {/* Arrow markers */}
          <defs>
            <marker id="arrow-green-mobile" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
              <path d="M0,0 L0,6 L8,3 z" fill="#7D9B84" />
            </marker>
            <marker id="arrow-red-mobile" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
              <path d="M0,0 L0,6 L8,3 z" fill="#C4785C" />
            </marker>
          </defs>

          {/* Connection lines */}
          {/* Wings - dashed lines */}
          <line
            x1={mobilePositions.main.x - mainRadius}
            y1={mobilePositions.main.y}
            x2={mobilePositions.wingLeft.x + relatedRadius}
            y2={mobilePositions.wingLeft.y}
            stroke="#C9A962"
            strokeWidth={2}
            strokeDasharray="4,3"
          />
          <line
            x1={mobilePositions.main.x + mainRadius}
            y1={mobilePositions.main.y}
            x2={mobilePositions.wingRight.x - relatedRadius}
            y2={mobilePositions.wingRight.y}
            stroke="#C9A962"
            strokeWidth={2}
            strokeDasharray="4,3"
          />

          {/* Integration arrow */}
          <line
            x1={mobilePositions.main.x}
            y1={mobilePositions.main.y - mainRadius}
            x2={mobilePositions.integration.x}
            y2={mobilePositions.integration.y + relatedRadius + 8}
            stroke="#7D9B84"
            strokeWidth={2}
            markerEnd="url(#arrow-green-mobile)"
          />

          {/* Disintegration arrow */}
          <line
            x1={mobilePositions.main.x}
            y1={mobilePositions.main.y + mainRadius}
            x2={mobilePositions.disintegration.x}
            y2={mobilePositions.disintegration.y - relatedRadius - 8}
            stroke="#C4785C"
            strokeWidth={2}
            markerEnd="url(#arrow-red-mobile)"
          />

          {/* Type nodes */}
          {renderMobileNode(
            integration?.movesTo as TypeNumber,
            mobilePositions.integration.x,
            mobilePositions.integration.y,
            relatedRadius,
            '#7D9B84',
            'Growth'
          )}
          {renderMobileNode(
            disintegration?.movesTo as TypeNumber,
            mobilePositions.disintegration.x,
            mobilePositions.disintegration.y,
            relatedRadius,
            '#C4785C',
            'Stress'
          )}
          {renderMobileNode(
            wingLeft,
            mobilePositions.wingLeft.x,
            mobilePositions.wingLeft.y,
            relatedRadius,
            '#C9A962',
            'Wing'
          )}
          {renderMobileNode(
            wingRight,
            mobilePositions.wingRight.x,
            mobilePositions.wingRight.y,
            relatedRadius,
            '#C9A962',
            'Wing'
          )}

          {/* Main type in center */}
          {renderMobileNode(
            selectedType,
            mobilePositions.main.x,
            mobilePositions.main.y,
            mainRadius,
            color,
            undefined,
            true
          )}
        </svg>

        {/* Mobile legend - horizontal below diagram */}
        <div className="flex justify-center gap-4 text-xs text-charcoal-muted dark:text-gray-400 px-4">
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-0.5 bg-sage-500" />
            <span>Growth</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-0.5 bg-terracotta-500" />
            <span>Stress</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-0.5 border-t-2 border-dashed border-gold-500" />
            <span>Wings</span>
          </div>
        </div>
      </div>
    );
  }

  // Desktop layout
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

  // Helper to render type nodes inline (avoids component-in-render warning)
  const renderTypeNode = (
    typeNum: TypeNumber,
    x: number,
    y: number,
    radius: number,
    nodeColor: string,
    label?: string,
    isMain = false
  ) => {
    const nodeType = enneagramTypes.find(t => t.number === typeNum);
    return (
      <g
        key={`node-${typeNum}-${label || 'main'}`}
        onClick={() => !isMain && onSelectType(typeNum)}
        className={isMain ? '' : 'cursor-pointer'}
        role={isMain ? undefined : 'button'}
        tabIndex={isMain ? undefined : 0}
        aria-label={isMain ? undefined : `Select Type ${typeNum}`}
      >
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
      {renderTypeNode(
        integration?.movesTo as TypeNumber,
        positions.integration.x,
        positions.integration.y,
        relatedRadius,
        '#7D9B84',
        'Growth'
      )}
      {renderTypeNode(
        disintegration?.movesTo as TypeNumber,
        positions.disintegration.x,
        positions.disintegration.y,
        relatedRadius,
        '#C4785C',
        'Stress'
      )}
      {renderTypeNode(
        wingLeft,
        positions.wingLeft.x,
        positions.wingLeft.y,
        relatedRadius,
        '#C9A962',
        'Wing'
      )}
      {renderTypeNode(
        wingRight,
        positions.wingRight.x,
        positions.wingRight.y,
        relatedRadius,
        '#C9A962',
        'Wing'
      )}

      {/* Main type in center */}
      {renderTypeNode(
        selectedType,
        positions.main.x,
        positions.main.y,
        mainRadius,
        color,
        undefined,
        true
      )}

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
