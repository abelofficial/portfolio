import BlogTopic from "@components/Modules/BlogTopic";
import { Grid, Pagination } from "@mantine/core";
import useStyles from "./style";
import { IBlogResponse } from "@src/types";

export interface BlogTopicsListProps {
  data: IBlogResponse;
}

const ITEMS_PER_PAGE = 5;

const BlogTopicsList = ({ data }: BlogTopicsListProps) => {
  const { classes } = useStyles();
  return (
    <Grid align='center'>
      <Grid.Col className={classes.paginationContainer}>
        <Pagination
          defaultValue={1}
          total={Math.round(data.allBlogs.length / ITEMS_PER_PAGE + 0.9)}
          boundaries={ITEMS_PER_PAGE}
          color='yellow'
        />
      </Grid.Col>
      <Grid.Col>
        <Grid justify='space-between' align='center'>
          {data.allBlogs.map((b) => (
            <Grid.Col xs={6} key={b.id}>
              <BlogTopic
                id={b.id}
                title={b.title}
                description={b.description}
                image={b.coverImage}
                readArticle={b.readArticle}
              />
            </Grid.Col>
          ))}
        </Grid>
      </Grid.Col>
    </Grid>
  );
};

export default BlogTopicsList;
