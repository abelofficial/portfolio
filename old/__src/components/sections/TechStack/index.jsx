// Core
import Image from "next/image";
import clsx from "classnames";
import { v4 as uuid } from "uuid";
// Material ui
import { Box, Slide, Grid, useTheme } from "@mui/material";
// Local
import { SectionContainer } from "@local-components/hoc";

// Component
import data from "@local-static/techStackData.json";
import useStyles from "./style";
import { useOnScreen } from "@local-components/hooks/useOnScreen";
import { SectionTitle } from "@local-components/collections/text";
import { HighLightText } from "@local-components/collections/text";

const TechStack = (props) => {
  const theme = useTheme();
  const styles = useStyles(theme)();
  const [setRef, visible] = useOnScreen({ threshold: "0.1" });

  return (
    <SectionContainer>
      <Grid
        container
        justifyContent='space-around'
        ref={setRef}
        className={styles.container}
      >
        <Grid item xs={12}>
          <SectionTitle gutterBottom>Tech stack</SectionTitle>
          <Grid
            container
            justifyContent='space-between'
            alignItems='center'
            className={clsx(styles.section, styles.slideAnim)}
          >
            {data.map((item, index) => (
              <Grid item xs={3} my={1} key={uuid()}>
                <Slide in={visible} direction='left' timeout={index * 300}>
                  <Box className={clsx(styles.frameworkContainer)}>
                    <Image
                      alt={item.title + " icon"}
                      width={20}
                      height={20}
                      src={item.link}
                    />
                    <HighLightText gutterBottom> {item.name} </HighLightText>
                  </Box>
                </Slide>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </SectionContainer>
  );
};

export default TechStack;
