import { createTheme } from '@mui/material/styles';
//import { darkColors, ColorsInterface, lightColors } from './color';

export const darkColors = {
  danger: '#B30049',
  white: '#f9f9f9',
  black: '#070D0D',
  lightBlack: '#231F20 ',
  yellow: '#fff800',
  darkWhite: '#E1D9D1',
};

export const lightColors = {
  danger: '#B30049',
  black: '#f9f9f9',
  white: '#070D0D',
  lightBlack: '#E1D9D1',
  yellow: '#fff800',
  darkWhite: '#231F20 ',
};
export type ColorsInterface = typeof darkColors;

// 👇️ type Keys = "name" | "age" | "country"
export type ColorType = keyof typeof darkColors;

export const darkTheme = createTheme({
  typography: {
    fontFamily: ['Overpass Mono', ' monospace', 'sans-serif'].join(','),
  },
  colors: darkColors,
});

export const lightTheme = createTheme({
  typography: {
    fontFamily: ['Overpass Mono', ' monospace', 'sans-serif'].join(','),
  },
  colors: lightColors,
});

declare module '@mui/material/styles' {
  interface Theme {
    colors: ColorsInterface;
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    colors?: ColorsInterface;
  }
}
