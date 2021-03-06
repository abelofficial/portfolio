import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  container: {
    position: "relative",
    width: "100%",
    backgroundColor: "transparent",
    borderRadius: "1rem",
    height: "fit-content",
    marginBottom: theme.spacing.sm,
  },
  container_bg: {
    position: "absolute",
    zIndex: -100,
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
    opacity: 0.9,
    borderRadius: theme.defaultRadius,
  },
  container_main: {
    position: "relative",
    zIndex: 200,
  },
}));

export default useStyles;
