"use client";

import React from "react";

export default function CallForAction() {
  return (
    <section className="bg-[#0c0f19] overflow-hidden">
      <div
        className="
          container--padding
          py-10 sm:py-14 lg:py-16
          grid grid-cols-1 lg:grid-cols-2
          items-center
          gap-10 lg:gap-14
        "
      >
        {/* TEXT CONTENT */}
        <div
          className="min-w-0 w-full max-w-[940px] text-white order-2 lg:order-1"
          data-aos="zoom-in-right"
          data-aos-duration="1000"
        >
          <h1
            className="
              font-black text--white--linear
              text-[1.8rem] sm:text-[2.2rem] md:text-[2.8rem] lg:text-[3.4rem] xl:text-[4rem]
              leading-[1.05] sm:leading-[1.05]
              tracking-tight
            "
          >
            Let’s Grow Healthier Plants Together
          </h1>

          <p
            className="
              mt-5
              text--white--linear
              text-sm sm:text-base md:text-lg
              leading-relaxed
              max-w-[60ch]
              pr-0 lg:pr-10
              opacity-95
            "
          >
            Curious about indoor growing or planning a planting project? Connect
            with our team to learn how the Indoor Smart Gardening System can
            support healthier plant growth—from homes and schools to community
            initiatives.
          </p>

          <button
            className="
              quote bg--primary--linear
              mt-8 sm:mt-10
              rounded-md font-semibold
              w-full sm:w-auto
              px-5 sm:px-7 md:px-8
              py-2 sm:py-2.5 md:py-3
              text-sm sm:text-base md:text-lg
              max-w-[220px] sm:max-w-none
            "
          >
            Get Started
          </button>
        </div>

        {/* VIDEO */}
        <div className="min-w-0 w-full order-1 lg:order-2">
          <div className="w-full max-w-full sm:max-w-[640px] md:max-w-[720px] lg:max-w-full mx-auto">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="absolute inset-0 w-full h-full object-contain"
              >
                <source src="/assets/videos/hero.webm" type="video/webm" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
