import { makeStyles } from "@mui/styles";

const useStyles = (theme) =>
  makeStyles(() => ({
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
      transition: `${theme.transitions.create(["left", "top", "transform"], {
        duration: theme.transitions.duration.standard,
        easing: theme.transitions.easing.easeInOut,
      })}`,
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

      [theme.breakpoints.up("md")]: {
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
      scrollbarColor: `${theme.palette.primary.light} ${theme.palette.background.paper}`,

      backgroundColor: theme.palette.background.paper,

      "&::-webkit-scrollbar": {
        width: "0.5rem",
      },
      "&::-webkit-scrollbar-track": {
        backgroundColor: theme.palette.background.paper,
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: theme.palette.primary.light,
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

      [theme.breakpoints.up("md")]: {
        height: "100vh",
        alignItems: "center",
      },
    },

    sideBar_bg: {
      width: "100%",
      height: "100%",
      position: "absolute",
      opacity: theme.palette.type === "dark" ? 0.2 : 0.1,
      filter: "blur(1px)",
      backgroundImage:
        theme.palette.type === "dark"
          ? 'url("/images/blueprints_dark.svg")'
          : 'url("/images/blueprints.svg")',
      backgroundRepeat: "no-repeat, repeat",
      backgroundSize: "cover",
    },

    sideBar_main: {
      display: "flex",
      flexDirection: "column",
      padding: theme.spacing(2),
      height: "fit-content",
      backgroundColor: theme.palette.background.default,
      [theme.breakpoints.up("md")]: {
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

export default useStyles;
