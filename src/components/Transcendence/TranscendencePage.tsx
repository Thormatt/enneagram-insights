import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getTypeZeroData, getUniversalPractices, getTeachings } from '../../data';
import type { TranscendenceTeaching } from '../../data/essence/transcendence';

interface TranscendencePageProps {
  onClose?: () => void;
}

type SectionId = 'overview' | 'teachings' | 'practices' | 'essence-personality' | 'inner-symbol' | 'return';

interface Section {
  id: SectionId;
  label: string;
  icon: string;
}

const sections: Section[] = [
  { id: 'overview', label: 'Type Zero', icon: '0' },
  { id: 'teachings', label: 'Teachings', icon: 'T' },
  { id: 'practices', label: 'Practices', icon: 'P' },
  { id: 'essence-personality', label: 'Essence vs Personality', icon: 'E' },
  { id: 'inner-symbol', label: 'The Symbol', icon: 'S' },
  { id: 'return', label: 'Begin', icon: '∞' },
];

export function TranscendencePage({ onClose }: TranscendencePageProps) {
  const [activeSection, setActiveSection] = useState<SectionId>('overview');
  const typeZero = getTypeZeroData();
  const practices = getUniversalPractices();
  const teachings = getTeachings();

  // Scroll to top when switching sections
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSection]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-950 to-gray-900">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-gray-900 border-b border-purple-800/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                ∅
              </span>
              <h1 className="text-xl font-semibold text-white">Beyond Type</h1>
            </div>
            {onClose && (
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              >
                <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="w-32 h-32 mx-auto mb-8 relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 opacity-20" />
              <div className="relative w-full h-full rounded-full border-2 border-purple-400/50 flex items-center justify-center bg-gray-900">
                <span className="text-6xl font-light text-purple-300">0</span>
              </div>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Return to Essence
            </h2>
            <p className="text-xl text-purple-200/80 leading-relaxed max-w-2xl mx-auto">
              Your type is not who you ARE—it's your pattern of forgetting who you are.
              The Enneagram is a map of return to wholeness.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Section Navigation */}
      <div className="sticky top-16 z-10 bg-gray-900 border-b border-purple-800/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex overflow-x-auto py-2 gap-1">
            {sections.map(section => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors min-h-[44px] ${
                  activeSection === section.id
                    ? 'bg-purple-600 text-white'
                    : 'text-purple-300 hover:bg-white/10'
                }`}
              >
                <span className="mr-2">{section.icon}</span>
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.1 }}
          >
            {activeSection === 'overview' && (
              <div className="space-y-8">
                <Card title="What is Type Zero?">
                  <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                    {typeZero.description}
                  </p>
                </Card>

                <Card title="Signs of Awakening">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {typeZero.signsOfAwakening.map((sign, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                        <span className="text-gray-300">{sign}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            )}

            {activeSection === 'teachings' && (
              <div className="space-y-8">
                <Card title="Gurdjieff: Essence and Personality">
                  <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                    {typeZero.gurdjieffTeaching}
                  </p>
                </Card>

                <Card title="Ichazo: The Arica School">
                  <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                    {typeZero.ichazoTeaching}
                  </p>
                </Card>

                <Card title="Sufi Origins">
                  <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                    {typeZero.sufiOrigins}
                  </p>
                </Card>

                <div className="grid grid-cols-1 gap-6">
                  {teachings.map((teaching: TranscendenceTeaching) => (
                    <TeachingCard key={teaching.id} teaching={teaching} />
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'practices' && (
              <div className="space-y-6">
                <p className="text-purple-200/80 text-lg mb-8">
                  These practices are not about becoming a better version of your type—they're about
                  waking up from the dream of being a type at all. They work for everyone, regardless
                  of type, because they address the universal mechanism of ego-identification.
                </p>
                {practices.map((practice, i) => (
                  <Card key={i} title={practice.practice}>
                    <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                      {practice.description}
                    </p>
                  </Card>
                ))}
              </div>
            )}

            {activeSection === 'essence-personality' && (
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card title="Essence" accentColor="#a78bfa">
                    <ul className="space-y-3">
                      {typeZero.essenceVsPersonality.essence.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 flex-shrink-0" />
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>

                  <Card title="Personality" accentColor="#f87171">
                    <ul className="space-y-3">
                      {typeZero.essenceVsPersonality.personality.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 flex-shrink-0" />
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>

                <div className="p-6 bg-gradient-to-r from-purple-900/30 to-indigo-900/30 rounded-xl border border-purple-700/50">
                  <h3 className="text-lg font-semibold text-purple-200 mb-3">The Key Insight</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Personality is not bad—it's necessary. We couldn't function without it. The problem
                    is identification: believing that the personality IS who we are. When we see personality
                    for what it is—a useful tool, a social interface, a survival mechanism—we stop being
                    controlled by it. We can use it without being used by it. This is the difference between
                    being asleep and being awake.
                  </p>
                </div>
              </div>
            )}

            {activeSection === 'inner-symbol' && (
              <div className="space-y-8">
                <Card title="The Inner Triangle (3-6-9)">
                  <div className="space-y-4">
                    <p className="text-gray-300 leading-relaxed">{typeZero.theInnerTriangle.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                      <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                        <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white font-bold mb-3">9</div>
                        <h4 className="font-medium text-purple-300 mb-2">Point Nine</h4>
                        <p className="text-sm text-gray-400">{typeZero.theInnerTriangle.nine}</p>
                      </div>
                      <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                        <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white font-bold mb-3">3</div>
                        <h4 className="font-medium text-purple-300 mb-2">Point Three</h4>
                        <p className="text-sm text-gray-400">{typeZero.theInnerTriangle.three}</p>
                      </div>
                      <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                        <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white font-bold mb-3">6</div>
                        <h4 className="font-medium text-purple-300 mb-2">Point Six</h4>
                        <p className="text-sm text-gray-400">{typeZero.theInnerTriangle.six}</p>
                      </div>
                    </div>
                    <div className="p-4 bg-purple-900/20 rounded-lg border border-purple-700/50 mt-4">
                      <h4 className="font-medium text-purple-300 mb-2">Movement</h4>
                      <p className="text-gray-400">{typeZero.theInnerTriangle.movement}</p>
                    </div>
                  </div>
                </Card>

                <Card title="The Hexad (1-4-2-8-5-7)">
                  <div className="space-y-4">
                    <p className="text-gray-300 leading-relaxed">{typeZero.theHexad.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                        <h4 className="font-medium text-amber-300 mb-2">Movement Pattern</h4>
                        <p className="text-sm text-gray-400">{typeZero.theHexad.movement}</p>
                      </div>
                      <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                        <h4 className="font-medium text-amber-300 mb-2">Meaning</h4>
                        <p className="text-sm text-gray-400">{typeZero.theHexad.meaning}</p>
                      </div>
                    </div>
                  </div>
                </Card>

                <div className="flex justify-center py-8">
                  <div className="relative w-64 h-64">
                    {/* Outer circle */}
                    <div className="absolute inset-0 rounded-full border-2 border-purple-500/50" />
                    {/* Inner triangle */}
                    <svg className="absolute inset-0" viewBox="0 0 100 100">
                      <polygon
                        points="50,10 85,75 15,75"
                        fill="none"
                        stroke="rgba(168, 85, 247, 0.5)"
                        strokeWidth="1"
                      />
                      {/* Hexad - approximation */}
                      <path
                        d="M 50,10 L 85,75 L 15,75 Z"
                        fill="none"
                        stroke="rgba(251, 191, 36, 0.3)"
                        strokeWidth="0.5"
                        strokeDasharray="2,2"
                      />
                    </svg>
                    {/* Center point */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-purple-500/50 blur-sm" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white" />
                    {/* Number labels */}
                    <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 text-purple-300 font-bold">9</span>
                    <span className="absolute bottom-4 right-4 text-purple-300 font-bold">3</span>
                    <span className="absolute bottom-4 left-4 text-purple-300 font-bold">6</span>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'return' && (
              <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
                {/* The Sacred Pause */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="max-w-xl space-y-12"
                >
                  {/* Poetic Insight */}
                  <p className="text-2xl md:text-3xl font-light text-purple-100 leading-relaxed">
                    Beyond all types, beneath every thought, there is presence.
                  </p>

                  {/* Somatic Bridge */}
                  <div className="space-y-6 text-lg text-gray-300">
                    <p>Close this page. Look up from the screen.</p>
                    <p>Feel your feet on the ground. Soften your jaw.</p>
                    <p>Let the exhale be longer than the inhale.</p>
                  </div>

                  {/* Forward Integration */}
                  <p className="text-purple-300/70 text-base">
                    When you return to explore the types, carry this quiet space with you.
                  </p>

                  {/* Return Button */}
                  <div className="pt-8">
                    <button
                      onClick={onClose}
                      className="px-8 py-4 bg-purple-600/30 hover:bg-purple-600/50 border border-purple-500/50 rounded-xl text-purple-200 font-medium transition-all hover:scale-105"
                    >
                      Return to Center
                    </button>
                  </div>
                </motion.div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer */}
      <div className="py-12 px-4 border-t border-purple-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-purple-300/60 text-sm italic">
            "Man is a machine, but a machine that can know it is a machine—and only then can it cease to be a machine."
          </p>
          <p className="text-purple-400/40 text-xs mt-2">— G.I. Gurdjieff</p>
        </div>
      </div>
    </div>
  );
}

// Card Component
interface CardProps {
  title: string;
  accentColor?: string;
  children: React.ReactNode;
}

function Card({ title, accentColor = '#a78bfa', children }: CardProps) {
  return (
    <div className="bg-gray-800/50 rounded-xl border border-gray-700/50 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-700/50">
        <h3 className="text-lg font-semibold" style={{ color: accentColor }}>{title}</h3>
      </div>
      <div className="p-6">{children}</div>
    </div>
  );
}

// Teaching Card Component
interface TeachingCardProps {
  teaching: TranscendenceTeaching;
}

function TeachingCard({ teaching }: TeachingCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-gray-800/50 rounded-xl border border-gray-700/50 overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
      >
        <div>
          <h4 className="text-lg font-semibold text-purple-300">{teaching.title}</h4>
          <p className="text-sm text-gray-500">{teaching.source}</p>
        </div>
        <svg
          className={`w-5 h-5 text-gray-400 transition-transform ${expanded ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {expanded && (
        <div className="px-6 pb-6 border-t border-gray-700/50 pt-4">
          <p className="text-gray-300 leading-relaxed whitespace-pre-line mb-4">
            {teaching.teaching}
          </p>
          {teaching.practice && (
            <div className="p-4 bg-purple-900/20 rounded-lg border border-purple-700/50">
              <h5 className="text-sm font-medium text-purple-300 mb-2">Practice</h5>
              <p className="text-gray-400 text-sm">{teaching.practice}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
