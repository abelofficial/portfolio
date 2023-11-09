import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  container: {
    width: "100%",
    minHeight: "100vh",
    margin: "auto",
    padding: `${theme.spacing.xs}px ${theme.spacing.lg}px`,
    zIndex: 400,
    filter: "blur(0)",
  },
}));

export default useStyles;
