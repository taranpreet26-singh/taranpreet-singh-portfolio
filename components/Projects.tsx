import LongButton from "./Buttons/LongButton";
import ProjectSection from "./ProjectSection/ProjectsSection";

export default function Projects(){
    return <section id="projects" className="w-full  h-full flex mt-8 gap-4 flex-col justify-center items-center">
        <div className="">
            <LongButton title="Feature Projects"/>
        </div>
        <ProjectSection/>
    </section>
}