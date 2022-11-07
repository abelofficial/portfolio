import { createStyles } from "@mantine/core";

const styles = createStyles((theme) => ({
  icon: {
    margin: theme.spacing.xs,
  },
  active: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.primaryColor[0]
        : theme.colors.primaryColor[0],
  },
  largeIcon: {
    fontSize: "2rem",
  },
  normal: {
    color: theme.colors.primaryColor[0],
  },
  invert: {
    color: theme.colorScheme === "dark" ? theme.black : theme.white,
  },
  invertActive: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },
}));

export default styles;
