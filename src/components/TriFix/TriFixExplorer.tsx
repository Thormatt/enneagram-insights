import React, { useState, useCallback } from 'react';
import { TriFixGrid } from './TriFixGrid';
import { TriFixDetail } from './TriFixDetail';
import { TriFixComparison } from './TriFixComparison';
import { TriFixWheel } from './TriFixWheel';
import { triFixDescriptions, getTriFixKey } from '../../data/tritypes/tritypeDescriptions';
import { useAppStore } from '../../stores';
import type { TypeNumber, PrimaryCenter } from '../../types';

type ExplorerTab = 'grid' | 'wheel' | 'compare';

interface SelectedTriFix {
  code: string;
  gut: TypeNumber;
  heart: TypeNumber;
  head: TypeNumber;
  primaryCenter: PrimaryCenter;
}

export function TriFixExplorer({ onClose }: { onClose?: () => void }) {
  const [activeTab, setActiveTab] = useState<ExplorerTab>('grid');
  const [selectedTriFix, setSelectedTriFix] = useState<SelectedTriFix | null>(null);
  const [compareTriFix1, setCompareTriFix1] = useState<SelectedTriFix | null>(null);
  const [compareTriFix2, setCompareTriFix2] = useState<SelectedTriFix | null>(null);
  const [showDetail, setShowDetail] = useState(false);
  const userProfile = useAppStore((state) => state.userProfile);
  const updateUserProfile = useAppStore((state) => state.updateUserProfile);
  const compareSelectedCodes = [compareTriFix1?.code, compareTriFix2?.code].filter(
    (code): code is string => Boolean(code)
  );

  const handleSelectTriFix = useCallback((code: string, gut: TypeNumber, heart: TypeNumber, head: TypeNumber, primaryCenter: PrimaryCenter) => {
    setSelectedTriFix({ code, gut, heart, head, primaryCenter });
    setShowDetail(true);
  }, []);

  const handleWheelComplete = useCallback((gut: TypeNumber, heart: TypeNumber, head: TypeNumber, primaryCenter: PrimaryCenter, code: string) => {
    setSelectedTriFix({ code, gut, heart, head, primaryCenter });
    setShowDetail(true);
  }, []);

  const handleStartCompare = useCallback(() => {
    if (selectedTriFix) {
      setCompareTriFix1(selectedTriFix);
      setCompareTriFix2(null);
      setShowDetail(false);
      setActiveTab('compare');
    }
  }, [selectedTriFix]);

  const handleSelectForCompare = useCallback((code: string, gut: TypeNumber, heart: TypeNumber, head: TypeNumber, primaryCenter: PrimaryCenter) => {
    const triFix = { code, gut, heart, head, primaryCenter };

    if (!compareTriFix1) {
      setCompareTriFix1(triFix);
    } else if (!compareTriFix2) {
      setCompareTriFix2(triFix);
    } else {
      // Reset and start over
      setCompareTriFix1(triFix);
      setCompareTriFix2(null);
    }
  }, [compareTriFix1, compareTriFix2]);

  const handleSaveToProfile = useCallback(() => {
    if (selectedTriFix && userProfile) {
      updateUserProfile({ tritype: selectedTriFix.code as `${TypeNumber}${TypeNumber}${TypeNumber}` });
    }
  }, [selectedTriFix, userProfile, updateUserProfile]);

  const tabs: Array<{ id: ExplorerTab; label: string; icon: React.ReactNode }> = [
    {
      id: 'grid',
      label: 'Browse All',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      )
    },
    {
      id: 'wheel',
      label: 'Find Tri-Fix',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      id: 'compare',
      label: 'Compare',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-cream-50 dark:bg-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-cream-50/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-warm-border dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-4">
              {onClose && (
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-cream-200 dark:hover:bg-gray-800 transition-colors"
                >
                  <svg className="w-5 h-5 text-charcoal dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                </button>
              )}
              <div>
                <h1 className="font-serif text-2xl font-bold text-charcoal dark:text-white">
                  Tri-Fix Explorer
                </h1>
                <p className="text-sm text-charcoal-muted dark:text-gray-400">
                  Your three-center pattern
                </p>
              </div>
            </div>

            {/* Tabs */}
            <div className="hidden md:flex items-center gap-1 bg-cream-100 dark:bg-gray-800 rounded-full p-1">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    if (tab.id !== 'compare') {
                      setCompareTriFix1(null);
                      setCompareTriFix2(null);
                    }
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeTab === tab.id
                      ? 'bg-white dark:bg-gray-700 text-charcoal dark:text-white shadow-warm'
                      : 'text-charcoal-muted dark:text-gray-400 hover:text-charcoal dark:hover:text-white'
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Tabs */}
          <div className="flex md:hidden items-center gap-1 mt-4 bg-cream-100 dark:bg-gray-800 rounded-full p-1">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  if (tab.id !== 'compare') {
                    setCompareTriFix1(null);
                    setCompareTriFix2(null);
                  }
                }}
                className={`flex-1 flex items-center justify-center gap-1 px-3 py-2 rounded-full text-xs font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-white dark:bg-gray-700 text-charcoal dark:text-white shadow-warm'
                    : 'text-charcoal-muted dark:text-gray-400'
                }`}
              >
                {tab.icon}
                <span className="text-[11px] leading-none">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Grid View */}
        {activeTab === 'grid' && !showDetail && (
          <TriFixGrid
            onSelect={handleSelectTriFix}
            selectedCodes={selectedTriFix ? [selectedTriFix.code] : []}
          />
        )}

        {/* Wheel View */}
        {activeTab === 'wheel' && !showDetail && (
          <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-warm-lg p-8">
              <h2 className="font-serif text-xl font-semibold text-charcoal dark:text-white text-center mb-2">
                Find Your Tri-Fix
              </h2>
              <p className="text-sm text-charcoal-muted dark:text-gray-400 text-center mb-6">
                Select one type from each center
              </p>
              <TriFixWheel
                size={320}
                onComplete={handleWheelComplete}
                selectedGut={selectedTriFix?.gut}
                selectedHeart={selectedTriFix?.heart}
                selectedHead={selectedTriFix?.head}
                selectedPrimaryCenter={selectedTriFix?.primaryCenter}
              />
            </div>
          </div>
        )}

        {/* Compare View */}
        {activeTab === 'compare' && (
          <div className="space-y-6">
            {compareTriFix1 && compareTriFix2 ? (
              <TriFixComparison
                triFix1={{
                  triFix: triFixDescriptions[getTriFixKey(compareTriFix1.gut, compareTriFix1.heart, compareTriFix1.head, compareTriFix1.primaryCenter)],
                  gutType: compareTriFix1.gut,
                  heartType: compareTriFix1.heart,
                  headType: compareTriFix1.head,
                  primaryCenter: compareTriFix1.primaryCenter
                }}
                triFix2={{
                  triFix: triFixDescriptions[getTriFixKey(compareTriFix2.gut, compareTriFix2.heart, compareTriFix2.head, compareTriFix2.primaryCenter)],
                  gutType: compareTriFix2.gut,
                  heartType: compareTriFix2.heart,
                  headType: compareTriFix2.head,
                  primaryCenter: compareTriFix2.primaryCenter
                }}
                onClose={() => {
                  setCompareTriFix1(null);
                  setCompareTriFix2(null);
                }}
                onSwap={() => {
                  const temp = compareTriFix1;
                  setCompareTriFix1(compareTriFix2);
                  setCompareTriFix2(temp);
                }}
              />
            ) : (
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-warm p-6 text-center">
                  <h3 className="font-serif text-lg font-semibold text-charcoal dark:text-white mb-2">
                    {!compareTriFix1
                      ? 'Select the first tri-fix to compare'
                      : 'Select the second tri-fix to compare'}
                  </h3>
                  <p className="text-sm text-charcoal-muted dark:text-gray-400">
                    {compareTriFix1 && (
                      <span className="inline-flex items-center gap-2">
                        First tri-fix: <strong>{compareTriFix1.code}</strong>
                        <button
                          onClick={() => setCompareTriFix1(null)}
                          className="text-terracotta-500 hover:text-terracotta-600"
                        >
                          (clear)
                        </button>
                      </span>
                    )}
                  </p>
                </div>

                <TriFixGrid
                  onSelect={handleSelectForCompare}
                  selectedCodes={compareSelectedCodes}
                />
              </div>
            )}
          </div>
        )}

        {/* Detail View */}
        {showDetail && selectedTriFix && (
          <div className="max-w-3xl mx-auto">
            <TriFixDetail
              triFix={triFixDescriptions[getTriFixKey(selectedTriFix.gut, selectedTriFix.heart, selectedTriFix.head, selectedTriFix.primaryCenter)]}
              gutType={selectedTriFix.gut}
              heartType={selectedTriFix.heart}
              headType={selectedTriFix.head}
              primaryCenter={selectedTriFix.primaryCenter}
              onClose={() => setShowDetail(false)}
              onCompare={handleStartCompare}
            />

            {/* Save to Profile CTA */}
            {userProfile && selectedTriFix.code !== userProfile.tritype && (
              <div className="mt-6 text-center">
                <button
                  onClick={handleSaveToProfile}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-terracotta-500 hover:bg-terracotta-600 text-white font-medium rounded-full shadow-warm transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Set as My Tri-Fix
                </button>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
