import type { TablerIconsProps } from "@tabler/icons-react";

export type TechIcon = React.ComponentType<TablerIconsProps>;

export type Technology = {
  icon: TechIcon;
  className: string;
};

export type fact = {
  value: string;
  text: string;
};

export type Experience = {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
};

export type project = {
  name: string;
  description: string;
  image?: string;
  deployUrl?: string;
  githubUrl?: string;
  technologies: Technology[];
};
