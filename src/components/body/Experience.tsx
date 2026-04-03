import { LaboralExperience } from "../../constants/constants";
import type { Experience as ExperienceType } from "../../constants/types";
import { memo } from "react";

const ExperienceComponent = memo(function Experience() {

    return (

        <section className="flex flex-col px-12 smaller:px-5 py-16 max-w-limit">
            <div
                className="flex gap-7 justify-start w-full items-center tiny:justify-center"
            >
                <h2
                    className="text-4xl font-bold dark:text-secondary-dark text-secondary-light"
                >
                    Experience
                </h2>
                <div
                    className="flex-grow h-[1px] bg-neon/40 shadow-basic dark:shadow-javascript shadow-html tiny:hidden"
                >
                </div>
            </div>

            <div className="flex flex-col mt-12 relative">
                <div className="absolute left-[14px] top-6 bottom-8 w-[2px] bg-neon/30 rounded-full" />
                
                {
                    LaboralExperience.map((el: ExperienceType) => (
                        <article key={el.company} className="relative py-6 pl-10">
                            <div className="absolute left-[5px] top-2 w-5 h-5 rounded-full bg-neon border-4 dark:border-primary-dark border-primary-light shadow-[0_0_10px_rgba(9,153,255,0.5)]" />
                            
                            <div className="flex flex-col gap-2">
                                <h3 className="text-2xl font-bold dark:text-secondary-dark text-secondary-light">
                                    {el.company}
                                </h3>
                                <p className="text-lg dark:text-neon text-neon/80 font-medium">
                                    {el.title}
                                </p>
                                <p className="text-base dark:text-secondary-dark/60 text-secondary-light/60">
                                    {el.startDate} - {el.endDate}
                                </p>
                                <p className="text-base dark:text-secondary-dark/80 text-secondary-light/70 leading-relaxed max-w-2xl">
                                    {el.description}
                                </p>
                            </div>
                        </article>
                    ))
                }
            </div>
        </section>

    )
});

export default ExperienceComponent;