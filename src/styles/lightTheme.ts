import { MantineThemeOverride } from "@mantine/core";

const shadowColor = 255 + "," + 196 + "," + 12;

const theme: MantineThemeOverride = {
  colorScheme: "light",
  primaryColor: ["#ffc40c", "#f9ff0c", "#ffe40c", "#ccb609", "#ccb409"],
  shadows: {
    xs: `0px 3px 3px -2px rgba(${shadowColor},0.2),0px 3px 4px 0px rgba(${shadowColor},0.14),0px 1px 8px 0px rgba(${shadowColor},0.12)`,
    sm: `0px 3px 3px -2px rgba(${shadowColor},0.2),0px 3px 4px 0px rgba(${shadowColor},0.14),0px 1px 8px 0px rgba(${shadowColor},0.12)`,
  },
  colors: {
    backgroundPrimary: ["#FFF", ""],
    backgroundSecondary: ["#FFF", "#F2F2F2"],
    gray: [
      "#eee",
      "#BDBDBD",
      "#9E9E9E",
      "#757575",
      "#616161",
      "#424242",
      "#212121",
    ],
  },
};

export default theme;
