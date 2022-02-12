// Core
import Lottie from "react-lottie-player";

// Material ui
import { Box, Button, Grid, TextField, useTheme } from "@material-ui/core";

// Local
import { SectionContainer } from "@local-components/hoc";
import * as animationPlane from "public/animations/coming_soon.json";
import * as animationPlaneDarkTheme from "public/animations/coming_soon_dark.json";

// Component style
import useStyles from "./style";

const ChatBox = (props) => {
  const styles = useStyles();
  const theme = useTheme();

  return (
    <Grid container direction='column' className={styles.container}>
      <SectionContainer component={Grid} item>
        <Box className={styles.historySection}>
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
        </Box>
      </SectionContainer>
      <SectionContainer component={Grid} item>
        <Box className={styles.formSection}>
          <Grid container justify='space-between' alignItems='center'>
            <Grid item xs={8}>
              <TextField
                fullWidth
                variant='outlined'
                placeholder='message'
                defaultValue=''
                className={styles.textField}
              />
            </Grid>
            <Grid item xs={3}>
              <Button
                fullWidth
                variant='contained'
                color='primary'
                className={styles.button}
              >
                Send
              </Button>{" "}
            </Grid>
          </Grid>
        </Box>
      </SectionContainer>
    </Grid>
  );
};

export default ChatBox;
