import { createTheme } from '@mui/material/styles';
import { colors, ColorsInterface } from './thems/color';
const theme = createTheme({
  typography: {
    fontFamily: ['Overpass Mono', ' monospace', 'sans-serif'].join(','),
  },
  colors,
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

export default theme;
