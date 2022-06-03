import { MantineThemeOverride } from "@mantine/core";

const shadowColor = 255 + "," + 196 + "," + 12;

const theme: MantineThemeOverride = {
  colorScheme: "light",
  primaryColor: "#FFC40C",
  shadows: {
    xs: `0px 2px 1px -1px rgba(${shadowColor},0.2),0px 1px 1px 0px rgba(${shadowColor},0.14),0px 1px 3px 0px rgba(${shadowColor},0.12)`,
    sm: `0px 3px 3px -2px rgba(${shadowColor},0.2),0px 3px 4px 0px rgba(${shadowColor},0.14),0px 1px 8px 0px rgba(${shadowColor},0.12)`,
  },
};

export default theme;
