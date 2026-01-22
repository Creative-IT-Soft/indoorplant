"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { Element } from "react-scroll";
import { ROUTES } from "@/utils/routes";

type Item = {
  id: string;
  title: string;
  image: string;
};

export default function HomeBanner() {
  const items: Item[] = useMemo(
    () => [
      { id: "basil", title: "basil", image: "/assets/images/plants/basil.jpg" },
      {
        id: "coriander",
        title: "coriander",
        image: "/assets/images/plants/coriander.jpg",
      },
      { id: "mint", title: "mint", image: "/assets/images/plants/mint.jpg" },
      {
        id: "oregano",
        title: "oregano",
        image: "/assets/images/plants/oregano.jpg",
      },
      {
        id: "tomatoes",
        title: "tomatoes",
        image: "/assets/images/plants/tomatoes.jpg",
      },
      { id: "chili", title: "chili", image: "/assets/images/plants/chilli.jpg" },
      { id: "thyme", title: "thyme", image: "/assets/images/plants/thyme.jpg" },
      {
        id: "rosemary",
        title: "rosemary",
        image: "/assets/images/plants/rosemary.jpg",
      },
    ],
    []
  );

  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const children = Array.from(scroller.children) as HTMLElement[];
    const el = children[index];
    if (!el) return;

    scroller.scrollTo({
      left: el.offsetLeft - 16,
      behavior: "smooth",
    });
  };

  const next = () => scrollToIndex(Math.min(items.length - 1, activeIndex + 1));
  const prev = () => scrollToIndex(Math.max(0, activeIndex - 1));

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const onScroll = () => {
      const children = Array.from(scroller.children) as HTMLElement[];
      const x = scroller.scrollLeft;

      let bestIdx = 0;
      let bestDist = Infinity;

      children.forEach((el, i) => {
        const dist = Math.abs(el.offsetLeft - x);
        if (dist < bestDist) {
          bestDist = dist;
          bestIdx = i;
        }
      });

      setActiveIndex(bestIdx);
    };

    scroller.addEventListener("scroll", onScroll, { passive: true });
    return () => scroller.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Element
      name={ROUTES.SEEDS}
      className="relative bg-[#000000] py-14 container--padding overflow-hidden"
    >
      {/* Section Heading */}
      <div className="mb-10">
        <h2 className="font-black text-[48px] text--primary--linear uppercase text-[#80ff8b]">
          What You Can Grow
        </h2>
        <p className="mt-3 text-base md:text-lg text-[#cfcfcf] max-w-[760px]">
          Carefully selected herbs and vegetables that thrive in controlled
          indoor environments.
        </p>
      </div>

      {/* Carousel + Outside Arrows */}
      <div className="relative">
        <div className="flex items-center gap-4 md:gap-6">
          {/* Left Arrow (outside) */}
          <button
            onClick={prev}
            aria-label="Previous"
            className="hidden md:flex shrink-0
                       h-12 w-12 items-center justify-center rounded-full
                       bg-[#fff] border border-white/20
                       hover:bg-[#80ff8b] transition"
          >
            <span className="text-3xl font-medium text-black">‹</span>
          </button>

          {/* Scroll Container (center) */}
          <div
            ref={scrollerRef}
            className="flex-1 flex gap-6 md:gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory
                       pr-2 no-scrollbar"
          >
            {items.map((it) => (
              <div
                key={it.id}
                className="snap-start shrink-0 w-[260px] md:w-[300px]
                           rounded-2xl bg-[#0c0f19]
                           border border-white/10
                           shadow-[0_12px_40px_rgba(0,0,0,0.7)]
                           p-6"
              >
                <div className="relative w-full h-[250px] rounded-xl overflow-hidden">
                  <Image
                    src={it.image}
                    alt={it.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <p className="mt-5 text-center text-xl md:text-2xl font-bold text-white capitalize">
                  {it.title}
                </p>
              </div>
            ))}
          </div>

          {/* Right Arrow (outside) */}
          <button
            onClick={next}
            aria-label="Next"
            className="hidden md:flex shrink-0
                       h-12 w-12 items-center justify-center rounded-full
                       bg-[#fff] border border-white/20
                       hover:bg-[#80ff8b] transition"
          >
            <span className="text-3xl font-medium text-black">›</span>
          </button>
        </div>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to item ${i + 1}`}
              onClick={() => scrollToIndex(i)}
              className={`h-3 w-3 rounded-full transition ${
                i === activeIndex
                  ? "bg-[#80ff8b] scale-110"
                  : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Mobile hint */}
      <p className="mt-5 text-center text-xs text-white/50 md:hidden">
        Swipe left or right
      </p>
    </Element>
  );
}
