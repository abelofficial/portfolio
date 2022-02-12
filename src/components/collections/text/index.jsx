// Core
import clsx from "classnames";

// Internal

// Material ui
import { Typography, useTheme } from "@mui/material";

// Component
import useStyles from "./styles";

export const Title = ({ children, ...restProps }) => {
  const theme = useTheme();
  const styles = useStyles(theme)();

  return (
    <Typography
      variant='h5'
      className={clsx(styles.text, styles.title)}
      {...restProps}
    >
      {children}
    </Typography>
  );
};

export const SectionTitle = ({ children, ...restProps }) => {
  const theme = useTheme();
  const styles = useStyles(theme)();

  return (
    <Typography
      variant='h5'
      className={clsx(styles.text, styles.sectionTitle)}
      {...restProps}
    >
      {children}
    </Typography>
  );
};

export const SubSectionTitle = ({ children, ...restProps }) => {
  const theme = useTheme();
  const styles = useStyles(theme)();

  return (
    <Typography
      variant='subtitle1'
      className={clsx(styles.text, styles.subSectionTitle)}
      {...restProps}
    >
      {children}
    </Typography>
  );
};

export const StrongText = ({ children, ...restProps }) => {
  const theme = useTheme();
  const styles = useStyles(theme)();

  return (
    <Typography
      variant='subtitle1'
      className={clsx(styles.text, styles.strongText)}
      {...restProps}
    >
      {children}
    </Typography>
  );
};

export const Paragraph = ({ children, ...restProps }) => {
  const theme = useTheme();
  const styles = useStyles(theme)();

  return (
    <Typography
      variant='body1'
      className={clsx(styles.text, styles.paragraph)}
      {...restProps}
    >
      {children}
    </Typography>
  );
};

export const HighLightText = ({ children, ...restProps }) => {
  const theme = useTheme();
  const styles = useStyles(theme)();

  return (
    <Typography
      variant='body2'
      className={clsx(styles.text, styles.highlightText)}
      {...restProps}
    >
      {children}
    </Typography>
  );
};

// To be removed
export const ComingSoon = ({ title, ...restProps }) => {
  const theme = useTheme();
  const styles = useStyles(theme)();

  return (
    <Typography
      variant='h1'
      className={clsx(styles.text, styles.highlightText)}
      {...restProps}
    >
      {title} coming soon!
    </Typography>
  );
};
