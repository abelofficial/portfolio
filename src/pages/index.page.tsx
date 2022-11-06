import React from "react";
import { motion } from "framer-motion";
import routeAnim from "@styles/routeAnimation.json";
import TechStack from "@components/TechStack";
import GithubSummery from "@components/GithubSummery";
import Projects from "@components/Projects";
import { request } from "@services/DatoCMS";
import Layout from "@hoc/Layout";
import Contact from "@components/Contact";
import Testimonials from "@components/Testimonials";

const HOMEPAGE_QUERY = `query MyQuery {
  allContacts {
    icon {
      url
      title
      responsiveImage {
        alt
        aspectRatio
        base64
        bgColor
        height
        sizes
        src
        srcSet
        title
        webpSrcSet
        width
      }
    }
    title
    id
    updatedAt
  }
  allTestimonials {
    id
    name
    text(markdown: false)
    updatedAt
    workPlace
    workPosition
  }
}
`;

const Index = ({ data }) => {
  return (
    <Layout
      sidebar={
        <>
          <Contact data={data.allContacts} />
          <Testimonials data={data.allTestimonials} />
        </>
      }
    >
      <motion.div variants={routeAnim.stagger}>
        <motion.div variants={routeAnim.fadeInUp}>
          <GithubSummery />
        </motion.div>
        <motion.div variants={routeAnim.fadeInUp}>
          <TechStack />
        </motion.div>
        <motion.div variants={routeAnim.fadeInUp}>
          <Projects />
        </motion.div>
      </motion.div>
    </Layout>
  );
};

export async function getStaticProps() {
  const data = await request({
    query: HOMEPAGE_QUERY,
    variables: { limit: 10 },
  });
  return {
    props: { data },
  };
}

export default Index;
