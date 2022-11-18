import { createStyles } from "@mantine/core";

const styles = createStyles((theme) => ({
  container: {
    padding: `${theme.spacing.xl}px ${theme.spacing.sm}px`,
    minHeight: "100vh",
    display: "flex",
    gap: "1rem",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  smallText: {
    fontSize: "0.7rem",
    color: theme.colorScheme === "light" ? theme.black : theme.white,
  },
}));

export default styles;
