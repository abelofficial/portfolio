import { Card, Group, Badge, Button, Text } from "@mantine/core";
import Image from "next/image";
import useStyles from "./style";

const BlogTopic = () => {
  const { classes } = useStyles();

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
        <Text weight={500}>AWS Cloud Engineering</Text>
        <Badge color='pink' variant='light'>
          AWS
        </Badge>
      </Group>

      <Text size='sm' color='dimmed'>
        With Fjord Tours you can explore more of the magical fjord landscapes
        with tours and activities on and around the fjords of Norway
      </Text>

      <Button variant='light' color='blue' fullWidth mt='md' radius='md'>
        Explore Articles
      </Button>
    </Card>
  );
};

export default BlogTopic;
