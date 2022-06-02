import { makeStyles } from "@mui/styles";

const useStyles = (theme) =>
  makeStyles(() => ({
    container: {
      backgroundColor: "green",
    },
    actionButton: {
      textTransform: "lowercase",
      borderRadius: "1rem ",
      color: "red ",
    },
  }));

export default useStyles;
