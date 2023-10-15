import React from "react";
import Image from "next/image";
import useStyles from "./style";
import { IGithubProfile } from "@src/types";
import InfoContainer from "@components/Molecule/InfoContainer";
import { Grid, Box, Title } from "@mantine/core";
import GithubActivities from "../GithubActivities";

export interface IGithubSummeryProps {
  title: string;
  iconUrl?: string;
  githubAccount: IGithubProfile;
}

const Index = ({ title, iconUrl, githubAccount }: IGithubSummeryProps) => {
  const { classes } = useStyles();

  return (
    <InfoContainer>
      <Grid columns={12}>
        <Grid.Col xs={12} className={classes.header}>
          <Title order={5}> {title} </Title>
          <Image src={iconUrl} alt='icon' width={40} height={40} />
        </Grid.Col>
        <Grid.Col xs={12} className={classes.profile}>
          <Image
            alt='github-profile-image'
            className={classes.avatar}
            src={
              githubAccount?.avatar_url
                ? githubAccount?.avatar_url
                : "/images/github-octocat.svg"
            }
            width={80}
            height={80}
          />
          <strong className={classes.text}> {githubAccount?.name} </strong>
        </Grid.Col>

        <Grid.Col xs={8} className={classes.statues}>
          <Box className={classes.statusContainer}>
            <pre className={classes.highlightedText}>
              {githubAccount?.public_repos}
            </pre>
            <p className={classes.text}>Public repos</p>
          </Box>
          <Box className={classes.statusContainer}>
            <pre className={classes.highlightedText}>
              {githubAccount?.total_private_repos}
            </pre>
            <p className={classes.text}>Private repos</p>
          </Box>
          <Box className={classes.statusContainer}>
            <pre className={classes.highlightedText}>{githubAccount?.orgs}</pre>
            <p className={classes.text}>Organizations</p>
          </Box>
        </Grid.Col>
        <Grid.Col xs={12} className={classes.calenderContainer}>
          <GithubActivities />
        </Grid.Col>
      </Grid>
    </InfoContainer>
  );
};

export default Index;
