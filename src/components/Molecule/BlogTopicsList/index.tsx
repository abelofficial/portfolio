import BlogTopic from "@components/Modules/BlogTopic";
import { Box, Grid, Pagination } from "@mantine/core";
import useStyles from "./style";
import { IBlogResponse } from "@src/types";

export interface BlogTopicsListProps {
  data: IBlogResponse;
}

const ITEMS_PER_PAGE = 5;

const BlogTopicsList = ({ data }: BlogTopicsListProps) => {
  const { classes } = useStyles();
  return (
    <Box className={classes.container}>
      <Pagination
        total={data.allBlogs.length / ITEMS_PER_PAGE + 0.9}
        boundaries={ITEMS_PER_PAGE}
        color='yellow'
      />
      <Grid justify='space-between' align='center'>
        {data.allBlogs.map((b) => (
          <Grid.Col xs={5} key={b.id}>
            <BlogTopic
              id={b.id}
              title={b.title}
              description={b.description}
              image={b.coverImage}
            />
          </Grid.Col>
        ))}
      </Grid>
    </Box>
  );
};

export default BlogTopicsList;
