import React from "react";
import { motion } from "framer-motion";
import routeAnim from "@styles/routeAnimation.json";
import Layout from "@components/Modules/Layout";
import { BlogPageMetadata } from "@components/Atoms/Metadata";
import BlogTopicsList from "@components/Molecule/BlogTopicsList";
import BlogSidebar from "@components/Molecule/BlogSidebar";
import { blogQuery } from "@utils/DatoQueries";
import { IBlogResponse } from "@src/types";
import { request } from "@services/DatoCMS";

const BLOGPAGE_QUERY = `query BlogModule {
    ${blogQuery}
  }
`;

interface IBlogProps {
  data: IBlogResponse;
}

const Index = ({ data }: IBlogProps) => {
  return (
    <>
      <BlogPageMetadata />
      <Layout sidebar={<BlogSidebar />}>
        <motion.div variants={routeAnim.stagger}>
          <motion.div variants={routeAnim.fadeInUp}>
            <BlogTopicsList data={data} />
          </motion.div>
        </motion.div>
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const data: IBlogResponse = await request<IBlogResponse>({
    query: BLOGPAGE_QUERY,
    variables: { limit: 10 },
  });
  return {
    props: { data },
    revalidate: 60,
  };
}

export default Index;
