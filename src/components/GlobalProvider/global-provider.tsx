'use client';

import { useEffect } from 'react';

interface GlobaProviderProps {
  children: React.ReactNode;
}

export function GlobaProvider({ children }: GlobaProviderProps): JSX.Element {
  useEffect(() => {
    import('preline');
  }, []);

  return <>{children}</>;
}
