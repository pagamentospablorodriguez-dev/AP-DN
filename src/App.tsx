import { AuthProvider, useAuth } from './auth';
import { AuthPage } from './AuthPage';
import { Dashboard } from './Dashboard';
import { useEffect } from 'react';

function AppInner() {
  const { session, loading } = useAuth();

  // Este useEffect será executado sempre que o valor de 'session' mudar
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth' // Remove 'smooth' se quiser que seja instantâneo
    });
  }, [session]); // <--- O segredo está aqui: observar a mudança da sessão

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-ink-900">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-gold/30 border-t-gold" />
      </div>
    );
  }

  return !session ? <AuthPage /> : <Dashboard />;
}

export default function App() {
  return (
    <AuthProvider>
      <AppInner />
    </AuthProvider>
  );
}
