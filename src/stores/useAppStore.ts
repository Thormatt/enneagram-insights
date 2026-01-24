import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type {
  TypeNumber,
  InstinctType,
  WingVariant,
  InstinctStack,
  TritypeCode,
  ViewMode,
  CircleLayer,
  DiagramType,
  UserProfile
} from '../types';

type Theme = 'light' | 'dark' | 'system';
type UserExperienceLevel = 'new' | 'familiar' | null;

interface AppState {
  // View state
  viewMode: ViewMode;
  circleLayer: CircleLayer;
  diagramType: DiagramType;
  theme: Theme;

  // Selection state
  selectedType: TypeNumber | null;
  compareTypes: [TypeNumber, TypeNumber] | null;
  selectedSubtype: InstinctType | null;
  selectedWing: WingVariant | null;

  // User profile
  userProfile: UserProfile | null;

  // Onboarding state
  hasCompletedOnboarding: boolean;
  userExperienceLevel: UserExperienceLevel;

  // Actions
  setViewMode: (mode: ViewMode) => void;
  setCircleLayer: (layer: CircleLayer) => void;
  setDiagramType: (type: DiagramType) => void;
  setTheme: (theme: Theme) => void;
  selectType: (type: TypeNumber | null) => void;
  setSelectedType: (type: TypeNumber | null) => void;
  setCompareTypes: (types: [TypeNumber, TypeNumber] | null) => void;
  selectSubtype: (subtype: InstinctType | null) => void;
  selectWing: (wing: WingVariant | null) => void;
  setUserProfile: (profile: UserProfile | null) => void;
  updateUserProfile: (updates: Partial<UserProfile>) => void;
  addSavedComparison: (type1: TypeNumber, type2: TypeNumber) => void;
  removeSavedComparison: (type1: TypeNumber, type2: TypeNumber) => void;
  completeOnboarding: (experienceLevel: 'new' | 'familiar') => void;
  clearSelection: () => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      // Initial state
      viewMode: 'circle',
      circleLayer: 'basic',
      diagramType: 'centers',
      theme: 'light',
      selectedType: null,
      compareTypes: null,
      selectedSubtype: null,
      selectedWing: null,
      userProfile: null,
      hasCompletedOnboarding: true,
      userExperienceLevel: null,

      // Actions
      setViewMode: (mode) => set({ viewMode: mode }),

      setCircleLayer: (layer) => set({ circleLayer: layer }),

      setDiagramType: (type) => set({ diagramType: type }),

      setTheme: (theme) => {
        set({ theme });
        // Apply theme to document
        const root = document.documentElement;
        if (theme === 'dark') {
          root.classList.add('dark');
        } else if (theme === 'light') {
          root.classList.remove('dark');
        } else {
          // System preference
          const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          if (prefersDark) {
            root.classList.add('dark');
          } else {
            root.classList.remove('dark');
          }
        }
      },

      selectType: (type) => set({ selectedType: type, selectedWing: null }),

      setSelectedType: (type) => set({ selectedType: type, selectedWing: null }),

      setCompareTypes: (types) => set({ compareTypes: types }),

      selectSubtype: (subtype) => set({ selectedSubtype: subtype }),

      selectWing: (wing) => set({ selectedWing: wing }),

      setUserProfile: (profile) => set({ userProfile: profile }),

      updateUserProfile: (updates) => {
        const current = get().userProfile;
        if (current) {
          set({
            userProfile: {
              ...current,
              ...updates,
              updatedAt: new Date()
            }
          });
        }
      },

      addSavedComparison: (type1, type2) => {
        const current = get().userProfile;
        if (current) {
          const exists = current.savedComparisons.some(
            c => (c.type1 === type1 && c.type2 === type2) || (c.type1 === type2 && c.type2 === type1)
          );
          if (!exists) {
            set({
              userProfile: {
                ...current,
                savedComparisons: [...current.savedComparisons, { type1, type2 }],
                updatedAt: new Date()
              }
            });
          }
        }
      },

      removeSavedComparison: (type1, type2) => {
        const current = get().userProfile;
        if (current) {
          set({
            userProfile: {
              ...current,
              savedComparisons: current.savedComparisons.filter(
                c => !((c.type1 === type1 && c.type2 === type2) || (c.type1 === type2 && c.type2 === type1))
              ),
              updatedAt: new Date()
            }
          });
        }
      },

      completeOnboarding: (experienceLevel) => set({
        hasCompletedOnboarding: true,
        userExperienceLevel: experienceLevel
      }),

      clearSelection: () => set({
        selectedType: null,
        compareTypes: null,
        selectedSubtype: null,
        selectedWing: null
      })
    }),
    {
      name: 'enneagram-sync-storage',
      partialize: (state) => ({
        userProfile: state.userProfile,
        viewMode: state.viewMode,
        circleLayer: state.circleLayer,
        diagramType: state.diagramType,
        theme: state.theme,
        hasCompletedOnboarding: state.hasCompletedOnboarding,
        userExperienceLevel: state.userExperienceLevel
      })
    }
  )
);

// Helper function to create a new user profile
export const createUserProfile = (
  coreType: TypeNumber,
  wing: WingVariant,
  instinctStack: InstinctStack,
  tritype?: TritypeCode
): UserProfile => ({
  id: crypto.randomUUID(),
  coreType,
  wing,
  instinctStack,
  tritype,
  createdAt: new Date(),
  updatedAt: new Date(),
  notes: [],
  savedComparisons: []
});
