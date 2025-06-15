"use client"
import About from "@/components/About";
import Career from "@/components/Career";
import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

import { easeInOut, motion } from "framer-motion"
import Lenis from "lenis";
import { useEffect, useState } from "react";
export default function Home() {
  const [lenis,setLenis] = useState<Lenis | null>(null)
  const [rafState,setRafState] = useState<number | null>(null)
    useEffect(()=>{
      const scroller = new Lenis()
      
      console.log(lenis,rafState)
  
      function ref(time:any){
        scroller.raf(time)
        requestAnimationFrame(ref)
      }
  
      const rf = requestAnimationFrame(ref)
      setRafState(rf)
      setLenis(scroller)
     return () => {
      cancelAnimationFrame(rf);
    };
    },[])
  return (
    <section className="" >
      <div className="px-10 md:px-30 lg:px-0 w-full lg:max-w-3xl  relative  lg:mx-auto h-full">
        <Navbar />
        <Intro name="Taranpreet" shortIntro="A 23-year-old Full Stack Developer with a passion for technology, continuous learning, and building meaningful digital experiences." />
      <About/>
      <Career/>
      <Projects/>
     
            </div>
        <motion.div
        initial={{opacity:0,x:500,y:200,scale:0.9}}
        animate={{opacity:1,x:-400,y:-400,scale:1.4,zIndex:-1}}
        transition={{duration:2.6,delay:0.8,ease:easeInOut}}
        className="animate-spotlight  pointer-events-none z-[10]  h-[169%] w-[138%] lg:w-[84%]  fixed top-0 left-0 md:left-0 md:top-0"
        >
        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3787 2842" fill="none"><g filter="url(#filter)"><ellipse cx="1924.71" cy="273.501" rx="1924.71" ry="273.501" transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)" fill="white" fillOpacity="0.21"></ellipse></g><defs><filter id="filter" x="0.860352" y="0.838989" width="3785.16" height="2840.26" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="151" result="effect1_foregroundBlur_1065_8"></feGaussianBlur></filter></defs></svg>
        </motion.div>
    </section>
  );
}
