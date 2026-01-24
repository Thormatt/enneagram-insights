import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { TypeNumber, EnneagramType, Wing, ViceVirtue, Fixation, HolyIdea } from '../../types';

interface CoreSectionProps {
  type: EnneagramType;
  color: string;
  wings: Wing[];
  viceVirtue: ViceVirtue | undefined;
  fixation: Fixation | undefined;
  holyIdea: HolyIdea | undefined;
  essence: {
    essenceQuality: string;
    essenceDescription: string;
    beforeConditioning: string;
    howYouForgot: string;
    returnPath: string;
    essenceContact: string;
    allTypesIntegration: Array<{ type: TypeNumber; quality: string; practice: string }>;
  } | undefined;
}

type CoreTab = 'overview' | 'mechanics' | 'essence';

const coreTabs: { id: CoreTab; label: string }[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'mechanics', label: 'Inner Mechanics' },
  { id: 'essence', label: 'Essence' }
];

export function CoreSection({
  type,
  color,
  wings,
  viceVirtue,
  fixation,
  holyIdea,
  essence
}: CoreSectionProps) {
  const [activeTab, setActiveTab] = useState<CoreTab>('overview');

  return (
    <div className="space-y-8">
      {/* Sub-navigation */}
      <div className="flex gap-2 justify-center">
        {coreTabs.map(tab => (
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
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Core Fear & Desire */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card label="Core Fear" color={color}>
                  <p className="text-lg text-charcoal dark:text-gray-200 leading-relaxed">
                    {type.coreFear}
                  </p>
                </Card>
                <Card label="Core Desire" color={color}>
                  <p className="text-lg text-charcoal dark:text-gray-200 leading-relaxed">
                    {type.coreDesire}
                  </p>
                </Card>
              </div>

              {/* Key Motivations */}
              <Card label="Key Motivations" color={color}>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {type.keyMotivations.map((m, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span
                        className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-semibold flex-shrink-0 mt-0.5"
                        style={{ backgroundColor: color }}
                      >
                        {i + 1}
                      </span>
                      <span className="text-charcoal-light dark:text-gray-300">{m}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Wings */}
              <Card label="Wings" color={color}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {wings.map(wing => (
                    <div key={wing.variant} className="bg-cream-100 dark:bg-gray-800 rounded-xl p-5">
                      <h4 className="font-serif text-xl font-semibold text-charcoal dark:text-white mb-2">
                        {wing.variant}
                      </h4>
                      <p className="text-sm font-medium text-charcoal-muted dark:text-gray-400 mb-3">
                        {wing.name}
                      </p>
                      <p className="text-charcoal-light dark:text-gray-300 mb-4">
                        {wing.description}
                      </p>
                      <ul className="space-y-2">
                        {wing.characteristics.slice(0, 3).map((c, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-charcoal-muted dark:text-gray-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-terracotta-500 mt-1.5 flex-shrink-0" />
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          )}

          {activeTab === 'mechanics' && (
            <div className="space-y-6">
              {/* Vice & Virtue */}
              {viceVirtue && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card label="Vice (Passion)" title={viceVirtue.vice} color="#C4785C">
                    <p className="text-charcoal-light dark:text-gray-300 leading-relaxed">
                      {viceVirtue.viceDescription}
                    </p>
                  </Card>
                  <Card label="Virtue" title={viceVirtue.virtue} color="#7D9B84">
                    <p className="text-charcoal-light dark:text-gray-300 leading-relaxed">
                      {viceVirtue.virtueDescription}
                    </p>
                  </Card>
                </div>
              )}

              {/* Fixation */}
              {fixation && (
                <Card label="Fixation" title={fixation.name} color={color}>
                  <blockquote className="bg-cream-100 dark:bg-gray-700 rounded-lg py-4 px-5 border-l-4 border-terracotta-500 mb-6">
                    <p className="text-xl font-serif italic text-charcoal dark:text-gray-200">
                      "{fixation.innerVoice}"
                    </p>
                  </blockquote>
                  <p className="text-charcoal-light dark:text-gray-300 leading-relaxed">
                    {fixation.description}
                  </p>
                </Card>
              )}

              {/* Holy Idea */}
              {holyIdea && (
                <Card label="Holy Idea" title={holyIdea.name} color="#C9A962">
                  <p className="text-lg font-medium text-charcoal dark:text-gray-200 mb-4">
                    {holyIdea.liberatingTruth}
                  </p>
                  <p className="text-charcoal-light dark:text-gray-300 leading-relaxed mb-4">
                    {holyIdea.description}
                  </p>
                  {holyIdea.realization && (
                    <div className="bg-gold-50 dark:bg-gold-900/20 rounded-xl p-5 border border-gold-200 dark:border-gold-800">
                      <p className="text-sm font-medium text-gold-700 dark:text-gold-300 mb-2">Realization</p>
                      <p className="text-gold-800 dark:text-gold-200">{holyIdea.realization}</p>
                    </div>
                  )}
                </Card>
              )}
            </div>
          )}

          {activeTab === 'essence' && essence && (
            <div className="space-y-6">
              {/* Essence Quality */}
              <Card label="Your Essence" title={essence.essenceQuality} color="#8b5cf6">
                <p className="text-lg text-charcoal-light dark:text-gray-300 leading-relaxed whitespace-pre-line">
                  {essence.essenceDescription}
                </p>
              </Card>

              {/* Before Conditioning */}
              <Card label="Before Conditioning" title="Who You Were" color="#a78bfa">
                <p className="text-charcoal-light dark:text-gray-300 leading-relaxed whitespace-pre-line">
                  {essence.beforeConditioning}
                </p>
              </Card>

              {/* How You Forgot */}
              <Card label="The Pattern's Origin" title="How You Forgot" color="#7c3aed">
                <p className="text-charcoal-light dark:text-gray-300 leading-relaxed whitespace-pre-line">
                  {essence.howYouForgot}
                </p>
              </Card>

              {/* Return Path */}
              <Card label="Coming Home" title="The Return Path" color="#6d28d9">
                <p className="text-charcoal-light dark:text-gray-300 leading-relaxed whitespace-pre-line">
                  {essence.returnPath}
                </p>
              </Card>

              {/* Essence Contact */}
              <Card label="Signs of Contact" title="Essence Contact" color="#5b21b6">
                <p className="text-charcoal-light dark:text-gray-300 leading-relaxed whitespace-pre-line">
                  {essence.essenceContact}
                </p>
              </Card>

              {/* Remember callout */}
              <div className="bg-warm-gradient rounded-2xl p-8 border border-warm-border">
                <h4 className="font-serif text-xl font-semibold text-charcoal dark:text-white mb-4">
                  Remember
                </h4>
                <p className="text-charcoal-light dark:text-gray-300 leading-relaxed">
                  Your type is not who you <em className="font-medium text-charcoal">are</em>—it's your pattern of forgetting who you are.
                  The goal is not to become a "healthy {type.name}" but to transcend type fixation altogether,
                  returning to the wholeness you never actually lost. You are already essence; the personality
                  is just a veil. Every moment of presence, of seeing the pattern without being controlled by it,
                  is a moment of homecoming.
                </p>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
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
