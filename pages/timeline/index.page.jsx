// Core
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";

// Material
import { Box } from "@mui/material";

// Local
import data from "@local-static/timeLineData.json";
import TimeLine from "@local-components/sections/TimeLine";
import routeAnim from "@local-styles/routeAnimation.json";

export default function Education() {
  return (
    <Box>
      <NextSeo title='Abel Sintaro - Timeline' />
      <motion.div exit={{ opacity: 0 }} initial='initial' animate='animate'>
        <motion.div variants={routeAnim.stagger}>
          <motion.div variants={routeAnim.fadeInUp}>
            <TimeLine title='Work Experience' data={data.experience} />
          </motion.div>
          <motion.div variants={routeAnim.fadeInUp}>
            <TimeLine title='Education' data={data.education} />
          </motion.div>
        </motion.div>
      </motion.div>
    </Box>
  );
}
