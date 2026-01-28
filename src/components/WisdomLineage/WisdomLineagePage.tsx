import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from '../Layout/ThemeToggle';
import {
  wisdomTraditions,
  getTraditionById,
  getConnectionsForTradition,
  type WisdomTradition,
  type ConnectionType,
  type HistoricalStatus,
} from '../../data/traditions/wisdomLineage';

// Verification status styling and labels
const VERIFICATION_CONFIG: Record<HistoricalStatus, {
  label: string;
  shortLabel: string;
  color: string;
  bgColor: string;
  borderColor: string;
  lineStyle: string;
  icon: string;
}> = {
  verified: {
    label: 'Historically Verified',
    shortLabel: 'Verified',
    color: '#22c55e',
    bgColor: 'bg-green-900/50',
    borderColor: 'border-green-700',
    lineStyle: 'solid',
    icon: '✓',
  },
  plausible: {
    label: 'Historically Plausible',
    shortLabel: 'Plausible',
    color: '#f59e0b',
    bgColor: 'bg-amber-900/50',
    borderColor: 'border-amber-700',
    lineStyle: 'dashed',
    icon: '~',
  },
  'modern-synthesis': {
    label: 'Modern Synthesis',
    shortLabel: 'Modern',
    color: '#a855f7',
    bgColor: 'bg-purple-900/50',
    borderColor: 'border-purple-700',
    lineStyle: 'dotted',
    icon: '◆',
  },
  'modern-insight': {
    label: 'Modern Insight',
    shortLabel: 'Insight',
    color: '#06b6d4',
    bgColor: 'bg-cyan-900/50',
    borderColor: 'border-cyan-700',
    lineStyle: 'dotted',
    icon: '◇',
  },
};

interface WisdomLineagePageProps {
  onClose?: () => void;
}

// Group traditions by era for the timeline
const ERA_GROUPS = [
  { label: 'Ancient Roots', range: [-3500, -500], color: '#D4A574' },
  { label: 'Axial Age', range: [-600, 0], color: '#4A6FA5' },
  { label: 'Medieval Synthesis', range: [0, 1500], color: '#006400' },
  { label: 'Modern Emergence', range: [1500, 2100], color: '#9370DB' },
];

const CONNECTION_COLORS: Record<ConnectionType, string> = {
  direct: '#10b981',
  influenced: '#3b82f6',
  parallel: '#f59e0b',
  synthesized: '#8b5cf6',
};

const CONNECTION_LABELS: Record<ConnectionType, string> = {
  direct: 'Direct lineage',
  influenced: 'Influenced by',
  parallel: 'Parallel development',
  synthesized: 'Synthesized from',
};

// Verification Badge Component
function VerificationBadge({
  status,
  showTooltip = false,
  summary,
  compact = false,
}: {
  status: HistoricalStatus;
  showTooltip?: boolean;
  summary?: string;
  compact?: boolean;
}) {
  const config = VERIFICATION_CONFIG[status];
  const [tooltipVisible, setTooltipVisible] = useState(false);

  return (
    <div className="relative inline-flex">
      <span
        className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium cursor-help ${config.bgColor} ${config.borderColor} border`}
        style={{ color: config.color }}
        onMouseEnter={() => showTooltip && setTooltipVisible(true)}
        onMouseLeave={() => setTooltipVisible(false)}
        onClick={(e) => {
          e.stopPropagation();
          if (showTooltip) setTooltipVisible(!tooltipVisible);
        }}
      >
        <span className="text-[10px]">{config.icon}</span>
        {!compact && <span>{config.shortLabel}</span>}
      </span>

      {/* Tooltip */}
      {showTooltip && tooltipVisible && summary && (
        <div className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-gray-800 rounded-lg shadow-xl border border-gray-700 text-left">
          <div className="text-xs font-medium mb-1" style={{ color: config.color }}>
            {config.label}
          </div>
          <p className="text-xs text-gray-300">{summary}</p>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-800 border-r border-b border-gray-700" />
        </div>
      )}
    </div>
  );
}

// Verification Legend Component
function VerificationLegend() {
  return (
    <div className="mt-6 p-4 bg-gray-800/50 rounded-xl border border-gray-700">
      <div className="text-sm text-gray-400 mb-3 flex items-center gap-2">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="font-medium">Historical Verification (Delphi Consensus)</span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
        {(Object.entries(VERIFICATION_CONFIG) as [HistoricalStatus, typeof VERIFICATION_CONFIG[HistoricalStatus]][]).map(([status, config]) => (
          <div key={status} className="flex items-center gap-2">
            <span
              className={`inline-flex items-center justify-center w-5 h-5 rounded ${config.bgColor} ${config.borderColor} border`}
              style={{ color: config.color }}
            >
              {config.icon}
            </span>
            <span className="text-gray-400">{config.label}</span>
          </div>
        ))}
      </div>
      <p className="text-xs text-gray-500 mt-3 italic">
        Note: The Enneagram symbol has ancient roots, but the personality system is a 20th-century creation.
      </p>
    </div>
  );
}

export function WisdomLineagePage({ onClose }: WisdomLineagePageProps) {
  const [selectedTradition, setSelectedTradition] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'timeline' | 'tree'>('timeline');

  const selectedData = useMemo(
    () => (selectedTradition ? getTraditionById(selectedTradition) : null),
    [selectedTradition]
  );

  const connections = useMemo(
    () => (selectedTradition ? getConnectionsForTradition(selectedTradition) : []),
    [selectedTradition]
  );

  // Group traditions by era
  const traditionsByEra = useMemo(() => {
    return ERA_GROUPS.map(era => ({
      ...era,
      traditions: wisdomTraditions.filter(
        t => t.yearStart >= era.range[0] && t.yearStart < era.range[1]
      ),
    }));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-slate-900 to-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-gray-900/95 backdrop-blur border-b border-amber-800/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-600/30 to-emerald-700/30 flex items-center justify-center">
                <svg className="w-6 h-6 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-6m0 0c-2.5-2-4-4.5-4-7a4 4 0 118 0c0 2.5-1.5 5-4 7z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c1.5-1.5 2-3 2-4.5a2 2 0 10-4 0c0 1.5.5 3 2 4.5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 10c-1.5-.5-3-.5-4.5 0a2 2 0 102 3.5c1-1 2-2 2.5-3.5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.5 10c1.5-.5 3-.5 4.5 0a2 2 0 11-2 3.5c-1-1-2-2-2.5-3.5z" />
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-semibold text-white">The Wisdom Lineage</h1>
                <p className="text-xs text-amber-400/70">Streams of awakening through time</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {/* View toggle */}
              <div className="flex bg-gray-800 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('timeline')}
                  className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                    viewMode === 'timeline'
                      ? 'bg-amber-600 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Timeline
                </button>
                <button
                  onClick={() => setViewMode('tree')}
                  className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                    viewMode === 'tree'
                      ? 'bg-amber-600 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Tree
                </button>
              </div>
              <ThemeToggle />
              {onClose && (
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Intro */}
      <div className="max-w-4xl mx-auto px-4 py-8 text-center">
        <p className="text-lg text-gray-300 leading-relaxed">
          These traditions are not all branches of one tree. They're more like{' '}
          <span className="text-amber-400">different wells that all hit water</span>.
          Some are directly connected; others arrived at similar insights independently.
          Click any tradition to explore its teachings and connections.
        </p>
        <div className="flex justify-center gap-6 mt-6 text-sm flex-wrap">
          {Object.entries(CONNECTION_LABELS).map(([type, label]) => (
            <div key={type} className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: CONNECTION_COLORS[type as ConnectionType] }}
              />
              <span className="text-gray-400">{label}</span>
            </div>
          ))}
        </div>
        <VerificationLegend />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        {viewMode === 'timeline' ? (
          <TimelineView
            traditionsByEra={traditionsByEra}
            selectedTradition={selectedTradition}
            onSelect={setSelectedTradition}
          />
        ) : (
          <TreeView
            traditions={wisdomTraditions}
            selectedTradition={selectedTradition}
            onSelect={setSelectedTradition}
          />
        )}
      </div>

      {/* Detail Panel */}
      <AnimatePresence>
        {selectedData && (
          <TraditionDetailPanel
            tradition={selectedData}
            connections={connections}
            onClose={() => setSelectedTradition(null)}
            onSelectTradition={setSelectedTradition}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

// Timeline View
interface TimelineViewProps {
  traditionsByEra: Array<{
    label: string;
    range: number[];
    color: string;
    traditions: WisdomTradition[];
  }>;
  selectedTradition: string | null;
  onSelect: (id: string) => void;
}

function TimelineView({ traditionsByEra, selectedTradition, onSelect }: TimelineViewProps) {
  return (
    <div className="relative">
      {/* Central timeline line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-600/50 via-amber-500/30 to-purple-600/50 -translate-x-1/2" />

      {traditionsByEra.map((era) => (
        <div key={era.label} className="relative mb-16">
          {/* Era label */}
          <div className="flex justify-center mb-8">
            <div
              className="px-6 py-2 rounded-full text-white font-medium text-sm"
              style={{ backgroundColor: era.color }}
            >
              {era.label}
              <span className="ml-2 opacity-70">
                ({era.range[0] < 0 ? `${Math.abs(era.range[0])} BCE` : era.range[0]} -{' '}
                {era.range[1] < 0 ? `${Math.abs(era.range[1])} BCE` : era.range[1] === 2100 ? 'present' : era.range[1]})
              </span>
            </div>
          </div>

          {/* Traditions in this era */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {era.traditions.map((tradition, i) => {
              const verificationConfig = VERIFICATION_CONFIG[tradition.historicalVerification.status];
              return (
                <button
                  key={tradition.id}
                  onClick={() => onSelect(tradition.id)}
                  className={`relative p-5 rounded-xl border text-left transition-all ${
                    selectedTradition === tradition.id
                      ? 'bg-gray-800 border-amber-500 shadow-lg shadow-amber-500/20'
                      : 'bg-gray-800/50 border-gray-700 hover:border-gray-600 hover:bg-gray-800'
                  } ${i % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}
                  style={{
                    borderLeftWidth: '3px',
                    borderLeftColor: verificationConfig.color,
                    borderLeftStyle: verificationConfig.lineStyle as 'solid' | 'dashed' | 'dotted',
                  }}
                >
                  {/* Verification badge - top right */}
                  <div className="absolute top-3 right-3">
                    <VerificationBadge
                      status={tradition.historicalVerification.status}
                      showTooltip
                      summary={tradition.historicalVerification.summary}
                    />
                  </div>

                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                      style={{ backgroundColor: `${tradition.color}30`, color: tradition.color }}
                    >
                      {tradition.symbol}
                    </div>
                    <div className="flex-1 min-w-0 pr-16">
                      <h3 className="font-semibold text-white">{tradition.name}</h3>
                      <p className="text-sm text-gray-400 mt-0.5">{tradition.subtitle}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-xs px-2 py-0.5 rounded-full bg-gray-700 text-gray-300">
                          {tradition.era}
                        </span>
                        <span className="text-xs text-gray-500">{tradition.region}</span>
                      </div>
                    </div>
                  </div>

                  {/* Enneagram connection strength indicator */}
                  <div className="mt-3 pt-3 border-t border-gray-700">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500">Enneagram connection:</span>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full ${
                          tradition.enneagramConnection.strength === 'direct'
                            ? 'bg-green-900/50 text-green-400'
                            : tradition.enneagramConnection.strength === 'strong'
                            ? 'bg-blue-900/50 text-blue-400'
                            : tradition.enneagramConnection.strength === 'moderate'
                            ? 'bg-yellow-900/50 text-yellow-400'
                            : 'bg-gray-700 text-gray-400'
                        }`}
                      >
                        {tradition.enneagramConnection.strength}
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

// Tree View - Shows multiple branch trees
interface TreeViewProps {
  traditions: WisdomTradition[];
  selectedTradition: string | null;
  onSelect: (id: string) => void;
}

// Define the branch structures
const BRANCHES = [
  {
    id: 'indian',
    name: 'Indian Branch',
    color: '#F59E0B', // amber
    description: 'The path of Self-realization',
    traditions: ['vedic', 'buddhism'],
    flow: ['vedic', 'buddhism'],
  },
  {
    id: 'chinese',
    name: 'Chinese Branch',
    color: '#EF4444', // red
    description: 'The path of harmony with nature',
    traditions: ['iching', 'taoism'],
    flow: ['iching', 'taoism'],
  },
  {
    id: 'western',
    name: 'Western Esoteric',
    color: '#8B5CF6', // purple
    description: 'The path of sacred geometry & mystery',
    traditions: ['mesopotamia', 'egypt', 'pythagoras', 'plato', 'stoicism'],
    flow: ['mesopotamia', 'egypt', 'pythagoras', 'plato'],
  },
  {
    id: 'abrahamic',
    name: 'Abrahamic Mystical',
    color: '#3B82F6', // blue
    description: 'The path of divine union',
    traditions: ['kabbalah', 'christianity', 'sufism'],
    flow: ['kabbalah', 'christianity', 'sufism'],
  },
];

const CROSS_CONNECTIONS = [
  { from: 'buddhism', to: 'taoism', label: 'Chan/Zen' },
  { from: 'plato', to: 'kabbalah', label: 'Neoplatonic influence' },
  { from: 'plato', to: 'sufism', label: 'Neoplatonic influence' },
  { from: 'plato', to: 'christianity', label: 'Neoplatonic influence' },
];

function TreeView({ traditions, selectedTradition, onSelect }: TreeViewProps) {
  const getTradition = (id: string) => traditions.find(t => t.id === id);

  return (
    <div className="space-y-8">
      {/* Direct Enneagram lineage highlight */}
      <div className="p-6 bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl border border-green-700/50">
        <h3 className="text-lg font-semibold text-green-300 mb-2">The Direct Enneagram Lineage</h3>
        <p className="text-gray-300 text-sm mb-2">
          The historically traceable path to the modern Enneagram:
        </p>
        <p className="text-amber-400/80 text-xs mb-4 italic">
          Note: Sufi influence on Gurdjieff is plausible but debated. Ichazo created the personality system in the 1960s.
        </p>
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {['sufism', 'gurdjieff', 'ichazo'].map((id, i) => {
            const t = getTradition(id);
            if (!t) return null;
            const verificationConfig = VERIFICATION_CONFIG[t.historicalVerification.status];
            return (
              <div key={id} className="flex items-center gap-2">
                <div className="flex flex-col items-center gap-1">
                  <button
                    onClick={() => onSelect(id)}
                    className={`px-4 py-2 rounded-lg border transition-all flex items-center gap-2 ${
                      selectedTradition === id
                        ? 'bg-green-600 border-green-500 text-white'
                        : 'bg-gray-800 border-gray-700 text-gray-300 hover:border-green-600'
                    }`}
                    style={{
                      borderLeftWidth: '3px',
                      borderLeftColor: verificationConfig.color,
                      borderLeftStyle: verificationConfig.lineStyle as 'solid' | 'dashed' | 'dotted',
                    }}
                  >
                    <span>{t.symbol}</span>
                    <span>{t.name}</span>
                  </button>
                  <VerificationBadge
                    status={t.historicalVerification.status}
                    showTooltip
                    summary={t.historicalVerification.summary}
                  />
                </div>
                {i < 2 && (
                  <span
                    className="text-xl mx-1"
                    style={{ color: verificationConfig.color }}
                  >
                    →
                  </span>
                )}
              </div>
            );
          })}
          <span className="text-purple-500 text-xl mx-1">→</span>
          <div className="flex flex-col items-center gap-1">
            <span className="px-4 py-2 bg-purple-600 rounded-lg text-white font-medium">
              Modern Enneagram
            </span>
            <span className="text-xs text-purple-400">20th Century</span>
          </div>
        </div>
      </div>

      {/* Multiple branch trees */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {BRANCHES.map(branch => (
          <div
            key={branch.id}
            className="p-5 rounded-xl border border-gray-700 bg-gray-800/30"
            style={{ borderColor: `${branch.color}40` }}
          >
            {/* Branch header */}
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: branch.color }}
              />
              <div>
                <h3 className="font-semibold text-white">{branch.name}</h3>
                <p className="text-xs text-gray-400">{branch.description}</p>
              </div>
            </div>

            {/* Traditions in this branch */}
            <div className="space-y-3">
              {branch.flow.map((tradId, i) => {
                const tradition = getTradition(tradId);
                if (!tradition) return null;

                // Check for cross-connections FROM this tradition
                const crossConn = CROSS_CONNECTIONS.find(c => c.from === tradId);
                const verificationConfig = VERIFICATION_CONFIG[tradition.historicalVerification.status];

                return (
                  <div key={tradId}>
                    <button
                      onClick={() => onSelect(tradId)}
                      className={`relative w-full p-3 rounded-lg border text-left transition-all flex items-center gap-3 ${
                        selectedTradition === tradId
                          ? 'border-amber-500 bg-gray-800 shadow-lg'
                          : 'border-gray-700 bg-gray-800/50 hover:border-gray-600 hover:bg-gray-800'
                      }`}
                      style={{
                        borderLeftWidth: '3px',
                        borderLeftColor: verificationConfig.color,
                        borderLeftStyle: verificationConfig.lineStyle as 'solid' | 'dashed' | 'dotted',
                      }}
                    >
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center text-lg flex-shrink-0"
                        style={{ backgroundColor: `${tradition.color}30`, color: tradition.color }}
                      >
                        {tradition.symbol}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-white text-sm">{tradition.name}</div>
                        <div className="text-xs text-gray-500">{tradition.era}</div>
                      </div>
                      <VerificationBadge
                        status={tradition.historicalVerification.status}
                        showTooltip
                        summary={tradition.historicalVerification.summary}
                        compact
                      />
                    </button>

                    {/* Arrow to next in flow - styled based on verification */}
                    {i < branch.flow.length - 1 && (
                      <div className="flex justify-center my-2">
                        <svg
                          className="w-4 h-4"
                          style={{ color: verificationConfig.color }}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeDasharray={verificationConfig.lineStyle === 'dashed' ? '4 2' : verificationConfig.lineStyle === 'dotted' ? '2 2' : 'none'}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                      </div>
                    )}

                    {/* Cross-connection indicator */}
                    {crossConn && (
                      <div className="flex items-center gap-2 ml-4 my-2 text-xs text-blue-400">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                        <span>{crossConn.label}</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Convergence point */}
      <div className="text-center py-8">
        <div className="inline-flex flex-col items-center">
          <div className="flex items-center gap-4 mb-4">
            {BRANCHES.map(branch => (
              <div
                key={branch.id}
                className="w-0.5 h-8"
                style={{ backgroundColor: branch.color }}
              />
            ))}
          </div>
          <svg className="w-6 h-6 text-gray-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
          <div className="px-6 py-3 bg-gradient-to-r from-amber-900/50 to-purple-900/50 rounded-xl border border-amber-600/50">
            <div className="text-amber-300 font-semibold">The Modern Synthesis</div>
            <div className="text-gray-400 text-sm mt-1">Different wells, same water</div>
          </div>
        </div>
      </div>

      {/* Connection legend */}
      <div className="flex justify-center gap-6 text-xs text-gray-500">
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
          <span>Direct influence</span>
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
          <span>Cross-branch influence</span>
        </div>
      </div>
    </div>
  );
}

// Detail Panel
interface TraditionDetailPanelProps {
  tradition: WisdomTradition;
  connections: Array<{
    tradition: WisdomTradition;
    connection: WisdomTradition['connections'][0];
  }>;
  onClose: () => void;
  onSelectTradition: (id: string) => void;
}

function TraditionDetailPanel({
  tradition,
  connections,
  onClose,
  onSelectTradition,
}: TraditionDetailPanelProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'teachings' | 'connections' | 'enneagram'>('overview');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-30 flex items-end sm:items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="w-full max-w-3xl max-h-[85vh] bg-gray-900 rounded-2xl border border-gray-700 overflow-hidden shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="p-6 border-b border-gray-700"
          style={{ background: `linear-gradient(135deg, ${tradition.color}20, transparent)` }}
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl"
                style={{ backgroundColor: `${tradition.color}30`, color: tradition.color }}
              >
                {tradition.symbol}
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h2 className="text-2xl font-bold text-white">{tradition.name}</h2>
                  <VerificationBadge
                    status={tradition.historicalVerification.status}
                    showTooltip
                    summary={tradition.historicalVerification.summary}
                  />
                </div>
                <p className="text-gray-400">{tradition.subtitle}</p>
                <div className="flex items-center gap-3 mt-2 text-sm">
                  <span className="text-gray-500">{tradition.era}</span>
                  <span className="text-gray-600">|</span>
                  <span className="text-gray-500">{tradition.region}</span>
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mt-6">
            {(['overview', 'teachings', 'connections', 'enneagram'] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === tab
                    ? 'bg-white/20 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Historical Verification Infobox */}
              <div
                className={`p-4 rounded-xl border ${VERIFICATION_CONFIG[tradition.historicalVerification.status].bgColor} ${VERIFICATION_CONFIG[tradition.historicalVerification.status].borderColor}`}
              >
                <div className="flex items-start gap-3">
                  <span
                    className="flex items-center justify-center w-8 h-8 rounded-full text-lg"
                    style={{ backgroundColor: `${VERIFICATION_CONFIG[tradition.historicalVerification.status].color}30`, color: VERIFICATION_CONFIG[tradition.historicalVerification.status].color }}
                  >
                    {VERIFICATION_CONFIG[tradition.historicalVerification.status].icon}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-white text-sm">Historical Status</span>
                      <span
                        className="text-xs px-2 py-0.5 rounded-full"
                        style={{
                          backgroundColor: `${VERIFICATION_CONFIG[tradition.historicalVerification.status].color}20`,
                          color: VERIFICATION_CONFIG[tradition.historicalVerification.status].color,
                        }}
                      >
                        {VERIFICATION_CONFIG[tradition.historicalVerification.status].label}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {tradition.historicalVerification.details}
                    </p>
                    {tradition.historicalVerification.sources && tradition.historicalVerification.sources.length > 0 && (
                      <div className="mt-2 pt-2 border-t border-gray-700/50">
                        <span className="text-xs text-gray-500">Sources: </span>
                        <span className="text-xs text-gray-400">
                          {tradition.historicalVerification.sources.join(' · ')}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <Section title="Core Insight">
                <p className="text-gray-300 leading-relaxed">{tradition.coreInsight}</p>
              </Section>

              <Section title="Key Teaching">
                <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {tradition.keyTeaching}
                </p>
              </Section>

              <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                <p className="text-gray-300 italic text-center">"{tradition.quote.text}"</p>
                <p className="text-gray-500 text-sm text-center mt-2">— {tradition.quote.attribution}</p>
              </div>

              <Section title="Key Figures">
                <div className="space-y-3">
                  {tradition.keyFigures.map((figure, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="text-amber-400 font-medium">{figure.name}</span>
                      <span className="text-gray-400">— {figure.contribution}</span>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Key Texts">
                <div className="flex flex-wrap gap-2">
                  {tradition.keyTexts.map((text, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">
                      {text}
                    </span>
                  ))}
                </div>
              </Section>
            </div>
          )}

          {activeTab === 'teachings' && (
            <div className="space-y-6">
              <Section title="View of Ego">
                <p className="text-gray-300 leading-relaxed">{tradition.viewOfEgo}</p>
              </Section>

              <Section title="View of Essence">
                <p className="text-gray-300 leading-relaxed">{tradition.viewOfEssence}</p>
              </Section>

              <Section title="Practice Approach">
                <p className="text-gray-300 leading-relaxed">{tradition.practiceApproach}</p>
              </Section>

              <Section title="Practices">
                <ul className="space-y-2">
                  {tradition.practices.map((practice, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                      {practice}
                    </li>
                  ))}
                </ul>
              </Section>
            </div>
          )}

          {activeTab === 'connections' && (
            <div className="space-y-6">
              {connections.length > 0 ? (
                connections.map(({ tradition: connTradition, connection }) => (
                  <button
                    key={connTradition.id}
                    onClick={() => onSelectTradition(connTradition.id)}
                    className="w-full p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-gray-600 transition-colors text-left"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-lg"
                        style={{ backgroundColor: `${connTradition.color}30`, color: connTradition.color }}
                      >
                        {connTradition.symbol}
                      </div>
                      <span className="font-medium text-white">{connTradition.name}</span>
                      <span
                        className="px-2 py-0.5 rounded-full text-xs"
                        style={{
                          backgroundColor: `${CONNECTION_COLORS[connection.type]}20`,
                          color: CONNECTION_COLORS[connection.type],
                        }}
                      >
                        {CONNECTION_LABELS[connection.type]}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm">{connection.description}</p>
                  </button>
                ))
              ) : (
                <p className="text-gray-500 text-center py-8">No direct connections documented.</p>
              )}
            </div>
          )}

          {activeTab === 'enneagram' && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-gray-400">Connection Strength:</span>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    tradition.enneagramConnection.strength === 'direct'
                      ? 'bg-green-900/50 text-green-400'
                      : tradition.enneagramConnection.strength === 'strong'
                      ? 'bg-blue-900/50 text-blue-400'
                      : tradition.enneagramConnection.strength === 'moderate'
                      ? 'bg-yellow-900/50 text-yellow-400'
                      : 'bg-gray-700 text-gray-400'
                  }`}
                >
                  {tradition.enneagramConnection.strength.charAt(0).toUpperCase() +
                    tradition.enneagramConnection.strength.slice(1)}
                </span>
              </div>

              <Section title="How It Connects">
                <p className="text-gray-300 leading-relaxed">
                  {tradition.enneagramConnection.description}
                </p>
              </Section>

              <Section title="Shared Concepts">
                <ul className="space-y-2">
                  {tradition.enneagramConnection.sharedConcepts.map((concept, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                      {concept}
                    </li>
                  ))}
                </ul>
              </Section>

              <Section title="Key Differences">
                <ul className="space-y-2">
                  {tradition.enneagramConnection.differences.map((diff, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                      {diff}
                    </li>
                  ))}
                </ul>
              </Section>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

// Helper component
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="text-sm font-medium text-amber-400 uppercase tracking-wider mb-3">{title}</h4>
      {children}
    </div>
  );
}
