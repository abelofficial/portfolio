// Core
import clsx from "classnames";

// Internal

// Material ui
import { Typography } from "@material-ui/core";

// Component
import useStyles from "./text.styles.js";

export const Title = ({ children, ...restProps }) => {
  const styles = useStyles();
  return (
    <Typography
      variant='h2'
      className={clsx(styles.text, styles.title)}
      {...restProps}
    >
      {children}
    </Typography>
  );
};

export const SectionTitle = ({ children, ...restProps }) => {
  const styles = useStyles();
  return (
    <Typography
      variant='h3'
      className={clsx(styles.text, styles.sectionTitle)}
      {...restProps}
    >
      {children}
    </Typography>
  );
};

export const SubSectionTitle = ({ children, ...restProps }) => {
  const styles = useStyles();
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
  const styles = useStyles();
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
  const styles = useStyles();
  return (
    <Typography
      variant='body1'
      className={clsx(styles.text, styles.sectionTitle)}
      {...restProps}
    >
      {children}
    </Typography>
  );
};

export const HighLightText = ({ children, ...restProps }) => {
  const styles = useStyles();
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
  const styles = useStyles();
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
