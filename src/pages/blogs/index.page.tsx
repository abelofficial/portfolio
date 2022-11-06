import React from "react";
import { motion } from "framer-motion";
import routeAnim from "@styles/routeAnimation.json";
import ComingSoon from "@components/ComingSoon";
import Layout from "@hoc/Layout";

const Index = () => {
  return (
    <Layout sidebar={<></>}>
      <motion.div variants={routeAnim.stagger}>
        <motion.div variants={routeAnim.fadeInUp}>
          <ComingSoon />
        </motion.div>
      </motion.div>
    </Layout>
  );
};

export default Index;
