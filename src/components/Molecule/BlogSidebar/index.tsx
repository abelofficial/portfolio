import { Box } from "@mantine/core";
import useStyles from "./style";
import { Topics } from "@components/Modules/Topics";
import { IBlogResponse } from "@src/types";
import { BlogCTA } from "@components/Modules/BlogCTA";

export interface BlogSidebarProps {
  data: IBlogResponse;
}

export const BlogSidebar = ({ data }: BlogSidebarProps) => {
  const { classes } = useStyles();

  const getUniqueTopics = () => {
    const topicsMatrix = data.allBlogs.map((b) => b.topics.split(","));
    const result: Array<string> = new Array<string>();

    for (let i = 0; i < topicsMatrix.length; i++) {
      topicsMatrix[i].forEach((e) => {
        if (result.includes(e)) return;
        result.push(e);
      });
    }

    return result;
  };

  return (
    <Box className={classes.container}>
      <Topics topicTitles={getUniqueTopics()} />
      <BlogCTA blogs={data.allBlogs} blogCTA={data.allBlogsCtas} />
    </Box>
  );
};
