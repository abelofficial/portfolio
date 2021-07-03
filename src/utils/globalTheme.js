import { createMuiTheme } from '@material-ui/core';
import { red, blue } from '@material-ui/core/colors';

const theme = (mode = 'light') =>
  createMuiTheme({
    /** @@type Object */
    palette: {
      type: mode,
      primary: {
        main: red[400]
      },
      secondary: {
        main: blue[400]
      }
    },

    /** @@type Object */
    typography: {
      h1: {
        fontSize: '3.5rem'
      }
    },

    /** @@type Object */
    transitions: {},

    /** @@type Object */
    breakpoints: {},

    /** @@type Object */
    mixins: {},

    /** @@type Object */
    props: {},

    /** @@type Object */
    shape: {},

    /** @@type Object */
    zIndex: {}

    /** @@type Object */
    // shadows: {},
    /** @@type f e() */
    // spacing: {},
  });

export default theme;
