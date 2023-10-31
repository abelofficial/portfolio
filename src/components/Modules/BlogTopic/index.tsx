import { Card, Group, Badge, Button, Text } from "@mantine/core";
import Image from "next/image";
import { useRouter } from "next/router";
import useStyles from "./style";
import { IBlogImageResponse } from "@src/types";

export interface BlogTopic {
  id: string;
  title: string;
  description: string;
  image: IBlogImageResponse;
}
const BlogTopic = ({ id, title, description, image }: BlogTopic) => {
  const { classes } = useStyles();
  const router = useRouter();

  return (
    <Card shadow='sm' p='lg' radius='md' withBorder className={classes.card}>
      <Card.Section>
        <Image
          src={image.url}
          width={400}
          height={160}
          alt={image.title}
          layout='responsive'
        />
      </Card.Section>

      <Group position='apart' mt='md' mb='xs'>
        <Text weight={500}>{title}</Text>
        <Badge color='pink' variant='light'>
          AWS
        </Badge>
      </Group>

      <Text size='sm' color='dimmed'>
        {description}
      </Text>

      <Button
        variant='light'
        color='orange'
        fullWidth
        mt='md'
        radius='md'
        onClick={() => router.push(`blogs/${id}`)}
      >
        Explore Articles
      </Button>
    </Card>
  );
};

export default BlogTopic;
