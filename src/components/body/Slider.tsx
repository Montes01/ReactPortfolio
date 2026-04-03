import { Icons } from "../../constants/constants";
import { memo } from "react";

const Slider = memo(function Slider() {

  return (
    <div className="w-full overflow-hidden relative">
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-primary-light dark:from-primary-dark to-transparent z-10 pointer-events-none" />
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-primary-light dark:from-primary-dark to-transparent z-10 pointer-events-none" />
      <header className="w-full grid place-content-center py-12">
        <h2
          className="dark:text-secondary-dark text-secondary-light text-3xl font-bold"
        >
          Technologies
        </h2>
      </header>
      <div className="overflow-hidden">
        <section
          className="flex w-max animate-slide text-neon"
        >
          {[...Icons, ...Icons, ...Icons].map((Icon, i) => (
            <Icon key={`icon-${i}`} className="min-h-[112px] min-w-[112px] mx-12" />
          ))}
        </section>
      </div>
    </div>
  )
});

export default Slider;