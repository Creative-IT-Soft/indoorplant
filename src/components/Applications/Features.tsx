"use client";

import React from "react";
import BlurredImage from "../BlurredImage";
import SectionHeading from "../SectionHeading";
import { ROUTES } from "@/utils/routes";
import { Element } from "react-scroll";

export default function Features() {
  return (
    <>
      <Element
        name={ROUTES.FEATURES}
        className="section-shell bg-[color:var(--bg)] py-16 md:py-24"
      >
        <div className="relative z-[1] container--padding">
          <SectionHeading
            eyebrow="Capabilities"
            title="What does the system do?"
            description="Automated care, continuous monitoring, and clear feedback—designed to make indoor growing reliable from day one."
          />
        </div>
      </Element>

      <section className="bg-[color:var(--bg)] pb-16 md:pb-24">
        <div className="container--padding">
          <div className="premium-panel grid items-center gap-10 p-6 md:grid-cols-2 md:gap-12 md:p-10 lg:p-12">
            <div className="max-w-xl">
              <span className="feature-index mb-6">01</span>
              <h2 className="section-title text-[color:var(--text)] md:text-4xl lg:text-5xl">
                Automated Plant Care
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[color:var(--muted-text)] md:text-lg">
                The system automatically manages essential growing conditions such
                as temperature, lighting, watering, and nutrients. Plants receive
                balanced care every day, without guesswork.
              </p>
              <button className="btn-primary quote mt-8 px-6 py-3 text-sm md:text-base">
                Learn More
              </button>
            </div>

            <div data-aos="fade-left" data-aos-duration="700">
              <BlurredImage
                backgroundImage="/assets/images/graphite.png"
                src="/assets/images/mintgreen.png"
                alt="Automated Plant Care"
                width={2000}
                height={2000}
                imageClassName="rounded-[1.5rem]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
