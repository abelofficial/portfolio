// Core
import clsx from 'classnames';
import { useSelector, useDispatch } from 'react-redux';

// Internal
import {
  selectDarkMode,
  setDarkMode,
  turnOffDarkMode
} from '@local-store/SiteConfig';
import { DarkModeIcon, LightModeIcon } from '@local-assets/icons';

// Material ui
import { Typography } from '@material-ui/core';

// Component
import useStyles from './text.styles.js';

export const Title = ({ children, ...restProps }) => {
  const styles = useStyles();
  return (
    <Typography
      variant="h2"
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
      variant="h3"
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
      variant="subtitle1"
      className={clsx(styles.text, styles.subSectionTitle)}
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
      variant="body1"
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
      variant="body2"
      className={clsx(styles.text, styles.highlightText)}
      {...restProps}
    >
      {children}
    </Typography>
  );
};
