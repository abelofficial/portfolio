import React from "react";
import { motion } from "framer-motion";
import routeAnim from "@styles/routeAnimation.json";
import TechStack from "@components/TechStack";
import GithubSummery from "@components/GithubSummery";
import Projects from "@components/Projects";
import { request } from "@services/DatoCMS";
import Layout from "@hoc/Layout";
import Contact from "@components/Contact";
import Testimonials from "@components/Testimonials";
import {
  contactsQuery,
  projectsQuery,
  sectionsQuery,
  testimonialsQuery,
} from "@services/DatoQueries";
import { IPageModule } from "@src/types";
import {
  CONTACT_ID,
  GITHUBSUMMERY_ID,
  PROJECTS_ID,
  TECHSTACK_ID,
  TESTIMONIALS_ID,
} from "@utils/constants";

const HOMEPAGE_QUERY = `query PageModule {
  ${contactsQuery}
  ${testimonialsQuery}
  ${projectsQuery}
  ${sectionsQuery}
}
`;
interface IHomeProps {
  data: IPageModule;
}

const Index = ({ data }: IHomeProps) => {
  const getTitle = (id: string) =>
    data.allSections.find((s) => s.id === id).title;

  return (
    <Layout
      sidebar={
        <>
          <Contact data={data.allContacts} title={getTitle(CONTACT_ID)} />
          <Testimonials
            data={data.allTestimonials}
            title={getTitle(TESTIMONIALS_ID)}
          />
        </>
      }
    >
      <motion.div variants={routeAnim.stagger}>
        <motion.div variants={routeAnim.fadeInUp}>
          <GithubSummery title={getTitle(GITHUBSUMMERY_ID)} />
        </motion.div>
        <motion.div variants={routeAnim.fadeInUp}>
          <TechStack title={getTitle(TECHSTACK_ID)} />
        </motion.div>
        <motion.div variants={routeAnim.fadeInUp}>
          <Projects data={data.allProjects} title={getTitle(PROJECTS_ID)} />
        </motion.div>
      </motion.div>
    </Layout>
  );
};

export async function getStaticProps() {
  const data: IPageModule = await request({
    query: HOMEPAGE_QUERY,
    variables: { limit: 10 },
  });
  return {
    props: { data },
  };
}

export default Index;
