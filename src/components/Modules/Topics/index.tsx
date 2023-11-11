import { Badge, Grid, Title } from "@mantine/core";
import useStyles from "./style";

export interface TopicsProps {
  topicTitles: string[];
}

export const Topics = ({ topicTitles }: TopicsProps) => {
  const { classes } = useStyles();
  return (
    <Grid className={classes.container}>
      <Grid.Col>
        <Title order={4}>Topic</Title>
      </Grid.Col>
      <Grid.Col>
        {topicTitles.map((t) => (
          <Badge key={t} color='pink' variant='light' mx={5} my={5}>
            {t}
          </Badge>
        ))}
      </Grid.Col>
    </Grid>
  );
};
