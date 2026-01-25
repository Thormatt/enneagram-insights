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
import { getRelationshipStory } from '../../data/stories';
import type { TypeNumber, InstinctType } from '../../types';

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
  const [selectedInstinct, setSelectedInstinct] = useState<InstinctType>('sp');

  const allTypes = getAllTypes();
  const typeData1 = type1 ? getTypeByNumber(type1) : null;
  const typeData2 = type2 ? getTypeByNumber(type2) : null;

  const compatibility = type1 && type2 ? calculateCompatibilityScore(type1, type2) : null;
  const pairingData = type1 && type2
    ? compatibilityData.find(
        c => (c.type1 === type1 && c.type2 === type2) || (c.type1 === type2 && c.type2 === type1)
      )
    : null;
  const relationshipStory = type1 && type2 ? getRelationshipStory(type1, type2) : null;

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
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-warm overflow-hidden border border-warm-border dark:border-gray-700">
      {/* Header */}
      <div className="bg-charcoal dark:bg-gray-900 p-4 sm:p-6 text-white">
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-serif font-bold">Compare Types</h2>
          {onClose && (
            <button
              onClick={onClose}
              className="p-2 hover:bg-charcoal-light/30 rounded-xl transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
        <p className="text-cream-300 mt-1 text-sm sm:text-base">Understand the dynamics between two types</p>
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

            {/* Relationship Story */}
            {relationshipStory && (
              <div className="mb-8 bg-cream-100 dark:bg-gray-750 rounded-2xl overflow-hidden border border-warm-border dark:border-gray-600">
                {/* Story Header */}
                <div className="p-6 bg-gradient-to-r from-charcoal to-charcoal-light text-white">
                  <h3 className="text-2xl font-serif font-bold">{relationshipStory.title}</h3>
                  <p className="text-cream-300 italic mt-1">{relationshipStory.subtitle}</p>
                </div>

                {/* Story Narrative */}
                <div className="p-6">
                  <div className="prose prose-warm dark:prose-invert max-w-none">
                    {relationshipStory.narrative.split('\n\n').map((paragraph, i) => (
                      <p key={i} className="text-charcoal-light dark:text-cream-200 leading-relaxed mb-4 last:mb-0">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Subtype Variations */}
                <div className="p-6 border-t border-warm-border dark:border-gray-600">
                  <h4 className="text-lg font-serif font-semibold text-charcoal dark:text-cream-100 mb-4 flex items-center gap-2">
                    <span>How Instincts Shape This Dynamic</span>
                  </h4>

                  {/* Instinct Selector */}
                  <div className="flex gap-2 mb-4">
                    {(['sp', 'so', 'sx'] as InstinctType[]).map((instinct) => {
                      const colors = {
                        sp: { bg: 'bg-amber-500', light: 'bg-amber-100 dark:bg-amber-900/30', text: 'text-amber-700 dark:text-amber-300' },
                        so: { bg: 'bg-violet-500', light: 'bg-violet-100 dark:bg-violet-900/30', text: 'text-violet-700 dark:text-violet-300' },
                        sx: { bg: 'bg-pink-500', light: 'bg-pink-100 dark:bg-pink-900/30', text: 'text-pink-700 dark:text-pink-300' }
                      };
                      const labels = { sp: 'Self-Preservation', so: 'Social', sx: 'Sexual' };
                      const isSelected = selectedInstinct === instinct;

                      return (
                        <button
                          key={instinct}
                          onClick={() => setSelectedInstinct(instinct)}
                          className={`
                            px-4 py-2 rounded-lg font-medium text-sm transition-all
                            ${isSelected
                              ? `${colors[instinct].bg} text-white shadow-md`
                              : `${colors[instinct].light} ${colors[instinct].text} hover:shadow`
                            }
                          `}
                        >
                          {labels[instinct]}
                        </button>
                      );
                    })}
                  </div>

                  {/* Selected Subtype Content */}
                  {relationshipStory.subtypeVariations.find(v => v.instinct === selectedInstinct) && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white dark:bg-gray-700 rounded-xl p-4 shadow-sm">
                        <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2">
                          Type {type1}
                        </div>
                        <p className="text-sm text-charcoal-light dark:text-cream-200">
                          {relationshipStory.subtypeVariations.find(v => v.instinct === selectedInstinct)?.forType1}
                        </p>
                      </div>
                      <div className="bg-white dark:bg-gray-700 rounded-xl p-4 shadow-sm">
                        <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2">
                          Type {type2}
                        </div>
                        <p className="text-sm text-charcoal-light dark:text-cream-200">
                          {relationshipStory.subtypeVariations.find(v => v.instinct === selectedInstinct)?.forType2}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Growth Moment */}
                <div className="p-6 bg-sage-50 dark:bg-sage-900/20 border-t border-warm-border dark:border-gray-600">
                  <h4 className="text-lg font-serif font-semibold text-sage-700 dark:text-sage-300 mb-2 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    The Growth Moment
                  </h4>
                  <p className="text-sage-700 dark:text-sage-300">{relationshipStory.growthMoment}</p>
                </div>

                {/* Reflection */}
                <div className="p-6 bg-gold-50 dark:bg-gold-900/20 border-t border-warm-border dark:border-gray-600">
                  <h4 className="text-lg font-serif font-semibold text-gold-700 dark:text-gold-300 mb-2 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Reflection
                  </h4>
                  <p className="text-gold-700 dark:text-gold-300 italic">{relationshipStory.reflection}</p>
                </div>
              </div>
            )}

            {/* Type Cards Side by Side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <TypeComparisonCard type={typeData1} color={getCenterColor(typeData1.center)} />
              <TypeComparisonCard type={typeData2} color={getCenterColor(typeData2.center)} />
            </div>

            {/* Group Comparison */}
            <div className="bg-cream-200 dark:bg-gray-700/50 rounded-xl p-4 sm:p-6 mb-6 sm:mb-8">
              <h3 className="text-lg font-serif font-semibold text-charcoal dark:text-white mb-4">Group Analysis</h3>
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
                <div className="bg-sage-50 dark:bg-sage-900/20 rounded-xl p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-serif font-semibold text-sage-700 dark:text-sage-300 mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    Strengths of This Pairing
                  </h3>
                  <ul className="space-y-2">
                    {pairingData.strengths.map((point: string, i: number) => (
                      <li key={i} className="flex items-start gap-2 text-sage-700 dark:text-sage-300 text-sm sm:text-base">
                        <span className="w-1.5 h-1.5 rounded-full bg-sage-500 dark:bg-sage-400 mt-2 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Challenges */}
                <div className="bg-terracotta-50 dark:bg-terracotta-900/20 rounded-xl p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-serif font-semibold text-terracotta-700 dark:text-terracotta-300 mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    Potential Challenges
                  </h3>
                  <ul className="space-y-2">
                    {pairingData.challenges.map((point: string, i: number) => (
                      <li key={i} className="flex items-start gap-2 text-terracotta-700 dark:text-terracotta-300 text-sm sm:text-base">
                        <span className="w-1.5 h-1.5 rounded-full bg-terracotta-500 dark:bg-terracotta-400 mt-2 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Growth Opportunities */}
                <div className="bg-gold-50 dark:bg-gold-900/20 rounded-xl p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-serif font-semibold text-gold-700 dark:text-gold-300 mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Growth Opportunities
                  </h3>
                  <ul className="space-y-2">
                    {pairingData.growthOpportunities.map((point: string, i: number) => (
                      <li key={i} className="flex items-start gap-2 text-gold-700 dark:text-gold-300 text-sm sm:text-base">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-500 dark:bg-gold-400 mt-2 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Communication Tips */}
                <div className="bg-charcoal-light/10 dark:bg-charcoal-light/20 rounded-xl p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-serif font-semibold text-charcoal dark:text-cream-200 mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Communication Tips
                  </h3>
                  <ul className="space-y-2">
                    {pairingData.communicationTips.map((tip: string, i: number) => (
                      <li key={i} className="flex items-start gap-2 text-charcoal-light dark:text-cream-300 text-sm sm:text-base">
                        <span className="text-charcoal-muted dark:text-cream-400 mt-1">{i + 1}.</span>
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
