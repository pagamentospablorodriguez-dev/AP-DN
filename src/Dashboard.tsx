//Bune


import { useEffect, useState } from 'react';
import {
  Flame,
  Check,
  Lock,
  ArrowRight,
  Clock,
  Star,
  Trophy,
  Gift,
  Sunrise,
  Move,
  Eye,
  VolumeX,
  Zap,
  Moon,
  LogOut,
  Sparkles,
} from 'lucide-react';
import { MODULES, BONUSES, type Module, type Bonus } from './content';
import { ORDER_BUMPS, type OrderBump } from './orderBumps';
import { UPSELLS, type Upsell } from './upsells';
import { useProgress } from './useProgress';
import { useAuth } from './auth';
import { useOrderBumps } from './useOrderBumps';
import { useUpsells } from './useUpsells';
import { ModuleViewer } from './ModuleViewer';

const ICONS: Record<string, typeof Sunrise> = {
  sunrise: Sunrise,
  move: Move,
  eye: Eye,
  flame: Flame,
  'volume-x': VolumeX,
  zap: Zap,
  moon: Moon,
  sparkles: Sparkles,
};

type DashboardProps = {
  pendingUnlock?: string | null;
  onUnlockConsumed?: () => void;
};

export function Dashboard({ pendingUnlock, onUnlockConsumed }: DashboardProps) {
  const { progress, toggleComplete } = useProgress();
  const { unlocks: obUnlocks, unlockBump } = useOrderBumps();
  const { unlocks: upsellUnlocks, unlockUpsell } = useUpsells();
  const { user, signOut } = useAuth();

  const [activeItem, setActiveItem] = useState<
    | { item: Module | Bonus; isBonus: boolean }
    | { item: OrderBump; isOrderBump: true }
    | { item: Upsell; isUpsell: true }
    | null
  >(null);

  const [unlockStatus, setUnlockStatus] = useState<{
    key: string;
    success: boolean;
    error?: string;
  } | null>(null);

  // Process pending unlock when user is logged in
  useEffect(() => {
    if (pendingUnlock && user) {
      const isOrderBump = pendingUnlock.startsWith('ob');
      const isUpsell = pendingUnlock.startsWith('u') || pendingUnlock.startsWith('d');
      if (isOrderBump) {
        unlockBump(pendingUnlock).then(({ error }) => {
          if (error) {
            setUnlockStatus({ key: pendingUnlock, success: false, error });
          } else {
            setUnlockStatus({ key: pendingUnlock, success: true });
            onUnlockConsumed?.();
          }
          window.scrollTo(0, 0);
        });
      } else if (isUpsell) {
        unlockUpsell(pendingUnlock).then(({ error }) => {
          if (error) {
            setUnlockStatus({ key: pendingUnlock, success: false, error });
          } else {
            setUnlockStatus({ key: pendingUnlock, success: true });
            onUnlockConsumed?.();
          }
          window.scrollTo(0, 0);
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pendingUnlock, user]);

  // Scroll to top whenever activeItem changes (open/close module)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeItem]);

  if (activeItem) {
    if ('isOrderBump' in activeItem) {
      return (
        <ModuleViewer
          item={activeItem.item}
          isOrderBump
          completed={false}
          onToggleComplete={() => {}}
          onBack={() => setActiveItem(null)}
        />
      );
    }
    if ('isUpsell' in activeItem) {
      return (
        <ModuleViewer
          item={activeItem.item}
          isUpsell
          completed={false}
          onToggleComplete={() => {}}
          onBack={() => setActiveItem(null)}
        />
      );
    }
    return (
      <ModuleViewer
        item={activeItem.item}
        isBonus={activeItem.isBonus}
        completed={!!progress[activeItem.item.key]}
        onToggleComplete={() => toggleComplete(activeItem.item.key)}
        onBack={() => setActiveItem(null)}
      />
    );
  }

  const allItems = [
    ...MODULES.map((m) => ({ item: m, isBonus: false })),
    ...BONUSES.map((b) => ({ item: b, isBonus: true })),
  ];
  const completedCount = allItems.filter(({ item }) => progress[item.key]).length;
  const totalCount = allItems.length;
  const pct = Math.round((completedCount / totalCount) * 100);

  const firstName = user?.email?.split('@')[0] ?? 'guerreiro';

  // Only show upsells that are unlocked
  const visibleUpsells = UPSELLS.filter((u) => upsellUnlocks[u.key]);

  // Find label for unlock status banner
  const findUnlockLabel = (key: string): string => {
    const ob = ORDER_BUMPS.find((b) => b.key === key);
    if (ob) return ob.title;
    const up = UPSELLS.find((u) => u.key === key);
    if (up) return up.title;
    return '';
  };

  return (
    <div className="min-h-screen bg-ink-900">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-ink-900/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl">
              <img src="/Bune.png" alt="Bune - The Best!" style={{ borderRadius: '10px' }} />
            </div>
            <div>
              <p className="font-serif text-lg font-bold leading-none text-cream">
                O Código da <span className="gold-text">Aura Predadora</span>
              </p>
              <p className="mt-0.5 text-xs text-cream/40">Área de Membros</p>
            </div>
          </div>
          <button
            onClick={signOut}
            className="flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-xs font-semibold text-cream/60 transition-colors hover:border-gold/30 hover:text-gold"
          >
            <LogOut className="h-3.5 w-3.5" /> Sair
          </button>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-5 py-10">
        {/* Unlock notification banner */}
        {unlockStatus && (
          <div
            className={`mb-8 rounded-2xl border p-5 ${
              unlockStatus.success
                ? 'border-green-500/30 bg-green-500/10'
                : 'border-red-500/30 bg-red-500/10'
            }`}
          >
            <div className="flex items-start gap-3">
              {unlockStatus.success ? (
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-green-400" />
              ) : (
                <Lock className="mt-0.5 h-5 w-5 shrink-0 text-red-400" />
              )}
              <div>
                <p
                  className={`font-semibold ${unlockStatus.success ? 'text-green-300' : 'text-red-300'}`}
                >
                  {unlockStatus.success
                    ? 'Conteúdo exclusivo liberado!'
                    : 'Não foi possível liberar o conteúdo'}
                </p>
                <p
                  className={`mt-1 text-sm leading-relaxed ${
                    unlockStatus.success ? 'text-green-200/70' : 'text-red-200/70'
                  }`}
                >
                  {unlockStatus.success
                    ? `"${findUnlockLabel(unlockStatus.key)}" agora está disponível na sua área abaixo. Role a página para acessar.`
                    : unlockStatus.error}
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="mb-10">
          <h1 className="font-serif text-3xl font-bold text-cream sm:text-4xl">
            Bem-vindo, <span className="gold-text">{firstName}</span>.
          </h1>
          <p className="mt-3 text-base leading-relaxed text-cream/60">
            Sua jornada começa agora. Cada módulo é um passo para ativar a aura que já existe dentro de você.
            Siga a ordem — cada um constrói sobre o anterior. Não pule etapas.
          </p>
        </div>

        <div className="mb-10 rounded-2xl border border-gold/20 bg-gradient-to-br from-ink-800 to-ink-800/50 p-6">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-gold" />
              <span className="text-sm font-semibold text-cream">Seu progresso</span>
            </div>
            <span className="text-sm font-bold text-gold">
              {completedCount} / {totalCount} concluídos
            </span>
          </div>
          <div className="h-3 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#e6c178] to-[#c8a35c] transition-all duration-500"
              style={{ width: `${pct}%` }}
            />
          </div>
          <p className="mt-2 text-xs text-cream/40">
            {pct === 100
              ? 'Você completou todo o protocolo. Sua aura está ativa. Mantenha a prática.'
              : pct < 50
                ? 'Você está no começo. O Módulo 1 é a base — não pule.'
                : 'Você está no caminho certo. Continue.'}
          </p>
        </div>

        <div className="mb-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
          <span className="font-serif text-sm italic text-gold/70">Protocolo Principal</span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {MODULES.map((m) => {
            const Icon = ICONS[m.icon] ?? Flame;
            const isDone = !!progress[m.key];
            return (
              <button
                key={m.key}
                onClick={() => setActiveItem({ item: m, isBonus: false })}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-ink-800 p-6 text-left transition-all duration-300 hover:border-gold/40 hover:bg-ink-800/80"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/20 bg-gold/5">
                      <Icon className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-widest text-gold/50">
                        Módulo {m.number}
                      </span>
                      <h3 className="mt-1 font-serif text-lg font-bold leading-tight text-cream">
                        {m.title}
                      </h3>
                    </div>
                  </div>
                  {isDone ? (
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-green-500/20 text-green-400">
                      <Check className="h-4 w-4" />
                    </div>
                  ) : (
                    <div className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 text-cream/30">
                      <Lock className="h-3.5 w-3.5" />
                    </div>
                  )}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-cream/55">{m.subtitle}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-xs text-cream/40">
                    <Clock className="h-3 w-3" /> {m.duration}
                  </span>
                  <span className="flex items-center gap-1 text-xs font-semibold text-gold transition-transform group-hover:translate-x-1">
                    {isDone ? 'Revisar' : 'Acessar'} <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-12 mb-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
          <span className="font-serif text-sm italic text-gold/70">Bônus Exclusivos</span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {BONUSES.map((b) => {
            const Icon = ICONS[b.icon] ?? Flame;
            const isDone = !!progress[b.key];
            return (
              <button
                key={b.key}
                onClick={() => setActiveItem({ item: b, isBonus: true })}
                className="group relative overflow-hidden rounded-2xl border border-gold/20 bg-gradient-to-br from-ink-800 to-ink-800/30 p-6 text-left transition-all duration-300 hover:border-gold/50"
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gold/5 blur-2xl" />
                <div className="relative flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/30 bg-gold/10">
                      <Icon className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-gold/60">
                        <Gift className="h-3 w-3" /> {b.number}
                      </span>
                      <h3 className="mt-1 font-serif text-lg font-bold leading-tight text-cream">
                        {b.title}
                      </h3>
                    </div>
                  </div>
                  {isDone ? (
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-green-500/20 text-green-400">
                      <Check className="h-4 w-4" />
                    </div>
                  ) : null}
                </div>
                <p className="relative mt-3 text-sm leading-relaxed text-cream/55">{b.subtitle}</p>
                <div className="relative mt-4 flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-xs text-cream/40">
                    <Clock className="h-3 w-3" /> {b.duration}
                  </span>
                  <span className="flex items-center gap-1 text-xs font-semibold text-gold transition-transform group-hover:translate-x-1">
                    {isDone ? 'Revisar' : 'Acessar'} <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Order Bumps Section (below bonuses) */}
        {ORDER_BUMPS.length > 0 && (
          <>
            <div className="mt-12 mb-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
              <span className="flex items-center gap-1.5 font-serif text-sm italic text-gold/70">
                <Sparkles className="h-3.5 w-3.5" /> Conteúdos Extras
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {ORDER_BUMPS.map((b) => {
                const Icon = ICONS[b.icon] ?? Flame;
                const isUnlocked = !!obUnlocks[b.key];
                return (
                  <div
                    key={b.key}
                    className={`group relative overflow-hidden rounded-2xl border p-6 transition-all duration-300 ${
                      isUnlocked
                        ? 'cursor-pointer border-gold/40 bg-gradient-to-br from-ink-800 to-ink-800/30 hover:border-gold/60'
                        : 'cursor-pointer border-white/10 bg-ink-800/50 hover:border-gold/30'
                    }`}
                    onClick={() =>
                      isUnlocked
                        ? setActiveItem({ item: b, isOrderBump: true })
                        : window.open(b.checkoutUrl, '_blank', 'noopener,noreferrer')
                    }
                  >
                    <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gold/5 blur-2xl" />
                    <div className="relative flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div
                          className={`flex h-12 w-12 items-center justify-center rounded-xl border ${
                            isUnlocked
                              ? 'border-gold/30 bg-gold/10'
                              : 'border-white/10 bg-white/5'
                          }`}
                        >
                          {isUnlocked ? (
                            <Icon className="h-6 w-6 text-gold" />
                          ) : (
                            <Lock className="h-5 w-5 text-cream/30" />
                          )}
                        </div>
                        <div>
                          <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-gold/60">
                            <Sparkles className="h-3 w-3" /> {b.number}
                          </span>
                          <h3 className="mt-1 font-serif text-lg font-bold leading-tight text-cream">
                            {b.title}
                          </h3>
                        </div>
                      </div>
                      {isUnlocked && (
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-green-500/20 text-green-400">
                          <Check className="h-4 w-4" />
                        </div>
                      )}
                    </div>
                    <p className="relative mt-3 text-sm leading-relaxed text-cream/55">
                      {b.subtitle}
                    </p>
                    <div className="relative mt-4 flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-xs text-cream/40">
                        <Clock className="h-3 w-3" /> {b.duration}
                      </span>
                      {isUnlocked ? (
                        <span className="flex items-center gap-1 text-xs font-semibold text-gold transition-transform group-hover:translate-x-1">
                          Acessar <ArrowRight className="h-3.5 w-3.5" />
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-xs font-semibold text-gold transition-transform group-hover:translate-x-1">
                          Desbloquear <ArrowRight className="h-3.5 w-3.5" />
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {/* Upsells Section (only shows unlocked items) */}
        {visibleUpsells.length > 0 && (
          <>
            <div className="mt-12 mb-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
              <span className="flex items-center gap-1.5 font-serif text-sm italic text-gold/70">
                <Zap className="h-3.5 w-3.5" /> Arsenal Predador
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {visibleUpsells.map((u) => {
                const Icon = ICONS[u.icon] ?? Flame;
                return (
                  <button
                    key={u.key}
                    onClick={() => setActiveItem({ item: u, isUpsell: true })}
                    className="group relative overflow-hidden rounded-2xl border border-gold/40 bg-gradient-to-br from-ink-800 to-ink-800/30 p-6 text-left transition-all duration-300 hover:border-gold/60"
                  >
                    <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gold/5 blur-2xl" />
                    <div className="relative flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/30 bg-gold/10">
                          <Icon className="h-6 w-6 text-gold" />
                        </div>
                        <div>
                          <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-gold/60">
                            <Zap className="h-3 w-3" /> {u.number}
                          </span>
                          <h3 className="mt-1 font-serif text-lg font-bold leading-tight text-cream">
                            {u.title}
                          </h3>
                        </div>
                      </div>
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-green-500/20 text-green-400">
                        <Check className="h-4 w-4" />
                      </div>
                    </div>
                    <p className="relative mt-3 text-sm leading-relaxed text-cream/55">
                      {u.subtitle}
                    </p>
                    <div className="relative mt-4 flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-xs text-cream/40">
                        <Clock className="h-3 w-3" /> {u.duration}
                      </span>
                      <span className="flex items-center gap-1 text-xs font-semibold text-gold transition-transform group-hover:translate-x-1">
                        Acessar <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </>
        )}

        <div className="mt-14 rounded-2xl border border-white/10 bg-ink-800/50 p-6 text-center">
          <div className="mb-3 flex justify-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-gold text-gold" />
            ))}
          </div>
          <p className="font-serif text-lg italic text-cream/80">
            "A aura não é algo que você ganha. É algo que sempre esteve aí — esperando você ligar."
          </p>
          <p className="mt-2 text-xs uppercase tracking-widest text-gold/50">— Filosofia do Método</p>
        </div>
      </div>
    </div>
  );
}
