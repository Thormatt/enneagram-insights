import { getCenterColor } from '../../data';
import type { TypeNumber, PrimaryCenter } from '../../types';
import type { TriFixInfo } from '../../data/tritypes/tritypeDescriptions';

interface TriFixData {
  triFix: TriFixInfo;
  gutType: TypeNumber;
  heartType: TypeNumber;
  headType: TypeNumber;
  primaryCenter: PrimaryCenter;
}

interface TriFixComparisonProps {
  triFix1: TriFixData;
  triFix2: TriFixData;
  onClose?: () => void;
  onSwap?: () => void;
}

export function TriFixComparison({
  triFix1,
  triFix2,
  onClose,
  onSwap
}: TriFixComparisonProps) {
  const sharedTypes: TypeNumber[] = [];
  const types1 = [triFix1.gutType, triFix1.heartType, triFix1.headType];
  const types2 = [triFix2.gutType, triFix2.heartType, triFix2.headType];

  types1.forEach(t => {
    if (types2.includes(t)) sharedTypes.push(t);
  });

  const renderTriFixHeader = (data: TriFixData) => (
    <div
      className="p-4 text-white rounded-t-xl"
      style={{ backgroundColor: getCenterColor(data.primaryCenter) }}
    >
      <div className="flex items-center gap-2 mb-2">
        <span className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm border border-white/30" style={{ backgroundColor: getCenterColor('gut') }}>
          {data.gutType}
        </span>
        <span className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm border border-white/30" style={{ backgroundColor: getCenterColor('heart') }}>
          {data.heartType}
        </span>
        <span className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm border border-white/30" style={{ backgroundColor: getCenterColor('head') }}>
          {data.headType}
        </span>
      </div>
      <h3 className="font-serif text-lg font-bold">{data.triFix.name}</h3>
      <p className="text-white/80 text-sm">{data.triFix.archetype}</p>
    </div>
  );

  const renderComparisonSection = (
    title: string,
    items1: string[],
    items2: string[],
    colorStyle?: 'primary' | 'warning'
  ) => {
    const shared = items1.filter(i => items2.includes(i));
    const unique1 = items1.filter(i => !items2.includes(i));
    const unique2 = items2.filter(i => !items1.includes(i));

    return (
      <div className="mb-6">
        <h4 className="font-serif font-semibold text-charcoal dark:text-white mb-3">{title}</h4>

        {shared.length > 0 && (
          <div className="mb-3">
            <span className="text-xs font-semibold uppercase text-charcoal-muted dark:text-gray-500 block mb-2">
              Shared
            </span>
            <div className="flex flex-wrap gap-2">
              {shared.map((item, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full text-sm font-medium bg-terracotta-100 dark:bg-terracotta-900/30 text-terracotta-600 dark:text-terracotta-400"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-2 gap-4">
          <div>
            <span
              className="text-xs font-semibold uppercase block mb-2"
              style={{ color: getCenterColor(triFix1.primaryCenter) }}
            >
              {triFix1.triFix.code}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {unique1.map((item, i) => (
                <span
                  key={i}
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    colorStyle === 'warning'
                      ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400'
                      : 'bg-cream-100 dark:bg-gray-700 text-charcoal-light dark:text-gray-300'
                  }`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div>
            <span
              className="text-xs font-semibold uppercase block mb-2"
              style={{ color: getCenterColor(triFix2.primaryCenter) }}
            >
              {triFix2.triFix.code}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {unique2.map((item, i) => (
                <span
                  key={i}
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    colorStyle === 'warning'
                      ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400'
                      : 'bg-cream-100 dark:bg-gray-700 text-charcoal-light dark:text-gray-300'
                  }`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-warm-lg overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b border-warm-border dark:border-gray-700 flex items-center justify-between">
        <h2 className="font-serif text-xl font-bold text-charcoal dark:text-white">
          Tri-Fix Comparison
        </h2>
        <div className="flex items-center gap-2">
          {onSwap && (
            <button
              onClick={onSwap}
              className="p-2 rounded-full hover:bg-cream-100 dark:hover:bg-gray-700 transition-colors"
              title="Swap tri-fixes"
            >
              <svg className="w-5 h-5 text-charcoal-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </button>
          )}
          {onClose && (
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-cream-100 dark:hover:bg-gray-700 transition-colors"
            >
              <svg className="w-5 h-5 text-charcoal-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Tri-Fix Headers Side by Side */}
      <div className="grid grid-cols-2">
        {renderTriFixHeader(triFix1)}
        {renderTriFixHeader(triFix2)}
      </div>

      {/* Shared Types Banner */}
      {sharedTypes.length > 0 && (
        <div className="bg-terracotta-50 dark:bg-terracotta-900/20 p-3 text-center">
          <span className="text-sm text-terracotta-600 dark:text-terracotta-400 font-medium">
            Shared Types: {sharedTypes.join(', ')}
          </span>
        </div>
      )}

      {/* Comparison Content */}
      <div className="p-6">
        {/* Strengths Comparison */}
        {renderComparisonSection(
          'Strengths',
          triFix1.triFix.strengths,
          triFix2.triFix.strengths,
          'primary'
        )}

        {/* Challenges Comparison */}
        {renderComparisonSection(
          'Challenges',
          triFix1.triFix.challenges,
          triFix2.triFix.challenges,
          'warning'
        )}

        {/* Inner Experience */}
        <div className="mb-6">
          <h4 className="font-serif font-semibold text-charcoal dark:text-white mb-3">Inner Experience</h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-cream-50 dark:bg-gray-900 rounded-xl p-4">
              <span
                className="text-xs font-semibold uppercase block mb-2"
                style={{ color: getCenterColor(triFix1.primaryCenter) }}
              >
                {triFix1.triFix.code}
              </span>
              <p className="text-sm text-charcoal dark:text-gray-300 italic leading-relaxed">
                "{triFix1.triFix.innerExperience}"
              </p>
            </div>
            <div className="bg-cream-50 dark:bg-gray-900 rounded-xl p-4">
              <span
                className="text-xs font-semibold uppercase block mb-2"
                style={{ color: getCenterColor(triFix2.primaryCenter) }}
              >
                {triFix2.triFix.code}
              </span>
              <p className="text-sm text-charcoal dark:text-gray-300 italic leading-relaxed">
                "{triFix2.triFix.innerExperience}"
              </p>
            </div>
          </div>
        </div>

        {/* Center Leadership */}
        <div className="border-t border-warm-border dark:border-gray-700 pt-6">
          <h4 className="font-serif font-semibold text-charcoal dark:text-white mb-3">
            Center Leadership
          </h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-cream-50 dark:bg-gray-900">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                style={{ backgroundColor: getCenterColor(triFix1.primaryCenter) }}
              >
                {triFix1.primaryCenter === 'gut' ? triFix1.gutType : triFix1.primaryCenter === 'heart' ? triFix1.heartType : triFix1.headType}
              </div>
              <div>
                <span className="text-xs font-semibold uppercase" style={{ color: getCenterColor(triFix1.primaryCenter) }}>
                  {triFix1.primaryCenter}-led
                </span>
                <p className="text-sm text-charcoal dark:text-gray-300">
                  {triFix1.primaryCenter === 'gut' ? 'Instinct-first' : triFix1.primaryCenter === 'heart' ? 'Emotion-first' : 'Mind-first'}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-cream-50 dark:bg-gray-900">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                style={{ backgroundColor: getCenterColor(triFix2.primaryCenter) }}
              >
                {triFix2.primaryCenter === 'gut' ? triFix2.gutType : triFix2.primaryCenter === 'heart' ? triFix2.heartType : triFix2.headType}
              </div>
              <div>
                <span className="text-xs font-semibold uppercase" style={{ color: getCenterColor(triFix2.primaryCenter) }}>
                  {triFix2.primaryCenter}-led
                </span>
                <p className="text-sm text-charcoal dark:text-gray-300">
                  {triFix2.primaryCenter === 'gut' ? 'Instinct-first' : triFix2.primaryCenter === 'heart' ? 'Emotion-first' : 'Mind-first'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
