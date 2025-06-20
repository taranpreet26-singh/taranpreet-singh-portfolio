import {  Mail } from "lucide-react";
import { BsTwitterX } from "react-icons/bs";
import { LiaLinkedinIn } from "react-icons/lia";
import { LuGithub } from "react-icons/lu";

export default function Footer() {
    return <footer className="mt-8 flex items-center border-t-[1px] py-10 justify-between">
        <h1 className="text-sm">Taranpreet Singh</h1>
        <div className="flex gap-1 pr-1">

            <div className="bg-white dark:bg-neutral-900 flex items-center dark:hover:bg-neutral-300 transition-all duration-700 hover:scale-110 ease-in-out dark:hover:text-black  hover:bg-neutral-900 hover:text-white  justify-center border-[1px] border-black dark:border-neutral-400/40 p-1  rounded-full">
                <a href={`https://github.com/taranpreet26-singh`} target="_blank"><LuGithub size={20} /></a>
            </div>
            <div className="bg-white dark:bg-neutral-900 border-[1px] flex items-center dark:hover:bg-neutral-300 transition-all hover:scale-110 duration-700 ease-in-out dark:hover:text-black  hover:bg-neutral-900 hover:text-white justify-center border-black dark:border-neutral-400/40 p-1  rounded-full">
                <a href={`mailto:ramghrialoveysingh123@gmail.com`} ><Mail size={20} /></a>
            </div>
            <div className="bg-white dark:bg-neutral-900  border-[1px] flex items-center dark:hover:bg-neutral-300 transition-all hover:scale-110 duration-700 ease-in-out dark:hover:text-black  hover:bg-neutral-900 hover:text-white justify-center border-black dark:border-neutral-400/40 p-1  rounded-full">
                <a href={`https://www.linkedin.com/in/taranpreet-singh-57185a1a0/`} target="_blank" className="hover:text-blue-500"><LiaLinkedinIn size={20} /></a>
            </div>
            <div className="bg-white dark:bg-neutral-900  border-[1px] flex items-center dark:hover:bg-neutral-300 transition-all hover:scale-110 duration-700 ease-in-out dark:hover:text-black  hover:bg-neutral-900 hover:text-white justify-center border-black dark:border-neutral-400/40 p-1  rounded-full">
                <a href={`https://x.com/Taranpreet85947`} target="_blank"><BsTwitterX size={20} /></a>
            </div>
            
        </div>
    </footer>
}