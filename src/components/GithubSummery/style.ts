import { createStyles } from "@mantine/core";

const styles = createStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  accountInfoText: {
    marginRight: theme.spacing.sm,
  },
  profile: {
    display: "flex",

    alignItems: "center",
  },
  profileInfo: {
    width: "100%",
    paddingLeft: theme.spacing.sm,
  },
  avatar: {
    borderRadius: "50%",
    // boxShadow: theme.shadows[1],
  },
  infoTextContainer: {
    width: "fit-content",
  },
  followContainer: {
    width: "40%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  statusContainer: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  text: {
    textAlign: "center",
    margin: 0,
    marginRight: "0.5rem",
  },
  highlightedText: {
    margin: 0,
    display: "block",
    color: theme.primaryColor,
    fontWeight: "bold",
  },
  statues: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

export default styles;
