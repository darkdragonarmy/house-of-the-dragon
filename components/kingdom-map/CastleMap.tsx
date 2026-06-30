"use client";

import Image from "next/image";
import { useState } from "react";
import OrnatePanel from "@/components/shared/OrnatePanel";

const locations = [
  {
    id: 1,
    name: "Royal Court",
    x: 50,
    y: 18,
    color: "#b88632",
    description:
      "Meet the founders and leaders of House of the Dragon.",
  },
  {
    id: 2,
    name: "Achievement Hall",
    x: 18,
    y: 39,
    color: "#b88632",
    description:
      "Daily Tasks, Achievement Helpers and progression.",
  },
  {
    id: 3,
    name: "Dragon Market",
    x: 83,
    y: 40,
    color: "#b88632",
    description:
      "Furniture, rares, collectibles and community services.",
  },
  {
    id: 4,
    name: "Great Hall",
    x: 50,
    y: 52,
    color: "#b88632",
    description:
      "The social heart of House of the Dragon.",
  },
  {
    id: 5,
    name: "Games Arena",
    x: 16,
    y: 76,
    color: "#b88632",
    description:
      "Compete across our official games and tournaments.",
  },
  {
    id: 6,
    name: "Dragon Tavern",
    x: 83,
    y: 74,
    color: "#b88632",
    description:
      "Relax with friends, DJs and community events.",
  },
  {
    id: 7,
    name: "Totem Sanctuary",
    x: 50,
    y: 90,
    color: "#b88632",
    description:
      "Unlock classic and modern dragon powers.",
  },
];

export default function CastleMap() {
  const [selected, setSelected] = useState(locations[0]);

  return (
    <OrnatePanel
      subtitle="Kingdom"
      title="Explore the Castle"
    >
      <div className="mx-auto mb-12 max-w-3xl text-center">

        <p className="text-lg leading-8 text-gray-400">
          Every corridor leads to a new adventure.
          Hover over each glowing location to discover
          what awaits inside House of the Dragon.
        </p>

      </div>

      <div className="relative">

        <Image
          src="/images/castle/castle-map.webp"
          alt="Castle"
          width={1600}
          height={1000}
          priority
          className="w-full rounded-2xl border border-[#7b5a28]"
        />

        {locations.map((location) => (

          <button
            key={location.id}
            onMouseEnter={() => setSelected(location)}
            style={{
              left: `${location.x}%`,
              top: `${location.y}%`,
            }}
            className="
              absolute
              -translate-x-1/2
              -translate-y-1/2
            "
          >

            <div
              className="
                h-5
                w-5
                rounded-full
                border-2
                border-yellow-300
                animate-pulse
                shadow-[0_0_20px_rgba(255,220,100,.75)]
              "
              style={{
                background: location.color,
              }}
            />

          </button>

        ))}

      </div>

      <div className="mt-10 rounded-2xl border border-[#7b5a28] bg-[#1a120d] p-8">

        <h3 className="text-3xl font-bold text-yellow-200">
          {selected.name}
        </h3>

        <p className="mt-4 text-lg leading-8 text-gray-400">
          {selected.description}
        </p>

      </div>

    </OrnatePanel>
  );
}