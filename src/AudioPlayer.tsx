import { useEffect, useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

export function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTime = () => {
      setProgress(audio.currentTime);
      setDuration(audio.duration || 0);
    };
    const onEnd = () => setPlaying(false);

    audio.addEventListener('timeupdate', onTime);
    audio.addEventListener('loadedmetadata', onTime);
    audio.addEventListener('ended', onEnd);
    return () => {
      audio.removeEventListener('timeupdate', onTime);
      audio.removeEventListener('loadedmetadata', onTime);
      audio.removeEventListener('ended', onEnd);
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play();
      setPlaying(true);
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !audio.muted;
    setMuted(audio.muted);
  };

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    audio.currentTime = pct * duration;
    setProgress(audio.currentTime);
  };

  const fmt = (s: number) => {
    if (!isFinite(s)) return '0:00';
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${String(sec).padStart(2, '0')}`;
  };

  return (
    <div className="rounded-2xl border border-gold/30 bg-ink-900/80 p-6">
      <audio ref={audioRef} loop preload="auto">
        <source
          src="/Bune.MP3"
          type="audio/mpeg"
        />
      </audio>

      <div className="flex items-center gap-4">
        <button
          onClick={toggle}
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-[#e6c178] to-[#c8a35c] text-ink-900 shadow-lg transition-transform hover:scale-105"
        >
          {playing ? <Pause className="h-6 w-6" /> : <Play className="ml-0.5 h-6 w-6" />}
        </button>

        <div className="min-w-0 flex-1">
          <div className="mb-1 flex items-center justify-between text-xs text-cream/50">
            <span>Áudio de Ativação Noturna</span>
            <span>
              {fmt(progress)} / {fmt(duration)}
            </span>
          </div>
          <div
            onClick={seek}
            className="group relative h-2 cursor-pointer rounded-full bg-white/10"
          >
            <div
              className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-[#e6c178] to-[#c8a35c]"
              style={{ width: `${duration ? (progress / duration) * 100 : 0}%` }}
            />
          </div>
        </div>

        <button
          onClick={toggleMute}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-cream/60 transition-colors hover:text-gold"
        >
          {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </button>
      </div>

      <p className="mt-4 text-xs leading-relaxed text-cream/40">
        Deite-se de costas, feche os olhos e pressione play. Respire junto com o áudio.
        Se adormecer, melhor — o efeito atua no subconsciente.
      </p>
    </div>
  );
}
