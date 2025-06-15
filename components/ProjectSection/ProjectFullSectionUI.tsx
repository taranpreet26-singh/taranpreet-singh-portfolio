import { useScroll, useTransform, motion,  useMotionTemplate, easeInOut, AnimatePresence, useAnimate, stagger, useMotionValueEvent, useInView } from "framer-motion"
import { JSX, ReactNode, useEffect, useRef, useState } from "react"
import { CgYoutube } from "react-icons/cg"
import { LuGithub } from "react-icons/lu"
import { RiGlobalLine } from "react-icons/ri"

type features = {
    title: string,
    info: string,
    webLink?:string,
    githubLink?:string,
    ytLink?:string,
    content: ReactNode,
    tools:{
        logo:JSX.Element,
        name:string
    }[]
}
export default function ProjectFullSectionUI({ features }: { features: features }) {

    const ref = useRef<HTMLDivElement | null>(null)
    const [pointerAnimator,animate] = useAnimate()
    const [isOverImageWrapperActive,setImageOverWrapper]=useState<boolean>(false)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })
    const [currentLogoInfoActive,setCurrentLogoInfoStatus] = useState<number | null>(null)

   


   

    const startAnimation = ()=>{
        animate(
            "p",
            {
                opacity:1,
                filter:"blur(0px)",
                y:0
            },
            {
                duration:0.5,
                ease:"easeInOut",
                delay:stagger(0.02)
            }
        )
    }
    const translateY = useTransform(scrollYProgress, [0, 1], [200, -300])
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])
    const blur = useTransform(scrollYProgress,[0.55,1],[0,10])
    const scale = useTransform(scrollYProgress,[0.55,1],[1,0.7])
    const isInView = useInView(ref, { amount: 0.3 });

    useEffect(()=>{
        if(isInView){
            startAnimation()
        }
    },[isInView])

   
    return <div
        ref={ref}
        className="grid group grid-cols-1 lg:grid-cols-2 gap-4 w-full h-full pb-20 lg:pb-40">
        <motion.div 
        ref={pointerAnimator}
        style={{filter:useMotionTemplate`blur(${blur}px)`,scale:scale,
                }}
        className="flex flex-col  pt-12 justify-center items-start gap-5">
            
            <h1 className="text-xl lg:text-3xl font-bold">
                {features?.title}
            </h1>
            <motion.h2 
            className="flex flex-wrap text-sm text-justify text-wrap text-neutral-400/60">
                {features?.info.split(" ").map((word,index)=>{
                return <motion.p
                style={{opacity:0,filter:"blur(10px)",y:10}}
                key={index}>{word} &nbsp;</motion.p>})}
            </motion.h2>
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
            className="h-fit  mt-30  relative " onMouseEnter={()=>{setImageOverWrapper(true)}} onMouseLeave={()=>{setImageOverWrapper(false)}}>
            {features?.content}
            {
                isOverImageWrapperActive &&
            <div className="absolute flex items-center justify-center w-full h-full bg-neutral-400/30 rounded-xl inset-0 ">
                
                {
                    features.githubLink &&
                <div className="bg-neutral-900  border-[1px] border-neutral-400/40 p-2  rounded-full">
                    <a  href={`${features?.githubLink}`}><LuGithub  size={20}/></a>
                </div>
                }
                {
                    features.webLink &&
                <div className="bg-neutral-900  border-[1px] border-neutral-400/40 p-2  rounded-full">
                    <a href={`${features?.webLink}`}><RiGlobalLine size={20} /></a>
                </div>
                }
                {
                    features.ytLink &&
                <div className="bg-neutral-900  border-[1px] border-neutral-400/40 p-2  rounded-full">
                    <a href={`${features?.ytLink}`}><CgYoutube  size={20}/></a>
                </div>
                }

            </div>
            }
            <span className="absolute  mx-auto bottom-0 w-3/4 h-px inset-x-0 bg-gradient-to-r  to-transparent via-white from-transparent"></span>
            <span className="absolute group-hover:opacity-100 opacity-0 mx-auto bottom-0 w-full h-[6px] duration-700 ease-in-out blur-sm inset-x-0 bg-gradient-to-r  to-transparent via-white from-transparent"></span>

        </motion.div>
    </div>
}