// Core
import { useEffect, useState } from "react";
import Image from "next/image";

// Internal
import {
  HighLightText,
  Paragraph,
  StrongText,
  SubSectionTitle,
} from "src/components/collections/text";

// Material ui
import { Box, Grid } from "@mui/material";
import { useTheme } from "@mui/styles";

import { getGithubUser, getGithubUserOrgs } from "@local-services/api/Github";
import { InfoContainer, SectionContainer } from "@local-components/hoc";

import useStyles from "./style";

const GithubSummery = ({ props }) => {
  const theme = useTheme();
  const styles = useStyles(theme)();
  const [githubAccount, setGithubAccount] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const accountData = await getGithubUser();
      const orgData = await getGithubUserOrgs();

      const data = {
        orgs: orgData.length,
        ...accountData,
      };
      const {
        name,
        avatar_url,
        followers,
        following,
        orgs,
        public_repos,
        total_private_repos,
      } = data;

      setGithubAccount({
        name,
        avatar_url,
        followers,
        following,
        orgs,
        public_repos,
        total_private_repos,
      });
    };
    fetchData();
  }, [setGithubAccount]);

  return (
    <SectionContainer width='100%' p={1}>
      <Grid container direction='column' component={Box}>
        <Grid item xs={12} className={styles.header}>
          <SubSectionTitle>Github Account</SubSectionTitle>
          <Image
            src='/images/github-octocat.svg'
            alt='github-log'
            width={40}
            height={40}
          />
        </Grid>
        <Grid item xs={12} component={Box} display='flex' alignItems='center'>
          <Image
            alt='github-profile-image'
            className={styles.avatar}
            src={
              githubAccount?.avatar_url
                ? githubAccount?.avatar_url
                : "/images/github-octocat.svg"
            }
            width={40}
            height={40}
          />
          <Grid container direction='column' ml={1}>
            <StrongText> {githubAccount?.name} </StrongText>
            <Grid
              item
              component={Box}
              display='flex'
              justifyContent='space-between'
              width='50%'
            >
              <Paragraph>
                <HighLightText> {githubAccount?.followers} </HighLightText>
                followers
              </Paragraph>

              <Paragraph>
                <HighLightText> {githubAccount?.following} </HighLightText>
                following
              </Paragraph>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          component={Box}
          display='flex'
          alignItems='center'
          justifyContent='space-around'
        >
          <InfoContainer
            component={Box}
            width='fit-content'
            display='flex'
            flexDirection='column'
            alignItems='center'
          >
            <HighLightText> {githubAccount?.public_repos} </HighLightText>
            <Paragraph>Public repos</Paragraph>
          </InfoContainer>
          <InfoContainer
            component={Box}
            display='flex'
            flexDirection='column'
            alignItems='center'
          >
            <HighLightText>{githubAccount?.total_private_repos} </HighLightText>
            <Paragraph>Private repos</Paragraph>
          </InfoContainer>
          <InfoContainer
            component={Box}
            display='flex'
            flexDirection='column'
            alignItems='center'
          >
            <HighLightText> {githubAccount?.orgs} </HighLightText>
            <Paragraph>Organizations</Paragraph>
          </InfoContainer>
        </Grid>
      </Grid>
    </SectionContainer>
  );
};

export default GithubSummery;
