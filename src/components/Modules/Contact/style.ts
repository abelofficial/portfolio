import { createStyles } from "@mantine/core";

const styles = createStyles((theme) => ({
  contactLink: {
    padding: theme.spacing.xs,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textDecoration: "none",
    "&:focus": {
      WebkitTapHighlightColor: "transparent",
    },
    "& p": {
      color: theme.colorScheme === "light" ? theme.black : theme.white,
      fontStyle: "normal",
    },
  },
  contactContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  text: {
    margin: "0.5rem 0",
    fontSize: "0.9rem",
    fontWeight: 400,
  },
  icon: {
    width: "2.2rem",
    height: "2.2rem",
  },
  listContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "nowrap",
  },
}));

export default styles;
