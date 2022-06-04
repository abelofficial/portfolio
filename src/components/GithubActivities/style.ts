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
  slideAnim: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    borderRadius: theme.defaultRadius,
  },

  frameworkContainer: {
    marginRight: theme.spacing.sm,
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  animWaveLeft: {
    animation: `$slideLeft 1500ms ease 100ms infinite alternate`,
  },
  animWaveRight: {
    animation: `$slideRight 1500ms ease 100ms infinite alternate`,
  },
}));

export default styles;
