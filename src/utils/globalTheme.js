import { createMuiTheme } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

// Fonts
import {
  balooBhai,
  balooBhaiBold,
  balooBhaiSemiBold,
  balooBhaiExtraBold
} from '@local-utils/globalFonts';
const theme = (mode = 'light') =>
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
      type: 'light',
      primary: {
        main: grey[900]
      },
      secondary: {
        main: grey[200]
      },
      text: {
        primary: 'rgba(0, 0, 0, 0.87)',
        secondary: 'rgba(255, 255, 255, 1)'
      },
      action: {
        active: '#FFC40C'
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

      h4: {
        fontSize: '1.5rem',
        fontWeight: 500
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
