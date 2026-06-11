"use client";
import { ROUTES } from "@/utils/routes";
import Image from "next/image";
import Link from "next/link";
import { Element } from "react-scroll";

export default function FAQ() {
  const faqs = [
    {
      title: "What is the Indoor Smart Gardening System?",
      content:
        "The Indoor Smart Gardening System is a controlled indoor setup designed to help plants grow better during their early and most delicate stages. It provides the right balance of light, water, air, and nutrients so plants can develop strong roots before being moved outdoors.",
    },
    {
      title: "Who can use this system?",
      content:
        "The system is designed for everyone—from beginners and home gardeners to schools, community projects, and organizations. You don't need expert gardening knowledge to use it, as the system simplifies plant care through automation and monitoring.",
    },
    {
      title: "How does indoor growing help plants grow better?",
      content:
        "Indoor growing protects young plants from harsh weather, inconsistent watering, and environmental stress. By maintaining stable conditions, plants grow more evenly, remain healthier, and have a higher chance of survival when transplanted outdoors.",
    },
    {
      title: "Do I need to monitor the plants all the time?",
      content:
        "No. The system automates daily care such as watering and environmental control. It also helps identify early signs of issues, reducing the need for constant manual supervision while still allowing users to stay informed.",
    },
    {
      title: "Can the system be expanded for larger projects?",
      content:
        "Yes. The system is modular and scalable. It can start small for indoor or educational use and be expanded to support community gardens, nurseries, or larger indoor plantation initiatives as needs grow.",
    },
  ];

  const supportChannels = [
    {
      cta: "Call us",
      href: "tel:+8801670228961",
      icon: "/assets/images/phone-icon.svg",
    },
    {
      cta: "Chat now",
      href: "https://wa.me/8801670228961",
      icon: "/assets/images/whatsapp-icon.svg",
    },
  ] as const;

  return (
    <Element
      name={ROUTES.FAQ}
      className="section-shell bg-[color:var(--surface-2)] py-12 md:py-16"
    >
      <div className="relative z-[1] container--padding">
        <div className="mx-auto max-w-5xl">
          <p className="section-eyebrow mb-4" data-aos="fade-up">
            Support
          </p>

          <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between md:gap-8">
            <div className="max-w-xl">
              <h2
                className="section-title section-title--gradient"
                data-aos="fade-up"
                data-aos-delay="50"
              >
                Questions? We&apos;re here to help
              </h2>
              <p
                className="section-description mt-4"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Reach out anytime — we&apos;re happy to walk you through indoor growing.
              </p>
            </div>

            <div className="flex w-full shrink-0 flex-col gap-2.5 sm:flex-row sm:items-center md:w-auto">
              {supportChannels.map((channel) => (
                <Link
                  key={channel.cta}
                  href={channel.href}
                  className="support-channel premium-panel group inline-flex h-10 w-full items-center justify-center gap-2.5 whitespace-nowrap rounded-full px-5 py-0 sm:w-auto sm:min-w-[9.5rem] md:min-w-[10.5rem] transition-transform duration-200 hover:-translate-y-0.5"
                >
                  <span className="support-channel__icon flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface)]">
                    <Image src={channel.icon} alt="" width={16} height={16} />
                  </span>
                  <span className="text-sm font-bold leading-none text-[color:var(--brand-dark)]">
                    {channel.cta}
                  </span>
                  <svg
                    aria-hidden="true"
                    className="shrink-0 opacity-60 transition group-hover:translate-x-0.5 group-hover:opacity-100"
                    fill="none"
                    height={13}
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width={13}
                  >
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-8 space-y-3 md:mt-10">
            {faqs.map((faq, index) => (
              <div
                className="premium-panel rounded-xl px-4 py-3.5 md:px-5 md:py-4"
                key={faq.title}
                data-aos="fade-up"
                data-aos-delay={index * 60}
              >
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold text-[color:var(--text)] md:text-base">
                    <span>{faq.title}</span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] transition group-open:rotate-180">
                      <svg fill="none" height={16} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width={16}>
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted-text)]">
                    {faq.content}
                  </p>
                </details>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Element>
  );
}
