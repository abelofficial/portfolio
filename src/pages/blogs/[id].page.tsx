import Layout from "@components/Modules/Layout";
import { GetStaticPaths, GetStaticProps } from "next";
import Lottie from "react-lottie-player";
import * as animData from "../../../public/animations/under-construction.json";
import useStyles from "./style";
import { IBlogContent, IBlogResponse } from "@src/types";
import { blogQuery, singleBlogQuery } from "@utils/DatoQueries";
import { request } from "@services/DatoCMS";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { BackIcon } from "@components/Atoms/Icons";
import { useRouter } from "next/router";
import { Code } from "@mantine/core";

export interface BlogDetailPageProps {
  data: IBlogContent;
}

const BLOGPAGE_QUERY = (id: string) => `query BlogModule {
    ${singleBlogQuery(id)}
  }
`;

const ALL_BLOGPAGE_QUERY = `query BlogModule {
  ${blogQuery}
}
`;

const BlogDetailPage = ({ data }: BlogDetailPageProps) => {
  const { classes } = useStyles();
  const router = useRouter();
  if (!data) return <></>;

  const { content } = data;

  return (
    <Layout
      sidebar={
        <>
          <Lottie loop play animationData={animData} className={classes.anim} />
        </>
      }
    >
      <>
        <BackIcon onClick={() => router.back()} />
        <MDXRemote {...content} components={{ code: Code }} />
      </>
    </Layout>
  );
};

export default BlogDetailPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const data: IBlogResponse = await request<IBlogResponse>({
    query: ALL_BLOGPAGE_QUERY,
  });

  const paths = data.allBlogs.map((blog) => ({
    params: { id: blog.id.toString() },
  }));

  return { paths, fallback: false };
};

interface StaticPathParamProp {
  params: {
    id: string;
  };
}
export const getStaticProps: GetStaticProps = async ({
  params,
}: StaticPathParamProp) => {
  const response: IBlogResponse = await request<IBlogResponse>({
    query: BLOGPAGE_QUERY(params.id),
    variables: { limit: 10 },
  });

  const result = response.allBlogs.find((b) => b.id == params.id);
  const { content, ...rest } = result;
  const textContent = await serialize(result.content);

  return {
    props: { data: { ...rest, content: textContent } },
    revalidate: 60,
  };
};
