import { createStyles } from "@mantine/core";

const styles = createStyles((theme) => ({
  container: {
    bottom: 0,
    textAlign: "center",
    backgroundColor: "transparent",
  },
  smallText: {
    fontSize: "0.7rem",
    color: theme.colorScheme === "light" ? theme.black : theme.white,
  },
}));

export default styles;
