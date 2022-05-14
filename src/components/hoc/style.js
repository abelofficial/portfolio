import { makeStyles } from "@mui/styles";

const useStyles = (theme) =>
  makeStyles(() => ({
    sectionContainer: {
      position: "relative",
      width: "100%",
      backgroundColor: "transparent",
      borderRadius: "1rem",
      height: "fit-content",
      marginBottom: theme.spacing(2),
      boxShadow: theme.shadows[1],
    },
    sectionContainer_bg: {
      position: "absolute",
      zIndex: -100,
      width: "100%",
      height: "100%",
      backgroundColor:
        theme.palette.type === "light"
          ? theme.palette.common.white
          : theme.palette.secondary.main,
      opacity: 0.9,
      borderRadius: "1rem",
    },

    sectionContainer_main: {
      position: "relative",
      zIndex: 200,
    },
    infoContainer: {
      marginTop: theme.spacing(1.5),
      marginBottom: theme.spacing(1.5),
      padding: theme.spacing(0.75),
      backgroundColor:
        theme.palette.type === "light"
          ? theme.palette.grey[200]
          : theme.palette.grey[800],
      borderRadius: "0.5rem",
      height: "fit-content",
      boxShadow: theme.shadows[0],
    },

    pageContainer: {
      padding: theme.spacing(1),
      width: "100vw",
      maxWidth: "100%",
      minHeight: "90vh",
      margin: "auto",

      [theme.breakpoints.up("md")]: {
        paddingLeft: theme.spacing(16),
      },

      zIndex: 400,
      filter: "blur(0)",
      transition: `${theme.transitions.create(["filter", "padding"], {
        duration: theme.transitions.duration.standard,
        easing: theme.transitions.easing.easeInOut,
      })}`,
    },

    blur: {
      filter: "blur(0.2rem)",
    },
    withShadow: {
      transition: `${theme.transitions.create(["background-color"], {
        duration: theme.transitions.duration.complex,
        easing: theme.transitions.easing.easeInOut,
      })}`,
      boxShadow: theme.shadows[1],
    },
  }));

export default useStyles;
