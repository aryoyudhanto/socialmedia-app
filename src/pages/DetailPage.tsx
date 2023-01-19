import { useEffect, useState } from "react";
import axios from "axios";

import { CardStatusImage, CardStatusShowDetail } from "components/Card";
import Layout from "components/Layout";

import { useNavigate, useParams } from "react-router-dom";
import useCookies from "react-cookie/cjs/useCookies";

interface showType {
  id?: number;
  user_id?: number;
  image?: string;
  who_post?: string;
  content?: string;
  created_at?: string;
}

const DetailPage = () => {
  const [postData, setPostData] = useState<showType>({});
  const { id } = useParams();
  const [cookie, setCookie] = useCookies<string>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    axios
      .get(`https://www.projectfebe.online/contents/${id}`, {
        headers: {
          Authorization: `Bearer ${cookie.token}`,
        },
      })
      .then((postData) => {
        console.log(postData);
        const { data } = postData.data;
        setPostData(data);
      })
      .catch((error) => {
        alert(error.toString());
      })
      .finally(() => {});
  }

  console.log(postData.id);

  return (
    <Layout>
      <div className="flex flex-col justify-center w-full h-auto items-center pt-5">
        {/* {postData.image ? ( */}
        <div className="w-auto h-auto pt-5">
          <CardStatusImage
            key={postData.id}
            name={postData.who_post}
            image={postData.image}
            create_at={postData.created_at?.substring(0, 10)}
            content={postData.content}
          />
        </div>
        {/* ) : ( */}
        {/* <div className="w-auto h-auto">
          <CardStatusShow
            key={postData.id}
            name={postData.who_post}
            create_at={postData.created_at?.substring(0, 10)}
            content={postData.content}
          />{" "}
        </div> */}
        {/* )} */}
      </div>
    </Layout>
  );
};

export default DetailPage;
