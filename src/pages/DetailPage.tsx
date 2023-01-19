import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios"

import { CardStatusImage } from "components/Card";
import Layout from "components/Layout";

import { showType } from "utils/type/Types"

const DetailPage = () => {
  const [postData, setPostData] = useState<showType[]>([]);
  const [cookie, setCookie] = useCookies();
  const navigate = useNavigate();
  const { id } = useParams();

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
        const { data } = postData.data;
        setPostData(data);
      })
      .catch((error) => {
        alert(error.toString());
      })
      .finally(() => { });
  }

  useEffect(() => {
    if (!cookie.token) {
      navigate("/");
    }
  }, [cookie.token]);
  
  return (
    <Layout>
      <div className="flex flex-col justify-center w-full h-auto items-center pt-5">
        <div className="w-auto h-auto pt-5">
          {
            postData.map((data) => {
              return (
                <CardStatusImage
                  key={data.id}
                  name={data.who_post}
                  image_post={data.image}
                  create_at={data.created_at?.substring(0, 10)}
                  content={data.content}
                />
              )
            })
          }
        </div>
      </div>
    </Layout>
  );
};

export default DetailPage;
