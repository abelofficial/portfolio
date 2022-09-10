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
    backgroundColor:
      theme.colorScheme === "light"
        ? theme.black
        : theme.colors.primaryColor[0],
  },
  initial: {
    fontWeight: 900,
    color:
      theme.colorScheme === "light"
        ? theme.white
        : theme.colors.backgroundPrimary[0],
    justifySelf: "center",
  },
  headerContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  openButton: {
    backgroundColor: theme.colors.primaryColor[0],
    border: "0.2rem solid" + theme.colors.gray[0],
  },
  actionButton: {
    width: "2.3rem",
    height: "2.3rem",
    padding: "0.15rem",
    position: "absolute",
    zIndex: 100,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    boxShadow: theme.shadows.sm,
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
