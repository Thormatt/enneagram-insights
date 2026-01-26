import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from '../Layout/ThemeToggle';
import {
  getTypeByNumber,
  getCenterColor,
  getWingsByType,
  getViceVirtueByType,
  getFixationByType,
  getHolyIdeaByType,
  getIntegrationPath,
  getDisintegrationPath,
  getSubtypesByType,
  getDefenseMechanism,
  getShadowByType,
  getBodyPattern,
  getHarmonicGroupByType,
  getHornevianGroupByType,
  getObjectRelationsByType,
  getLevelsByType,
  getEssenceByType,
  getStoriesForType
} from '../../data';
import type { TypeNumber, InstinctType } from '../../types';
import { CoreSection } from './CoreSection';
import { ExperienceSection } from './ExperienceSection';
import { GrowthSection } from './GrowthSection';

interface TypeDetailPageProps {
  typeNumber: TypeNumber;
  onNavigate?: (type: TypeNumber) => void;
  onClose?: () => void;
}

type SectionId = 'core' | 'experience' | 'growth' | 'framework';

interface Section {
  id: SectionId;
  label: string;
}

const sections: Section[] = [
  { id: 'core', label: 'Core' },
  { id: 'experience', label: 'Experience' },
  { id: 'growth', label: 'Growth' },
  { id: 'framework', label: 'Framework' }
];

const TYPE_ORDER: TypeNumber[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const CENTER_LABELS: Record<string, string> = {
  gut: 'Body Center',
  heart: 'Heart Center',
  head: 'Head Center'
};

export function TypeDetailPage({ typeNumber, onNavigate, onClose }: TypeDetailPageProps) {
  const [activeSection, setActiveSection] = useState<SectionId>('core');
  const [selectedInstinct, setSelectedInstinct] = useState<InstinctType>('sp');

  // Memoize all data fetching to prevent recalculation on every render
  const typeData = useMemo(() => {
    const type = getTypeByNumber(typeNumber);
    if (!type) return null;

    return {
      type,
      color: getCenterColor(type.center),
      wings: getWingsByType(typeNumber),
      viceVirtue: getViceVirtueByType(typeNumber),
      fixation: getFixationByType(typeNumber),
      holyIdea: getHolyIdeaByType(typeNumber),
      integration: getIntegrationPath(typeNumber),
      disintegration: getDisintegrationPath(typeNumber),
      subtypes: getSubtypesByType(typeNumber),
      defense: getDefenseMechanism(typeNumber),
      shadow: getShadowByType(typeNumber),
      bodyPattern: getBodyPattern(typeNumber),
      harmonic: getHarmonicGroupByType(typeNumber),
      hornevian: getHornevianGroupByType(typeNumber),
      objectRelations: getObjectRelationsByType(typeNumber),
      levels: getLevelsByType(typeNumber),
      essence: getEssenceByType(typeNumber),
      stories: getStoriesForType(typeNumber),
    };
  }, [typeNumber]);

  // Memoize navigation indices
  const { prevType, nextType } = useMemo(() => {
    const currentIndex = TYPE_ORDER.indexOf(typeNumber);
    return {
      prevType: TYPE_ORDER[(currentIndex - 1 + 9) % 9],
      nextType: TYPE_ORDER[(currentIndex + 1) % 9],
    };
  }, [typeNumber]);

  if (!typeData) return null;

  const { type, color, wings, viceVirtue, fixation, holyIdea, integration, disintegration, subtypes, defense, shadow, bodyPattern, harmonic, hornevian, objectRelations, levels, essence, stories } = typeData;

  return (
    <div className="min-h-screen bg-cream-100 dark:bg-gray-900 transition-colors">
      {/* Combined Header */}
      <header className="sticky top-0 z-10 border-b border-warm-border dark:border-gray-700" style={{ backgroundColor: color }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {/* Top row: navigation and actions */}
          <div className="flex items-center justify-between h-14">
            {/* Navigation */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => onNavigate?.(prevType)}
                className="p-2 hover:bg-white/20 rounded-xl transition-colors"
                aria-label={`Go to Type ${prevType}`}
              >
                <svg className="w-5 h-5 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Type selector pills - 44px min touch target for mobile */}
              <div className="flex items-center gap-0.5 bg-black/20 rounded-full p-1">
                {TYPE_ORDER.map(num => (
                  <button
                    key={num}
                    onClick={() => onNavigate?.(num)}
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full text-sm font-semibold transition-all ${
                      num === typeNumber
                        ? 'bg-white text-charcoal shadow-md'
                        : 'text-white/70 hover:text-white hover:bg-white/20'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>

              <button
                onClick={() => onNavigate?.(nextType)}
                className="p-2 hover:bg-white/20 rounded-xl transition-colors"
                aria-label={`Go to Type ${nextType}`}
              >
                <svg className="w-5 h-5 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Theme toggle and close button */}
            <div className="flex items-center gap-2">
              <ThemeToggle />
              {onClose && (
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-white/20 rounded-xl transition-colors"
                  aria-label="Close"
                >
                  <svg className="w-5 h-5 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* Bottom row: type info */}
          <motion.div
            key={typeNumber}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="pb-4 pt-1"
          >
            <div className="flex items-center gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-white/70 text-sm font-medium">{CENTER_LABELS[type.center]}</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                  Type {typeNumber}: {type.name}
                </h1>
                <p className="text-white/80 text-sm sm:text-base mt-1 line-clamp-2">
                  {type.briefDescription}
                </p>
              </div>
            </div>
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-3">
              {harmonic && (
                <span className="px-2.5 py-0.5 bg-white/20 rounded-full text-xs text-white">
                  {harmonic.displayName}
                </span>
              )}
              {hornevian && (
                <span className="px-2.5 py-0.5 bg-white/20 rounded-full text-xs text-white">
                  {hornevian.displayName}
                </span>
              )}
            </div>
          </motion.div>
        </div>
      </header>

      {/* Section Navigation */}
      <nav className="sticky top-16 z-10 bg-cream-100 dark:bg-gray-900 border-b border-warm-border dark:border-gray-700">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex gap-2 py-3 overflow-x-auto">
            {sections.map(section => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeSection === section.id
                    ? 'bg-charcoal dark:bg-white text-white dark:text-gray-900'
                    : 'text-charcoal-light dark:text-gray-400 hover:bg-cream-200 dark:hover:bg-gray-800'
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-6 py-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${typeNumber}-${activeSection}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.1 }}
          >
            {activeSection === 'core' && (
              <CoreSection
                type={type}
                color={color}
                wings={wings}
                viceVirtue={viceVirtue}
                fixation={fixation}
                holyIdea={holyIdea}
                essence={essence}
              />
            )}

            {activeSection === 'experience' && (
              <ExperienceSection
                selectedInstinct={selectedInstinct}
                onInstinctChange={setSelectedInstinct}
                stories={stories}
                subtypes={subtypes}
              />
            )}

            {activeSection === 'growth' && (
              <GrowthSection
                typeNumber={typeNumber}
                color={color}
                integration={integration}
                disintegration={disintegration}
                levels={levels}
                defense={defense}
                shadow={shadow}
                bodyPattern={bodyPattern}
              />
            )}

            {activeSection === 'framework' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {harmonic && (
                  <FrameworkCard
                    title={harmonic.displayName}
                    subtitle="Harmonic Group"
                    description={harmonic.description}
                    detail={`Response to Problems: ${harmonic.responseToProblems}`}
                    types={harmonic.types}
                    accentColor="#364C63" // Storm Slate
                  />
                )}
                {hornevian && (
                  <FrameworkCard
                    title={hornevian.displayName}
                    subtitle="Hornevian Group"
                    description={hornevian.description}
                    detail={`Social Movement: ${hornevian.socialMovement}`}
                    types={hornevian.types}
                    accentColor="#7D9B84" // Sage
                  />
                )}
                {objectRelations && (
                  <FrameworkCard
                    title={objectRelations.displayName}
                    subtitle="Object Relations"
                    description={objectRelations.description}
                    detail={`Early Pattern: ${objectRelations.earlyPattern}`}
                    types={objectRelations.types}
                    accentColor="#C4785C" // Terracotta
                  />
                )}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

// Framework Card Component
interface FrameworkCardProps {
  title: string;
  subtitle: string;
  description: string;
  detail: string;
  types: number[];
  accentColor: string;
}

function FrameworkCard({ title, subtitle, description, detail, types, accentColor }: FrameworkCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-warm-border dark:border-gray-700 overflow-hidden shadow-warm">
      <div className="px-6 py-4 border-b border-warm-border dark:border-gray-700">
        <p className="text-xs font-medium uppercase tracking-wider text-charcoal-muted dark:text-gray-500 mb-1">
          {subtitle}
        </p>
        <h3 className="text-xl font-serif font-semibold" style={{ color: accentColor }}>
          {title}
        </h3>
      </div>
      <div className="p-6 space-y-4">
        <p className="text-sm text-charcoal-muted dark:text-gray-400">
          {detail}
        </p>
        <p className="text-charcoal-light dark:text-gray-300 leading-relaxed">
          {description}
        </p>
        <div className="pt-2">
          <span className="text-xs font-medium text-charcoal-muted dark:text-gray-500 uppercase tracking-wider">
            Types: {types.join(', ')}
          </span>
        </div>
      </div>
    </div>
  );
}
