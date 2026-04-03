import type { project } from "../types";
import { technology } from "./technology";

export const projects: project[] = [
  {
    name: "InnoDev",
    description:
      "InnoDev is a web site / business that allows you to create your own website as easy as the no code webs but with the great companies quality.",
    image: "/Images/projects/innoDev.png",
    githubUrl: "https://github.com/Montes01/InnoDev ",
    deployUrl: "",
    technologies: [
      technology.typescript,
      technology.tailwindcss,
      technology.html,
      technology.css,
      technology.astro,
    ],
  },
  {
    name: "busqueda de peliculas",
    description:
      "busqueda de peliculas is a movies project that allow us to find a movie inside a database from an online API.",
    image: "/Images/projects/busqueda-peliculas.png",
    githubUrl: "https://github.com/Montes01/busqueda-peliculas",
    deployUrl: "",
    technologies: [
      technology.react,
      technology.typescript,
      technology.tailwindcss,
    ],
  },
  {
    name: "My Buss",
    description:
      "My Buss is a web site to give you information about buses in armenia",
    image: "/Images/projects/my-buss.png",
    githubUrl: "https://github.com/MyBussProyect/My_Bus",
    deployUrl: "",
    technologies: [
      technology.react,
      technology.typescript,
      technology.tailwindcss,
    ],
  },
  {
    name: "Galactic gourmet",
    description:
      "Galactic gourmet is a web site about a restaurant that offeers all they plates and foods.",
    image: "/Images/projects/galactic-gourmet.png",
    githubUrl: "https://github.com/Montes01/Galactic-gourmet",
    deployUrl: "https://unrivaled-khapse-dc3666.netlify.app/",
    technologies: [
      technology.md,
      technology.typescript,
      technology.tailwindcss,
      technology.javascript,
    ],
  },
];