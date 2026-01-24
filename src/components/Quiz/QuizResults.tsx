import { motion } from 'framer-motion';
import {
  getTypeByNumber,
  getCenterColor,
  getWingsByType,
  getInstinctByCode
} from '../../data';
import type { TypeNumber, WingVariant, InstinctStack, InstinctType } from '../../types';

interface QuizResultsProps {
  type: TypeNumber;
  wing: WingVariant;
  instinctStack: InstinctStack;
  confidence: number;
  onSave?: () => void;
  onRetake?: () => void;
}

export function QuizResults({
  type,
  wing,
  instinctStack,
  confidence,
  onSave,
  onRetake
}: QuizResultsProps) {
  const typeData = getTypeByNumber(type);
  const color = typeData ? getCenterColor(typeData.center) : '#6b7280';
  const wings = getWingsByType(type);
  const wingData = wings.find(w => w.variant === wing);

  // Parse instinct stack
  const instincts = instinctStack.split('/') as InstinctType[];
  const dominantInstinct = getInstinctByCode(instincts[0]);
  const secondaryInstinct = getInstinctByCode(instincts[1]);
  const blindSpot = getInstinctByCode(instincts[2]);

  if (!typeData) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="py-8"
    >
      {/* Main Result Card */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden mb-8">
        {/* Header */}
        <div
          className="p-8 text-white text-center"
          style={{ backgroundColor: color }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="w-24 h-24 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center"
          >
            <span className="text-5xl font-bold">{type}</span>
          </motion.div>
          <h2 className="text-3xl font-bold mb-2">Type {type}: {typeData.name}</h2>
          <p className="text-white/80">{wing}</p>
        </div>

        {/* Confidence Score */}
        <div className="p-6 border-b border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Confidence Score</span>
            <span className="text-sm font-bold" style={{ color }}>{confidence}%</span>
          </div>
          <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ backgroundColor: color }}
              initial={{ width: 0 }}
              animate={{ width: `${confidence}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
            {confidence >= 70 ? 'High confidence - this is likely your type' :
             confidence >= 50 ? 'Moderate confidence - consider exploring similar types' :
             'Lower confidence - explore types with similar scores'}
          </p>
        </div>

        {/* Core Description */}
        <div className="p-6 border-b border-gray-100 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-3">About Your Type</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">{typeData.briefDescription}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-red-50 dark:bg-red-900/30 rounded-lg">
              <h4 className="text-sm font-medium text-red-800 dark:text-red-400 mb-1">Core Fear</h4>
              <p className="text-sm text-red-700 dark:text-red-300">{typeData.coreFear}</p>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
              <h4 className="text-sm font-medium text-green-800 dark:text-green-400 mb-1">Core Desire</h4>
              <p className="text-sm text-green-700 dark:text-green-300">{typeData.coreDesire}</p>
            </div>
          </div>
        </div>

        {/* Wing */}
        {wingData && (
          <div className="p-6 border-b border-gray-100 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Your Wing: {wing}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{wingData.name}</p>
            <p className="text-gray-700 dark:text-gray-300">{wingData.description}</p>
          </div>
        )}

        {/* Instinct Stack */}
        <div className="p-6">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Your Instinctual Stack</h3>
          <div className="space-y-4">
            {/* Dominant */}
            {dominantInstinct && (
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-sage-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">1st</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    {dominantInstinct.fullName}
                    <span className="ml-2 text-xs font-normal text-sage-600 dark:text-sage-400 uppercase">Dominant</span>
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{dominantInstinct.focus}</p>
                </div>
              </div>
            )}

            {/* Secondary */}
            {secondaryInstinct && (
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gold-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">2nd</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    {secondaryInstinct.fullName}
                    <span className="ml-2 text-xs font-normal text-gold-600 dark:text-gold-400 uppercase">Secondary</span>
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{secondaryInstinct.focus}</p>
                </div>
              </div>
            )}

            {/* Blind Spot */}
            {blindSpot && (
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-400 dark:bg-gray-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">3rd</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    {blindSpot.fullName}
                    <span className="ml-2 text-xs font-normal text-gray-500 dark:text-gray-400 uppercase">Blind Spot</span>
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{blindSpot.focus}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Summary Card */}
      <div className="bg-charcoal rounded-2xl shadow-warm-lg p-6 text-white mb-8">
        <h3 className="font-serif font-semibold mb-4">Your Complete Profile</h3>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-3xl font-serif font-bold mb-1">{type}</div>
            <div className="text-cream-300 text-sm">Core Type</div>
          </div>
          <div>
            <div className="text-3xl font-serif font-bold mb-1">{wing.slice(-1)}</div>
            <div className="text-cream-300 text-sm">Wing</div>
          </div>
          <div>
            <div className="text-xl font-bold mb-1">{instincts[0].toUpperCase()}/{instincts[1].toUpperCase()}</div>
            <div className="text-cream-300 text-sm">Instinct Stack</div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4">
        {onSave && (
          <button
            onClick={onSave}
            className="flex-1 py-4 bg-terracotta-500 hover:bg-terracotta-600 text-white font-semibold rounded-xl shadow-warm hover:shadow-warm-lg transition-all"
          >
            Save to Profile
          </button>
        )}
        {onRetake && (
          <button
            onClick={onRetake}
            className="px-6 py-4 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-xl hover:border-gray-300 dark:hover:border-gray-500 transition-colors"
          >
            Retake Quiz
          </button>
        )}
      </div>

      <p className="text-center text-sm text-gray-400 dark:text-gray-500 mt-6">
        Remember: This assessment is a starting point. The Enneagram is best understood through
        self-reflection and exploration over time.
      </p>
    </motion.div>
  );
}
