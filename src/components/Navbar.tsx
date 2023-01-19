import { Link, useNavigate } from "react-router-dom";
import React, { useState,useEffect } from "react";
import { useCookies } from 'react-cookie'
import Swal from "sweetalert2"
import axios from "axios"

const Navbar = () => {
  const [cookie, setCookie, removeCookie] = useCookies<string>([])
  const [photo, setPhoto] = useState<string>("")
  const navigate = useNavigate()

  async function myProfileHandler() {
    await axios.get('http://54.254.27.167/myprofile', {
      headers: {
        Authorization: `Bearer ${cookie.token}`,
      },
    })
      .then((res) => {
        console.log("bisa: ", res.data.data)
        const { photo } = res.data.data
        setPhoto(photo)
      })
      .catch((err) => {
        console.log("gagal: ", err)
      })
  }
  useEffect(() => {
    myProfileHandler()
  }, [])

  function logOutHandler() {
    Swal.fire({
      title: "Are you sure want to logout?",
      // text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Yes",
      cancelButtonColor: "#d33",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          position: "center",
          icon: "success",
          text: "Logout successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        removeCookie("token");
        navigate("/");
        navigate(0);
      }
    });
  }
  return (
    <div className="navbar h-10 bg-white shadow sticky top-0 z-50">
      <div className="navbar-start">
        <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Eo_circle_light-blue_white_letter-s.svg/1200px-Eo_circle_light-blue_white_letter-s.svg.png'} alt="logo-app" className="w-[42px]" />
        <Link to='/' className="btn btn-ghost normal-case text-md text-[#0D99FF]">
          Sosial Media
        </Link>
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
            <div className="flex items-center">
              <img
                src={
                  cookie.token ? (
                    photo ? photo : "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  ) : (
                    "https://cdn-icons-png.flaticon.com/512/9131/9131529.png"
                  )

                }
                className="w-[40px] h-[40px] rounded-full"
              />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-white text-black rounded-box w-52"
          >
            <li>
              {
                cookie.token ? (
                  <>
                    <div onClick={() => logOutHandler()}>
                      <p>Log Out</p>
                    </div>
                  </>
                ) : (
                  <>
                    <Link to={'/login'}>
                      <p>Log in</p> </Link>
                  </>
                )
              }
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
