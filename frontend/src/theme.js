import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark', 
    primary: {
      main: '#1e1e1e',
    },
    secondary: {
      main: '#76c893',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#e0e0e0',
      secondary: '#a0a0a0',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 600,
      fontSize: '2rem',
      color: '#e0e0e0',
    },
    body1: {
      fontSize: '1rem',
      color: '#b0b0b0',
    },
    button: {
      textTransform: 'none',
    },
  },
  components: {
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: '#76c893',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: '500',
          color: '#e0e0e0',
          minHeight: '36px',
          padding: '12px 16px',
          '&.Mui-selected': {
            color: '#76c893',
          },
        },
      },
    },
  },
});

export default theme;