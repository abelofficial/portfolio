import { Card, Group, Badge, Button, Text } from "@mantine/core";
import Image from "next/image";
import { useRouter } from "next/router";
import useStyles from "./style";
import { IBlogImageResponse } from "@src/types";

export interface BlogTopic {
  id: string;
  title: string;
  description: string;
  readArticle: string;
  topic: string;
  image: IBlogImageResponse;
}
const BlogTopic = ({
  id,
  title,
  description,
  image,
  readArticle,
  topic: topics,
}: BlogTopic) => {
  const { classes } = useStyles();
  const router = useRouter();

  return (
    <Card shadow='sm' p='lg' radius='md' withBorder className={classes.card}>
      <Card.Section>
        <Image
          src={image.responsiveImage.src}
          width={400}
          height={160}
          alt={image.responsiveImage.title}
          layout='responsive'
        />
      </Card.Section>
      <Group pt='md'>
        <Text weight={500}>{title}</Text>
      </Group>
      <Card.Section p={10}>
        <Text size='sm' color='dimmed'>
          {description}
        </Text>
      </Card.Section>
      <Group position='left' py='xs'>
        {topics.split(",").map((t) => (
          <Badge key={t} color='pink' variant='light'>
            {t}
          </Badge>
        ))}
      </Group>
      <Button
        className={classes.button}
        fullWidth
        variant='outline'
        onClick={() => router.push(`blogs/${id}`)}
      >
        {readArticle}
      </Button>
    </Card>
  );
};

export default BlogTopic;
