import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useCookies from 'react-cookie/cjs/useCookies'
import axios from 'axios'

import Layout from '../components/Layout'

import Modals from '../components/Modals'

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
    const [fullName, setFullName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [userName, setUserName] = useState<string>("")
    const [photo, setPhoto] = useState<string>("")
    const [dateOfBirth, setDateOfBirth] = useState<string>("")
    const [phoneNumber, setPhoneNumber] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [bio, setBio] = useState<string>("")
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
                const { name, email, username, photo, date_of_birth, phone_number, about_me } = res.data.data
                setProfileData(res.data.data)
                setFullName(name)
                setEmail(email)
                setUserName(username)
                setPhoto(photo)
                setDateOfBirth(date_of_birth)
                setPhoneNumber(phone_number)
                setBio(about_me)
            })
            .catch((err) => {
                console.log("gagal: ", err)
            })
    }

    useEffect(() => {
        myProfileHandler();
    }, []);

    function editProfile() {
        axios.put(`http://54.254.27.167/users`, {
            name: fullName,
            username: userName,
            email: email,
            date_of_birth: dateOfBirth,
            phone_number: phoneNumber,
            about_me: bio,
            password: password,
            image: photo,
        }, {
            headers: {
                Authorization: `Bearer ${cookie.token}`,
            },
        })
            .then((res) => {
                console.log(res)
                alert("berhasil")
                myProfileHandler()
            }).catch((err) => {
                console.log(err)
                alert("gagal")
            })
    }

    useEffect(() => {
        if (!cookie.token) {
            navigate("/");
        }
    }, [cookie.token]);

    console.log("nama", fullName)
    console.log("email", email)
    console.log("username", userName)
    console.log("date", dateOfBirth)
    console.log("phone", phoneNumber)
    console.log("about", bio)
    console.log("poto", photo)
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
                                            src={profileData.photo ? profileData.photo : "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"}
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
                                    <div className='mx-auto my-5 flex justify-center w-3/4 h-1/2'>
                                        <div className='boder-1 bg-white w-full rounded-xl flex items-center justify-center'>
                                            <p className='text-center text-black'>{profileData.about_me}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full">
                    <div className="flex pt-20 pb-4 px-10 justify-center items-center">
                        <form
                            className="w-full mx-auto rounded-2xl"
                        >
                            <div className="flex flex-col py-2">
                                <label className="font-semibold text-[#0D99FF]">Full Name</label>
                                <input
                                    // value={email}
                                    className="rounded-lg bg-white mt-2 p-2 border-2 focus:outline-none text-black w-3/4"
                                    type="text"
                                    placeholder="update profile first"
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
                                    placeholder="update profile first"
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
                                    placeholder="update profile first"
                                    value={'@' + profileData.username}
                                    disabled
                                />
                            </div>
                            <div className="flex flex-col py-2">
                                <label className="font-semibold text-[#0D99FF]">Date of Birth</label>
                                <input
                                    className="rounded-lg bg-white mt-2 p-2 border-2 focus:outline-none text-black w-3/4"
                                    type="text"
                                    placeholder="update profile first"
                                    value={profileData.date_of_birth}
                                    disabled
                                />
                            </div>
                            <div className="flex flex-col py-2">
                                <label className="font-semibold text-[#0D99FF]">Phone Number</label>
                                <input
                                    className="rounded-lg bg-white mt-2 p-2 border-2 focus:outline-none text-black w-3/4"
                                    type="text"
                                    placeholder="update profile first"
                                    value={profileData.phone_number}
                                    disabled
                                />
                            </div>
                        </form>
                    </div>

                    <label htmlFor={`my-modal-1`} className={`normal-case text-pink-airbnb bg-transparent`}
                    // onClick={() => setIdtask(item.id)}
                    >
                        <div className="flex flex-col cursor-pointer">
                            <div
                                className="w-1/3 text-lg mx-10 capitalize bg-[#0D99FF] border-none shadow-lg text-white font-semibold rounded-lg btn hover:bg-[#0d86ff]"
                            >
                                Update Profile
                            </div>
                        </div>
                    </label>
                    <Modals
                        no={1}
                        titleModal={"Update Profile"}
                        input1={
                            <div className="flex py-2 w-full">
                                <label className="font-semibold text-[#0D99FF] flex items-center justify-center w-1/3">Picture</label>
                                <input
                                    // value={email}
                                    className="file-input file:bg-[#0D99FF] file:rounded-lg file:border-none file:text-white 
                                    text-[#0D99FF] rounded-lg border-2 border-[#e5e5e5] bg-white focus:outline-none w-full"
                                    type="file"
                                    placeholder="Profile Picture"
                                    // onChange={(e) => setPhoto(e.target.files[0])}
                                />
                            </div>
                        }
                        input2={
                            <div className="flex py-2 w-full">
                                <label className="font-semibold text-[#0D99FF] flex items-center justify-center w-1/3 text-center">Full Name</label>
                                <input
                                    // value={email}
                                    className="rounded-lg bg-white border-[#e5e5e5] px-5 p-2 border-2 focus:outline-none text-black w-full"
                                    type="text"
                                    placeholder="Full Name"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                />
                            </div>
                        }
                        input3={
                            <div className="flex py-2 w-full">
                                <label className="font-semibold text-[#0D99FF] flex items-center justify-center w-1/3 text-center">Email</label>
                                <input
                                    // value={email}
                                    className="rounded-lg bg-white border-[#e5e5e5] px-5 p-2 border-2 focus:outline-none text-black w-full"
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        }
                        input4={
                            <div className="flex py-2 w-full">
                                <label className="font-semibold text-[#0D99FF] flex items-center justify-center w-1/3 text-center">Username</label>
                                <input
                                    // value={email}
                                    className="rounded-lg bg-white border-[#e5e5e5] px-5 p-2 border-2 focus:outline-none text-black w-full"
                                    type="text"
                                    placeholder="Username"
                                    value={userName}
                                    onChange={(e) => setUserName(e.target.value)}
                                />
                            </div>
                        }
                        input5={
                            <div className="flex py-2 w-full">
                                <label className="font-semibold text-[#0D99FF] flex items-center justify-center w-1/3 text-center">Date Of Birth</label>
                                <input
                                    // value={email}
                                    className="rounded-lg bg-white border-[#e5e5e5] px-5 p-2 border-2 focus:outline-none text-black w-full"
                                    type="text"
                                    placeholder="Date Of Birth"
                                    value={dateOfBirth}
                                    onChange={(e) => setDateOfBirth(e.target.value)}
                                />
                            </div>
                        }
                        input6={
                            <div className="flex py-2 w-full">
                                <label className="font-semibold text-[#0D99FF] flex items-center justify-center w-1/3 text-center">Phone Number</label>
                                <input
                                    // value={email}
                                    className="rounded-lg bg-white border-[#e5e5e5] px-5 p-2 border-2 focus:outline-none text-black w-full"
                                    type="text"
                                    placeholder="0812xxxxxxxx"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                />
                            </div>
                        }
                        input7={
                            <div className="flex py-2 w-full">
                                <label className="font-semibold text-[#0D99FF] flex items-center justify-center w-1/3 text-center">About Me </label>
                                <input
                                    // value={email}
                                    className="rounded-lg bg-white border-[#e5e5e5] px-5 p-2 border-2 focus:outline-none text-black w-full"
                                    type="text"
                                    placeholder="About Me"
                                    value={bio}
                                    onChange={(e) => setBio(e.target.value)}
                                />
                            </div>
                        }
                        input8={
                            <div className="flex py-2 w-full">
                                <label className="font-semibold text-[#0D99FF] flex items-center justify-center w-1/3 text-center">Password </label>
                                <input
                                    className="rounded-lg bg-white border-[#e5e5e5] px-5 p-2 border-2 focus:outline-none text-black w-full"
                                    type="password"
                                    placeholder="Password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        }
                        tombol1={"Cancel"}
                        tombol2={"Save"}
                        onClick={() => editProfile()}
                    />
                </div>
            </div>

        </Layout>
    )
}

export default ProfilePage
    // id ?: number,
    // name ?: string,
    // email ?: string,
    // username ?: string,
    // photo ?: string,
    // date_of_birth ?: string,
    // phone_number ?: string,
    // about_me ?: string,