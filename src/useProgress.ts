import { useCallback, useEffect, useState } from 'react';
import { supabase } from './supabase';
import { useAuth } from './auth';

export type ProgressMap = Record<string, boolean>;

export function useProgress() {
  const { user } = useAuth();
  const [progress, setProgress] = useState<ProgressMap>({});
  const [loading, setLoading] = useState(true);

  const fetchProgress = useCallback(async () => {
    if (!user) return;
    const { data, error } = await supabase
      .from('module_progress')
      .select('module_key, completed')
      .eq('user_id', user.id);

    if (error) return;
    const map: ProgressMap = {};
    for (const row of data ?? []) {
      map[row.module_key] = row.completed;
    }
    setProgress(map);
    setLoading(false);
  }, [user]);

  useEffect(() => {
    fetchProgress();
  }, [fetchProgress]);

  const toggleComplete = useCallback(
    async (moduleKey: string) => {
      if (!user) return;
      const newCompleted = !progress[moduleKey];
      setProgress((prev) => ({ ...prev, [moduleKey]: newCompleted }));

      const { error } = await supabase
        .from('module_progress')
        .upsert(
          {
            user_id: user.id,
            module_key: moduleKey,
            completed: newCompleted,
            completed_at: newCompleted ? new Date().toISOString() : null,
          },
          { onConflict: 'user_id,module_key' }
        );

      if (error) {
        setProgress((prev) => ({ ...prev, [moduleKey]: !newCompleted }));
      }
    },
    [user, progress]
  );

  return { progress, loading, toggleComplete, refetch: fetchProgress };
}
