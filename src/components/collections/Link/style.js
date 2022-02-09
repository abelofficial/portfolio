import { makeStyles } from "@mui/styles";

const useStyles = (theme) =>
  makeStyles(() => ({
    link: {
      "& a": {
        textDecoration: "none",
        margin: theme.spacing(1),
        color: theme.palette.text.primary,
      },
    },
    active: {
      color: theme.palette.text.secondary,
    },
  }));

export default useStyles;
