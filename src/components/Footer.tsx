"use client";

import Image from "next/image";
import Link from "next/link";
import OfficeLocations from "@/components/OfficeLocations";
import { socialMenu } from "@/utils/menu";
import { useTheme } from "@/app/ThemeProvider";
import { useEffect, useState } from "react";

export default function Footer() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";
  const videoSrc = isDark
    ? "/assets/videos/plantBlack.mp4"
    : "/assets/videos/plantWhite.mp4";

  return (
    <footer className={`cis-footer ${isDark ? "cis-footer--dark" : "cis-footer--light"}`}>
      <div className="cis-footer__sky" aria-hidden="true" />
      <div className="cis-footer__blend" aria-hidden="true" />

      <div className="cis-footer__stage">
        <div className="cis-footer__plant-backdrop" aria-hidden="true" />

        <div className="cis-footer__plant" aria-hidden="true">
          <video autoPlay loop muted playsInline key={videoSrc}>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>

        <div className="cis-footer__grid">
          <div className="cis-footer__panel cis-footer__panel--left">
            <p className="cis-footer__text">
              Our Indoor Smart Gardening System helps plants grow healthier by
              providing the right care during their early stages. Designed to be
              simple, reliable, and adaptable, it supports greener homes,
              communities, and sustainable environments.
            </p>

            <div className="cis-footer__social-block">
              <h3 className="cis-footer__follow">FOLLOW US</h3>
              <ul className="cis-footer__social">
                {socialMenu.map((item, i) => (
                  <li key={i}>
                    <Link href={item.href}>
                      <Image
                        className="cis-footer__socialIcon"
                        src={`/assets/images/${item.icon}.svg`}
                        alt={item.title}
                        width={30}
                        height={30}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="cis-footer__spacer" />

          <div className="cis-footer__panel cis-footer__panel--right">
            <div className="cis-footer__right-inner">
              <OfficeLocations />
            </div>
          </div>
        </div>
      </div>

      <div className="cis-footer__bottom">
        <div className="cis-footer__divider" />
        <div className="cis-footer__copyright container--padding">
          <p>© CIS Tech Ltd {new Date().getFullYear()} All rights reserved</p>
          <p>
            A product of <Link href="/">CIS Tech Ltd</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
