export interface IPalette {
  [key: string]: string | string[];
}

export interface IDefaultTheme {
  fontSizes: {
    [key: string]: string;
  };
  fontWeights: {
    [key: string]: number;
  };
  radii: {
    [key: string]: string;
  };
  spaces: {
    [key: string]: string;
  };
  breakpoints: string[];
  colors?: IThemeColors;
}

export interface IThemeColors {
  [key: string]: { light?: IPalette; dark?: IPalette };
}

export type IAppTheme = IDefaultTheme;

export interface IUseTheme {
  theme: IAppTheme;
  toggleTheme: (mode: string) => void;
}
