import { makeStyles } from "@mui/styles";

const useStyles = (theme) =>
  makeStyles(() => ({
    contactLink: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: theme.spacing(2),
    },
    title: {
      padding: theme.spacing(2),
    },
  }));

export default useStyles;
