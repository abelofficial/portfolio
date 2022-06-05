import { createStyles } from "@mantine/core";

const styles = createStyles((theme) => ({
  contactLink: {
    textDecoration: "none",

    padding: theme.spacing.sm,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "&:focus": {
      WebkitTapHighlightColor: "transparent",
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
  },
}));

export default styles;
