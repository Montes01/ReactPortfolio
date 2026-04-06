import { memo } from "react";

const About = memo(function About() {
  return (
    <section className="flex flex-col px-12 smaller:px-5 my-16">
      <p className="text-lg dark:text-secondary-dark/80 text-secondary-light/80 leading-relaxed max-w-3xl">
        <span className="text-2xl font-bold text-highlight dark:drop-shadow-[0_0_8px_rgba(9,255,255,0.8)]">+2</span> years of experience building web applications using modern technologies like React, Angular, and Node.js. I achieved <span className="text-2xl font-bold text-highlight dark:drop-shadow-[0_0_8px_rgba(9,255,255,0.8)]">4th</span> place nationwide in the WorldSkills competition. As a Full Stack Developer, I'm passionate about creating efficient and user-friendly solutions, always learning and growing in the tech world.
      </p>
    </section>
  );
});

export default About;