import { makeStyles } from "@mui/styles";

const useStyles = (theme) =>
  makeStyles(() => ({
    "@keyframes slideLeft": {
      from: {
        transform: "translateX(-10%)",
      },
      to: {
        transform: "translateX(10%)",
      },
    },
    "@keyframes slideRight": {
      from: {
        transform: "translateX(10%)",
      },
      to: {
        transform: "translateX(-10%)",
      },
    },
    container: {
      padding: theme.spacing(3),
    },
    section: {
      padding: theme.spacing(1),
    },
    divider: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      opacity: 0.4,
      filter: "blur(0.1rem)",
    },
    slideAnim: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",

      borderRadius: theme.shape.borderRadius,
    },

    frameworkContainer: {
      marginRight: theme.spacing(2),
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    animWaveLeft: {
      animation: `$slideLeft 1500ms ${theme.transitions.easing.easeInOut} 100ms infinite alternate`,
    },
    animWaveRight: {
      animation: `$slideRight 1500ms ${theme.transitions.easing.easeInOut} 100ms infinite alternate`,
    },
  }));

export default useStyles;
