import { LaboralExperience } from "../../constants/constants.ts";

export default function experience() {

    return (

        <section className="flex flex-col px-12 smaller:px-5 pt-16 max-w-limit">
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
            <section
                id="pro"
                className="flex flex-wrap gap-12 justify-center items-center p-12 smaller:px-1 overflow-x-hidden"
            >
                {
                    LaboralExperience.map((el) => (
                        <article key={el.company} className="flex flex-col gap-4 items-start bg-bg p-8 rounded-lg shadow-basic ">
                            <h3 className="text-2xl font-bold dark:text-secondary-dark text-secondary-light">
                                {el.company}
                            </h3>
                            <p className="text-lg dark:text-secondary-dark text-secondary-light">
                                {el.title}
                            </p>
                            <p className="text-lg dark:text-secondary-dark text-secondary-light">
                                from {el.startDate} to {el.endDate}
                            </p>
                            <p className="text-lg dark:text-secondary-dark text-secondary-light">
                                {el.description}
                            </p>
                        </article>
                    ))
                }
            </section>
        </section>

    )
}