import Link from "next/link";
import { useRouter } from "next/router";
import {
  HomeIcon,
  BlogIcon,
  MessageIcon,
  SettingIcon,
  TimeLineIcon,
} from "@local-assets/icons";
import { Grid } from "@material-ui/core";

import useStyles from "./style";

export const NavigationLinks = ({ invert, ...restProps }) => {
  const styles = useStyles();
  const router = useRouter();

  return (
    <Grid container direction='column' alignContent='center' {...restProps}>
      <Link href='/' className={styles.link}>
        <a>
          <HomeIcon invert={invert} isActive={router.pathname === "/"} />
        </a>
      </Link>
      <Link href='/timeline' className={styles.link}>
        <a>
          <TimeLineIcon
            invert={invert}
            isActive={router.pathname === "/timeline"}
          />
        </a>
      </Link>

      <Link href='/blog' className={styles.link}>
        <a>
          <BlogIcon invert={invert} isActive={router.pathname === "/blog"} />
        </a>
      </Link>
      <Link href='message' className={styles.link}>
        <a>
          <MessageIcon
            invert={invert}
            isActive={router.pathname === "/message"}
          />
        </a>
      </Link>
      <Link href='/setting' className={styles.link}>
        <a>
          <SettingIcon
            invert={invert}
            isActive={router.pathname === "/setting"}
          />
        </a>
      </Link>
    </Grid>
  );
};
