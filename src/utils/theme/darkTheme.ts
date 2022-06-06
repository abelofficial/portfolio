import { MantineThemeOverride } from "@mantine/core";

const shadowColor = 207 + "," + 102 + "," + 121;

const theme: MantineThemeOverride = {
  colorScheme: "dark",
  primaryColor: ["#ff7d95", "#CF6679", "#ac7d83", "#aa6d7d"],
  black: "back",
  shadows: {
    xs: `0px 2px 1px -1px rgba(${shadowColor},0.2),0px 1px 1px 0px rgba(${shadowColor},0.14),0px 1px 3px 0px rgba(${shadowColor},0.12)`,
    sm: `0px 3px 3px -2px rgba(${shadowColor},0.2),0px 3px 4px 0px rgba(${shadowColor},0.14),0px 1px 8px 0px rgba(${shadowColor},0.12)`,
  },
  colors: {
    backgroundPrimary: ["#000", ""],
    backgroundSecondary: ["#0f0f0f", "#262626"],
  },
};

export default theme;
