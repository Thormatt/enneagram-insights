import { useCallback, useState } from 'react';
import { supabase, type SharedProfile, type Profile } from '../lib/supabase';
import { useAuth } from './useAuth';

interface UseShareReturn {
  loading: boolean;
  error: Error | null;
  createShareLink: (profile: Profile) => Promise<string | null>;
  getSharedProfile: (slug: string) => Promise<SharedProfile | null>;
  deactivateShareLink: (id: string) => Promise<boolean>;
  getUserShareLinks: () => Promise<SharedProfile[]>;
}

function generateSlug(): string {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < 8; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export function useSharing(): UseShareReturn {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const createShareLink = useCallback(
    async (profile: Profile): Promise<string | null> => {
      if (!user) {
        setError(new Error('Must be logged in to create a share link'));
        return null;
      }

      setLoading(true);
      setError(null);

      const slug = generateSlug();

      const { data, error: createError } = await supabase
        .from('shared_profiles')
        .insert({
          user_id: user.id,
          share_slug: slug,
          core_type: profile.core_type,
          wing: profile.wing,
          instinct_stack: profile.instinct_stack,
          tritype: profile.tritype,
          display_name: profile.display_name,
        })
        .select()
        .single();

      if (createError) {
        setError(new Error(createError.message));
        setLoading(false);
        return null;
      }

      setLoading(false);
      return `${window.location.origin}/share/${data.share_slug}`;
    },
    [user]
  );

  const getSharedProfile = useCallback(async (slug: string): Promise<SharedProfile | null> => {
    setLoading(true);
    setError(null);

    const { data, error: fetchError } = await supabase
      .from('shared_profiles')
      .select('*')
      .eq('share_slug', slug)
      .eq('is_active', true)
      .single();

    if (fetchError) {
      setError(new Error(fetchError.message));
      setLoading(false);
      return null;
    }

    // Increment view count
    await supabase.rpc('increment_share_views', { slug });

    setLoading(false);
    return data;
  }, []);

  const deactivateShareLink = useCallback(
    async (id: string): Promise<boolean> => {
      if (!user) {
        setError(new Error('Must be logged in to deactivate share links'));
        return false;
      }

      setLoading(true);
      setError(null);

      const { error: updateError } = await supabase
        .from('shared_profiles')
        .update({ is_active: false })
        .eq('id', id)
        .eq('user_id', user.id);

      if (updateError) {
        setError(new Error(updateError.message));
        setLoading(false);
        return false;
      }

      setLoading(false);
      return true;
    },
    [user]
  );

  const getUserShareLinks = useCallback(async (): Promise<SharedProfile[]> => {
    if (!user) {
      return [];
    }

    setLoading(true);
    setError(null);

    const { data, error: fetchError } = await supabase
      .from('shared_profiles')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });

    if (fetchError) {
      setError(new Error(fetchError.message));
      setLoading(false);
      return [];
    }

    setLoading(false);
    return data ?? [];
  }, [user]);

  return {
    loading,
    error,
    createShareLink,
    getSharedProfile,
    deactivateShareLink,
    getUserShareLinks,
  };
}
