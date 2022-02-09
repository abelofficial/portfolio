import { makeStyles } from "@mui/styles";

const useStyles = (theme) =>
  makeStyles(() => ({
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
      position: "relative",
      width: "100%",
    },
    main: {
      position: "relative",
      width: "100%",
      height: "100vh",
      overflowY: "scroll",
      backgroundColor: theme.palette.background.paper,
    },
    pageContainer: {
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
      },
    },
    sideBar: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      position: "relative",
      padding: theme.spacing(1),
      height: "fit-content",
      backgroundColor: theme.palette.background.default,
      [theme.breakpoints.up("md")]: {
        height: "100vh",
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
