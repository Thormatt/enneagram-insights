import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { useAppStore } from '../stores';

type Theme = 'light' | 'dark' | 'system';

// ─── Animations ────────────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

function useScrollReveal(reduced: boolean | null) {
  return {
    initial: 'hidden',
    whileInView: 'visible',
    viewport: { once: true, margin: '0px 0px -10% 0px' },
    variants: reduced ? { hidden: { opacity: 1 }, visible: { opacity: 1 } } : fadeUp,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  } as const;
}

// ─── Inline ThemeToggle (landing page version) ────────────────────────────────

function LandingThemeToggle() {
  const { theme, setTheme } = useAppStore();

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else if (theme === 'light') {
      root.classList.remove('dark');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      root.classList.toggle('dark', prefersDark);
    }
  }, [theme]);

  useEffect(() => {
    if (theme !== 'system') return;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => document.documentElement.classList.toggle('dark', e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [theme]);

  const cycleTheme = () => {
    const themes: Theme[] = ['light', 'dark', 'system'];
    setTheme(themes[(themes.indexOf(theme) + 1) % themes.length]);
  };

  const icon = theme === 'dark'
    ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    : theme === 'light'
      ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />;

  return (
    <button
      onClick={cycleTheme}
      className="p-2 text-charcoal-muted dark:text-gray-400 hover:text-charcoal dark:hover:text-white hover:bg-cream-200 dark:hover:bg-gray-800 rounded-lg transition-colors"
      aria-label={`Theme: ${theme}`}
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">{icon}</svg>
    </button>
  );
}

// ─── Enneagram SVG Symbol ─────────────────────────────────────────────────────

function EnneagramSymbol({ className = '' }: { className?: string }) {
  const r = 90;
  const cx = 100;
  const cy = 100;
  const points = Array.from({ length: 9 }, (_, i) => {
    const angle = (i * 40 - 90) * (Math.PI / 180);
    return { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) };
  });

  // Inner lines: 1-4-2-8-5-7-1 (hexad) and 3-6-9 (triangle)
  const hexad = [0, 3, 5, 6, 1, 7, 0]; // indices (type-1 based → 0-indexed)
  const triangle = [2, 5, 8, 2];

  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      {/* Outer circle */}
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />

      {/* Hexad lines */}
      <polyline
        points={hexad.map(i => `${points[i].x},${points[i].y}`).join(' ')}
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.2"
      />

      {/* Triangle lines */}
      <polyline
        points={triangle.map(i => `${points[i].x},${points[i].y}`).join(' ')}
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.2"
      />

      {/* Points */}
      {points.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="4" fill="currentColor" opacity="0.4" />
      ))}
    </svg>
  );
}

// ─── Feature Data ─────────────────────────────────────────────────────────────

const FEATURES = [
  {
    title: 'Interactive Circle',
    description: 'Explore the nine types through a dynamic, animated Enneagram symbol with layers for dynamics, centers, and subtypes.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
        <circle cx="12" cy="4" r="2" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: 'Adaptive Quiz',
    description: 'A scenario-based quiz that identifies your core type, wing, and instinctual stacking through real-life situations.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Deep Type Profiles',
    description: 'Comprehensive descriptions covering motivations, fears, growth paths, shadow work, and relationships for each type.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: 'Type Comparisons',
    description: 'Side-by-side comparisons revealing how any two types relate, conflict, and complement each other.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    title: 'Tri-Fix Explorer',
    description: 'Discover your three-center fix — the unique combination of one type from each intelligence center.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    title: 'Wisdom Lineage',
    description: 'Trace the Enneagram through its roots — from Gurdjieff and Ichazo to Naranjo and the modern traditions.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
];

const CENTERS = [
  {
    name: 'Body Center',
    types: '8 · 9 · 1',
    color: 'gut' as const,
    description: 'The instinctual triad. Navigates the world through action, gut feeling, and the tension between rage and surrender.',
  },
  {
    name: 'Heart Center',
    types: '2 · 3 · 4',
    color: 'heart' as const,
    description: 'The feeling triad. Navigates the world through image, connection, and the tension between shame and authentic identity.',
  },
  {
    name: 'Head Center',
    types: '5 · 6 · 7',
    color: 'head' as const,
    description: 'The thinking triad. Navigates the world through analysis, planning, and the tension between fear and inner knowing.',
  },
];

const CENTER_STYLES = {
  gut: {
    bg: 'bg-gut-500',
    bgLight: 'bg-gut-50 dark:bg-gut-900/20',
    border: 'border-gut-200 dark:border-gut-800/40',
    text: 'text-gut-500 dark:text-gut-light',
    badge: 'bg-gut-100 dark:bg-gut-900/30 text-gut-700 dark:text-gut-light',
  },
  heart: {
    bg: 'bg-heart-500',
    bgLight: 'bg-heart-50 dark:bg-heart-900/20',
    border: 'border-heart-200 dark:border-heart-800/40',
    text: 'text-heart-500 dark:text-heart-light',
    badge: 'bg-heart-100 dark:bg-heart-900/30 text-heart-700 dark:text-heart-light',
  },
  head: {
    bg: 'bg-head-500',
    bgLight: 'bg-head-50 dark:bg-head-900/20',
    border: 'border-head-200 dark:border-head-800/40',
    text: 'text-head-500 dark:text-head-light',
    badge: 'bg-head-100 dark:bg-head-900/30 text-head-700 dark:text-head-light',
  },
};

const PHILOSOPHY = [
  {
    title: 'A Map, Not a Box',
    text: 'The Enneagram isn\'t here to tell you who you are. It\'s here to show you the walls you built — so you can walk through them.',
  },
  {
    title: 'Pattern, Not Prison',
    text: 'Your type is the armor you built in childhood to survive. Understanding the pattern is the beginning of not being run by it.',
  },
  {
    title: 'Freedom, Not Fixity',
    text: 'The goal isn\'t to become a "healthy 9" or a "high-functioning 5." The goal is to live from essence rather than ego.',
  },
];

// ─── Landing Page ─────────────────────────────────────────────────────────────

export default function LandingPage() {
  const reduced = useReducedMotion();
  const reveal = useScrollReveal(reduced);

  return (
    <div className="min-h-screen bg-cream-100 dark:bg-gray-900 text-charcoal dark:text-gray-100 transition-colors">
      {/* ── Nav ──────────────────────────────────────────────────────────── */}
      <nav className="sticky top-0 z-50 bg-cream-100/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-warm-border dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <span className="font-serif font-bold text-lg tracking-tight text-charcoal dark:text-white">
            Ninepaths
          </span>
          <div className="flex items-center gap-2">
            <LandingThemeToggle />
            <Link
              to="/app"
              className="text-sm font-medium px-4 py-2 rounded-full bg-charcoal dark:bg-white text-white dark:text-gray-900 hover:opacity-90 transition-opacity"
            >
              Enter App
            </Link>
          </div>
        </div>
      </nav>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center px-4 sm:px-6 overflow-hidden">
        {/* Background symbol */}
        <EnneagramSymbol className="absolute w-[500px] h-[500px] sm:w-[600px] sm:h-[600px] text-charcoal/[0.04] dark:text-white/[0.04] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative z-10 text-center max-w-3xl mx-auto space-y-8"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-tight text-balance">
            Nine patterns.{' '}
            <span className="text-terracotta-500 dark:text-terracotta-300">One essence.</span>
            <br />
            Your path home.
          </h1>

          <p className="text-lg sm:text-xl text-charcoal-light dark:text-gray-300 max-w-xl mx-auto leading-relaxed">
            A contemplative guide to the Enneagram — an ancient map of personality, consciousness, and transformation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              to="/app?view=quiz"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-terracotta-500 hover:bg-terracotta-600 text-white font-medium text-base transition-colors shadow-warm"
            >
              Take the Quiz
            </Link>
            <Link
              to="/app"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full border-2 border-charcoal/20 dark:border-white/20 hover:border-charcoal/40 dark:hover:border-white/40 font-medium text-base transition-colors"
            >
              Explore the Map
            </Link>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-10 rounded-full border-2 border-charcoal/20 dark:border-white/20 flex items-start justify-center pt-2"
          >
            <div className="w-1 h-2 rounded-full bg-charcoal/30 dark:bg-white/30" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── Features Grid ────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div {...reveal} className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
              Everything you need to go deeper
            </h2>
            <p className="text-charcoal-light dark:text-gray-400 max-w-2xl mx-auto text-lg">
              Interactive tools for self-discovery, comparison, and contemplation — all in one place.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '0px 0px -10% 0px' }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {FEATURES.map((f) => (
              <motion.div
                key={f.title}
                variants={reduced ? {} : fadeUp}
                transition={{ duration: 0.4 }}
                className="group bg-white dark:bg-gray-800 rounded-2xl p-6 border border-warm-border dark:border-gray-700 shadow-warm hover:shadow-warm-lg hover:-translate-y-0.5 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-cream-200 dark:bg-gray-700 flex items-center justify-center text-terracotta-500 dark:text-terracotta-300 mb-4">
                  {f.icon}
                </div>
                <h3 className="font-serif font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-charcoal-light dark:text-gray-400 text-sm leading-relaxed">
                  {f.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Three Centers ────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 bg-charcoal dark:bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <motion.div {...reveal} className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
              Three Centers of Intelligence
            </h2>
            <p className="text-cream-400 max-w-2xl mx-auto text-lg">
              Every type is anchored in one of three intelligence centers — body, heart, or head — each with its own way of knowing.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '0px 0px -10% 0px' }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
          >
            {CENTERS.map((c) => {
              const s = CENTER_STYLES[c.color];
              return (
                <motion.div
                  key={c.name}
                  variants={reduced ? {} : fadeUp}
                  transition={{ duration: 0.4 }}
                  className={`rounded-2xl p-6 border ${s.bgLight} ${s.border}`}
                >
                  <div className={`w-3 h-3 rounded-full ${s.bg} mb-4`} />
                  <h3 className="font-serif font-semibold text-lg text-white mb-1">{c.name}</h3>
                  <span className={`text-sm font-medium ${s.text}`}>{c.types}</span>
                  <p className="mt-3 text-cream-400 text-sm leading-relaxed">{c.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── Philosophy ───────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.blockquote
            {...reveal}
            className="text-center mb-16"
          >
            <p className="text-2xl sm:text-3xl font-serif italic text-charcoal dark:text-gray-200 max-w-2xl mx-auto leading-snug">
              "The goal is not to become a better prisoner, but to realize the door was never locked."
            </p>
          </motion.blockquote>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '0px 0px -10% 0px' }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
          >
            {PHILOSOPHY.map((p) => (
              <motion.div
                key={p.title}
                variants={reduced ? {} : fadeUp}
                transition={{ duration: 0.4 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-warm-border dark:border-gray-700 shadow-warm"
              >
                <h3 className="font-serif font-semibold text-lg mb-2">{p.title}</h3>
                <p className="text-charcoal-light dark:text-gray-400 text-sm leading-relaxed">
                  {p.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 bg-gradient-to-br from-terracotta-50 via-cream-100 to-gold-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900">
        <motion.div {...reveal} className="max-w-2xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold">
            Begin where you are
          </h2>
          <p className="text-charcoal-light dark:text-gray-400 text-lg">
            The Enneagram meets you where you are. It can be a fun typing party or a ruthless mirror. The depth you get is the depth you bring.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/app?view=quiz"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-terracotta-500 hover:bg-terracotta-600 text-white font-medium text-base transition-colors shadow-warm"
            >
              Take the Quiz
            </Link>
            <Link
              to="/app"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full border-2 border-charcoal/20 dark:border-white/20 hover:border-charcoal/40 dark:hover:border-white/40 font-medium text-base transition-colors"
            >
              Explore the Map
            </Link>
          </div>

          <p className="text-sm text-charcoal-muted dark:text-gray-500">
            Free. No account required.
          </p>
        </motion.div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer className="py-8 px-4 sm:px-6 border-t border-warm-border dark:border-gray-800">
        <div className="max-w-6xl mx-auto flex items-center justify-between text-sm text-charcoal-muted dark:text-gray-500">
          <span className="font-serif font-medium">Ninepaths</span>
          <span>&copy; {new Date().getFullYear()}</span>
        </div>
      </footer>
    </div>
  );
}
