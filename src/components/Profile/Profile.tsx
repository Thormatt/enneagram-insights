import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from '../Layout/ThemeToggle';
import {
  getTypeByNumber,
  getCenterColor,
  getWingsByType,
  getInstinctByCode,
  getIntegrationPath,
  getViceVirtueByType,
  getShadowByType,
  getSubtypesByType,
  getWuWeiPractice
} from '../../data';
import { useAppStore } from '../../stores';
import { useSupabaseSync } from '../../hooks';
import { AccountSection, AuthModal } from '../Auth';
import { useAuth } from '../../hooks';
import type { InstinctType } from '../../types';

type ProfileTab = 'overview' | 'growth' | 'shadow' | 'journal';

interface JournalEntry {
  id: string;
  date: Date;
  content: string;
  mood: 'growth' | 'neutral' | 'struggle';
}

const JOURNAL_STORAGE_KEY = 'enneagram-journal-entries';
const NOTES_STORAGE_KEY = 'enneagram-user-notes';

// Load journal entries from localStorage
const loadJournalEntries = (): JournalEntry[] => {
  try {
    const stored = localStorage.getItem(JOURNAL_STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      // Convert date strings back to Date objects
      return parsed.map((entry: JournalEntry & { date: string }) => ({
        ...entry,
        date: new Date(entry.date)
      }));
    }
  } catch (e) {
    console.error('Failed to load journal entries:', e);
  }
  return [];
};

// Save journal entries to localStorage
const saveJournalEntries = (entries: JournalEntry[]) => {
  try {
    localStorage.setItem(JOURNAL_STORAGE_KEY, JSON.stringify(entries));
  } catch (e) {
    console.error('Failed to save journal entries:', e);
  }
};

// Load user notes from localStorage
const loadUserNotes = (): string => {
  try {
    return localStorage.getItem(NOTES_STORAGE_KEY) || '';
  } catch (e) {
    console.error('Failed to load user notes:', e);
    return '';
  }
};

// Save user notes to localStorage
const saveUserNotes = (notes: string) => {
  try {
    localStorage.setItem(NOTES_STORAGE_KEY, notes);
  } catch (e) {
    console.error('Failed to save user notes:', e);
  }
};

export function Profile() {
  const { userProfile, setViewMode } = useAppStore();
  const [activeTab, setActiveTab] = useState<ProfileTab>('overview');
  const [journalEntries, setJournalEntries] = useState<JournalEntry[]>(loadJournalEntries);
  const [newEntry, setNewEntry] = useState('');
  const [newMood, setNewMood] = useState<'growth' | 'neutral' | 'struggle'>('neutral');
  const [userNotes, setUserNotes] = useState(loadUserNotes);
  const [isEditingNotes, setIsEditingNotes] = useState(false);

  // Initialize Supabase sync - this keeps local and cloud profiles in sync
  useSupabaseSync();

  // Auth state
  const { user, signOut } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);

  // Save journal entries to localStorage whenever they change
  useEffect(() => {
    saveJournalEntries(journalEntries);
  }, [journalEntries]);

  // Save user notes to localStorage whenever they change
  useEffect(() => {
    saveUserNotes(userNotes);
  }, [userNotes]);

  if (!userProfile) {
    return (
      <div className="min-h-screen bg-cream-100 dark:from-gray-900 dark:to-gray-800 flex flex-col">
        {/* Header with close button */}
        <header className="bg-charcoal dark:bg-gray-900 px-4 py-4">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <h1 className="font-serif text-xl font-bold text-white">Profile</h1>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setViewMode('circle')}
                className="p-2 text-cream-200 hover:text-white hover:bg-charcoal-light/30 rounded-xl transition-colors"
                aria-label="Go back"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center max-w-md mx-auto px-4">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-terracotta-500 flex items-center justify-center">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h2 className="text-2xl font-serif font-bold text-charcoal dark:text-white mb-4">No Profile Yet</h2>
            <p className="text-charcoal-light dark:text-gray-400 mb-6">
              Take the Enneagram assessment to discover your type and create your personal profile.
            </p>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => setViewMode('quiz')}
                className="px-6 py-3 bg-terracotta-500 hover:bg-terracotta-600 text-white font-semibold rounded-xl shadow-warm hover:shadow-warm-lg transition-all"
              >
                Take the Quiz
              </button>

              {/* Auth Section */}
              {user ? (
                <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-xl">
                  <div className="flex items-center justify-center gap-2 text-emerald-600 dark:text-emerald-400 mb-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-medium">Signed in</span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{user.email}</p>
                  <button
                    onClick={() => signOut()}
                    className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowAuthModal(true)}
                  className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-charcoal dark:text-white font-medium rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
                >
                  Sign In to Sync
                </button>
              )}
            </div>
          </div>
        </div>

        <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
      </div>
    );
  }

  const type = getTypeByNumber(userProfile.coreType);
  const color = type ? getCenterColor(type.center) : '#6b7280';
  const wings = getWingsByType(userProfile.coreType);
  const wingData = wings.find(w => w.variant === userProfile.wing);
  const integration = getIntegrationPath(userProfile.coreType);
  const viceVirtue = getViceVirtueByType(userProfile.coreType);
  const shadow = getShadowByType(userProfile.coreType);
  const wuWeiPractice = getWuWeiPractice(userProfile.coreType);

  // Parse instinct stack
  const instincts = userProfile.instinctStack.split('/') as InstinctType[];
  const dominantInstinct = getInstinctByCode(instincts[0]);
  const dominantSubtype = getSubtypesByType(userProfile.coreType).find(s => s.instinct === instincts[0]);

  const tabs: { id: ProfileTab; label: string; icon: React.ReactNode }[] = [
    {
      id: 'overview',
      label: 'Overview',
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
    },
    {
      id: 'growth',
      label: 'Growth',
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
    },
    {
      id: 'shadow',
      label: 'Shadow Work',
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
    },
    {
      id: 'journal',
      label: 'Journal',
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
    }
  ];

  const handleAddEntry = () => {
    if (!newEntry.trim()) return;

    const entry: JournalEntry = {
      id: crypto.randomUUID(),
      date: new Date(),
      content: newEntry,
      mood: newMood
    };

    setJournalEntries([entry, ...journalEntries]);
    setNewEntry('');
    setNewMood('neutral');
  };

  const handleDeleteEntry = (id: string) => {
    setJournalEntries(journalEntries.filter(e => e.id !== id));
  };

  if (!type) return null;

  return (
    <div className="min-h-screen bg-cream-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <div className="bg-charcoal dark:bg-gray-900 border-b border-charcoal-light/20 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center gap-4 sm:gap-6">
            <div
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center text-white text-2xl sm:text-3xl font-serif font-bold flex-shrink-0"
              style={{ backgroundColor: color }}
            >
              {userProfile.coreType}
            </div>
            <div className="min-w-0">
              <h1 className="text-xl sm:text-2xl font-serif font-bold text-white truncate">
                Type {userProfile.coreType}: {type.name}
              </h1>
              <div className="flex flex-wrap items-center gap-2 mt-2 text-sm text-cream-300">
                <span className="px-2 py-1 bg-charcoal-light/30 rounded">{userProfile.wing}</span>
                <span className="px-2 py-1 bg-charcoal-light/30 rounded uppercase">{userProfile.instinctStack}</span>
              </div>
            </div>
            <div className="ml-auto flex items-center gap-2 flex-shrink-0">
              <ThemeToggle />
              <button
                onClick={() => setViewMode('circle')}
                className="p-2 text-cream-200 hover:text-white hover:bg-charcoal-light/30 rounded-xl transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3 sm:px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-current text-white'
                    : 'border-transparent text-cream-300 hover:text-white'
                }`}
                style={{ borderColor: activeTab === tab.id ? color : 'transparent' }}
              >
                {tab.icon}
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              {/* Core Summary */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Your Core Type</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{type.briefDescription}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-red-50 dark:bg-red-900/30 rounded-lg">
                    <h3 className="text-sm font-medium text-red-800 dark:text-red-400 mb-1">Core Fear</h3>
                    <p className="text-sm text-red-700 dark:text-red-300">{type.coreFear}</p>
                  </div>
                  <div className="p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
                    <h3 className="text-sm font-medium text-green-800 dark:text-green-400 mb-1">Core Desire</h3>
                    <p className="text-sm text-green-700 dark:text-green-300">{type.coreDesire}</p>
                  </div>
                </div>
              </div>

              {/* Wing */}
              {wingData && (
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Your Wing: {userProfile.wing}</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{wingData.name}</p>
                  <p className="text-gray-700 dark:text-gray-300">{wingData.description}</p>
                </div>
              )}

              {/* Dominant Instinct & Subtype */}
              {dominantInstinct && dominantSubtype && (
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Your Dominant Instinct</h2>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">{instincts[0].toUpperCase()}</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">{dominantInstinct.fullName}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{dominantInstinct.focus}</p>
                      <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                          {userProfile.coreType} {instincts[0].toUpperCase()}: {dominantSubtype.name}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{dominantSubtype.description.slice(0, 200)}...</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Personal Notes */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Personal Notes</h2>
                  <button
                    onClick={() => setIsEditingNotes(!isEditingNotes)}
                    className="text-sm text-terracotta-600 hover:text-terracotta-700 dark:text-terracotta-400 dark:hover:text-terracotta-300 font-medium"
                  >
                    {isEditingNotes ? 'Done' : 'Edit'}
                  </button>
                </div>
                {isEditingNotes ? (
                  <textarea
                    value={userNotes}
                    onChange={(e) => setUserNotes(e.target.value)}
                    placeholder="Write your personal insights, observations about your type, growth goals, or anything else you want to remember..."
                    className="w-full h-40 p-4 border border-gray-200 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-terracotta-500 resize-none"
                  />
                ) : userNotes ? (
                  <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg whitespace-pre-wrap text-gray-700 dark:text-gray-300">
                    {userNotes}
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-400 dark:text-gray-500">
                    <svg className="w-12 h-12 mx-auto mb-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    <p className="text-sm">Click "Edit" to add personal notes about your type journey</p>
                  </div>
                )}
              </div>

              {/* Account & Sync Section */}
              <AccountSection
                localProfile={userProfile ? {
                  coreType: userProfile.coreType,
                  wing: userProfile.wing,
                  instinctStack: userProfile.instinctStack,
                  tritype: userProfile.tritype,
                } : null}
              />
            </motion.div>
          )}

          {/* Growth Tab */}
          {activeTab === 'growth' && (
            <motion.div
              key="growth"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              {/* Integration Path */}
              {integration && (
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Growth Direction: Type {integration.movesTo}
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{integration.description}</p>

                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">Qualities You Can Develop</h3>
                  <ul className="space-y-2 mb-6">
                    {integration.gains.map((gain, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{gain}</span>
                      </li>
                    ))}
                  </ul>

                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">Recommended Practices</h3>
                  <ul className="space-y-2">
                    {integration.practices.map((practice, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">{i + 1}</span>
                        </span>
                        <span className="text-gray-700 dark:text-gray-300">{practice}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Vice to Virtue */}
              {viceVirtue && (
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Passion to Virtue</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="p-4 bg-red-50 dark:bg-red-900/30 rounded-lg border-l-4 border-red-400">
                      <h3 className="font-medium text-red-800 dark:text-red-400 mb-1">Passion: {viceVirtue.vice}</h3>
                      <p className="text-sm text-red-700 dark:text-red-300">{viceVirtue.viceDescription}</p>
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-900/30 rounded-lg border-l-4 border-emerald-400">
                      <h3 className="font-medium text-emerald-800 dark:text-emerald-400 mb-1">Virtue: {viceVirtue.virtue}</h3>
                      <p className="text-sm text-emerald-700 dark:text-emerald-300">{viceVirtue.virtueDescription}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Wu Wei Practice Teaser */}
              {wuWeiPractice && (
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-xl shadow-sm p-6 border border-emerald-200/50 dark:border-emerald-700/30">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">道</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2 className="text-lg font-semibold text-emerald-900 dark:text-emerald-100 mb-1">
                        The Way of Wu Wei
                      </h2>
                      <p className="text-sm text-emerald-700 dark:text-emerald-300 mb-3">
                        {wuWeiPractice.corePractice}
                      </p>
                      <div className="p-3 bg-white/60 dark:bg-gray-800/60 rounded-lg mb-4">
                        <p className="text-xs font-medium text-emerald-800 dark:text-emerald-200 uppercase tracking-wide mb-1">
                          Daily Practice
                        </p>
                        <p className="text-sm text-emerald-700 dark:text-emerald-300">
                          {wuWeiPractice.dailyPractice}
                        </p>
                      </div>
                      <button
                        onClick={() => setViewMode('transcendence')}
                        className="inline-flex items-center gap-2 text-sm font-medium text-emerald-700 hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-300 transition-colors"
                      >
                        Explore the Dao Path
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* Shadow Work Tab */}
          {activeTab === 'shadow' && shadow && (
            <motion.div
              key="shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Understanding Your Shadow</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Shadow work involves acknowledging the parts of yourself that you tend to deny or project onto others.
                  This awareness is key to integration and growth.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white mb-3">Aspects You May Deny</h3>
                    <ul className="space-y-2">
                      {shadow.deniedAspects.map((aspect, i) => (
                        <li key={i} className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                          <span className="w-2 h-2 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300">{aspect}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white mb-3">What You Project Onto Others</h3>
                    <div className="p-4 bg-amber-50 dark:bg-amber-900/30 rounded-lg border-l-4 border-amber-400">
                      <p className="text-amber-800 dark:text-amber-300 italic">"{shadow.projectsOntoOthers}"</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white mb-3">Inner Critic Pattern</h3>
                    <div className="p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg border-l-4 border-purple-400">
                      <p className="text-purple-800 dark:text-purple-300">{shadow.innerCritique}</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white mb-3">Shadow Work Practices</h3>
                    <ul className="space-y-3">
                      {shadow.shadowWork.map((practice, i) => (
                        <li key={i} className="flex items-start gap-3 p-4 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg">
                          <span className="w-6 h-6 rounded-full bg-indigo-200 dark:bg-indigo-800 flex items-center justify-center flex-shrink-0">
                            <span className="text-xs font-bold text-indigo-700 dark:text-indigo-300">{i + 1}</span>
                          </span>
                          <span className="text-indigo-900 dark:text-indigo-200">{practice}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Journal Tab */}
          {activeTab === 'journal' && (
            <motion.div
              key="journal"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              {/* New Entry */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">New Journal Entry</h2>
                <textarea
                  value={newEntry}
                  onChange={(e) => setNewEntry(e.target.value)}
                  placeholder="Reflect on your growth, patterns you've noticed, or insights about your type..."
                  className="w-full h-32 p-4 border border-gray-200 dark:border-gray-600 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                />
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-4">
                  <div className="flex gap-2">
                    {(['growth', 'neutral', 'struggle'] as const).map(mood => (
                      <button
                        key={mood}
                        onClick={() => setNewMood(mood)}
                        className={`px-4 py-2.5 min-h-[44px] text-sm rounded-full transition-colors ${
                          newMood === mood
                            ? mood === 'growth' ? 'bg-emerald-500 text-white'
                              : mood === 'struggle' ? 'bg-red-500 text-white'
                              : 'bg-gray-500 text-white'
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                        }`}
                      >
                        {mood.charAt(0).toUpperCase() + mood.slice(1)}
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={handleAddEntry}
                    disabled={!newEntry.trim()}
                    className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    Add Entry
                  </button>
                </div>
              </div>

              {/* Entries List */}
              {journalEntries.length === 0 ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400">No journal entries yet. Start reflecting on your journey!</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {journalEntries.map(entry => (
                    <motion.div
                      key={entry.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <span
                            className={`w-3 h-3 rounded-full ${
                              entry.mood === 'growth' ? 'bg-emerald-500'
                                : entry.mood === 'struggle' ? 'bg-red-500'
                                : 'bg-gray-400'
                            }`}
                          />
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {entry.date.toLocaleDateString()} at {entry.date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </span>
                        </div>
                        <button
                          onClick={() => handleDeleteEntry(entry.id)}
                          className="p-1 text-gray-400 hover:text-red-500 dark:text-gray-500 dark:hover:text-red-400 transition-colors"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">{entry.content}</p>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
