import { createStyles } from "@mantine/core";

const styles = createStyles((theme) => ({
  section: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: theme.spacing.xs,
    wrap: "no-wrap",
    overflow: "scroll",
    scrollbarWidth: "none",
    paddingTop: theme.spacing.lg,
    "-ms-overflow-style": "none",

    "::-webkit-scrollbar": {
      display: "none",
    },
  },

  image: {
    width: theme.spacing.lg,
    height: theme.spacing.lg,
  },

  text: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    paddingTop: theme.spacing.xs,
  },
  frameworkContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minWidth: "25%",
    [`@media (min-width: ${theme.breakpoints.md}px)`]: {
      minWidth: "10%",
    },
  },
}));

export default styles;
