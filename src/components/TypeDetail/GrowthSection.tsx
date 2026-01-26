import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { TypeNumber, IntegrationPath, DisintegrationPath, LevelOfDevelopment, DefenseMechanism, Shadow, BodyPattern } from '../../types';

interface GrowthSectionProps {
  typeNumber: TypeNumber;
  color: string;
  integration: IntegrationPath | undefined;
  disintegration: DisintegrationPath | undefined;
  levels: LevelOfDevelopment[] | undefined;
  defense: DefenseMechanism | undefined;
  shadow: Shadow | undefined;
  bodyPattern: BodyPattern | undefined;
}

type GrowthTab = 'movement' | 'levels' | 'shadow' | 'body';

const growthTabs: { id: GrowthTab; label: string }[] = [
  { id: 'movement', label: 'Movement' },
  { id: 'levels', label: 'Levels' },
  { id: 'shadow', label: 'Shadow' },
  { id: 'body', label: 'Body' }
];

export function GrowthSection({
  color,
  integration,
  disintegration,
  levels,
  defense,
  shadow,
  bodyPattern
}: GrowthSectionProps) {
  const [activeTab, setActiveTab] = useState<GrowthTab>('movement');

  return (
    <div className="space-y-8">
      {/* Sub-navigation */}
      <div className="flex gap-2 justify-center">
        {growthTabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              activeTab === tab.id
                ? 'bg-charcoal dark:bg-white text-white dark:text-charcoal'
                : 'text-charcoal-light dark:text-gray-400 hover:bg-cream-200 dark:hover:bg-gray-800'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.1 }}
        >
          {activeTab === 'movement' && (
            <MovementContent integration={integration} disintegration={disintegration} />
          )}

          {activeTab === 'levels' && (
            <LevelsContent levels={levels} />
          )}

          {activeTab === 'shadow' && (
            <ShadowContent defense={defense} shadow={shadow} color={color} />
          )}

          {activeTab === 'body' && (
            <BodyContent bodyPattern={bodyPattern} />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

interface MovementContentProps {
  integration: IntegrationPath | undefined;
  disintegration: DisintegrationPath | undefined;
}

function MovementContent({ integration, disintegration }: MovementContentProps) {
  return (
    <div className="space-y-6">
      {integration && (
        <Card label="Integration" title={`Growth toward Type ${integration.movesTo}`} color="#7D9B84">
          <p className="text-charcoal-light dark:text-gray-300 leading-relaxed mb-6">
            {integration.description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-sage-50 dark:bg-sage-900/20 rounded-xl p-5 border border-sage-200 dark:border-sage-800">
              <h5 className="font-serif font-semibold text-sage-700 dark:text-sage-300 mb-3">
                What You Gain
              </h5>
              <ul className="space-y-2">
                {integration.gains.map((g, i) => (
                  <li key={i} className="flex items-start gap-3 text-charcoal-light dark:text-gray-300">
                    <span className="w-5 h-5 rounded-full bg-sage-200 dark:bg-sage-800 flex items-center justify-center text-sage-700 dark:text-sage-300 text-xs flex-shrink-0 mt-0.5">
                      +
                    </span>
                    {g}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-sage-50 dark:bg-sage-900/20 rounded-xl p-5 border border-sage-200 dark:border-sage-800">
              <h5 className="font-serif font-semibold text-sage-700 dark:text-sage-300 mb-3">
                Practices
              </h5>
              <ul className="space-y-2">
                {integration.practices.map((p, i) => (
                  <li key={i} className="flex items-start gap-3 text-charcoal-light dark:text-gray-300">
                    <span className="text-sage-500 flex-shrink-0">→</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Card>
      )}

      {disintegration && (
        <Card label="Disintegration" title={`Stress toward Type ${disintegration.movesTo}`} color="#C4785C">
          <p className="text-charcoal-light dark:text-gray-300 leading-relaxed mb-6">
            {disintegration.description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-terracotta-50 dark:bg-terracotta-900/20 rounded-xl p-5 border border-terracotta-200 dark:border-terracotta-800">
              <h5 className="font-serif font-semibold text-terracotta-700 dark:text-terracotta-300 mb-3">
                What Emerges
              </h5>
              <ul className="space-y-2">
                {disintegration.exhibits.map((e, i) => (
                  <li key={i} className="flex items-start gap-3 text-charcoal-light dark:text-gray-300">
                    <span className="w-5 h-5 rounded-full bg-terracotta-200 dark:bg-terracotta-800 flex items-center justify-center text-terracotta-700 dark:text-terracotta-300 text-xs flex-shrink-0 mt-0.5">
                      !
                    </span>
                    {e}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-terracotta-50 dark:bg-terracotta-900/20 rounded-xl p-5 border border-terracotta-200 dark:border-terracotta-800">
              <h5 className="font-serif font-semibold text-terracotta-700 dark:text-terracotta-300 mb-3">
                Warning Signs
              </h5>
              <ul className="space-y-2">
                {disintegration.warningSigns.map((w, i) => (
                  <li key={i} className="flex items-start gap-3 text-charcoal-light dark:text-gray-300">
                    <svg className="w-4 h-4 text-terracotta-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    {w}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}

interface LevelsContentProps {
  levels: LevelOfDevelopment[] | undefined;
}

type HealthState = 'healthy' | 'average' | 'unhealthy';

const LEVEL_COLORS: Record<HealthState, { accent: string; bg: string; border: string; buttonBg: string }> = {
  healthy: {
    accent: '#7D9B84',
    bg: 'bg-sage-50 dark:bg-sage-900/20',
    border: 'border-sage-200 dark:border-sage-800',
    buttonBg: 'bg-green-500'
  },
  average: {
    accent: '#C9A962',
    bg: 'bg-gold-50 dark:bg-gold-900/20',
    border: 'border-gold-200 dark:border-gold-800',
    buttonBg: 'bg-amber-500'
  },
  unhealthy: {
    accent: '#C4785C',
    bg: 'bg-terracotta-50 dark:bg-terracotta-900/20',
    border: 'border-terracotta-200 dark:border-terracotta-800',
    buttonBg: 'bg-red-500'
  }
};

const HEALTH_STATE_CONFIG: { id: HealthState; label: string; description: string }[] = [
  { id: 'healthy', label: 'At Their Best', description: 'Levels 1-3' },
  { id: 'average', label: 'Average Day', description: 'Levels 4-6' },
  { id: 'unhealthy', label: 'Under Pressure', description: 'Levels 7-9' }
];

function HealthStateIcon({ state }: { state: HealthState }) {
  if (state === 'healthy') {
    return (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    );
  }
  if (state === 'average') {
    return (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
      </svg>
    );
  }
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  );
}

function LevelsContent({ levels }: LevelsContentProps) {
  const [selectedState, setSelectedState] = useState<HealthState>('healthy');

  if (!levels) {
    return (
      <div className="text-center py-16 text-charcoal-muted dark:text-gray-500">
        <p className="text-lg">No level data available.</p>
      </div>
    );
  }

  const stateLevels = levels.filter(l => l.state === selectedState);
  const colors = LEVEL_COLORS[selectedState];

  return (
    <div className="space-y-6">
      {/* Health State Toggle */}
      <div className="flex flex-wrap gap-2 justify-center">
        {HEALTH_STATE_CONFIG.map((config) => {
          const isSelected = selectedState === config.id;
          const stateColors = LEVEL_COLORS[config.id];
          return (
            <button
              key={config.id}
              onClick={() => setSelectedState(config.id)}
              title={config.description}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
                transition-all duration-200
                ${isSelected
                  ? `${stateColors.buttonBg} text-white shadow-md`
                  : 'bg-cream-200 dark:bg-gray-700 text-charcoal-light dark:text-gray-300 hover:bg-cream-300 dark:hover:bg-gray-600'
                }
              `}
            >
              <HealthStateIcon state={config.id} />
              <span>{config.label}</span>
            </button>
          );
        })}
      </div>

      {/* Levels for Selected State */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedState}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.15 }}
        >
          <Card
            label={`${selectedState.charAt(0).toUpperCase() + selectedState.slice(1)} Levels`}
            title={`Levels ${stateLevels.map(l => l.level).join(', ')}`}
            color={colors.accent}
          >
            <div className="space-y-4">
              {stateLevels.map(level => (
                <div
                  key={level.level}
                  className={`${colors.bg} rounded-xl p-5 border ${colors.border}`}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                      style={{ backgroundColor: colors.accent }}
                    >
                      {level.level}
                    </span>
                    <div className="flex-1">
                      <h5 className="font-serif font-semibold text-charcoal dark:text-white mb-2">
                        {level.title}
                      </h5>
                      <p className="text-sm text-charcoal-light dark:text-gray-300 mb-3">
                        {level.description}
                      </p>
                      <p className="text-charcoal-muted dark:text-gray-400 italic text-sm mb-3">
                        "{level.innerExperience}"
                      </p>
                      <div className="mb-3">
                        <h6 className="text-xs font-semibold text-charcoal-muted dark:text-gray-500 uppercase mb-2">
                          Key Characteristics
                        </h6>
                        <ul className="space-y-1">
                          {level.characteristics.map((c, i) => (
                            <li key={i} className="text-sm text-charcoal-light dark:text-gray-400 flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: colors.accent }} />
                              {c}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

interface ShadowContentProps {
  defense: DefenseMechanism | undefined;
  shadow: Shadow | undefined;
  color: string;
}

function ShadowContent({ defense, shadow, color }: ShadowContentProps) {
  return (
    <div className="space-y-6">
      {defense && (
        <Card label="Defense Mechanism" title={defense.name} color={color}>
          <p className="text-charcoal-light dark:text-gray-300 leading-relaxed mb-6">
            {defense.description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-cream-200 dark:bg-gray-700 rounded-xl p-5">
              <h5 className="font-serif font-semibold text-charcoal dark:text-white mb-2">
                Example
              </h5>
              <p className="text-sm text-charcoal-light dark:text-gray-400">
                {defense.example}
              </p>
            </div>
            <div className="bg-cream-200 dark:bg-gray-700 rounded-xl p-5">
              <h5 className="font-serif font-semibold text-charcoal dark:text-white mb-2">
                In Action
              </h5>
              <p className="text-sm text-charcoal-light dark:text-gray-400">
                {defense.inAction}
              </p>
            </div>
          </div>
        </Card>
      )}

      {shadow && (
        <>
          <Card label="Shadow Projection" title="What You Project Onto Others" color="#8b5cf6">
            <blockquote className="bg-cream-100 dark:bg-gray-700 rounded-lg py-4 px-5 border-l-4 border-purple-400">
              <p className="text-xl font-serif italic text-charcoal dark:text-gray-200">
                "{shadow.projectsOntoOthers}"
              </p>
            </blockquote>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card label="Denied Aspects" title="What You Don't See" color="#C4785C">
              <ul className="space-y-3">
                {shadow.deniedAspects.map((a, i) => (
                  <li key={i} className="flex items-start gap-3 text-charcoal-light dark:text-gray-300">
                    <span className="w-6 h-6 rounded-full bg-terracotta-100 dark:bg-terracotta-900/30 flex items-center justify-center text-terracotta-600 dark:text-terracotta-400 text-sm font-bold flex-shrink-0 mt-0.5">
                      !
                    </span>
                    {a}
                  </li>
                ))}
              </ul>
            </Card>

            <Card label="Shadow Work" title="Practices for Integration" color="#7D9B84">
              <ul className="space-y-3">
                {shadow.shadowWork.map((s, i) => (
                  <li key={i} className="flex items-start gap-3 text-charcoal-light dark:text-gray-300">
                    <span
                      className="w-6 h-6 rounded-full bg-sage-100 dark:bg-sage-900/30 flex items-center justify-center text-sage-700 dark:text-sage-300 text-xs font-bold flex-shrink-0 mt-0.5"
                    >
                      {i + 1}
                    </span>
                    {s}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </>
      )}
    </div>
  );
}

interface BodyContentProps {
  bodyPattern: BodyPattern | undefined;
}

function BodyContent({ bodyPattern }: BodyContentProps) {
  if (!bodyPattern) {
    return (
      <div className="text-center py-16 text-charcoal-muted dark:text-gray-500">
        <p className="text-lg">No body pattern data available.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Body Signature - Hero */}
      <div className="bg-cream-200 dark:bg-gray-800 rounded-2xl p-8 border border-warm-border dark:border-gray-700">
        <p className="text-xs font-medium uppercase tracking-wider text-charcoal-muted dark:text-gray-400 mb-2">
          Body Signature
        </p>
        <p className="text-2xl font-serif text-charcoal dark:text-gray-100 leading-relaxed">
          {bodyPattern.signature}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card label="Tension Areas" title="Where You Hold Stress" color="#C4785C">
          <ul className="space-y-3">
            {bodyPattern.tensionAreas.map((t, i) => (
              <li key={i} className="flex items-start gap-3 text-charcoal-light dark:text-gray-300">
                <span className="w-6 h-6 rounded-full bg-terracotta-100 dark:bg-terracotta-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-terracotta-500 dark:bg-terracotta-400" />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </Card>

        <Card label="Energy Pattern" title="How Energy Moves" color="#C9A962">
          <p className="text-charcoal-light dark:text-gray-300 leading-relaxed">
            {bodyPattern.energyPattern}
          </p>
        </Card>
      </div>

      <Card label="Grounding Practices" title="Coming Back to the Body" color="#7D9B84">
        <div className="bg-sage-50 dark:bg-sage-900/20 rounded-xl p-6 border border-sage-200 dark:border-sage-800">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {bodyPattern.groundingPractices.map((p, i) => (
              <li key={i} className="flex items-start gap-3 text-charcoal-light dark:text-gray-300">
                <span className="text-sage-500 font-bold">→</span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </div>
  );
}

// Card Component
interface CardProps {
  label: string;
  title?: string;
  color: string;
  children: React.ReactNode;
}

function Card({ label, title, color, children }: CardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-warm-border dark:border-gray-700 overflow-hidden shadow-warm">
      <div className="px-6 py-4 border-b border-warm-border dark:border-gray-700">
        <p className="text-xs font-medium uppercase tracking-wider text-charcoal-muted dark:text-gray-500 mb-1">
          {label}
        </p>
        {title && (
          <h3 className="text-xl font-serif font-semibold" style={{ color }}>
            {title}
          </h3>
        )}
        {!title && (
          <h3 className="text-xl font-serif font-semibold" style={{ color }}>
            {label}
          </h3>
        )}
      </div>
      <div className="p-6">{children}</div>
    </div>
  );
}
