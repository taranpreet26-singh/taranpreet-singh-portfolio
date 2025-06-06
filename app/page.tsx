"use client"
import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import {easeInOut, motion} from "framer-motion"
export default function Home() {
  return (
    <section className="" >
      <div className="max-w-3xl relative  mx-auto h-[200vh]">
        <Navbar />
        <Intro name="Taranpreet" shortIntro="A 23-year-old Full Stack Developer with a passion for technology, continuous learning, and building meaningful digital experiences." />
      </div>
      <motion.div 
      initial={{y:-10,opacity:0}}
      animate={{y:250,x:-100,opacity:0.7}}
      transition={{duration:2,ease:easeInOut}}
      className="fixed top-0  rounded-full blur-[50px]  w-[55%] rotate-30 h-[8%] bg-gradient-to-tr from-neutral-300/60   to-white/60">

      </motion.div>
    </section>
  );
}
