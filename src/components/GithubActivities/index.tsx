import clsx from "classnames";
import Github from "react-github-calendar";
import { Box, Grid, Title } from "@mantine/core";
import React from "react";
import useStyles from "./style";
import InfoContainer from "@hoc/InfoContainer";

const Index = () => {
  const { classes, theme } = useStyles();
  const calendarTheme = {
    level0: theme.colors.backgroundSecondary[1],
    level1: theme.primaryColor[3],
    level2: theme.primaryColor[2],
    level3: theme.primaryColor[1],
    level4: theme.primaryColor[0],
  };
  return (
    <InfoContainer>
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
    </InfoContainer>
  );
};

export default Index;
