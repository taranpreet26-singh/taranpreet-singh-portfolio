"use client"
import { useState } from "react"

export default function About(){
    const [showAllText,setShowTextStatus] = useState<boolean>(false)
    return <section id="about">
        <h1 className="text-xl lg:text-3xl  font-extrabold">About</h1>
        <div className="flex">
        <p className="text-sm  lg:text-md text-justify mt-2   dark:text-neutral-400/60">I was born and raised up in <a href="https://maps.app.goo.gl/LXdsTrU1xmTiWWv28" className="underline font-bold">Jalandhar,Punjab India. </a>
         I'm passionate about building effective & impactful products that leverage technology to make a difference.I actively share my work on <a href="https://github.com/taranpreet26-singh" className="underline font-bold">Github</a> and <a href="https://x.com/Taranpreet85947" className="underline font-bold">Twitter</a>. Additionally , I'm always curious about Web3 <span className="cursor-pointer" onClick={()=>{setShowTextStatus(true)}}>{!showAllText && `(show more...)`}</span>
          {
            showAllText && ` And I began my Computer Science career in 2021. During my 2nd year of college, I started with Java programming language which help to build a strong foundation in coding concept .Later, I explored Web2 Technology,which led me to become a Full Stack Developer at an American-based company , where I have been working since March/2025. Alongside this, i'm also work as a freelancer. ${<span className="cursor-pointer" onClick={()=>{setShowTextStatus(false)}}>{!showAllText && "(show less...)"}</span>}`
         } 
        </p>
        
        </div>
    </section>
}