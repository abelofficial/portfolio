import { createStyles } from "@mantine/core";

const styles = createStyles((theme) => ({
  contactLink: {
    padding: theme.spacing.sm,
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
  title: {
    padding: theme.spacing.sm,
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
