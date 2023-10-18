import Layout from "@components/Modules/Layout";
import { Title, Text } from "@mantine/core";
import { GetStaticPaths, GetStaticProps } from "next";
import Lottie from "react-lottie-player";
import sampleUserData from "./sample-data.json";
import * as animData from "../../../public/animations/under-construction.json";
import useStyles from "./style";

export interface BlogDetailPageProps {
  data: {
    id: number;
    title: string;
    description: string;
  };
}

const BlogDetailPage = ({ data }: BlogDetailPageProps) => {
  const { classes, theme } = useStyles();

  if (!data) return <></>;

  const { id, title, description } = data;

  console.log(title);
  return (
    <Layout
      sidebar={
        <>
          <Lottie loop play animationData={animData} className={classes.anim} />
        </>
      }
    >
      <>
        <Title>{title}</Title>
        <Text>{description}</Text>
      </>
    </Layout>
  );
};

export default BlogDetailPage;

export const getStaticPaths: GetStaticPaths = async () => {
  // Get the paths we want to pre-render based on users
  const paths = sampleUserData.map((blog) => ({
    params: { id: blog.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = params?.id;
    const data = sampleUserData.find((data) => data.id === Number(id));
    // By returning { props: item }, the StaticPropsDetail component
    // will receive `item` as a prop at build time

    return { props: { data } };
  } catch (err: any) {
    return { props: { errors: err.message } };
  }
};