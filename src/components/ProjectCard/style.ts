import { createStyles } from "@mantine/core";

const styles = createStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
  },
  listContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    flexWrap: "nowrap",
  },
  media: {
    width: "100%",
    borderRadius: "1rem",
    boxShadow: theme.shadows[1],
  },
  text: {
    textAlign: "justify",
  },

  chip: {
    backgroundColor: theme.primaryColor[0],
    borderRadius: "1rem",
    padding: "0.2rem 0.5rem",
    height: "fit-content",
    boxShadow: theme.shadows[2],

    " & > p": {
      margin: 0,
      color: theme.colorScheme === "dark" ? theme.black : theme.black,
    },
  },
  chipList: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    gap: "0.5rem",
    alignItems: "center",
    padding: "1rem 0rem",
  },
}));

export default styles;
