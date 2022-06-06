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
  divider: {
    marginTop: theme.spacing.sm,
    marginBottom: theme.spacing.sm,
    opacity: 0.4,
    filter: "blur(0.1rem)",
  },
}));

export default styles;
