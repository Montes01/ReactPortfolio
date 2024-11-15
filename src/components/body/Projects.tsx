
import ProjectCard from "../cards/ProjectCard";
import { projects } from "../../constants/constants";


export default function Projects() {

  return (


    <section className="flex flex-col max-w-limit p-12 smaller:px-5 gap-9 items-center">
      <div className="flex gap-7 justify-start w-full items-center tiny:justify-center">
        <h2
          className="text-4xl font-bold dark:text-secondary-dark text-secondary-light"
        >
          Projects
        </h2>
        <div
          className="flex-grow h-[1px] bg-neon/40 shadow-basic dark:shadow-javascript shadow-html tiny:hidden"
        >
        </div>
      </div>
      <section
        id="pro"
        className="flex flex-wrap gap-12 justify-center items-center p-12 smaller:px-1 overflow-x-hidden"
      >
        {
          projects.map((el) => (
            <ProjectCard
              name={el.name}
              description={el.description}
              image={el.image!}
              githubUrl={el.githubUrl!}
              deployUrl={el.deployUrl!}
              technologies={el.technologies as any}
            />
          ))
        }
      </section>
    </section>


  )
}