import { useRouter } from "next/router";

import {
  HomeIcon,
  BlogIcon,
  MessageIcon,
  SettingIcon,
  TimeLineIcon,
} from "@local-assets/icons";
import { ROUTES } from "@local-assets/RoutesObjects";

import { Grid, IconButton, useTheme } from "@mui/material";

import useStyles from "./style";

export const NavigationLinks = ({ invert, ...restProps }) => {
  const theme = useTheme();
  const styles = useStyles(theme)();
  const router = useRouter();

  return (
    <Grid container direction='column' alignContent='center' {...restProps}>
      <IconButton
        className={styles.link}
        onClick={() => router.push(ROUTES.HOME)}
      >
        <HomeIcon invert={invert} isActive={router.pathname === ROUTES.HOME} />
      </IconButton>

      <IconButton
        className={styles.link}
        onClick={() => router.push(ROUTES.TIMELINE)}
      >
        <TimeLineIcon
          invert={invert}
          isActive={router.pathname === ROUTES.TIMELINE}
        />
      </IconButton>

      <IconButton
        className={styles.link}
        onClick={() => router.push(ROUTES.BLOG)}
      >
        <BlogIcon invert={invert} isActive={router.pathname === ROUTES.BLOG} />
      </IconButton>

      <IconButton
        className={styles.link}
        onClick={() => router.push(ROUTES.MESSAGE)}
      >
        <MessageIcon
          invert={invert}
          isActive={router.pathname === ROUTES.MESSAGE}
        />
      </IconButton>

      <IconButton
        className={styles.link}
        onClick={() => router.push(ROUTES.SETTING)}
      >
        <SettingIcon
          invert={invert}
          isActive={router.pathname === ROUTES.SETTING}
        />
      </IconButton>
    </Grid>
  );
};
