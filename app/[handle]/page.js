import Link from "next/link"
import clientPromise from "@/lib/mongodb"
import { notFound } from "next/navigation";

export default async function Page({ params }) {
    const handle = (await params).handle
    const client=await clientPromise;
    const db=client.db("linktree")
    const collection=db.collection("links")

    const item=await collection.findOne({handle:handle})
    if (!item){
        return notFound()
    }
    const item2 = {
        "_id": {
            "$oid": "686a149f462dea449b319d8e"
        },
        "links": [
            {
                "link": "https://github.com/AletiAnudeepReddy",
                "linktext": "Github"
            },
            {
                "link": "https://www.youtube.com/",
                "linktext": "Youtube"
            },
            {
                "link": "https://open.spotify.com/",
                "linktext": "Spotify"
            }
        ],
        "handle": "KeerthySuresh",
        "pic": "https://i.pinimg.com/474x/08/05/eb/0805ebbb209486fa395c428cfaa0e8ec.jpg"

    }
    return <div className="flex min-h-screen bg-purple-400 justify-center items-start py-10">
        <div className="photo flex justify-center flex-col items-center gap-4">
            <img width={150} height={150} className="rounded-full" src={item.pic} alt=""/>
            <span className="p-0 font-bold text-xl">@{item.handle}</span>
            <span className="desc w-80 text-center">Made to travel. For help, please folloe one of our customer support links below.</span>
            <div className="links">
                {item.links.map((item,index)=>{
                    return <Link target="_blank" href={item.link}  key={index}>
                        <div className="bg-purple-100  hover:text-lg hover:bg-white shadow-lg px-2 min-w-96 flex justify-center rounded-md m-4 py-3">
                            {item.linktext}
                        </div>
                    </Link>
                })}
            </div>
        </div>
    </div>
}