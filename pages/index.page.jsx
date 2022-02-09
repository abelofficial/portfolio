// Core

// Material
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { NextSeo } from "next-seo";

// Local
import TechStack from "@local/src/components/sections/TechStack";
// import Specialty from "@local/src/components/sections/Specialty";
import GitHubCalendar from "@local/src/components/sections/GithubActivities";
import routeAnim from "@local/src/assets/routeAnimation.json";

// Style
import useStyle from "./index.style";

export default function Home() {
  const styles = useStyle();

  return (
    <Box>
      <Typography> Home Page</Typography>
      <NextSeo title='Abel Sintaro - Home' />
      <motion.div exit={{ opacity: 0 }} initial='initial' animate='animate'>
        <motion.div variants={routeAnim.stagger}>
          <motion.div variants={routeAnim.fadeInUp}>
            <TechStack />
          </motion.div>
          <motion.div variants={routeAnim.fadeInUp}>
            <GitHubCalendar />
          </motion.div>
          <motion.div id='landing-services' variants={routeAnim.fadeInUp}>
            {/* <Specialty /> */}
            <h1>Section</h1>
          </motion.div>
        </motion.div>
      </motion.div>
    </Box>
  );
}
