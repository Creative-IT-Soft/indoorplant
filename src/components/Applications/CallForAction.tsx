"use client";

import React from "react";

export default function CallForAction() {
  return (
    <section className="section-shell bg-[color:var(--bg)] py-20 md:py-28">
      <div className="relative z-[1] container--padding">
        <div className="premium-panel grid items-center gap-10 p-6 md:grid-cols-2 md:gap-12 md:p-10 lg:p-12">
          <div className="order-2 md:order-1" data-aos="fade-up">
            <p className="section-eyebrow mb-5">Experience</p>
            <h2 className="section-title section-title--gradient max-w-[14ch]">
              Gardening, made more peaceful and relaxing
            </h2>
            <p className="section-description mt-5">
              Whether you are just starting out or already love caring for plants,
              our Indoor Smart Gardening System supports healthier growth while
              turning everyday gardening into a relaxing and rewarding experience.
            </p>
            <button className="btn-primary quote mt-8 px-6 py-3 text-sm md:text-base">
              Get Started
            </button>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative overflow-hidden rounded-[1.5rem] border border-[color:var(--border)] bg-black shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
              <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-16 bg-gradient-to-b from-black/35 to-transparent" />
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="aspect-[4/3] w-full object-cover"
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
