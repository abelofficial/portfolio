import { createStyles } from "@mantine/core";

const styles = createStyles((theme) => ({
  "@keyframes slideLeft": {
    from: {
      transform: "translateX(-10%)",
    },
    to: {
      transform: "translateX(10%)",
    },
  },
  "@keyframes slideRight": {
    from: {
      transform: "translateX(10%)",
    },
    to: {
      transform: "translateX(-10%)",
    },
  },
  container: {
    padding: theme.spacing.xs,
  },
  section: {},
  divider: {
    marginTop: theme.spacing.sm,
    marginBottom: theme.spacing.sm,
    opacity: 0.4,
    filter: "blur(0.1rem)",
  },
  card: {
    margin: `1rem`,
    borderRadius: theme.radius.md,
    backgroundColor: "inherit",
    maxWidth: "100%",
    padding: theme.spacing.xs,
  },
  listContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",

    [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
      flexDirection: "row",
    },
  },
  text: {
    margin: "0 0 1rem",
    textAlign: "justify",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.gray[1]
        : theme.colors.gray[4],
  },
}));

export default styles;
