import { Box, TextInput } from "@mantine/core";
import Lottie from "react-lottie-player";
import * as animData from "../../../../public/animations/under-construction.json";
import useStyles from "./style";
import { Topics } from "@components/Modules/Topics";
import { IBlogResponse } from "@src/types";

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
      <TextInput
        placeholder='Search for blog'
        radius='xl'
        className={classes.input}
      />
      <Topics topicTitles={getUniqueTopics()} />
      <Lottie loop play animationData={animData} className={classes.anim} />
    </Box>
  );
};
