import React from "react";
import { motion } from "framer-motion";
import routeAnim from "@styles/routeAnimation.json";
import ComingSoon from "@components/Molecule/ComingSoon";
import Layout from "@components/Modules/Layout";
import { BlogPageMetadata } from "@components/Atoms/Metadata";

const Index = () => {
  return (
    <>
      <BlogPageMetadata />
      <Layout sidebar={<></>}>
        <motion.div variants={routeAnim.stagger}>
          <motion.div variants={routeAnim.fadeInUp}>
            <ComingSoon />
          </motion.div>
        </motion.div>
      </Layout>
    </>
  );
};

export default Index;
