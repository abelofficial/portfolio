import React from "react";
import { motion } from "framer-motion";
import routeAnim from "@utils/routeAnimation.json";
import GithubActivities from "@components/GithubActivities";
import TechStack from "@components/TechStack";
import Specialty from "@components/Specialty";

const Index = () => {
  return (
    <motion.div variants={routeAnim.stagger}>
      <motion.div variants={routeAnim.fadeInUp}>
        <GithubActivities />
      </motion.div>
      <motion.div variants={routeAnim.fadeInUp}>
        <TechStack />
      </motion.div>
      <motion.div variants={routeAnim.fadeInUp}>
        <Specialty />
      </motion.div>
    </motion.div>
  );
};

export default Index;
