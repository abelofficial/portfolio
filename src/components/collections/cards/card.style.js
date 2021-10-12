import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  accountInfoText: {
    marginRight: theme.spacing(2),
  },
  avatar: {
    marginRight: theme.spacing(1),
    boxShadow: theme.shadows[3],
  },
  infoTextContainer: {
    width: "fit-content",
  },
}));

export default useStyles;
