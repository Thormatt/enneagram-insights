import { useEffect, useState, useCallback } from 'react';
import type { User, Session, AuthError } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';

interface AuthState {
  user: User | null;
  session: Session | null;
  loading: boolean;
  error: AuthError | null;
}

interface UseAuthReturn extends AuthState {
  signInWithEmail: (email: string, password: string) => Promise<{ error: AuthError | null }>;
  signUpWithEmail: (email: string, password: string) => Promise<{ error: AuthError | null }>;
  signInWithGoogle: () => Promise<{ error: AuthError | null }>;
  signInWithApple: () => Promise<{ error: AuthError | null }>;
  signOut: () => Promise<{ error: AuthError | null }>;
  resetPassword: (email: string) => Promise<{ error: AuthError | null }>;
  updatePassword: (newPassword: string) => Promise<{ error: AuthError | null }>;
}

export function useAuth(): UseAuthReturn {
  const [state, setState] = useState<AuthState>({
    user: null,
    session: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session }, error }) => {
      setState({
        user: session?.user ?? null,
        session,
        loading: false,
        error: error as AuthError | null,
      });
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setState((prev) => ({
        ...prev,
        user: session?.user ?? null,
        session,
        loading: false,
      }));
    });

    return () => subscription.unsubscribe();
  }, []);

  const signInWithEmail = useCallback(async (email: string, password: string) => {
    setState((prev) => ({ ...prev, loading: true, error: null }));
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setState((prev) => ({ ...prev, loading: false, error }));
    return { error };
  }, []);

  const signUpWithEmail = useCallback(async (email: string, password: string) => {
    setState((prev) => ({ ...prev, loading: true, error: null }));
    const { error } = await supabase.auth.signUp({ email, password });
    setState((prev) => ({ ...prev, loading: false, error }));
    return { error };
  }, []);

  const signInWithGoogle = useCallback(async () => {
    setState((prev) => ({ ...prev, loading: true, error: null }));
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
    setState((prev) => ({ ...prev, loading: false, error }));
    return { error };
  }, []);

  const signInWithApple = useCallback(async () => {
    setState((prev) => ({ ...prev, loading: true, error: null }));
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'apple',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
    setState((prev) => ({ ...prev, loading: false, error }));
    return { error };
  }, []);

  const signOut = useCallback(async () => {
    setState((prev) => ({ ...prev, loading: true, error: null }));
    const { error } = await supabase.auth.signOut();
    setState((prev) => ({ ...prev, loading: false, error }));
    return { error };
  }, []);

  const resetPassword = useCallback(async (email: string) => {
    setState((prev) => ({ ...prev, loading: true, error: null }));
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/reset-password`,
    });
    setState((prev) => ({ ...prev, loading: false, error }));
    return { error };
  }, []);

  const updatePassword = useCallback(async (newPassword: string) => {
    setState((prev) => ({ ...prev, loading: true, error: null }));
    const { error } = await supabase.auth.updateUser({ password: newPassword });
    setState((prev) => ({ ...prev, loading: false, error }));
    return { error };
  }, []);

  return {
    ...state,
    signInWithEmail,
    signUpWithEmail,
    signInWithGoogle,
    signInWithApple,
    signOut,
    resetPassword,
    updatePassword,
  };
}
