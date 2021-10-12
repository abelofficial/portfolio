// Core
// Material ui
import { Divider, Grid, Fade, Box } from "@material-ui/core";

// Local
import { SectionContainer } from "@local/src/components/hoc";

// Component
import useStyles from "./timeline.style";
import { useOnScreen } from "@local/src/hooks/useOnScreen";
import { HighLightText, Paragraph, SectionTitle } from "../../collections/text";
import { SubSectionTitle } from "../../collections/text";

const TimeLine = ({ title, data, ...restProps }) => {
  const styles = useStyles();
  const [setRef, visible] = useOnScreen({ threshold: "0.1" });

  return (
    <SectionContainer>
      <Grid
        container
        justifyContent='space-around'
        ref={setRef}
        className={styles.container}
        {...restProps}
      >
        <SectionTitle variant='h4' gutterBottom>
          {title}
        </SectionTitle>
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
                <HighLightText gutterBottom>
                  {item.place}, {item.startDate} - {item.endDate}
                </HighLightText>
                <Paragraph className={styles.content}>{item.content}</Paragraph>
              </Grid>
            </Box>
          </Fade>
        ))}
      </Grid>
    </SectionContainer>
  );
};

export default TimeLine;
