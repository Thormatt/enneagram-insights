import { motion, AnimatePresence } from 'framer-motion';

interface OnboardingModalProps {
  isOpen: boolean;
  onComplete: (experienceLevel: 'new' | 'familiar') => void;
}

export function OnboardingModal({ isOpen, onComplete }: OnboardingModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={() => onComplete('familiar')}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            style={{ willChange: 'transform, opacity' }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-cream-50 dark:bg-gray-800 rounded-2xl shadow-warm-lg max-w-lg w-full overflow-hidden relative">
              {/* Skip button */}
              <button
                onClick={() => onComplete('familiar')}
                className="absolute top-4 right-4 p-2 text-charcoal-muted hover:text-charcoal dark:text-gray-400 dark:hover:text-white hover:bg-cream-200 dark:hover:bg-gray-700 rounded-xl transition-colors z-10"
                aria-label="Skip onboarding"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Header */}
              <div className="bg-warm-gradient dark:bg-gray-800 p-8 text-center border-b border-warm-border dark:border-gray-700">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-terracotta-500 flex items-center justify-center shadow-warm">
                  <span className="text-4xl font-serif font-bold text-white">9</span>
                </div>
                <h1 className="font-serif text-2xl font-bold text-charcoal dark:text-white mb-2">
                  Welcome to Enneagram Sync
                </h1>
                <p className="text-charcoal-muted dark:text-gray-400">
                  Your journey of self-discovery begins here
                </p>
              </div>

              {/* Content */}
              <div className="p-8">
                <h2 className="font-serif text-lg font-semibold text-charcoal dark:text-white text-center mb-6">
                  How familiar are you with the Enneagram?
                </h2>

                <div className="space-y-4">
                  {/* New to Enneagram */}
                  <button
                    onClick={() => onComplete('new')}
                    className="w-full p-6 rounded-xl border-2 border-warm-border dark:border-gray-600 hover:border-sage-400 dark:hover:border-sage-500 transition-all group text-left bg-white dark:bg-gray-700"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-sage-100 dark:bg-sage-900/50 flex items-center justify-center flex-shrink-0 group-hover:bg-sage-200 dark:group-hover:bg-sage-800/50 transition-colors">
                        <svg className="w-6 h-6 text-sage-600 dark:text-sage-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-serif font-semibold text-charcoal dark:text-white mb-1">
                          I'm new to the Enneagram
                        </h3>
                        <p className="text-sm text-charcoal-light dark:text-gray-400">
                          Start with stories and experiential content to discover your type through narrative and reflection.
                        </p>
                      </div>
                    </div>
                  </button>

                  {/* Know my type */}
                  <button
                    onClick={() => onComplete('familiar')}
                    className="w-full p-6 rounded-xl border-2 border-warm-border dark:border-gray-600 hover:border-terracotta-400 dark:hover:border-terracotta-500 transition-all group text-left bg-white dark:bg-gray-700"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-terracotta-100 dark:bg-terracotta-900/50 flex items-center justify-center flex-shrink-0 group-hover:bg-terracotta-200 dark:group-hover:bg-terracotta-800/50 transition-colors">
                        <svg className="w-6 h-6 text-terracotta-600 dark:text-terracotta-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-serif font-semibold text-charcoal dark:text-white mb-1">
                          I know my type
                        </h3>
                        <p className="text-sm text-charcoal-light dark:text-gray-400">
                          Dive into detailed theory, subtypes, and advanced frameworks for deeper understanding.
                        </p>
                      </div>
                    </div>
                  </button>
                </div>

                <p className="text-xs text-charcoal-muted dark:text-gray-500 text-center mt-6">
                  You can always switch between views later in the Experience section.
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
