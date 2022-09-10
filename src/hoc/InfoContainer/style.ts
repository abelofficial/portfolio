import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  container: {
    position: "relative",
    width: "100%",
    backgroundColor: "transparent",
    borderRadius: theme.defaultRadius,
    marginTop: theme.spacing.sm,
    marginBottom: theme.spacing.md,
    height: "fit-content",
  },
  container_bg: {
    position: "absolute",
    zIndex: -100,
    width: "100%",
    height: "100%",
    backgroundColor: theme.colors.backgroundPrimary,
    opacity: 0.9,
    borderRadius: theme.defaultRadius,
    border: "0.02em solid",
    borderColor:
      theme.colorScheme === "dark"
        ? theme.colors.gray[4]
        : theme.colors.gray[1],
    // boxShadow: theme.shadows.xs,
  },
  container_main: {
    backdropFilter: "saturate(180%) blur(3px)",
    position: "relative",
    zIndex: 200,
    borderRadius: theme.defaultRadius,
    padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
  },
}));

export default useStyles;
