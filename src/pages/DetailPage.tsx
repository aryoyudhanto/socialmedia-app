import { useEffect, useState } from "react";
import axios from "axios";

import { CardStatusImage, CardStatusShowDetail } from "components/Card";
import Layout from "components/Layout";

import { useParams } from "react-router-dom";
import useCookies from "react-cookie/cjs/useCookies";
import { PostingType } from "utils/type/Types";
import { Modals, Modals2 } from "components/Modals";
import { TextArea } from "components/Input";

const DetailPage = () => {
  const [postData, setPostData] = useState<PostingType[]>([]);
  const { id } = useParams();
  const [cookie, setCookie] = useCookies<string>([]);
  const [content, setContent] = useState<string>("");
  const [photo, setPhoto] = useState<File>();
  //const [id, setId] = useState<number>();

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

  function deletePost(id: number) {
    axios
      .delete(`https://www.projectfebe.online/contents/${id}`, {
        headers: {
          Authorization: `Bearer ${cookie.token}`,
        },
      })
      .then((res) => {
        fetchData();
      })
      .catch((error) => {
        alert(error.toString());
      });
  }

  function editContenthandler(id: number) {
    axios
      .post(
        `https://www.projectfebe.online/contents/${id}`,
        {
          content: content,
          image: photo,
        },
        {
          headers: {
            Authorization: `Bearer ${cookie.token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        alert(error.toString());
      });
  }

  return (
    <Layout>
      <div className="flex flex-col justify-center w-full h-auto items-center pt-5">
        <div className="w-auto h-auto pt-5">
          {postData.map((postData) => (
            <CardStatusImage
              key={postData.id}
              name={postData.who_post}
              image={postData.image}
              create_at={postData.created_at?.substring(0, 10)}
              content={postData.content}
              onClickDeletePost={() => deletePost(postData.id)}
              //onClickEditPost={() => setId(postData.id)}
              //noModal={1}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default DetailPage;
