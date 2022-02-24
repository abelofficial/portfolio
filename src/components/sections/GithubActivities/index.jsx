// Core
import clsx from "classnames";
import Github from "react-github-calendar";

// Material ui
import { Box, Grid } from "@mui/material";
import { useTheme } from "@mui/styles";

// Local
import { SectionContainer } from "@local-components/hoc";

// Component
import useStyles from "./style";
import { useOnScreen } from "@local-components/hooks/useOnScreen";
import { SectionTitle } from "@local-components/collections/text";

const GithubActivities = (props) => {
  const theme = useTheme();
  const styles = useStyles(theme)();
  const [setRef, visible] = useOnScreen({ threshold: "0.1" });

  const calendarTheme = {
    level0: theme.palette.background.paper,
    level1: theme.palette.type === "light" ? "#9BE9A8" : "#f9ff0c",
    level2: theme.palette.type === "light" ? "#40C463" : "#ffe40c",
    level3: theme.palette.type === "light" ? "#30A14E" : "#ccb609",
    level4: theme.palette.type === "light" ? "#216E39" : "#998806",
  };

  return (
    <SectionContainer my={2}>
      <Grid
        container
        justifyContent='space-around'
        ref={setRef}
        className={styles.container}
      >
        <Grid item xs={12}>
          <SectionTitle gutterBottom>Github activities</SectionTitle>
          <Box className={clsx(styles.section, styles.slideAnim)}>
            <Github
              username='abelofficial'
              theme={calendarTheme}
              style={{
                color:
                  theme.palette.type === "light"
                    ? theme.palette.primary.main
                    : theme.palette.text.primary,
                ...theme.typography.body2,
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

export default GithubActivities;
