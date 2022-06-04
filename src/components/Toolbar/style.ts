import { createStyles } from "@mantine/core";

const styles = createStyles((theme) => ({
  mainSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    position: "absolute",
    zIndex: 200,
    padding: `${theme.spacing.sm} ${theme.spacing.xs}`,
    borderRadius: theme.spacing.sm,
    boxShadow: theme.shadows.sm,
    backgroundColor: theme.primaryColor,
  },
  initial: {
    color: theme.colors.gray,
    justifySelf: "center",
  },
  headerContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  openButton: {
    backgroundColor:
      theme.colorScheme === "light" ? theme.colors.orange : theme.primaryColor,
    "&:hover": {
      backgroundColor:
        theme.colorScheme === "light"
          ? theme.colors.orange
          : theme.primaryColor,
    },
  },
  closeButton: {
    backgroundColor: theme.primaryColor,
    "&:hover": {
      backgroundColor: theme.primaryColor,
    },
  },
  actionButton: {
    boxShadow: theme.shadows.xs,
    padding: "0.3rem",
    position: "absolute",
    zIndex: 100,
    borderRadius: theme.defaultRadius,
  },

  showActionButton: {
    left: "9.18rem",
    transform: "scale(1.2)",
  },
  hideActionButton: {
    left: "0rem",
    transform: "scale(0.4)",
    backgroundColor: "transparent",
  },
}));

export default styles;
