import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  getTypeByNumber,
  getCenterColor,
  getSubtypesByType,
  getInstinctByCode
} from '../../data';
import { useAppStore } from '../../stores';
import type { TypeNumber, InstinctType } from '../../types';

interface SubtypeSelectorProps {
  typeNumber: TypeNumber;
  isOpen: boolean;
  onClose: () => void;
}

// Warm Editorial instinct colors
const instinctColors: Record<InstinctType, string> = {
  sp: '#C9A962', // Gold - self-preservation
  so: '#7D9B84', // Sage - social
  sx: '#C4785C'  // Terracotta - sexual/one-to-one
};

const instinctIcons: Record<InstinctType, React.ReactNode> = {
  sp: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  so: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  sx: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  )
};

export function SubtypeSelector({ typeNumber, isOpen, onClose }: SubtypeSelectorProps) {
  const [selectedInstinct, setSelectedInstinct] = useState<InstinctType>('sp');
  const selectSubtype = useAppStore((state) => state.selectSubtype);

  const type = getTypeByNumber(typeNumber);
  const subtypes = getSubtypesByType(typeNumber);
  const centerColor = type ? getCenterColor(type.center) : '#6b7280';

  const instincts: InstinctType[] = ['sp', 'so', 'sx'];
  const selectedSubtype = subtypes.find(s => s.instinct === selectedInstinct);

  const handleInstinctSelect = (instinct: InstinctType) => {
    setSelectedInstinct(instinct);
    selectSubtype(instinct);
  };

  if (!type) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-x-4 top-4 bottom-4 max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div
              className="p-6 text-white flex-shrink-0"
              style={{ backgroundColor: centerColor }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-bold opacity-90">{typeNumber}</span>
                  <div>
                    <h2 className="text-xl font-bold">{type.name} Subtypes</h2>
                    <p className="text-white/80 text-sm mt-1">Select an instinct to explore</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                  aria-label="Close subtype selector"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Instinct Tabs */}
            <div className="flex border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
              {instincts.map(instinct => {
                const info = getInstinctByCode(instinct);
                const isSelected = selectedInstinct === instinct;
                const color = instinctColors[instinct];

                return (
                  <button
                    key={instinct}
                    onClick={() => handleInstinctSelect(instinct)}
                    aria-label={`Select ${info?.fullName || instinct.toUpperCase()} instinct`}
                    aria-pressed={isSelected}
                    className={`flex-1 py-4 px-4 flex flex-col items-center gap-2 transition-all ${
                      isSelected ? 'bg-gray-50 dark:bg-gray-700' : 'hover:bg-gray-50 dark:hover:bg-gray-700'
                    }`}
                    style={{
                      borderBottom: isSelected ? `3px solid ${color}` : '3px solid transparent'
                    }}
                  >
                    <div
                      className={`p-2 rounded-full transition-colors ${
                        isSelected ? 'text-white' : 'text-gray-600 dark:text-gray-400'
                      }`}
                      style={{ backgroundColor: isSelected ? color : 'transparent' }}
                    >
                      {instinctIcons[instinct]}
                    </div>
                    <div className="text-center">
                      <div
                        className="font-semibold text-sm"
                        style={{ color: isSelected ? color : undefined }}
                      >
                        <span className={isSelected ? '' : 'text-gray-700 dark:text-gray-200'}>
                          {info?.fullName || instinct.toUpperCase()}
                        </span>
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {instinct.toUpperCase()}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Subtype Content */}
            <AnimatePresence mode="wait">
              {selectedSubtype && (
                <motion.div
                  key={selectedInstinct}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="p-6 flex-1 overflow-y-auto"
                >
                  {/* Subtype Title */}
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className="px-3 py-1 rounded-full text-white text-sm font-medium"
                        style={{ backgroundColor: instinctColors[selectedInstinct] }}
                      >
                        {selectedInstinct.toUpperCase()}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{selectedSubtype.name}</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 italic text-sm">
                      Ichazo Title: {selectedSubtype.ichazoTitle}
                    </p>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                      {selectedSubtype.description}
                    </p>
                  </div>

                  {/* Characteristics */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      Key Characteristics
                    </h4>
                    <ul className="space-y-2">
                      {selectedSubtype.characteristics.map((char, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                          <span
                            className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                            style={{ backgroundColor: instinctColors[selectedInstinct] }}
                          />
                          {char}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Blind Spots */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      Blind Spots
                    </h4>
                    <ul className="space-y-2">
                      {selectedSubtype.blindSpots.map((spot, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                          <span className="w-2 h-2 rounded-full mt-2 flex-shrink-0 bg-amber-500" />
                          {spot}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Growth Path */}
                  <div className="p-4 bg-sage-50 dark:bg-sage-900/30 rounded-lg border border-sage-200 dark:border-sage-700">
                    <h4 className="font-semibold text-sage-800 dark:text-sage-300 mb-2 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      Growth Path
                    </h4>
                    <p className="text-sage-700 dark:text-sage-400">{selectedSubtype.growthPath}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
