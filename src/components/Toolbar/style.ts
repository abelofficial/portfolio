import { createStyles } from "@mantine/core";

const styles = createStyles((theme) => ({
  mainSection: {
    height: "50vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    position: "absolute",
    zIndex: 200,
    padding: `${theme.spacing.sm}px ${theme.spacing.xs}px`,
    borderRadius: theme.spacing.sm,
    boxShadow: theme.shadows.md,
    backgroundColor: theme.primaryColor[0],
  },
  initial: {
    fontWeight: 900,
    color: theme.colors.gray,
    justifySelf: "center",
  },
  headerContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  openButton: {
    backgroundColor: theme.primaryColor[0],
  },
  actionButton: {
    width: "2.5rem",
    padding: "0.2rem",
    position: "absolute",
    zIndex: 100,
    borderRadius: "50%",
    boxShadow: theme.shadows.lg,
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
