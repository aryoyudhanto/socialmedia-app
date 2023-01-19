import {
  FiImage,
  FiMoreHorizontal,
  FiMessageCircle,
  FiSend,
} from "react-icons/fi";
import { FC } from "react";

import { Input, TextArea } from "./Input";
import Button from "./Button";

interface CardProps {
  name?: string;
  username?: string;
  image?: string;
  image_post?: string;
  id?: number;
  labelButton?: string;
  create_at?: string;
  content?: string;
  biodata?: string;
  comment?: any;
  onChange?: (e: any) => void
  onClick?: () => void;
  onClickEditPost?: () => void
  onClickDeletePost?: () => void
  onClickDetail?: () => void
  noModal?: number
}

export const CardProfil: FC<CardProps> = ({
  name,
  image,
  username,
  biodata,
  onClick,
}) => {
  return (
    <div className="card w-full bg-white shadow-lg flex flex-col items-center">
      <div className="flex h-1/2">
        <img
          src={
            image
              ? image
              : "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          }
          className="w-[150px] h-[150px] mx-auto mt-16 rounded-full"
        />
      </div>
      <div className="card-body items-center text-center pt-3">
        <h2 className="card-title text-black font-bold">{name}</h2>
        <h3 className="text-black font-medium">@{username}</h3>
        <p className="text-black font-thin text-sm">{biodata}</p>
        <div className="card-actions pt-3">
          <Button
            buttonSet="bg-[#0D99FF] border-none text-white"
            label="See Profil"
            onClick={onClick}
          />
        </div>
      </div>
    </div>
  );
};

export const CardRecomendation: FC<CardProps> = ({ name, image }) => {
  return (
    <div className="card rounded-none w-full bg-white shadow-lg flex flex-col justify-start pl-3">
      <div className="flex flex-row justify-start">
        <div className="px-3 pb-2">
          <div className="flex h-1/2">
            <img
              src={
                image
                  ? image
                  : "https://i.pinimg.com/564x/9f/8b/74/9f8b749c32edf47b1b3f098230a5584c.jpg"
              }
              className="w-[50px] h-[50px]  rounded-full"
            />
          </div>
        </div>
        <div className="pr-16 pt-2">
          <h6 className=" text-black font-bold px-3">{name}</h6>
        </div>
      </div>
    </div>
  );
};

export const CardStatusInput: FC<CardProps> = ({ image, onChange, onClick }) => {
  return (
    <div className="card w-full h-auto bg-white flex flex-col shadow-lg">
      <div className="card-body">
        <div className="flex-row">
          <div className="flex h-1/2">
            <img
              src={
                image
                  ? image
                  : "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              }
              className="w-[50px] h-[50px] rounded-full"
            />
          </div>
          <TextArea
            id={""}
            label={""}
            placeholder="What on your mind"
            inputSet={"m-3 h-48 text-black"}
            onChange={onChange}
          />
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-circle btn-ghost text-[#0D99FF]">
            <FiImage size={30} />
          </button>
          <Button
            buttonSet="w-24 bg-[#0D99FF] border-none text-white"
            label="Posting"
            onClick={onClick}
          />
        </div>
      </div>
    </div>
  );
};

export const CardStatusShow: FC<CardProps> = ({
  id,
  name,
  image,
  create_at,
  content,
  comment,
}) => {
  return (
    <div className="card w-full bg-white pb-5 shadow-md">
      <div className="flex flex-row justify-around">
        <div className="pl-10 py-5">
          <div className="flex h-1/2">
            <img
              src="https://i.pinimg.com/564x/9f/8b/74/9f8b749c32edf47b1b3f098230a5584c.jpg"
              className="w-[50px] h-[50px] rounded-full"
            />
          </div>
        </div>
        <div className="w-96 pt-5 ">
          <h6 className="text-black font-bold">{name}</h6>
          <p className="text-sm">{create_at}</p>
          <h3 className="text-black font-semibold text-lg pt-5">{content}</h3>

          <button className="btn btn-ghost gap-2 text-xs normal-case ">
            <FiMessageCircle size={16} />
            Comment
          </button>
        </div>
        <div className="pr-10 py-5">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <FiMoreHorizontal size={20} color="black" />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-white text-black rounded-box w-52"
            >
              <li>
                <a>Edit Post</a>
              </li>
              <li>
                <a>Delete Post</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="card w-120 bg-slate-100 mx-10 pt-5 pb-2 px-5">
        <div className="flex justify-around">
          <div className="flex h-1/2">
            <img
              src="https://i.pinimg.com/736x/86/6b/7b/866b7bd1c2a18c2cb02a003ef920765e.jpg"
              className="w-[50px] h-[50px] rounded-full"
            />
          </div>
          <div className="px-2">
            <Input
              id={""}
              label={""}
              placeholder="add comment"
              className="input w-96 bg-slate-200"
              inputSet={""}
            />
          </div>
          <button className="btn btn-ghost gap-2 btn-circle ">
            <FiSend size={20} color="black" />
          </button>
        </div>
        <div className="flex justify-start">
          <div className="flex h-1/2 p-1">
            <img
              src={
                image
                  ? image
                  : "https://i.pinimg.com/736x/86/6b/7b/866b7bd1c2a18c2cb02a003ef920765e.jpg"
              }
              className="w-[50px] h-[50px] rounded-full"
            />
          </div>
          <div className="px-2">
            <h3 className="text-black font-normal text-sm p-3 w-full">
              {comment}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export const CardStatusImage: FC<CardProps> = ({
  name,
  create_at,
  content,
  comment,
  image,
  image_post,
  onClickEditPost,
  onClickDeletePost,
  onClickDetail,
  noModal
}) => {
  return (
    <div className="card w-full bg-white pb-5 shadow-md my-5">
      <div className="flex flex-row justify-around">
        <div className="pl-10 py-5">
          <div className="flex h-1/2">
            <img
              src={
                image
                  ? image
                  : "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              }
              className="w-[50px] h-[50px] rounded-full" onClick={onClickDetail}
            />
          </div>
        </div>
        <div className="w-96 pt-5 ">
          <h6 className="text-black font-bold text-xl" onClick={onClickDetail}>{name}</h6>
          <p className="text-sm" onClick={onClickDetail}>{create_at}</p>
          <h3 className="text-black font-normal text-md pt-5" onClick={onClickDetail}>{content}</h3>
          <figure className="w-auto h-auto py-5 ">
            {image_post ? (
              <>
                <img
                  src={
                    image_post
                  }
                  className="rounded-xl"
                  onClick={onClickDetail}
                />
              </>
            ) : (
              null
            )
            }
          </figure>
          <button className="btn btn-ghost gap-2 text-xs normal-case ">
            <FiMessageCircle size={16} />
            Comment
          </button>
        </div>
        <div className="pr-10 py-5">
          <div className="dropdown" onClick={onClickEditPost}>
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <FiMoreHorizontal size={20} color="black" />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-white text-black rounded-box w-52"
            >
              <li>
                <label htmlFor={`my-modal-${noModal}`} className={`normal-case bg-transparent flex w-full`}
                // onClick={() => setIdtask(item.id)}
                >
                  <div className="flex flex-col cursor-pointer">
                    <div
                      className="btn btn-ghost normal-case font-normal"
                    >
                      Edit Profile
                    </div>
                  </div>
                </label>
              </li>
              <li>
                <p className="btn btn-ghost normal-case font-normal w-3/4"
                  onClick={onClickDeletePost}>Delete Post</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="card w-120 bg-slate-100 mx-10 pt-5 pb-2 px-5">
        <div className="flex justify-around">
          <div className="flex h-1/2">
            <img
              src={
                image
                  ? image
                  : "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              }
              className="w-[50px] h-[50px] rounded-full"
            />
          </div>

          <div className="px-2">
            <Input
              id={""}
              label={""}
              placeholder="add comment"
              className="input w-96 bg-slate-200"
              inputSet={""}
            />
          </div>
          <button className="btn btn-ghost gap-2 btn-circle ">
            <FiSend size={20} color="black" />
          </button>
        </div>
        <div className="flex justify-start">
          {comment}
        </div>
      </div>
    </div>
  );
};

export const CardStatusShowDetail: FC<CardProps> = ({
  name,
  content,
  comment,
  create_at,
  image,
  image_post,
}) => {
  return (
    <div className="card w-full bg-white pb-5 shadow-lg pr-3">
      <div className="flex flex-row justify-items-stretch">
        <div className="pl-10 py-5">
          <label className="btn btn-ghost btn-circle avatar">
            <div className="w-2/2 rounded-full">
              <img src={image ? image : "https://placeimg.com/80/80/people"} />
            </div>
          </label>
        </div>
        <div className="pl-5 w-96 py-5 ">
          <h6 className="text-black font-bold">{name}</h6>
          <p className="text-sm">{create_at}</p>
        </div>
        <div className="ml-auto mr-10 py-5">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <FiMoreHorizontal size={20} color="black" />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-white text-black rounded-box w-52"
            >
              <li>
                <a>Edit Post</a>
              </li>
              <li>
                <a>Delete Post</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" flex flex-row justify-between">
        <div className="pl-10">
          <figure>
            <img
              src={
                image_post
                  ? image_post
                  : "https://i.pinimg.com/736x/86/6b/7b/866b7bd1c2a18c2cb02a003ef920765e.jpg"
              }
              alt="Shoes"
              className="rounded-xl w-80"
            />
          </figure>
        </div>
        <div className="flex-col w-1/2 pl-5">
          <div className="flex flex-row justify-around">
            <div className="w-96 py-5">
              <h3 className="text-black font-semibold text-lg ">{content}</h3>
              <div className="flex flex-row justify-start gap-2 pt-2">
                <FiMessageCircle size={20} />
                <p className="text-sm">4 Comment</p>
              </div>
            </div>
          </div>
          <div className="card w-full bg-slate-100 pt-5 pb-2 px-5">
            <div className="flex justify-start">
              <label className="btn btn-ghost btn-circle avatar pr-2">
                <div className="w-2/2 rounded-full">
                  <img
                    src={image ? image : "https://placeimg.com/80/80/people"}
                  />
                </div>
              </label>
              <Input
                id={""}
                label={""}
                placeholder="add comment"
                className="input w-60 bg-slate-200"
                inputSet={""}
              />
              <button className="btn btn-ghost gap-2 btn-circle ml-3">
                <FiSend size={20} color="black" />
              </button>
            </div>
            <div className="flex justify-start">
              <div className="flex h-1/2 p-1">
                <img
                  src={
                    image
                      ? image
                      : "https://i.pinimg.com/736x/86/6b/7b/866b7bd1c2a18c2cb02a003ef920765e.jpg"
                  }
                  className="w-[50px] h-[50px] rounded-full"
                />
              </div>
              <div className="px-2">
                <h3 className="text-black font-normal text-sm p-3 w-full">
                  {comment}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
