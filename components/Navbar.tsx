"use client"
import { easeInOut, useMotionValueEvent, useScroll } from "framer-motion"
import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { MoonStar, Sun } from "lucide-react"
import { useTheme } from "next-themes"
export default function Navbar() {

    const [scrolled, setScrolled] = useState<boolean>(true)
    const { scrollY } = useScroll()
    const [hovered, setHovered] = useState<number | null>(null)
    const navArr = ["Home", "About", "Projects"]
    useMotionValueEvent(scrollY, "change", (latest) => {
        // console.log(latest)
        if (latest > 30) {
            setScrolled(false)
        } else {
            setScrolled(true)
        }
    })

    const {theme,setTheme} = useTheme()

    return <motion.nav initial={{y:-10,opacity:0}} transition={{ duration: 0.3, ease: easeInOut }} animate={{ width: scrolled ? "100%" : ["100%","lg:50%"], y: scrolled ? 3 : 16,opacity:1 }} className={`${scrolled ? "rounded-full lg:rounded-md" : "rounded-full"}   mx-auto sticky top-2  backdrop-grayscale-75 backdrop-blur-xs  z-1 h-14 bg-black/30   border-[1px] border-white/20 `}>
        <div className={`flex justify-between pl-1 pr-4 items-center h-full w-full`}>
            <Image src={'/images/profile pic.jpg'} width={50} height={50} alt="taranpreet-img" className={`${scrolled ? "rounded-full lg:rounded-xs" : "rounded-full"}`} />
            <div className="flex items-center divide-x-1 divide-white/30 ">
                <div className="flex -gap-2 pr-2 ">
                {
                    navArr.map((element, index) => {
                        return <Link href={`/${element}`} key={index}>
                            <div className={`relative  px-2 py-[2px] `} onMouseEnter={()=>{setHovered(index); console.log(index)}} onMouseLeave={()=>{setHovered(null)}}>
                            {
                                hovered === index && <motion.div 
                                layoutId="hovered-span"
                                className="w-full h-full absolute inset-0 z-[-1]  rounded-lg bg-neutral-100 dark:bg-neutral-500"></motion.div>
                            }
                            {element}
                            </div>
                        </Link>
                    })
                }
                </div>
                <div className="pl-2" onClick={()=>{setTheme(theme==="dark"?"light":"dark")}}>
                    {
                        theme === "dark"?<Sun/>:<MoonStar/>
                    }
                
                </div>
            </div>
        </div>

    </motion.nav>
}