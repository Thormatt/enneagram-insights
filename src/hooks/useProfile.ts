import { useCallback, useEffect, useState } from 'react';
import { supabase, type Profile, type InsertTables, type UpdateTables } from '../lib/supabase';
import { useAuth } from './useAuth';

interface UseProfileReturn {
  profile: Profile | null;
  loading: boolean;
  error: Error | null;
  createProfile: (data: Omit<InsertTables<'profiles'>, 'user_id'>) => Promise<Profile | null>;
  updateProfile: (data: UpdateTables<'profiles'>) => Promise<Profile | null>;
  deleteProfile: () => Promise<boolean>;
  refreshProfile: () => Promise<void>;
}

export function useProfile(): UseProfileReturn {
  const { user } = useAuth();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchProfile = useCallback(async () => {
    if (!user) {
      setProfile(null);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    const { data, error: fetchError } = await supabase
      .from('profiles')
      .select('*')
      .eq('user_id', user.id)
      .single();

    if (fetchError && fetchError.code !== 'PGRST116') {
      // PGRST116 = no rows returned (profile doesn't exist yet)
      setError(new Error(fetchError.message));
    }

    setProfile(data);
    setLoading(false);
  }, [user]);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  const createProfile = useCallback(
    async (data: Omit<InsertTables<'profiles'>, 'user_id'>): Promise<Profile | null> => {
      if (!user) {
        setError(new Error('Must be logged in to create a profile'));
        return null;
      }

      setLoading(true);
      setError(null);

      const { data: newProfile, error: createError } = await supabase
        .from('profiles')
        .insert({ ...data, user_id: user.id })
        .select()
        .single();

      if (createError) {
        setError(new Error(createError.message));
        setLoading(false);
        return null;
      }

      setProfile(newProfile);
      setLoading(false);
      return newProfile;
    },
    [user]
  );

  const updateProfile = useCallback(
    async (data: UpdateTables<'profiles'>): Promise<Profile | null> => {
      if (!user) {
        setError(new Error('Must be logged in to update profile'));
        return null;
      }

      setLoading(true);
      setError(null);

      const { data: updatedProfile, error: updateError } = await supabase
        .from('profiles')
        .update(data)
        .eq('user_id', user.id)
        .select()
        .single();

      if (updateError) {
        setError(new Error(updateError.message));
        setLoading(false);
        return null;
      }

      setProfile(updatedProfile);
      setLoading(false);
      return updatedProfile;
    },
    [user]
  );

  const deleteProfile = useCallback(async (): Promise<boolean> => {
    if (!user) {
      setError(new Error('Must be logged in to delete profile'));
      return false;
    }

    setLoading(true);
    setError(null);

    const { error: deleteError } = await supabase
      .from('profiles')
      .delete()
      .eq('user_id', user.id);

    if (deleteError) {
      setError(new Error(deleteError.message));
      setLoading(false);
      return false;
    }

    setProfile(null);
    setLoading(false);
    return true;
  }, [user]);

  const refreshProfile = useCallback(async () => {
    await fetchProfile();
  }, [fetchProfile]);

  return {
    profile,
    loading,
    error,
    createProfile,
    updateProfile,
    deleteProfile,
    refreshProfile,
  };
}
