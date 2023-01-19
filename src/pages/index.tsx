import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

import { CardProfil, CardRecomendation, CardStatusImage, CardStatusInput } from "components/Card";
import { TextArea } from "components/Input";
import { Modals } from "components/Modals";
import Layout from "components/Layout";
import Button from "components/Button";

import { PostingType, UserType, ProfileType, CommentsType } from "utils/type/Types";

const LandingPage = () => {
  const [profileData, setProfileData] = useState<ProfileType>({});
  const [postData, setPostData] = useState<PostingType[]>([]);
  const [comment, setComment] = useState<CommentsType[]>([]);
  const [content, setContent] = useState<string>("")
  const [user, setUser] = useState<UserType[]>([]);
  const [photo, setPhoto] = useState<File>();
  const [cookie, setCookie] = useCookies();
  const [id, setId] = useState<number>()
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
        const { data } = postData.data;
        setPostData(data);
        setComment(data.Comments)

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
        fetchData()
        navigate(0)
      })
      .catch((error) => {
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
        fetchData()
      })
      .catch((error) => {
      })
  }

  function editContenthandler(id: number) {
    axios.post(`https://www.projectfebe.online/contents/${id}`, {
      content: content,
      image: photo,
    },
      {
        headers: {
          Authorization: `Bearer ${cookie.token}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
      })
      .catch((error) => {
      })
  }

  function postComments(id: number) {
    axios.post(`https://www.projectfebe.online/comments/${id}`, {
      content: content,
      image: photo,
    },
      {
        headers: {
          Authorization: `Bearer ${cookie.token}`,
        },
      })
      .then((res) => {
        fetchData()
        navigate(0)
      })
      .catch((error) => {
      })
  }

  useEffect(() => {
    if (!cookie.token) {
      navigate("/");
    }
  }, [cookie.token]);

  function onClickDetail(id: number) {
    navigate(`/post/${id}`);
  }

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
                  onClick={() => navigate('/profile')}
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
            {
              postData.map((postData) => {
                return (
                  <>
                    <CardStatusImage
                      key={postData.id}
                      name={postData.who_post}
                      id={postData.id}
                      image_post={postData.image}
                      create_at={postData.created_at?.substring(0, 10)}
                      content={postData.content}
                      // comment={
                      //   <>{
                      //     postData.Comments ? (
                      //       <div className="flex justify-center w-full">
                      //         <div className="flex w-3/4">
                      //           <div className="flex w-1/5 h-full p-1 justify-center items-center">
                      //             <img
                      //               src={"https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                      //               }
                      //               className="w-[45px] h-[45px] rounded-full"
                      //             />
                      //           </div>
                      //           <div className="px-2 w-full">
                      //             <div className="py-2">
                      //               <h3 className="text-black text-md w-full font-semibold">
                      //                 { }
                      //               </h3>
                      //               <p className="text-black font-normal text-sm w-full">sad</p>
                      //             </div>

                      //           </div>
                      //           <div className="dropdown justify-end">
                      //             <label tabIndex={0} className="btn btn-ghost btn-circle">
                      //               <FiMoreHorizontal size={16} />
                      //             </label>
                      //             <ul
                      //               tabIndex={0}
                      //               className="dropdown-content menu p-2 shadow bg-white text-black rounded-box w-52"
                      //             >
                      //               <li>
                      //                 <a>Edit Comment</a>
                      //               </li>
                      //               <li>
                      //                 <a>Delete Comment</a>
                      //               </li>
                      //             </ul>
                      //           </div>
                      //         </div>
                      //       </div>

                      //     ) : (
                      //       null
                      //     )
                      //   }


                      //   </>
                      // }
                      onClickDeletePost={() => deletePost(postData.id)}
                      onClickEditPost={() => setId(postData.id)}
                      onClickDetail={() => onClickDetail(postData.id)}
                      noModal={1}
                    />
                    <Modals
                      no={1}
                      onClick={() => editContenthandler(id ? id : postData.id)}
                      titleModal={"Edit Profile"}
                      input1={
                        <div className="card w-full h-auto bg-white flex flex-col shadow-lg">
                          <div className="card-body">
                            <div className="flex-row">
                              <div className="flex h-1/2">
                                <img
                                  src={"https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                                  }
                                  className="w-[50px] h-[50px] rounded-full"
                                />
                              </div>
                              <TextArea
                                id={""}
                                label={""}
                                placeholder="Edit your Caption"
                                inputSet={"m-3 h-48 text-black"}
                                onChange={(e) => setContent(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                      }
                      tombol1={"Cancel"}
                      tombol2={"Save"}
                    />

                  </>
                )
              }
              )}
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
