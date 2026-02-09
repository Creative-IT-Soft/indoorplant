"use client";

import { ROUTES } from "@/utils/routes";
import React, { useEffect, useRef } from "react";
import { Element } from "react-scroll";

export default function HomeBanner() {
  const textureOpacity = 0.15;
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const rate = 0.9;

    const applyRate = () => {
      video.defaultPlaybackRate = rate;
      video.playbackRate = rate;
    };

    applyRate();
    video.addEventListener("play", applyRate);
    video.addEventListener("playing", applyRate);

    return () => {
      video.removeEventListener("play", applyRate);
      video.removeEventListener("playing", applyRate);
    };
  }, []);

  return (
    <Element
      name={ROUTES.HOME}
      className="
        relative flex flex-col md:flex-row
        justify-between
        bg-[#000000]
        container--padding
        overflow-hidden
        pt-[56px] pb-[50px] md:pt-[72px] lg:pt-[84px]
        min-h-[60svh]
      "
    >
      {/* Texture Overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          backgroundImage: "url('/assets/textures/texture.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: textureOpacity,
        }}
      />

      {/* LEFT CONTENT */}
      <div
        className="
          relative z-[2]
          w-full md:w-1/2
          max-w-[640px]
          py-10
          md:py-0
          md:self-center
        "
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <h1
          className="
            font-black text-[#80ff8b]
            text-[2.4rem] sm:text-[2.8rem] md:text-[3.4rem] lg:text-[4rem]
            leading-[1.05]
          "
          data-aos="fade-up"
          data-aos-duration="500"
        >
          Grow Calm. Grow Green. Indoors.
        </h1>

        <p
          className="
            mt-5 text-white
            text-[1rem] md:text-[1.1rem] lg:text-[1.25rem]
            leading-relaxed
          "
          data-aos="fade-up"
          data-aos-duration="550"
        >
          Turn everyday moments into peaceful gardening rituals. Our Indoor Smart Gardening System lets you nurture thriving plants from the comfort of your home—bringing relaxation, fresh life, and a deeper connection to nature into your space.
        </p>

        {/* ✅ RESPONSIVE BUTTON (no huge mobile) */}
        <button
          className="
            quote explore--btn
            mt-8 sm:mt-10
            rounded-[6px]
            font-semibold text-white
            bg-[#828282]
            tracking-[2px]

            // sizing (mobile -> desktop)
            w-full max-w-[190px]
            sm:max-w-[240px]
            md:max-w-[258px]
            lg:max-w-[260px]
            px-6 sm:px-10 md:px-12
            py-3 sm:py-4
            text-base sm:text-lg md:text-xl
          "
          data-aos="fade-up"
          data-aos-duration="700"
        >
          Explore More
        </button>
      </div>

      {/* RIGHT VIDEO */}
      <div
        className="
          relative z-[2]
          w-full md:w-1/2
          mt-6 md:mt-0
          md:self-stretch
          min-h-[320px]
          md:min-h-[calc(100svh-72px)]
          lg:min-h-[calc(100svh-84px)]
        "
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/assets/images/hero-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/assets/videos/render.webm" type="video/webm" />
        </video>
      </div>
    </Element>
  );
}
