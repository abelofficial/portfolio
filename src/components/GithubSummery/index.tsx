import React, { useEffect, useState } from "react";
import Image from "next/image";
import useStyles from "./style";
import { GithubConnect } from "@services/GithubConnect";
import { IGithubProfile } from "@src/types";
import InfoContainer from "@hoc/InfoContainer";
import { Grid, Box, Title } from "@mantine/core";
import GithubActivities from "@components/GithubActivities";

const Index = () => {
  const { classes } = useStyles();

  const [githubAccount, setGithubAccount] = useState<IGithubProfile>();

  useEffect(() => {
    const fetchData = async () => {
      const github = new GithubConnect();
      const accountData = await github.getUser();
      const orgData = await github.getUserOrgs();

      const data: IGithubProfile = {
        orgs: orgData.data.length,
        ...accountData.data,
      };

      setGithubAccount(data);
    };

    fetchData();
  }, []);

  return (
    <InfoContainer>
      <Grid columns={12}>
        <Grid.Col xs={12} className={classes.header}>
          <Title order={5}>Github Account</Title>
          <Image
            src='/images/github-octocat.svg'
            alt='github-log'
            width={40}
            height={40}
          />
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
