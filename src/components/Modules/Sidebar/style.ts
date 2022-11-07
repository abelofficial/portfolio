import { createStyles } from "@mantine/core";

const styles = createStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  icon: {
    borderRadius: "50%",
    boxShadow: theme.shadows[1],
    color: theme.colors.primaryColor[0],
  },
}));

export default styles;
