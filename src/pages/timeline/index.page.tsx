import Layout from "@hoc/Layout";
import React from "react";
import staticData from "@static/timeLineData.json";
import Timeline from "@components/Timeline";

const Index = ({ data }) => {
  return (
    <Layout>
      <>
        <Timeline title='Work Experience' data={data.experience} />
        <Timeline title='Education' data={data.education} />
      </>
    </Layout>
  );
};

export async function getStaticProps(context) {
  return {
    props: { data: staticData }, // will be passed to the page component as props
  };
}

export default Index;
