import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  getObjectRelationsByType
} from '../../data';
import { useAppStore } from '../../stores';
import { MOTION_DURATION } from '../../lib/motion';
import type { TypeNumber, Subtype } from '../../types';

interface TypeCardProps {
  typeNumber: TypeNumber;
}

type TabId = 'core' | 'motivation' | 'dynamics' | 'instincts' | 'shadow' | 'somatic' | 'groups';

interface Tab {
  id: TabId;
  label: string;
}

const tabs: Tab[] = [
  { id: 'core', label: 'Core' },
  { id: 'motivation', label: 'Motivation' },
  { id: 'dynamics', label: 'Dynamics' },
  { id: 'instincts', label: 'Instincts' },
  { id: 'shadow', label: 'Shadow' },
  { id: 'somatic', label: 'Body' },
  { id: 'groups', label: 'Groups' }
];

export function TypeCard({ typeNumber }: TypeCardProps) {
  const [activeTab, setActiveTab] = useState<TabId>('core');
  const setViewMode = useAppStore((state) => state.setViewMode);

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
    };
  }, [typeNumber]);

  if (!typeData) return null;

  const { type, color, wings, viceVirtue, fixation, holyIdea, integration, disintegration, subtypes, defense, shadow, bodyPattern, harmonic, hornevian, objectRelations } = typeData;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="bg-cream-50 dark:bg-gray-800 rounded-2xl shadow-warm-lg overflow-hidden max-w-2xl transition-colors border border-warm-border dark:border-gray-700"
    >
      {/* Header */}
      <div
        className="p-6 text-white"
        style={{ backgroundColor: color }}
      >
        <div className="flex items-start gap-4 mb-4">
          <span className="text-5xl font-serif font-bold opacity-90">{typeNumber}</span>
          <div>
            <h2 className="font-serif text-2xl font-bold">{type.name}</h2>
            <p className="text-white/80 text-sm mt-1">{type.briefDescription}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setViewMode('compare')}
            className="flex-1 px-4 py-2.5 min-h-[44px] bg-white/20 hover:bg-white/30 rounded-xl text-sm font-medium transition-colors flex items-center justify-center gap-2"
            aria-label="Compare this type with another"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
            Compare
          </button>
          <button
            onClick={() => setViewMode('detail')}
            className="flex-1 px-4 py-2.5 min-h-[44px] bg-white/20 hover:bg-white/30 rounded-xl text-sm font-medium transition-colors flex items-center justify-center gap-2"
            aria-label="View full details"
          >
            Deep Dive
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-warm-border dark:border-gray-700 bg-cream-100 dark:bg-gray-800/50">
        <div
          className="flex overflow-x-auto"
          role="tablist"
          aria-label="Type information sections"
        >
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              onKeyDown={(e) => {
                if (e.key === 'ArrowRight') {
                  e.preventDefault();
                  const nextIndex = (index + 1) % tabs.length;
                  setActiveTab(tabs[nextIndex].id);
                } else if (e.key === 'ArrowLeft') {
                  e.preventDefault();
                  const prevIndex = (index - 1 + tabs.length) % tabs.length;
                  setActiveTab(tabs[prevIndex].id);
                }
              }}
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`tabpanel-${tab.id}`}
              id={`tab-${tab.id}`}
              tabIndex={activeTab === tab.id ? 0 : -1}
              className={`px-4 py-3 min-h-[44px] text-sm font-medium whitespace-nowrap transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-terracotta-500 ${
                activeTab === tab.id
                  ? 'text-charcoal dark:text-white border-b-2'
                  : 'text-charcoal-muted dark:text-gray-400 hover:text-charcoal dark:hover:text-gray-300'
              }`}
              style={{ borderColor: activeTab === tab.id ? color : 'transparent' }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div
        className="p-6"
        role="tabpanel"
        id={`tabpanel-${activeTab}`}
        aria-labelledby={`tab-${activeTab}`}
        tabIndex={0}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: MOTION_DURATION.fast }}
          >
            {activeTab === 'core' && (
              <div className="space-y-6">
                <Section title="Core Fear">
                  <p className="text-charcoal-light dark:text-gray-300">{type.coreFear}</p>
                </Section>

                <Section title="Core Desire">
                  <p className="text-charcoal-light dark:text-gray-300">{type.coreDesire}</p>
                </Section>

                <Section title="Key Motivations">
                  <ul className="list-disc list-inside text-charcoal-light dark:text-gray-300 space-y-1">
                    {type.keyMotivations.map((m, i) => (
                      <li key={i}>{m}</li>
                    ))}
                  </ul>
                </Section>

                <Section title="Wings">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {wings.map(wing => (
                      <div key={wing.variant} className="p-3 bg-cream-100 dark:bg-gray-700 rounded-xl border border-warm-border dark:border-gray-600">
                        <h4 className="font-serif font-semibold text-charcoal dark:text-white">{wing.variant}: {wing.name}</h4>
                        <p className="text-sm text-charcoal-muted dark:text-gray-400 mt-1">{wing.description.slice(0, 100)}...</p>
                      </div>
                    ))}
                  </div>
                </Section>
              </div>
            )}

            {activeTab === 'motivation' && (
              <div className="space-y-6">
                {viceVirtue && (
                  <>
                    <Section title={`Vice (Passion): ${viceVirtue.vice}`}>
                      <p className="text-charcoal-light dark:text-gray-300">{viceVirtue.viceDescription}</p>
                    </Section>

                    <Section title={`Virtue: ${viceVirtue.virtue}`}>
                      <p className="text-charcoal-light dark:text-gray-300">{viceVirtue.virtueDescription}</p>
                    </Section>
                  </>
                )}

                {fixation && (
                  <Section title={`Fixation: ${fixation.name}`}>
                    <p className="text-charcoal-light dark:text-gray-300 italic mb-2">"{fixation.innerVoice}"</p>
                    <p className="text-charcoal-light dark:text-gray-300">{fixation.description}</p>
                  </Section>
                )}

                {holyIdea && (
                  <Section title={`Holy Idea: ${holyIdea.name}`}>
                    <p className="text-charcoal-light dark:text-gray-300 font-medium mb-2">{holyIdea.liberatingTruth}</p>
                    <p className="text-charcoal-light dark:text-gray-300">{holyIdea.description}</p>
                  </Section>
                )}
              </div>
            )}

            {activeTab === 'dynamics' && (
              <div className="space-y-6">
                {integration && (
                  <Section title={`Integration (Growth) → Type ${integration.movesTo}`}>
                    <p className="text-charcoal-light dark:text-gray-300 mb-3">{integration.description}</p>
                    <h5 className="font-medium text-charcoal dark:text-white mb-2">Gains:</h5>
                    <ul className="list-disc list-inside text-charcoal-light dark:text-gray-300 space-y-1">
                      {integration.gains.map((g, i) => <li key={i}>{g}</li>)}
                    </ul>
                    <h5 className="font-medium text-charcoal dark:text-white mt-4 mb-2">Practices:</h5>
                    <ul className="list-disc list-inside text-charcoal-light dark:text-gray-300 space-y-1">
                      {integration.practices.map((p, i) => <li key={i}>{p}</li>)}
                    </ul>
                  </Section>
                )}

                {disintegration && (
                  <Section title={`Disintegration (Stress) → Type ${disintegration.movesTo}`}>
                    <p className="text-charcoal-light dark:text-gray-300 mb-3">{disintegration.description}</p>
                    <h5 className="font-medium text-charcoal dark:text-white mb-2">Warning Signs:</h5>
                    <ul className="list-disc list-inside text-charcoal-light dark:text-gray-300 space-y-1">
                      {disintegration.warningSigns.map((w, i) => <li key={i}>{w}</li>)}
                    </ul>
                  </Section>
                )}
              </div>
            )}

            {activeTab === 'instincts' && (
              <div className="space-y-4">
                {subtypes.map(subtype => (
                  <CollapsibleSubtype key={subtype.instinct} subtype={subtype} color={color} />
                ))}
              </div>
            )}

            {activeTab === 'shadow' && (
              <div className="space-y-6">
                {defense && (
                  <Section title={`Defense Mechanism: ${defense.name}`}>
                    <p className="text-charcoal-light dark:text-gray-300">{defense.description}</p>
                    <div className="mt-3 p-3 bg-cream-100 dark:bg-gray-700 rounded-xl border border-warm-border dark:border-gray-600">
                      <h5 className="font-medium text-charcoal dark:text-white mb-1">Example:</h5>
                      <p className="text-charcoal-muted dark:text-gray-400 text-sm">{defense.example}</p>
                    </div>
                  </Section>
                )}

                {shadow && (
                  <>
                    <Section title="Denied Aspects">
                      <ul className="list-disc list-inside text-charcoal-light dark:text-gray-300 space-y-1">
                        {shadow.deniedAspects.map((a, i) => <li key={i}>{a}</li>)}
                      </ul>
                    </Section>

                    <Section title="Projects Onto Others">
                      <p className="text-charcoal-light dark:text-gray-300 italic">{shadow.projectsOntoOthers}</p>
                    </Section>

                    <Section title="Shadow Work Practices">
                      <ul className="list-disc list-inside text-charcoal-light dark:text-gray-300 space-y-1">
                        {shadow.shadowWork.map((s, i) => <li key={i}>{s}</li>)}
                      </ul>
                    </Section>
                  </>
                )}
              </div>
            )}

            {activeTab === 'somatic' && bodyPattern && (
              <div className="space-y-6">
                <Section title="Body Signature">
                  <p className="text-charcoal-light dark:text-gray-300 font-medium">{bodyPattern.signature}</p>
                </Section>

                <Section title="Tension Areas">
                  <ul className="list-disc list-inside text-charcoal-light dark:text-gray-300 space-y-1">
                    {bodyPattern.tensionAreas.map((t, i) => <li key={i}>{t}</li>)}
                  </ul>
                </Section>

                <Section title="Energy Pattern">
                  <p className="text-charcoal-light dark:text-gray-300">{bodyPattern.energyPattern}</p>
                </Section>

                <Section title="Grounding Practices">
                  <ul className="list-disc list-inside text-charcoal-light dark:text-gray-300 space-y-1">
                    {bodyPattern.groundingPractices.map((p, i) => <li key={i}>{p}</li>)}
                  </ul>
                </Section>
              </div>
            )}

            {activeTab === 'groups' && (
              <div className="space-y-6">
                {harmonic && (
                  <Section title={`Harmonic Group: ${harmonic.displayName}`}>
                    <p className="text-charcoal-light dark:text-gray-300 mb-2">
                      <span className="font-medium">Response to Problems:</span> {harmonic.responseToProblems}
                    </p>
                    <p className="text-charcoal-light dark:text-gray-300">{harmonic.description}</p>
                  </Section>
                )}

                {hornevian && (
                  <Section title={`Hornevian Group: ${hornevian.displayName}`}>
                    <p className="text-charcoal-light dark:text-gray-300 mb-2">
                      <span className="font-medium">Social Movement:</span> {hornevian.socialMovement}
                    </p>
                    <p className="text-charcoal-light dark:text-gray-300">{hornevian.description}</p>
                  </Section>
                )}

                {objectRelations && (
                  <Section title={`Object Relations: ${objectRelations.displayName}`}>
                    <p className="text-charcoal-light dark:text-gray-300 mb-2">
                      <span className="font-medium">Early Pattern:</span> {objectRelations.earlyPattern}
                    </p>
                    <p className="text-charcoal-light dark:text-gray-300">{objectRelations.description}</p>
                  </Section>
                )}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="font-serif text-lg font-semibold text-charcoal dark:text-white mb-2">{title}</h3>
      {children}
    </div>
  );
}

const INSTINCT_COLORS: Record<string, string> = {
  sp: '#C9A962', // Gold
  so: '#7D9B84', // Sage
  sx: '#C4785C'  // Terracotta
};

const INSTINCT_LABELS: Record<string, string> = {
  sp: 'Self-Preservation',
  so: 'Social',
  sx: 'Sexual/One-to-One'
};

function CollapsibleSubtype({ subtype, color }: { subtype: Subtype; color: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const instinctColor = INSTINCT_COLORS[subtype.instinct] || color;

  return (
    <div className="border border-warm-border dark:border-gray-700 rounded-xl overflow-hidden">
      {/* Header - always visible */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 min-h-[44px] flex items-center justify-between bg-cream-100 dark:bg-gray-700/50 hover:bg-cream-200 dark:hover:bg-gray-700 transition-colors text-left"
      >
        <div className="flex items-center gap-3">
          <span
            className="px-2 py-0.5 text-xs font-bold rounded text-white uppercase"
            style={{ backgroundColor: instinctColor }}
          >
            {subtype.instinct}
          </span>
          <div>
            <h4 className="font-serif font-semibold text-charcoal dark:text-white">
              {subtype.name}
            </h4>
            <p className="text-xs text-charcoal-muted dark:text-gray-400">
              {INSTINCT_LABELS[subtype.instinct]}
            </p>
          </div>
        </div>
        <motion.svg
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="w-5 h-5 text-charcoal-muted dark:text-gray-400 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>

      {/* Collapsible content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="p-4 space-y-4 border-t border-warm-border dark:border-gray-700 bg-white dark:bg-gray-800">
              {/* Ichazo Title */}
              {subtype.ichazoTitle !== subtype.name && (
                <p className="text-charcoal-muted dark:text-gray-400 text-sm italic">
                  Ichazo Title: {subtype.ichazoTitle}
                </p>
              )}

              {/* Description */}
              <p className="text-charcoal-light dark:text-gray-300">{subtype.description}</p>

              {/* Characteristics */}
              <div>
                <h5 className="font-medium text-charcoal dark:text-white mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: instinctColor }} />
                  Key Characteristics
                </h5>
                <ul className="space-y-1.5 ml-3">
                  {subtype.characteristics.map((c, i) => (
                    <li key={i} className="text-charcoal-light dark:text-gray-300 text-sm flex items-start gap-2">
                      <span className="text-charcoal-muted dark:text-gray-500 mt-1">•</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Blind Spots */}
              {subtype.blindSpots && subtype.blindSpots.length > 0 && (
                <div>
                  <h5 className="font-medium text-charcoal dark:text-white mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-terracotta-500" />
                    Blind Spots
                  </h5>
                  <ul className="space-y-1.5 ml-3">
                    {subtype.blindSpots.map((b, i) => (
                      <li key={i} className="text-charcoal-light dark:text-gray-300 text-sm flex items-start gap-2">
                        <span className="text-terracotta-500 mt-1">!</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Growth Path */}
              {subtype.growthPath && (
                <div className="mt-3 p-3 bg-sage-50 dark:bg-sage-900/20 rounded-lg border border-sage-200 dark:border-sage-800">
                  <h5 className="font-medium text-sage-800 dark:text-sage-200 mb-1 text-sm">Path of Growth</h5>
                  <p className="text-sage-700 dark:text-sage-300 text-sm">{subtype.growthPath}</p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
