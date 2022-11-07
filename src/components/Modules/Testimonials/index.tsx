import Slideshow from "@components/Molecule/Slideshow";
import InfoContainer from "@components/Molecule/InfoContainer";
import { Grid, Title } from "@mantine/core";
import useStyles from "./style";

const Testimonials = ({ data, title }) => {
  const { classes } = useStyles();

  return (
    <InfoContainer>
      <Title order={4} pb='xs' color='dimmed'>
        {title}
      </Title>
      <Slideshow auto duration={12000}>
        {data.map((t) => (
          <Grid align='center' justify='center' key={t.name}>
            <p className={classes.text}>{`"${t.text}"`}</p>
            <p className={classes.strongText}> {t.name}</p> {t.position} at
            <span className={classes.highlightedText}> {t.workPlace} </span>
          </Grid>
        ))}
      </Slideshow>
    </InfoContainer>
  );
};

export default Testimonials;
