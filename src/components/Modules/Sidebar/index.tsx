import { useMediaQuery } from "@mantine/hooks";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Box, Collapse, Grid } from "@mantine/core";
import userStyles from "./style";
import { CloseIcon, OpenIcon } from "@components/Atoms/Icons";
import Footer from "@components/Molecule/Footer";
import SwitchableIcon from "../../Atoms/SwitchableIcon";

export interface SidebarProps {
  children: JSX.Element;
}

const Index = ({ children }) => {
  const { classes } = userStyles();
  const [opened, setOpened] = useState(false);
  const [showing, setShowing] = useState(true);
  const { pathname } = useRouter();
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
      <Grid justify='center'>
        {showing && (
          <SwitchableIcon
            value={opened}
            setValue={setOpened}
            activeIcon={
              <CloseIcon
                width={30}
                height={30}
                onClick={() => setOpened(false)}
                isActive={undefined}
                invert={undefined}
              />
            }
            inactiveIcon={
              <OpenIcon
                width={30}
                height={30}
                onClick={() => setOpened(true)}
                isActive={undefined}
                invert={undefined}
              />
            }
          />
        )}
      </Grid>
      <Collapse in={opened}>
        {children}
        {bigScreen && <Footer />}
      </Collapse>
    </Box>
  );
};

export default Index;
