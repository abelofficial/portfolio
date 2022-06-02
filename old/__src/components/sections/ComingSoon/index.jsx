// Core
import Lottie from "react-lottie-player";

// Material ui
import { useTheme } from "@mui/material";

// Local
import { SectionContainer } from "@local-components/hoc";
import * as animationPlane from "public/animations/coming_soon.json";
import * as animationPlaneDarkTheme from "public/animations/coming_soon_dark.json";

// Component style
import useStyles from "./style";

const ComingSoon = (props) => {
  const theme = useTheme();
  const styles = useStyles()();

  return (
    <SectionContainer>
      <Lottie
        loop
        play
        animationData={
          theme.palette.type === "light"
            ? animationPlane
            : animationPlaneDarkTheme
        }
        className={styles.anim}
      />
    </SectionContainer>
  );
};

export default ComingSoon;
