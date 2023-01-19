import React, { useEffect, useState } from "react";
import useCookies from "react-cookie/cjs/useCookies";
import { useNavigate } from "react-router-dom";
import { FiMoreHorizontal } from "react-icons/fi"
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
import Button from "components/Button";
import { Modals2 } from "components/Modals";

interface ProfileType {
  id?: number;
  name?: string;
  email?: string;
  username?: string;
  photo?: string;
  date_of_birth?: string;
  phone_number?: string;
  about_me?: string;
}

const LandingPage = () => {
  const [postData, setPostData] = useState<PostingType[]>([]);
  const [user, setUser] = useState<UserType[]>([]);
  const [profileData, setProfileData] = useState<ProfileType>({});
  const [cookie, setCookie] = useCookies<string>([]);
  const [content, setContent] = useState<string>("")
  const [photo, setPhoto] = useState<File>()
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
    userData();
    profile();
  }, []);

  useEffect(() => {
    if (!cookie.token) {
      navigate("/");
    }
  }, [cookie.token]);

  function fetchData() {
    axios
      .get("https://www.projectfebe.online/contents")
      .then((postData) => {
        console.log(postData);
        const { data } = postData.data;
        setPostData(data);
      })
      .catch((error) => {
      })
      .finally(() => { });
  }

  function userData() {
    axios
      .get("https://www.projectfebe.online/users", {
        headers: {
          Authorization: `Bearer ${cookie.token}`,
        },
      })
      .then((user) => {
        const { data } = user.data;
        setUser(data);
      })
      .catch((error) => {
      })
      .finally(() => { });
  }

  function profile() {
    axios
      .get("https://www.projectfebe.online/myprofile", {
        headers: {
          Authorization: `Bearer ${cookie.token}`,
        },
      })
      .then((profil) => {
        //console.log(profil);
        const { data } = profil.data;
        setProfileData(data);
      })
      .catch((error) => {
      })
      .finally(() => { });
  }

  function postContent() {
    axios.post(`https://www.projectfebe.online/contents`, {
      content: content,
      image: photo,
    },
      {
        headers: {
          Authorization: `Bearer ${cookie.token}`,
        },
      })
      .then((res) => {
        console.log(res)
        fetchData()
        navigate(0)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  function deletePost(id: number) {
    axios
      .delete(`https://www.projectfebe.online/contents/${id}`, {
        headers: {
          Authorization: `Bearer ${cookie.token}`,
        },
      })
      .then((res) => {
        console.log(res);
        fetchData()
      })
      .catch((error) => {
        console.log(error);
      })
  }

  function editContent() {
    axios.post(`https://www.projectfebe.online/contents`, {
      content: content,
      image: photo,
    },
      {
        headers: {
          Authorization: `Bearer ${cookie.token}`,
        },
      })
      .then((res) => {
        console.log(res)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    if (!cookie.token) {
      navigate("/");
    }
  }, [cookie.token]);

  function onClickDetail(id: number){
    navigate(`/post/${id}`);
  }
  console.log("status", content)

  return (
    <Layout>
      <div className="container mx-auto">
        <div className="flex flex-row justify-center h-full w-full">
          <div className="basis-1/4 p-5 sticky left-0 top-10 h-fit">
            {
              cookie.token ? (
                <CardProfil
                  key={profileData.id}
                  name={profileData.name}
                  username={profileData.username}
                  image={profileData.photo}
                  biodata={profileData.about_me}
                />
              ) : (
                <div className="card w-full bg-white shadow-lg flex flex-col items-center">
                  <div className="flex justify-center w-full h-1/2 my-5">
                    <h1 className="text-3xl font-bold text-black">Get New Account!</h1>
                  </div>
                  <div className="card-body items-center text-center pt-3">
                    <h2 className="card-title text-base-100 text-sm font-normal">Register to get your own pesonalized timeline!</h2>
                    <h3 className="text-black font-medium"></h3>
                    <p className="text-black font-thin text-sm"></p>
                    <div className="card-actions pt-3 w-full">
                      <Button
                        label="Register"
                        buttonSet="bg-[#0D99FF] hover:bg-[#0d86ff] border-none text-white"
                        onClick={() => navigate('/register')}
                      />
                    </div>
                  </div>
                </div>
              )
            }

          </div>
          <div className="basis-1/2 flex-col justify-center py-5">
            {
              cookie.token ? (
                <CardStatusInput
                  onChange={(e) => setContent(e.target.value)}
                  onClick={() => postContent()}
                />
              ) : (
                null
              )
            }

            <br />
            {postData.map((postData) => (
              <CardStatusImage
                key={postData.id}
                name={postData.who_post}
                id={postData.id}
                image_post={postData.image}
                create_at={postData.created_at?.substring(0, 10)}
                content={postData.content}
                comment={
                  <>
                    {/* <div className="flex h-1/2 p-1">
                      <img
                        src={
                          postData.image
                            ? postData.image
                            : "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                        }
                        className="w-[50px] h-[50px] rounded-full"
                      />
                    </div>
                    <div className="px-2">
                      <h3 className="text-black font-normal text-sm p-3 w-full">
                        {"sad"}
                      </h3>
                    </div>
                    <div className="dropdown justify-end">
                      <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <FiMoreHorizontal size={16} />
                      </label>
                      <ul
                        tabIndex={0}
                        className="dropdown-content menu p-2 shadow bg-white text-black rounded-box w-52"
                      >
                        <li>
                          <a>Edit Comment</a>
                        </li>
                        <li>
                          <a>Delete Comment</a>
                        </li>
                      </ul>
                    </div> */}
                  </>
                }
                onClickDeletePost={() => deletePost(postData.id)}
              // onClickEditPost={}
              onClickDetail={()=>onClickDetail(postData.id)}
              />
            ))}
          </div>
          <div className="basis-1/4 p-5 h-fit sticky right-0 top-10">
            {
              cookie.token ? (
                <>
                  <h3 className="py-5 pl-3 uppercase font-bold">Recomendation</h3>
                  {user.slice(0, 5).map((userData) => (
                    <CardRecomendation
                      key={userData.id}
                      name={userData.username}
                      image={userData.photo}
                    />
                  ))}
                </>
              ) : (
                <div className="card w-full bg-white shadow-lg flex flex-col items-center">
                  <div className="flex justify-center w-full h-1/2 my-5">
                    <h1 className="text-3xl font-bold text-black">New Feature!</h1>
                  </div>
                  <div className="card-body items-center text-center pt-3">
                    <h2 className="card-title text-base-100 text-sm font-normal">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem quos amet, ipsa nesciunt corporis iste modi inventore nam iusto quisquam.!</h2>
                    <h3 className="text-black font-medium"></h3>
                    <p className="text-black font-thin text-sm"></p>
                    <div className="card-actions pt-3 w-full">
                      <Button
                        label="Login"
                        buttonSet="bg-[#0D99FF] hover:bg-[#0d86ff] border-none text-white"
                        onClick={() => navigate('/login')}
                      />
                    </div>
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LandingPage;
