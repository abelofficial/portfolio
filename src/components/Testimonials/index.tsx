import Slideshow from "@components/Slideshow";
import InfoContainer from "@hoc/InfoContainer";
import { Grid, Title } from "@mantine/core";
import useStyles from "./style";
import data from "@static/testimonialsData.json";

const Testimonials = () => {
  const { classes } = useStyles();

  return (
    <InfoContainer>
      <Title order={4} pb='xs'>
        Testimonials
      </Title>
      <Slideshow auto duration={12000}>
        {data.map((t) => (
          <Grid align='center' justify='center' key={t.name}>
            <p className={classes.text}>{t.text}</p>
            <p className={classes.strongText}> {t.name}</p> {t.position} at
            <span className={classes.highlightedText}> {t.workPlace} </span>
          </Grid>
        ))}
      </Slideshow>
    </InfoContainer>
  );
};

export default Testimonials;
