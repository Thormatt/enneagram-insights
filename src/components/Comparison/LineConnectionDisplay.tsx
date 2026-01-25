import type { TypeNumber, IntegrationPath, DisintegrationPath } from '../../types';

interface LineConnectionDisplayProps {
  type1: TypeNumber;
  type2: TypeNumber;
  integration1: IntegrationPath | null;
  integration2: IntegrationPath | null;
  disintegration1: DisintegrationPath | null;
  disintegration2: DisintegrationPath | null;
  centerColor1: string;
  centerColor2: string;
}

export function LineConnectionDisplay({
  type1,
  type2,
  integration1,
  integration2,
  disintegration1,
  disintegration2,
  centerColor1,
  centerColor2
}: LineConnectionDisplayProps) {
  const type1IntegratesToType2 = integration1?.movesTo === type2;
  const type2IntegratesToType1 = integration2?.movesTo === type1;
  const type1DisintegratesToType2 = disintegration1?.movesTo === type2;
  const type2DisintegratesToType1 = disintegration2?.movesTo === type1;

  const hasLineConnection =
    type1IntegratesToType2 ||
    type2IntegratesToType1 ||
    type1DisintegratesToType2 ||
    type2DisintegratesToType1;

  return (
    <div className="space-y-6">
      {/* Special Connection Alert */}
      {hasLineConnection && (
        <div className="bg-gradient-to-r from-sage-50 to-gold-50 dark:from-sage-900/30 dark:to-gold-900/30 rounded-xl p-4 border border-sage-200 dark:border-sage-700">
          <h4 className="text-lg font-serif font-semibold text-charcoal dark:text-white mb-2 flex items-center gap-2">
            <svg className="w-5 h-5 text-sage-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Line Connection Detected
          </h4>
          <div className="space-y-2 text-sm text-charcoal-light dark:text-cream-200">
            {type1IntegratesToType2 && (
              <p>
                <span className="font-medium">Growth Resonance:</span> When Type {type1} integrates (grows), they move toward Type {type2}&apos;s qualities. This pairing has natural growth alignment!
              </p>
            )}
            {type2IntegratesToType1 && (
              <p>
                <span className="font-medium">Growth Resonance:</span> When Type {type2} integrates (grows), they move toward Type {type1}&apos;s qualities. This pairing has natural growth alignment!
              </p>
            )}
            {type1DisintegratesToType2 && (
              <p>
                <span className="font-medium">Stress Pattern:</span> Under stress, Type {type1} takes on unhealthy aspects of Type {type2}. This pairing may need awareness of this shadow dynamic.
              </p>
            )}
            {type2DisintegratesToType1 && (
              <p>
                <span className="font-medium">Stress Pattern:</span> Under stress, Type {type2} takes on unhealthy aspects of Type {type1}. This pairing may need awareness of this shadow dynamic.
              </p>
            )}
          </div>
        </div>
      )}

      {/* Type-by-Type Line Display */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Type 1 Lines */}
        <div className="bg-white dark:bg-gray-700 rounded-xl shadow-sm overflow-hidden">
          <div className="p-3 text-white font-medium" style={{ backgroundColor: centerColor1 }}>
            Type {type1} Movement Lines
          </div>
          <div className="p-4 space-y-4">
            {/* Integration */}
            {integration1 && (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-green-600 dark:text-green-400">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                  </span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Integration → Type {integration1.movesTo}
                    {integration1.movesTo === type2 && (
                      <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
                        Your partner!
                      </span>
                    )}
                  </span>
                </div>
                <div className="pl-6 space-y-1">
                  {integration1.gains.slice(0, 3).map((gain, i) => (
                    <p key={i} className="text-xs text-gray-600 dark:text-gray-400 flex items-start gap-1">
                      <span className="text-green-500">+</span>
                      <span>{gain}</span>
                    </p>
                  ))}
                </div>
              </div>
            )}
            {/* Disintegration */}
            {disintegration1 && (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-red-600 dark:text-red-400">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Disintegration → Type {disintegration1.movesTo}
                    {disintegration1.movesTo === type2 && (
                      <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400">
                        Watch out!
                      </span>
                    )}
                  </span>
                </div>
                <div className="pl-6 space-y-1">
                  {disintegration1.exhibits.slice(0, 3).map((exhibit, i) => (
                    <p key={i} className="text-xs text-gray-600 dark:text-gray-400 flex items-start gap-1">
                      <span className="text-red-500">!</span>
                      <span>{exhibit}</span>
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Type 2 Lines */}
        <div className="bg-white dark:bg-gray-700 rounded-xl shadow-sm overflow-hidden">
          <div className="p-3 text-white font-medium" style={{ backgroundColor: centerColor2 }}>
            Type {type2} Movement Lines
          </div>
          <div className="p-4 space-y-4">
            {/* Integration */}
            {integration2 && (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-green-600 dark:text-green-400">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                  </span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Integration → Type {integration2.movesTo}
                    {integration2.movesTo === type1 && (
                      <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
                        Your partner!
                      </span>
                    )}
                  </span>
                </div>
                <div className="pl-6 space-y-1">
                  {integration2.gains.slice(0, 3).map((gain, i) => (
                    <p key={i} className="text-xs text-gray-600 dark:text-gray-400 flex items-start gap-1">
                      <span className="text-green-500">+</span>
                      <span>{gain}</span>
                    </p>
                  ))}
                </div>
              </div>
            )}
            {/* Disintegration */}
            {disintegration2 && (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-red-600 dark:text-red-400">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Disintegration → Type {disintegration2.movesTo}
                    {disintegration2.movesTo === type1 && (
                      <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400">
                        Watch out!
                      </span>
                    )}
                  </span>
                </div>
                <div className="pl-6 space-y-1">
                  {disintegration2.exhibits.slice(0, 3).map((exhibit, i) => (
                    <p key={i} className="text-xs text-gray-600 dark:text-gray-400 flex items-start gap-1">
                      <span className="text-red-500">!</span>
                      <span>{exhibit}</span>
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
