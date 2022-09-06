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
    width: "60%",
    height: "40rem",
    borderRadius: "1rem",
  },
  text: {
    textAlign: "justify",
  },
}));

export default styles;
