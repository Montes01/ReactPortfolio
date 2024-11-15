
import { Icons } from "../../constants/constants";


export default function Slider() {

  return (

    <div
    role="slider"
    className="max-w-limit w-full overflow-hidden relative after:absolute after:right-0 after:h-full after:w-20 after:bg-gradient-to-l after:[content:''] after:from-primary-light dark:after:from-bg after:to-transparent after:top-0 after:bottom-0
    before:z-50 after:z-50 after:brightness-90
    before:absolute before:left-0 before:h-full before:w-20 before:bg-gradient-to-r before:[content:''] before:from-primary-light before:brightness-90 dark:before:from-bg before:to-transparent before:top-0 before:bottom-0"
>
  <header className="w-full grid place-content-center py-12">
    <h2
      className="dark:text-secondary-dark text-secondary-light text-3xl font-bold"
      >
      Technologies
    </h2>
  </header>
  <section
    id="slide"
    className="flex p-12 items-center justify-start gap-12 w-[calc(112px*24)] dark:text-secondary-dark text-secondary-light"
    >
    {Icons.map((Icon) => <Icon className="min-h-[112px] min-w-[112px]" />)}
    {Icons.map((Icon) => <Icon className="min-h-[112px] min-w-[112px]" />)}
  </section>
</div>

  )
}