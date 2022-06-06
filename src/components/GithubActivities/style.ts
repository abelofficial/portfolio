import { createStyles } from "@mantine/core";

const styles = createStyles((theme) => ({
  container: {
    padding: theme.spacing.xs,
  },
  section: {
    padding: theme.spacing.xs,
  },

  slideAnim: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

export default styles;
