import { useCallback, useEffect, useState } from 'react';
import { supabase, type QuizResult, type InsertTables } from '../lib/supabase';
import { useAuth } from './useAuth';

interface UseQuizResultsReturn {
  results: QuizResult[];
  loading: boolean;
  error: Error | null;
  saveResult: (data: Omit<InsertTables<'quiz_results'>, 'user_id'>) => Promise<QuizResult | null>;
  deleteResult: (id: string) => Promise<boolean>;
  refreshResults: () => Promise<void>;
}

export function useQuizResults(): UseQuizResultsReturn {
  const { user } = useAuth();
  const [results, setResults] = useState<QuizResult[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchResults = useCallback(async () => {
    if (!user) {
      setResults([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    const { data, error: fetchError } = await supabase
      .from('quiz_results')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });

    if (fetchError) {
      setError(new Error(fetchError.message));
    }

    setResults(data ?? []);
    setLoading(false);
  }, [user]);

  useEffect(() => {
    fetchResults();
  }, [fetchResults]);

  const saveResult = useCallback(
    async (data: Omit<InsertTables<'quiz_results'>, 'user_id'>): Promise<QuizResult | null> => {
      if (!user) {
        setError(new Error('Must be logged in to save quiz results'));
        return null;
      }

      const { data: newResult, error: saveError } = await supabase
        .from('quiz_results')
        .insert({ ...data, user_id: user.id })
        .select()
        .single();

      if (saveError) {
        setError(new Error(saveError.message));
        return null;
      }

      setResults((prev) => [newResult, ...prev]);
      return newResult;
    },
    [user]
  );

  const deleteResult = useCallback(
    async (id: string): Promise<boolean> => {
      if (!user) {
        setError(new Error('Must be logged in to delete quiz results'));
        return false;
      }

      const { error: deleteError } = await supabase
        .from('quiz_results')
        .delete()
        .eq('id', id)
        .eq('user_id', user.id);

      if (deleteError) {
        setError(new Error(deleteError.message));
        return false;
      }

      setResults((prev) => prev.filter((r) => r.id !== id));
      return true;
    },
    [user]
  );

  const refreshResults = useCallback(async () => {
    await fetchResults();
  }, [fetchResults]);

  return {
    results,
    loading,
    error,
    saveResult,
    deleteResult,
    refreshResults,
  };
}
