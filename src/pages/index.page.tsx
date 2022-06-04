import Layout from "@hoc/Layout";
import React from "react";
import InfoContainer from "@hoc/InfoContainer";
import GithubActivities from "@components/GithubActivities";

const Index = () => {
  return (
    <Layout>
      <>
        <InfoContainer>
          <GithubActivities />
        </InfoContainer>
        <InfoContainer>
          <h1>Home page</h1>
        </InfoContainer>
      </>
    </Layout>
  );
};

export default Index;
