import { createStyles } from "@mantine/core";

const styles = createStyles((theme) => ({
  page: {
    position: "relative",
    height: "100%",
    width: "100vw",
    maxWidth: "100%",
    padding: 0,
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
    padding: 0,
    position: "relative",
    width: "100%",
    height: "100vh",
    backgroundColor: theme.colors.backgroundSecondary[2],

    [`@media (min-width: ${theme.breakpoints.md}px)`]: {
      overflowY: "scroll",
      overflowX: "hidden",
      scrollbarWidth: "thin",
      flexDirection: "row",
      alignItems: "space-between",
      "&::-webkit-scrollbar": {
        width: "0.2rem",
      },
      "&::-webkit-scrollbar-track": {
        backgroundColor: theme.colors.backgroundSecondary[1],
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: theme.colors.primaryColor[0],
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
      width: "60vw",
    },
  },

  sideBar_bg: {
    width: "100%",
    height: "100%",
    position: "absolute",
    opacity: theme.colorScheme === "dark" ? 0.2 : 0.1,
    filter: "blur(px)",

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
    padding: theme.spacing.xs,
    height: "fit-content",
    paddingTop: theme.spacing.lg,

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
