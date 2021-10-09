// Core
import Image from 'next/image';
import clsx from 'classnames';
import Carousel from 'react-material-ui-carousel';
import { v4 as uuid } from 'uuid';
// Material ui
import { Box, Grid, Icon, IconButton, Typography } from '@material-ui/core';

// Local
import { SectionContainer } from '@local-components/collections/hoc';
import data from './data.json';

// Component style
import useStyles from './contact.style';
import { HighLightText, Paragraph, Title } from '../../collections/text';
import { SubSectionTitle } from '../../collections/text';
import { SectionTitle } from '../../collections/text';

const Contact = (props) => {
  const styles = useStyles();
  const dataList = data;
  return (
    <SectionContainer
      component={Box}
      width="100%"
      direction="column"
      justifyContent="space-around"
    >
      <SectionTitle className={styles.title}> Connect with me </SectionTitle>
      <Grid container direction="row" justify="space-between">
        {Object.keys(data).map((item) => (
          <Box
            key={uuid()}
            display="flex"
            flexDirection="column"
            className={styles.contactLink}
          >
            <Image
              alt="Github Icon"
              src={data[item]}
              height={35}
              width={35}
              className={styles.icon}
            />
            <HighLightText> {item} </HighLightText>
          </Box>
        ))}
      </Grid>
    </SectionContainer>
  );
};

export default Contact;
