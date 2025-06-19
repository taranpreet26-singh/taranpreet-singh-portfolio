import { Building, CodeXml } from "lucide-react"
import { DiNodejs } from "react-icons/di"
import { RiTailwindCssFill } from "react-icons/ri"
import { SiExpress, SiNextdotjs, SiSocketdotio } from "react-icons/si"
import ExperienceCard from "./ui/Cards/ExperienceCard"
import { FaReact } from "react-icons/fa"

export default function Experience() {
    const experienceArr = [
        {
            logo: (
                <Building color="#FF0099" size={20} />
            ),
            position: "Front-End Developer",
            companyName: "Clear Digital",
            status: "Current (fulltime)",
            startDate:"3-March-2025",
            shortInfo: "Developing a creative and engaging website with seamless frontend integration across various CMS platforms.",
            tools: [
                    { logo: <RiTailwindCssFill size={20} />, name: "Tailwind" },
                    { logo: <SiNextdotjs size={20} />, name: "Next.js" },
                    { logo: <DiNodejs size={20} />, name: "Node.js" },
                    { logo: <SiExpress size={20} />, name: "Express" },
                    {
                        logo: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20">
                            <circle cx="256" cy="256" r="256" fill="#fff" />
                            <path d="M256 168a88 88 0 1 1-88 88 88 88 0 0 1 88-88z" fill="#fff" />
                            <path fill="#F14436" d="M164 163a77 77 0 0 1 128-55l-53 66z" />
                            <path fill="#FFCD00" d="M344 163a77 77 0 0 0-128-55l53 66z" />
                            <path fill="#45A843" d="M349 348a77 77 0 0 1-128 55l53-66z" />
                            <path fill="#0288D1" d="M164 349a77 77 0 0 0 128 55l-53-66z" />
                            <path fill="#8B27B0" d="M93 256a77 77 0 0 1 70-76v88z" />
                            <path fill="#E91E63" d="M419 256a77 77 0 0 0-70-76v88z" />
                        </svg>,
                        name: "Webrtc"
                    }, {
                        logo: <SiSocketdotio />,
                        name: "Websocket"
                    }
            ]
        },
        {
            logo: (
                <CodeXml  color="#8e44ad" size={20} />
            ),
            position: "Full-Stack Developer",
            companyName: "Enterprises",
            status: "Internship",
            startDate:"24-Dec-2024",
            endDate:"9-April-2025",
            shortInfo: "Developing a creative and engaging website with seamless frontend integration across various CMS platforms.",
            tools: [
                    { logo: <RiTailwindCssFill size={20} />, name: "Tailwind" },
                    { logo: <SiNextdotjs size={20} />, name: "Next.js" },
                    { logo: <DiNodejs size={20} />, name: "Node.js" },
                    { logo: <SiExpress size={20} />, name: "Express" },
                    {
                        logo:<FaReact size={20}/>,name:"Vite" 
                    }
            ]
        },
    ]
    return <div className="mt-8">
        <h1 className="text-xl lg:text-3xl font-extrabold">Experience</h1>
        
        {
            experienceArr.map((element,index)=>{
                return <ExperienceCard key={index}
                features={element}/>
            })
        }
    </div>
}