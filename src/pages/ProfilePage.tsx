import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

import Layout from '../components/Layout'
import { TextArea } from '../components/Input'
import useCookies from 'react-cookie/cjs/useCookies'

interface ProfileType {
    id?: number,
    name?: string,
    email?: string,
    username?: string,
    photo?: string,
    date_of_birth?: string,
    phone_number?: string,
    about_me?: string,
}

const ProfilePage = () => {
    const [profileData, setProfileData] = useState<ProfileType>({})
    const [fullName, setFullName] = useState()
    const [email, setEmail] = useState()
    const [userName, setUserName] = useState()
    const [photo, setPhoto] = useState()
    const [dateOfBirth, setDateOfBirth] = useState()
    const [phoneNumber, setPhoneNumber] = useState()
    const [bio, setBio] = useState()
    const [cookie, setCookie] = useCookies<string>([])
    const navigate = useNavigate()

    async function myProfileHandler() {
        await axios.get('http://54.254.27.167/myprofile', {
            headers: {
                Authorization: `Bearer ${cookie.token}`,
            },
        })
            .then((res) => {
                console.log("bisa: ", res.data.data)
                setProfileData(res.data.data)

            })
            .catch((err) => {
                console.log("gagal: ", err)
            })
    }

    useEffect(() => {
        myProfileHandler();
    }, []);

    useEffect(() => {
        if (!cookie.token) {
            navigate("/");
        }
    }, [cookie.token]);

    return (
        <Layout>
            <div className='flex'>
                <div className="flex flex-col w-full bg-dark-alta">
                    <div className="flex justify-center py-20 px-10">
                        <div className="flex flex-col justify-center w-[400px]">
                            <div className="w-full mx-auto rounded-2xl bg-[#e5e5e5] h-[500px] p-8 shadow-2xl"                        >
                                <div className='flex h-1/2'>
                                    <div className='w-[150px] h-[150px] mx-auto mt-16 rounded-full bg-white border-none'>
                                        <img
                                            // src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                                            src={profileData.photo}
                                            className='rounded-full' />
                                    </div>
                                </div>
                                <div className='h-1/2'>
                                    <div className='mx-auto my-5 flex justify-center'>
                                        <h1 className='text-2xl text-black font-bold'>{profileData.name}</h1>
                                    </div>
                                    <div className='mx-auto my-5 flex justify-center'>
                                        <p className='text-md text-black'>@{profileData.username}</p>
                                    </div>
                                    <div className='mx-auto my-5 flex justify-center'>
                                        <TextArea label='About Me: ' id='' value={profileData.about_me}>
                                        </TextArea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full">
                    <div className="flex py-20 px-10 justify-center items-center">
                        <form
                            className="w-full mx-auto rounded-2xl"
                        >
                            <div className="flex flex-col py-2">
                                <label className="font-semibold text-[#0D99FF]">Full Name</label>
                                <input
                                    // value={email}
                                    className="rounded-lg bg-white mt-2 p-2 border-2 focus:outline-none text-black w-3/4"
                                    type="text"
                                    placeholder="Full Name"
                                    value={profileData.name}
                                    disabled
                                />
                            </div>
                            <div className="flex flex-col py-2">
                                <label className="font-semibold text-[#0D99FF]">Email</label>
                                <input
                                    // value={email}
                                    className="rounded-lg bg-white mt-2 p-2 border-2 focus:outline-none text-black w-3/4"
                                    type="email"
                                    placeholder="yourname@email.com"
                                    value={profileData.email}
                                    disabled
                                />
                            </div>
                            <div className="flex flex-col py-2">
                                <label className="font-semibold text-[#0D99FF]">Username</label>
                                <input
                                    // value={email}
                                    className="rounded-lg bg-white mt-2 p-2 border-2 focus:outline-none text-black w-3/4"
                                    type="text"
                                    placeholder="@username"
                                    value={'@' + profileData.username}
                                    disabled
                                />
                            </div>
                            <div className="flex flex-col py-2">
                                <label className="font-semibold text-[#0D99FF]">Date of Birth</label>
                                <input
                                    // value={email}
                                    className="rounded-lg bg-white mt-2 p-2 border-2 focus:outline-none text-black w-3/4"
                                    type="text"
                                    placeholder="Date of Birth"
                                    value={profileData.date_of_birth}
                                    disabled
                                />
                            </div>
                            <div className="flex flex-col py-2">
                                <label className="font-semibold text-[#0D99FF]">Phone Number</label>
                                <input
                                    // value={email}
                                    className="rounded-lg bg-white mt-2 p-2 border-2 focus:outline-none text-black w-3/4"
                                    type="text"
                                    placeholder="08123xxxxxxx"
                                    value={profileData.phone_number}
                                    disabled
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-3/4 text-lg m-auto my-5 py-2 capitalize bg-[#0D99FF] border-none shadow-lg text-white font-semibold rounded-lg btn hover:bg-[#0d86ff]"
                            >
                                Update Profile
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        </Layout>
    )
}

export default ProfilePage