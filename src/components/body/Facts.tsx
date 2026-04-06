import { facts } from "../../constants/constants";
import type { highlight } from "../../constants/types";
import HighlightCard from "../cards/HighlightCard";
import { memo } from "react";

const Facts = memo(function Facts() {

  return (
    <>
      <main className="flex flex-col px-12 smaller:px-5 pt-16">
        <section
          className="flex flex-wrap justify-center items-center gap-12 py-20 text-white"
        >
          {
            facts.map((el: highlight) => (
              <HighlightCard key={el.text} text={el.text} value={el.value} />
            ))
          }
        </section>
      </main>

    </>
  )
});

export default Facts;