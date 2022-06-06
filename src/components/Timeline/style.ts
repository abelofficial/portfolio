import { createStyles } from "@mantine/core";

const styles = createStyles((theme) => ({
  container: {
    padding: theme.spacing.sm,
  },
  section: {
    justifySelf: "flex-start",
    padding: theme.spacing.xs,
  },
  divider: {
    marginTop: theme.spacing.sm,
    marginBottom: theme.spacing.sm,
    opacity: 0.4,
    filter: "blur(0.1rem)",
  },

  avatarImage: {
    width: "2em",
    height: "2em",
    borderRadius: "50%",
  },
  highlightText: {
    fontStyle: "italic",
    color: theme.primaryColor[0],
    fontWeight: 200,
    overflowWrap: "break-word",
  },
}));

export default styles;
