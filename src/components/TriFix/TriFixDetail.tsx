import { getCenterColor } from '../../data/core/centers';
import { getTypeByNumber } from '../../data/core/types';
import type { TypeNumber, PrimaryCenter } from '../../types';
import type { TriFixInfo } from '../../data/tritypes/tritypeDescriptions';

interface TriFixDetailProps {
  triFix: TriFixInfo;
  gutType: TypeNumber;
  heartType: TypeNumber;
  headType: TypeNumber;
  primaryCenter: PrimaryCenter;
  onClose?: () => void;
  onCompare?: () => void;
}

export function TriFixDetail({
  triFix,
  gutType,
  heartType,
  headType,
  primaryCenter,
  onClose,
  onCompare
}: TriFixDetailProps) {
  const gutInfo = getTypeByNumber(gutType);
  const heartInfo = getTypeByNumber(heartType);
  const headInfo = getTypeByNumber(headType);

  const typeInfos = [
    { type: gutType, center: 'gut' as const, info: gutInfo, label: 'Body/Gut' },
    { type: heartType, center: 'heart' as const, info: heartInfo, label: 'Heart' },
    { type: headType, center: 'head' as const, info: headInfo, label: 'Head' }
  ];

  const primaryColor = getCenterColor(primaryCenter);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-warm-lg overflow-hidden">
      {/* Header */}
      <div
        className="p-6 text-white"
        style={{ backgroundColor: primaryColor }}
      >
        <div className="flex items-start justify-between">
          <div>
            {/* Tri-Fix Code */}
            <div className="flex items-center gap-2 mb-3">
              {typeInfos.map(({ type, center }) => (
                <span
                  key={center}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold border-2 border-white/30"
                  style={{ backgroundColor: getCenterColor(center) }}
                >
                  {type}
                </span>
              ))}
            </div>

            <h2 className="font-serif text-2xl font-bold mb-1">
              {triFix.name}
            </h2>
            <p className="text-white/80 text-lg">
              {triFix.archetype}
            </p>
          </div>

          <div className="flex items-center gap-2">
            {onCompare && (
              <button
                onClick={onCompare}
                className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                title="Compare with another tri-fix"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </button>
            )}
            {onClose && (
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6">
        {/* Description */}
        <section>
          <p className="text-charcoal dark:text-gray-200 leading-relaxed">
            {triFix.description}
          </p>
        </section>

        {/* Component Types */}
        <section>
          <h3 className="font-serif text-lg font-semibold text-charcoal dark:text-white mb-4">
            Your Three-Center Pattern
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {typeInfos.map(({ type, center, info, label }) => (
              <div
                key={center}
                className={`p-4 rounded-xl border-2 ${
                  center === primaryCenter
                    ? 'border-2 shadow-warm'
                    : 'border-warm-border dark:border-gray-700'
                }`}
                style={center === primaryCenter ? { borderColor: primaryColor } : undefined}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
                    style={{ backgroundColor: getCenterColor(center) }}
                  >
                    {type}
                  </span>
                  <div>
                    <span className="text-xs font-semibold uppercase" style={{ color: getCenterColor(center) }}>
                      {label}
                    </span>
                    {center === primaryCenter && (
                      <span className="ml-2 text-xs bg-terracotta-100 dark:bg-terracotta-900/30 text-terracotta-600 dark:text-terracotta-400 px-2 py-0.5 rounded-full">
                        Primary
                      </span>
                    )}
                  </div>
                </div>
                <h4 className="font-semibold text-charcoal dark:text-white">
                  Type {type}: {info?.name}
                </h4>
                <p className="text-sm text-charcoal-muted dark:text-gray-400 mt-1">
                  {info?.briefDescription}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Strengths */}
        <section>
          <h3 className="font-serif text-lg font-semibold text-charcoal dark:text-white mb-3">
            Strengths
          </h3>
          <div className="flex flex-wrap gap-2">
            {triFix.strengths.map((strength, index) => (
              <span
                key={index}
                className="px-3 py-1.5 rounded-full text-sm font-medium"
                style={{
                  backgroundColor: `${primaryColor}15`,
                  color: primaryColor
                }}
              >
                {strength}
              </span>
            ))}
          </div>
        </section>

        {/* Challenges */}
        <section>
          <h3 className="font-serif text-lg font-semibold text-charcoal dark:text-white mb-3">
            Challenges
          </h3>
          <div className="flex flex-wrap gap-2">
            {triFix.challenges.map((challenge, index) => (
              <span
                key={index}
                className="px-3 py-1.5 rounded-full text-sm font-medium bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400"
              >
                {challenge}
              </span>
            ))}
          </div>
        </section>

        {/* Inner Experience */}
        <section className="bg-cream-50 dark:bg-gray-900 rounded-xl p-5">
          <h3 className="font-serif text-lg font-semibold text-charcoal dark:text-white mb-3 flex items-center gap-2">
            <svg className="w-5 h-5 text-terracotta-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            Inner Experience
          </h3>
          <p className="text-charcoal dark:text-gray-200 leading-relaxed italic">
            "{triFix.innerExperience}"
          </p>
        </section>

        {/* Center Integration Insight */}
        <section className="border-t border-warm-border dark:border-gray-700 pt-6">
          <h3 className="font-serif text-lg font-semibold text-charcoal dark:text-white mb-3">
            How Your Centers Work Together
          </h3>
          <p className="text-charcoal-muted dark:text-gray-400 leading-relaxed">
            As a <strong style={{ color: primaryColor }}>{primaryCenter}-led</strong> tri-fix, your primary way of
            processing the world comes through your {primaryCenter === 'gut' ? 'instinctual body wisdom' : primaryCenter === 'heart' ? 'emotional intelligence and relational awareness' : 'analytical mind and mental patterns'}.
            Your {typeInfos.filter(t => t.center !== primaryCenter).map(t => t.label.toLowerCase()).join(' and ')} centers
            provide supporting perspectives, creating a unique blend of {gutInfo?.name.toLowerCase()}'s strength,
            {' '}{heartInfo?.name.toLowerCase()}'s connection, and {headInfo?.name.toLowerCase()}'s insight.
          </p>
        </section>
      </div>
    </div>
  );
}
