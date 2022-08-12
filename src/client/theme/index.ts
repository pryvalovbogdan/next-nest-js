import { IDefaultTheme, IPalette, IThemeColors } from './types';

export const breakpoints = [320, 1050, 1400].map(n => `${n}px`);

// Border radius
export const radii = {
  0: '2px',
  1: '4px',
  2: '5px',
  3: '8px',
  4: '10px',
  round: '50%',
};

// Padding/margin
export const spaces = {
  maxWidth: '100%',
  maxHeight: '100%',
  0: '2px',
  1: '4px',
  2: '5px',
  3: '6px',
  4: '8px',
  5: '10px',
  6: '12px',
  7: '15px',
  8: '14px',
  9: '16px',
  10: '18px',
  11: '20px',
};

// Font size
export const fontSizes = {
  '7xl': '100px',
  '6xl': '80px',
  '5xl': '64px',
  '4xl': '44px',
  '3xl': '30px',
  '2xl': '24px',
  xl: '20px',
  lg: '18px',
  md: '16px',
  sm: '12px',
  xs: '10px',
};

// Font weight
export const fontWeights = {
  light: 300,
  normal: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
};

const blue = '#2D94F3';
const coral = '#40ACAD';
const orange = '#FF9000';
const green = '#2FC265';
const red = '#D1193E';
const white = '#ffffff';
const lightWhite = '#f1f1f1';
const contrastWhite = '#f2f2f2';
const whiteWarm = '#f0f0f0';
const warmWhite = '#ffdddd';
const gray = '#777777';
const lightGray = '#b1b1b1';
const black = 'rgba(16, 16, 16, 0.5)';
const cleanBlack = '#000';
const transparent = 'transparent';
const yellow = '#D6AA54';

const paletteLight: IPalette = {
  blue,
  coral,
  orange,
  green,
  red,
  warmWhite,
  white,
  lightWhite,
  contrastWhite,
  lightGray,
  cleanBlack,
  gray,
  black,
  transparent,
  yellow,
  whiteWarm,
};

const paletteDark: IPalette = {
  blue,
  coral,
  orange: coral,
  green,
  red,
  warmWhite,
  white,
  lightWhite,
  contrastWhite,
  lightGray,
  cleanBlack,
  gray,
  black: blue,
  transparent,
  yellow,
  whiteWarm,
};

export const colors: IThemeColors = {
  light: {
    ...paletteLight,
  },
  dark: {
    ...paletteDark,
  },
};

export const defaultTheme: IDefaultTheme = {
  spaces,
  fontSizes,
  fontWeights,
  radii,
  breakpoints,
};
