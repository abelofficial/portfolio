import React from "react";
import { motion } from "framer-motion";
import routeAnim from "@utils/routeAnimation.json";
import ComingSoon from "@components/ComingSoon";

const Index = ({ data }) => {
  return (
    <motion.div variants={routeAnim.stagger}>
      <motion.div variants={routeAnim.fadeInUp}>
        <ComingSoon />
      </motion.div>
    </motion.div>
  );
};

export default Index;
