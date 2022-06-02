import { makeStyles } from "@mui/styles";

const useStyles = (theme) =>
  makeStyles(() => ({
    actionButton: {
      textTransform: "lowercase",
      borderRadius: "1rem",
      color: "red",
      margin: theme.spacing(3),
    },
  }));

export default useStyles;
