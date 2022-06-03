import { createStyles } from "@mantine/core";

const styles = createStyles((theme) => ({
  page: {
    position: "relative",
    height: "100%",
    width: "100vw",
    // maxWidth: "100%",
  },
  toolbar: {
    position: "fixed",
    zIndex: 500,
    left: "1rem",
    height: "75%",
    minHeight: "50rem",
  },
  showToolbar: {
    left: "1rem",
    top: "2rem",
    transform: "scale(1)",
  },
  hideToolbar: {
    left: "-7.2rem",
    top: "-2rem",
    transform: "scale(0.8)",
  },

  container: {
    // position: "relative",
    width: "100%",
    display: "flex",
    alignItems: "stretch",
    flexDirection: "column-reverse",

    [`@media (min-width: ${theme.breakpoints.md}px)`]: {
      flexDirection: "row",
      alignItems: "space-between",
    },
  },
  main: {
    position: "relative",
    width: "100%",
    height: "100vh",

    overflowY: "scroll",
    overflowX: "hidden",
    scrollbarWidth: "thin",
    scrollbarColor: `${theme.colors.cyan} ${theme.colors.pink}`,

    backgroundColor: theme.white,

    "&::-webkit-scrollbar": {
      width: "0.5rem",
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: theme.colors.red,
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: theme.colors.green,
      borderRadius: "3rem",
      boxShadow: theme.shadows[1],
    },
  },
  sideBar: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    height: "fit-content",

    [`@media (min-width: ${theme.breakpoints.md}px)`]: {
      height: "100vh",
      alignItems: "center",
    },
  },

  sideBar_bg: {
    width: "100%",
    height: "100%",
    position: "absolute",
    opacity: theme.colorScheme === "dark" ? 0.2 : 0.1,
    filter: "blur(1px)",
    backgroundImage:
      theme.colorScheme === "dark"
        ? 'url("/images/blueprints_dark.svg")'
        : 'url("/images/blueprints.svg")',
    backgroundRepeat: "no-repeat, repeat",
    backgroundSize: "cover",
  },

  sideBar_main: {
    display: "flex",
    flexDirection: "column",
    padding: "1rem",
    height: "fit-content",
    backgroundColor: theme.white,

    [`@media (min-width: ${theme.breakpoints.md}px)`]: {
      height: "100vh",
      alignItems: "center",
    },
  },
  logo: {
    alignSelf: "flex-end",
  },
  footer: {
    width: "fit-content",
    position: "absolute",
    bottom: 0,
  },
}));

export default styles;
