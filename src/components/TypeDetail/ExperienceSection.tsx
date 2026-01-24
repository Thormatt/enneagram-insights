import { motion, AnimatePresence } from 'framer-motion';
import type { InstinctType, Subtype } from '../../types';
import type { SubtypeStory } from '../../data/stories/types';

// Warm Editorial instinct colors
const INSTINCT_COLORS: Record<InstinctType, string> = {
  sp: '#C9A962', // Gold
  so: '#7D9B84', // Sage
  sx: '#C4785C'  // Terracotta
};

const INSTINCT_LABELS: Record<InstinctType, string> = {
  sp: 'Self-Preservation',
  so: 'Social',
  sx: 'Sexual/One-to-One'
};

const INSTINCT_DESCRIPTIONS: Record<InstinctType, string> = {
  sp: 'Focus on security, comfort, and physical well-being',
  so: 'Focus on belonging, community, and social bonds',
  sx: 'Focus on intensity, chemistry, and deep connection'
};

interface ExperienceSectionProps {
  selectedInstinct: InstinctType;
  onInstinctChange: (instinct: InstinctType) => void;
  stories: {
    sp: SubtypeStory;
    so: SubtypeStory;
    sx: SubtypeStory;
  } | undefined;
  subtypes: Subtype[];
}

export function ExperienceSection({
  selectedInstinct,
  onInstinctChange,
  stories,
  subtypes
}: ExperienceSectionProps) {
  const instinctColor = INSTINCT_COLORS[selectedInstinct];
  const currentSubtype = subtypes.find(s => s.instinct === selectedInstinct);
  const currentStory = stories?.[selectedInstinct];

  return (
    <div className="space-y-8">
      {/* Instinct Selector */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-warm-border dark:border-gray-700 p-6 shadow-warm">
        <h3 className="font-serif text-lg font-semibold text-charcoal dark:text-white mb-4">
          Select an Instinctual Variant
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {(['sp', 'so', 'sx'] as const).map(instinct => (
            <button
              key={instinct}
              onClick={() => onInstinctChange(instinct)}
              className={`p-5 rounded-xl text-left transition-all border-2 ${
                selectedInstinct === instinct
                  ? 'text-white border-transparent shadow-warm-lg'
                  : 'bg-cream-100 dark:bg-gray-700 text-charcoal dark:text-gray-300 border-warm-border dark:border-gray-600 hover:border-charcoal-muted dark:hover:border-gray-500'
              }`}
              style={{
                backgroundColor: selectedInstinct === instinct ? INSTINCT_COLORS[instinct] : undefined
              }}
            >
              <div className="font-semibold mb-1">{INSTINCT_LABELS[instinct]}</div>
              <div className={`text-sm ${selectedInstinct === instinct ? 'text-white/80' : 'text-charcoal-muted dark:text-gray-400'}`}>
                {INSTINCT_DESCRIPTIONS[instinct]}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Stacked Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedInstinct}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.15 }}
          className="space-y-8"
        >
          {/* Subtype Header */}
          {currentSubtype && (
            <div
              className="rounded-2xl p-8 text-white shadow-warm-lg"
              style={{ backgroundColor: instinctColor }}
            >
              <p className="text-sm font-medium text-white/70 uppercase tracking-wider mb-2">
                {INSTINCT_LABELS[selectedInstinct]} Subtype
              </p>
              <h2 className="font-serif text-3xl font-bold mb-2">{currentSubtype.name}</h2>
              <p className="text-white/90 italic text-lg">{currentSubtype.ichazoTitle}</p>
            </div>
          )}

          {/* Story Section - Experiential */}
          {currentStory && (
            <section className="space-y-6">
              <SectionHeader
                title="The Experience"
                subtitle="What it feels like from the inside"
              />

              {/* Story Header */}
              <div className="text-center py-6">
                <h3 className="font-serif text-3xl font-bold text-charcoal dark:text-white mb-3">
                  {currentStory.title}
                </h3>
                <p className="text-lg text-charcoal-light dark:text-gray-400 italic">
                  {currentStory.subtitle}
                </p>
              </div>

              {/* Somatic Marker */}
              <Card label="The Body Knows" color={instinctColor}>
                <p className="text-charcoal-light dark:text-gray-300 italic leading-relaxed text-lg">
                  {currentStory.somaticMarker}
                </p>
              </Card>

              {/* Hidden Logic */}
              <Card label="The Hidden Logic" color={instinctColor}>
                <blockquote
                  className="bg-cream-100 dark:bg-gray-700 rounded-lg py-4 px-5 border-l-4"
                  style={{ borderColor: instinctColor }}
                >
                  <p className="text-xl font-serif italic text-charcoal dark:text-gray-200">
                    "{currentStory.hiddenLogic}"
                  </p>
                </blockquote>
              </Card>

              {/* Main Narrative */}
              <Card label="The Story" color={instinctColor}>
                <div className="prose-warm">
                  {currentStory.narrative.split('\n\n').map((paragraph, i) => (
                    <p key={i} className="text-charcoal-light dark:text-gray-300 leading-relaxed mb-5 last:mb-0">
                      {paragraph.startsWith('*') && paragraph.endsWith('*') ? (
                        <em className="text-charcoal-muted dark:text-gray-400">{paragraph.slice(1, -1)}</em>
                      ) : paragraph.includes('*') ? (
                        paragraph.split(/(\*[^*]+\*)/).map((part, j) =>
                          part.startsWith('*') && part.endsWith('*') ? (
                            <em key={j} className="text-charcoal-muted dark:text-gray-400">{part.slice(1, -1)}</em>
                          ) : (
                            <span key={j}>{part}</span>
                          )
                        )
                      ) : (
                        paragraph
                      )}
                    </p>
                  ))}
                </div>
              </Card>

              {/* Reflection Question */}
              <div className="bg-warm-gradient rounded-2xl p-8 border border-warm-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-terracotta-100 dark:bg-terracotta-900/30 flex items-center justify-center">
                    <span className="text-terracotta-600 dark:text-terracotta-400 text-xl">?</span>
                  </div>
                  <h4 className="font-serif text-xl font-semibold text-charcoal dark:text-white">
                    Reflection
                  </h4>
                </div>
                <p className="text-charcoal-light dark:text-gray-300 leading-relaxed italic text-lg">
                  {currentStory.reflection}
                </p>
              </div>
            </section>
          )}

          {/* Divider */}
          {currentStory && currentSubtype && (
            <div className="flex items-center gap-6 py-4">
              <div className="flex-1 h-px bg-warm-border dark:bg-gray-700" />
              <span className="text-charcoal-muted dark:text-gray-500 text-sm font-medium uppercase tracking-wider">
                Deeper Understanding
              </span>
              <div className="flex-1 h-px bg-warm-border dark:bg-gray-700" />
            </div>
          )}

          {/* Theory Section - Analytical */}
          {currentSubtype && (
            <section className="space-y-6">
              <SectionHeader
                title="The Framework"
                subtitle="Patterns, blind spots, and growth"
              />

              {/* Description */}
              <Card label="Overview" color={instinctColor}>
                <p className="text-charcoal-light dark:text-gray-300 leading-relaxed text-lg">
                  {currentSubtype.description}
                </p>
              </Card>

              {/* Grid of details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card label="Key Characteristics" color={instinctColor}>
                  <ul className="space-y-4">
                    {currentSubtype.characteristics.map((c, i) => (
                      <li key={i} className="flex items-start gap-3 text-charcoal-light dark:text-gray-300">
                        <span
                          className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5"
                          style={{ backgroundColor: instinctColor }}
                        >
                          {i + 1}
                        </span>
                        {c}
                      </li>
                    ))}
                  </ul>
                </Card>

                <Card label="Blind Spots" color="#C4785C">
                  <ul className="space-y-4">
                    {currentSubtype.blindSpots.map((b, i) => (
                      <li key={i} className="flex items-start gap-3 text-charcoal-light dark:text-gray-300">
                        <span className="w-6 h-6 rounded-full bg-terracotta-100 dark:bg-terracotta-900/30 flex items-center justify-center text-terracotta-600 dark:text-terracotta-400 text-sm font-bold flex-shrink-0 mt-0.5">
                          !
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>

              {/* Growth Path */}
              <Card label="Path of Growth" color="#7D9B84">
                <div className="bg-sage-50 dark:bg-sage-900/20 rounded-xl p-6 border border-sage-200 dark:border-sage-800">
                  <p className="text-sage-800 dark:text-sage-200 leading-relaxed text-lg">
                    {currentSubtype.growthPath}
                  </p>
                </div>
              </Card>
            </section>
          )}

          {/* Empty state */}
          {!currentStory && !currentSubtype && (
            <div className="text-center py-16 text-charcoal-muted dark:text-gray-500">
              <p className="text-lg">No content available for this subtype.</p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// Section Header Component
interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="text-center">
      <h3 className="font-serif text-2xl font-bold text-charcoal dark:text-white mb-1">{title}</h3>
      <p className="text-charcoal-muted dark:text-gray-500">{subtitle}</p>
    </div>
  );
}

// Card Component
interface CardProps {
  label: string;
  color: string;
  children: React.ReactNode;
}

function Card({ label, color, children }: CardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-warm-border dark:border-gray-700 overflow-hidden shadow-warm">
      <div className="px-6 py-4 border-b border-warm-border dark:border-gray-700">
        <h3 className="font-serif text-lg font-semibold" style={{ color }}>
          {label}
        </h3>
      </div>
      <div className="p-6">{children}</div>
    </div>
  );
}
