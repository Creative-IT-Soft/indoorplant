"use client";

import React from "react";
import BlurredImage from "../BlurredImage";

export default function Convertible() {
  return (
    <section className="bg-[color:var(--bg)] text-[color:var(--text)] overflow-hidden">
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
              lg:max-w-[560px]
              xl:max-w-[680px]
              transition-transform duration-300 ease-in-out
              hover:scale-[1.02] md:hover:scale-[1.05]
            "
          >
            <BlurredImage
              backgroundImage="/assets/images/graphite.png"
              src="/assets/images/graphite.png"
              alt="Flexible & Adaptable Setup"
              width={2000}
              height={2000}
              imageClassName="rounded-2xl"
            />
          </div>
        </div>

        {/* CONTENT */}
        <div className="min-w-0 w-full">
          <div className="max-w-[680px]">
            <h2
              className="
                mb-4 sm:mb-6 lg:mb-8
                font-bold uppercase
                text-[color:var(--text)]
                text-2xl sm:text-3xl md:text-4xl lg:text-5xl
                leading-tight
              "
              data-aos="fade-left"
              data-aos-duration="700"
            >
              Flexible &amp; Adaptable Setup
            </h2>

            <p
              className="
                mb-6 sm:mb-8 lg:mb-10
                font-semibold
                text-[color:var(--muted-text)]
                text-sm sm:text-base md:text-lg
                text-justify
                leading-relaxed
              "
              data-aos="fade-left"
              data-aos-duration="700"
            >
              The system can be adjusted for different plant types and scaled for
              different spaces—from small indoor setups to community or
              institutional use.
            </p>

            <button
              className="
                quote
                rounded-md
                font-semibold
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
