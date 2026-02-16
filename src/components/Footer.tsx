import Image from "next/image";
import Link from "next/link";
import { socialMenu } from "@/utils/menu";

export default function Footer() {
  return (
    <footer className="cis-footer">
      <div className="cis-footer__sky" />

      {/* STAGE */}
      <div className="cis-footer__stage">
        {/* Plant (behind panels) */}
        <div className="cis-footer__plant" aria-hidden="true">
          <video autoPlay loop muted playsInline>
            <source src="/assets/videos/plant.webm" type="video/webm" />
          </video>
        </div>

        {/* Panels */}
        <div className="cis-footer__grid">
          {/* LEFT */}
          <div className="cis-footer__panel cis-footer__panel--left">
            <p className="cis-footer__text">
              Our Indoor Smart Gardening System helps plants grow healthier by
              providing the right care during their early stages. Designed to be
              simple, reliable, and adaptable, it supports greener homes,
              communities, and sustainable environments.
            </p>

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

          <div className="cis-footer__spacer" />

          {/* RIGHT */}
          <div className="cis-footer__panel cis-footer__panel--right">
            <div className="cis-footer__right-inner">
              <h2 className="cis-footer__right-title">Our Office</h2>

              <div className="cis-footer__office">
                <div>
                  <Image
                    src="/assets/images/bank-icon.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                  <p>CIS Tech Ltd, Bangladesh</p>
                </div>
                <div>
                  <Image
                    src="/assets/images/location-icon.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                  <p>House 410, Road 29, Mohakhali DOHS, Dhaka-1206.</p>
                </div>
                <div>
                  <Image
                    src="/assets/images/phone-icon.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                  <p>+880 1670 228 961</p>
                </div>
                <div>
                  <Image
                    src="/assets/images/mail-icon.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                  <p>info@cistechltd.net</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
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
