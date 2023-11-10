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
  button: {
    border: `0.06rem solid ${
      theme.colorScheme === "light"
        ? theme.colors.primaryColor[0]
        : theme.colors.gray[1]
    }`,
    color: theme.colorScheme === "light" ? theme.black : theme.colors.gray[1],
  },
}));

export default styles;
