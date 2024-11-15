import type { TablerIconsProps } from "@tabler/icons-react";

export type fact = {
  value: string;
  text: string;
};
export type project = {
  name: string;
  description: string;
  image?: string;
  deployUrl?: string;
  githubUrl?: string;
  technologies: {
    icon:
      | ((element: TablerIconsProps) => JSX.Element)
      | (({ className: string }) => JSX.Element)
      | Element;
    className: string;
  }[];
};
