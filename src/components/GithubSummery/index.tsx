import React, { useEffect, useState } from "react";
import Image from "next/image";
import useStyles from "./style";
import { GithubConnect } from "@services/GithubConnect";
import { IGithubProfile } from "src/types";
import InfoContainer from "@hoc/InfoContainer";
import { Grid, Box, Title } from "@mantine/core";
import SectionContainer from "@hoc/SectionContainer";

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
      console.log("Run: ", orgData.data);
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
            width={40}
            height={40}
          />
          <Box className={classes.profileInfo}>
            <strong className={classes.text}> {githubAccount?.name} </strong>
            <Box className={classes.followContainer}>
              <p className={classes.text}>
                <pre className={classes.highlightedText}>
                  {githubAccount?.followers}
                </pre>
                followers
              </p>

              <p className={classes.text}>
                <pre className={classes.highlightedText}>
                  {githubAccount?.following}
                </pre>
                following
              </p>
            </Box>
          </Box>
        </Grid.Col>
        <Grid.Col xs={12} className={classes.statusContainer}>
          <SectionContainer>
            <p className={classes.text}>
              <pre className={classes.highlightedText}>
                {githubAccount?.public_repos}
              </pre>
              Public repos
            </p>
          </SectionContainer>
          <SectionContainer>
            <p className={classes.text}>
              <pre className={classes.highlightedText}>
                {githubAccount?.total_private_repos}
              </pre>
              Private repos
            </p>
          </SectionContainer>
          <SectionContainer>
            <p className={classes.text}>
              <pre className={classes.highlightedText}>
                {githubAccount?.orgs}
              </pre>
              Organizations
            </p>
          </SectionContainer>
        </Grid.Col>
      </Grid>
    </InfoContainer>
  );
};

export default Index;
