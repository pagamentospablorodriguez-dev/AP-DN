import { useCallback, useEffect, useState } from 'react';
import { supabase } from './supabase';
import { useAuth } from './auth';

export type UnlockMap = Record<string, boolean>;

export function useOrderBumps() {
  const { user } = useAuth();
  const [unlocks, setUnlocks] = useState<UnlockMap>({});
  const [loading, setLoading] = useState(true);

  const fetchUnlocks = useCallback(async () => {
    if (!user) {
      setUnlocks({});
      setLoading(false);
      return;
    }
    const { data, error } = await supabase
      .from('order_bump_unlocks')
      .select('bump_key')
      .eq('user_id', user.id);

    if (error) {
      setLoading(false);
      return;
    }
    const map: UnlockMap = {};
    for (const row of data ?? []) {
      map[row.bump_key] = true;
    }
    setUnlocks(map);
    setLoading(false);
  }, [user]);

  useEffect(() => {
    fetchUnlocks();
  }, [fetchUnlocks]);

  const unlockBump = useCallback(
    async (bumpKey: string): Promise<{ error: string | null }> => {
      if (!user) return { error: 'Você precisa estar logado para liberar o conteúdo.' };
      const { error } = await supabase
        .from('order_bump_unlocks')
        .upsert(
          { user_id: user.id, bump_key: bumpKey },
          { onConflict: 'user_id,bump_key' }
        );
      if (error) {
        return { error: error.message };
      }
      setUnlocks((prev) => ({ ...prev, [bumpKey]: true }));
      return { error: null };
    },
    [user]
  );

  return { unlocks, loading, unlockBump, refetch: fetchUnlocks };
}
