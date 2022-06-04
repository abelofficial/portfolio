import SectionContainer from "@hoc/SectionContainer";
import { useMediaQuery } from "@mantine/hooks";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectSideBarPage,
  setSideBarSummary,
  setSideBarSummaryLock,
} from "src/store/SiteConfig";
import useStyles from "./style";

const Index = () => {
  const { classes } = useStyles();
  const navigator = useRouter();
  const sideBarPage = useSelector(selectSideBarPage);
  const dispatch = useDispatch();
  const bigScreen = useMediaQuery("(min-width: 600px)", false);

  const handleChange = () => {
    dispatch(setSideBarSummary(!sideBarPage.summary));
  };

  useEffect(() => {
    if (navigator.pathname === "/") dispatch(setSideBarSummaryLock(true));
    else dispatch(setSideBarSummaryLock(bigScreen));
  });
  return (
    <SectionContainer>
      {/* <AboutMe />
      <Contact />
      <GithubSummery /> */}
      <h1>About Me</h1>
      <h1>Contact</h1>
      <h1>GithubSummery</h1>
    </SectionContainer>
  );
};

export default Index;
