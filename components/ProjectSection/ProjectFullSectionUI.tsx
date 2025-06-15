import { useScroll, useTransform, motion,  useMotionTemplate, easeInOut, AnimatePresence } from "framer-motion"
import { JSX, ReactNode, useRef, useState } from "react"
import { RiTailwindCssFill } from "react-icons/ri"
import { SiNextdotjs, SiPrisma, SiTurborepo } from "react-icons/si"

type features = {
    title: string,
    info: string,
    content: ReactNode,
    tools:{
        logo:JSX.Element,
        name:string
    }[]
}
export default function ProjectFullSectionUI({ features }: { features: features }) {

    const ref = useRef<HTMLDivElement | null>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })
    const [currentLogoInfoActive,setCurrentLogoInfoStatus] = useState<number | null>(null)

    const logoInfoProjectArr = [
        {
            logo:(
                <SiNextdotjs size={20} />
            ),
            content:(
                <p className="text-sm ">
                    Next.js
                </p>
            )
        },
        {
            logo:(
                <RiTailwindCssFill   size={20}/>
            ),
             content:(
                <p className="text-sm ">
                    Tailwind
                </p>
            )
        },
        {
            logo:(
                <SiTurborepo  size={20}/>
            ),
             content:(
                <p className="text-sm ">
                    Turborepo
                </p>
            )
        },
        {
            logo:(
                <SiPrisma size={20}/>
            ),
            content:(
                <p className="text-sm ">
                    Prisma
                </p>
            )
        },
    ]


    const translateY = useTransform(scrollYProgress, [0, 1], [300, -300])
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])
    const blur = useTransform(scrollYProgress,[0.55,1],[0,10])
    const scale = useTransform(scrollYProgress,[0.55,1],[1,0.7])
    return <div
        ref={ref}
        className="grid group grid-cols-1 lg:grid-cols-2 gap-4 w-full h-full pb-20 lg:pb-40">
        <motion.div 
        style={{filter:useMotionTemplate`blur(${blur}px)`,scale:scale,
                }}
        className="flex flex-col  pt-12 justify-center items-start gap-5">
            
            <h1 className="text-xl lg:text-3xl font-bold">
                {features?.title}
            </h1>
            <h2 className=" text-sm text-justify text-wrap text-neutral-400/60">
                {features?.info}
            </h2>
            <div className="flex flex-wrap gap-1 pl-0 lg:pl-3">
            {
                features.tools.map((element,index)=>{
                    return  <motion.div
                    key={index}
                    layout
                    onClick={()=>{setCurrentLogoInfoStatus(index)}} onMouseEnter={()=>{setCurrentLogoInfoStatus(index)}} onMouseLeave={()=>{setCurrentLogoInfoStatus(null)}}   
                    style={{position:"relative",z:index}}             
                    className="flex    ml-0 lg:-ml-3 bg-neutral-900 items-center gap-1 border-[1px] border-neutral-400/40 p-1  rounded-full">
                    <div>
                        {element.logo}
                        
                    </div>
                    
                    <div className="block lg:hidden">
                        {element.name}
                    </div>
                    <AnimatePresence>
                    {
                        currentLogoInfoActive === index &&
                        <motion.div 
                        key="tooltip"
                        layout
                        initial={{opacity:0,width:0,marginRight:0}}
                        animate={{opacity:1,width:"auto",marginRight:14}}
                        exit={{opacity:0,width:0,marginRight:0}}
                        transition={{duration:0.5,ease:easeInOut}}
                        className="hidden text-sm lg:block overflow-hidden">
                        {element.name}
                        </motion.div> 
                    }
                    </AnimatePresence>
                </motion.div>
                })
            }

            </div>
            
        </motion.div >

        <motion.div
            style={{ y: translateY, opacity: opacity }}
            className="h-fit pt-30  relative ">
            {features?.content}
            <span className="absolute  mx-auto bottom-0 w-3/4 h-px inset-x-0 bg-gradient-to-r  to-transparent via-white from-transparent"></span>
            <span className="absolute group-hover:opacity-100 opacity-0 mx-auto bottom-0 w-full h-[6px] duration-700 ease-in-out blur-sm inset-x-0 bg-gradient-to-r  to-transparent via-white from-transparent"></span>

        </motion.div>
    </div>
}