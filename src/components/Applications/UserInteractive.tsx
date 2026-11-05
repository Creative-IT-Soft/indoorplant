"use client";

import React from "react";

export default function UserInteractive() {
  return (
    <section className="bg-[color:var(--surface-3)] py-16 md:py-24">
      <div className="container--padding">
        <div className="premium-panel grid items-center gap-10 p-6 md:grid-cols-2 md:gap-12 md:p-10 lg:p-12">
          <div className="order-2 md:order-1" data-aos="fade-right" data-aos-duration="700">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              aria-label="Consistent Growth and Monitoring"
              className="aspect-[4/3] w-full rounded-[1.5rem] object-cover"
            >
              <source src="/assets/videos/Wood Ash.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="order-1 max-w-xl md:order-2">
            <span className="feature-index mb-6">02</span>
            <h2 className="text-3xl font-extrabold tracking-[-0.03em] text-[color:var(--text)] md:text-4xl lg:text-5xl">
              Consistent Growth &amp; Monitoring
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[color:var(--muted-text)] md:text-lg">
              Plants are monitored continuously so early signs of stress,
              imbalance, or disease can be detected quickly—allowing timely action
              before problems spread.
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
