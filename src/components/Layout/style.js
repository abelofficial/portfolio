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
