import { createStyles } from "@mantine/core";

const styles = createStyles((theme) => ({
  link: {
    "& a": {
      textDecoration: "none",
      margin: theme.spacing.xs,
      color: theme.primaryColor,
    },
  },
  active: {
    color: theme.colors.orange,
  },
}));

export default styles;
