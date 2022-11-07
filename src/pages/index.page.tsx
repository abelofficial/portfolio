import React from "react";
import { motion } from "framer-motion";
import routeAnim from "@styles/routeAnimation.json";
import Projects from "@components/Modules/Projects";
import { request } from "@services/DatoCMS";
import Layout from "@components/Modules/Layout";
import Contact from "@components/Modules/Contact";
import {
  contactsQuery,
  projectsQuery,
  sectionsQuery,
  techstacksQuery,
  testimonialsQuery,
} from "@utils/DatoQueries";
import { IPageModule } from "@src/types";
import {
  CONTACT_ID,
  GITHUBSUMMERY_ID,
  PROJECTS_ID,
  TECHSTACK_ID,
  TESTIMONIALS_ID,
} from "@utils/Variables";
import { HomePageMetadata } from "@components/Atoms/Metadata";
import TechStack from "@components/Modules/TechStack";
import Testimonials from "@components/Modules/Testimonials";
import GithubSummery from "@components/Modules/GithubSummery";

const HOMEPAGE_QUERY = `query PageModule {
  ${contactsQuery}
  ${testimonialsQuery}
  ${projectsQuery}
  ${sectionsQuery}
  ${techstacksQuery}
}
`;
interface IHomeProps {
  data: IPageModule;
}

const Index = ({ data }: IHomeProps) => {
  const getTitle = (id: string) =>
    data.allSections.find((s) => s.id === id).title;

  return (
    <>
      <HomePageMetadata />
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
            <GithubSummery
              title={getTitle(GITHUBSUMMERY_ID)}
              iconUrl={
                data.allSections.find((s) => s.id === GITHUBSUMMERY_ID).icon.url
              }
            />
          </motion.div>
          <motion.div variants={routeAnim.fadeInUp}>
            <TechStack
              title={getTitle(TECHSTACK_ID)}
              data={data.allTechstacks}
            />
          </motion.div>
          <motion.div variants={routeAnim.fadeInUp}>
            <Projects data={data.allProjects} title={getTitle(PROJECTS_ID)} />
          </motion.div>
        </motion.div>
      </Layout>
    </>
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
