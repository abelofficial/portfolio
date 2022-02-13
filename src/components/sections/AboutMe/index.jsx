// Core
import Image from "next/image";
import clsx from "classnames";
import Carousel from "react-material-ui-carousel";
import { v4 as uuid } from "uuid";
// Material ui
import { Box, Grid, useTheme } from "@mui/material";

// Local
import { SectionContainer } from "@local-components/hoc";
import data from "@local-static/aboutMeData.json";

// Component style
import useStyles from "./style";
import { Paragraph, Title } from "@local-components/collections/text";

const AboutMe = (props) => {
  const theme = useTheme();
  const styles = useStyles(theme)();
  const dataList = data;

  return (
    <SectionContainer mb={1} p={0}>
      <Grid container direction='row' justifyContent='space-around'>
        <Grid item xs={9} className={styles.section} component={Box} p={1}>
          <Carousel
            autoPlay
            animation='fade'
            interval={10000}
            indicators={false}
            navButtonsAlwaysInvisible={true}
          >
            {data.map((item) => (
              <Box key={uuid()}>
                <Title gutterBottom> {item.title} </Title>
                <Paragraph variant='body1'>{item.description}</Paragraph>
              </Box>
            ))}
          </Carousel>
        </Grid>

        <Grid item xs={3} className={clsx(styles.section, styles.animSection)}>
          <Carousel
            autoPlay
            animation='fade'
            interval={15000}
            indicators={false}
            navButtonsAlwaysInvisible={true}
            className={styles.imageContainer}
          >
            {data.map((item) => (
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
