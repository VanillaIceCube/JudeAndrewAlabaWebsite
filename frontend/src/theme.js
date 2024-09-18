import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark', // Dark mode
    primary: {
      main: '#1e1e1e', // Dark gray background
    },
    secondary: {
      main: '#76c893', // Muted green for accents
    },
    background: {
      default: '#121212', // Overall background color
      paper: '#1e1e1e', // Card backgrounds
    },
    text: {
      primary: '#e0e0e0', // Light gray text
      secondary: '#a0a0a0', // Subtle gray for secondary text
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 600,
      fontSize: '2rem',
      color: '#e0e0e0', // White-ish heading color
    },
    body1: {
      fontSize: '1rem',
      color: '#b0b0b0', // Softer body text
    },
    button: {
      textTransform: 'none',
    },
  },
  components: {
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: '#76c893', // Accent underline color for active tab
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: '500',
          color: '#e0e0e0', // Text color for tabs
          '&.Mui-selected': {
            color: '#76c893', // Active tab color
          },
        },
      },
    },
  },
});

export default theme;
