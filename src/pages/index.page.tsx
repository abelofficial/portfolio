import Layout from "@hoc/Layout";
import React from "react";
import GithubActivities from "@components/GithubActivities";
import TechStack from "@components/TechStack";
import Specialty from "@components/Specialty";

const Index = () => {
  return (
    <Layout>
      <>
        <GithubActivities />
        <TechStack />
        <Specialty />
      </>
    </Layout>
  );
};

export default Index;
