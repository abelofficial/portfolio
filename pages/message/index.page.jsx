// Core
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";

// Material
import { Box } from "@material-ui/core";

// Local
import ChatBox from "@local/src/components/sections/ChatBox";
import routeAnim from "@local/src/assets/routeAnimation.json";

// Style
import useStyle from "./index.style";

export default function Message() {
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
            <ChatBox />
          </motion.div>
        </motion.div>
      </motion.div>
    </Box>
  );
}
