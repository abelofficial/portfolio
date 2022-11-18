import { Box, TextInput } from "@mantine/core";
import Lottie from "react-lottie-player";
import * as animData from "../../../../public/animations/under-construction.json";
import useStyles from "./style";

const BlogSidebar = () => {
  const { classes, theme } = useStyles();
  return (
    <Box className={classes.container}>
      <TextInput
        placeholder='Search for blog'
        radius='xl'
        className={classes.input}
      />
      <Lottie loop play animationData={animData} className={classes.anim} />
    </Box>
  );
};

export default BlogSidebar;
