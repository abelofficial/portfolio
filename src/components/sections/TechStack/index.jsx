// Core
import Image from "next/image";
import clsx from "classnames";
import { v4 as uuid } from "uuid";
// Material ui
import { Box, Divider, Slide, Grid, Fade } from "@material-ui/core";

// Local
import { SectionContainer } from "@local/src/components/hoc";

// Component
import data from "./data.json";
import useStyles from "./techStack.style";
import { useOnScreen } from "@local/src/hooks/useOnScreen";
import { SectionTitle } from "../../collections/text";
import { Paragraph } from "../../collections/text";
import { SubSectionTitle } from "../../collections/text";
import { HighLightText } from "../../collections/text";

const TechStack = (props) => {
  const styles = useStyles();
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
          <SectionTitle variant='h4' gutterBottom>
            Tech stack
          </SectionTitle>
          <Box className={clsx(styles.section, styles.slideAnim)}>
            {data[0].map((item, index) => (
              <Slide
                key={uuid()}
                in={visible}
                direction='left'
                timeout={index * 300}
              >
                <Box
                  className={clsx(styles.frameworkContainer, {
                    [styles.animWaveLeft]: index % 2 === 0,
                    [styles.animWaveRight]: index % 2 !== 0,
                  })}
                >
                  <Image
                    alt={item.title + " icon"}
                    width={20}
                    height={20}
                    src={item.link}
                  />
                  <HighLightText gutterBottom> {item.name} </HighLightText>
                </Box>
              </Slide>
            ))}
          </Box>
        </Grid>

        {data.slice(1).map((item, index) => (
          <Fade key={item.title} in={visible} timeout={index * 600}>
            <Box>
              <Divider className={styles.divider} />
              <Grid
                container
                direction='column'
                alignItems='flex-start'
                className={styles.section}
              >
                <Image
                  alt={item.title + " Image"}
                  src={item.icon}
                  width={60}
                  height={60}
                />
                <SubSectionTitle gutterBottom>{item.title}</SubSectionTitle>
                <Paragraph className={styles.content}>{item.content}</Paragraph>
              </Grid>
            </Box>
          </Fade>
        ))}
      </Grid>
    </SectionContainer>
  );
};

export default TechStack;
