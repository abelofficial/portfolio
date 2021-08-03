import { createMuiTheme } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

// Fonts
import {
  balooBhai,
  balooBhaiBold,
  balooBhaiSemiBold,
  balooBhaiExtraBold
} from '@local-utils/globalFonts';
const theme = (darkMode = false) =>
  createMuiTheme({
    overrides: {
      MuiCssBaseline: {
        '@global': {
          '@font-face': [
            balooBhai,
            balooBhaiBold,
            balooBhaiSemiBold,
            balooBhaiExtraBold
          ]
        }
      }
    },
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: darkMode ? '#FFC40C' : '#000000'
      },
      secondary: {
        main: darkMode ? '#000000' : '#FFC40C'
      },
      background: {
        default: darkMode ? 'rgba(0, 0, 0, 1)' : 'rgba(255, 255, 255, 1)',
        paper: darkMode ? '#424242' : '#F2F2F2'
      },

      text: {
        primary: darkMode ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)'
      }
    },

    typography: {
      fontFamily: [
        'BalooBhai',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
      ].join(','),

      h1: {
        fontSize: '4rem',
        fontWeight: 900
      },
      h2: {
        fontSize: '2.5rem',
        fontWeight: 700
      },

      h4: {
        fontSize: '1.5rem',
        fontWeight: 500
      },

      body1: {
        fontSize: '1rem',
        fontWeight: 300
      }
    },

    transitions: {},

    breakpoints: {},

    mixins: {},

    props: {},

    shape: {},

    zIndex: {}

    // shadows: {},
    /** @@type f e() */
    // spacing: {},
  });

export default theme;
