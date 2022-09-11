import { createStyles } from "@mantine/core";

const styles = createStyles((theme) => ({
  container: {
    position: "relative",
    zIndex: 100,
  },
  header: {
    position: "absolute",
    zIndex: 200,
    top: "50%",
    width: "100%",
    display: "none",
    [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "nowrap",
    },
  },
  content: {
    position: "relative",
    zIndex: 150,
    overflow: "hidden",
    padding: "0.5rem",
    width: "100%",
    minHeight: "10rem",
  },
  pointer: {
    width: 10,
    height: 10,
    borderRadius: "50%",
  },
  inactivePointer: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.gray[2]
        : theme.colors.gray[3],
  },
  activePointer: {
    backgroundColor: theme.colors.primaryColor[1],
  },
  indicatorContent: {
    display: "flex",
    gap: "0.5rem",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
}));

export default styles;
