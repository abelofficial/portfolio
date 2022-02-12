import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
  },
  historySection: {
    height: "75vh",
    display: "flex",
    alignItems: "center",
  },
  formSection: {
    height: "10vh",
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(1.5),
  },
  textField: {
    width: "100",
  },
  button: {
    padding: theme.spacing(1.5),
  },
  anim: {
    width: "100%",
    height: "100%",
  },
}));

export default useStyles;
