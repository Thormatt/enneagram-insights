import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { ParentingStyle, LeadershipStyle } from '../../types';

interface LifeSectionProps {
  color: string;
  parenting: ParentingStyle | undefined;
  leadership: LeadershipStyle | undefined;
}

type LifeTab = 'parenting' | 'work';

const lifeTabs: { id: LifeTab; label: string }[] = [
  { id: 'parenting', label: 'Parenting' },
  { id: 'work', label: 'Work & Leadership' }
];

export function LifeSection({
  color,
  parenting,
  leadership
}: LifeSectionProps) {
  const [activeTab, setActiveTab] = useState<LifeTab>('parenting');

  return (
    <div className="space-y-8">
      {/* Sub-navigation */}
      <div className="flex gap-1 sm:gap-2 justify-start sm:justify-center overflow-x-auto pb-1">
        {lifeTabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-3 sm:px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors flex-shrink-0 ${
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
          {activeTab === 'parenting' && (
            <ParentingContent parenting={parenting} color={color} />
          )}

          {activeTab === 'work' && (
            <LeadershipContent leadership={leadership} color={color} />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

interface ParentingContentProps {
  parenting: ParentingStyle | undefined;
  color: string;
}

function ParentingContent({ parenting, color }: ParentingContentProps) {
  if (!parenting) {
    return (
      <div className="text-center py-16 text-charcoal-muted dark:text-gray-500">
        <p className="text-lg">No parenting style data available.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Parenting Style - Hero */}
      <Card label="Your Parenting Style" title={parenting.styleName} color={color}>
        <p className="text-charcoal-light dark:text-gray-300 leading-relaxed">
          Understanding your natural parenting tendencies helps you leverage your strengths while being mindful of potential blind spots.
        </p>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Strengths */}
        <Card label="Strengths" title="What You Bring" color="#7D9B84">
          <ul className="space-y-3">
            {parenting.strengths.map((strength, i) => (
              <li key={i} className="flex items-start gap-3 text-charcoal-light dark:text-gray-300">
                <span className="w-6 h-6 rounded-full bg-sage-100 dark:bg-sage-900/30 flex items-center justify-center text-sage-600 dark:text-sage-400 flex-shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                {strength}
              </li>
            ))}
          </ul>
        </Card>

        {/* Challenges */}
        <Card label="Challenges" title="Watch Out For" color="#C4785C">
          <ul className="space-y-3">
            {parenting.challenges.map((challenge, i) => (
              <li key={i} className="flex items-start gap-3 text-charcoal-light dark:text-gray-300">
                <span className="w-6 h-6 rounded-full bg-terracotta-100 dark:bg-terracotta-900/30 flex items-center justify-center text-terracotta-600 dark:text-terracotta-400 text-sm font-bold flex-shrink-0 mt-0.5">
                  !
                </span>
                {challenge}
              </li>
            ))}
          </ul>
        </Card>
      </div>

      {/* Struggles With */}
      <Card label="May Struggle With" title="Common Difficulties" color="#364C63">
        <div className="bg-storm-50 dark:bg-storm-900/20 rounded-xl p-5 border border-storm-200 dark:border-storm-800">
          <ul className="space-y-3">
            {parenting.strugglesWith.map((struggle, i) => (
              <li key={i} className="flex items-start gap-3 text-charcoal-light dark:text-gray-300">
                <span className="text-storm-500 flex-shrink-0">-</span>
                {struggle}
              </li>
            ))}
          </ul>
        </div>
      </Card>

      {/* Growth Tips */}
      <Card label="Growth Tips" title="How to Grow as a Parent" color="#C9A962">
        <div className="bg-gold-50 dark:bg-gold-900/20 rounded-xl p-5 border border-gold-200 dark:border-gold-800">
          <ul className="space-y-3">
            {parenting.growthTips.map((tip, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="w-7 h-7 rounded-full bg-gold-200 dark:bg-gold-800 flex items-center justify-center text-gold-700 dark:text-gold-300 font-semibold text-sm flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <p className="text-charcoal-light dark:text-gray-300 leading-relaxed">
                  {tip}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </div>
  );
}

interface LeadershipContentProps {
  leadership: LeadershipStyle | undefined;
  color: string;
}

function LeadershipContent({ leadership, color }: LeadershipContentProps) {
  if (!leadership) {
    return (
      <div className="text-center py-16 text-charcoal-muted dark:text-gray-500">
        <p className="text-lg">No leadership style data available.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Leadership Style - Hero */}
      <Card label="Your Leadership Style" title={leadership.styleName} color={color}>
        <p className="text-charcoal-light dark:text-gray-300 leading-relaxed">
          Understanding your natural leadership approach helps you build on your strengths and develop in areas that may need attention.
        </p>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Strengths */}
        <Card label="Leadership Strengths" title="Your Natural Gifts" color="#7D9B84">
          <ul className="space-y-3">
            {leadership.strengths.map((strength, i) => (
              <li key={i} className="flex items-start gap-3 text-charcoal-light dark:text-gray-300">
                <span className="w-6 h-6 rounded-full bg-sage-100 dark:bg-sage-900/30 flex items-center justify-center text-sage-600 dark:text-sage-400 flex-shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                {strength}
              </li>
            ))}
          </ul>
        </Card>

        {/* Blind Spots */}
        <Card label="Blind Spots" title="Areas to Watch" color="#C4785C">
          <ul className="space-y-3">
            {leadership.blindSpots.map((blindSpot, i) => (
              <li key={i} className="flex items-start gap-3 text-charcoal-light dark:text-gray-300">
                <span className="w-6 h-6 rounded-full bg-terracotta-100 dark:bg-terracotta-900/30 flex items-center justify-center text-terracotta-600 dark:text-terracotta-400 text-sm font-bold flex-shrink-0 mt-0.5">
                  !
                </span>
                {blindSpot}
              </li>
            ))}
          </ul>
        </Card>
      </div>

      {/* Communication Style */}
      <Card label="Communication Style" title="How You Communicate" color="#3b82f6">
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
          <p className="text-charcoal-light dark:text-gray-300 leading-relaxed text-lg">
            {leadership.communicationStyle}
          </p>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Feedback Triggers */}
        <Card label="Feedback Triggers" title="What Can Set You Off" color="#f59e0b">
          <ul className="space-y-3">
            {leadership.feedbackTriggers.map((trigger, i) => (
              <li key={i} className="flex items-start gap-3 text-charcoal-light dark:text-gray-300">
                <span className="w-5 h-5 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-amber-500 dark:bg-amber-400" />
                </span>
                {trigger}
              </li>
            ))}
          </ul>
        </Card>

        {/* Ideal Environment */}
        <Card label="Ideal Environment" title="Where You Thrive" color="#7D9B84">
          <ul className="space-y-3">
            {leadership.idealEnvironment.map((env, i) => (
              <li key={i} className="flex items-start gap-3 text-charcoal-light dark:text-gray-300">
                <span className="text-sage-500 font-bold">→</span>
                {env}
              </li>
            ))}
          </ul>
        </Card>
      </div>
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
