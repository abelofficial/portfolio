import { createStyles } from "@mantine/core";

const styles = createStyles((theme) => ({
  logo: {
    alignSelf: "flex-end",
    marginRight: theme.spacing.sm,
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
    boxShadow: theme.shadows.xs,
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
    color: theme.primaryColor[0],
  },
}));

export default styles;
