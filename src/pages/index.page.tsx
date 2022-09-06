import React from "react";
import { motion } from "framer-motion";
import routeAnim from "@styles/routeAnimation.json";
import TechStack from "@components/TechStack";
import GithubSummery from "@components/GithubSummery";

const Index = () => {
  return (
    <motion.div variants={routeAnim.stagger}>
      <motion.div variants={routeAnim.fadeInUp}>
        <GithubSummery />
      </motion.div>
      <motion.div variants={routeAnim.fadeInUp}>
        <TechStack />
      </motion.div>
    </motion.div>
  );
};

export default Index;
