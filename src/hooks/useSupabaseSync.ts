import { useEffect, useCallback, useRef } from 'react';
import { useAuth } from './useAuth';
import { useProfile } from './useProfile';
import { useAppStore, createUserProfile } from '../stores/useAppStore';
import type { TypeNumber, WingVariant, InstinctStack, TritypeCode } from '../types';

/**
 * Syncs the local Zustand store with Supabase.
 *
 * Strategy:
 * - When user logs in, pull their profile from Supabase
 * - If they have local data but no cloud data, push local to cloud
 * - If they have cloud data, prefer cloud data (it's the "source of truth")
 * - Changes to local store are debounced and pushed to Supabase
 */
export function useSupabaseSync() {
  const { user, loading: authLoading } = useAuth();
  const { profile: cloudProfile, loading: profileLoading, createProfile, updateProfile } = useProfile();

  const localProfile = useAppStore((state) => state.userProfile);
  const setUserProfile = useAppStore((state) => state.setUserProfile);

  const syncInProgress = useRef(false);
  const lastSyncedAt = useRef<string | null>(null);

  // Sync cloud profile to local store when it changes
  useEffect(() => {
    if (authLoading || profileLoading || syncInProgress.current) return;
    if (!user) return;

    // User is logged in
    if (cloudProfile) {
      // Cloud profile exists - sync it to local
      const cloudUpdatedAt = cloudProfile.updated_at;

      // Skip if we already synced this version
      if (lastSyncedAt.current === cloudUpdatedAt) return;

      syncInProgress.current = true;
      lastSyncedAt.current = cloudUpdatedAt;

      // Map cloud profile to local format
      const mappedProfile = mapCloudToLocal(cloudProfile);
      setUserProfile(mappedProfile);

      syncInProgress.current = false;
    } else if (localProfile && !cloudProfile) {
      // User has local profile but no cloud profile - push to cloud
      syncInProgress.current = true;

      createProfile({
        core_type: localProfile.coreType,
        wing: localProfile.wing,
        instinct_stack: localProfile.instinctStack,
        tritype: localProfile.tritype,
        notes: localProfile.notes,
        display_name: null,
        avatar_url: null,
        is_public: false,
      }).then(() => {
        syncInProgress.current = false;
      });
    }
  }, [user, cloudProfile, localProfile, authLoading, profileLoading, createProfile, setUserProfile]);

  // Push local changes to cloud (debounced)
  const pushToCloud = useCallback(async () => {
    if (!user || !localProfile || syncInProgress.current) return;

    syncInProgress.current = true;

    await updateProfile({
      core_type: localProfile.coreType,
      wing: localProfile.wing,
      instinct_stack: localProfile.instinctStack,
      tritype: localProfile.tritype,
      notes: localProfile.notes,
    });

    syncInProgress.current = false;
  }, [user, localProfile, updateProfile]);

  // Return sync functions for manual control
  return {
    pushToCloud,
    isSyncing: syncInProgress.current,
    isAuthenticated: !!user,
    cloudProfile,
  };
}

// Helper to map cloud profile to local format
function mapCloudToLocal(cloudProfile: {
  id: string;
  core_type: number | null;
  wing: string | null;
  instinct_stack: string | null;
  tritype: string | null;
  notes: string[] | null;
  created_at: string | null;
  updated_at: string | null;
}) {
  if (!cloudProfile.core_type) {
    return null;
  }

  return createUserProfile(
    cloudProfile.core_type as TypeNumber,
    (cloudProfile.wing || `${cloudProfile.core_type}w${cloudProfile.core_type}`) as WingVariant,
    (cloudProfile.instinct_stack || 'sp/sx/so') as InstinctStack,
    cloudProfile.tritype as TritypeCode | undefined
  );
}
