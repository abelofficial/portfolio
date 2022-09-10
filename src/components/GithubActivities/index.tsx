import Github from "react-github-calendar";
import React from "react";
import useStyles from "./style";

const Index = () => {
  const { theme } = useStyles();
  const calendarTheme = {
    level0: theme.colors.backgroundSecondary[1],
    level1: theme.colors.primaryColor[3],
    level2: theme.colors.primaryColor[2],
    level3: theme.colors.primaryColor[1],
    level4: theme.colors.primaryColor[0],
  };
  return (
    <Github
      username='abelofficial'
      theme={calendarTheme}
      style={{
        color: theme.colorScheme === "light" ? theme.black : theme.white,
      }}
      labels={{
        legend: {
          less: "Le",
          more: "Mo",
        },
      }}
      hideColorLegend
      blockMargin={4}
      blockRadius={5}
      blockSize={10}
    />
  );
};

export default Index;
