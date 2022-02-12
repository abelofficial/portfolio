import { createTheme } from "@mui/material/styles";

// // Fonts
// import {
//   balooBhai,
//   balooBhaiBold,
//   balooBhaiSemiBold,
//   balooBhaiExtraBold,
// } from "@local-utils/globalFonts";

const shadowColor = 255 + "," + 196 + "," + 12;

const theme = createTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "*": {
          scrollbarColor: "#424242 #F2F2F2",
          scrollbarWidth: "thin",
          scrollbarGutter: "revert",
        },
        "::-webkit-scrollbar": {
          width: "0.5rem",
        },
        "::-webkit-scrollbar-track": {
          backgroundColor: "#F2F2F2",
        },
        "::-webkit-scrollbar-thumb": {
          backgroundColor: "#424242",
          borderRadius: "1rem",
          boxShadow:
            "0px 2px 1px -1px rgba(255,196,12,0.2),0px 1px 1px 0px rgba(255,196,12,0.14),0px 1px 3px 0px rgba(255,196,12,0.12)",
        },
      },
    },
  },
  palette: {
    type: "light",
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#FFC40C",
    },
    background: {
      default: "rgba(255, 255, 255, 1)",
      paper: "#F2F2F2",
    },

    text: {
      primary: "rgba(0, 0, 0, 1)",
    },
    divider: "#FFE40C",
  },

  shadows: [
    "none",
    `0px 4px 5px -2px rgba(${shadowColor},0.2),0px 7px 10px 1px rgba(${shadowColor},0.14),0px 2px 16px 1px rgba(${shadowColor},0.12)`,
    `0px 5px 5px -3px rgba(${shadowColor},0.2),0px 8px 10px 1px rgba(${shadowColor},0.14),0px 3px 14px 2px rgba(${shadowColor},0.12)`,
    `0px 5px 6px -3px rgba(${shadowColor},0.2),0px 9px 12px 1px rgba(${shadowColor},0.14),0px 3px 16px 2px rgba(${shadowColor},0.12)`,
    `0px 6px 6px -3px rgba(${shadowColor},0.2),0px 10px 14px 1px rgba(${shadowColor},0.14),0px 4px 18px 3px rgba(${shadowColor},0.12)`,
    `0px 6px 7px -4px rgba(${shadowColor},0.2),0px 11px 15px 1px rgba(${shadowColor},0.14),0px 4px 20px 3px rgba(${shadowColor},0.12)`,
    `0px 7px 8px -4px rgba(${shadowColor},0.2),0px 12px 17px 2px rgba(${shadowColor},0.14),0px 5px 22px 4px rgba(${shadowColor},0.12)`,
    `0px 7px 8px -4px rgba(${shadowColor},0.2),0px 13px 19px 2px rgba(${shadowColor},0.14),0px 5px 24px 4px rgba(${shadowColor},0.12)`,
    `0px 7px 9px -4px rgba(${shadowColor},0.2),0px 14px 21px 2px rgba(${shadowColor},0.14),0px 5px 26px 4px rgba(${shadowColor},0.12)`,
    `0px 8px 9px -5px rgba(${shadowColor},0.2),0px 15px 22px 2px rgba(${shadowColor},0.14),0px 6px 28px 5px rgba(${shadowColor},0.12)`,
    `0px 8px 10px -5px rgba(${shadowColor},0.2),0px 16px 24px 2px rgba(${shadowColor},0.14),0px 6px 30px 5px rgba(${shadowColor},0.12)`,
    `0px 8px 11px -5px rgba(${shadowColor},0.2),0px 17px 26px 2px rgba(${shadowColor},0.14),0px 6px 32px 5px rgba(${shadowColor},0.12)`,
    `0px 9px 11px -5px rgba(${shadowColor},0.2),0px 18px 28px 2px rgba(${shadowColor},0.14),0px 7px 34px 6px rgba(${shadowColor},0.12)`,
    `0px 9px 12px -6px rgba(${shadowColor},0.2),0px 19px 29px 2px rgba(${shadowColor},0.14),0px 7px 36px 6px rgba(${shadowColor},0.12)`,
    `0px 10px 13px -6px rgba(${shadowColor},0.2),0px 20px 31px 3px rgba(${shadowColor},0.14),0px 8px 38px 7px rgba(${shadowColor},0.12)`,
    `0px 10px 13px -6px rgba(${shadowColor},0.2),0px 21px 33px 3px rgba(${shadowColor},0.14),0px 8px 40px 7px rgba(${shadowColor},0.12)`,
    `0px 10px 14px -6px rgba(${shadowColor},0.2),0px 22px 35px 3px rgba(${shadowColor},0.14),0px 8px 42px 7px rgba(${shadowColor},0.12)`,
    `0px 11px 14px -7px rgba(${shadowColor},0.2),0px 23px 36px 3px rgba(${shadowColor},0.14),0px 9px 44px 8px rgba(${shadowColor},0.12)`,
    `0px 11px 15px -7px rgba(${shadowColor},0.2),0px 24px 38px 3px rgba(${shadowColor},0.14),0px 9px 46px 8px rgba(${shadowColor},0.12)`,
  ],
});

export default theme;
