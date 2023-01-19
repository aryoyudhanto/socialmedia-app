import { Link, useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import React, { useState } from 'react'
import axios from 'axios'

import login from 'assets/bg-login1.png'

const Login = () => {
    const [emailOrUsername, setEmailOrUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [cookie, setCookie] = useCookies<string>([])
    const navigate = useNavigate()

    function authLogin(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        let body;
        let regexEmail = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}')

        if (regexEmail.test(emailOrUsername)) {
            body = { 
                email: emailOrUsername, 
                password: password 
            }
        } else {
            body = { 
                username: emailOrUsername, 
                password: password,
            }
        }
        axios.post('http://54.254.27.167/login', body)
            .then((res) => {
                const { token } = res.data
                setCookie("token", token)
                alert('berhasil login')
                navigate('/')
            })
            .catch((err) => {
                alert('gagal login')
            })
    }

    return (
        <div className='flex w-full h-screen bg-white'>
            <div className="relative flex flex-col w-full h-screen bg-dark-alta">
                <div className="flex h-screen justify-center items-center">
                    <div className="flex flex-col justify-center w-[400px]">
                        <form
                            className="w-full mx-auto rounded-2xl bg-[#e5e5e5] p-8 px-8 h-[480px] shadow-2xl"
                            onSubmit={(e) => authLogin(e)}
                        >
                            <h2 className="text-4xl text-black text-center font-bold">Login</h2>
                            <div className='my-5 h-6'>
                                <p className="text-center text-[#0D99FF] my-5"> </p>
                            </div>

                            <div className="flex flex-col py-2">
                                <label className="font-semibold text-[#0D99FF]">Username or Email</label>
                                <input
                                    onChange={(e) => setEmailOrUsername(e.target.value)}
                                    className="rounded-lg bg-white mt-2 p-2 border-2 focus:outline-none text-black"
                                    type="text"
                                    placeholder="username or email"
                                />
                            </div>
                            <div className="flex flex-col py-2">
                                <label className="font-semibold text-[#0D99FF]">Password</label>
                                <input
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password"
                                    className="p-2 rounded-lg bg-white mt-2 border-2 focus:outline-none text-black"
                                    placeholder="Password"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-[90%] text-lg flex m-auto my-5 py-2 capitalize bg-[#0D99FF] border-none shadow-lg text-white font-semibold rounded-lg btn hover:bg-[#0d86ff]"
                            >
                                login
                            </button>
                            <div className="flex justify-center underline my-3">
                                <Link to="/register">
                                    <p className="text-[#0D99FF] hover:text-[#0d86ff] font-semibold text-sm">Sign Up</p>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full h-screen">
                <div className='w-full h-full bg-no-repeat bg-cover' style={{ backgroundImage: `url( ${login})` }}>
                    <div className='mx-20 w-1/3 my-10'>
                        <p className='text-8xl capitalize text-white font-semibold'>Discover your social media</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login