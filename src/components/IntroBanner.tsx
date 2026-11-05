"use client";

import SectionHeading from "@/components/SectionHeading";
import { ROUTES } from "@/utils/routes";
import { Element } from "react-scroll";

export default function IntroBanner() {
  return (
    <Element
      name={ROUTES.OVERVIEW}
      className="section-shell bg-[color:var(--surface-3)] py-20 md:py-28"
    >
      <div className="relative z-[1] container--padding">
        <div className="mx-auto flex max-w-6xl flex-col items-center text-center pb-5">
          <SectionHeading
            align="center"
            eyebrow="Overview"
            title="Grow healthy plants smartly"
            description="This system supports plants during their most delicate stage of growth. By bringing early-stage planting indoors, we reduce uncertainty, improve consistency, and help plants grow strong before moving outdoors."
          />

          <div
            className="premium-panel relative mt-12 w-full max-w-[928px] p-4 md:p-6"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--gold)] to-transparent opacity-80" />
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              aria-label="Indoor Smart Gardening System"
              className="block w-full object-contain select-none"
            >
              <source src="/assets/videos/plant-system.webm" type="video/webm" />
            </video>
          </div>

          <div className="mt-10 grid w-full max-w-4xl gap-4 md:grid-cols-3">
            {[
              "Stable Indoor Climate",
              "Early-Stage Protection",
              "Stronger Transplant Success",
            ].map((item) => (
              <div
                key={item}
                className="premium-panel rounded-2xl px-5 py-4 text-sm font-semibold text-[color:var(--text)]"
                data-aos="fade-up"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Element>
  );
}
