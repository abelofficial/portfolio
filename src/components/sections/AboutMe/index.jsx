// Core
import clsx from "classnames";
import { v4 as uuid } from "uuid";
// Material ui
import { Box, Grid, useTheme } from "@mui/material";

// Local
import { SectionContainer } from "@local-components/hoc";
import data from "@local-static/aboutMeData.json";

// Component style
import useStyles from "./style";
import { Title, Paragraph } from "@local-components/collections/text";
import Avatar from "@local-components/collections/svgs/avatar";

const AboutMe = (props) => {
  const theme = useTheme();
  const styles = useStyles(theme)();
  const dataList = data;

  return (
    <SectionContainer mb={1} p={0}>
      <Grid container direction='row' justifyContent='space-around'>
        <Grid item xs={8} className={styles.section} component={Box} p={1}>
          <Box key={uuid()}>
            <Title gutterBottom> {data[0].title} </Title>
            <Paragraph>{data[0].description}</Paragraph>
          </Box>
        </Grid>

        <Grid item xs={3} className={clsx(styles.section, styles.animSection)}>
          <Avatar alt='AboutMe image' className={styles.image} />
        </Grid>
      </Grid>
    </SectionContainer>
  );
};

export default AboutMe;
