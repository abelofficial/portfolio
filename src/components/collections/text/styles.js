import { makeStyles } from "@mui/styles";

const useStyles = (theme) =>
  makeStyles(() => ({
    text: {
      color:
        theme.palette.type === "light"
          ? theme.palette.primary.main
          : theme.palette.text.primary,

      transition: `${theme.transitions.create(["color"], {
        duration: theme.transitions.duration.complex,
        easing: theme.transitions.easing.easeInOut,
      })}`,
    },

    strongText: {
      fontWeight: 300,
      letterSpacing: "0.1em",
    },

    paragraph: {
      fontSize: "0.8rem",
      fontWeight: 300,
      letterSpacing: "0.2em",
      textAlign: "left",
    },

    highlightText: {
      display: "inline",
      color:
        theme.palette.type === "light"
          ? theme.palette.secondary.dark
          : theme.palette.primary.dark,
    },
  }));

export default useStyles;