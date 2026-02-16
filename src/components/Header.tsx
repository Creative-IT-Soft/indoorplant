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
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Close mobile menu automatically when crossing >=1120px
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
        "transition-all duration-300",
        "bg-[color:var(--header-bg)]",
        "text-[color:var(--text)]",
        isScrolled ? "shadow-lg" : "",
      ].join(" ")}
    >
      {/* ✅ TOP BAR: fixed height so logo + hamburger always center */}
      <div className="container--padding">
        <div
          className="
            flex items-center justify-between
            h-[56px] md:h-[72px] lg:h-[84px]
          "
        >
          {/* Logo */}
          <div className="flex items-center h-full">
            <Link
              to={ROUTES.HOME}
              className="inline-flex items-center h-full"
              smooth
              duration={500}
            >
              <span
                className="
                  relative block
                  w-[78px] h-[34px]
                  md:w-[94px] md:h-[44px]
                  lg:w-[110px] lg:h-[52px]
                "
              >
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

          {/* ✅ Right cluster (theme + hamburger) */}
          <div className="min-[1120px]:hidden flex items-center gap-2">
            <ThemeToggle />

            {/* ✅ Hamburger: visible BELOW 1120px */}
            <button
              className="
                inline-flex items-center justify-center
                h-10 w-10
                md:h-11 md:w-11
                rounded-lg
                text-[color:var(--text)]
                hover:bg-[color:var(--hover)]
                transition
              "
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              <span className="text-2xl">
                {isMenuOpen ? <FiX /> : <FiMenu />}
              </span>
            </button>
          </div>

          {/* ✅ Desktop navigation: visible AT/ABOVE 1120px */}
          <nav className="hidden min-[1120px]:block">
            <ul className="flex items-center gap-2 lg:gap-4 xl:gap-6">
              {headerMenu.map((item) => (
                <li key={item.title}>
                  <Link
                    to={item.href}
                    smooth
                    duration={500}
                    offset={-84}
                    className="
                      inline-flex items-center justify-center
                      font-semibold
                      text-[color:var(--text)]
                      transition
                      hover:text-[color:var(--brand)]
                      text-sm md:text-base lg:text-[17px] xl:text-[18px]
                      px-3
                      h-[56px] md:h-[72px] lg:h-[84px]
                      whitespace-nowrap
                    "
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* ✅ Desktop right (theme + contact): visible AT/ABOVE 1120px */}
          <div className="hidden min-[1120px]:flex items-center h-full gap-3">
            <ThemeToggle />

            <Link
              to={ROUTES.CONTACT_US}
              smooth
              duration={500}
              offset={-84}
              className="
                quote
                inline-flex items-center gap-2
                whitespace-nowrap
                h-[42px] md:h-[46px] lg:h-[50px]
                px-4 md:px-5 lg:px-6
                rounded-[12px]
                font-semibold
                text-white
                text-sm md:text-base lg:text-[17px]
                leading-none
                transition
                shadow-[0_8px_24px_rgba(0,0,0,0.18)]
              "
            >
              <span>Contact&nbsp;Us</span>

              <span
                className="
                  relative flex-shrink-0
                  w-[18px] h-[18px]
                  md:w-[20px] md:h-[20px]
                  lg:w-[22px] lg:h-[22px]
                "
              >
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

      {/* ✅ Mobile dropdown: only BELOW 1120px */}
      <div
        className={[
          "min-[1120px]:hidden overflow-hidden transition-all duration-300 ease-in-out",
          isMenuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <div className="container--padding">
          <nav
            className="
              mt-2
              rounded-xl
              bg-[color:var(--surface)]
              shadow-lg
              border border-[color:var(--border)]
            "
          >
            <ul className="flex flex-col p-3">
              {headerMenu.map((item) => (
                <li key={item.title}>
                  <Link
                    to={item.href}
                    smooth
                    duration={500}
                    offset={-72}
                    onClick={() => setIsMenuOpen(false)}
                    className="
                      flex w-full items-center
                      px-4 py-3
                      font-semibold
                      text-[color:var(--text)]
                      text-base
                      rounded-lg
                      hover:bg-[color:var(--hover)]
                      transition
                    "
                  >
                    {item.title}
                  </Link>
                </li>
              ))}

              {/* Mobile Contact button */}
              <li className="mt-2">
                <Link
                  to={ROUTES.CONTACT_US}
                  smooth
                  duration={500}
                  offset={-72}
                  onClick={() => setIsMenuOpen(false)}
                  className="
                    quote
                    inline-flex w-full items-center justify-center gap-2
                    rounded-[12px]
                    font-semibold text-white
                    px-4 py-3
                  "
                >
                  Contact Us
                  <span className="relative block w-[20px] h-[20px]">
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
    </header>
  );
}
