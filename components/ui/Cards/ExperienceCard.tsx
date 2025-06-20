import { easeInOut, motion } from "framer-motion"
import { JSX } from "react";
type ExperienceType = {
    logo: JSX.Element,
    position: string,
    startDate: string,
    endDate?: string,
    companyName: string,
    status: string,
    shortInfo: string,
    tools: { logo: JSX.Element, name: string }[]
}
export default function ExperienceCard({ features }: { features: ExperienceType }) {
    return <div className="bg-neutral-300  dark:bg-[#1a1a1a] relative group mt-6  rounded-xl z-[0]  hover:bg-[#1d1d1d]  transition-all duration-500 ease-in-out">
        <div className="flex  flex-col p-6">
            <div className="flex flex-col lg:flex-row">
                <div className="p-2 border-1 w-fit border-black/60 dark:border-white rounded-xl bg-neutral-200 dark:bg-neutral-700 h-fit">
                    {features.logo}
                </div>
                <div className="p-0 lg:pl-5">
                    <div className="flex flex-col lg:flex-row   lg:items-center gap-2">
                        <motion.h1
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, ease: easeInOut }}
                            className="flex dark:text-white group-hover:text-white text-black text-xl font-bold ">
                            {features.position}
                        </motion.h1>
                        <motion.span
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, ease: easeInOut }}
                            className="text-sm lg:block hidden  text-neutral-500/60 pt-px">•</motion.span>
                        <motion.span
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, ease: easeInOut }}
                            className="text-pink-500/60 lg:text-neutral-500/60 font-medium list-image-none text-md">{features.companyName}</motion.span >
                    </div>

                    <motion.p
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, ease: easeInOut }}
                        className="text-green-500/60 lg:text-neutral-500/60">{features.status}</motion.p>
                        
                    <motion.p
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, ease: easeInOut }}
                        className="text-green-500/60 lg:text-neutral-500/60">Start: {features.startDate}</motion.p>

                    {
                      features.endDate &&  <motion.p
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, ease: easeInOut }}
                            className="text-green-500/60 lg:text-neutral-500/60">End: {features.startDate}</motion.p>
                    }
                    <motion.p
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, ease: easeInOut }}
                        className="text-neutral-500/60">{features.shortInfo}</motion.p>
                </div>
            </div>
            <div className="flex flex-wrap pt-2 gap-1">
                {
                    features.tools.map((element, index) => {
                        return <motion.div
                            key={index}
                            layout
                            style={{ position: "relative", z: index }}
                            className="flex   bg-white dark:bg-neutral-900 items-center gap-1 border-[1px] border-neutral-400/40 p-1  rounded-full">
                            <div>
                                {element.logo}

                            </div>

                            <div className="">
                                {element.name}
                            </div>

                        </motion.div>
                    })
                }

            </div>
        </div>
        <motion.div
            className="absolute  bg-gradient-to-b to-transparent via-cyan-400 left-px  h-1/2 group-hover:h-3/4 duration-500 ease-in-out transition-all inset-y-0 my-auto w-px from-transparent"></motion.div>
        <motion.div

            className="absolute  bg-gradient-to-b to-transparent opacity-0 group-hover:opacity-100 blur-xl via-cyan-400 left-0 z-[1]  h-3/4 inset-y-0 my-auto w-px from-transparent"></motion.div>
    </div>
}