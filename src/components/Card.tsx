import Button from "./Button";
import { Input, TextArea } from "./Input";
import { FiImage, FiMoreHorizontal, FiMessageCircle } from "react-icons/fi";

interface CardProps {
  title: string;
  image: string;
  id: number;
  labelButton: string;
}

export const CardProfil = () => {
  return (
    <div className="card w-full bg-white shadow-md flex flex-col items-center">
      <figure className="px-5 pt-5">
        <img
          src="https://placeimg.com/400/225/arch"
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <label className="btn btn-ghost btn-circle avatar">
        <div className="w-96 rounded-full">
          <img src="https://placeimg.com/80/80/people" />
        </div>
      </label>
      <div className="card-body items-center text-center pt-3">
        <h2 className="card-title text-black font-bold">Nama Account</h2>
        <h3 className="text-black font-medium">@username</h3>
        <p className="text-black font-thin text-sm">Biodata singkat user</p>
        <div className="card-actions pt-3">
          <Button
            className="btn  bg-[#0D99FF] border-none text-white"
            label="See Profil"
          />
        </div>
      </div>
    </div>
  );
};

export const CardRecomendation = () => {
  return (
    <div className="card w-full bg-white shadow-md flex flex-col justify-start pl-3">
      <h3 className="py-5 pl-3">Recomendation</h3>

      {/* -Account_1- */}
      <div className="flex flex-row justify-between">
        <div className="px-3 pb-2">
          <label className="btn btn-ghost btn-circle avatar">
            <div className="w-2/2 rounded-full">
              <img src="https://placeimg.com/80/80/people" />
            </div>
          </label>
        </div>
        <div className="pr-16 pt-2">
          <h6 className=" text-black font-bold">Nama Account</h6>
        </div>
      </div>
      {/* -Account_2- */}
      <div className="flex flex-row justify-between">
        <div className="px-3 pb-2">
          <label className="btn btn-ghost btn-circle avatar">
            <div className="w-2/2 rounded-full">
              <img src="https://placeimg.com/80/80/people" />
            </div>
          </label>
        </div>
        <div className="pr-16 pt-2">
          <h6 className=" text-black font-bold">Nama Account</h6>
        </div>
      </div>
      {/* -Account_23, dst- */}
      <div className="flex flex-row justify-between">
        <div className="px-3 pb-2">
          <label className="btn btn-ghost btn-circle avatar">
            <div className="w-2/2 rounded-full">
              <img src="https://placeimg.com/80/80/people" />
            </div>
          </label>
        </div>
        <div className="pr-16 pt-2">
          <h6 className=" text-black font-bold">Nama Account</h6>
        </div>
      </div>
    </div>
  );
};

export const CardStatusInput = () => {
  return (
    <div className="card w-full h-auto bg-white flex shadow-md">
      <div className="card-body">
        <TextArea
          className="input w-full bg-slate-200 p-3"
          id={""}
          label={""}
          placeholder={"whats on your mind?"}
        />
        <div className="card-actions justify-end">
          <a>
            <FiImage size={30} />
          </a>
          <Button
            className="btn bg-[#0D99FF] border-none text-white"
            label="Posting"
          />
        </div>
      </div>
    </div>
  );
};

export const CardStatusShow = () => {
  return (
    <div className="card w-full bg-white pb-5 shadow-lg">
      <div className="flex flex-row justify-around">
        <div className="pl-10 py-5">
          <label className="btn btn-ghost btn-circle avatar">
            <div className="w-2/2 rounded-full">
              <img src="https://placeimg.com/80/80/people" />
            </div>
          </label>
        </div>
        <div className="w-96 py-5 ">
          <h6 className="text-black font-bold">Nama Account</h6>
          <p className="text-sm">date update</p>
          <h3 className="text-black font-semibold text-lg pt-5">Status user</h3>
          <div className="flex flex-row justify-start gap-2 pt-2">
            <div>
              <a>
                <FiMessageCircle size={20} />
              </a>
            </div>
            <div>
              <p className="text-sm">4 Comment</p>
            </div>
          </div>
        </div>
        <div className="pr-10 py-5">
          <a>
            <FiMoreHorizontal size={20} color="black" />
          </a>
        </div>
      </div>
      <div className="card w-120 bg-slate-100 mx-10 pt-5 pb-2 px-5">
        <div className="flex justify-around">
          <label className="btn btn-ghost btn-circle avatar">
            <div className="w-2/2 rounded-full">
              <img src="https://placeimg.com/80/80/people" />
            </div>
          </label>

          <div className="px-2">
            <Input
              id={""}
              label={""}
              placeholder="add comment"
              className="input w-96 bg-slate-200"
            />
          </div>
          <div>
            <a>
              <FiMoreHorizontal size={20} color="black" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CardStatusImage = () => {
  return (
    <div className="card w-full  bg-white pb-5">
      <div className="flex flex-row justify-between">
        <div className="pl-10 py-5 ">
          <h6 className="text-black font-bold">Nama Account</h6>
          <p className="text-sm">date update</p>
          <figure className=" py-5">
            <img
              src="https://placeimg.com/400/225/arch"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <h3 className="text-black font-semibold text-lg pb-3">Status user</h3>
          <div className="flex flex-row justify-start gap-2 ">
            <div>
              <a>
                <FiMessageCircle size={20} />
              </a>
            </div>
            <div>
              <p className="text-sm">4 Comment</p>
            </div>
          </div>
        </div>
        <div className="pr-10 py-5">
          <a>
            <FiMoreHorizontal size={20} color="black" />
          </a>
        </div>
      </div>
      <div className="card w-120 bg-slate-100 mx-10 pt-5 pb-2 px-5">
        <div className="flex justify-around">
          <label className="btn btn-ghost btn-circle avatar">
            <div className="w-2/2 rounded-full">
              <img src="https://placeimg.com/80/80/people" />
            </div>
          </label>

          <Input
            id={""}
            label={""}
            placeholder="add comment"
            className="input w-96 bg-slate-200"
          />

          <div>
            <a>
              <FiMoreHorizontal size={20} color="black" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CardStatusShowDetail = () => {
  return (
    <div className="card w-full bg-white pb-5 shadow-lg pr-3">
      <div className="flex flex-row justify-items-stretch">
        <div className="pl-10 py-5">
          <label className="btn btn-ghost btn-circle avatar">
            <div className="w-2/2 rounded-full">
              <img src="https://placeimg.com/80/80/people" />
            </div>
          </label>
        </div>
        <div className="pl-5 w-96 py-5 ">
          <h6 className="text-black font-bold">Nama Account</h6>
          <p className="text-sm">date update</p>
        </div>
        <div className="ml-auto mr-10 py-5">
          <a>
            <FiMoreHorizontal size={20} color="black" />
          </a>
        </div>
      </div>
      <div className=" flex flex-row justify-between">
        <div className="pl-10">
          <figure>
            <img
              src="https://placeimg.com/400/225/arch"
              alt="Shoes"
              className="rounded-xl w-80"
            />
          </figure>
        </div>
        <div className="flex-col w-1/2 pl-5">
          <div className="flex flex-row justify-around">
            <div className="w-96 py-5">
              <h3 className="text-black font-semibold text-lg ">Status user</h3>
              <div className="flex flex-row justify-start gap-2 pt-2">
                <a>
                  <FiMessageCircle size={20} />
                </a>
                <p className="text-sm">4 Comment</p>
              </div>
            </div>
          </div>
          <div className="card w-full bg-slate-100 pt-5 pb-2 px-5">
            <div className="flex justify-start">
              <label className="btn btn-ghost btn-circle avatar pr-2">
                <div className="w-2/2 rounded-full">
                  <img src="https://placeimg.com/80/80/people" />
                </div>
              </label>
              <Input
                id={""}
                label={""}
                placeholder="add comment"
                className="input w-60 bg-slate-200"
              />
              <a className="ml-3">
                <FiMoreHorizontal size={20} color="black" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
