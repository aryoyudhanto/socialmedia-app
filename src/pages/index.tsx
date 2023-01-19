import React, { useEffect, useState } from "react";
import axios from "axios";

import { CardProfil, CardRecomendation, CardStatusImage, CardStatusInput, CardStatusShow } from "components/Card";
import Layout from "components/Layout";

import { PostingType } from "utils/type/Types";

const LandingPage = () => {
  const [postData, setPostData] = useState<PostingType[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    axios
      .get("http://54.254.27.167/contents")
      .then((postData) => {
        const { data } = postData.data;
        setPostData(data);
      })
      .catch((error) => {
        alert(error.toString());
      })
      .finally(() => {});
  }

  return (
    <Layout>
      <div className="container mx-auto">
        <div className="flex flex-row justify-center h-full w-full">
          <div className="basis-1/4 p-5 sticky left-0 top-10 h-fit">
            <CardProfil />
          </div>
          <div className="basis-1/2 flex-col justify-center py-5">
            <CardStatusInput />
            <br />: :
            {postData.map((postData) => (
              <CardStatusShow
                key={postData.id}
                name={postData.name}
                id={postData.id}
                create_at={postData.created_at?.substring(0, 10)}
                content={postData.content}
              />
            ))}
            ;
            <br />
            {postData.map((postData) => (
              <CardStatusImage
                key={postData.id}
                name={postData.name}
                id={postData.id}
                image={postData.image}
                create_at={postData.created_at?.substring(0, 10)}
                content={postData.content}
              />
            ))}
          </div>
          <div className="basis-1/4 p-5 h-fit sticky right-0 top-10">
            <CardRecomendation />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LandingPage;
