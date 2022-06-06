import { createStyles } from "@mantine/core";

const styles = createStyles((theme) => ({
  icon: {
    margin: theme.spacing.xs,
  },
  active: {
    stroke: theme.primaryColor[0],
    fill: theme.primaryColor[0],
  },
  largeIcon: {
    fontSize: "2rem",
  },
  normal: {
    stroke: theme.colorScheme === "dark" ? theme.white : theme.black,
    fill: theme.colorScheme === "dark" ? theme.white : theme.black,
  },
  invert: {
    stroke: theme.colorScheme === "dark" ? theme.white : theme.black,
    fill: theme.colorScheme === "dark" ? theme.white : theme.black,
  },
  invertActive: {
    stroke: theme.colorScheme === "dark" ? theme.black : theme.white,
    fill: theme.colorScheme === "dark" ? theme.black : theme.white,
  },
}));

export default styles;
