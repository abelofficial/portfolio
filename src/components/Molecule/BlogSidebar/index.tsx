import { Box, TextInput } from "@mantine/core";
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
    </Box>
  );
};

export default BlogSidebar;
