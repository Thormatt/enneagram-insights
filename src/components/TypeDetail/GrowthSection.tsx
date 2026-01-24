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
                    <span className="text-terracotta-500 flex-shrink-0">⚠</span>
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

const LEVEL_COLORS: Record<string, { accent: string; bg: string; border: string }> = {
  healthy: { accent: '#7D9B84', bg: 'bg-sage-50 dark:bg-sage-900/20', border: 'border-sage-200 dark:border-sage-800' },
  average: { accent: '#C9A962', bg: 'bg-gold-50 dark:bg-gold-900/20', border: 'border-gold-200 dark:border-gold-800' },
  unhealthy: { accent: '#C4785C', bg: 'bg-terracotta-50 dark:bg-terracotta-900/20', border: 'border-terracotta-200 dark:border-terracotta-800' }
};

function LevelsContent({ levels }: LevelsContentProps) {
  if (!levels) {
    return (
      <div className="text-center py-16 text-charcoal-muted dark:text-gray-500">
        <p className="text-lg">No level data available.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {(['healthy', 'average', 'unhealthy'] as const).map(state => {
        const stateLevels = levels.filter(l => l.state === state);
        const colors = LEVEL_COLORS[state];
        const stateLabel = state.charAt(0).toUpperCase() + state.slice(1);

        return (
          <Card
            key={state}
            label={`${stateLabel} Levels`}
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
                      <p className="text-charcoal-muted dark:text-gray-400 italic text-sm mb-3">
                        "{level.innerExperience}"
                      </p>
                      <ul className="space-y-1">
                        {level.characteristics.slice(0, 3).map((c, i) => (
                          <li key={i} className="text-sm text-charcoal-light dark:text-gray-400 flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: colors.accent }} />
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        );
      })}
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
      <div className="bg-warm-gradient rounded-2xl p-8 border border-warm-border">
        <p className="text-xs font-medium uppercase tracking-wider text-charcoal-muted dark:text-gray-500 mb-2">
          Body Signature
        </p>
        <p className="text-2xl font-serif text-charcoal dark:text-white leading-relaxed">
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
