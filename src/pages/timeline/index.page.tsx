import React from "react";
import { motion } from "framer-motion";
import routeAnim from "@styles/routeAnimation.json";
import Layout from "@components/Modules/Layout";
import {
  contactsQuery,
  educationExperienceQuery,
  testimonialsQuery,
  workExperienceQuery,
  specialtyQuery,
  sectionsQuery,
} from "@utils/DatoQueries";
import { IPageModule } from "@src/types";
import { request } from "@services/DatoCMS";
import Contact from "@components/Modules/Contact";
import { Box } from "@mantine/core";
import {
  CONTACT_ID,
  EDUCATION_EXPERIENCE_ID,
  SPECIALTY_ID,
  TESTIMONIALS_ID,
  WORK_EXPERIENCE_ID,
} from "@utils/Variables";
import { TimelinePageMetadata } from "@components/Atoms/Metadata";
import Timeline from "@components/Modules/Timeline";
import Specialty from "@components/Modules/Specialty";
import Testimonials from "@components/Modules/Testimonials";

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
    <>
      <TimelinePageMetadata />
      <Layout
        sidebar={
          <Box>
            <Testimonials
              data={data.allTestimonials}
              title={getTitle(TESTIMONIALS_ID)}
            />
            <Contact data={data.allContacts} title={getTitle(CONTACT_ID)} />
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
    </>
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
