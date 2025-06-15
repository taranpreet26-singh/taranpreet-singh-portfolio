import Image from "next/image"
import ProjectFullSectionUI from "./ProjectFullSectionUI"
import { motion } from "framer-motion"
import { RiTailwindCssFill } from "react-icons/ri"
import { SiExpress, SiNextdotjs, SiPrisma, SiSocketdotio, SiTurborepo } from "react-icons/si"
import { FaNodeJs } from "react-icons/fa"
import { DiNodejs } from "react-icons/di"

export default function ProjectSection() {
    const projectsArr = [
        {
            title: "PayZure (RazorPay 2.0)",
            githubLink: "https://github.com/taranpreet26-singh/Payment-Razorpay-2.0",
            ytLink: "https://youtu.be/2TsWZvQURIA",
            info: "It is a full-stack fintech app built with TurboRepo, Next.js, Node.js, Prisma, Tailwind, and NextAuth. It features a scalable monorepo for efficient code sharing across frontend and backend. The system supports secure onramping, P2P transfers, and uses ACID-compliant operations to ensure data integrity. A queuing mechanism handles bulk transactions safely, preventing negative balances. Financial precision is strictly maintained, avoiding rounding errors. The architecture emphasizes performance, scalability, and real-world reliability for modern payment systems.",
            content: (
                <Image width={500} height={300} alt="image" src={'/images/podz.png'} className="rounded-lg" />
            ),
            tools: [
                { logo: <RiTailwindCssFill  size={20}/>, name: "Tailwind" },
                { logo: <SiNextdotjs size={20} />, name: "Next.js" },
                { logo: <SiPrisma  size={20}/>, name: "Prisma" },
                { logo: <SiTurborepo  size={20}/>, name: "Turborepo" },
                { logo: <DiNodejs size={20} />, name: "Node.js" },
                { logo: <SiExpress  size={20}/>, name: "Express" }
            ]
        },
        {
            title: "PayZure (RazorPay 2.0)",
            githubLink: "https://github.com/taranpreet26-singh/Payment-Razorpay-2.0",
            ytLink: "https://youtu.be/2TsWZvQURIA",
            info: "It is a full-stack fintech app built with TurboRepo, Next.js, Node.js, Prisma, Tailwind, and NextAuth. It features a scalable monorepo for efficient code sharing across frontend and backend. The system supports secure onramping, P2P transfers, and uses ACID-compliant operations to ensure data integrity. A queuing mechanism handles bulk transactions safely, preventing negative balances. Financial precision is strictly maintained, avoiding rounding errors. The architecture emphasizes performance, scalability, and real-world reliability for modern payment systems.",
            content: (
                <Image width={500} height={300} alt="image" src={'/images/podz.png'} className="rounded-lg" />
            ),
            tools: [
                { logo: <RiTailwindCssFill  size={20}/>, name: "Tailwind" },
                { logo: <SiNextdotjs  size={20}/>, name: "Next.js" },
                { logo: <SiPrisma  size={20}/>, name: "Prisma" },
                { logo: <SiTurborepo size={20}/>, name: "Turborepo" },
                { logo: <DiNodejs size={20} />, name: "Node.js" },
                { logo: <SiExpress size={20} />, name: "Express" }
            ]
        },
        {
            title: "PayZure (RazorPay 2.0)",
            githubLink: "https://github.com/taranpreet26-singh/Payment-Razorpay-2.0",
            ytLink: "https://youtu.be/2TsWZvQURIA",
            info: "It is a full-stack fintech app built with TurboRepo, Next.js, Node.js, Prisma, Tailwind, and NextAuth. It features a scalable monorepo for efficient code sharing across frontend and backend. The system supports secure onramping, P2P transfers, and uses ACID-compliant operations to ensure data integrity. A queuing mechanism handles bulk transactions safely, preventing negative balances. Financial precision is strictly maintained, avoiding rounding errors. The architecture emphasizes performance, scalability, and real-world reliability for modern payment systems.",
            content: (
                <Image width={500} height={300} alt="image" src={'/images/podz.png'} className="rounded-lg" />
            ),
            tools: [
                { logo: <RiTailwindCssFill  size={20}/>, name: "Tailwind" },
                { logo: <SiNextdotjs  size={20}/>, name: "Next.js" },
                { logo: <SiPrisma  size={20}/>, name: "Prisma" },
                { logo: <SiTurborepo size={20}/>, name: "Turborepo" },
                { logo: <DiNodejs size={20} />, name: "Node.js" },
                { logo: <SiExpress size={20} />, name: "Express" }
            ]
        },
        {
            title: "PayZure (RazorPay 2.0)",
            info: "It is a full-stack fintech app built with TurboRepo, Next.js, Node.js, Prisma, Tailwind, and NextAuth. It features a scalable monorepo for efficient code sharing across frontend and backend. The system supports secure onramping, P2P transfers, and uses ACID-compliant operations to ensure data integrity. A queuing mechanism handles bulk transactions safely, preventing negative balances. Financial precision is strictly maintained, avoiding rounding errors. The architecture emphasizes performance, scalability, and real-world reliability for modern payment systems.",
            content: (
                <Image width={500} height={300} alt="image" src={'/images/podz.png'} className="rounded-lg" />
            ),
             tools: [
                { logo: <RiTailwindCssFill  size={20}/>, name: "Tailwind" },
                { logo: <SiNextdotjs  size={20}/>, name: "Next.js" },
                { logo: <SiPrisma  size={20}/>, name: "Prisma" },
                { logo: <SiTurborepo size={20}/>, name: "Turborepo" },
                { logo: <DiNodejs size={20} />, name: "Node.js" },
                { logo: <SiExpress size={20} />, name: "Express" }
            ]
        },
        {
            title: "PayZure (RazorPay 2.0)",
            githubLink: "https://github.com/taranpreet26-singh/Payment-Razorpay-2.0",
            ytLink: "https://youtu.be/2TsWZvQURIA",
            info: "It is a full-stack fintech app built with TurboRepo, Next.js, Node.js, Prisma, Tailwind, and NextAuth. It features a scalable monorepo for efficient code sharing across frontend and backend. The system supports secure onramping, P2P transfers, and uses ACID-compliant operations to ensure data integrity. A queuing mechanism handles bulk transactions safely, preventing negative balances. Financial precision is strictly maintained, avoiding rounding errors. The architecture emphasizes performance, scalability, and real-world reliability for modern payment systems.",
            content: (
                <Image width={500} height={300} alt="image" src={'/images/podz.png'} className="rounded-lg" />
            ),
            tools: [
                { logo: <RiTailwindCssFill  size={20}/>, name: "Tailwind" },
                { logo: <SiNextdotjs  size={20}/>, name: "Next.js" },
                { logo: <SiPrisma  size={20}/>, name: "Prisma" },
                { logo: <SiTurborepo size={20}/>, name: "Turborepo" },
                { logo: <DiNodejs size={20} />, name: "Node.js" },
                { logo: <SiExpress size={20} />, name: "Express" }
            ]
        },
        {
            title: "PayZure (RazorPay 2.0)",
            githubLink: "https://github.com/taranpreet26-singh/Payment-Razorpay-2.0",
            ytLink: "https://youtu.be/2TsWZvQURIA",
            info: "It is a full-stack fintech app built with TurboRepo, Next.js, Node.js, Prisma, Tailwind, and NextAuth. It features a scalable monorepo for efficient code sharing across frontend and backend. The system supports secure onramping, P2P transfers, and uses ACID-compliant operations to ensure data integrity. A queuing mechanism handles bulk transactions safely, preventing negative balances. Financial precision is strictly maintained, avoiding rounding errors. The architecture emphasizes performance, scalability, and real-world reliability for modern payment systems.",
            content: (
                <Image width={500} height={300} alt="image" src={'/images/podz.png'} className="rounded-lg" />
            ),
            tools: [
                { logo: <RiTailwindCssFill  size={20}/>, name: "Tailwind" },
                { logo: <SiNextdotjs  size={20}/>, name: "Next.js" },
                { logo: <SiPrisma  size={20}/>, name: "Prisma" },
                { logo: <SiTurborepo size={20}/>, name: "Turborepo" },
                { logo: <DiNodejs size={20} />, name: "Node.js" },
                { logo: <SiExpress size={20} />, name: "Express" }
            ]
        },
        {
            title: "Podz (WebRTC)",
            webLink: "https://podz-frontend.vercel.app/",
            githubLink: "https://github.com/taranpreet26-singh/Podz-Frontend",
            info: "This is podz",
            content: (
                <div>
                    <Image width={500} height={300} alt="image" src={'/images/payzure.png'} className="rounded-lg" />
                </div>
            ),
            tools: [
                { logo: <RiTailwindCssFill size={20}/>, name: "Tailwind" },
                { logo: <SiNextdotjs size={20}/>, name: "Next.js" },
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
                    logo: <SiSocketdotio/>,
                    name:"Websocket"
                }
            ]
        }
    ]

    return <motion.section>
        <div className="flex flex-col w-full h-full gap-10 lg:gap-30">
            {
                projectsArr.map((element, index) => {
                    return <ProjectFullSectionUI key={index} features={element} />
                })
            }

        </div>
    </motion.section>
}