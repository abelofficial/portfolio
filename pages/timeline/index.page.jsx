// Core
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";

// Material
import { Box } from "@material-ui/core";

// Local
import data from "./data.json";
import TimeLine from "@local/src/components/sections/TimeLine";
import routeAnim from "@local/src/assets/routeAnimation.json";

// Style
import useStyle from "./index.style";

export default function Education() {
  const styles = useStyle();

  return (
    <Box>
      <NextSeo
        title='Nextjs With Material Ui'
        canonical='http://localhost/3000'
        openGraph={{
          title: "Nextjs With Material Ui",
          url: "http://localhost/3000",
        }}
      />
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
