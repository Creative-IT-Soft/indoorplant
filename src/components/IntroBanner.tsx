"use client";

import { ROUTES } from "@/utils/routes";
import React from "react";
import { Element } from "react-scroll";

export default function IntroBanner() {
  const textureOpacity = 0.1;

  return (
    <Element
      name={ROUTES.OVERVIEW}
      className="
        relative isolate overflow-hidden
        bg-black text-white
        px-4 sm:px-6 lg:px-8
        pt-16 sm:pt-20 lg:pt-24
        pb-16 sm:pb-20 lg:pb-24
      "
      style={{
        backgroundImage: "url('/assets/images/home_bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 z-[1] bg-black/40 md:bg-black/25 pointer-events-none" />

      {/* Texture overlay */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          backgroundImage: "url('/assets/textures/hero-texture.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: textureOpacity,
        }}
      />

      {/* CONTENT */}
      <div className="relative z-[3] mx-auto w-full max-w-6xl">
        {/* Text */}
        <div className="text-center">
          <h1
            className="
              mb-4 font-bold leading-tight shine-effect-1
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl
            "
            data-aos="fade-down"
          >
            GROW{" "}
            <span className="text-green-400 shine-effect">
              HEALTHY PLANTS
            </span>{" "}
            SMARTLY
          </h1>

          <p
            className="
              mx-auto max-w-3xl
              font-light leading-relaxed
              text-base sm:text-lg md:text-xl
              text-white/90
            "
            data-aos="fade-down"
          >
            This system is designed to support plants during their most delicate
            stage of growth. By bringing early-stage planting indoors, we reduce
            uncertainty, improve consistency, and help plants grow strong before
            moving outdoors.
          </p>
        </div>

        {/* Product Image */}
        <div className="mt-8 flex justify-center">
          <img
            src="/assets/images/plant-system.png"
            alt="Indoor Smart Gardening System"
            className="
              w-full
              max-w-[520px] sm:max-w-[860px] lg:max-w-[880px]
              max-h-[780px]
              object-contain
              select-none
            "
            data-aos="fade-down"
            draggable={false}
          />
        </div>
      </div>
    </Element>
  );
}
