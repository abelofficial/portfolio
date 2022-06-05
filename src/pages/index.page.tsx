import Layout from "@hoc/Layout";
import React from "react";
import GithubActivities from "@components/GithubActivities";
import TechStack from "@components/TechStack";

const Index = () => {
  return (
    <Layout>
      <>
        <GithubActivities />
        <TechStack />
      </>
    </Layout>
  );
};

export default Index;
