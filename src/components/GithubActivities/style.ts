import { createStyles } from "@mantine/core";

const styles = createStyles((theme) => ({
  "@keyframes slideLeft": {
    from: {
      transform: "translateX(-10%)",
    },
    to: {
      transform: "translateX(10%)",
    },
  },
  "@keyframes slideRight": {
    from: {
      transform: "translateX(10%)",
    },
    to: {
      transform: "translateX(-10%)",
    },
  },
  container: {
    padding: theme.spacing.xs,
  },
  section: {
    padding: theme.spacing.xs,
  },

  slideAnim: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    borderRadius: theme.defaultRadius,
  },
}));

export default styles;
