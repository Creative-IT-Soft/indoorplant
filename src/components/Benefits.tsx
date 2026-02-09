"use client";

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
      title: "Manual Water & Lighting control",
      subtitle:
        "Controlling lighting and water  delivery helps avoid overwatering or dryness with consistent light, ensuring plants receive consistent care every day with less manual effort.",
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

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -340, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 340, behavior: "smooth" });
    }
  };

  return (
    <Element
      name={ROUTES.BENEFITS}
      className="
        bg-[#0c0f19]
        container--padding
        py-16 sm:py-20 lg:py-28
        overflow-hidden
      "
    >
      <div
        className="
          flex flex-col lg:flex-row
          gap-0 lg:gap-0
          items-start lg:items-center
          justify-between
        "
      >
        {/* Left Section */}
        <div
          className="
            w-full lg:w-[34%]
            flex flex-col
            justify-center items-start
            pb-10
          "
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <h1
            className="
              font-bold uppercase text--primary--linear
              text-2xl sm:text-3xl md:text-4xl lg:text-[48px]
              leading-normal lg:leading-snug
              mb-6
              max-w-[520px]
            "
          >
            Explore the Benefits of Indoor Growing
          </h1>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollLeft}
              aria-label="Scroll left"
              className="
                h-10 w-10 sm:h-11 sm:w-11
                flex items-center justify-center
                border rounded-full border-[#000]
                bg-[#403f3f]
                hover:bg-[#5e6163]
                transition
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>

            <button
              onClick={scrollRight}
              aria-label="Scroll right"
              className="
                h-10 w-10 sm:h-11 sm:w-11
                flex items-center justify-center
                border rounded-full border-[#000]
                bg-[#403f3f]
                hover:bg-[#5e6163]
                transition
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Section (scrollable carousel) */}
        <div
          ref={scrollContainerRef}
          className="
            w-full lg:w-[66%]
            flex gap-6
            overflow-x-auto
            overflow-y-hidden
            scroll-smooth
            pr-2
            hide-scrollbar
            snap-x snap-mandatory
          "
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="
                snap-start
                flex-shrink-0
                bg-[#403f3f] hover:bg-[#5e6163]
                border border-[#c0c3c5]
                rounded-lg
                shadow-md hover:shadow-lg
                transition
                w-[240px] sm:w-[280px] md:w-[320px] lg:w-[320px]
              "
            >
              {/* Image */}
              <div className="relative h-[160px] sm:h-[180px] overflow-hidden rounded-t-lg">
                <Image
                  src={benefit.image}
                  alt={benefit.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <h2 className="text-white font-bold text-center text-base sm:text-lg px-2">
                    {benefit.title}
                  </h2>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 text-center">
                <h3 className="text--primary--linear font-bold text-sm sm:text-base">
                  {benefit.title}
                </h3>
                <p className="text-white text-xs sm:text-sm leading-relaxed mt-1">
                  {benefit.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile hint */}
      <p className="mt-6 text-center text-xs text-white/50 lg:hidden">
        Swipe left or right
      </p>
    </Element>
  );
}
