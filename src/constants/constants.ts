import type { fact, project } from "../constants/types";
import Astro from "../components/Icons/Astro";
import {
  IconBrandReact,
  IconBrandNodejs,
  IconBrandTypescript,
  IconBrandRedux,
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandJavascript,
  IconBrandGit,
  IconBrandGithub,
  IconBrandTailwind,
  IconBrandNextjs,
  IconBrandMongodb,
  IconBrandMysql,
  IconBrandDocker,
  IconBrandFirebase,
  IconBrandAws,
  IconBrandAzure,
  IconBrandAndroid,
  IconBrandApple,
  IconSql,
  IconBrandCSharp,
  IconMarkdown,
} from "@tabler/icons-react";

export const FULL_NAME = "Samuel Montes Guevara";
export const PAGE_TITLE = "Samuel - Montes";
export const ROLE = "FullStack developer";
export const WHO_I_AM = "Full Stack developer studying at sena since 2022";

const basicIconClass =
  "min-w-[35px] min-h-[35px] max-w-[35px] max-h-[35px] text-white shadow-short rounded-xl p-1 ";

export const technology = {
  astro: {
    icon: Astro,
    className: basicIconClass + "dark:shadow-astro-white  dark:bg-astro-white shadow-astro-black  bg-astro-black box-border p-2 text-astro-white dark:text-astro-black",
  },
  md: {
    icon: IconMarkdown,
    className: basicIconClass + "shadow-css/50 bg-css",
  },
  react: {
    icon: IconBrandReact,
    className: basicIconClass + "shadow-tailwind/50 bg-tailwind",
  },
  nodejs: {
    icon: IconBrandNodejs,
    className: basicIconClass + "shadow-javascript/50 bg-javascript",
  },
  typescript: {
    icon: IconBrandTypescript,
    className: basicIconClass + "shadow-typescript/50 bg-typescript",
  },
  redux: { icon: IconBrandRedux, className: basicIconClass + "" },
  html: {
    icon: IconBrandHtml5,
    className: basicIconClass + "shadow-html/50 bg-html",
  },
  css: {
    icon: IconBrandCss3,
    className: basicIconClass + "shadow-css/50 bg-css",
  },
  javascript: {
    icon: IconBrandJavascript,
    className: basicIconClass + "shadow-javascript/50 bg-javascript",
  },
  git: { icon: IconBrandGit, className: basicIconClass + "" },
  github: { icon: IconBrandGithub, className: basicIconClass + "" },
  tailwindcss: {
    icon: IconBrandTailwind,
    className: basicIconClass + "shadow-tailwind/50 bg-tailwind",
  },
  nextjs: { icon: IconBrandNextjs, className: basicIconClass + "" },
  mongodb: { icon: IconBrandMongodb, className: basicIconClass + "" },
  mysql: { icon: IconBrandMysql, className: basicIconClass + "" },
  docker: { icon: IconBrandDocker, className: basicIconClass + "" },
  firebase: { icon: IconBrandFirebase, className: basicIconClass + "" },
  aws: { icon: IconBrandAws, className: basicIconClass + "" },
  azure: {
    icon: IconBrandAzure,
    className: basicIconClass + "shadow-azure/50 bg-azure",
  },
  android: { icon: IconBrandAndroid, className: basicIconClass + "" },
  ios: {
    icon: IconBrandApple,
    className:
      basicIconClass +
      "dark:bg-primary-dark bg-primary-light shadow-secondary-light dark:shadow-secondary-dark dark:text-secondary-dark text-secondary-light",
  },
  sqlserver: {
    icon: IconSql,
    className: basicIconClass + "shadow-sql/50 bg-sql",
  },
  csharp: {
    icon: IconBrandCSharp,
    className: basicIconClass + "shadow-csharp/50 bg-csharp",
  },
};
export const facts: fact[] = [
  {
    value: "4th",
    text: "place nationwide in the WorldSkills competition.",
  },
  {
    value: "+6",
    text: "Months of laboral experience in software development.",
  },
  {
    value: "+3",
    text: "years of experience in software development.",
  },
];
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
    ] as any,
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

export const Icons = [
  IconBrandTypescript,
  IconBrandHtml5,
  IconBrandCSharp,
  IconBrandJavascript,
  IconBrandReact,
  IconBrandNodejs,
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandGithub,
  IconBrandTailwind,
  IconBrandAndroid,
  IconSql
];

export const LaboralExperience = [
  {
    title: "Frontend Developer",
    company: "PRAGMA S.A",
    startDate: "May 2024",
    endDate: "October 2024",
    description: "For six months, I worked as a software developer at PRAGMA, specializing primarily in web development using technologies such as React, Redux Toolkit, TypeScript, and Sass. Additionally, at specific times, I also contributed to backend development, using Node.js, AWS Lambda, TypeScript, and the SAM framework.",
  }
]