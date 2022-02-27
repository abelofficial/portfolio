import clsx from "classnames";
// Material ui
import { AccordionSummary, Accordion, AccordionDetails } from "@mui/material";
import { useTheme } from "@mui/styles";

import useStyle from "./style";
import { useState } from "react";

import { useSelector } from "react-redux";
import { selectSideBarPage } from "@local-store/SiteConfig";
import AboutMe from "../AboutMe";
import Contact from "../Contact";
import { getSummarySection } from "./SidebarController";
import { getDetailSection } from "./SidebarController";

export const Sidebar = (params) => {
  const { children, force, ...props } = params;
  const theme = useTheme();
  const styles = useStyle(theme)();
  const sideBarPage = useSelector(selectSideBarPage);
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = () => (event, isExpanded) => {
    setExpanded(isExpanded ? "panel1" : false);
  };

  const getChild = () => (
    <>
      {" "}
      <AboutMe /> <Contact />{" "}
    </>
  );

  return (
    <Accordion
      disableGutters
      aria-controls='panel1bh-content'
      id='panel1bh-header'
      className={clsx(styles.accordion)}
      expanded={expanded === "panel1"}
      onChange={handleChange()}
    >
      <AccordionSummary className={clsx(styles.accordionSummery)}>
        {getSummarySection()}
      </AccordionSummary>

      <AccordionDetails className={clsx(styles.sidebarContent)}>
        {getDetailSection()}
      </AccordionDetails>
    </Accordion>
  );
};
