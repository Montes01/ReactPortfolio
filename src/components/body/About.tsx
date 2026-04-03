import { WHO_I_AM } from "../../constants/constants";
import { memo } from "react";

const About = memo(function About() {
  return (
    <section className="flex flex-col px-12 smaller:px-5 my-16">
      <div className="flex items-center gap-6">
        <h2 className="text-4xl font-bold dark:text-secondary-dark text-secondary-light flex-shrink-0">
          About Me
        </h2>
        <div className="flex-grow h-[2px] bg-neon/40 dark:shadow-javascript shadow-html" />
      </div>
      <p className="mt-8 text-xl dark:text-secondary-dark/80 text-secondary-light/80 leading-relaxed max-w-3xl">
        {WHO_I_AM}
      </p>
    </section>
  );
});

export default About;