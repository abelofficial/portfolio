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
  anim: {
    width: "100%",
    height: "100%",
    maxWidth: "20rem",
    margin: "auto",
    paddingTop: "3rem",
  },
}));

export default styles;
