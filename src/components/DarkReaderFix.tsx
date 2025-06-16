'use client';

import { useEffect } from 'react';

export default function DarkReaderFix() {
  useEffect(() => {
    // Supprime les attributs Dark Reader pour éviter l'erreur d'hydratation
    const html = document.documentElement;
    html.removeAttribute('data-darkreader-mode');
    html.removeAttribute('data-darkreader-scheme');
    html.removeAttribute('data-darkreader-proxy-injected');
  }, []);

  return null;
} 