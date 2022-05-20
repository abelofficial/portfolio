// Core

// Material
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { NextSeo } from "next-seo";

// Local
import TechStack from "@local-components/sections/TechStack";
import GitHubCalendar from "@local-components/sections/GithubActivities";
import routeAnim from "@local-styles/routeAnimation.json";
import Projects from "@local-components/sections/Projects";

export default function Home() {
  return (
    <Box>
      <NextSeo title='Abel Sintaro - Home' />
      <motion.div exit={{ opacity: 0 }} initial='initial' animate='animate'>
        <motion.div variants={routeAnim.stagger}>
          <motion.div variants={routeAnim.fadeInUp}>
            <GitHubCalendar />
          </motion.div>
          <motion.div variants={routeAnim.fadeInUp}>
            <TechStack />
          </motion.div>
          <motion.div variants={routeAnim.fadeInUp}>
            <Projects />
          </motion.div>
        </motion.div>
      </motion.div>
    </Box>
  );
}
