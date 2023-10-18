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
import { IGithubProfile, IPageModule } from "@src/types";
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
import { GithubConnect } from "@services/GithubConnect";

const HOMEPAGE_QUERY = `query PageModule {
  ${contactsQuery}
  ${testimonialsQuery}
  ${projectsQuery}
  ${sectionsQuery}
  ${techstacksQuery}
}
`;
interface IHomeProps {
  datoData: IPageModule;
  github: IGithubProfile;
}

const Index = ({ datoData, github }: IHomeProps) => {
  const getTitle = (id: string) =>
    datoData.allSections.find((s) => s.id === id).title;

  return (
    <>
      <HomePageMetadata />
      <Layout
        sidebar={
          <>
            <Contact data={datoData.allContacts} title={getTitle(CONTACT_ID)} />
            <Testimonials
              data={datoData.allTestimonials}
              title={getTitle(TESTIMONIALS_ID)}
            />
          </>
        }
      >
        <motion.div variants={routeAnim.stagger}>
          <motion.div variants={routeAnim.fadeInUp}>
            <GithubSummery
              githubAccount={github}
              title={getTitle(GITHUBSUMMERY_ID)}
              iconUrl={
                datoData.allSections.find((s) => s.id === GITHUBSUMMERY_ID).icon
                  .url
              }
            />
          </motion.div>
          <motion.div variants={routeAnim.fadeInUp}>
            <TechStack
              title={getTitle(TECHSTACK_ID)}
              data={datoData.allTechstacks}
            />
          </motion.div>
          <motion.div variants={routeAnim.fadeInUp}>
            <Projects
              data={datoData.allProjects}
              title={getTitle(PROJECTS_ID)}
            />
          </motion.div>
        </motion.div>
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const datoData: IPageModule = await request({
    query: HOMEPAGE_QUERY,
    variables: { limit: 10 },
  });

  const githubConnect = new GithubConnect();
  const accountData = await githubConnect.getUser();
  const orgData = await githubConnect.getUserOrgs();

  const github: IGithubProfile = {
    orgs: orgData.data.length,
    ...accountData.data,
  };

  return {
    props: { datoData, github },
    revalidate: 60,
  };
}

export default Index;
