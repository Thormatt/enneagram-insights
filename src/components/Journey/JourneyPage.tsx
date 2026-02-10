import { motion } from 'framer-motion';
import { ThemeToggle } from '../Layout/ThemeToggle';

interface JourneyPageProps {
  onClose?: () => void;
}

export function JourneyPage({ onClose }: JourneyPageProps) {
  return (
    <div className="min-h-screen bg-cream-100 dark:bg-gray-900 transition-colors">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-cream-100/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-warm-border dark:border-gray-700">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-14">
            <h1 className="text-lg font-serif font-semibold text-charcoal dark:text-white">
              The Journey
            </h1>
            <div className="flex items-center gap-1">
              <ThemeToggle />
              {onClose && (
                <button
                  onClick={onClose}
                  className="p-3 hover:bg-cream-200 dark:hover:bg-gray-800 rounded-xl transition-colors"
                  aria-label="Close"
                >
                  <svg className="w-5 h-5 text-charcoal-light dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-12"
        >
          {/* Opening */}
          <section className="text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal dark:text-white">
              A Map, Not a Box
            </h2>
            <p className="text-xl text-charcoal-light dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
              The Enneagram isn't here to tell you who you are. It's here to show you the walls you built—so you can walk through them.
            </p>
          </section>

          {/* The Promise */}
          <section className="space-y-4">
            <h3 className="text-xl font-serif font-semibold text-charcoal dark:text-white">
              The Promise
            </h3>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-charcoal-light dark:text-gray-300 leading-relaxed">
                Most personality systems give you a label and leave you there. "You're an introvert. You're a thinker. You're a 9." As if knowing the cage makes it home.
              </p>
              <p className="text-charcoal-light dark:text-gray-300 leading-relaxed">
                The Enneagram is different. It identifies your type not to define you, but to reveal the pattern that's been running your life—often without your consent. Your type isn't who you are. It's the armor you built in childhood to survive. And armor that once protected you can eventually imprison you.
              </p>
              <p className="text-charcoal-light dark:text-gray-300 leading-relaxed">
                The promise isn't to become a "healthy 9" or a "high-functioning 5." The promise is freedom—to live from essence rather than ego, to respond to life freshly rather than from the same defensive script.
              </p>
            </div>
          </section>

          {/* The Four Stages */}
          <section className="space-y-6">
            <h3 className="text-xl font-serif font-semibold text-charcoal dark:text-white">
              The Four Stages
            </h3>

            <div className="space-y-6">
              {/* Stage 1 */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-warm-border dark:border-gray-700 shadow-warm">
                <div className="flex items-start gap-4">
                  <span className="w-10 h-10 rounded-full bg-sage-100 dark:bg-sage-900/30 flex items-center justify-center text-sage-700 dark:text-sage-300 font-bold text-lg flex-shrink-0">
                    1
                  </span>
                  <div>
                    <h4 className="font-serif font-semibold text-charcoal dark:text-white mb-2">
                      Identification
                    </h4>
                    <p className="text-charcoal-light dark:text-gray-300 leading-relaxed">
                      "Oh. I'm a 9. That explains... a lot." The relief of being seen. The shock of recognition. You finally have a name for the water you've been swimming in your whole life.
                    </p>
                  </div>
                </div>
              </div>

              {/* Stage 2 */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-warm-border dark:border-gray-700 shadow-warm">
                <div className="flex items-start gap-4">
                  <span className="w-10 h-10 rounded-full bg-gold-100 dark:bg-gold-900/30 flex items-center justify-center text-gold-700 dark:text-gold-300 font-bold text-lg flex-shrink-0">
                    2
                  </span>
                  <div>
                    <h4 className="font-serif font-semibold text-charcoal dark:text-white mb-2">
                      Observation
                    </h4>
                    <p className="text-charcoal-light dark:text-gray-300 leading-relaxed">
                      You start catching yourself mid-pattern. "There I go again—numbing out to keep the peace." At first it's humbling, even frustrating. You see the pattern everywhere. But seeing it is the beginning of not being run by it.
                    </p>
                  </div>
                </div>
              </div>

              {/* Stage 3 */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-warm-border dark:border-gray-700 shadow-warm">
                <div className="flex items-start gap-4">
                  <span className="w-10 h-10 rounded-full bg-storm-100 dark:bg-storm-900/30 flex items-center justify-center text-storm-700 dark:text-storm-300 font-bold text-lg flex-shrink-0">
                    3
                  </span>
                  <div>
                    <h4 className="font-serif font-semibold text-charcoal dark:text-white mb-2">
                      Disidentification
                    </h4>
                    <p className="text-charcoal-light dark:text-gray-300 leading-relaxed">
                      A subtle but profound shift: "I <em>have</em> this pattern, but I'm not <em>only</em> this pattern." The type becomes something you can hold and examine, rather than the invisible lens through which you see everything.
                    </p>
                  </div>
                </div>
              </div>

              {/* Stage 4 */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-warm-border dark:border-gray-700 shadow-warm">
                <div className="flex items-start gap-4">
                  <span className="w-10 h-10 rounded-full bg-terracotta-100 dark:bg-terracotta-900/30 flex items-center justify-center text-terracotta-700 dark:text-terracotta-300 font-bold text-lg flex-shrink-0">
                    4
                  </span>
                  <div>
                    <h4 className="font-serif font-semibold text-charcoal dark:text-white mb-2">
                      Freedom
                    </h4>
                    <p className="text-charcoal-light dark:text-gray-300 leading-relaxed">
                      The pattern still arises—it always will. But you're no longer unconsciously driven by it. You can choose. The 9 can speak up. The 8 can soften. The 5 can stay present. Not as a performance, but as a natural expression of who you really are.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Beyond Type */}
          <section className="space-y-4">
            <h3 className="text-xl font-serif font-semibold text-charcoal dark:text-white">
              Beyond Type
            </h3>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-charcoal-light dark:text-gray-300 leading-relaxed">
                At this stage, you don't become type-less. You become <em>type-fluid</em>. You can access the gifts of all nine types because you're no longer defending against their shadows.
              </p>
              <p className="text-charcoal-light dark:text-gray-300 leading-relaxed">
                A Nine who's done the work can be assertive like an Eight, focused like a Three, boundaried like a Five—not as a mask, but naturally. Because the fear that kept them merged and invisible has loosened its grip.
              </p>
              <p className="text-charcoal-light dark:text-gray-300 leading-relaxed">
                The Enneagram traditions—Gurdjieff, Ichazo, Naranjo—all point to this: the type is the <em>ego structure</em>, not the <em>essence</em>. The work is remembering who you were before the armor formed.
              </p>
            </div>
          </section>

          {/* How to Use This App */}
          <section className="space-y-4">
            <h3 className="text-xl font-serif font-semibold text-charcoal dark:text-white">
              Using This App
            </h3>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-charcoal-light dark:text-gray-300 leading-relaxed">
                Everything here—the type descriptions, the subtypes, the growth paths, the practices—is in service of this journey. Not to nail down exactly what you are, but to help you see clearly enough to become free.
              </p>
              <p className="text-charcoal-light dark:text-gray-300 leading-relaxed">
                When you read about your type, don't just nod along. Feel the discomfort of recognition. When you explore the shadow work, don't skip to the growth tips. Sit with what you've been avoiding.
              </p>
              <p className="text-charcoal-light dark:text-gray-300 leading-relaxed">
                The Enneagram meets you where you are. It can be a fun typing party or a ruthless mirror. The depth you get is the depth you bring.
              </p>
            </div>
          </section>

          {/* Closing */}
          <section className="text-center pt-8 border-t border-warm-border dark:border-gray-700 space-y-8">
            <blockquote className="text-xl sm:text-2xl font-serif italic text-charcoal dark:text-gray-200 max-w-xl mx-auto">
              "The goal is not to become a better prisoner, but to realize the door was never locked."
            </blockquote>

            {onClose && (
              <button
                onClick={onClose}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-terracotta-500 hover:bg-terracotta-600 text-white font-medium text-base transition-colors shadow-warm"
              >
                Continue
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            )}
          </section>
        </motion.article>
      </main>
    </div>
  );
}
