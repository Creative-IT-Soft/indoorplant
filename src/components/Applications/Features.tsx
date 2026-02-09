"use client";

import React from "react";
import BlurredImage from "../BlurredImage";
import { ROUTES } from "@/utils/routes";
import { Element } from "react-scroll";

export default function Features() {
  return (
    <>
      <Element name={ROUTES.FEATURES} className="bg-[#0c0f19] border-none">
        <div className="container--padding pt-0 sm:pt-0 lg:pt-0"style={{paddingLeft:"0px"}}>
          <h1
            className="
              inline-block
              px-4 sm:px-5 lg:px-6
              py-3 sm:py-4
              font-black text-white
              text-[1.35rem] sm:text-[1.75rem] md:text-[2.2rem] lg:text-[2.875rem]
              leading-tight
            "
            data-aos="zoom-in"
            style={{
              backgroundImage: "url(/assets/images/feature-bg.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
              backgroundPosition: "left top",
            }}
          >
            What Does System Do?
          </h1>
        </div>
      </Element>

      <section className="bg-[#0c0f19] text-white overflow-hidden">
        <div
          className="
            container--padding
            py-10 sm:py-14 lg:py-16
            grid grid-cols-1 lg:grid-cols-2
            items-center
            gap-0 lg:gap-0
          "
        >
          {/* TEXT */}
          <div className="min-w-0 w-full justify-items-center">
            <div className="max-w-[680px]">
              <h2
                className="
                  mb-4 sm:mb-6 lg:mb-8
                  font-bold text--primary--linear uppercase
                  text-2xl sm:text-3xl md:text-4xl lg:text-5xl
                  leading-tight
                "
                data-aos="fade-left"
                data-aos-duration="700"
              >
                Automated Plant Care
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
                The system automatically manages essential growing conditions such
                as temperature, lighting, watering, and nutrients. This ensures
                plants receive balanced care every day, without guesswork.
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
                src="/assets/images/mintgreen.png"
                alt="Lider"
                width={2000}
                height={2000}
                imageClassName="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
