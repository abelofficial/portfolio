import { createStyles } from "@mantine/core";

const styles = createStyles((theme) => ({
  container: {
    width: "100%",
    [`@media (min-width: ${theme.breakpoints.md}px)`]: {
      minHeight: "90vh",
    },
  },

  icon: {
    borderRadius: "50%",
    boxShadow: theme.shadows[1],
    color: theme.colors.primaryColor[0],
  },
}));

export default styles;
