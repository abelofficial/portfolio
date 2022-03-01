import { makeStyles } from "@mui/styles";

const useStyles = (theme) =>
  makeStyles(() => {
    return {
      logo: {
        alignSelf: "flex-end",
        marginRight: theme.spacing(1),
      },
      accordionSummery: {
        alignSelf: "stretch",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        // backgroundColor: "red",
      },
      smallTitle: {
        width: "95%",
      },

      accordion: {
        backgroundColor: "transparent",
        boxShadow: theme.shadows[0],
        "&:not(:last-child)": {
          borderBottom: 0,
          borderStyle: "none",
        },
        "&:before": {
          display: "none",
          borderStyle: "none",
          borderColor: "transparent",
        },
      },
      sidebarContent: {
        borderStyle: "none",
        padding: 0,
      },

      icon: {
        borderRadius: "50%",
        boxShadow: theme.shadows[1],
        color: theme.palette.primary.dark,
      },
    };
  });

export default useStyles;
