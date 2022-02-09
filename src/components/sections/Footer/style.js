import { makeStyles } from "@mui/styles";

const useStyles = (theme) =>
  makeStyles(() => ({
    container: {
      width: "100%",
      position: "absolute",
      bottom: 0,
      textAlign: "center",
      backgroundColor: "transparent",
    },
    smallText: {
      fontSize: "0.7rem",
      color:
        theme.palette.type === "light"
          ? theme.palette.primary.main
          : theme.palette.text.primary,
    },
  }));

export default useStyles;
