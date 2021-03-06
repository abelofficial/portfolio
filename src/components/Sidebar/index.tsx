import AboutMe from "@components/AboutMe";
import Contact from "@components/Contact";
import GithubSummery from "@components/GithubSummery";
import { useMediaQuery } from "@mantine/hooks";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSideBarSummaryLock } from "@store/SiteConfig";

const Index = () => {
  const navigator = useRouter();
  const dispatch = useDispatch();
  const bigScreen = useMediaQuery("(min-width: 600px)", false);

  useEffect(() => {
    if (navigator.pathname === "/") dispatch(setSideBarSummaryLock(true));
    else dispatch(setSideBarSummaryLock(bigScreen));
  });
  return (
    <>
      <AboutMe />
      <Contact />
      <GithubSummery />
    </>
  );
};

export default Index;
