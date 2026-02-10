import { useState } from 'react';
import { getCenterColor } from '../../data/core/centers';
import { getTypeByNumber } from '../../data/core/types';
import { getTritypeInsights } from '../../data/tritypes/tritypeInsights';
import type { TypeNumber, PrimaryCenter } from '../../types';
import type { TriFixInfo, InstinctualSubtype } from '../../data/tritypes/tritypeDescriptions';

// Subtype color coding per Delphi recommendation
const SUBTYPE_COLORS = {
  sp: { bg: '#059669', bgLight: '#D1FAE5', text: '#065F46', label: 'Self-Preservation' },
  so: { bg: '#2563EB', bgLight: '#DBEAFE', text: '#1E40AF', label: 'Social' },
  sx: { bg: '#DC2626', bgLight: '#FEE2E2', text: '#991B1B', label: 'Sexual/One-to-One' }
} as const;

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
  const [selectedSubtype, setSelectedSubtype] = useState<InstinctualSubtype>('sp');

  const gutInfo = getTypeByNumber(gutType);
  const heartInfo = getTypeByNumber(heartType);
  const headInfo = getTypeByNumber(headType);

  const typeInfos = [
    { type: gutType, center: 'gut' as const, info: gutInfo, label: 'Body/Gut' },
    { type: heartType, center: 'heart' as const, info: heartInfo, label: 'Heart' },
    { type: headType, center: 'head' as const, info: headInfo, label: 'Head' }
  ];

  const primaryColor = getCenterColor(primaryCenter);
  const insights = getTritypeInsights({ gutType, heartType, headType, primaryCenter });

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
                  style={{
                    backgroundColor: getCenterColor(center),
                    boxShadow: center === primaryCenter
                      ? '0 0 0 2px rgba(255,255,255,0.85), 0 0 0 4px rgba(255,255,255,0.35)'
                      : undefined
                  }}
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
            <p className="text-white/80 text-sm mt-2">
              Tritype: <span className="font-semibold">{triFix.code}</span>
              {insights.setCode !== triFix.code && (
                <>
                  {' '}| Set: <span className="font-semibold">{insights.setCode}</span>
                </>
              )}
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

        {/* Practical Snapshot */}
        <section className="bg-cream-50 dark:bg-gray-900 rounded-xl p-5">
          <h3 className="font-serif text-lg font-semibold text-charcoal dark:text-white mb-4">
            Practical Snapshot
          </h3>

          <p className="text-sm text-charcoal dark:text-gray-200 leading-relaxed mb-5">
            {insights.portrait}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div
              className="p-4 rounded-xl border-2 bg-white/60 dark:bg-gray-800/40"
              style={{ borderColor: primaryColor }}
            >
              <div className="text-xs font-semibold uppercase text-charcoal-muted dark:text-gray-400 mb-2">
                Lead ({primaryCenter}-led)
              </div>
              <div className="font-semibold text-charcoal dark:text-white">
                {insights.lead.label}
              </div>
              <p className="text-sm text-charcoal-muted dark:text-gray-300 mt-2 leading-relaxed">
                You tend to {insights.lead.insight}.
              </p>
            </div>

            {insights.supports.map((s) => (
              <div
                key={s.type}
                className="p-4 rounded-xl border border-warm-border dark:border-gray-700 bg-white/60 dark:bg-gray-800/40"
              >
                <div className="text-xs font-semibold uppercase text-charcoal-muted dark:text-gray-400 mb-2">
                  Support
                </div>
                <div className="font-semibold text-charcoal dark:text-white">
                  {s.label}
                </div>
                <p className="text-sm text-charcoal-muted dark:text-gray-300 mt-2 leading-relaxed">
                  You also {s.insight}.
                </p>
              </div>
            ))}
          </div>

          <div className="mt-5 space-y-3">
            <p className="text-sm text-charcoal dark:text-gray-200 leading-relaxed">
              <span className="font-semibold">Stress loop:</span> {insights.stressLoop}
            </p>
            <p className="text-sm text-charcoal dark:text-gray-200 leading-relaxed">
              <span className="font-semibold">Growth experiment:</span> {insights.growthExperiment}
            </p>
            <div>
              <div className="text-xs font-semibold uppercase text-charcoal-muted dark:text-gray-400 mb-2">
                Self-check
              </div>
              <ul className="space-y-1">
                {insights.selfChecks.map((q, idx) => (
                  <li key={idx} className="text-sm text-charcoal-muted dark:text-gray-300 leading-relaxed">
                    {q}
                  </li>
                ))}
              </ul>
            </div>
          </div>
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

        {/* Instinctual Subtype Variations */}
        {triFix.subtypes && (
          <section className="border-t border-warm-border dark:border-gray-700 pt-6">
            <h3 className="font-serif text-lg font-semibold text-charcoal dark:text-white mb-4">
              Instinctual Subtype Variations
            </h3>
            <p className="text-sm text-charcoal-muted dark:text-gray-400 mb-4">
              How this tri-fix expresses differently based on your instinctual drive.
            </p>

            {/* Subtype Tabs */}
            <div className="flex gap-2 mb-5">
              {(['sp', 'so', 'sx'] as InstinctualSubtype[]).map((subtype) => {
                const colors = SUBTYPE_COLORS[subtype];
                const isSelected = selectedSubtype === subtype;
                return (
                  <button
                    key={subtype}
                    onClick={() => setSelectedSubtype(subtype)}
                    className={`flex-1 px-4 py-3 rounded-xl font-medium text-sm transition-all ${
                      isSelected
                        ? 'text-white shadow-md'
                        : 'bg-cream-100 dark:bg-gray-700 text-charcoal-muted dark:text-gray-400 hover:bg-cream-200 dark:hover:bg-gray-600'
                    }`}
                    style={isSelected ? { backgroundColor: colors.bg } : undefined}
                  >
                    <span className="block text-xs uppercase tracking-wide mb-0.5">
                      {subtype.toUpperCase()}
                    </span>
                    {colors.label}
                  </button>
                );
              })}
            </div>

            {/* Selected Subtype Content */}
            {triFix.subtypes[selectedSubtype] && (
              <div
                className="rounded-xl p-5 border-2"
                style={{
                  backgroundColor: SUBTYPE_COLORS[selectedSubtype].bgLight,
                  borderColor: SUBTYPE_COLORS[selectedSubtype].bg
                }}
              >
                <h4
                  className="font-serif text-xl font-bold mb-3"
                  style={{ color: SUBTYPE_COLORS[selectedSubtype].text }}
                >
                  {triFix.subtypes[selectedSubtype].title}
                </h4>

                <div className="space-y-4">
                  <div>
                    <div className="text-xs font-semibold uppercase text-charcoal-muted mb-1">
                      Core Focus
                    </div>
                    <p className="text-charcoal dark:text-gray-800">
                      {triFix.subtypes[selectedSubtype].focus}
                    </p>
                  </div>

                  <div>
                    <div className="text-xs font-semibold uppercase text-charcoal-muted mb-1">
                      Blindspot
                    </div>
                    <p className="text-charcoal dark:text-gray-800">
                      {triFix.subtypes[selectedSubtype].blindspot}
                    </p>
                  </div>

                  <div>
                    <div className="text-xs font-semibold uppercase text-charcoal-muted mb-1">
                      In Relationships
                    </div>
                    <p className="text-charcoal dark:text-gray-800">
                      {triFix.subtypes[selectedSubtype].relationships}
                    </p>
                  </div>

                  <div>
                    <div className="text-xs font-semibold uppercase text-charcoal-muted mb-1">
                      Stress Loop
                    </div>
                    <p className="text-charcoal dark:text-gray-800">
                      {triFix.subtypes[selectedSubtype].stressLoop}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </section>
        )}

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
