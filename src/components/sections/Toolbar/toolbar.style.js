import { makeStyles } from "@mui/styles";

const useStyles = (theme) =>
  makeStyles(() => ({
    mainSection: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-around",
      position: "absolute",
      zIndex: 200,
      padding: `${theme.spacing(4)} ${theme.spacing(2)}`,
      borderRadius: theme.spacing(3),
      boxShadow: theme.shadows[3],
      backgroundColor: theme.palette.primary.main,
      transition: `${theme.transitions.create(["background-color"], {
        duration: theme.transitions.duration.complex,
        easing: theme.transitions.easing.easeInOut,
      })}`,
    },
    initial: {
      color: theme.palette.primary.contrastText,
      justifySelf: "center",
    },
    headerContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    openButton: {
      backgroundColor:
        theme.palette.type === "light"
          ? theme.palette.secondary.main
          : theme.palette.primary.main,
      "&:hover": {
        backgroundColor:
          theme.palette.type === "light"
            ? theme.palette.secondary.main
            : theme.palette.primary.main,
      },
    },
    closeButton: {
      backgroundColor: theme.palette.primary.main,
      "&:hover": {
        backgroundColor: theme.palette.primary.main,
      },
    },
    actionButton: {
      boxShadow: theme.shadows[4],
      padding: "0.3rem",
      position: "absolute",
      zIndex: 100,
      borderRadius: theme.shape.borderRadius,
      transition: `${theme.transitions.create(["background-color", "left"], {
        duration: theme.transitions.duration.standard,
      })}`,
    },

    showActionButton: {
      left: "9.18rem",
      transform: "scale(1.2)",
    },
    hideActionButton: {
      left: "0rem",
      transform: "scale(0.4)",
      backgroundColor: "transparent",
    },
  }));

export default useStyles;
