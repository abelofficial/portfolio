import Github, { Theme } from "react-github-calendar";
import React from "react";
import useStyles from "./style";

const Index = () => {
  const { theme } = useStyles();

  const calendarTheme: Theme = {
    level0:
      theme.colorScheme === "light"
        ? theme.colors.gray[0]
        : theme.colors.gray[5],
    level4: theme.colors.green[3],
    level3: theme.colors.green[5],
    level2: theme.colors.green[7],
    level1: theme.colors.green[9],
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
