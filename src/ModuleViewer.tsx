import { Check, ArrowLeft, Clock, Target, ListChecks, Lightbulb, Sunrise, Move, Eye, Flame, VolumeX, Zap, Moon, Sparkles, FileText, Download, Headphones } from 'lucide-react';
import type { Module, Bonus } from './content';
import type { OrderBump } from './orderBumps';
import type { Upsell } from './upsells';
import { AudioPlayer } from './AudioPlayer';

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

type Props = {
  item: Module | Bonus | OrderBump | Upsell;
  isBonus?: boolean;
  isOrderBump?: boolean;
  isUpsell?: boolean;
  completed: boolean;
  onToggleComplete: () => void;
  onBack: () => void;
};

export function ModuleViewer({ item, isBonus, isOrderBump, isUpsell, completed, onToggleComplete, onBack }: Props) {
  const Icon = ICONS[item.icon] ?? Flame;
  const showAudio = isBonus && (item as Bonus).audio;
  const upsellItem = isUpsell ? (item as Upsell) : null;
  const upsellAudios = upsellItem?.audios ?? [];
  const upsellPdfs = upsellItem?.pdfs ?? [];

  const objectiveLabel = isOrderBump
    ? 'Objetivo deste conteúdo'
    : isUpsell
      ? 'Objetivo deste conteúdo'
      : 'Objetivo deste módulo';

  return (
    <div className="min-h-screen bg-ink-900 pb-20">
      <div className="sticky top-0 z-30 border-b border-white/10 bg-ink-900/90 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-sm text-cream/60 transition-colors hover:text-gold"
          >
            <ArrowLeft className="h-4 w-4" /> Voltar
          </button>
          <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-gold/70">
            {(isOrderBump || isUpsell) && <Sparkles className="h-3 w-3" />}
            {item.number}
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-5 py-10">
        <div className="mb-8 flex items-start gap-5">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-gold/30 bg-gold/10">
            <Icon className="h-8 w-8 text-gold" />
          </div>
          <div>
            <h1 className="font-serif text-2xl font-bold leading-tight text-cream sm:text-3xl">
              {item.title}
            </h1>
            <p className="mt-2 text-sm leading-relaxed text-cream/60">{item.subtitle}</p>
            <div className="mt-3 flex items-center gap-2 text-xs text-cream/40">
              <Clock className="h-3.5 w-3.5 text-gold" /> {item.duration} de leitura
            </div>
          </div>
        </div>

        <div className="mb-10 rounded-2xl border border-gold/20 bg-gradient-to-br from-ink-800 to-ink-800/50 p-5">
          <div className="flex items-center gap-2">
            <Target className="h-4 w-4 shrink-0 text-gold" />
            <span className="text-xs font-semibold uppercase tracking-widest text-gold/70">
              {objectiveLabel}
            </span>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-cream/80">{item.objective}</p>
        </div>

        <div className="space-y-10">
          {item.lessons.map((lesson, i) => (
            <article key={i}>
              <h2 className="mb-4 font-serif text-xl font-bold text-cream sm:text-2xl">
                {lesson.heading}
              </h2>
              <div className="space-y-4">
                {lesson.body.map((para, j) => (
                  <p key={j} className="text-base leading-relaxed text-cream/75">
                    {para}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="my-10 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

        <div className="rounded-2xl border border-white/10 bg-ink-800 p-6">
          <div className="mb-4 flex items-center gap-2">
            <ListChecks className="h-5 w-5 text-gold" />
            <h3 className="font-serif text-lg font-bold text-cream">{item.exercise.title}</h3>
          </div>
          <ol className="space-y-3">
            {item.exercise.steps.map((step, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed text-cream/70">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-xs font-bold text-gold">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>

        <div className="my-8 rounded-2xl border border-gold/20 bg-gradient-to-br from-gold/5 to-transparent p-6">
          <div className="mb-2 flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-gold" />
            <span className="text-xs font-semibold uppercase tracking-widest text-gold/70">
              Insight-chave
            </span>
          </div>
          <p className="font-serif text-lg italic leading-relaxed text-cream/90">
            {item.takeaway}
          </p>
        </div>

        {showAudio && <AudioPlayer />}

        {isUpsell && upsellAudios.length > 0 && (
          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-2">
              <Headphones className="h-5 w-5 text-gold" />
              <h3 className="font-serif text-lg font-bold text-cream">Áudios</h3>
            </div>
            {upsellAudios.map((audio, i) => (
              <AudioPlayer
                key={i}
                src={audio.src}
                title={audio.title}
                description={audio.description}
              />
            ))}
          </div>
        )}

        {isUpsell && upsellPdfs.length > 0 && (
          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-gold" />
              <h3 className="font-serif text-lg font-bold text-cream">Materiais em PDF</h3>
            </div>
            {upsellPdfs.map((pdf, i) => (
              <a
                key={i}
                href={pdf.src}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-gold/30 bg-gradient-to-br from-ink-800 to-ink-800/30 p-5 transition-all duration-300 hover:border-gold/60"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gold/30 bg-gold/10">
                  <FileText className="h-6 w-6 text-gold" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-serif text-base font-bold leading-tight text-cream">{pdf.title}</p>
                  <p className="mt-0.5 text-xs text-cream/50">Clique para abrir e baixar</p>
                </div>
                <Download className="h-5 w-5 text-gold transition-transform group-hover:translate-y-0.5" />
              </a>
            ))}
          </div>
        )}

        {!isOrderBump && !isUpsell && (
          <div className="mt-10">
            <button
              onClick={onToggleComplete}
              className={`flex w-full items-center justify-center gap-2 rounded-xl px-6 py-4 text-center font-bold uppercase tracking-wide transition-all duration-300 ${
                completed
                  ? 'border border-green-500/40 bg-green-500/10 text-green-400'
                  : 'bg-gradient-to-b from-[#e6c178] to-[#c8a35c] text-ink-900 shadow-[0_18px_50px_-12px_rgba(230,193,120,0.55)] hover:-translate-y-0.5'
              }`}
            >
              <Check className="h-5 w-5" />
              {completed ? 'Módulo concluído' : 'Marcar como concluído'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
