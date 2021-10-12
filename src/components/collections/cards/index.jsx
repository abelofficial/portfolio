// Core
import { useEffect, useState } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";

// Internal
import { HighLightText, Paragraph, StrongText, SubSectionTitle } from "../text";

// Material ui
import { Avatar, Box, Grid } from "@material-ui/core";
import { getGithubUser, getGithubUserOrgs } from "@local/src/services/api";
import { InfoContainer, SectionContainer } from "../../hoc";

import useStyles from "./card.style";

export const GithubSummery = ({ props }) => {
  const dispatch = useDispatch();
  const styles = useStyles();
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
    <SectionContainer padding={1} width='100%'>
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
          <Avatar className={styles.avatar} src={githubAccount?.avatar_url} />
          <Grid container direction='column'>
            <StrongText> {githubAccount?.name} </StrongText>
            <Grid item component={Box} display='flex' width='100%'>
              <Paragraph className={styles.accountInfoText}>
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
          justify='space-around'
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
