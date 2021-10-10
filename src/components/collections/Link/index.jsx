import Link from "next/link";
import { useRouter } from "next/router";
import {
  HomeIcon,
  EducationIcon,
  BlogIcon,
  MessageIcon,
  SettingIcon,
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
      <Link href='/education' className={styles.link}>
        <a>
          <EducationIcon
            invert={invert}
            isActive={router.pathname === "/education"}
          />
        </a>
      </Link>
      <Link href='/experience' className={styles.link}>
        <a>
          <BlogIcon
            invert={invert}
            isActive={router.pathname === "/experience"}
          />
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
      <Link href='/' className={styles.link}>
        <a>
          <SettingIcon invert={invert} isActive={router.pathname === ""} />
        </a>
      </Link>
    </Grid>
  );
};
