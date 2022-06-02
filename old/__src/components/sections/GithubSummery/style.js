import { makeStyles } from "@mui/styles";

const useStyles = (theme) =>
  makeStyles((theme) => ({
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    accountInfoText: {
      marginRight: theme.spacing(2),
    },
    avatar: {
      borderRadius: "50%",
      // boxShadow: theme.shadows[1],
    },
    infoTextContainer: {
      width: "fit-content",
    },
  }));

export default useStyles;
