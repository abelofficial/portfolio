import { createMuiTheme } from "@material-ui/core";

// Fonts
import {
  balooBhai,
  balooBhaiBold,
  balooBhaiSemiBold,
  balooBhaiExtraBold,
} from "@local-utils/globalFonts";
const theme = (darkMode = false) =>
  createMuiTheme({
    overrides: {
      MuiCssBaseline: {
        "@global": {
          "*": {
            scrollbarColor: `${darkMode ? "#FFC40C" : "#424242"} ${
              darkMode ? "#424242" : "#F2F2F2"
            }`,
            scrollbarWidth: "thin",
            scrollbarGutter: "revert",
          },
          "::-webkit-scrollbar": {
            width: "0.5rem",
          },
          "::-webkit-scrollbar-track": {
            backgroundColor: darkMode ? "#424242" : "#F2F2F2",
          },
          "::-webkit-scrollbar-thumb": {
            backgroundColor: darkMode ? "#FFC40C" : "#424242",
            borderRadius: "1rem",
            boxShadow:
              "0px 2px 1px -1px rgba(255,196,12,0.2),0px 1px 1px 0px rgba(255,196,12,0.14),0px 1px 3px 0px rgba(255,196,12,0.12)",
          },

          "@font-face": [
            balooBhai,
            balooBhaiBold,
            balooBhaiSemiBold,
            balooBhaiExtraBold,
          ],
        },
      },
    },
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        main: darkMode ? "#FFC40C" : "#000000",
      },
      secondary: {
        main: darkMode ? "#000000" : "#FFC40C",
      },
      background: {
        default: darkMode ? "rgba(0, 0, 0, 1)" : "rgba(255, 255, 255, 1)",
        paper: darkMode ? "#424242" : "#F2F2F2",
      },

      text: {
        primary: darkMode ? "rgba(255, 255, 255, 1)" : "rgba(0, 0, 0, 1)",
      },
      divider: "#FFE40C",
    },

    typography: {
      fontFamily: [
        "BalooBhai",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),

      h1: {
        fontSize: "1.5rem",
        fontWeight: 900,
      },
      h2: {
        fontSize: "1.4rem",
        fontWeight: 700,
      },
      h3: {
        fontSize: "1.3rem",
        fontWeight: 700,
      },

      h4: {
        fontSize: "1.2rem",
        fontWeight: 500,
      },

      subtitle1: {
        fontSize: "1.1rem",
        fontWeight: 500,
      },

      subtitle2: {
        fontSize: "1rem",
        fontWeight: 500,
      },

      body1: {
        fontSize: "0.9rem",
        fontWeight: 300,
      },
      body2: {
        fontSize: "0.9rem",
        fontWeight: 300,
      },
    },

    transitions: {
      duration: {
        complex: 875,
      },
    },

    breakpoints: {},

    mixins: {},

    props: {},

    shape: {
      borderRadius: "1rem",
    },

    zIndex: {},

    shadows: [
      "none",
      "0px 2px 1px -1px rgba(255,196,12,0.2),0px 1px 1px 0px rgba(255,196,12,0.14),0px 1px 3px 0px rgba(255,196,12,0.12)",
      "0px 3px 5px -1px rgba(255,196,12,0.2),0px 5px 8px 0px rgba(255,196,12,0.14),0px 1px 14px 0px rgba(255,196,12,0.12)",
      "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
      "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
    ],
    // shadows: {},
    /** @@type f e() */
    // spacing: {},
  });

export default theme;
