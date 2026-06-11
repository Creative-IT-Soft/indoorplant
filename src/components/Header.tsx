"use client";

import { useEffect, useState } from "react";
import { headerMenu } from "@/utils/menu";
import { ROUTES } from "@/utils/routes";
import Image from "next/image";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "@/components/ThemeToggle";

const DESKTOP_BP = 1120;

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= DESKTOP_BP) setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setIsMenuOpen((v) => !v);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50",
        isScrolled ? "text-[color:var(--text)]" : "text-white",
      ].join(" ")}
    >
      <div
        aria-hidden="true"
        className={[
          "pointer-events-none absolute inset-0 bg-gradient-to-b from-black/55 to-transparent transition-opacity duration-300 ease-out",
          isScrolled ? "opacity-0" : "opacity-100",
        ].join(" ")}
      />
      <div
        aria-hidden="true"
        className={[
          "pointer-events-none absolute inset-0 border-b transition-opacity duration-300 ease-out",
          isScrolled
            ? "opacity-100 border-[color:var(--border)] bg-[color:var(--header-bg)] shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
            : "border-transparent opacity-0",
        ].join(" ")}
      />

      <div className="relative">
      <div className="container--padding">
        <div className="flex h-[56px] items-center justify-between md:h-[72px] lg:h-[84px]">
          <div className="flex h-full items-center">
            <Link
              to={ROUTES.HOME}
              className="inline-flex h-full items-center"
              smooth
              duration={500}
            >
              <span className="relative block h-[34px] w-[78px] md:h-[44px] md:w-[94px] lg:h-[52px] lg:w-[110px]">
                <Image
                  src="/assets/images/logo.svg"
                  alt="logo"
                  fill
                  priority
                  className="object-contain"
                />
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-2 min-[1120px]:hidden">
            <ThemeToggle overHero={!isScrolled} />
            <button
              className={[
                "inline-flex h-10 w-10 items-center justify-center rounded-full border transition md:h-11 md:w-11",
                isScrolled
                  ? "border-[color:var(--border)] text-[color:var(--text)] hover:bg-[color:var(--hover)]"
                  : "border-white/15 text-white hover:bg-white/10",
              ].join(" ")}
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              <span className="text-2xl">
                {isMenuOpen ? <FiX /> : <FiMenu />}
              </span>
            </button>
          </div>

          <nav className="hidden min-[1120px]:block">
            <ul
              className={[
                "flex items-center gap-1 rounded-full border px-2 py-1 backdrop-blur-xl",
                isScrolled
                  ? "border-[color:var(--border)] bg-[color:var(--card-bg)]"
                  : "border-white/10 bg-white/5",
              ].join(" ")}
            >
              {headerMenu.map((item) => (
                <li key={item.title}>
                  <Link
                    to={item.href}
                    smooth
                    duration={500}
                    offset={-84}
                    className={[
                      "inline-flex h-11 items-center justify-center whitespace-nowrap rounded-full px-4 text-sm font-semibold transition lg:text-[15px]",
                      isScrolled
                        ? "text-[color:var(--text)] hover:bg-[color:var(--hover)] hover:text-[color:var(--brand-dark)]"
                        : "text-white/90 hover:bg-white/10 hover:text-white",
                    ].join(" ")}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden h-full items-center gap-3 min-[1120px]:flex">
            <ThemeToggle overHero={!isScrolled} />
            <Link
              to={ROUTES.CONTACT_US}
              smooth
              duration={500}
              offset={-84}
              className="quote inline-flex h-[46px] items-center gap-2 whitespace-nowrap rounded-full px-5 text-sm font-bold leading-none lg:h-[50px] lg:px-6 lg:text-[15px]"
            >
              <span>Contact Us</span>
              <span className="relative h-[18px] w-[18px] flex-shrink-0 lg:h-[20px] lg:w-[20px]">
                <Image
                  src="/assets/images/robot.png"
                  alt="robot"
                  fill
                  className="object-contain"
                />
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div
        className={[
          "overflow-hidden transition-all duration-300 ease-in-out min-[1120px]:hidden",
          isMenuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <div className="container--padding pb-4">
          <nav className="glass-card mt-2 rounded-2xl">
            <ul className="flex flex-col p-3">
              {headerMenu.map((item) => (
                <li key={item.title}>
                  <Link
                    to={item.href}
                    smooth
                    duration={500}
                    offset={-72}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex w-full items-center rounded-xl px-4 py-3 text-base font-semibold text-[color:var(--text)] transition hover:bg-[color:var(--hover)]"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
              <li className="mt-2">
                <Link
                  to={ROUTES.CONTACT_US}
                  smooth
                  duration={500}
                  offset={-72}
                  onClick={() => setIsMenuOpen(false)}
                  className="quote inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-3 font-semibold text-white"
                >
                  Contact Us
                  <span className="relative block h-[20px] w-[20px]">
                    <Image
                      src="/assets/images/robot.png"
                      alt="robot"
                      fill
                      className="object-contain"
                    />
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      </div>
    </header>
  );
}
