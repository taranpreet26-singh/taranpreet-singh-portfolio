"use client"
import { motion } from "framer-motion"
import { Link, MapPin } from "lucide-react"

type IntroType = {
    name: string,
    shortIntro: string
}
export default function Intro({ name, shortIntro }: IntroType) {
    return <motion.section className="my-16">
        <h1 className="text-6xl font-bold">
            Hi, I'm {name}
        </h1>
        <p className="text-lg mt-6">
            {shortIntro}
        </p>
        <div className="w-1/2 flex gap-4">
            <div className="flex mt-4 px-1 gap-[4px] cursor-pointer bg-neutral-600 hover:bg-neutral-500 transition-all duration-700 ease-in-out rounded-md">
                <MapPin width={20} />
                <p >Punjab,India</p>
            </div>
            <div className="flex mt-4 px-1 gap-[4px] cursor-pointer bg-neutral-600 hover:bg-neutral-500 transition-all duration-700 ease-in-out rounded-md">
                <Link width={20} />
                <a  href="/files/Taranpreet Singh-2.pdf" download="Taranpreet_Singh_Resume.pdf" >Resume</a>
            </div>
        </div>
    </motion.section>
}