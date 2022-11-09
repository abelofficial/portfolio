import { Card, Group, Badge, Button, Text } from "@mantine/core";
import Image from "next/image";
import { useRouter } from "next/router";
import useStyles from "./style";

export interface BlogTopic {
  id: number;
  title: string;
  description: string;
}
const BlogTopic = ({ id, title, description }: BlogTopic) => {
  const { classes } = useStyles();
  const router = useRouter();

  return (
    <Card shadow='sm' p='lg' radius='md' withBorder className={classes.card}>
      <Card.Section>
        <Image
          src='/images/temp.avif'
          width={400}
          height={160}
          alt='Norway'
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
