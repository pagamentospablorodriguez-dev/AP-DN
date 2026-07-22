import { useCallback, useEffect, useState } from 'react';
import { supabase } from './supabase';
import { useAuth } from './auth';

export type UpsellUnlockMap = Record<string, boolean>;

export function useUpsells() {
  const { user } = useAuth();
  const [unlocks, setUnlocks] = useState<UpsellUnlockMap>({});
  const [loading, setLoading] = useState(true);

  const fetchUnlocks = useCallback(async () => {
    if (!user) {
      setUnlocks({});
      setLoading(false);
      return;
    }
    const { data, error } = await supabase
      .from('upsell_unlocks')
      .select('upsell_key')
      .eq('user_id', user.id);

    if (error) {
      setLoading(false);
      return;
    }
    const map: UpsellUnlockMap = {};
    for (const row of data ?? []) {
      map[row.upsell_key] = true;
    }
    setUnlocks(map);
    setLoading(false);
  }, [user]);

  useEffect(() => {
    fetchUnlocks();
  }, [fetchUnlocks]);

  const unlockUpsell = useCallback(
    async (upsellKey: string): Promise<{ error: string | null }> => {
      if (!user) return { error: 'Você precisa estar logado para liberar o conteúdo.' };
      const { error } = await supabase
        .from('upsell_unlocks')
        .upsert(
          { user_id: user.id, upsell_key: upsellKey },
          { onConflict: 'user_id,upsell_key' }
        );
      if (error) {
        return { error: error.message };
      }
      setUnlocks((prev) => ({ ...prev, [upsellKey]: true }));
      return { error: null };
    },
    [user]
  );

  return { unlocks, loading, unlockUpsell, refetch: fetchUnlocks };
}
