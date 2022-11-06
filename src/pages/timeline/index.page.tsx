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
  specialtyQuery,
  sectionsQuery,
} from "@services/DatoQueries";
import { IPageModule } from "@src/types";
import { request } from "@services/DatoCMS";
import Contact from "@components/Contact";
import { Box } from "@mantine/core";
import Timeline from "@components/Timeline";
import {
  CONTACT_ID,
  EDUCATION_EXPERIENCE_ID,
  SPECIALTY_ID,
  TESTIMONIALS_ID,
  WORK_EXPERIENCE_ID,
} from "@utils/constants";

const TIMELINEPAGE_QUERY = `query PageModule {
  ${testimonialsQuery}
  ${contactsQuery}
  ${workExperienceQuery}
  ${educationExperienceQuery}
  ${specialtyQuery}
  ${sectionsQuery}
}
`;
interface ITimelineProps {
  data: Exclude<IPageModule, "allProjects">;
}

const Index = ({ data }: ITimelineProps) => {
  const getTitle = (id: string) =>
    data.allSections.find((s) => s.id === id).title;

  const getIconUrl = (id: string) =>
    data.allSections.find((s) => s.id === id).icon.url;
  return (
    <Layout
      sidebar={
        <Box>
          <Testimonials
            data={data.allTestimonials}
            title={getTitle(CONTACT_ID)}
          />
          <Contact data={data.allContacts} title={getTitle(TESTIMONIALS_ID)} />
        </Box>
      }
    >
      <motion.div variants={routeAnim.stagger}>
        <motion.div variants={routeAnim.fadeInUp}>
          <Specialty
            title={getTitle(SPECIALTY_ID)}
            data={data.allSpecialties}
          />
        </motion.div>
        <motion.div variants={routeAnim.fadeInUp}>
          <Timeline
            title={getTitle(WORK_EXPERIENCE_ID)}
            data={data.allWorks}
            iconUrl={getIconUrl(WORK_EXPERIENCE_ID)}
          />
        </motion.div>
        <motion.div variants={routeAnim.fadeInUp}>
          <Timeline
            title={getTitle(EDUCATION_EXPERIENCE_ID)}
            data={data.allEducations}
            iconUrl={getIconUrl(EDUCATION_EXPERIENCE_ID)}
          />
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
