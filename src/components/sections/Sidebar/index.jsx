import clsx from "classnames";
// Material ui
import { AccordionSummary, Accordion, AccordionDetails } from "@mui/material";
import { useTheme } from "@mui/styles";

import useStyle from "./style";

import { useDispatch, useSelector } from "react-redux";
import { selectSideBarPage, setSideBarPage } from "@local-store/SiteConfig";
import { SummerySection, DetailSection } from "./SidebarController";

export const Sidebar = (params) => {
  const { children, force, ...props } = params;
  const theme = useTheme();
  const styles = useStyle(theme)();
  const sideBarPage = useSelector(selectSideBarPage);
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(setSideBarPage({ ...sideBarPage, summary: !sideBarPage.summary }));
  };

  return (
    <Accordion
      disableGutters
      aria-controls='panel1bh-content'
      id='panel1bh-header'
      className={clsx(styles.accordion)}
      expanded={sideBarPage.summary}
      onClick={handleChange}
    >
      <AccordionSummary className={clsx(styles.accordionSummery)}>
        <SummerySection />
      </AccordionSummary>

      <AccordionDetails className={clsx(styles.sidebarContent)}>
        <DetailSection />
      </AccordionDetails>
    </Accordion>
  );
};
