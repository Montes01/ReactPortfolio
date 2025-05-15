
import { facts } from "../../constants/constants";
import FactCard from "../cards/FactCard";

export default function Facts() {

  return (
    <>

      <main className="flex flex-col px-12 smaller:px-5 pt-16">
        <section
          className="flex flex-wrap justify-center items-center gap-12 py-20 text-white"
        >
          {
            facts.map((el) => (
              <FactCard key={el.text} text={el.text} value={el.value} />
            ))
          }
        </section>
      </main>

    </>

  )
}