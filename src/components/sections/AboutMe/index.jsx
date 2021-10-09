// Core
import Image from "next/image";
import clsx from "classnames";
import Carousel from "react-material-ui-carousel";
import { v4 as uuid } from "uuid";
// Material ui
import { Box, Grid } from "@material-ui/core";

// Local
import { SectionContainer } from "@local/src/components/hoc";
import data from "./data.json";

// Component style
import useStyles from "./about.style";
import { Paragraph, Title } from "../../collections/text";

const AboutMe = (props) => {
  const styles = useStyles();
  const dataList = data;
  return (
    <SectionContainer component={Grid} container justifyContent='space-around'>
      <Grid container direction='row'>
        <Grid
          item
          xs={8}
          className={styles.section}
          component={Box}
          p={2}
          height='9rem'
        >
          <Carousel
            autoPlay
            animation='fade'
            timeout={600}
            interval={5000}
            indicators={false}
            className={styles.textSlideShow}
          >
            {dataList.map((item) => (
              <Box key={uuid()}>
                <Title gutterBottom> {item.title} </Title>
                <Paragraph variant='body1' className={styles.info}>
                  {item.description}
                </Paragraph>
              </Box>
            ))}
          </Carousel>
        </Grid>

        <Grid item xs={3} className={clsx(styles.section, styles.animSection)}>
          <Carousel
            autoPlay
            animation='fade'
            timeout={600}
            interval={15000}
            indicators={false}
            ind
            className={styles.imageContainer}
          >
            {dataList.map((item) => (
              <Image
                key={uuid()}
                alt='AboutMe image'
                src={item.image}
                width={100}
                height={170}
                layout='intrinsic'
                className={styles.image}
              />
            ))}
          </Carousel>
        </Grid>
      </Grid>
    </SectionContainer>
  );
};

export default AboutMe;
