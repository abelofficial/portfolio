import { createStyles } from "@mantine/core";

const styles = createStyles((theme) => ({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 0,

    [`@media (min-width: ${theme.breakpoints.md}px)`]: {
      padding: theme.spacing.lg,
    },
  },
}));

export default styles;
