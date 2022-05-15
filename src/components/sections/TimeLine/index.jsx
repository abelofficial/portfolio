// Core
// Material ui
import { Divider, Grid, Fade, Box, useTheme } from "@mui/material";
import Image from "next/image";

// Local
import { SectionContainer } from "@local-components/hoc";

// Component
import useStyles from "./style";
import { useOnScreen } from "@local-components/hooks/useOnScreen";
import {
  HighLightText,
  Paragraph,
  SectionTitle,
} from "@local-components/collections/text";
import { SubSectionTitle } from "@local-components/collections/text";

const TimeLine = ({ title, data, ...restProps }) => {
  const theme = useTheme();
  const styles = useStyles(theme)();
  const [setRef, visible] = useOnScreen({ threshold: "0.1" });

  return (
    <SectionContainer mb={3}>
      <Grid
        container
        direction='column'
        ref={setRef}
        className={styles.container}
        {...restProps}
      >
        <SectionTitle gutterBottom>{title}</SectionTitle>
        {data.map((item, index) => (
          <Fade key={item.title} in={visible} timeout={index * 600}>
            <Box>
              <Divider className={styles.divider} />
              <Grid
                container
                direction='column'
                alignItems='flex-start'
                className={styles.section}
              >
                <SubSectionTitle>{item.title}</SubSectionTitle>
                <Box
                  display='flex'
                  flexDirection='row'
                  alignItems='center'
                  justifyContent='space-between'
                >
                  <Image
                    alt='github-profile-image'
                    className={styles.avatarImage}
                    src={item.logo}
                    width={40}
                    height={40}
                  />
                  <Box pl={1}>
                    <HighLightText gutterBottom>
                      {item.place}, {item.startDate} - {item.endDate}
                    </HighLightText>
                    <Paragraph>{item.content}</Paragraph>
                  </Box>
                </Box>
              </Grid>
            </Box>
          </Fade>
        ))}
      </Grid>
    </SectionContainer>
  );
};

export default TimeLine;
