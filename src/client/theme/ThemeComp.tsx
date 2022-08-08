import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { merge, get } from 'lodash';

import { theme } from './index';

// options for different color modes
const modes = [
  'light',
  'dark',
  // more than two modes can follow...
];

// merge the color mode with the base theme
// to create a new theme object
const getTheme = mode =>
  merge({}, theme, {
    colors: get(theme.colors.modes, mode, theme.colors),
  });

export default ({ Component, pageProps }) => {
  // state for changing modes dynamically
  const [mode, setMode] = useState(modes[0]);
  const toggleTheme = () => {
    theme === 'light' ? setMode('dark') : setMode('light');
  };
  const theme = getTheme(mode);

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <button onClick={toggleTheme}>toggleTheme</button>
    </ThemeProvider>
  );
};
