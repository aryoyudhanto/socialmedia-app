import React, { useEffect, useState } from "react";
import useCookies from "react-cookie/cjs/useCookies";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import {
  CardProfil,
  CardRecomendation,
  CardStatusImage,
  CardStatusInput,
  CardStatusShow,
} from "components/Card";
import Layout from "components/Layout";

import { PostingType, UserType } from "utils/type/Types";

const LandingPage = () => {
  const [postData, setPostData] = useState<PostingType[]>([]);
  const [user, setUser] = useState<UserType[]>([]);
  const [cookie, setCookie] = useCookies<string>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
    userData();
  }, []);

  useEffect(() => {
    if (!cookie.token) {
      navigate("/");
    }
  }, [cookie.token]);

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

  function userData() {
    axios
      .get("http://54.254.27.167/users", {
        headers: {
          Authorization: `Bearer ${cookie.token}`,
        },
      })
      .then((user) => {
        const { data } = user.data;
        setUser(data);
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
            <h3 className="py-5 pl-3 uppercase font-bold">Recomendation</h3>
            {user.map((userData) => (
              <CardRecomendation
                key={userData.id}
                name={userData.username}
                image={userData.photo}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LandingPage;
