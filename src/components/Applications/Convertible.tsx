"use client";

import React from "react";
import BlurredImage from "../BlurredImage";

export default function Convertible() {
  return (
    <section className="bg-[color:var(--surface-2)] py-16 md:pb-28 md:pt-16">
      <div className="container--padding">
        <div className="premium-panel grid items-center gap-10 p-6 md:grid-cols-2 md:gap-12 md:p-10 lg:p-12">
          <div className="order-2 md:order-1" data-aos="fade-right" data-aos-duration="700">
            <BlurredImage
              backgroundImage="/assets/images/graphite.png"
              src="/assets/images/graphite.png"
              alt="Flexible and Adaptable Setup"
              width={2000}
              height={2000}
              imageClassName="rounded-[1.5rem]"
            />
          </div>

          <div className="order-1 max-w-xl md:order-2">
            <span className="feature-index mb-6">04</span>
            <h2 className="text-3xl font-extrabold tracking-[-0.03em] text-[color:var(--text)] md:text-4xl lg:text-5xl">
              Flexible &amp; Adaptable Setup
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[color:var(--muted-text)] md:text-lg">
              Adjust for different plant types and scale for different spaces—from
              small indoor setups to community or institutional use.
            </p>
            <button className="btn-primary quote mt-8 px-6 py-3 text-sm md:text-base">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
