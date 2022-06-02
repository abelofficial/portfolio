import { makeStyles } from "@mui/styles";

const useStyles = (theme) =>
  makeStyles(() => ({
    contactLink: {
      textDecoration: "none",

      padding: theme.spacing(2),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      "&:focus": {
        WebkitTapHighlightColor: "transparent",
      },
    },
    contactContainer: {},
    title: {
      padding: theme.spacing(2),
    },
  }));

export default useStyles;
