import type { Technology } from "../types";
import Astro from "../../components/Icons/Astro";
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

const basicIconClass =
  "min-w-[35px] min-h-[35px] max-w-[35px] max-h-[35px] text-white shadow-short rounded-xl p-1 ";

export const technology: Record<string, Technology> = {
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

export const getTechnology = (keys: string[]): Technology[] => {
  return keys.map((key) => technology[key]).filter(Boolean);
};

export const sliderIcons = [
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