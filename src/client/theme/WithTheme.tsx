import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';

import { isClient } from 'src/shared/constants/env';

import { useTheme } from './useTheme';
import { Flex } from '../styledSystem';
import { GlobalStyle } from './globalStyle';

const WithTheme: FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme, toggleTheme } = useTheme();
  const currentTheme: string = (isClient && window.localStorage.getItem('theme')) || 'light';

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Flex color='primary' bg='black' borderRadius={2} border='none' p={1} m={2} justifyContent='space-around'>
          <span>Books Shells</span>
          <select onChange={e => toggleTheme(e.target.value)} defaultValue={currentTheme}>
            <option value={'light'}>Light</option>
            <option value={'dark'}>Dark</option>
          </select>
        </Flex>
        {children}
      </ThemeProvider>
    </>
  );
};

export default WithTheme;
