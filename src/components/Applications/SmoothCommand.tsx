"use client";

import React from "react";
import BlurredImage from "../BlurredImage";

export default function SmoothCommand() {
  return (
    <section className="bg-[color:var(--surface-2)] py-16 md:py-24">
      <div className="container--padding">
        <div className="premium-panel grid items-center gap-10 p-6 md:grid-cols-2 md:gap-12 md:p-10 lg:p-12">
          <div className="max-w-xl">
            <span className="feature-index mb-6">03</span>
            <h2 className="text-3xl font-extrabold tracking-[-0.03em] text-[color:var(--text)] md:text-4xl lg:text-5xl">
              Simple Interaction, Clear Feedback
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[color:var(--muted-text)] md:text-lg">
              Clear, easy-to-understand alerts and guidance keep you informed.
              Whether you are experienced or new to gardening, you always know how
              your plants are doing.
            </p>
            <button className="btn-primary quote mt-8 px-6 py-3 text-sm md:text-base">
              Learn More
            </button>
          </div>

          <div data-aos="fade-left" data-aos-duration="700">
            <BlurredImage
              backgroundImage="/assets/images/Light Pink.png"
              src="/assets/images/Light Pink.png"
              alt="Simple Interaction, Clear Feedback"
              width={2000}
              height={2000}
              imageClassName="rounded-[1.5rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
