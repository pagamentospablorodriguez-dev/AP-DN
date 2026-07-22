//Bune


import { AuthProvider, useAuth } from './auth';
import { AuthPage } from './AuthPage';
import { Dashboard } from './Dashboard';
import { useEffect, useState } from 'react';

const STORAGE_KEY = 'aura_pending_unlock';

const VALID_UNLOCK_KEYS = ['ob1', 'ob2', 'u1', 'd1', 'u2', 'd2', 'u3', 'd3'];

function getUnlockFromURL(): string | null {
  const params = new URLSearchParams(window.location.search);
  const unlock = params.get('unlock');
  if (unlock && VALID_UNLOCK_KEYS.includes(unlock)) return unlock;
  return null;
}

function AppInner() {
  const { session, loading } = useAuth();
  const [pendingUnlock, setPendingUnlock] = useState<string | null>(null);

  // Detect unlock param on first load and persist it
  useEffect(() => {
    const fromURL = getUnlockFromURL();
    if (fromURL) {
      sessionStorage.setItem(STORAGE_KEY, fromURL);
      setPendingUnlock(fromURL);
      // Clean the URL so it doesn't persist on refresh/share
      const url = new URL(window.location.href);
      url.searchParams.delete('unlock');
      window.history.replaceState({}, '', url.toString());
    } else {
      const stored = sessionStorage.getItem(STORAGE_KEY);
      if (stored) setPendingUnlock(stored);
    }
  }, []);

  // Scroll to top whenever session changes (login/logout)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [session]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-ink-900">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-gold/30 border-t-gold" />
      </div>
    );
  }

  return !session ? (
    <AuthPage pendingUnlock={pendingUnlock} />
  ) : (
    <Dashboard
      pendingUnlock={pendingUnlock}
      onUnlockConsumed={() => {
        sessionStorage.removeItem(STORAGE_KEY);
        setPendingUnlock(null);
      }}
    />
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppInner />
    </AuthProvider>
  );
}
