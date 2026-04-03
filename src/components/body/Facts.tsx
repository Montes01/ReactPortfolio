import { facts } from "../../constants/constants";
import type { fact } from "../../constants/types";
import FactCard from "../cards/FactCard";
import { memo } from "react";

const Facts = memo(function Facts() {

  return (
    <>
      <main className="flex flex-col px-12 smaller:px-5 pt-16">
        <section
          className="flex flex-wrap justify-center items-center gap-12 py-20 text-white"
        >
          {
            facts.map((el: fact) => (
              <FactCard key={el.text} text={el.text} value={el.value} />
            ))
          }
        </section>
      </main>

    </>
  )
});

export default Facts;