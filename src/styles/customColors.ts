import { Tuple } from "@mantine/core";

type CustomColors = "backgroundPrimary" | "backgroundSecondary";

declare module "@mantine/core" {
  export interface MantineThemeColorsOverride {
    colors: Record<CustomColors, Tuple<string, 2>>;
  }
}
