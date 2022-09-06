import React from "react";
import { motion } from "framer-motion";
import routeAnim from "@styles/routeAnimation.json";
import ComingSoon from "@components/ComingSoon";

const Index = () => {
  return (
    <motion.div variants={routeAnim.stagger}>
      <motion.div variants={routeAnim.fadeInUp}>
        <ComingSoon />
      </motion.div>
    </motion.div>
  );
};

export default Index;
