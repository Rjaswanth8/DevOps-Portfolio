import { useCallback, useEffect, useState } from 'react';

const getInitial = () => {
  const attr = document.documentElement.getAttribute('data-theme');
  if (attr === 'light' || attr === 'dark') return attr;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export default function useTheme() {
  const [theme, setTheme] = useState(getInitial);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggle = useCallback(() => {
    setTheme((current) => {
      const next = current === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem('jr-theme', next); } catch { /* storage unavailable */ }
      return next;
    });
  }, []);

  return { theme, toggle };
}
