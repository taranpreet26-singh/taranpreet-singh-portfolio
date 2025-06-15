import LongButton from "./Buttons/LongButton";
import ProjectSection from "./ProjectSection/ProjectsSection";

export default function Projects(){
    return <div className="w-full  h-full flex my-10 gap-4 flex-col justify-center items-center">
        
        <div className="mb-5 lg:mb-20">
            <LongButton title="Feature Projects"/>
        </div>
        <ProjectSection/>
    </div>
}