import { createStyles } from "@mantine/core";

const styles = createStyles((theme) => ({
  container: {
    position: "absolute",
    bottom: 0,
    left: "40%",
    textAlign: "center",
    backgroundColor: "transparent",
  },
  smallText: {
    fontSize: "0.7rem",
    color: theme.colorScheme === "light" ? theme.black : theme.white,
  },
}));

export default styles;
