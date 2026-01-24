import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  getAllTypes,
  getTypeByNumber,
  getCenterColor,
  getHarmonicGroupByType,
  getHornevianGroupByType,
  getObjectRelationsByType,
  getIntegrationPath,
  calculateCompatibilityScore,
  compatibilityData
} from '../../data';
import type { TypeNumber } from '../../types';

interface ComparisonExplorerProps {
  initialType1?: TypeNumber;
  initialType2?: TypeNumber;
  onClose?: () => void;
}

export function ComparisonExplorer({
  initialType1,
  initialType2,
  onClose
}: ComparisonExplorerProps) {
  const [type1, setType1] = useState<TypeNumber | null>(initialType1 || null);
  const [type2, setType2] = useState<TypeNumber | null>(initialType2 || null);

  const allTypes = getAllTypes();
  const typeData1 = type1 ? getTypeByNumber(type1) : null;
  const typeData2 = type2 ? getTypeByNumber(type2) : null;

  const compatibility = type1 && type2 ? calculateCompatibilityScore(type1, type2) : null;
  const pairingData = type1 && type2
    ? compatibilityData.find(
        c => (c.type1 === type1 && c.type2 === type2) || (c.type1 === type2 && c.type2 === type1)
      )
    : null;

  // Get group information
  const harmonic1 = type1 ? getHarmonicGroupByType(type1) : null;
  const harmonic2 = type2 ? getHarmonicGroupByType(type2) : null;
  const hornevian1 = type1 ? getHornevianGroupByType(type1) : null;
  const hornevian2 = type2 ? getHornevianGroupByType(type2) : null;
  const objectRel1 = type1 ? getObjectRelationsByType(type1) : null;
  const objectRel2 = type2 ? getObjectRelationsByType(type2) : null;

  // Check integration/disintegration connection
  const integration1 = type1 ? getIntegrationPath(type1) : null;
  const integration2 = type2 ? getIntegrationPath(type2) : null;
  const isIntegrationPartner =
    (type1 && integration2?.movesTo === type1) ||
    (type2 && integration1?.movesTo === type2);

  const getScoreColor = (score: number): string => {
    if (score >= 8) return 'text-green-600';
    if (score >= 6) return 'text-yellow-600';
    if (score >= 4) return 'text-orange-600';
    return 'text-red-600';
  };

  const getScoreLabel = (score: number): string => {
    if (score >= 9) return 'Excellent';
    if (score >= 7) return 'Good';
    if (score >= 5) return 'Moderate';
    if (score >= 3) return 'Challenging';
    return 'Difficult';
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-4 sm:p-6 text-white">
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-bold">Type Compatibility Explorer</h2>
          {onClose && (
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
        <p className="text-white/80 mt-1 text-sm sm:text-base">Compare two types to understand their dynamics</p>
      </div>

      {/* Type Selectors */}
      <div className="p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <TypeSelector
            label="First Type"
            value={type1}
            onChange={setType1}
            types={allTypes}
            excludeType={type2}
          />
          <TypeSelector
            label="Second Type"
            value={type2}
            onChange={setType2}
            types={allTypes}
            excludeType={type1}
          />
        </div>
      </div>

      {/* Comparison Content */}
      <AnimatePresence mode="wait">
        {typeData1 && typeData2 && compatibility !== null && (
          <motion.div
            key={`${type1}-${type2}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="p-4 sm:p-6"
          >
            {/* Compatibility Score */}
            <div className="text-center mb-6 sm:mb-8">
              <div className={`text-5xl sm:text-6xl font-bold ${getScoreColor(compatibility)}`}>
                {compatibility.toFixed(1)}
              </div>
              <div className="text-base sm:text-lg font-medium text-gray-600 dark:text-gray-400 mt-1">
                {getScoreLabel(compatibility)} Compatibility
              </div>
              {isIntegrationPartner && (
                <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-sm">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  Growth Partners (Integration Line)
                </div>
              )}
            </div>

            {/* Type Cards Side by Side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <TypeComparisonCard type={typeData1} color={getCenterColor(typeData1.center)} />
              <TypeComparisonCard type={typeData2} color={getCenterColor(typeData2.center)} />
            </div>

            {/* Group Comparison */}
            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 sm:p-6 mb-6 sm:mb-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Group Analysis</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <GroupComparisonRow
                  label="Harmonic"
                  value1={harmonic1?.displayName || '-'}
                  value2={harmonic2?.displayName || '-'}
                  match={harmonic1?.name === harmonic2?.name}
                />
                <GroupComparisonRow
                  label="Hornevian"
                  value1={hornevian1?.displayName || '-'}
                  value2={hornevian2?.displayName || '-'}
                  match={hornevian1?.name === hornevian2?.name}
                />
                <GroupComparisonRow
                  label="Object Relations"
                  value1={objectRel1?.displayName || '-'}
                  value2={objectRel2?.displayName || '-'}
                  match={objectRel1?.name === objectRel2?.name}
                />
              </div>
            </div>

            {/* Pairing Insights */}
            {pairingData && (
              <div className="space-y-4 sm:space-y-6">
                {/* Strengths */}
                <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-semibold text-green-800 dark:text-green-400 mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    Strengths of This Pairing
                  </h3>
                  <ul className="space-y-2">
                    {pairingData.strengths.map((point: string, i: number) => (
                      <li key={i} className="flex items-start gap-2 text-green-700 dark:text-green-300 text-sm sm:text-base">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 dark:bg-green-400 mt-2 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Challenges */}
                <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-semibold text-orange-800 dark:text-orange-400 mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    Potential Challenges
                  </h3>
                  <ul className="space-y-2">
                    {pairingData.challenges.map((point: string, i: number) => (
                      <li key={i} className="flex items-start gap-2 text-orange-700 dark:text-orange-300 text-sm sm:text-base">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 dark:bg-orange-400 mt-2 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Growth Opportunities */}
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-semibold text-blue-800 dark:text-blue-400 mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Growth Opportunities
                  </h3>
                  <ul className="space-y-2">
                    {pairingData.growthOpportunities.map((point: string, i: number) => (
                      <li key={i} className="flex items-start gap-2 text-blue-700 dark:text-blue-300 text-sm sm:text-base">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 mt-2 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Communication Tips */}
                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-semibold text-purple-800 dark:text-purple-400 mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Communication Tips
                  </h3>
                  <ul className="space-y-2">
                    {pairingData.communicationTips.map((tip: string, i: number) => (
                      <li key={i} className="flex items-start gap-2 text-purple-700 dark:text-purple-300 text-sm sm:text-base">
                        <span className="text-purple-500 dark:text-purple-400 mt-1">{i + 1}.</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* No pairing data fallback */}
            {!pairingData && (
              <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                <p>Detailed pairing insights coming soon for this combination.</p>
                <p className="text-sm mt-1">The compatibility score is based on group alignments and integration patterns.</p>
              </div>
            )}
          </motion.div>
        )}

        {/* Empty state */}
        {(!type1 || !type2) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-8 sm:p-12 text-center text-gray-500 dark:text-gray-400"
          >
            <svg className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 text-gray-300 dark:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <p className="text-base sm:text-lg">Select two types to compare</p>
            <p className="text-sm mt-1">Discover compatibility, growth opportunities, and communication tips</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Type Selector Component
interface TypeSelectorProps {
  label: string;
  value: TypeNumber | null;
  onChange: (type: TypeNumber | null) => void;
  types: { number: TypeNumber; name: string; center: 'gut' | 'heart' | 'head' }[];
  excludeType: TypeNumber | null;
}

function TypeSelector({ label, value, onChange, types, excludeType }: TypeSelectorProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{label}</label>
      <div className="grid grid-cols-3 gap-2">
        {types.map(type => {
          const isExcluded = type.number === excludeType;
          const isSelected = type.number === value;
          const color = getCenterColor(type.center);

          return (
            <button
              key={type.number}
              onClick={() => !isExcluded && onChange(isSelected ? null : type.number)}
              disabled={isExcluded}
              className={`
                p-3 sm:p-2 rounded-lg text-center transition-all min-h-[52px]
                ${isExcluded ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer hover:scale-105'}
                ${isSelected ? 'ring-2 ring-offset-2 dark:ring-offset-gray-800 shadow-md' : 'hover:shadow'}
              `}
              style={{
                backgroundColor: isSelected ? color : `${color}20`,
                color: isSelected ? 'white' : color,
                outlineColor: isSelected ? color : undefined
              }}
            >
              <div className="text-lg font-bold">{type.number}</div>
              <div className="text-xs truncate">{type.name.replace('The ', '')}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// Type Comparison Card
interface TypeComparisonCardProps {
  type: { number: TypeNumber; name: string; coreFear: string; coreDesire: string };
  color: string;
}

function TypeComparisonCard({ type, color }: TypeComparisonCardProps) {
  return (
    <div className="rounded-xl overflow-hidden shadow-md">
      <div className="p-3 sm:p-4 text-white" style={{ backgroundColor: color }}>
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="text-2xl sm:text-3xl font-bold">{type.number}</span>
          <span className="text-base sm:text-lg font-medium">{type.name}</span>
        </div>
      </div>
      <div className="p-3 sm:p-4 bg-white dark:bg-gray-700">
        <div className="mb-3">
          <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">Core Fear</span>
          <p className="text-sm text-gray-700 dark:text-gray-300">{type.coreFear}</p>
        </div>
        <div>
          <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">Core Desire</span>
          <p className="text-sm text-gray-700 dark:text-gray-300">{type.coreDesire}</p>
        </div>
      </div>
    </div>
  );
}

// Group Comparison Row
interface GroupComparisonRowProps {
  label: string;
  value1: string;
  value2: string;
  match: boolean;
}

function GroupComparisonRow({ label, value1, value2, match }: GroupComparisonRowProps) {
  return (
    <div className="text-center p-2 sm:p-0">
      <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2">{label}</div>
      <div className="flex items-center justify-center gap-2 flex-wrap">
        <span className="text-sm text-gray-700 dark:text-gray-300">{value1}</span>
        <span className={match ? 'text-green-500 dark:text-green-400' : 'text-gray-400 dark:text-gray-500'}>
          {match ? '=' : '≠'}
        </span>
        <span className="text-sm text-gray-700 dark:text-gray-300">{value2}</span>
      </div>
      {match && (
        <span className="text-xs text-green-600 dark:text-green-400">Same group</span>
      )}
    </div>
  );
}
