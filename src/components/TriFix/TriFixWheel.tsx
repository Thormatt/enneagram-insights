import { useState, useEffect } from 'react';
import { getCenterColor } from '../../data/core/centers';
import { CENTERS } from '../../data/tritypes/tritypeDescriptions';
import type { TypeNumber, PrimaryCenter } from '../../types';

interface TriFixWheelProps {
  size?: number;
  onComplete: (gut: TypeNumber, heart: TypeNumber, head: TypeNumber, primaryCenter: PrimaryCenter, code: string) => void;
  selectedGut?: TypeNumber;
  selectedHeart?: TypeNumber;
  selectedHead?: TypeNumber;
  selectedPrimaryCenter?: PrimaryCenter;
}

export function TriFixWheel({
  size = 300,
  onComplete,
  selectedGut,
  selectedHeart,
  selectedHead,
  selectedPrimaryCenter
}: TriFixWheelProps) {
  const [activeCenter, setActiveCenter] = useState<PrimaryCenter>('gut');
  const [gut, setGut] = useState<TypeNumber | undefined>(selectedGut);
  const [heart, setHeart] = useState<TypeNumber | undefined>(selectedHeart);
  const [head, setHead] = useState<TypeNumber | undefined>(selectedHead);
  const [primaryCenter, setPrimaryCenter] = useState<PrimaryCenter>(selectedPrimaryCenter ?? 'gut');

  useEffect(() => {
    setGut(selectedGut);
  }, [selectedGut]);

  useEffect(() => {
    setHeart(selectedHeart);
  }, [selectedHeart]);

  useEffect(() => {
    setHead(selectedHead);
  }, [selectedHead]);

  useEffect(() => {
    setPrimaryCenter(selectedPrimaryCenter ?? 'gut');
  }, [selectedPrimaryCenter]);

  useEffect(() => {
    if (!gut) {
      setActiveCenter('gut');
      return;
    }
    if (!heart) {
      setActiveCenter('heart');
      return;
    }
    if (!head) {
      setActiveCenter('head');
    }
  }, [gut, heart, head]);

  const centerRadius = size * 0.35;
  const typeRadius = size * 0.12;
  const cx = size / 2;
  const cy = size / 2;

  const centers: Array<{ center: PrimaryCenter; label: string; startAngle: number }> = [
    { center: 'gut', label: 'Gut', startAngle: -90 },
    { center: 'heart', label: 'Heart', startAngle: 30 },
    { center: 'head', label: 'Head', startAngle: 150 }
  ];

  const getTypePosition = (centerIndex: number, typeIndex: number) => {
    const centerAngle = centers[centerIndex].startAngle;
    const spread = 30; // degrees between types in same center
    const typeAngle = centerAngle + (typeIndex - 1) * spread;
    const radians = (typeAngle * Math.PI) / 180;
    return {
      x: cx + centerRadius * Math.cos(radians),
      y: cy + centerRadius * Math.sin(radians)
    };
  };

  const handleTypeClick = (center: PrimaryCenter, type: TypeNumber) => {
    if (center === 'gut') {
      setGut(type);
      setActiveCenter('heart');
    } else if (center === 'heart') {
      setHeart(type);
      setActiveCenter('head');
    } else {
      setHead(type);
    }
  };

  const isSelected = (center: PrimaryCenter, type: TypeNumber) => {
    if (center === 'gut') return gut === type;
    if (center === 'heart') return heart === type;
    return head === type;
  };

  const isComplete = gut && heart && head;

  const getTritypeCode = () => {
    if (!gut || !heart || !head) return '';
    if (primaryCenter === 'gut') return `${gut}${heart}${head}`;
    if (primaryCenter === 'heart') return `${heart}${gut}${head}`;
    return `${head}${gut}${heart}`;
  };

  const tritypeCode = getTritypeCode();

  const handleComplete = () => {
    if (gut && heart && head) {
      onComplete(gut, heart, head, primaryCenter, tritypeCode);
    }
  };

  const reset = () => {
    setGut(undefined);
    setHeart(undefined);
    setHead(undefined);
    setActiveCenter('gut');
    setPrimaryCenter('gut');
  };

  const centerLabels: Record<PrimaryCenter, string> = {
    gut: 'Select your Gut type (8, 9, 1)',
    heart: 'Select your Heart type (2, 3, 4)',
    head: 'Select your Head type (5, 6, 7)'
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Progress indicator */}
      <div className="flex items-center gap-2 mb-2">
        {centers.map(({ center }) => (
          <div key={center} className="flex items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                (center === 'gut' && gut) || (center === 'heart' && heart) || (center === 'head' && head)
                  ? 'text-white'
                  : activeCenter === center
                    ? 'border-2 text-charcoal dark:text-white'
                    : 'bg-cream-100 dark:bg-gray-700 text-charcoal-muted dark:text-gray-500'
              }`}
              style={{
                backgroundColor:
                  (center === 'gut' && gut) || (center === 'heart' && heart) || (center === 'head' && head)
                    ? getCenterColor(center)
                    : undefined,
                borderColor: activeCenter === center ? getCenterColor(center) : undefined
              }}
            >
              {center === 'gut' && (gut || '?')}
              {center === 'heart' && (heart || '?')}
              {center === 'head' && (head || '?')}
            </div>
            {center !== 'head' && (
              <div className="w-4 h-0.5 bg-cream-200 dark:bg-gray-700 mx-1" />
            )}
          </div>
        ))}
      </div>

      {/* Instruction */}
      <p className="text-sm text-charcoal-muted dark:text-gray-400">
        {isComplete ? 'Choose your primary center to set the order.' : centerLabels[activeCenter]}
      </p>

      {/* SVG Wheel */}
      <svg width={size} height={size} className="overflow-visible">
        {/* Center circle */}
        <circle
          cx={cx}
          cy={cy}
          r={size * 0.15}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          className="text-warm-border dark:text-gray-700"
        />

        {/* Center segments */}
        {centers.map(({ center }, centerIndex) => {
          const types = CENTERS[center] as TypeNumber[];
          return types.map((type, typeIndex) => {
            const pos = getTypePosition(centerIndex, typeIndex);
            const selected = isSelected(center, type);
            const isActive = activeCenter === center;
            const color = getCenterColor(center);

            return (
              <g key={`${center}-${type}`}>
                {/* Connection line to center */}
                <line
                  x1={cx}
                  y1={cy}
                  x2={pos.x}
                  y2={pos.y}
                  stroke={selected ? color : 'currentColor'}
                  strokeWidth={selected ? 2 : 1}
                  className={selected ? '' : 'text-warm-border dark:text-gray-700'}
                  strokeOpacity={selected ? 1 : 0.3}
                />

                {/* Type circle */}
                <g
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleTypeClick(center, type)}
                  className="transition-transform duration-150 hover:scale-110 active:scale-95"
                >
                  <circle
                    cx={pos.x}
                    cy={pos.y}
                    r={typeRadius}
                    fill={selected ? color : 'white'}
                    stroke={color}
                    strokeWidth={isActive ? 3 : 2}
                    className="dark:fill-gray-800 transition-all duration-150"
                    style={{ fill: selected ? color : undefined }}
                  />
                  <text
                    x={pos.x}
                    y={pos.y}
                    textAnchor="middle"
                    dominantBaseline="central"
                    className={`text-lg font-bold ${
                      selected ? 'fill-white' : 'fill-charcoal dark:fill-white'
                    }`}
                    style={{ fill: selected ? 'white' : undefined }}
                  >
                    {type}
                  </text>
                </g>
              </g>
            );
          });
        })}

        {/* Center label */}
        <text
          x={cx}
          y={cy}
          textAnchor="middle"
          dominantBaseline="central"
          className="fill-charcoal dark:fill-white text-xs font-semibold uppercase"
        >
          {isComplete ? tritypeCode : activeCenter.toUpperCase()}
        </text>
      </svg>

      {/* Primary center selection */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        <span className="text-xs uppercase tracking-wide text-charcoal-muted dark:text-gray-500">
          Primary
        </span>
        {centers.map(({ center }) => (
          <button
            key={center}
            onClick={() => setPrimaryCenter(center)}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
              primaryCenter === center
                ? 'text-white shadow-warm'
                : 'bg-cream-100 dark:bg-gray-800 text-charcoal-light dark:text-gray-400 hover:bg-cream-200 dark:hover:bg-gray-700'
            }`}
            style={primaryCenter === center ? { backgroundColor: getCenterColor(center) } : undefined}
          >
            {center === 'gut' ? 'Gut-led' : center === 'heart' ? 'Heart-led' : 'Head-led'}
          </button>
        ))}
      </div>

      {/* Action buttons */}
      <div className="flex items-center gap-3">
        <button
          onClick={reset}
          className="px-4 py-2 text-sm font-medium text-charcoal-muted dark:text-gray-400 hover:text-charcoal dark:hover:text-white transition-colors"
        >
          Reset
        </button>
        {isComplete && (
          <button
            onClick={handleComplete}
            className="px-6 py-2 bg-terracotta-500 hover:bg-terracotta-600 text-white font-medium rounded-full shadow-warm transition-all duration-150"
          >
            Explore {tritypeCode}
          </button>
        )}
      </div>
    </div>
  );
}
