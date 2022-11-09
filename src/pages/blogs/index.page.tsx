import React from "react";
import { motion } from "framer-motion";
import routeAnim from "@styles/routeAnimation.json";
import Layout from "@components/Modules/Layout";
import { BlogPageMetadata } from "@components/Atoms/Metadata";
import BlogTopicsList from "@components/Molecule/BlogTopicsList";
import BlogSidebar from "@components/Molecule/BlogSidebar";
import sampleData from "./sample-data.json";

const Index = () => {
  return (
    <>
      <BlogPageMetadata />
      <Layout sidebar={<BlogSidebar />}>
        <motion.div variants={routeAnim.stagger}>
          <motion.div variants={routeAnim.fadeInUp}>
            <BlogTopicsList data={sampleData} />
          </motion.div>
        </motion.div>
      </Layout>
    </>
  );
};

export default Index;
