// Core
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";

// Material
import { Box } from "@material-ui/core";

// Local
import { SectionContainer } from "@local/src/components/hoc";
import routeAnim from "@local/src/assets/routeAnimation.json";

// Style
import useStyle from "./index.style";
import { ComingSoon } from "@local/src/components/collections/text";

export default function Blog() {
  const styles = useStyle();

  return (
    <Box>
      <NextSeo title='Abel Sintaro - Blog' />

      <motion.div exit={{ opacity: 0 }} initial='initial' animate='animate'>
        <motion.div variants={routeAnim.stagger}>
          <motion.div variants={routeAnim.fadeInUp}>
            <SectionContainer>
              <ComingSoon title='Blog' />
            </SectionContainer>
          </motion.div>
        </motion.div>
      </motion.div>
    </Box>
  );
}
