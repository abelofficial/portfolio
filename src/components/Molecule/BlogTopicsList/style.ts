import { createStyles } from "@mantine/core";

const styles = createStyles((theme) => ({
  paginationContainer: {
    padding: `${theme.spacing.xl}px ${theme.spacing.sm}px`,
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
}));

export default styles;
