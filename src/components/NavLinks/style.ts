import { createStyles } from "@mantine/core";

const styles = createStyles((theme) => ({
  container: {
    width: "100%",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  row: {
    flexDirection: "row",
  },
  column: {
    flexDirection: "column",
  },

  link: {
    "& a": {
      textDecoration: "none",
      margin: theme.spacing.xs,
      color: theme.primaryColor[0],
    },
  },
  active: {
    color: theme.colors.orange,
  },
}));

export default styles;
