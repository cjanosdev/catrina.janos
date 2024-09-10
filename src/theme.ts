// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#b898e2'
    },
    secondary: {
      main: '#f2e3fb', // Example secondary color
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
  components: {
    // Customize component styles here
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
        },
      },
    },
    MuiIconButton : {
        styleOverrides : {
            root: {
                "&:hover" : {
                    backgroundColor: '#eee6f8',
                }
            },
        },
    },
  },
});

export default theme;