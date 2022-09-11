import { createStyles } from "@mantine/core";

const styles = createStyles((theme) => ({
  listContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "nowrap",
  },
  text: {
    margin: "0.5rem 0",
    padding: "0 1rem",
    lineHeight: "1.3rem",
    fontStyle: "italic",
    fontSize: "0.9rem",
    textAlign: "justify",
    color:
      theme.colorScheme === "light"
        ? theme.colors.gray[4]
        : theme.colors.gray[2],

    [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
      fontSize: "1rem",
    },
  },
  strongText: {
    fontWeight: "bold",
    marginRight: "0.5rem",
  },
  highlightedText: {
    marginLeft: "0.5rem",
    fontWeight: "bold",
    color: theme.colors.primaryColor[1],
  },
}));

export default styles;
