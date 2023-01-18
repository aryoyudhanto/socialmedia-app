import React from "react";
import logoSosmed from "../assets/logoSosmed.svg";

const Navbar = () => {
  return (
    <div className="navbar h-10 bg-white shadow sticky top-0 z-50">
      <div className="navbar-start">
        <img src={logoSosmed} alt="logo-app" className="w-20" />
        <a className="btn btn-ghost normal-case text-md text-[#0D99FF]">
          Aplikasi Sosial Media
        </a>
      </div>
      <div className="navbar-center">
        <input
          type="text"
          placeholder="Seacrh"
          className="input input-bordered input-md bg-slate-100 w-96"
        />
      </div>
      <div className="navbar-end mr-10">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="flex h-1/2">
              <img
                src="https://i.pinimg.com/736x/f7/ba/fb/f7bafb8b735c40a4b6aa84d5cd2def18.jpg"
                className="w-[50px] h-[50px] rounded-full"
              />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-white text-black rounded-box w-52"
          >
            <li>
              <a>Log Out</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
