import clsx from "classnames";
// Material ui

import ExpandMoreIcon from "@mui/icons-material/ExpandLess";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import { IconButton, useTheme } from "@mui/material";
import useStyle from "../style";
import AboutMe from "@local-components/sections/AboutMe";
import Contact from "@local-components/sections/Contact";
import { useSelector } from "react-redux";
import { selectSideBarPage } from "@local-store/SiteConfig";
import GithubSummery from "@local-components/sections/GithubSummery";

const SummerySection = () => {
  const theme = useTheme();
  const styles = useStyle(theme)();
  const sideBarPage = useSelector(selectSideBarPage);

  return (
    <IconButton color='primary' disableRipple>
      {!sideBarPage.summary ? (
        <MoreHorizIcon className={clsx(styles.icon)} width={80} height={80} />
      ) : (
        <ExpandMoreIcon className={clsx(styles.icon)} width={80} height={80} />
      )}
    </IconButton>
  );
};

const FullDetailSection = () => {
  return (
    <>
      <AboutMe />
      <Contact />
      <GithubSummery />
    </>
  );
};

const ConnectionSection = () => {
  return (
    <>
      <Contact />
    </>
  );
};

export { SummerySection, FullDetailSection, ConnectionSection };
