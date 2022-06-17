import { createStyles } from "@mantine/core";

const styles = createStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profile: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    borderRadius: "50%",
    boxShadow: theme.shadows[4],
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
    fontWeight: "bold",
  },
  statues: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

export default styles;
