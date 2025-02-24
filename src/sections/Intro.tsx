"use client";
import { stagger, useAnimate, useInView } from "motion/react";
import { FC, useEffect, useRef } from "react";
import SplitType from "split-type";

const Intro: FC = () => {
  const [scope, animate] = useAnimate();
  const inView = useInView(scope, {
    once: true,
  });
  useEffect(() => {
    new SplitType(scope.current.querySelector("h2"), {
      types: "lines,words",
      tagName: "span",
    });
  }, [scope]);

  useEffect(() => {
    if (inView) {
      animate(
        scope.current.querySelectorAll(".word"),
        { transform: "translateY(0%)" }, // Corrected typo in `transform`
        {
          duration: 0.5,
          delay: stagger(0.2),
        }
      );
    }
  }, [inView, animate, scope]);

  return (
    <section
      className="py-24 md:py-32 lg:py-40 mt-12 md:mt-16 lg:mt-20"
      id="intro"
      ref={scope}
    >
      <div className="container">
        <h2 className="text-4xl md:text-7xl lg:text-8xl lg:w-[80%]" ref={scope}>
          Building beautiful website with clean code and thoughtful design to
          help your business to grow and improve your online presence.
        </h2>
      </div>
    </section>
  );
};

export default Intro;
