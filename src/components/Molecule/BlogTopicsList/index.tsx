import BlogTopic from "@components/Modules/BlogTopic";
import { Box, Grid, Pagination } from "@mantine/core";
import useStyles from "./style";

export interface BlogTopicsListProps {
  data: Array<{
    id: number;
    title: string;
    description: string;
  }>;
}

const BlogTopicsList = ({ data }: BlogTopicsListProps) => {
  const { classes } = useStyles();
  return (
    <Box className={classes.container}>
      <Pagination total={10} boundaries={1} initialPage={10} color='yellow' />
      <Grid justify='space-between' align='center'>
        {data.map((b) => (
          <Grid.Col xs={5} key={b.id}>
            <BlogTopic id={b.id} title={b.title} description={b.description} />
          </Grid.Col>
        ))}
      </Grid>
    </Box>
  );
};

export default BlogTopicsList;
