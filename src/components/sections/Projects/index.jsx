// Core
import { useEffect, useState } from "react";
import Image from "next/image";

// Internal
import { SubSectionTitle } from "src/components/collections/text";

// Material ui
import { Box, Grid, useTheme } from "@mui/material";

import { SectionContainer } from "@local-components/hoc";

import useStyles from "./style";
import { getVercelProjects } from "@local-services/api/Vercel";
import ProjectTable from "../ProjectTable";

const Projects = ({ props }) => {
  const theme = useTheme();
  const styles = useStyles(theme)();
  const [data, setData] = useState();

  const projectsToShow = [
    "portfolio",
    "saltimer",
    "zede-agency",
    "yellow-page",
  ];

  useEffect(() => {
    const fetchData = async () => {
      const data = await getVercelProjects();

      const projectData = data.projects
        .filter((i) => projectsToShow.find((n) => n === i.name))
        .map((i) => ({
          name: i.name,
          link: i.latestDeployments[0].alias[0],
          framework: i.framework,
          history: i.latestDeployments.map((d) => ({
            lastUpdate: d.createdAt,
            commitMessage: d.meta.githubCommitMessage,
          })),
        }));

      setData(projectData);
      console.log("Projects: ", data.projects);
    };
    fetchData();
  }, []);

  return (
    <SectionContainer width='100%' p={1}>
      <Grid container direction='column' component={Box}>
        <Grid item xs={12} className={styles.header}>
          <SubSectionTitle>Projects</SubSectionTitle>
          <Image
            src='/images/github-octocat.svg'
            alt='github-log'
            width={40}
            height={40}
          />
        </Grid>
        <Grid item xs={12}>
          <ProjectTable projectsData={data ? data : []} />
        </Grid>
      </Grid>
    </SectionContainer>
  );
};

export default Projects;
