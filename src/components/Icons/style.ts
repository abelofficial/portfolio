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
    stroke: theme.white,
    fill: theme.white,
  },
  invertActive: {
    stroke: theme.colorScheme === "dark" ? theme.white : theme.primaryColor[0],
    fill: theme.colorScheme === "dark" ? theme.white : theme.primaryColor[0],
  },
}));

export default styles;
