
import { useState, useEffect } from 'react';

function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T | ((val: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === "undefined") return initialValue;
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        window.localStorage.setItem(key, JSON.stringify(storedValue));
      } catch {}
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

export function useColorMode() {
  const [colorMode, setColorMode] = useLocalStorage('color-theme', 'dark');

  useEffect(() => {
    if (typeof window !== "undefined") {
      const root = window.document.documentElement;
      root.classList.remove('light', 'dark');
      root.classList.add(colorMode);
    }
  }, [colorMode]);

  return [colorMode, setColorMode] as const;
}
