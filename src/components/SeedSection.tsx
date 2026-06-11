"use client";

import PlantCarousel from "@/components/PlantCarousel";
import SectionHeading from "@/components/SectionHeading";
import { useMemo } from "react";
import { Element } from "react-scroll";
import { ROUTES } from "@/utils/routes";

const PLANT_ITEMS = [
  { id: "basil", title: "Basil", image: "/assets/images/plants/basil.jpg" },
  { id: "coriander", title: "Coriander", image: "/assets/images/plants/coriander.jpg" },
  { id: "mint", title: "Mint", image: "/assets/images/plants/mint.jpg" },
  { id: "oregano", title: "Oregano", image: "/assets/images/plants/oregano.jpg" },
  { id: "tomatoes", title: "Tomatoes", image: "/assets/images/plants/tomatoes.jpg" },
  { id: "chili", title: "Chili", image: "/assets/images/plants/chilli.jpg" },
  { id: "thyme", title: "Thyme", image: "/assets/images/plants/thyme.jpg" },
  { id: "rosemary", title: "Rosemary", image: "/assets/images/plants/rosemary.jpg" },
];

export default function SeedSection() {
  const items = useMemo(() => PLANT_ITEMS, []);

  return (
    <Element
      name={ROUTES.SEEDS}
      className="section-shell bg-[color:var(--surface-2)] py-20 md:py-28"
    >
      <div className="relative z-[1] container--padding">
        <SectionHeading
          eyebrow="Plant Library"
          title="What you can grow"
          description="Carefully selected herbs and vegetables that thrive in controlled indoor environments."
        />

        <div className="mt-12">
          <PlantCarousel items={items} />
        </div>
      </div>
    </Element>
  );
}
