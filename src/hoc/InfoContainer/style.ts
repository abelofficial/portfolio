import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  container: {
    margin: theme.spacing.xs,
    padding: theme.spacing.xs,
    backgroundColor: theme.colors.grey,
    borderRadius: theme.defaultRadius,
    height: "fit-content",
    boxShadow: theme.shadows.sm,
  },
}));

export default useStyles;
