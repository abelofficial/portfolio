import { createStyles } from "@mantine/core";

const styles = createStyles((theme) => ({
  icon: {
    margin: theme.spacing.xs,
    ":hover": {
      transform: "scale(1.2)",
    },
  },
  active: {
    stroke: theme.colors.primaryColor[5],
    fill: theme.colors.primaryColor[0],
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
    stroke:
      theme.colorScheme === "dark"
        ? theme.colors.gray[5]
        : theme.colors.primaryColor[1],
    fill:
      theme.colorScheme === "dark"
        ? theme.colors.gray[2]
        : theme.colors.primaryColor[1],
  },
}));

export default styles;
