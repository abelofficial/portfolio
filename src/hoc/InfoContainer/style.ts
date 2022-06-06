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
    backgroundColor: theme.colorScheme === "light" ? theme.white : theme.black,
    opacity: 0.9,
    borderRadius: theme.defaultRadius,
    boxShadow: theme.shadows.sm,
  },
  container_main: {
    position: "relative",
    zIndex: 200,
    padding: "0.2rem",
    borderRadius: theme.defaultRadius,
  },
}));

export default useStyles;
