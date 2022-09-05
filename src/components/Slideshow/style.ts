import { createStyles } from "@mantine/core";

const styles = createStyles((theme) => ({
  container: {
    position: "relative",
    zIndex: 100,
  },
  header: {
    position: "absolute",
    zIndex: 200,
    top: "50%",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "nowrap",
  },
  content: {
    position: "relative",
    zIndex: 150,
    margin: "0.5rem 3rem",
  },
}));

export default styles;
