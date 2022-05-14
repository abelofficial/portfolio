import { useEffect } from "react";
import { useRouter } from "next/router";
import clsx from "classnames";
// Material ui
import {
  AccordionSummary,
  Accordion,
  AccordionDetails,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/styles";

import useStyle from "./style";

import { useDispatch, useSelector } from "react-redux";
import {
  selectSideBarPage,
  setSideBarSummary,
  setSideBarSummaryLock,
} from "@local-store/SiteConfig";
import { SummerySection, DetailSection } from "./SidebarController";

export const Sidebar = (params) => {
  const theme = useTheme();
  const navigator = useRouter();
  const styles = useStyle(theme)();
  const sideBarPage = useSelector(selectSideBarPage);
  const dispatch = useDispatch();
  const bigScreen = useMediaQuery(theme.breakpoints.up("md"));

  const handleChange = () => {
    dispatch(setSideBarSummary(!sideBarPage.summary));
  };

  useEffect(() => {
    if (navigator.pathname === "/") dispatch(setSideBarSummaryLock(true));
    else dispatch(setSideBarSummaryLock(bigScreen));
  });

  return (
    <Accordion
      disableGutters
      aria-controls='panel1bh-content'
      id='panel1bh-header'
      className={clsx(styles.accordion)}
      expanded={sideBarPage.summary}
      onChange={handleChange}
    >
      {!sideBarPage.lock && (
        <AccordionSummary className={clsx(styles.accordionSummery)}>
          <SummerySection />
        </AccordionSummary>
      )}

      <AccordionDetails className={clsx(styles.sidebarContent)}>
        <DetailSection />
      </AccordionDetails>
    </Accordion>
  );
};
