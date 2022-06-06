import { createStyles } from "@mantine/core";

const styles = createStyles((theme) => ({
  container: {
    padding: theme.spacing.sm,
  },
  section: {
    display: "flex",
    flexDirection: "column",
    justifySelf: "flex-start",
    // padding: theme.spacing.xs,
  },
  divider: {
    marginTop: theme.spacing.sm,
    marginBottom: theme.spacing.sm,
    opacity: 0.4,
    filter: "blur(0.1rem)",
  },

  avatarImage: {
    borderRadius: "50%",
  },
  highlightText: {
    fontStyle: "italic",
    color: theme.colors.gray[6],
    fontWeight: 200,
    overflowWrap: "break-word",
    margin: 0,
  },
  sectionTop: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  textContent: {
    paddingLeft: theme.spacing.sm,
  },
}));

export default styles;
