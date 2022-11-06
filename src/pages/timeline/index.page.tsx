import React from "react";
import { motion } from "framer-motion";
import routeAnim from "@styles/routeAnimation.json";
import Specialty from "@components/Specialty";
import Layout from "@hoc/Layout";
import Testimonials from "@components/Testimonials";
import {
  contactsQuery,
  educationExperienceQuery,
  testimonialsQuery,
  workExperienceQuery,
} from "@services/DatoQueries";
import { IPageModule } from "@src/types";
import { request } from "@services/DatoCMS";
import Contact from "@components/Contact";
import { Box } from "@mantine/core";
import Timeline from "@components/Timeline";

const TIMELINEPAGE_QUERY = `query PageModule {
  ${testimonialsQuery}
  ${contactsQuery}
  ${workExperienceQuery}
  ${educationExperienceQuery}
}
`;
interface ITimelineProps {
  data: Exclude<IPageModule, "allProjects">;
}

const Index = ({ data }: ITimelineProps) => {
  return (
    <Layout
      sidebar={
        <Box>
          <Testimonials data={data.allTestimonials} />
          <Contact data={data.allContacts} />
        </Box>
      }
    >
      <motion.div variants={routeAnim.stagger}>
        <motion.div variants={routeAnim.fadeInUp}>
          <Specialty />
        </motion.div>
        <motion.div variants={routeAnim.fadeInUp}>
          <Timeline title='Work Experience' data={data.allWorks} />
        </motion.div>
        <motion.div variants={routeAnim.fadeInUp}>
          <Timeline title='Education' data={data.allEducations} />
        </motion.div>
      </motion.div>
    </Layout>
  );
};

export async function getStaticProps() {
  const data: IPageModule = await request({
    query: TIMELINEPAGE_QUERY,
    variables: { limit: 10 },
  });
  return {
    props: { data },
  };
}

export default Index;
