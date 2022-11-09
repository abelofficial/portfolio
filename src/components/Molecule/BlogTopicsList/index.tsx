import BlogTopic from "@components/Modules/BlogTopic";
import { Box, Grid, Pagination } from "@mantine/core";
import useStyles from "./style";

const BlogTopicsList = () => {
  const { classes } = useStyles();
  return (
    <Box className={classes.container}>
      <Pagination total={10} boundaries={1} initialPage={10} color='yellow' />
      <Grid justify='space-between' align='center'>
        <Grid.Col xs={5}>
          <BlogTopic />
        </Grid.Col>
        <Grid.Col xs={5}>
          <BlogTopic />
        </Grid.Col>
        <Grid.Col xs={5}>
          <BlogTopic />
        </Grid.Col>
        <Grid.Col xs={5}>
          <BlogTopic />
        </Grid.Col>
      </Grid>
    </Box>
  );
};

export default BlogTopicsList;
