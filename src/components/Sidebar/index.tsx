import Contact from "@components/Contact";
import { useMediaQuery } from "@mantine/hooks";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Testimonials from "@components/Testimonials";
import { Box, Collapse } from "@mantine/core";
import userStyles from "./style";
import { CloseIcon, OpenIcon } from "@components/Icons";

const Index = () => {
  const { classes } = userStyles();
  const [opened, setOpened] = useState(false);
  const [showing, setShowing] = useState(true);
  const { pathname } = useRouter();
  const dispatch = useDispatch();
  const bigScreen = useMediaQuery("(min-width: 993px)");

  useEffect(() => {
    if (!bigScreen && pathname !== "/") {
      setShowing(true);
      setOpened(false);
      return;
    }
    if (bigScreen || pathname === "/") {
      setShowing(false);
      setOpened(true);
      return;
    }
    setShowing(true);
  }, [bigScreen, pathname]);

  return (
    <Box className={classes.container}>
      {showing &&
        (!opened ? (
          <OpenIcon
            width={30}
            height={30}
            onClick={() => setOpened(true)}
            isActive={undefined}
            invert={undefined}
          >
            {opened ? "hide" : "more"}
          </OpenIcon>
        ) : (
          <CloseIcon
            width={30}
            height={30}
            onClick={() => setOpened(false)}
            isActive={undefined}
            invert={undefined}
          >
            {opened ? "hide" : "more"}
          </CloseIcon>
        ))}

      <Collapse in={opened}>
        <Contact />
        <Testimonials />
      </Collapse>
    </Box>
  );
};

export default Index;
