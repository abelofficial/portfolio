// Core
import Image from "next/image";
// Material ui
import { Box, Divider, Grid, Fade } from "@mui/material";
import { useTheme } from "@mui/styles";

// Local
import { SectionContainer } from "@local/src/components/hoc";

// Component
import data from "./data.json";
import useStyles from "./specialty.style";
import { useOnScreen } from "@local/src/hooks/useOnScreen";
import { Paragraph, SectionTitle } from "../../collections/text";
import { SubSectionTitle } from "../../collections/text";

const Specialty = (props) => {
  const theme = useTheme();
  const styles = useStyles(theme)();
  const [setRef, visible] = useOnScreen({ threshold: "0.1" });

  return (
    <SectionContainer mt={2}>
      <Grid
        container
        justifyContent='space-around'
        ref={setRef}
        className={styles.container}
      >
        <SectionTitle gutterBottom>What I do ?</SectionTitle>
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

export default Specialty;
