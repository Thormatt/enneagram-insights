import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  getDaoOverview,
  getDaoTypeProfile,
  getWuWeiPractice,
  getHexadJourney,
} from '../../data';
import type { DaoTypeProfile, WuWeiPractice, HexadJourneyStep } from '../../data/traditions/dao/types';

type DaoSectionId = 'overview' | 'three-energies' | 'wu-wei' | 'hexad' | 'your-path';

interface DaoSection {
  id: DaoSectionId;
  label: string;
  icon: string;
}

const sections: DaoSection[] = [
  { id: 'overview', label: 'The Way', icon: '道' },
  { id: 'three-energies', label: 'Three Energies', icon: '☯' },
  { id: 'wu-wei', label: 'Wu Wei', icon: '無' },
  { id: 'hexad', label: 'The Journey', icon: '⬡' },
  { id: 'your-path', label: 'Your Path', icon: '◎' },
];

interface DaoPathProps {
  selectedType?: number;
}

export function DaoPath({ selectedType = 5 }: DaoPathProps) {
  const [activeSection, setActiveSection] = useState<DaoSectionId>('overview');
  const [selectedTypeForPath, setSelectedTypeForPath] = useState(selectedType);

  const overview = getDaoOverview();
  const typeProfile = getDaoTypeProfile(selectedTypeForPath);
  const wuWeiPractice = getWuWeiPractice(selectedTypeForPath);
  const hexadJourney = getHexadJourney();

  return (
    <div className="space-y-6">
      {/* Section Navigation */}
      <div className="flex overflow-x-auto gap-1 pb-2">
        {sections.map(section => (
          <button
            key={section.id}
            onClick={() => setActiveSection(section.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors min-h-[44px] ${
              activeSection === section.id
                ? 'bg-emerald-600 text-white'
                : 'text-emerald-300 hover:bg-white/10'
            }`}
          >
            <span className="mr-2">{section.icon}</span>
            {section.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.15 }}
        >
          {activeSection === 'overview' && (
            <OverviewSection overview={overview} />
          )}

          {activeSection === 'three-energies' && (
            <ThreeEnergiesSection overview={overview} />
          )}

          {activeSection === 'wu-wei' && (
            <WuWeiSection
              selectedType={selectedTypeForPath}
              onTypeChange={setSelectedTypeForPath}
              wuWeiPractice={wuWeiPractice}
            />
          )}

          {activeSection === 'hexad' && (
            <HexadSection hexadJourney={hexadJourney} />
          )}

          {activeSection === 'your-path' && (
            <YourPathSection
              selectedType={selectedTypeForPath}
              onTypeChange={setSelectedTypeForPath}
              typeProfile={typeProfile}
            />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// Sub-components

interface CardProps {
  title: string;
  accentColor?: string;
  children: React.ReactNode;
}

function Card({ title, accentColor = '#10b981', children }: CardProps) {
  return (
    <div className="bg-gray-800/50 rounded-xl border border-gray-700/50 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-700/50">
        <h3 className="text-lg font-semibold" style={{ color: accentColor }}>{title}</h3>
      </div>
      <div className="p-6">{children}</div>
    </div>
  );
}

function OverviewSection({ overview }: { overview: ReturnType<typeof getDaoOverview> }) {
  return (
    <div className="space-y-6">
      <Card title={overview.title}>
        <p className="text-gray-300 leading-relaxed whitespace-pre-line">
          {overview.introduction}
        </p>
      </Card>

      <Card title="Wu Wei: Effortless Action">
        <p className="text-gray-300 leading-relaxed whitespace-pre-line">
          {overview.wuWeiEssence}
        </p>
      </Card>

      <div className="p-6 bg-gradient-to-r from-emerald-900/30 to-teal-900/30 rounded-xl border border-emerald-700/50">
        <p className="text-emerald-200/90 text-lg text-center italic">
          "The Tao that can be told is not the eternal Tao."
        </p>
        <p className="text-emerald-400/60 text-sm text-center mt-2">— Tao Te Ching, Chapter 1</p>
      </div>
    </div>
  );
}

function ThreeEnergiesSection({ overview }: { overview: ReturnType<typeof getDaoOverview> }) {
  const energies = overview.threeEnergies;

  return (
    <div className="space-y-6">
      <p className="text-gray-300 leading-relaxed">
        Dr. David Daniels integrated Taoist philosophy with the Enneagram through the three manifestations of Qi (life energy). Each type leads with one of these three energies.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Yin */}
        <div className="p-5 bg-gradient-to-b from-blue-900/40 to-gray-800/50 rounded-xl border border-blue-700/50">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center text-blue-300 text-xl">
              ☽
            </div>
            <div>
              <h4 className="font-semibold text-blue-300">Yin</h4>
              <p className="text-xs text-blue-400/70">{energies.yin.quality}</p>
            </div>
          </div>
          <div className="flex gap-2 mb-3">
            {energies.yin.types.map(t => (
              <span key={t} className="w-7 h-7 rounded-full bg-blue-800/50 flex items-center justify-center text-blue-200 text-sm font-medium">
                {t}
              </span>
            ))}
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            {energies.yin.description}
          </p>
        </div>

        {/* Yang */}
        <div className="p-5 bg-gradient-to-b from-orange-900/40 to-gray-800/50 rounded-xl border border-orange-700/50">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-orange-900/50 flex items-center justify-center text-orange-300 text-xl">
              ☀
            </div>
            <div>
              <h4 className="font-semibold text-orange-300">Yang</h4>
              <p className="text-xs text-orange-400/70">{energies.yang.quality}</p>
            </div>
          </div>
          <div className="flex gap-2 mb-3">
            {energies.yang.types.map(t => (
              <span key={t} className="w-7 h-7 rounded-full bg-orange-800/50 flex items-center justify-center text-orange-200 text-sm font-medium">
                {t}
              </span>
            ))}
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            {energies.yang.description}
          </p>
        </div>

        {/* Yin-Yang */}
        <div className="p-5 bg-gradient-to-b from-purple-900/40 to-gray-800/50 rounded-xl border border-purple-700/50">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-purple-900/50 flex items-center justify-center text-purple-300 text-xl">
              ☯
            </div>
            <div>
              <h4 className="font-semibold text-purple-300">Yin-Yang</h4>
              <p className="text-xs text-purple-400/70">{energies.yinYang.quality}</p>
            </div>
          </div>
          <div className="flex gap-2 mb-3">
            {energies.yinYang.types.map(t => (
              <span key={t} className="w-7 h-7 rounded-full bg-purple-800/50 flex items-center justify-center text-purple-200 text-sm font-medium">
                {t}
              </span>
            ))}
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            {energies.yinYang.description}
          </p>
        </div>
      </div>
    </div>
  );
}

function WuWeiSection({
  selectedType,
  onTypeChange,
  wuWeiPractice,
}: {
  selectedType: number;
  onTypeChange: (type: number) => void;
  wuWeiPractice?: WuWeiPractice;
}) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-gray-300">Select your type to see your Wu Wei practice:</p>
        <select
          value={selectedType}
          onChange={(e) => onTypeChange(Number(e.target.value))}
          className="bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white min-h-[44px]"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(t => (
            <option key={t} value={t}>Type {t}</option>
          ))}
        </select>
      </div>

      {wuWeiPractice && (
        <div className="space-y-4">
          <Card title={`Type ${selectedType}: ${wuWeiPractice.corePractice}`}>
            <p className="text-gray-300 leading-relaxed mb-4">
              {wuWeiPractice.description}
            </p>

            <div className="p-4 bg-amber-900/20 rounded-lg border border-amber-700/50 mb-4">
              <h5 className="text-sm font-medium text-amber-300 mb-2">The Challenge</h5>
              <p className="text-gray-400 text-sm">{wuWeiPractice.challenge}</p>
            </div>

            <div className="p-4 bg-emerald-900/20 rounded-lg border border-emerald-700/50 mb-4">
              <h5 className="text-sm font-medium text-emerald-300 mb-2">Yin-Yang Balance</h5>
              <p className="text-gray-400 text-sm">{wuWeiPractice.yinYangBalance}</p>
            </div>

            <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-700/50">
              <h5 className="text-sm font-medium text-blue-300 mb-2">Daily Practice</h5>
              <p className="text-gray-400 text-sm">{wuWeiPractice.dailyPractice}</p>
            </div>
          </Card>

          {wuWeiPractice.quote && (
            <div className="p-6 bg-gradient-to-r from-emerald-900/30 to-teal-900/30 rounded-xl border border-emerald-700/50">
              <p className="text-emerald-200/90 text-center italic">
                {wuWeiPractice.quote}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function HexadSection({ hexadJourney }: { hexadJourney: HexadJourneyStep[] }) {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  return (
    <div className="space-y-6">
      <Card title="The Hexad Journey Through the Tao Te Ching">
        <p className="text-gray-300 leading-relaxed mb-4">
          David Hiley discovered that the Tao Te Ching's 81 chapters follow the Enneagram's hexad path: 1→4→2→8→5→7. Reading the text in order is a journey of awakening encoded in the ancient text.
        </p>

        <div className="flex items-center justify-center gap-2 text-2xl text-emerald-400 mb-6">
          <span>1</span>
          <span className="text-gray-600">→</span>
          <span>4</span>
          <span className="text-gray-600">→</span>
          <span>2</span>
          <span className="text-gray-600">→</span>
          <span>8</span>
          <span className="text-gray-600">→</span>
          <span>5</span>
          <span className="text-gray-600">→</span>
          <span>7</span>
          <span className="text-gray-600">→</span>
          <span className="text-emerald-600">∞</span>
        </div>
      </Card>

      <div className="space-y-3">
        {hexadJourney.map((step, index) => (
          <div
            key={step.position}
            className="bg-gray-800/50 rounded-xl border border-gray-700/50 overflow-hidden"
          >
            <button
              onClick={() => setExpandedStep(expandedStep === index ? null : index)}
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-900/50 flex items-center justify-center text-emerald-300 font-bold">
                  {step.position}
                </div>
                <div>
                  <h4 className="font-semibold text-emerald-300">{step.theme}</h4>
                  <p className="text-sm text-gray-500">{step.chapterRange}</p>
                </div>
              </div>
              <svg
                className={`w-5 h-5 text-gray-400 transition-transform ${expandedStep === index ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {expandedStep === index && (
              <div className="px-6 pb-6 border-t border-gray-700/50 pt-4">
                <p className="text-gray-300 leading-relaxed whitespace-pre-line mb-4">
                  {step.teaching}
                </p>
                <p className="text-emerald-400/70 text-sm italic">
                  {step.transition}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function YourPathSection({
  selectedType,
  onTypeChange,
  typeProfile,
}: {
  selectedType: number;
  onTypeChange: (type: number) => void;
  typeProfile?: DaoTypeProfile;
}) {
  if (!typeProfile) return null;

  const energyColors = {
    yin: { bg: 'from-blue-900/40', border: 'border-blue-700/50', text: 'text-blue-300' },
    yang: { bg: 'from-orange-900/40', border: 'border-orange-700/50', text: 'text-orange-300' },
    'yin-yang': { bg: 'from-purple-900/40', border: 'border-purple-700/50', text: 'text-purple-300' },
  };

  const colors = energyColors[typeProfile.energy];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-white">Your Dao Path</h3>
        <select
          value={selectedType}
          onChange={(e) => onTypeChange(Number(e.target.value))}
          className="bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white min-h-[44px]"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(t => (
            <option key={t} value={t}>Type {t}</option>
          ))}
        </select>
      </div>

      {/* Energy Card */}
      <div className={`p-6 bg-gradient-to-b ${colors.bg} to-gray-800/50 rounded-xl ${colors.border} border`}>
        <div className="flex items-center gap-4 mb-4">
          <div className={`w-14 h-14 rounded-full bg-gray-800/50 flex items-center justify-center ${colors.text} text-2xl font-bold`}>
            {selectedType}
          </div>
          <div>
            <h4 className={`text-xl font-semibold ${colors.text}`}>
              {typeProfile.energy.toUpperCase()} Energy
            </h4>
            <p className="text-gray-400 text-sm">
              {typeProfile.energy === 'yin' ? 'Receptive' : typeProfile.energy === 'yang' ? 'Assertive' : 'Harmonizing'}
            </p>
          </div>
        </div>
        <p className="text-gray-300 leading-relaxed">
          {typeProfile.energyDescription}
        </p>
      </div>

      {/* Path Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card title="Your Challenge">
          <p className="text-gray-300">{typeProfile.coreChallenge}</p>
        </Card>

        <Card title="Your Wu Wei Path">
          <p className="text-gray-300">{typeProfile.wuWeiPath}</p>
        </Card>

        <Card title="Cultivate Yin">
          <p className="text-gray-300">{typeProfile.yinQuality}</p>
        </Card>

        <Card title="Cultivate Yang">
          <p className="text-gray-300">{typeProfile.yangQuality}</p>
        </Card>
      </div>

      {/* Key Teaching */}
      <div className="p-6 bg-gradient-to-r from-emerald-900/30 to-teal-900/30 rounded-xl border border-emerald-700/50">
        <h4 className="text-emerald-300 font-medium mb-2">Key Teaching</h4>
        <p className="text-emerald-200/90 italic">
          {typeProfile.keyTeaching}
        </p>
      </div>

      {/* TTC Chapters */}
      <Card title="Your Tao Te Ching Chapters">
        <p className="text-gray-400 text-sm mb-3">
          These 9 chapters form the row of the 9×9 matrix that corresponds to Type {selectedType}:
        </p>
        <div className="flex flex-wrap gap-2">
          {typeProfile.ttcChapters.map(ch => (
            <span
              key={ch}
              className="px-3 py-1 bg-gray-700/50 rounded-full text-emerald-300 text-sm"
            >
              Ch. {ch}
            </span>
          ))}
        </div>
      </Card>
    </div>
  );
}
