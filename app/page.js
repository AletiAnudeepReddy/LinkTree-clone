"use client"
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function Home() {

  const router=useRouter()
  const [text, settext] = useState("")
  const createTree=()=>{
    router.push(`/generate?handle=${text}`)
  }
  return (
    <main>
      <section className="bg-[#254f1a] min-h-[115vh] grid grid-cols-2">
        <div className="flex justify-center mt-[4vw] flex-col ml-[10vw] gap-2">
          <p className="text-yellow-300 font-bold text-7xl tracking-tight">Everything you </p>
          <p className="text-yellow-300 font-bold text-7xl tracking-tight">are. In one,</p>
          <p className="text-yellow-300 font-bold text-7xl tracking-tight">simple link in bio.</p>
          <p className="text-yellow-300 my-7 text-xl">Join 50M+ people using Linktree for their link in bio.One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
          <div className="input flex gap-3">
            <input value={text} onChange={(e)=>settext(e.target.value)} className="px-3 w-60 font-bold bg-white focus:outline-green-800 rounded-md" type="text" placeholder="Enter your Handle"/>
            <button onClick={()=>createTree()} className="bg-[#e9c0e9] rounded-full p-5 py-4 font-semibold">Claim your Linktree</button>
          </div>
        </div>
        <div className="flex mt-[8vw] items-center justify-center flex-col mr-[7vw]">
          <Image width={600} height={600} src={"/home.png"} alt="home"/>
        </div>
      </section>
      <section className="bg-[#e9c0e9] min-h-[100vh]">
        
      </section>
    </main>
  );
}
