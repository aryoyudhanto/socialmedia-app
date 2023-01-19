import { useEffect, useState } from "react";
import axios from "axios";

import { CardStatusShow, CardStatusShowDetail } from "components/Card";
import Layout from "components/Layout";

import { PostingType } from "utils/type/Types";

const DetailPage = () => {
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
      <div className="flex flex-col justify-center w-full h-auto items-center pt-5">
        <div className="w-auto h-auto">
          {postData.map((postData) => (
            <CardStatusShow
              key={postData.id}
              name={postData.name}
              id={postData.id}
              create_at={postData.created_at?.substring(0, 10)}
              content={postData.content}
            />
          ))}
        </div>
        <div className="w-auto h-auto pt-5">
          {postData.map((postData) => (
            <CardStatusShowDetail
              key={postData.id}
              name={postData.name}
              id={postData.id}
              image={postData.image}
              create_at={postData.created_at?.substring(0, 10)}
              content={postData.content}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default DetailPage;
