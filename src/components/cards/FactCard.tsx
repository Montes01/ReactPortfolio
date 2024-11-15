import type { fact } from "../../constants/types";
import React, { useRef, useCallback, type MouseEvent } from "react";

const FactCard = React.memo(({ text, value }: fact) => {
  const shadowRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = useCallback((event: MouseEvent) => {
    if (shadowRef.current) {
      shadowRef.current.style.opacity = "1";
      const rect = contentRef.current?.getBoundingClientRect();
      const xInsideElement = event.clientX - (rect?.left ?? 0);
      const yInsideElement = event.clientY - (rect?.top ?? 0);
      shadowRef.current.style.left = `${xInsideElement - 50}px`;
      shadowRef.current.style.top = `${yInsideElement - 50}px`;
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (shadowRef.current) {
      shadowRef.current.style.opacity = "0";
    }
  }, []);

  return (
    <div
      onMouseLeave={handleMouseLeave}
      ref={contentRef}
      onMouseMove={handleMouseMove}
      role="separator"
      className="relative dark:border-secondary-dark/5 overflow-hidden border-secondary-light/5 items-center w-96 smaller:w-72 tiny:w-64 backdrop-brightness-90 rounded-xl shadow-big dark:shadow-black/40 shadow-black/10 py-1 px-1"
    >
      <div
        ref={shadowRef}
        className="absolute opacity-0 h-20 w-32 shadow-big dark:shadow-secondary-dark shadow-secondary-light dark:bg-secondary-dark/60 bg-secondary-light/60 rounded-full right-0 bottom-0 -z-10 transition-opacity duration-200 ease-linear"
      />
      <article className="dark:bg-primary-dark bg-primary-light w-full h-full rounded-xl flex flex-col gap-3 px-7 py-12">
        <h2 className="text-5xl font-bold dark:text-secondary-dark text-secondary-light">
          {value}
        </h2>
        <span className="max-w-text-short dark:text-secondary-dark text-secondary-light tracking-wide text-xl text-ellipsis">
          {text}
        </span>
      </article>
    </div>
  );
});

export default FactCard;
