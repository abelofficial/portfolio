import clsx from "classnames";
import Github from "react-github-calendar";
import SectionContainer from "@hoc/SectionContainer";
import { Box, Grid, Title } from "@mantine/core";
import React from "react";
import useStyles from "./style";

const Index = () => {
  const { classes, theme } = useStyles();
  const calendarTheme = {
    level0: theme.colors.gray[2],
    level1: theme.colorScheme === "light" ? "#9BE9A8" : "#f9ff0c",
    level2: theme.colorScheme === "light" ? "#40C463" : "#ffe40c",
    level3: theme.colorScheme === "light" ? "#30A14E" : "#ccb609",
    level4: theme.colorScheme === "light" ? "#216E39" : "#998806",
  };
  return (
    <SectionContainer>
      <Grid className={classes.container}>
        <Grid>
          <Title order={4}>Github activities</Title>
          <Box className={clsx(classes.section, classes.slideAnim)}>
            <Github
              username='abelofficial'
              theme={calendarTheme}
              style={{
                color:
                  theme.colorScheme === "light" ? theme.black : theme.white,
              }}
              blockMargin={5}
              blockRadius={7}
              blockSize={14}
            />
          </Box>
        </Grid>
      </Grid>
    </SectionContainer>
  );
};

export default Index;
