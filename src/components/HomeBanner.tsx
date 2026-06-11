"use client";

import { ROUTES } from "@/utils/routes";
import { useEffect, useRef } from "react";
import { Element, Link } from "react-scroll";

export default function HomeBanner() {
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
      className="hero-banner relative min-h-[100svh] overflow-hidden"
    >
      <div className="hero-banner__texture" aria-hidden="true" />
      <div className="hero-banner__overlay" aria-hidden="true" />

      <div className="relative z-[2] flex min-h-[100svh] flex-col lg:flex-row">
        <div className="flex flex-1 items-center container--padding pb-10 pt-[84px] lg:max-w-[52%] lg:pb-16 lg:pt-[96px]">
          <div className="hero-banner__content max-w-[640px]" data-aos="fade-up" data-aos-duration="900">
            <p className="hero-banner__eyebrow">Indoor Smart Gardening</p>

            <h1 className="hero-banner__title">
              <span className="hero-banner__title-line">Grow Calm.</span>
              <span className="hero-banner__title-accent">Grow Green.</span>
              <span className="hero-banner__title-line">Indoors.</span>
            </h1>

            <p className="hero-banner__description">
              Turn everyday moments into peaceful gardening rituals. Our Indoor
              Smart Gardening System lets you nurture thriving plants from the
              comfort of your home—bringing relaxation, fresh life, and a deeper
              connection to nature into your space.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                to={ROUTES.OVERVIEW}
                smooth
                duration={700}
                offset={-84}
                className="btn-primary quote w-full sm:w-auto"
              >
                Explore More
              </Link>
              <Link
                to={ROUTES.FEATURES}
                smooth
                duration={700}
                offset={-84}
                className="hero-banner__cta-secondary w-full sm:w-auto"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </div>

        <div className="relative flex flex-1 items-end justify-center lg:items-center lg:justify-end">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 hidden w-40 bg-gradient-to-r from-[#040806] to-transparent lg:block"
            aria-hidden="true"
          />

          <div
            className="relative h-[42svh] w-full sm:h-[48svh] lg:h-full lg:min-h-[100svh] lg:w-[min(100%,760px)]"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(74,222,128,0.22),transparent_55%)]" />
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              poster="/assets/images/hero-poster.jpg"
              className="h-full w-full object-cover object-[center_35%] lg:object-center"
            >
              <source src="/assets/videos/render.webm" type="video/webm" />
            </video>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#040806] to-transparent lg:hidden" />
          </div>
        </div>
      </div>
    </Element>
  );
}
