"use client";

import SectionHeading from "@/components/SectionHeading";
import { ROUTES } from "@/utils/routes";
import Image from "next/image";
import { useRef } from "react";
import { Element } from "react-scroll";

export default function Benefits() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const benefits = [
    {
      title: "Controlled Growing Environment",
      subtitle:
        "Plants grow in a stable indoor climate with balanced light, airflow, humidity, and temperature—reducing stress and improving early-stage survival.",
      image: "/assets/images/cinematic/10.webp",
    },
    {
      title: "Manual Water & Lighting Control",
      subtitle:
        "Consistent light and water delivery helps avoid overwatering or dryness, ensuring plants receive reliable care every day with less manual effort.",
      image: "/assets/images/cinematic/1.webp",
    },
    {
      title: "Robust Body with Wide Base",
      subtitle:
        "Designed with a robust body and wide base, the structure offers superior stability and long-term durability.",
      image: "/assets/images/cinematic/3.webp",
    },
    {
      title: "Beginner-Friendly & Easy to Maintain",
      subtitle:
        "Designed for everyone—whether you're new to planting or experienced. The system simplifies daily care and provides clear guidance for better results.",
      image: "/assets/images/cinematic/5.webp",
    },
    {
      title: "Scalable for Homes to Communities",
      subtitle:
        "Start small for indoor use at home, or expand for schools, community projects, and larger facilities—built with a modular design that grows with your needs.",
      image: "/assets/images/cinematic/6.webp",
    },
  ];

  const scrollBy = (direction: "left" | "right") => {
    scrollContainerRef.current?.scrollBy({
      left: direction === "left" ? -360 : 360,
      behavior: "smooth",
    });
  };

  return (
    <Element
      name={ROUTES.BENEFITS}
      className="section-shell bg-[color:var(--surface-2)] py-20 md:py-28"
    >
      <div className="relative z-[1] container--padding">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Benefits"
            title="Explore the benefits of indoor growing"
            description="From climate control to modular scaling, every detail is designed to help young plants thrive indoors."
            className="max-w-2xl"
          />

          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollBy("left")}
              aria-label="Scroll left"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] transition hover:bg-[color:var(--hover)]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              onClick={() => scrollBy("right")}
              aria-label="Scroll right"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] transition hover:bg-[color:var(--hover)]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="hide-scrollbar mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2"
        >
          {benefits.map((benefit, index) => (
            <article
              key={benefit.title}
              className="premium-panel group w-[280px] flex-shrink-0 snap-start overflow-hidden rounded-[1.5rem] sm:w-[320px]"
              data-aos="fade-up"
              data-aos-delay={index * 80}
            >
              <div className="relative h-[200px] overflow-hidden">
                <Image
                  src={benefit.image}
                  alt={benefit.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <h3 className="absolute bottom-4 left-4 right-4 text-lg font-bold text-white">
                  {benefit.title}
                </h3>
              </div>
              <div className="p-5">
                <p className="text-sm leading-relaxed text-[color:var(--muted-text)]">
                  {benefit.subtitle}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-[color:var(--muted-text)] lg:hidden">
          Swipe left or right
        </p>
      </div>
    </Element>
  );
}
