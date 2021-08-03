// Core
import clsx from 'classnames';
import { useSelector, useDispatch } from 'react-redux';

// Internal
import {
  selectDarkMode,
  setDarkMode,
  turnOffDarkMode
} from '@local-store/SiteConfig';
import {
  DarkModeIcon,
  LightModeIcon
} from '@local-components/collections/icons';

// Material ui
import { IconButton } from '@material-ui/core';

export const SiteThemeSelector = ({ props }) => {
  const dispatch = useDispatch();
  const darkMode = useSelector(selectDarkMode);

  return (
    <>
      {darkMode ? (
        <IconButton onClick={() => dispatch(turnOffDarkMode())}>
          <LightModeIcon />
        </IconButton>
      ) : (
        <IconButton onClick={() => dispatch(setDarkMode())}>
          <DarkModeIcon />
        </IconButton>
      )}
    </>
  );
};
