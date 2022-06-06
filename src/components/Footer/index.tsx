/* eslint-disable react/jsx-no-undef */
import React from "react";
import useStyles from "./style";

const Index = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.container}>
      <p className={classes.smallText}>
        Made by Abel © {new Date().getFullYear()}. As always With 💜
      </p>
    </div>
  );
};

export default Index;
