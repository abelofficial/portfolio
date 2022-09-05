import React, { Children, useState } from "react";
import useStyles from "./style";
import InfoContainer from "@hoc/InfoContainer";
import { Box } from "@mantine/core";
import { BackIcon, NextIcon } from "@components/Icons";

export interface SlideshowProps {
  children: React.ReactNode;
}

const Index = ({ children }: SlideshowProps) => {
  const { classes } = useStyles();
  const childrenList = Children.toArray(children);
  const [current, setCurrent] = useState(0);

  return (
    <InfoContainer>
      <Box className={classes.container}>
        <Box className={classes.header}>
          <BackIcon onClick={() => setCurrent(Math.abs(current - 1))} />
          <NextIcon
            onClick={() => setCurrent((current + 1) % childrenList.length)}
          />
        </Box>
        <Box className={classes.content}>{childrenList[current]}</Box>
      </Box>
    </InfoContainer>
  );
};

export default Index;
