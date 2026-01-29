import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { TypeNumber, ChildhoodPattern, Misidentification } from '../../types';

interface OriginsSectionProps {
  typeNumber: TypeNumber;
  color: string;
  childhood: ChildhoodPattern | undefined;
  misidentification: Misidentification | undefined;
}

type OriginsTab = 'childhood' | 'lookalikes';

const originsTabs: { id: OriginsTab; label: string }[] = [
  { id: 'childhood', label: 'Childhood' },
  { id: 'lookalikes', label: 'Similar Types' }
];

export function OriginsSection({
  typeNumber,
  color,
  childhood,
  misidentification
}: OriginsSectionProps) {
  const [activeTab, setActiveTab] = useState<OriginsTab>('childhood');

  return (
    <div className="space-y-8">
      {/* Sub-navigation */}
      <div className="flex gap-1 sm:gap-2 justify-start sm:justify-center overflow-x-auto pb-1">
        {originsTabs.map(tab => (
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
          {activeTab === 'childhood' && (
            <ChildhoodContent childhood={childhood} color={color} />
          )}

          {activeTab === 'lookalikes' && (
            <MisidentificationContent
              typeNumber={typeNumber}
              misidentification={misidentification}
              color={color}
            />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

interface ChildhoodContentProps {
  childhood: ChildhoodPattern | undefined;
  color: string;
}

function ChildhoodContent({ childhood, color }: ChildhoodContentProps) {
  if (!childhood) {
    return (
      <div className="text-center py-16 text-charcoal-muted dark:text-gray-500">
        <p className="text-lg">No childhood pattern data available.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Family Atmosphere - Hero */}
      <Card label="Common Pattern" title="A Familiar Atmosphere" color={color}>
        <p className="text-charcoal-muted dark:text-gray-400 text-sm mb-3">
          Many people of this type report growing up in environments that felt...
        </p>
        <p className="text-charcoal-light dark:text-gray-300 leading-relaxed text-lg">
          {childhood.familyAtmosphere}
        </p>
      </Card>

      {/* Lost Message */}
      <Card label="The Lost Message" title="A Message Often Missed" color="#C4785C">
        <p className="text-charcoal-muted dark:text-gray-400 text-sm mb-4">
          This type often needed to hear—but didn't fully receive—something like:
        </p>
        <div className="bg-terracotta-50 dark:bg-terracotta-900/20 rounded-xl p-6 border border-terracotta-200 dark:border-terracotta-800">
          <blockquote className="text-xl font-serif italic text-charcoal dark:text-gray-200 text-center">
            "{childhood.lostMessage}"
          </blockquote>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Coping Strategy */}
        <Card label="Coping Strategy" color="#364C63">
          <p className="text-charcoal-muted dark:text-gray-400 text-sm mb-3">
            In response, many developed an inner stance like:
          </p>
          <div className="bg-storm-50 dark:bg-storm-900/20 rounded-xl p-5 border border-storm-200 dark:border-storm-800">
            <p className="text-charcoal-light dark:text-gray-300 leading-relaxed italic">
              "{childhood.copingStrategy}"
            </p>
          </div>
        </Card>

        {/* Healing Message */}
        <Card label="Healing Message" color="#7D9B84">
          <p className="text-charcoal-muted dark:text-gray-400 text-sm mb-3">
            A message that can support growth and healing:
          </p>
          <div className="bg-sage-50 dark:bg-sage-900/20 rounded-xl p-5 border border-sage-200 dark:border-sage-800">
            <p className="text-charcoal-light dark:text-gray-300 leading-relaxed italic">
              "{childhood.healingMessage}"
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}

interface MisidentificationContentProps {
  typeNumber: TypeNumber;
  misidentification: Misidentification | undefined;
  color: string;
}

function MisidentificationContent({ typeNumber, misidentification, color }: MisidentificationContentProps) {
  if (!misidentification || misidentification.oftenConfusedWith.length === 0) {
    return (
      <div className="text-center py-16 text-charcoal-muted dark:text-gray-500">
        <p className="text-lg">No misidentification data available.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Card
        label="Similar Types"
        title={`Types Sometimes Confused with Type ${typeNumber}`}
        color={color}
      >
        <p className="text-charcoal-light dark:text-gray-300 mb-4">
          These types share some surface similarities. Exploring the patterns below may help clarify your core motivation.
        </p>
        <p className="text-charcoal-muted dark:text-gray-400 text-sm italic mb-6">
          Note: These are tendencies, not tests. You may resonate with aspects of both types—that's normal. The goal is insight, not a perfect score.
        </p>
        <div className="flex flex-wrap gap-2">
          {misidentification.oftenConfusedWith.map(confusedType => (
            <span
              key={confusedType}
              className="px-4 py-2 bg-cream-200 dark:bg-gray-700 rounded-full text-charcoal dark:text-gray-200 font-medium"
            >
              Type {confusedType}
            </span>
          ))}
        </div>
      </Card>

      {/* Patterns for each similar type */}
      {misidentification.oftenConfusedWith.map(confusedType => {
        const differences = misidentification.keyDifferences[confusedType];
        if (!differences || differences.length === 0) return null;

        return (
          <Card
            key={confusedType}
            label={`Type ${typeNumber} vs Type ${confusedType}`}
            title="Patterns to Explore"
            color={getTypeColor(confusedType)}
          >
            <ul className="space-y-3">
              {differences.map((diff, i) => (
                <li key={i} className="flex items-start gap-3 text-charcoal-light dark:text-gray-300">
                  <span className="w-6 h-6 rounded-full bg-cream-200 dark:bg-gray-700 flex items-center justify-center text-charcoal-muted dark:text-gray-400 text-sm font-bold flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  {diff}
                </li>
              ))}
            </ul>
          </Card>
        );
      })}
    </div>
  );
}

// Helper function to get a color for each type
function getTypeColor(type: TypeNumber): string {
  const colors: Record<TypeNumber, string> = {
    1: '#7D9B84', // Sage
    2: '#C4785C', // Terracotta
    3: '#C9A962', // Gold
    4: '#8b5cf6', // Purple
    5: '#364C63', // Storm
    6: '#3b82f6', // Blue
    7: '#f59e0b', // Amber
    8: '#C4785C', // Terracotta
    9: '#7D9B84', // Sage
  };
  return colors[type];
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
