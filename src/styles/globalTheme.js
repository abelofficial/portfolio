import { createTheme } from "@mui/material/styles";

// // Fonts
// import {
//   balooBhai,
//   balooBhaiBold,
//   balooBhaiSemiBold,
//   balooBhaiExtraBold,
// } from "@local-utils/globalFonts";

const theme = (paletteTheme) =>
  createTheme(paletteTheme, {
    typography: {
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

    shape: {
      borderRadius: "1rem",
    },
  });

export default theme;
