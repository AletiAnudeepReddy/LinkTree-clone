"use client"
import React from 'react'
import { useState } from 'react'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Generate = () => {

    const [link, setlink] = useState("")
    const [linktext, setlinktext] = useState("")
    const [handle, sethandle] = useState("")
    const [pic, setpic] = useState("")

    const addLink=async(link,linktext,handle)=>{
        const myHeaders=new Headers();
        myHeaders.append("Content-Type","application/json")
        const raw=JSON.stringify({
            "link":link,
            "linktext":linktext,
            "handle":handle
        });
        const requestOptions={
            method:"POST",
            headers:myHeaders,
            body:raw,
            rediret:"follow"
        };

        const r=await fetch("http://localhost:3000/api/add",requestOptions)
        const result=await r.json()
        toast(result.message)
        setlink("")
        setlinktext("")

    }
  return (
    <>
    <div className='bg-[#e9c0e9] min-h-screen grid grid-cols-2'>
        <div className='ml-[10vw] mt-[6vw] col1 flex flex-col justify-center text-gray-700 '>
            <h1 className='text-4xl font-bold'>Create your Linktree</h1>
            <div className='flex flex-col gap-5 my-8'>
            <div className='item'>
                <h2 className='font-semibold text-2xl mb-1'>Step-1: Claim your Handle</h2>
                <div className='ml-2'>
                    <input value={handle||""} onChange={e=>{sethandle(e.target.value)}} className='px-4 bg-white py-2 mr-2 my-2 focus:outline-pink-500 rounded-full' type='text' placeholder='Choose a Handle'/>
                </div>
            </div>
            <div className='item'>
                <h2 className='font-semibold text-2xl mb-1'>Step-2: Add Links</h2>
                <div className='ml-2'>
                    <input value={linktext||""} onChange={e=>{setlinktext(e.target.value)}} className='px-4 bg-white py-2 mr-2 my-2 focus:outline-pink-500 rounded-full' type='text' placeholder='Enter Link text'/>
                    <input value={link||""} onChange={e=>{setlink(e.target.value)}} className='px-4 bg-white py-2 mr-2 my-2 focus:outline-pink-500 rounded-full' type='text' placeholder='Enter Link'/>
                    <button onClick={()=>{addLink(link,linktext,handle)}} className='p-5 py-2 ml-1 cursor-pointer hover:bg-slate-800 bg-slate-700 text-white font-bold rounded-3xl'>Add Link</button>
                    <ToastContainer/>
                </div>
            </div>
            <div className='item'>
                <h2 className='font-semibold text-2xl mb-1'>Step-3: Add picture and finalize</h2>
                <div className='ml-2 flex flex-col'>
                    <input value={pic||""} onChange={e=>{setpic(e.target.value)}} className='px-4 bg-white py-2 mr-30 my-2 focus:outline-pink-500 rounded-full' type='text' placeholder='Enter Link to your picture'/>
                    <button className='p-5 w-fit mt-4 py-2 ml-2 cursor-pointer hover:bg-slate-800 bg-slate-700 text-white font-bold rounded-3xl'>Create your Linktree</button>
               
                </div>
            </div>
            </div>
        </div>
        <div className='flex justify-center items-center col2 w-full h-screen bg-slate-200'>
            <img className='h-full object-contain mr-[6vw]' src='/generate.png' alt='generate'/>
        </div>
    </div>
    <div className='bg-slate-100 min-h-[100vh]'>

    </div>
    </>
  )
}

export default Generate