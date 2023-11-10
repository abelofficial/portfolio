import BlogTopic from "@components/Modules/BlogTopic";
import { Grid, Pagination } from "@mantine/core";
import useStyles from "./style";
import { IBlogResponse } from "@src/types";
import { useState } from "react";

export interface BlogTopicsListProps {
  data: IBlogResponse;
}

const ITEMS_PER_PAGE = 4;

const BlogTopicsList = ({ data }: BlogTopicsListProps) => {
  const { classes } = useStyles();
  const [page, setPage] = useState(1);

  const currentPageBlogs = (page: number) =>
    data.allBlogs.slice(
      (page - 1) * ITEMS_PER_PAGE,
      (page - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
    );

  return (
    <Grid align='center'>
      <Grid.Col className={classes.paginationContainer}>
        <Pagination
          defaultValue={page}
          total={Math.round(data.allBlogs.length / ITEMS_PER_PAGE + 0.9)}
          boundaries={ITEMS_PER_PAGE}
          color='yellow'
          onChange={(p) => setPage(p)}
        />
      </Grid.Col>
      <Grid.Col>
        <Grid justify='space-between' align='center'>
          {currentPageBlogs(page).map((b) => (
            <Grid.Col xs={6} key={b.id}>
              <BlogTopic
                id={b.id}
                title={b.title}
                description={b.description}
                image={b.coverImage}
                readArticle={b.readArticle}
                topic={b.topics}
              />
            </Grid.Col>
          ))}
        </Grid>
      </Grid.Col>
    </Grid>
  );
};

export default BlogTopicsList;
