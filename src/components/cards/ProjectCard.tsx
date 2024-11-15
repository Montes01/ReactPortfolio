import React, { ReactNode } from "react";
import ImageHover from "../General/ImageHover";
import { IconBrandGithub } from "@tabler/icons-react";

interface Technology {
  icon: React.ElementType; // El componente del ícono
  className?: string;
}

interface ProjectCardProps {
  name: string;
  description: string;
  deployUrl: string;
  githubUrl: string;
  image: string;
  technologies?: Technology[];
  children?: ReactNode;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  description,
  deployUrl,
  githubUrl,
  image,
  technologies = [],
  children,
}) => {
  return (
    <article className="flex flex-col justify-between relative dark:text-secondary-dark dark:backdrop-brightness-110 backdrop-brightness-90 text-secondary-light gap-6 w-96 smaller:w-72 tiny:w-64 p-3 box-border h-[520px] min-h-[300px] rounded-xl">
      <section className="flex flex-col gap-5 justify-start">
        <div className="h-40 w-full rounded-xl relative">
          <img
            src={image}
            className="w-full h-full object-cover rounded-xl"
            alt={name}
          />
          <ImageHover deployUrl={deployUrl} />
        </div>
        <strong>{name}</strong>
        <p className="max-w-text-short text-ellipsis tiny:text-xs">
          {description}
        </p>
      </section>

      {technologies.length > 0 && (
        <section className="flex gap-7 dark:backdrop-brightness-90 backdrop-brightness-110 p-3 w-5/6 flex-wrap">
          {technologies.map((el, index) => (
            <el.icon key={index} className={el.className ?? ""} />
          ))}
          {children}
        </section>
      )}

      <a
        href={githubUrl}
        title={name}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute right-3 bottom-3 p-1 dark:bg-secondary-dark/20 hover:scale-110 transition-transform ease-linear bg-secondary-light/20 rounded-xl"
      >
        <IconBrandGithub className="dark:text-secondary-dark text-secondary-light" />
      </a>
    </article>
  );
};

export default ProjectCard;
