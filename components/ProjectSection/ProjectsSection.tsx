import Image from "next/image"
import ProjectFullSectionUI from "./ProjectFullSectionUI"
import {motion} from "framer-motion"

export default function ProjectSection(){
      const projectsArr = [
         {  
            title: "PayZure (RazorPay 2.0)",
            info: "It is a full-stack fintech app built with TurboRepo, Next.js, Node.js, Prisma, Tailwind, and NextAuth. It features a scalable monorepo for efficient code sharing across frontend and backend. The system supports secure onramping, P2P transfers, and uses ACID-compliant operations to ensure data integrity. A queuing mechanism handles bulk transactions safely, preventing negative balances. Financial precision is strictly maintained, avoiding rounding errors. The architecture emphasizes performance, scalability, and real-world reliability for modern payment systems.",
            content: (
                    <Image width={500}  height={300} alt="image" src={'/images/podz.png'} className="rounded-lg"/>
            )
        },
         {  
            title: "PayZure (RazorPay 2.0)",
            info: "It is a full-stack fintech app built with TurboRepo, Next.js, Node.js, Prisma, Tailwind, and NextAuth. It features a scalable monorepo for efficient code sharing across frontend and backend. The system supports secure onramping, P2P transfers, and uses ACID-compliant operations to ensure data integrity. A queuing mechanism handles bulk transactions safely, preventing negative balances. Financial precision is strictly maintained, avoiding rounding errors. The architecture emphasizes performance, scalability, and real-world reliability for modern payment systems.",
            content: (
                    <Image width={500}  height={300} alt="image" src={'/images/podz.png'} className="rounded-lg"/>
            )
        },
         {  
            title: "PayZure (RazorPay 2.0)",
            info: "It is a full-stack fintech app built with TurboRepo, Next.js, Node.js, Prisma, Tailwind, and NextAuth. It features a scalable monorepo for efficient code sharing across frontend and backend. The system supports secure onramping, P2P transfers, and uses ACID-compliant operations to ensure data integrity. A queuing mechanism handles bulk transactions safely, preventing negative balances. Financial precision is strictly maintained, avoiding rounding errors. The architecture emphasizes performance, scalability, and real-world reliability for modern payment systems.",
            content: (
                    <Image width={500}  height={300} alt="image" src={'/images/podz.png'} className="rounded-lg"/>
            )
        },
         {  
            title: "PayZure (RazorPay 2.0)",
            info: "It is a full-stack fintech app built with TurboRepo, Next.js, Node.js, Prisma, Tailwind, and NextAuth. It features a scalable monorepo for efficient code sharing across frontend and backend. The system supports secure onramping, P2P transfers, and uses ACID-compliant operations to ensure data integrity. A queuing mechanism handles bulk transactions safely, preventing negative balances. Financial precision is strictly maintained, avoiding rounding errors. The architecture emphasizes performance, scalability, and real-world reliability for modern payment systems.",
            content: (
                    <Image width={500}  height={300} alt="image" src={'/images/podz.png'} className="rounded-lg"/>
            )
        },
         {  
            title: "PayZure (RazorPay 2.0)",
            info: "It is a full-stack fintech app built with TurboRepo, Next.js, Node.js, Prisma, Tailwind, and NextAuth. It features a scalable monorepo for efficient code sharing across frontend and backend. The system supports secure onramping, P2P transfers, and uses ACID-compliant operations to ensure data integrity. A queuing mechanism handles bulk transactions safely, preventing negative balances. Financial precision is strictly maintained, avoiding rounding errors. The architecture emphasizes performance, scalability, and real-world reliability for modern payment systems.",
            content: (
                    <Image width={500}  height={300} alt="image" src={'/images/podz.png'} className="rounded-lg"/>
            )
        },
         {  
            title: "PayZure (RazorPay 2.0)",
            info: "It is a full-stack fintech app built with TurboRepo, Next.js, Node.js, Prisma, Tailwind, and NextAuth. It features a scalable monorepo for efficient code sharing across frontend and backend. The system supports secure onramping, P2P transfers, and uses ACID-compliant operations to ensure data integrity. A queuing mechanism handles bulk transactions safely, preventing negative balances. Financial precision is strictly maintained, avoiding rounding errors. The architecture emphasizes performance, scalability, and real-world reliability for modern payment systems.",
            content: (
                    <Image width={500}  height={300} alt="image" src={'/images/podz.png'} className="rounded-lg"/>
            )
        },
        {
            title: "Podz (WebRTC)",
            info: "This is podz",
            content: (
                <div>
                    <Image width={500}  height={300} alt="image" src={'/images/payzure.png'} className="rounded-lg"/>
                </div>
            )
        }
    ]
   
    return <motion.section>
        <div className="flex flex-col w-full h-full gap-10 lg:gap-30">
        {
            projectsArr.map((element,index)=>{
                return <ProjectFullSectionUI key={index} features={element}/>
            })
        }

        </div>
    </motion.section>
}