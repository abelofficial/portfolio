import { useRouter } from "next/router";

import {
  HomeIcon,
  BlogIcon,
  TimeLineIcon,
} from "@local-components/collections/icons";
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
        disableRipple
        className={styles.link}
        onClick={() => router.push(ROUTES.HOME)}
      >
        <HomeIcon invert={invert} isActive={router.pathname === ROUTES.HOME} />
      </IconButton>

      <IconButton
        disableRipple
        className={styles.link}
        onClick={() => router.push(ROUTES.TIMELINE)}
      >
        <TimeLineIcon
          invert={invert}
          isActive={router.pathname === ROUTES.TIMELINE}
        />
      </IconButton>

      <IconButton
        disableRipple
        className={styles.link}
        onClick={() => router.push(ROUTES.BLOG)}
      >
        <BlogIcon invert={invert} isActive={router.pathname === ROUTES.BLOG} />
      </IconButton>
    </Grid>
  );
};
