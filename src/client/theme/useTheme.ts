import { useEffect, useState, useCallback } from 'react';

import { isClient } from 'src/shared/constants/env';

import { defaultTheme, colors } from './index';
import { IUseTheme } from './types';

export const useTheme = (): IUseTheme => {
  const [theme, setTheme] = useState<string>('light');

  const setMode = useCallback((mode: string): void => {
    isClient && window.localStorage.setItem('theme', mode);

    setTheme(mode);
  }, []);

  const toggleTheme = useCallback(
    (mode: string): void => {
      setMode(mode);
    },
    [setMode],
  );

  useEffect((): void => {
    const localTheme = isClient && window.localStorage.getItem('theme');

    localTheme ? setTheme(localTheme) : setMode('light');
  }, []);

  return { theme: { ...defaultTheme, colors: colors[theme] }, toggleTheme };
};
