// Core
import clsx from "classnames";
import Github from "react-github-calendar";

// Material ui
import { Box, Grid, useTheme } from "@material-ui/core";

// Local
import { SectionContainer } from "@local/src/components/hoc";

// Component
import useStyles from "./style";
import { useOnScreen } from "@local/src/hooks/useOnScreen";
import { SectionTitle } from "../../collections/text";

const GithubActivities = (props) => {
  const styles = useStyles();
  const theme = useTheme();
  const [setRef, visible] = useOnScreen({ threshold: "0.1" });

  const calendarTheme = {
    level0: theme.palette.background.paper,
    level1: "#9BE9A8",
    level2: "#40C463",
    level3: "#30A14E",
    level4: "#216E39",
  };

  return (
    <SectionContainer>
      <Grid
        container
        justifyContent='space-around'
        ref={setRef}
        className={styles.container}
      >
        <Grid item xs={12}>
          <SectionTitle variant='h4' gutterBottom>
            Github activities
          </SectionTitle>
          <Box className={clsx(styles.section, styles.slideAnim)}>
            <Github
              username='abelofficial'
              theme={calendarTheme}
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

export default GithubActivities;
