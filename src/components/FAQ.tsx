"use client";
import { ROUTES } from "@/utils/routes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
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
        "The system is designed for everyone—from beginners and home gardeners to schools, community projects, and organizations. You don’t need expert gardening knowledge to use it, as the system simplifies plant care through automation and monitoring.",
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

  return (
    <Element
      name={ROUTES.FAQ}
      className="
        flex md:flex-row flex-col justify-between gap-10
        bg-[color:var(--bg)]
        py-10 w-full
        text-[color:var(--text)]
        container--padding
        overflow-hidden
      "
    >
      {/* LEFT */}
      <div
        className="faq--left flex flex-col justify-center items-start w-full md:w-[35%]"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <h1 className="mb-8 font-bold text-[24px]">
          Any questions? We’re here to help
        </h1>

        <p className="mb-8 text-[14px] text-[color:var(--muted-text)]">
          Still have questions or want to learn more about indoor growing? Reach
          out to us anytime.
        </p>

        <div className="flex items-center gap-5 contact--section">
          {/* Phone */}
          <div
            className="
              flex flex-col gap-3
              p-5 border rounded-lg phone
              bg-[color:var(--surface)]
              border-[color:var(--border)]
            "
          >
            <div className="icon">
              <Image
                src="/assets/images/phone-icon.svg"
                alt="phone"
                width={30}
                height={30}
              />
            </div>

            <p className="font-medium text-[12px] text-[color:var(--muted-text)]">
              Prefer to talk?
            </p>

            <Link
              href=""
              className="
                flex items-center gap-1
                font-semibold text-[12px]
                text-[color:var(--footer-link)]
                hover:opacity-90 transition
              "
            >
              <span>Call us</span>
              <Image
                src="/assets/images/arrow-right-phone.svg"
                alt="phone"
                width={20}
                height={10}
              />
            </Link>
          </div>

          {/* WhatsApp */}
          <div
            className="
              flex flex-col gap-3
              p-5 border rounded-lg whatsapp
              bg-[color:var(--surface)]
              border-[color:var(--border)]
            "
          >
            <div className="icon">
              <Image
                src="/assets/images/whatsapp-icon.svg"
                alt="whatsapp"
                width={30}
                height={30}
              />
            </div>

            <p className="font-medium text-[12px] text-[color:var(--muted-text)]">
              Want a quick answer?
            </p>

            <Link
              href=""
              className="
                flex items-center gap-1
                font-semibold text-[12px]
                text-[color:var(--brand)]
                hover:opacity-90 transition
              "
            >
              <span>Chat now</span>
              <Image
                src="/assets/images/arrow-right-whatsapp.svg"
                alt="whatsapp"
                width={15}
                height={8}
              />
            </Link>
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="faq--right w-full md:w-[65%]">
        {faqs.map((faq, index) => (
          <div
            className="
              mb-5 p-5 rounded-lg
              bg-[color:var(--surface)]
              border border-[color:var(--border)]
            "
            key={faq.title}
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay={index * 200}
          >
            <details className="group">
              <summary
                className="
                  flex justify-between items-center
                  font-medium cursor-pointer list-none
                  text-[color:var(--text)]
                "
              >
                <span>{faq.title}</span>

                <span className="group-open:rotate-180 transition">
                  <svg
                    fill="none"
                    height={28}
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width={28}
                    className="
                      p-1 rounded-full
                      bg-[color:var(--hover)]
                      text-[color:var(--text)]
                    "
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </summary>

              <p className="mt-3 text-[color:var(--muted-text)] group-open:animate-fadeIn">
                {faq.content}
              </p>
            </details>
          </div>
        ))}
      </div>
    </Element>
  );
}
