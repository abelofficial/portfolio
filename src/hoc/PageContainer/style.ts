import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  container: {
    padding: theme.spacing.xs,
    width: "100vw",
    maxWidth: "100%",
    minHeight: "90vh",
    margin: "auto",

    [`@media (min-width: ${theme.breakpoints.md}px)`]: {
      paddingLeft: "5rem",
    },
    zIndex: 400,
    filter: "blur(0)",
  },
}));

export default useStyles;
