import { FULL_NAME, ROLE } from "../../constants/constants";
import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconMail,
  IconFileCertificate,
} from "@tabler/icons-react";
import LinkIcon from "./LinkIcon";


export default function header() {
  return (

    <header
      className="w-full gap-12 mx-auto max-w-limit py-12 px-12 smaller:px-5 relative flex justify-between after:h-[1px] after:bottom-0 after:left-0 after:z-10 after:w-[20%] after:[content:''] after:absolute after:bg-gradient-to-r after:from-transparent after:to-neon/40 before:h-[1px] before:bottom-0 before:right-0 before:z-10 before:w-[20%] before:[content:''] before:absolute before:bg-gradient-to-l before:from-transparent before:to-neon/40 medium:flex-col items-center"
    >
      <div
        className="absolute left-0 right-0 w-[60%] mx-auto bg-neon/40 h-[1px] bottom-0"
      >
      </div>
      <aside
        className="w-52 h-52 rounded-full dark:shadow-contrast-dark/40 shadow-black shadow-basic"
      >
        <img src="/Images/perfil-pic.jpg" className="rounded-full" alt="" />
      </aside>
      <section
        className="flex justify-center flex-col gap-3 medium:gap-7 flex-grow medium:items-center"
      >
        <h1
          className="font-bold uppercase dark:text-secondary-dark text-secondary-light text-3xl smaller:text-xl smallest:text-lg"
        >
          {FULL_NAME}
        </h1>
        <strong
          className="dark:text-neon/70 font-thin dark:drop-shadow-[0_0_7px_RGBA(42_74_228)] drop-shadow-[0_0_2px_#0002] text-css/70 text-xl"
        >
          {ROLE}
        </strong>
        <section className="flex justify-start items-end gap-7 medium:justify-center">
          <LinkIcon
            target="_blank"
            link="https://www.linkedin.com/in/samuel-montes-178305256/"
            Icon={IconBrandLinkedin}
            className="hover:bg-linkedin hover:shadow-basic dark:text-secondary-dark text-secondary-light hover:text-white hover:shadow-linkedin dark:bg-secondary-dark/10 bg-secondary-light/10 rounded-xl duration-100"
          />
          <LinkIcon
            target="_blank"
            link="https://github.com/Montes01"
            Icon={IconBrandGithub}
            className="dark:hover:bg-secondary-dark dark:text-secondary-dark text-secondary-light hover:bg-secondary-light dark:hover:text-primary-dark hover:text-primary-light hover:shadow-basic hover:shadow-secondary-light dark:hover:shadow-secondary-dark dark:bg-secondary-dark/10 bg-secondary-light/10 rounded-xl duration-100"
          />
          <LinkIcon
            target="_blank"
            link="https://mail.google.com/mail/u/0/#inbox?compose=CllgCKCFTZGlKVwWkPHGgJRFHHpXCTjLkNRJpJXzfklktxkzbPvkpKZKJXJGPDncsdLlQrZDhbq"
            Icon={IconMail}
            className="hover:bg-gmail dark:text-secondary-dark text-secondary-light hover:shadow-basic hover:shadow-gmail dark:bg-secondary-dark/10 bg-secondary-light/10 rounded-xl duration-100 hover:text-white"
          />
          <LinkIcon
            target="_self"
            file="/src/assets/Updated CV EN.pdf"
            Icon={IconFileCertificate}
            className="hover:bg-css flex gap-2 dark:text-secondary-dark text-secondary-light hover:shadow-basic hover:shadow-css dark:bg-secondary-dark/10 bg-secondary-light/10 rounded-xl duration-100 hover:text-white"
          />
        </section>
      </section>
    </header>

  )
}