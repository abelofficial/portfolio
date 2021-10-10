import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  sectionContainer: {
    marginTop: theme.spacing(1.5),
    marginBottom: theme.spacing(1.5),
    padding: theme.spacing(0.5),
    backgroundColor: theme.palette.common.white,
    borderRadius: "1rem",
    height: "fit-content",
    boxShadow: theme.shadows[1],
  },
  siteContainer: {
    height: "100vh",
    minHeight: "55rem",
    backgroundColor: theme.palette.background.default,
    transition: `${theme.transitions.create(["background-color"], {
      duration: theme.transitions.duration.complex,
      easing: theme.transitions.easing.easeInOut,
    })}`,
  },
  pageContainer: {
    padding: theme.spacing(3),
    width: "100vw",
    maxWidth: "100%",
    minHeight: "100vh",
    margin: "auto",

    [theme.breakpoints.up("md")]: {
      paddingLeft: theme.spacing(20),
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
