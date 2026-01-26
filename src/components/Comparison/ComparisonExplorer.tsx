import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { TabNavigation, type ComparisonTab } from './TabNavigation';
import { HealthLevelToggle, HealthLevelCard, type HealthView } from './HealthLevelToggle';
import { HealthCombinationExplorer } from './HealthCombinationExplorer';
import { LineConnectionDisplay } from './LineConnectionDisplay';
import { DefenseClashSection } from './DefenseClashSection';
import { TriggerCycleCard } from './TriggerCycleCard';

const GROUP_EXPLANATIONS: Record<string, string> = {
  harmonic: "How you cope with problems: positivity, competency, or emotional reactivity",
  hornevian: "Your social strategy: assertive, compliant, or withdrawn",
  'object relations': "Early attachment pattern: frustration, rejection, or attachment"
};

import {
  getAllTypes,
  getTypeByNumber,
  getCenterColor,
  getHarmonicGroupByType,
  getHornevianGroupByType,
  getObjectRelationsByType,
  getIntegrationPath,
  getDisintegrationPath,
  calculateCompatibilityScore,
  compatibilityData,
  getRelationshipArchetype,
  getDefenseMechanism,
  getLevelsByHealthState
} from '../../data';
import { getRelationshipStory, getSubtypeRelationshipStory } from '../../data/stories';
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
  const [subtype1, setSubtype1] = useState<InstinctType | null>(null);
  const [subtype2, setSubtype2] = useState<InstinctType | null>(null);
  const [activeTab, setActiveTab] = useState<ComparisonTab>('overview');
  const [healthView, setHealthView] = useState<HealthView>('healthy');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    groups: true,
    strengths: true,
    challenges: false,
    growth: false,
    tips: false
  });
  const [showStickyHeader, setShowStickyHeader] = useState(false);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyHeader(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const allTypes = useMemo(() => getAllTypes(), []);
  const typeData1 = useMemo(() => (type1 ? getTypeByNumber(type1) : null), [type1]);
  const typeData2 = useMemo(() => (type2 ? getTypeByNumber(type2) : null), [type2]);

  const compatibility = useMemo(
    () => (type1 && type2 ? calculateCompatibilityScore(type1, type2) : null),
    [type1, type2]
  );
  const pairingData = useMemo(
    () => (type1 && type2
      ? compatibilityData.find(
          c => (c.type1 === type1 && c.type2 === type2) || (c.type1 === type2 && c.type2 === type1)
        )
      : null),
    [type1, type2]
  );
  const relationshipStory = useMemo(
    () => (type1 && type2 ? getRelationshipStory(type1, type2) : null),
    [type1, type2]
  );
  const subtypeStory = useMemo(
    () => (type1 && type2 && subtype1 && subtype2
      ? getSubtypeRelationshipStory(type1, subtype1, type2, subtype2)
      : null),
    [type1, type2, subtype1, subtype2]
  );
  const relationshipParagraphs = useMemo(
    () => (relationshipStory?.narrative ? relationshipStory.narrative.split('\n\n') : []),
    [relationshipStory?.narrative]
  );
  const subtypeParagraphs = useMemo(
    () => (subtypeStory?.narrative ? subtypeStory.narrative.split('\n\n') : []),
    [subtypeStory?.narrative]
  );

  // Get relationship archetype
  const archetype = useMemo(
    () => (type1 && type2 ? getRelationshipArchetype(type1, type2) : null),
    [type1, type2]
  );

  // Get group information
  const harmonic1 = useMemo(() => (type1 ? getHarmonicGroupByType(type1) : null), [type1]);
  const harmonic2 = useMemo(() => (type2 ? getHarmonicGroupByType(type2) : null), [type2]);
  const hornevian1 = useMemo(() => (type1 ? getHornevianGroupByType(type1) : null), [type1]);
  const hornevian2 = useMemo(() => (type2 ? getHornevianGroupByType(type2) : null), [type2]);
  const objectRel1 = useMemo(() => (type1 ? getObjectRelationsByType(type1) : null), [type1]);
  const objectRel2 = useMemo(() => (type2 ? getObjectRelationsByType(type2) : null), [type2]);

  // Get dynamic movement data
  const integration1 = useMemo(() => (type1 ? getIntegrationPath(type1) : null), [type1]);
  const integration2 = useMemo(() => (type2 ? getIntegrationPath(type2) : null), [type2]);
  const disintegration1 = useMemo(() => (type1 ? getDisintegrationPath(type1) : null), [type1]);
  const disintegration2 = useMemo(() => (type2 ? getDisintegrationPath(type2) : null), [type2]);

  // Get defense mechanisms
  const defense1 = useMemo(() => (type1 ? getDefenseMechanism(type1) : null), [type1]);
  const defense2 = useMemo(() => (type2 ? getDefenseMechanism(type2) : null), [type2]);

  // Get levels of health for current health view
  const levels1 = useMemo(
    () => (type1 ? getLevelsByHealthState(type1, healthView) : []),
    [type1, healthView]
  );
  const levels2 = useMemo(
    () => (type2 ? getLevelsByHealthState(type2, healthView) : []),
    [type2, healthView]
  );

  // Check integration/disintegration connection
  const isIntegrationPartner =
    (type1 && integration2?.movesTo === type1) ||
    (type2 && integration1?.movesTo === type2);

  // Get center colors
  const centerColor1 = useMemo(
    () => (typeData1 ? getCenterColor(typeData1.center) : '#666'),
    [typeData1]
  );
  const centerColor2 = useMemo(
    () => (typeData2 ? getCenterColor(typeData2.center) : '#666'),
    [typeData2]
  );

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

  const getScoreBadgeColor = (score: number): string => {
    if (score >= 8) return 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400';
    if (score >= 6) return 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400';
    if (score >= 4) return 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400';
    return 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400';
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-warm overflow-hidden border border-warm-border dark:border-gray-700">
      {/* Header */}
      <div className="bg-charcoal dark:bg-gray-900 p-4 sm:p-6 text-white">
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-serif font-bold">Deep Dive</h2>
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
        <p className="text-cream-300 mt-1 text-sm sm:text-base">Explore the full dynamics between two types</p>
      </div>

      {/* Sticky Header - shows on scroll when both types selected */}
      <AnimatePresence>
        {showStickyHeader && typeData1 && typeData2 && compatibility !== null && (
          <motion.div
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -60, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 shadow-lg border-b border-gray-200 dark:border-gray-700"
          >
            <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-center gap-3 sm:gap-4">
              <div
                className="px-3 py-1 rounded-full text-white text-sm font-medium"
                style={{ backgroundColor: centerColor1 }}
              >
                Type {typeData1.number}
              </div>
              <span className="text-gray-400">+</span>
              <div
                className="px-3 py-1 rounded-full text-white text-sm font-medium"
                style={{ backgroundColor: centerColor2 }}
              >
                Type {typeData2.number}
              </div>
              {archetype && (
                <span className="text-sm font-medium text-charcoal dark:text-cream-200 hidden sm:inline">
                  {archetype.archetype}
                </span>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Type Selectors */}
      <div className="p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <TypeSelector
            label="First Type"
            value={type1}
            onChange={setType1}
            types={allTypes}
            excludeType={null}
          />
          <TypeSelector
            label="Second Type"
            value={type2}
            onChange={setType2}
            types={allTypes}
            excludeType={null}
          />
        </div>
      </div>

      {/* Comparison Content */}
      {typeData1 && typeData2 && compatibility !== null && (
        <div className="p-4 sm:p-6">
            {/* Dynamic Archetype Label */}
            <div className="text-center mb-6 sm:mb-8">
              {archetype ? (
                <>
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-charcoal dark:text-white mb-1">
                    {archetype.archetype}
                  </div>
                  <div className="text-charcoal-light dark:text-cream-300 italic mb-3">
                    {archetype.tagline}
                  </div>
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getScoreBadgeColor(compatibility)}`}>
                    <span>{getScoreLabel(compatibility)}</span>
                  </div>
                </>
              ) : (
                <div className={`text-2xl sm:text-3xl font-serif font-bold ${getScoreColor(compatibility)}`}>
                  {getScoreLabel(compatibility)} Compatibility
                </div>
              )}
              {isIntegrationPartner && (
                <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-sm">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  Growth Partners (Integration Line)
                </div>
              )}
            </div>

            {/* Type Cards Side by Side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <TypeComparisonCard type={typeData1} color={centerColor1} />
              <TypeComparisonCard type={typeData2} color={centerColor2} />
            </div>

            {/* Tab Navigation */}
            <TabNavigation
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />

            {/* Tab Content */}
              {/* Overview Tab */}
              {activeTab === 'overview' && (
                <div>
                  {/* Archetype Summary */}
                  {archetype && (
                    <div className="mb-6 p-4 bg-gradient-to-r from-charcoal/5 to-charcoal/10 dark:from-white/5 dark:to-white/10 rounded-xl">
                      <p className="text-charcoal-light dark:text-cream-200 text-sm sm:text-base">
                        {archetype.dynamicSummary}
                      </p>
                    </div>
                  )}

                  {/* General Relationship Story - BROAD (shown first) */}
                  {relationshipStory && (
                    <div className="mb-8 bg-cream-100 dark:bg-gray-800 rounded-2xl overflow-hidden border border-warm-border dark:border-gray-700">
                      <div className="p-6 bg-gradient-to-r from-charcoal to-charcoal-light dark:from-gray-700 dark:to-gray-600 text-white">
                        <h3 className="text-2xl font-serif font-bold">{relationshipStory.title}</h3>
                        <p className="text-cream-300 dark:text-gray-300 italic mt-1">{relationshipStory.subtitle}</p>
                      </div>
                      <div className="p-6 bg-white dark:bg-gray-800">
                        <div className="prose prose-warm dark:prose-invert max-w-none">
                          {relationshipParagraphs.map((paragraph, i) => (
                            <p key={i} className="text-charcoal-light dark:text-gray-200 leading-relaxed mb-4 last:mb-0">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>
                      <div className="p-6 bg-sage-50 dark:bg-emerald-900/20 border-t border-warm-border dark:border-gray-700">
                        <h4 className="text-lg font-serif font-semibold text-sage-700 dark:text-emerald-300 mb-2 flex items-center gap-2">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                          The Growth Moment
                        </h4>
                        <p className="text-sage-700 dark:text-emerald-200">{relationshipStory.growthMoment}</p>
                      </div>
                      <div className="p-6 bg-gold-50 dark:bg-amber-900/20 border-t border-warm-border dark:border-gray-700">
                        <h4 className="text-lg font-serif font-semibold text-gold-700 dark:text-amber-300 mb-2 flex items-center gap-2">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Reflection
                        </h4>
                        <p className="text-gold-700 dark:text-amber-200 italic">{relationshipStory.reflection}</p>
                      </div>
                    </div>
                  )}

                  {/* Subtype Drill-Down Section - NARROW (after general story) */}
                  {type1 && type2 && (
                    <div className="mb-8">
                      {/* Subtype Selectors */}
                      <div className="p-4 bg-gradient-to-r from-amber-50 via-violet-50 to-pink-50 dark:from-amber-900/20 dark:via-violet-900/20 dark:to-pink-900/20 rounded-xl border border-warm-border dark:border-gray-600 mb-4">
                        <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 text-center flex items-center justify-center gap-2">
                          <svg className="w-4 h-4 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                          Dive Deeper: Compare Specific Subtypes
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <SubtypeSelector label={`Type ${type1} Subtype`} value={subtype1} onChange={setSubtype1} typeNumber={type1} />
                          <SubtypeSelector label={`Type ${type2} Subtype`} value={subtype2} onChange={setSubtype2} typeNumber={type2} />
                        </div>
                      </div>

                      {/* Subtype-Specific Relationship Story */}
                      {subtypeStory && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="bg-gradient-to-br from-amber-50 via-violet-50 to-pink-50 dark:from-amber-900/20 dark:via-violet-900/20 dark:to-pink-900/20 rounded-2xl overflow-hidden border border-warm-border dark:border-gray-600"
                        >
                          <div className="p-6 bg-gradient-to-r from-amber-600 via-violet-600 to-pink-600 text-white">
                            <div className="flex items-center gap-2 text-amber-100 text-sm mb-2">
                              <span className="px-2 py-0.5 rounded-full bg-white/20">
                                {subtype1?.toUpperCase()}
                              </span>
                              <span>+</span>
                              <span className="px-2 py-0.5 rounded-full bg-white/20">
                                {subtype2?.toUpperCase()}
                              </span>
                            </div>
                            <h3 className="text-2xl font-serif font-bold">{subtypeStory.title}</h3>
                            <p className="text-white/80 italic mt-1">{subtypeStory.subtitle}</p>
                          </div>
                          <div className="p-6">
                            <div className="prose prose-warm dark:prose-invert max-w-none">
                              {subtypeParagraphs.map((paragraph, i) => (
                                <p key={i} className="text-charcoal-light dark:text-cream-200 leading-relaxed mb-4 last:mb-0">
                                  {paragraph}
                                </p>
                              ))}
                            </div>
                          </div>
                          <div className="px-6 pb-4">
                            <div className="bg-white/60 dark:bg-gray-700/60 rounded-xl p-4">
                              <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-300 uppercase mb-2">
                                The Dynamic
                              </h4>
                              <p className="text-charcoal-light dark:text-cream-200">
                                {subtypeStory.dynamicDescription}
                              </p>
                            </div>
                          </div>
                          <div className="p-6 bg-sage-50 dark:bg-sage-900/20 border-t border-warm-border dark:border-gray-600">
                            <h4 className="text-lg font-serif font-semibold text-sage-700 dark:text-sage-300 mb-2 flex items-center gap-2">
                              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                              </svg>
                              Growth Path
                            </h4>
                            <p className="text-sage-700 dark:text-sage-300">{subtypeStory.growthPath}</p>
                          </div>
                          <div className="p-6 bg-terracotta-50 dark:bg-terracotta-900/20 border-t border-warm-border dark:border-gray-600">
                            <h4 className="text-lg font-serif font-semibold text-terracotta-700 dark:text-terracotta-300 mb-2 flex items-center gap-2">
                              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                              </svg>
                              Watch Out For
                            </h4>
                            <p className="text-terracotta-700 dark:text-terracotta-300">{subtypeStory.watchOut}</p>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  )}

                  {/* Group Comparison */}
                  <div className="mb-6 sm:mb-8">
                    <CollapsibleSection
                      id="groups"
                      title="Group Analysis"
                      icon={
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      }
                      isExpanded={expandedSections.groups}
                      onToggle={() => toggleSection('groups')}
                      bgColor="bg-cream-200 dark:bg-gray-700/50"
                      textColor="text-charcoal dark:text-white"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <GroupComparisonRow
                          label="Harmonic"
                          value1={harmonic1?.displayName || '-'}
                          value2={harmonic2?.displayName || '-'}
                          type1={typeData1.number}
                          type2={typeData2.number}
                          match={harmonic1?.name === harmonic2?.name}
                          explanation={GROUP_EXPLANATIONS.harmonic}
                        />
                        <GroupComparisonRow
                          label="Hornevian"
                          value1={hornevian1?.displayName || '-'}
                          value2={hornevian2?.displayName || '-'}
                          type1={typeData1.number}
                          type2={typeData2.number}
                          match={hornevian1?.name === hornevian2?.name}
                          explanation={GROUP_EXPLANATIONS.hornevian}
                        />
                        <GroupComparisonRow
                          label="Object Relations"
                          value1={objectRel1?.displayName || '-'}
                          value2={objectRel2?.displayName || '-'}
                          type1={typeData1.number}
                          type2={typeData2.number}
                          match={objectRel1?.name === objectRel2?.name}
                          explanation={GROUP_EXPLANATIONS['object relations']}
                        />
                      </div>
                    </CollapsibleSection>
                  </div>

                  {/* Pairing Insights */}
                  {pairingData && (
                    <div className="space-y-4 sm:space-y-6">
                      <CollapsibleSection
                        id="strengths"
                        title="Strengths of This Pairing"
                        icon={
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        }
                        isExpanded={expandedSections.strengths}
                        onToggle={() => toggleSection('strengths')}
                        bgColor="bg-sage-50 dark:bg-sage-900/20"
                        textColor="text-sage-700 dark:text-sage-300"
                      >
                        <ul className="space-y-2">
                          {pairingData.strengths.map((point: string, i: number) => (
                            <li key={i} className="flex items-start gap-2 text-sage-700 dark:text-sage-300 text-sm sm:text-base">
                              <span className="w-1.5 h-1.5 rounded-full bg-sage-500 dark:bg-sage-400 mt-2 flex-shrink-0" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </CollapsibleSection>

                      <CollapsibleSection
                        id="challenges"
                        title="Potential Challenges"
                        icon={
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                        }
                        isExpanded={expandedSections.challenges}
                        onToggle={() => toggleSection('challenges')}
                        bgColor="bg-terracotta-50 dark:bg-terracotta-900/20"
                        textColor="text-terracotta-700 dark:text-terracotta-300"
                      >
                        <ul className="space-y-2">
                          {pairingData.challenges.map((point: string, i: number) => (
                            <li key={i} className="flex items-start gap-2 text-terracotta-700 dark:text-terracotta-300 text-sm sm:text-base">
                              <span className="w-1.5 h-1.5 rounded-full bg-terracotta-500 dark:bg-terracotta-400 mt-2 flex-shrink-0" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </CollapsibleSection>

                      <CollapsibleSection
                        id="tips"
                        title="Communication Tips"
                        icon={
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                        }
                        isExpanded={expandedSections.tips}
                        onToggle={() => toggleSection('tips')}
                        bgColor="bg-charcoal-light/10 dark:bg-charcoal-light/20"
                        textColor="text-charcoal dark:text-cream-200"
                      >
                        <ul className="space-y-2">
                          {pairingData.communicationTips.map((tip: string, i: number) => (
                            <li key={i} className="flex items-start gap-2 text-charcoal-light dark:text-cream-300 text-sm sm:text-base">
                              <span className="w-1.5 h-1.5 rounded-full bg-charcoal-muted dark:bg-cream-400 mt-2 flex-shrink-0" />
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </CollapsibleSection>
                    </div>
                  )}
                </div>
              )}

              {/* Dynamics Tab */}
              {activeTab === 'dynamics' && (
                <div className="space-y-8">
                  {/* Integration/Disintegration Lines */}
                  <div>
                    <h3 className="text-lg font-serif font-semibold text-charcoal dark:text-white mb-4 flex items-center gap-2">
                      <svg className="w-5 h-5 text-charcoal-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                      </svg>
                      Integration & Disintegration Lines
                    </h3>
                    <LineConnectionDisplay
                      type1={type1!}
                      type2={type2!}
                      integration1={integration1 ?? null}
                      integration2={integration2 ?? null}
                      disintegration1={disintegration1 ?? null}
                      disintegration2={disintegration2 ?? null}
                      centerColor1={centerColor1}
                      centerColor2={centerColor2}
                    />
                  </div>

                  {/* Defense Mechanisms */}
                  <div>
                    <h3 className="text-lg font-serif font-semibold text-charcoal dark:text-white mb-4 flex items-center gap-2">
                      <svg className="w-5 h-5 text-charcoal-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      Defense Mechanism Clash Analysis
                    </h3>
                    <DefenseClashSection
                      type1={type1!}
                      type2={type2!}
                      defense1={defense1 ?? null}
                      defense2={defense2 ?? null}
                      centerColor1={centerColor1}
                      centerColor2={centerColor2}
                    />
                  </div>

                  {/* Trigger Cycle */}
                  <div>
                    <h3 className="text-lg font-serif font-semibold text-charcoal dark:text-white mb-4 flex items-center gap-2">
                      <svg className="w-5 h-5 text-charcoal-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      Trigger Cycle Warning
                    </h3>
                    <TriggerCycleCard
                      type1={type1!}
                      type2={type2!}
                      typeData1={typeData1}
                      typeData2={typeData2}
                      defense1={defense1 ?? null}
                      defense2={defense2 ?? null}
                      disintegration1={disintegration1 ?? null}
                      disintegration2={disintegration2 ?? null}
                    />
                  </div>
                </div>
              )}

              {/* Growth Tab */}
              {activeTab === 'growth' && (
                <div className="space-y-6">
                  {/* Health Combination Explorer */}
                  <div>
                    <h3 className="text-lg font-serif font-semibold text-charcoal dark:text-white mb-4 flex items-center gap-2">
                      <svg className="w-5 h-5 text-charcoal-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                      </svg>
                      What If? Health Combinations
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      Explore how this relationship changes when each person is at different health levels.
                    </p>
                    <HealthCombinationExplorer
                      type1={type1!}
                      type2={type2!}
                      centerColor1={centerColor1}
                      centerColor2={centerColor2}
                    />
                  </div>

                  {/* Individual Health Level Details */}
                  <div>
                    <h3 className="text-lg font-serif font-semibold text-charcoal dark:text-white mb-4 flex items-center gap-2">
                      <svg className="w-5 h-5 text-charcoal-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      Individual Levels of Health
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      Dive deeper into how each type behaves at each health level.
                    </p>
                    <HealthLevelToggle value={healthView} onChange={setHealthView} />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {levels1.length > 0 && (
                        <HealthLevelCard
                          typeNumber={type1!}
                          level={levels1[0]}
                          centerColor={centerColor1}
                        />
                      )}
                      {levels2.length > 0 && (
                        <HealthLevelCard
                          typeNumber={type2!}
                          level={levels2[0]}
                          centerColor={centerColor2}
                        />
                      )}
                    </div>
                  </div>

                  {/* Integration Practices */}
                  <div>
                    <h3 className="text-lg font-serif font-semibold text-charcoal dark:text-white mb-4 flex items-center gap-2">
                      <svg className="w-5 h-5 text-sage-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      Growth Practices
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {integration1 && (
                        <div className="bg-sage-50 dark:bg-sage-900/20 rounded-xl p-4 border border-sage-200 dark:border-sage-800">
                          <h4 className="font-medium text-sage-700 dark:text-sage-300 mb-3 flex items-center gap-2">
                            <span className="w-6 h-6 rounded-full bg-sage-500 text-white text-sm flex items-center justify-center">{type1}</span>
                            Moving Toward Type {integration1.movesTo}
                          </h4>
                          <ul className="space-y-2">
                            {integration1.practices.map((practice, i) => (
                              <li key={i} className="text-sm text-sage-700 dark:text-sage-300 flex items-start gap-2">
                                <span className="text-sage-500 mt-0.5">•</span>
                                {practice}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {integration2 && (
                        <div className="bg-sage-50 dark:bg-sage-900/20 rounded-xl p-4 border border-sage-200 dark:border-sage-800">
                          <h4 className="font-medium text-sage-700 dark:text-sage-300 mb-3 flex items-center gap-2">
                            <span className="w-6 h-6 rounded-full bg-sage-500 text-white text-sm flex items-center justify-center">{type2}</span>
                            Moving Toward Type {integration2.movesTo}
                          </h4>
                          <ul className="space-y-2">
                            {integration2.practices.map((practice, i) => (
                              <li key={i} className="text-sm text-sage-700 dark:text-sage-300 flex items-start gap-2">
                                <span className="text-sage-500 mt-0.5">•</span>
                                {practice}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Growth Opportunities from Pairing Data */}
                  {pairingData && (
                    <div className="bg-gold-50 dark:bg-gold-900/20 rounded-xl p-5 border border-gold-200 dark:border-gold-800">
                      <h4 className="text-lg font-serif font-semibold text-gold-700 dark:text-gold-300 mb-3 flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        Combined Growth Opportunities
                      </h4>
                      <ul className="space-y-2">
                        {pairingData.growthOpportunities.map((opp, i) => (
                          <li key={i} className="text-sm text-gold-700 dark:text-gold-300 flex items-start gap-2">
                            <span className="text-gold-500 mt-0.5">•</span>
                            {opp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {/* Stress Tab */}
              {activeTab === 'stress' && (
                <div className="space-y-6">
                  {/* Disintegration Patterns */}
                  <div>
                    <h3 className="text-lg font-serif font-semibold text-charcoal dark:text-white mb-4 flex items-center gap-2">
                      <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      Disintegration Patterns
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      Under stress, each type takes on unhealthy qualities of another type. Understanding these patterns helps you recognize and address stress responses.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {disintegration1 && (
                        <div className="bg-red-50 dark:bg-red-900/20 rounded-xl overflow-hidden border border-red-200 dark:border-red-800">
                          <div className="p-3 text-white flex items-center justify-between" style={{ backgroundColor: centerColor1 }}>
                            <span className="font-medium">Type {type1} Under Stress</span>
                            <span className="text-sm opacity-90">→ Type {disintegration1.movesTo}</span>
                          </div>
                          <div className="p-4 space-y-3">
                            <p className="text-sm text-red-700 dark:text-red-300">
                              {disintegration1.description.split('\n')[0]}
                            </p>
                            <div>
                              <h5 className="text-xs font-semibold text-red-600 dark:text-red-400 uppercase mb-2">
                                Warning Signs
                              </h5>
                              <ul className="space-y-1">
                                {disintegration1.warningSigns.map((sign, i) => (
                                  <li key={i} className="text-xs text-red-600 dark:text-red-400 flex items-start gap-1">
                                    <span>!</span>
                                    <span>{sign}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      )}
                      {disintegration2 && (
                        <div className="bg-red-50 dark:bg-red-900/20 rounded-xl overflow-hidden border border-red-200 dark:border-red-800">
                          <div className="p-3 text-white flex items-center justify-between" style={{ backgroundColor: centerColor2 }}>
                            <span className="font-medium">Type {type2} Under Stress</span>
                            <span className="text-sm opacity-90">→ Type {disintegration2.movesTo}</span>
                          </div>
                          <div className="p-4 space-y-3">
                            <p className="text-sm text-red-700 dark:text-red-300">
                              {disintegration2.description.split('\n')[0]}
                            </p>
                            <div>
                              <h5 className="text-xs font-semibold text-red-600 dark:text-red-400 uppercase mb-2">
                                Warning Signs
                              </h5>
                              <ul className="space-y-1">
                                {disintegration2.warningSigns.map((sign, i) => (
                                  <li key={i} className="text-xs text-red-600 dark:text-red-400 flex items-start gap-1">
                                    <span>!</span>
                                    <span>{sign}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Combined Stress Dynamic */}
                  <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl p-5 border border-orange-200 dark:border-orange-800">
                    <h4 className="text-lg font-serif font-semibold text-orange-700 dark:text-orange-300 mb-3 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                      </svg>
                      What This Pairing Looks Like Under Stress
                    </h4>
                    <p className="text-sm text-orange-700 dark:text-orange-300 mb-4">
                      When both types are stressed simultaneously, the relationship dynamic can become challenging.
                    </p>
                    <div className="bg-white dark:bg-gray-700 rounded-lg p-4 space-y-3">
                      <div>
                        <h5 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-1">
                          What It Looks Like
                        </h5>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                          Type {type1} may become {disintegration1?.exhibits[0]?.toLowerCase() || 'stressed'}, while Type {type2} may show {disintegration2?.exhibits[0]?.toLowerCase() || 'stress behaviors'}. These patterns can feed into each other if not recognized.
                        </p>
                      </div>
                      <div>
                        <h5 className="text-xs font-semibold text-green-600 dark:text-green-400 uppercase mb-1">
                          How to Recover
                        </h5>
                        <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                          <li>• Name what&apos;s happening: &quot;We&apos;re both stressed right now.&quot;</li>
                          <li>• Take space if needed, but agree to reconnect.</li>
                          <li>• Remember: stress behaviors aren&apos;t who you truly are.</li>
                          <li>• Return to integration practices when ready.</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Challenges from pairing data */}
                  {pairingData && (
                    <div className="bg-terracotta-50 dark:bg-terracotta-900/20 rounded-xl p-5 border border-terracotta-200 dark:border-terracotta-800">
                      <h4 className="text-lg font-serif font-semibold text-terracotta-700 dark:text-terracotta-300 mb-3 flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                        </svg>
                        Friction Points to Watch
                      </h4>
                      <ul className="space-y-2">
                        {pairingData.challenges.map((challenge, i) => (
                          <li key={i} className="text-sm text-terracotta-700 dark:text-terracotta-300 flex items-start gap-2">
                            <span className="text-terracotta-500 mt-0.5">•</span>
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

            {/* No pairing data fallback */}
            {!pairingData && activeTab === 'overview' && (
              <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                <p>Detailed pairing insights coming soon for this combination.</p>
                <p className="text-sm mt-1">The compatibility score is based on group alignments and integration patterns.</p>
              </div>
            )}
        </div>
      )}

        {/* Empty state */}
        {(!type1 || !type2) && (
          <div className="p-8 sm:p-12 text-center text-gray-500 dark:text-gray-400">
            <svg className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 text-gray-300 dark:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <p className="text-base sm:text-lg">Select two types to compare</p>
            <p className="text-sm mt-1">Discover compatibility, growth opportunities, and communication tips</p>
          </div>
        )}
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
                p-3 sm:p-2 rounded-lg text-center transition-[transform,box-shadow,background-color,color] min-h-[52px]
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

// Group Label with Tooltip
function GroupLabel({ label, explanation }: { label: string; explanation: string }) {
  return (
    <div className="group relative inline-flex items-center justify-center gap-1 cursor-help">
      <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">
        {label}
      </div>
      <svg className="w-3.5 h-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      {/* Tooltip with hover bridge */}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 pb-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
        <div className="px-3 py-2 bg-gray-900 text-gray-100 text-xs rounded-lg w-48 text-center shadow-lg">
          {explanation}
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
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
  type1: number;
  type2: number;
  match: boolean;
  explanation?: string;
}

function GroupComparisonRow({ label, value1, value2, type1, type2, match, explanation }: GroupComparisonRowProps) {
  return (
    <div className="bg-white dark:bg-gray-700/50 rounded-lg p-3">
      <div className="mb-3 text-center">
        {explanation ? (
          <GroupLabel label={label} explanation={explanation} />
        ) : (
          <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">{label}</div>
        )}
      </div>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-charcoal text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
            {type1}
          </span>
          <span className="text-sm text-gray-700 dark:text-gray-300">{value1}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-charcoal text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
            {type2}
          </span>
          <span className="text-sm text-gray-700 dark:text-gray-300">{value2}</span>
        </div>
      </div>
      <div className="mt-2 pt-2 border-t border-gray-200 dark:border-gray-600 text-center">
        {match ? (
          <span className="text-xs font-medium text-green-600 dark:text-green-400 flex items-center justify-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Same group
          </span>
        ) : (
          <span className="text-xs text-gray-500 dark:text-gray-400">Different groups</span>
        )}
      </div>
    </div>
  );
}

// Collapsible Section Component
interface CollapsibleSectionProps {
  id: string;
  title: string;
  icon: React.ReactNode;
  isExpanded: boolean;
  onToggle: () => void;
  bgColor: string;
  textColor: string;
  children: React.ReactNode;
}

function CollapsibleSection({
  id, title, icon, isExpanded, onToggle, bgColor, textColor, children
}: CollapsibleSectionProps) {
  return (
    <div className={`${bgColor} rounded-xl overflow-hidden`}>
      <button
        onClick={onToggle}
        className="w-full p-4 sm:p-6 flex items-center justify-between text-left"
        aria-expanded={isExpanded}
        aria-controls={`section-${id}`}
      >
        <h3 className={`text-base sm:text-lg font-serif font-semibold ${textColor} flex items-center gap-2`}>
          {icon}
          {title}
        </h3>
        <svg
          className={`w-5 h-5 ${textColor} transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isExpanded && (
        <div id={`section-${id}`} className="px-4 sm:px-6 pb-4 sm:pb-6">
          {children}
        </div>
      )}
    </div>
  );
}

// Subtype Selector Component
interface SubtypeSelectorProps {
  label: string;
  value: InstinctType | null;
  onChange: (instinct: InstinctType | null) => void;
  typeNumber: TypeNumber;
}

function SubtypeSelector({ label, value, onChange, typeNumber }: SubtypeSelectorProps) {
  const instincts: { id: InstinctType; label: string; color: string; bgLight: string; textColor: string }[] = [
    {
      id: 'sp',
      label: 'SP',
      color: 'bg-amber-500',
      bgLight: 'bg-amber-100 dark:bg-amber-900/30',
      textColor: 'text-amber-700 dark:text-amber-300'
    },
    {
      id: 'so',
      label: 'SO',
      color: 'bg-violet-500',
      bgLight: 'bg-violet-100 dark:bg-violet-900/30',
      textColor: 'text-violet-700 dark:text-violet-300'
    },
    {
      id: 'sx',
      label: 'SX',
      color: 'bg-pink-500',
      bgLight: 'bg-pink-100 dark:bg-pink-900/30',
      textColor: 'text-pink-700 dark:text-pink-300'
    }
  ];

  return (
    <div>
      <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-2">{label}</label>
      <div className="flex gap-2">
        {instincts.map((instinct) => {
          const isSelected = value === instinct.id;
          return (
            <button
              key={instinct.id}
              onClick={() => onChange(isSelected ? null : instinct.id)}
              className={`
                flex-1 px-3 py-2.5 min-h-[44px] rounded-lg font-medium text-sm transition-all
                ${isSelected
                  ? `${instinct.color} text-white shadow-md`
                  : `${instinct.bgLight} ${instinct.textColor} hover:shadow`
                }
              `}
            >
              <span className="font-bold">{typeNumber}</span>
              <span className="ml-1">{instinct.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
