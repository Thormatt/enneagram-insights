import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { useAppStore } from '../stores';

type Theme = 'light' | 'dark' | 'system';

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

function EnneagramSymbol({ className = '' }: { className?: string }) {
  const r = 90;
  const cx = 100;
  const cy = 100;
  const points = Array.from({ length: 9 }, (_, i) => {
    const angle = (i * 40 - 90) * (Math.PI / 180);
    return { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) };
  });

  const hexad = [0, 3, 5, 6, 1, 7, 0];
  const triangle = [2, 5, 8, 2];

  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      <polyline
        points={hexad.map(i => `${points[i].x},${points[i].y}`).join(' ')}
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.2"
      />
      <polyline
        points={triangle.map(i => `${points[i].x},${points[i].y}`).join(' ')}
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.2"
      />
      {points.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="4" fill="currentColor" opacity="0.4" />
      ))}
    </svg>
  );
}

const SECTION_LINKS = [
  { href: '#features', label: 'Features' },
  { href: '#centers', label: 'Centers' },
  { href: '#philosophy', label: 'Philosophy' },
];

const HERO_STATS = [
  { value: '9', label: 'core patterns' },
  { value: '3', label: 'intelligence centers' },
  { value: '27', label: 'instinctual paths' },
];

const FEATURES = [
  {
    title: 'Interactive Circle',
    description: 'Explore all nine types through a responsive Enneagram symbol with dynamics, centers, and subtype context.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
        <circle cx="12" cy="4" r="2" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: 'Adaptive Quiz',
    description: 'Scenario-based prompts estimate your core type, wing, and instinct stacking instead of a one-shot label.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Deep Type Profiles',
    description: 'Read motivations, fixation patterns, growth trajectories, defense styles, and relationship dynamics in one place.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: 'Type Comparisons',
    description: 'Compare any two types side by side to see friction points, blind spots, and natural areas of resonance.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    title: 'Tri-Fix Explorer',
    description: 'Inspect your three-center signature and how one type from each center influences your coping style.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    title: 'Wisdom Lineage',
    description: 'Follow the historical arc from early Enneagram roots to modern schools and practical interpretation.',
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
    description: 'Instinct and action. This center works through tension, autonomy, and grounded force.',
  },
  {
    name: 'Heart Center',
    types: '2 · 3 · 4',
    color: 'heart' as const,
    description: 'Image and connection. This center tracks belonging, value, and emotional attunement.',
  },
  {
    name: 'Head Center',
    types: '5 · 6 · 7',
    color: 'head' as const,
    description: 'Meaning and orientation. This center plans, models, and seeks inner certainty.',
  },
];

const CENTER_STYLES = {
  gut: {
    dot: 'bg-gut-500',
    border: 'border-gut-200 dark:border-gut-800/40',
    bg: 'bg-gut-50/80 dark:bg-gut-900/20',
    text: 'text-gut-700 dark:text-gut-light',
  },
  heart: {
    dot: 'bg-heart-500',
    border: 'border-heart-200 dark:border-heart-800/40',
    bg: 'bg-heart-50/80 dark:bg-heart-900/20',
    text: 'text-heart-700 dark:text-heart-light',
  },
  head: {
    dot: 'bg-head-500',
    border: 'border-head-200 dark:border-head-800/40',
    bg: 'bg-head-50/80 dark:bg-head-900/20',
    text: 'text-head-700 dark:text-head-light',
  },
};

const PATHWAYS = [
  {
    title: 'Find your baseline',
    text: 'Run the adaptive quiz and get a type estimate with wing and instinct context.',
    to: '/app?view=quiz',
    cta: 'Start quiz',
    accent: 'terracotta' as const,
  },
  {
    title: 'Explore the map',
    text: 'Navigate the symbol and inspect each type through motivation, defense, and growth layers.',
    to: '/app',
    cta: 'Open map',
    accent: 'head' as const,
  },
  {
    title: 'Compare patterns',
    text: 'Study contrast across types and centers to spot blind spots and complementary strengths.',
    to: '/app?view=compare',
    cta: 'Compare now',
    accent: 'sage' as const,
  },
];

const PATHWAY_STYLES = {
  terracotta: {
    badge: 'bg-terracotta-100 text-terracotta-700 dark:bg-terracotta-900/30 dark:text-terracotta-300',
    border: 'border-terracotta-200/80 dark:border-terracotta-800/50',
    hover: 'hover:shadow-[0_18px_40px_-18px_rgba(168,95,69,0.55)]',
  },
  head: {
    badge: 'bg-head-100 text-head-700 dark:bg-head-900/30 dark:text-head-light',
    border: 'border-head-200/80 dark:border-head-800/50',
    hover: 'hover:shadow-[0_18px_40px_-18px_rgba(54,76,99,0.55)]',
  },
  sage: {
    badge: 'bg-sage-100 text-sage-700 dark:bg-sage-900/30 dark:text-sage-300',
    border: 'border-sage-200/80 dark:border-sage-800/50',
    hover: 'hover:shadow-[0_18px_40px_-18px_rgba(74,102,80,0.55)]',
  },
};

const PHILOSOPHY = [
  {
    title: 'A map, not a box',
    text: 'The Enneagram does not define you. It reveals the structure you learned so you can choose differently.',
  },
  {
    title: 'Pattern, not prison',
    text: 'Your type is adaptive intelligence from earlier life. Seeing it clearly is the beginning of freedom from it.',
  },
  {
    title: 'Essence over persona',
    text: 'The point is not a polished identity. The point is living from something deeper than compensation.',
  },
];

export default function LandingPage() {
  const reduced = useReducedMotion();
  const reveal = useScrollReveal(reduced);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-cream-100 dark:bg-gray-950 text-charcoal dark:text-gray-100 transition-colors">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-[760px] bg-[radial-gradient(circle_at_50%_12%,rgba(54,76,99,0.2),transparent_62%)] dark:bg-[radial-gradient(circle_at_50%_12%,rgba(124,146,168,0.24),transparent_62%)]" />
        <div className="absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-head-900/[0.06] to-transparent dark:from-black/45" />
      </div>

      <nav className="sticky top-0 z-50 border-b border-warm-border/80 dark:border-gray-800 bg-cream-100/80 dark:bg-gray-950/85 backdrop-blur-md">
        <div className="max-w-6xl mx-auto h-14 px-4 sm:px-6 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2.5">
            <img src="/ninepaths-icon.svg" alt="" className="w-7 h-7" />
            <span className="font-serif font-bold text-lg tracking-tight text-charcoal dark:text-white">Ninepaths</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {SECTION_LINKS.map((section) => (
              <a
                key={section.href}
                href={section.href}
                className="px-3 py-1.5 text-sm text-charcoal-light dark:text-gray-400 hover:text-charcoal dark:hover:text-white rounded-full hover:bg-cream-200/80 dark:hover:bg-gray-800 transition-colors"
              >
                {section.label}
              </a>
            ))}
          </div>

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

      <main className="relative z-10">
        <section className="px-4 sm:px-6 pt-14 sm:pt-20 pb-12 sm:pb-14 min-h-[calc(100svh-3.5rem)] flex items-center">
          <div className="max-w-6xl mx-auto w-full grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_420px]">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              className="space-y-7"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-charcoal/15 dark:border-white/15 bg-white/70 dark:bg-gray-900/50 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-charcoal-muted dark:text-gray-400">
                Contemplative Enneagram Atlas
              </span>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-[0.95] text-balance max-w-3xl">
                Nine patterns.
                <br />
                <span className="text-terracotta-500 dark:text-terracotta-300">One essence.</span>
                <br />
                Your path home.
              </h1>

              <p className="text-lg sm:text-xl text-charcoal-light dark:text-gray-300 max-w-2xl leading-relaxed">
                A practical and contemplative guide to the Enneagram, designed for people who want insight that is clear, grounded, and usable.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  to="/app?view=quiz"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-terracotta-500 hover:bg-terracotta-600 text-white font-medium text-base transition-colors shadow-warm"
                >
                  Take the Quiz
                </Link>
                <Link
                  to="/app"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border-2 border-charcoal/20 dark:border-white/20 hover:border-charcoal/40 dark:hover:border-white/40 font-medium text-base transition-colors"
                >
                  Explore the Map
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {HERO_STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-warm-border/80 dark:border-gray-800 bg-white/70 dark:bg-gray-900/55 px-4 py-3 backdrop-blur-sm"
                  >
                    <p className="font-serif text-2xl leading-none text-charcoal dark:text-white">{stat.value}</p>
                    <p className="mt-1 text-sm text-charcoal-light dark:text-gray-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.aside
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative overflow-hidden rounded-3xl border border-warm-border dark:border-gray-800 bg-white/80 dark:bg-gray-900/70 backdrop-blur-md shadow-warm-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-head-100/70 via-transparent to-terracotta-100/70 dark:from-head-900/45 dark:to-terracotta-900/35" />

              <div className="relative p-6 sm:p-8">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-charcoal-muted dark:text-gray-400">
                  The Living Symbol
                </p>

                <div className="relative mt-4 mx-auto w-full max-w-[320px] aspect-square text-charcoal/25 dark:text-white/25">
                  <EnneagramSymbol className="absolute inset-0 w-full h-full" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="rounded-full border border-charcoal/20 dark:border-white/20 bg-cream-100/85 dark:bg-gray-900/85 px-5 py-4 text-center backdrop-blur">
                      <p className="text-[10px] uppercase tracking-[0.16em] text-charcoal-muted dark:text-gray-500">orientation</p>
                      <p className="mt-1 font-serif text-lg text-charcoal dark:text-white">Essence</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-2.5">
                  {CENTERS.map((center) => {
                    const style = CENTER_STYLES[center.color];
                    return (
                      <div
                        key={center.name}
                        className={`rounded-xl border ${style.border} ${style.bg} px-3 py-2.5 flex items-center justify-between gap-3`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span className={`w-2.5 h-2.5 rounded-full ${style.dot} shrink-0`} />
                          <span className="text-sm font-medium text-charcoal dark:text-gray-100 truncate">{center.name}</span>
                        </div>
                        <span className={`text-xs font-semibold tracking-wide ${style.text}`}>{center.types}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.aside>
          </div>
        </section>

        {!reduced && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="flex justify-center pb-10"
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-6 h-10 rounded-full border-2 border-charcoal/20 dark:border-white/20 flex items-start justify-center pt-2"
            >
              <div className="w-1 h-2 rounded-full bg-charcoal/30 dark:bg-white/30" />
            </motion.div>
          </motion.div>
        )}

        <section className="px-4 sm:px-6 pb-16 sm:pb-24">
          <motion.div
            {...reveal}
            className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4"
          >
            {PATHWAYS.map((path) => {
              const style = PATHWAY_STYLES[path.accent];
              return (
                <Link
                  key={path.title}
                  to={path.to}
                  className={`group rounded-2xl border ${style.border} bg-white/85 dark:bg-gray-900/75 p-5 transition-all hover:-translate-y-0.5 ${style.hover}`}
                >
                  <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-[0.1em] ${style.badge}`}>
                    Path
                  </span>
                  <h3 className="mt-3 font-serif text-xl text-charcoal dark:text-white">{path.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal-light dark:text-gray-400">{path.text}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-charcoal dark:text-gray-200">
                    {path.cta}
                    <span className="transition-transform group-hover:translate-x-0.5">→</span>
                  </span>
                </Link>
              );
            })}
          </motion.div>
        </section>

        <section id="features" className="py-20 sm:py-28 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div {...reveal} className="text-center mb-14">
              <span className="inline-flex mb-4 rounded-full bg-cream-200 dark:bg-gray-800 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-charcoal-muted dark:text-gray-400">
                Toolkit
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
                Everything you need to go deeper
              </h2>
              <p className="text-charcoal-light dark:text-gray-400 max-w-2xl mx-auto text-lg">
                Self-discovery, comparison, and study tools that work together as one system.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '0px 0px -10% 0px' }}
              variants={stagger}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {FEATURES.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  variants={reduced ? {} : fadeUp}
                  transition={{ duration: 0.45 }}
                  className="group relative overflow-hidden bg-white dark:bg-gray-900/70 rounded-2xl p-6 border border-warm-border dark:border-gray-800 shadow-warm hover:shadow-warm-lg hover:-translate-y-0.5 transition-all"
                >
                  <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-terracotta-100/60 dark:bg-terracotta-900/20 blur-xl" />

                  <div className="relative flex items-start justify-between gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cream-200 dark:bg-gray-800 flex items-center justify-center text-terracotta-500 dark:text-terracotta-300 shrink-0">
                      {feature.icon}
                    </div>
                    <span className="text-xs font-semibold text-charcoal-muted dark:text-gray-500">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="mt-4 font-serif font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-charcoal-light dark:text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="centers" className="relative overflow-hidden py-20 sm:py-28 px-4 sm:px-6 bg-charcoal dark:bg-black">
          <EnneagramSymbol className="pointer-events-none absolute -right-40 top-1/2 -translate-y-1/2 w-[480px] h-[480px] text-white/[0.05]" />

          <div className="relative max-w-6xl mx-auto">
            <motion.div {...reveal} className="text-center mb-14">
              <span className="inline-flex mb-4 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-cream-400">
                Foundation
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
                Three Centers of Intelligence
              </h2>
              <p className="text-cream-400 max-w-2xl mx-auto text-lg">
                Each type leans toward one dominant mode: instinctive, relational, or conceptual.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '0px 0px -10% 0px' }}
              variants={stagger}
              className="grid grid-cols-1 md:grid-cols-3 gap-5"
            >
              {CENTERS.map((center) => {
                const style = CENTER_STYLES[center.color];
                return (
                  <motion.div
                    key={center.name}
                    variants={reduced ? {} : fadeUp}
                    transition={{ duration: 0.45 }}
                    className={`rounded-2xl p-6 border ${style.border} bg-white/[0.04] backdrop-blur-sm`}
                  >
                    <div className={`w-2.5 h-2.5 rounded-full ${style.dot} mb-4`} />
                    <h3 className="font-serif font-semibold text-xl text-white mb-1">{center.name}</h3>
                    <span className={`text-sm font-semibold tracking-wide ${style.text}`}>{center.types}</span>
                    <p className="mt-3 text-cream-400 text-sm leading-relaxed">{center.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        <section id="philosophy" className="py-20 sm:py-28 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <motion.blockquote {...reveal} className="text-center mb-16">
              <p className="text-2xl sm:text-3xl font-serif italic text-charcoal dark:text-gray-200 max-w-3xl mx-auto leading-snug">
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
              {PHILOSOPHY.map((item) => (
                <motion.div
                  key={item.title}
                  variants={reduced ? {} : fadeUp}
                  transition={{ duration: 0.45 }}
                  className="relative overflow-hidden bg-white dark:bg-gray-900/70 rounded-2xl p-6 border border-warm-border dark:border-gray-800 shadow-warm"
                >
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-terracotta-500/80 via-gold-400/70 to-sage-500/70" />
                  <h3 className="pt-2 font-serif font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-charcoal-light dark:text-gray-400 text-sm leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-20 sm:py-28 px-4 sm:px-6 bg-gradient-to-br from-terracotta-50 via-cream-100 to-gold-50 dark:from-gray-950 dark:via-gray-950 dark:to-gray-900">
          <motion.div {...reveal} className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold">
              Begin where you are
            </h2>
            <p className="text-charcoal-light dark:text-gray-400 text-lg">
              Use it lightly or study it deeply. The depth you get reflects the depth you bring.
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
              Free to explore. No account required.
            </p>
          </motion.div>
        </section>
      </main>

      <footer className="py-8 px-4 sm:px-6 border-t border-warm-border dark:border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-charcoal-muted dark:text-gray-500">
          <span className="flex items-center gap-2">
            <img src="/ninepaths-icon.svg" alt="" className="w-5 h-5 opacity-60" />
            <span className="font-serif font-medium">Ninepaths</span>
          </span>

          <div className="flex items-center gap-4">
            {SECTION_LINKS.map((section) => (
              <a key={section.href} href={section.href} className="hover:text-charcoal dark:hover:text-gray-300 transition-colors">
                {section.label}
              </a>
            ))}
          </div>

          <span>&copy; {new Date().getFullYear()}</span>
        </div>
      </footer>
    </div>
  );
}
