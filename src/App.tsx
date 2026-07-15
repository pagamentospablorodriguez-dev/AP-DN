import { AuthProvider, useAuth } from './auth';
import { AuthPage } from './AuthPage';
import { Dashboard } from './Dashboard';
import { useEffect } from 'react';

// 1. Defina o componente de Scroll
function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
}

function AppInner() {
  const { session, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-ink-900">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-gold/30 border-t-gold" />
      </div>
    );
  }

  // 2. Agora o componente retorna o conteúdo corretamente
  return (
    <>
      <ScrollToTop />
      {!session ? <AuthPage /> : <Dashboard />}
    </>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppInner />
    </AuthProvider>
  );
}
