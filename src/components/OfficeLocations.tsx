"use client";

import { officeRegions } from "@/data/officeLocations";
import { useState } from "react";

function PlusIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 448 512" className="cis-office__toggle-icon">
      <path
        fill="currentColor"
        d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32v144H48c-17.7 0-32 14.3-32 32s14.3 32 32 32h144v144c0 17.7 14.3 32 32 32s32-14.3 32-32V224h144c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
      />
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 448 512" className="cis-office__toggle-icon">
      <path
        fill="currentColor"
        d="M432 256c0 17.7-14.3 32-32 32H48c-17.7 0-32-14.3-32-32s14.3-32 32-32h352c17.7 0 32 14.3 32 32z"
      />
    </svg>
  );
}

export default function OfficeLocations() {
  const [openKey, setOpenKey] = useState<string | null>(
    "South Asia-Dhaka, Bangladesh"
  );

  return (
    <div className="cis-office">
      <h2 className="cis-footer__right-title">Locate Us</h2>

      <div className="cis-office__list">
        {officeRegions.map((region) => (
          <div key={region.region} className="cis-office__region">
            <h5 className="cis-office__region-title">{region.region}</h5>

            {region.locations.map((location) => {
              const key = `${region.region}-${location.city}`;
              const isOpen = openKey === key;

              return (
                <div key={key} className="cis-office__item">
                  <button
                    type="button"
                    className="cis-office__trigger"
                    aria-expanded={isOpen}
                    onClick={() => setOpenKey(isOpen ? null : key)}
                  >
                    {/* Aligns flag and city on the left side */}
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                      {location.flag && (
                        <span aria-hidden="true" className="cis-office__flag">
                          {location.flag}
                        </span>
                      )}
                      <p className="cis-office__city">{location.city}</p>
                    </span>
                    
                    {isOpen ? <MinusIcon /> : <PlusIcon />}
                  </button>

                  {isOpen && (
                    <div className="cis-office__details">
                      <p className="cis-office__detail">
                        <span className="cis-office__label">Address:</span>{" "}
                        <span>{location.address}</span>
                      </p>
                      <p className="cis-office__detail">
                        <span className="cis-office__label">Phone:</span>{" "}
                        <a href={`tel:${location.phone.replace(/\s/g, "")}`}>
                          {location.phone}
                        </a>
                      </p>
                      <p className="cis-office__detail">
                        <span className="cis-office__label">Email:</span>{" "}
                        <a href={`mailto:${location.email}`}>{location.email}</a>
                      </p>
                    </div>
                  )}

                  <hr className="cis-office__divider" />
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}