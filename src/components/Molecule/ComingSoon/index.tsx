import React from "react";
import Lottie from "react-lottie-player";
import useStyles from "./style";
import InfoContainer from "@components/Molecule/InfoContainer";
import * as animationPlane from "../../../../public/animations/coming_soon.json";
import * as animationPlaneDarkTheme from "../../../../public/animations/coming_soon_dark.json";

const Index = () => {
  const { classes, theme } = useStyles();

  return (
    <InfoContainer>
      <Lottie
        loop
        play
        animationData={
          theme.colorScheme === "light"
            ? animationPlane
            : animationPlaneDarkTheme
        }
        className={classes.anim}
      />
    </InfoContainer>
  );
};

export default Index;
