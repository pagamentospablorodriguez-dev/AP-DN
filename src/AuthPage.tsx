import { useState } from 'react';
import { Flame, ArrowRight, Lock, Mail, Eye, EyeOff } from 'lucide-react';
import { useAuth } from './auth';

export function AuthPage() {
  const { signIn, signUp } = useAuth();
  const [mode, setMode] = useState<'signin' | 'signup'>('signup');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const fn = mode === 'signin' ? signIn : signUp;
    const { error } = await fn(email, password);
    setLoading(false);
    if (error) setError(error);
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-ink-900 px-5 py-10">
      <div className="absolute inset-0 grain" />
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-[120px]" />

      <div className="relative z-10 w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
            <img src="/Bune.png" alt="Bune - The Best!" style={{ borderRadius: '10px' }} />
          </div>
          <h1 className="font-serif text-3xl font-bold text-cream">
            Aura <span className="gold-text">Predadora</span>
          </h1>
          <p className="mt-2 text-sm text-cream/50">
            {mode === 'signup' ? 'Crie sua conta e ative sua aura' : 'Acesse sua área de membro'}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-white/10 bg-ink-800/80 p-7 backdrop-blur"
        >
          <div className="space-y-4">
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-cream/50">
                E-mail
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-cream/30" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  className="w-full rounded-lg border border-white/10 bg-ink-900 py-3 pl-10 pr-4 text-sm text-cream placeholder-cream/30 outline-none transition-colors focus:border-gold/50"
                />
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-cream/50">
                Senha
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-cream/30" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  minLength={6}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="mínimo 6 caracteres"
                  className="w-full rounded-lg border border-white/10 bg-ink-900 py-3 pl-10 pr-10 text-sm text-cream placeholder-cream/30 outline-none transition-colors focus:border-gold/50"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-cream/30 hover:text-cream/60"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
          </div>

          {error && (
            <p className="mt-4 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-2.5 text-sm text-red-300">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="group mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-[#e6c178] to-[#c8a35c] px-6 py-4 text-center font-extrabold uppercase tracking-wide text-ink-900 shadow-[0_18px_50px_-12px_rgba(230,193,120,0.55)] transition-transform duration-300 hover:-translate-y-0.5 disabled:opacity-60"
          >
            {loading ? (
              <span className="h-5 w-5 animate-spin rounded-full border-2 border-ink-900/30 border-t-ink-900" />
            ) : (
              <>
                {mode === 'signup' ? 'ATIVAR MINHA AURA AGORA' : 'ENTRAR'}
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </>
            )}
          </button>

          <p className="mt-5 text-center text-sm text-cream/50">
            {mode === 'signup' ? 'Já tem conta?' : 'Ainda não tem conta?'}{' '}
            <button
              type="button"
              onClick={() => {
                setMode(mode === 'signup' ? 'signin' : 'signup');
                setError(null);
              }}
              className="font-semibold text-gold transition-colors hover:text-gold-light"
            >
              {mode === 'signup' ? 'Entrar' : 'Criar conta'}
            </button>
          </p>
        </form>

        <p className="mt-6 text-center text-xs leading-relaxed text-cream/30">
          Ao criar sua conta, você concorda com os Termos de Uso e a Política de Privacidade.
          Seus dados estão seguros e protegidos.
        </p>
      </div>
    </div>
  );
}
