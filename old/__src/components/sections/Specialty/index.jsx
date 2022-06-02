// Core
import Image from "next/image";
// Material ui
import { Box, Divider, Grid, Fade, useTheme } from "@mui/material";

// Local
import { SectionContainer } from "@local-components/hoc";

// Component
import data from "@local-static/specialtyData.json";
import useStyles from "./style";
import { useOnScreen } from "@local-components/hooks/useOnScreen";
import { Paragraph, SectionTitle } from "@local-components/collections/text";
import { SubSectionTitle } from "@local-components/collections/text";

const Specialty = (props) => {
  const theme = useTheme();
  const styles = useStyles(theme)();
  const [setRef, visible] = useOnScreen({ threshold: "0.1" });

  return (
    <SectionContainer mt={2} mb={4}>
      <Grid container ref={setRef} className={styles.container}>
        <SectionTitle>Specialty</SectionTitle>
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
                <Image
                  alt={item.title + " Image"}
                  src={item.icon}
                  width={60}
                  height={60}
                />
                <SubSectionTitle>{item.title}</SubSectionTitle>
                <Paragraph>{item.content}</Paragraph>
              </Grid>
            </Box>
          </Fade>
        ))}
      </Grid>
    </SectionContainer>
  );
};

export default Specialty;
