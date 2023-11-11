import { createStyles } from "@mantine/core";

const styles = createStyles((theme) => ({
  container: {
    width: "100%",
    [`@media (min-width: ${theme.breakpoints.md}px)`]: {
      minHeight: "90vh",
    },
  },
}));

export default styles;
