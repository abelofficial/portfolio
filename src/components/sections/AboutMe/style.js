import { makeStyles } from "@mui/styles";

const useStyles = (theme) =>
  makeStyles(() => ({
    section: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    animSection: {
      position: "relative",
    },

    imageContainer: {
      position: "relative",
      bottom: 0,
      right: 0,
    },
    image: {
      boxShadow: theme.shadows[1],
    },
    info: {
      fontSize: "11px",
      textAlign: "justify",
    },
  }));

export default useStyles;