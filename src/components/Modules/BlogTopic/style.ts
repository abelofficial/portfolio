import { createStyles } from "@mantine/core";

const styles = createStyles((theme) => ({
  card: {
    border: `0.03rem solid ${
      theme.colorScheme === "light"
        ? theme.colors.primaryColor[0]
        : theme.colors.gray[1]
    }`,
    backgroundColor:
      theme.colorScheme === "light" ? "white" : theme.colors.dark[9],
  },
  smallText: {
    fontSize: "0.7rem",
    color: theme.colorScheme === "light" ? theme.black : theme.white,
  },
}));

export default styles;
