import { createStyles } from "@mantine/core";

const styles = createStyles((theme) => ({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    padding: theme.spacing.lg,
  },
  section: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export default styles;
