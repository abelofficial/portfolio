import { createStyles } from "@mantine/core";

const styles = createStyles((theme) => ({
  listContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "nowrap",
  },
  text: {
    padding: "1rem",
    fontStyle: "italic",
    fontSize: "1rem",
    color:
      theme.colorScheme === "light"
        ? theme.colors.gray[4]
        : theme.colors.gray[2],
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
