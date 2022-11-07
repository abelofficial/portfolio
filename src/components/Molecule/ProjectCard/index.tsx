import { Box, Grid, Title } from "@mantine/core";
import useStyles from "./style";
import { IProjectModule } from "@src/types";
import { Image } from "react-datocms";

export interface ProjectCardProps {
  data: IProjectModule;
}

const Index = ({ data }: ProjectCardProps) => {
  const { classes } = useStyles();

  return (
    <Grid className={classes.container}>
      <Grid.Col xs={7}>
        <Image data={data.medias[0].responsiveImage} />
      </Grid.Col>
      <Grid.Col xs={5}>
        <Title order={3} pb='xs'>
          {data.title}
        </Title>
        <p className={classes.text}>{data.description}</p>
        <Title order={4}>Tech stack</Title>
        <Box className={classes.chipList}>
          {data.techstack.split(",").map((t) => (
            <Box key={t} className={classes.chip}>
              <p>{t}</p>
            </Box>
          ))}
        </Box>
      </Grid.Col>
    </Grid>
  );
};

export default Index;
