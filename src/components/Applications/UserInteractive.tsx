"use client";

import React from "react";
import BlurredImage from "../BlurredImage";

export default function UserInteractive() {
  return (
    <section className="bg-[#000] text-white overflow-hidden">
      <div
        className="
          container--padding
          py-10 sm:py-14 lg:py-16
          grid grid-cols-1 lg:grid-cols-2
          items-center
          gap-0 lg:gap-0
        "
      >
        {/* IMAGE */}
        <div
          className="min-w-0 w-full flex justify-center lg:justify-center"
          data-aos="fade-right"
          data-aos-duration="700"
        >
          <div
            className="
              w-full max-w-full
              sm:max-w-[560px]
              md:max-w-[640px]
              lg:max-w-[520px]
              xl:max-w-[680px]
              transition-transform duration-300 ease-in-out
              hover:scale-[1.02] md:hover:scale-[1.05]
            "
          >
            <BlurredImage
              backgroundImage="/assets/images/Wood Ash.png"
              src="/assets/images/Wood Ash.png"
              alt="Consistent Growth & Monitoring"
              width={1400}
              height={1400}
              imageClassName="rounded-2xl"
            />
          </div>
        </div>

        {/* TEXT */}
        <div className="min-w-0 w-full">
          <div className="max-w-[680px]">
            <h2
              className="
                mb-4 sm:mb-6 lg:mb-8
                font-bold text-[#ffffe4] uppercase
                text-2xl sm:text-3xl md:text-4xl lg:text-5xl
                leading-tight
              "
              data-aos="fade-left"
              data-aos-duration="700"
            >
              Consistent Growth &amp; Monitoring
            </h2>

            <p
              className="
                mb-6 sm:mb-8 lg:mb-10
                font-semibold text--white--linear
                text-sm sm:text-base md:text-lg
                text-justify
                leading-relaxed
                opacity-95
              "
              data-aos="fade-left"
              data-aos-duration="700"
            >
              Plants are monitored continuously so early signs of stress,
              imbalance, or disease can be detected quickly. This allows timely
              action and prevents problems from spreading.
            </p>

            <button
              className="
                quote bg--primary--linear rounded-md font-semibold
                w-full sm:w-auto
                px-5 sm:px-7 md:px-8
                py-2 sm:py-2.5 md:py-3
                text-sm sm:text-base md:text-lg
                max-w-[130px] sm:max-w-none
              "
              data-aos="fade-left"
              data-aos-duration="700"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
