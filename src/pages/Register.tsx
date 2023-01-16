import React from 'react'
import { Link } from 'react-router-dom'

import register from '../assets/bg-register1.png'

const Register = () => {
    return (
        <div className='flex w-full h-screen bg-white'>
            <div className='w-full h-full bg-no-repeat bg-cover' style={{ backgroundImage: `url( ${register})` }}>
                <div className='h-full flex justify-center items-center'>
                    <div className='w-1/2 h-3/4 flex justify-center bg-gray-300 rounded-2xl shadow-2xl'>
                        <form className="w-[90%] align-middle m-10 "
                        // onSubmit={(e) => registerHandler(e)}
                        >
                            <h2 className="text-4xl text-black text-center font-bold">Register</h2>
                            <div className="flex flex-col py-2">
                                <div className="">
                                    <label className="block text-[#0D99FF] font-semibold text-md md:text-left mb-1 md:mb-0 pr-4" >
                                        Full Name
                                    </label>
                                </div>
                                <div className="">
                                    <input className="bg-white appearance-none border-2 border-[#D9D9D9] rounded-2xl w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white h-14 "
                                        // disabled value={"Aryo Yudhanto"}
                                        id="inline-full-name"
                                        type="text"
                                        placeholder='Full Name'
                                    // onChange={(e) => { setNameReg(e.target.value) }} 
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col py-2">
                                <div className="">
                                    <label className="block text-[#0D99FF] font-semibold text-md md:text-left mb-1 md:mb-0 pr-4" >
                                        Email
                                    </label>
                                </div>
                                <div className="">
                                    <input className="bg-white appearance-none border-2 border-[#D9D9D9] rounded-2xl  w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white h-14" id="inline-email"
                                        type="email"
                                        placeholder='yourname@email.com'
                                    // onChange={(e) => { setEmailReg(e.target.value) }} 
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col py-2">
                                <div className="">
                                    <label className="block text-[#0D99FF] font-semibold text-md md:text-left mb-1 md:mb-0 pr-4" >
                                        Username
                                    </label>
                                </div>
                                <div className="">
                                    <input className="bg-white appearance-none border-2 border-[#D9D9D9] rounded-2xl w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white h-14" id="inline-full-username"
                                        type="text"
                                        placeholder='@username'
                                    // onChange={(e) => { setNameReg(e.target.value) }} 
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col py-2">
                                <div className="">
                                    <label className="block text-[#0D99FF] font-semibold text-md md:text-left mb-1 md:mb-0 pr-4">
                                        Password
                                    </label>
                                </div>
                                <div className="">
                                    <input className="bg-white appearance-none border-2 border-[#D9D9D9] rounded-2xl  w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white h-14" id="inline-password"
                                        type="password"
                                        placeholder='Password'
                                    // onChange={(e) => { setPasswordReg(e.target.value) }} 
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col py-2">
                                <button className="shadow bg-[#0D99FF] hover:bg-[#0d86ff] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-12 rounded"
                                    type="submit"
                                // onClick={() => swalSignUp()}
                                >
                                    Sign Up
                                </button>
                            </div>
                            <div className="flex justify-center underline py-2">
                                <Link to="/login">
                                    <p className="text-[#0D99FF] hover:text-[#0d86ff] font-semibold text-sm">Login</p>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register