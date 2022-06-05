import { createStyles } from "@mantine/core";

const styles = createStyles((theme) => ({
  page: {
    position: "relative",
    height: "100%",
    width: "100vw",
    maxWidth: "100%",
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
    position: "relative",
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
    backgroundColor: theme.colors.gray[1],

    [`@media (min-width: ${theme.breakpoints.md}px)`]: {
      overflowY: "scroll",
      overflowX: "hidden",
      scrollbarWidth: "thin",
      scrollbarColor: `${theme.colors.cyan} ${theme.colors.pink}`,
      flexDirection: "row",
      alignItems: "space-between",
      "&::-webkit-scrollbar": {
        width: "0.5rem",
      },
      "&::-webkit-scrollbar-track": {
        backgroundColor: theme.black,
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: theme.primaryColor,
        borderRadius: "3rem",
        boxShadow: theme.shadows[1],
      },
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
      alignItems: "flex-start",
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
    position: "relative",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    paddingLeft: theme.spacing.xs,
    paddingRight: 0,
    height: "fit-content",
    margin: 0,

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
