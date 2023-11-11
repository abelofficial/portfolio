import { Grid, Title } from "@mantine/core";
import useStyles from "./style";
import Slideshow from "@components/Molecule/Slideshow";
import BlogTopic from "../BlogTopic";
import { IBlogCTA, IBlogContent } from "@src/types";

export interface TopicsProps {
  blogs: Array<IBlogContent>;
  blogCTA: Array<IBlogCTA>;
}

export const BlogCTA = ({ blogs, blogCTA }: TopicsProps) => {
  const { classes } = useStyles();

  const filteredBlogs = () => {
    const ctaBlogs = blogCTA.map((bc) => ({
      id: bc.blog.id,
      index: bc.sortIndex,
      title: bc.title,
      blog: blogs.filter((b: IBlogContent) => b.id == bc.blog.id)[0],
    }));

    return ctaBlogs.sort(
      (f, s) =>
        Number.parseInt(f.index.toString()) -
        Number.parseInt(s.index.toString())
    );
  };
  return (
    <Slideshow duration={10000} auto>
      {filteredBlogs().map((b) => (
        <Grid key={b.id} className={classes.container}>
          <Grid.Col>
            <Title order={4}>{b.title}</Title>
          </Grid.Col>
          <Grid.Col className={classes.section}>
            <BlogTopic
              id={b.id}
              title={b.blog.title}
              description={b.blog.description}
              image={b.blog.coverImage}
              readArticle={b.blog.readArticle}
              topic={[]}
            />
          </Grid.Col>
        </Grid>
      ))}
    </Slideshow>
  );
};
