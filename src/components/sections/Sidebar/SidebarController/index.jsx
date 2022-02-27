import clsx from "classnames";
// Material ui

import ExpandMoreIcon from "@mui/icons-material/ExpandLess";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import { IconButton } from "@mui/material";
import { useTheme } from "@mui/styles";
import { useState } from "react";
import useStyle from "../style";
import AboutMe from "@local-components/sections/AboutMe";
import Contact from "@local-components/sections/Contact";

const getSummarySection = () => {
  const theme = useTheme();
  const styles = useStyle(theme)();
  const [expanded, setExpanded] = useState("panel1");

  return (
    <IconButton color='primary' disableRipple>
      {!expanded ? (
        <MoreHorizIcon className={clsx(styles.icon)} width={80} height={80} />
      ) : (
        <ExpandMoreIcon className={clsx(styles.icon)} width={80} height={80} />
      )}
    </IconButton>
  );
};

const getDetailSection = () => {
  return (
    <>
      <AboutMe />
      <Contact />
    </>
  );
};

export { getSummarySection, getDetailSection };
