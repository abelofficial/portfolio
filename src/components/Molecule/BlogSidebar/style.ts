import { createStyles } from "@mantine/core";

const styles = createStyles((theme) => ({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing.lg,
  },
  input: {
    width: "80%",
  },
}));

export default styles;
