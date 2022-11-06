import { createStyles } from "@mantine/core";

const styles = createStyles((theme) => ({
  container: {
    padding: theme.spacing.sm,
  },
  section: {
    display: "flex",
    flexDirection: "column",
    justifySelf: "flex-start",
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
    color:
      theme.colorScheme === "dark"
        ? theme.colors.gray[2]
        : theme.colors.gray[4],
    fontWeight: 400,
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
  indicator: {
    width: "fit-content",
    borderRadius: "1rem",
  },
  description: {
    textAlign: "justify",
    maxWidth: "30rem",
    margin: "0.5rem 0",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

export default styles;
