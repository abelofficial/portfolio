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
    margin: "0 auto",
    overflow: "hidden",
    padding: "0.5rem",
    minHeight: "10rem",

    [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
      margin: "0.5rem 3rem",
    },
  },
  pointer: {
    width: 10,
    height: 10,
    borderRadius: "50%",
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[6],
  },
  activePointer: {
    backgroundColor:
      theme.colorScheme === "light"
        ? theme.primaryColor[2]
        : theme.primaryColor[3],
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
