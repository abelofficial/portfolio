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
  }));

export default useStyles;
