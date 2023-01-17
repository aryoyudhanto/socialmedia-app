import React from "react";
import {
  CardProfil,
  CardRecomendation,
  CardStatusImage,
  CardStatusInput,
  CardStatusShow,
} from "../components/Card";
import Layout from "../components/Layout";

const LandingPage = () => {
  return (
    <Layout>
      <div className="container mx-auto">
        <div className="flex flex-row justify-center">
          <div className="basis-1/4 p-5">
            <CardProfil />
          </div>
          <div className="basis-1/2 flex-col justify-center py-5">
            <CardStatusInput />
            <br />
            <CardStatusShow />
            <br />
            <CardStatusImage />
          </div>
          <div className="basis-1/4 p-5">
            <CardRecomendation />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LandingPage;
