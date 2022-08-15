import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: ['Overpass Mono', ' monospace', 'sans-serif'].join(','),
  },
  colors: {
    primary: {
      main: '#070D0D',
      light: '#0D1014',
    },
    secondary: {
      main: '#f9f9f9',
    },
    neutral: {
      main: '#B30049',
    },
  },
});

declare module '@mui/material/styles' {
  interface Theme {
    colors: {
      primary: {
        main: string;
        dark?: string;
        light?: string;
      };
      secondary?: {
        main?: string;
        light?: string;
      };
      neutral?: {
        main?: string;
      };
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    colors?: {
      primary?: {
        main?: string;
        dark?: string;
        light?: string;
      };
      secondary?: {
        main?: string;
        light?: string;
      };
      neutral?: {
        main?: string;
      };
    };
  }
}

export default theme;
