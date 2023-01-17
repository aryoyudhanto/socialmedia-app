import React from "react";
import logoSosmed from "../assets/logoSosmed.svg";

const Navbar = () => {
  return (
    <div className="navbar bg-white shadow sticky top-0 z-50">
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
      <div className="navbar-end">
        <label className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src="https://placeimg.com/80/80/people" />
          </div>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
