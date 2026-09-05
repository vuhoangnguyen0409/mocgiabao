'use client';

import { useEffect } from 'react';

export default function RevealHandler() {
  useEffect(() => {
    // Load and initialize reveal script after hydration
    if (window.initializeReveal) {
      window.initializeReveal();
      console.log('[RevealHandler] Initialized reveal');
    }
  }, []);

  return null;
}
