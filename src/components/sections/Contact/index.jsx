// Core
import Image from "next/image";
import { v4 as uuid } from "uuid";
// Material ui
import { Box, Grid } from "@mui/material";

// Local
import { SectionContainer } from "@local-components/hoc";
import data from "@local-static/contactData.json";

// Component style
import useStyles from "./style";
import { HighLightText } from "@local-components/collections/text";
import { SubSectionTitle } from "@local-components/collections/text";
import { useTheme } from "@mui/styles";

const Contact = (props) => {
  const theme = useTheme();
  const styles = useStyles(theme)();

  return (
    <SectionContainer
      component={Box}
      p={1}
      width='100%'
      direction='column'
      justifyContent='space-between'
    >
      <SubSectionTitle>Connect with me</SubSectionTitle>
      <Grid container direction='row' justifyContent='space-between' p={2}>
        {data.map((item) => (
          <Box
            key={uuid()}
            display='flex'
            flexDirection='column'
            alignItems='center'
            component={Grid}
            item
            xs={2}
            className={styles.contactContainer}
          >
            <a
              target='_blank'
              rel='noreferrer'
              href={item.address}
              className={styles.contactLink}
            >
              <Image
                alt='Github Icon'
                src={item.icon}
                height={35}
                width={35}
                className={styles.icon}
              />
              <HighLightText> {item.name} </HighLightText>
            </a>
          </Box>
        ))}
      </Grid>
    </SectionContainer>
  );
};

export default Contact;
