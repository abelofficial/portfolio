import React from "react";
import { motion } from "framer-motion";
import routeAnim from "@styles/routeAnimation.json";
import staticData from "@static/timeLineData.json";
import Timeline from "@components/Timeline";
import Specialty from "@components/Specialty";

const Index = ({ data }) => {
  return (
    <motion.div variants={routeAnim.stagger}>
      <motion.div variants={routeAnim.fadeInUp}>
        <Specialty />
      </motion.div>
      <motion.div variants={routeAnim.fadeInUp}>
        <Timeline title='Work Experience' data={data.experience} />
      </motion.div>
      <motion.div variants={routeAnim.fadeInUp}>
        <Timeline title='Education' data={data.education} />
      </motion.div>
    </motion.div>
  );
};

export async function getStaticProps() {
  return {
    props: { data: staticData }, // will be passed to the page component as props
  };
}

export default Index;
