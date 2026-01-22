import Image from "next/image";
import Link from "next/link";
import { socialMenu } from "@/utils/menu";

export default function Footer() {
  return (
    <>
      <div className="gap-10 grid grid-cols-1 md:grid-cols-4 bg-[#0c0f19] py-10 text-white container--padding footer">
        {/* Column One */}
        <div className="col--one" data-aos="fade-down" data-aos-duration="1000">
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={200}
            height={50}
          />
          <p className="mt-5 text-sm">
            Our Indoor Smart Gardening System helps plants grow healthier by
            providing the right care during their early stages. Designed to be
            simple, reliable, and adaptable, it supports greener homes,
            communities, and sustainable environments.
          </p>
        </div>

        {/* Column Two (Newsletter Section) */}
        <div className="col-span-1 md:col-span-2 newsletter">
          <h1 className="font-bold font-mont text-[22px]">
            Stay Connected with Our Indoor Growing Community
          </h1>
          <p className="mt-2 text-sm text-gray-300">
            Get updates, insights, and tips on indoor growing and sustainable
            planting—delivered straight to your inbox.
          </p>

          <div className="flex gap-[5px] input mt-4">
            <input
              type="email"
              placeholder="Email Address"
              className="border-[#fff] bg-black px-4 py-2 border rounded-[5px] w-full font-mont font-normal text-[10px] text-white outline-none"
            />
            <button className="flex justify-center items-center bg-[#FFF] rounded-[5px] w-[43px] h-[37px]">
              <Image
                src="/assets/images/arrow-right.svg"
                alt="arrow"
                width={15}
                height={13}
              />
            </button>
          </div>

          <div>
            <h1 className="mt-3 mb-3 font-medium font-mont text-[16px]">
              FOLLOW US
            </h1>
            <ul className="flex gap-[10px]">
              {socialMenu.map((item, index) => (
                <li key={index}>
                  <Link href={item.href}>
                    <Image
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

        {/* Column Four (Office Address) */}
        <div className="col--four" data-aos="fade-down" data-aos-duration="1000">
          <h1 className="mb-4 font-semibold text-xl">Our Offices</h1>

          <div className="flex flex-col gap-3 border-gray-800 pb-5 border-b">
            {/* Office USA */}
            <div className="flex items-center gap-2">
              <Image
                src="/assets/images/bank-icon.svg"
                alt="bank icon"
                width={20}
                height={20}
              />
              <p className="text-sm">CIS Tech Ltd, USA</p>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/assets/images/location-icon.svg"
                alt="location icon"
                width={20}
                height={20}
              />
              <p className="text-sm">
                75, East Legacy Dr, Mountain House, CA 95391, USA
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/assets/images/phone-icon.svg"
                alt="phone icon"
                width={20}
                height={20}
              />
              <p className="text-sm">+1 (323) 552-5543</p>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/assets/images/mail-icon.svg"
                alt="mail icon"
                width={20}
                height={20}
              />
              <p className="text-sm">usa@cistechltd.com</p>
            </div>
          </div>

          {/* Office Bangladesh */}
          <div className="flex flex-col gap-3 pt-5">
            <div className="flex items-center gap-2">
              <Image
                src="/assets/images/bank-icon.svg"
                alt="bank icon"
                width={20}
                height={20}
              />
              <p className="text-sm">CIS Tech Ltd, Bangladesh</p>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/assets/images/location-icon.svg"
                alt="location icon"
                width={20}
                height={20}
              />
              <p className="text-sm">
                House 410, Road 29, Mohakhali DOHS, Dhaka-1206.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/assets/images/phone-icon.svg"
                alt="phone icon"
                width={20}
                height={20}
              />
              <p className="text-sm">+880 1670 228 961</p>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/assets/images/mail-icon.svg"
                alt="mail icon"
                width={20}
                height={20}
              />
              <p className="text-sm">info@cistechltd.net</p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="copyright bg-[#0c0f19] py-5 border-t border-t-gray-800 text-center text-white container--padding">
        <p className="mb-2 font-semibold text-gray-500 text-sm">
          <span>&#169;</span> CIS Tech Ltd {new Date().getFullYear()} All rights
          reserved
        </p>
        <p className="font-semibold text-sm">
          A product of{" "}
          <Link href="/" className="text-[#9ceffe]">
            CIS Tech Ltd
          </Link>
        </p>
      </div>
    </>
  );
}
