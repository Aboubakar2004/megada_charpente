"use client";

import React, { useState } from "react";

const locations = [
  {
    id: "75",
    label: "Paris",
    desc: "Tous arrondissements",
    top: "46%",
    left: "50%",
  },
  {
    id: "77",
    label: "Seine-et-Marne",
    desc: "Île-de-France Est",
    top: "50%",
    left: "72%",
  },
  {
    id: "78",
    label: "Yvelines",
    desc: "Ouest francilien",
    top: "54%",
    left: "26%",
  },
  {
    id: "93",
    label: "Seine-Saint-Denis",
    desc: "Nord-est de Paris",
    top: "33%",
    left: "57%",
  },
  {
    id: "94",
    label: "Val-de-Marne",
    desc: "Sud-est de Paris",
    top: "62%",
    left: "60%",
  },
  {
    id: "95",
    label: "Val-d'Oise",
    desc: "Nord-ouest francilien",
    top: "24%",
    left: "43%",
  },
];

function Activities() {
  const [active, setActive] = useState<number | null>(null);
  const mapSrc =
    "https://maps.google.com/maps?q=%C3%8Ele-de-France&hl=fr&z=8&output=embed";

  return (
    <div className="py-20 px-20 ">
      <div className="grid gap-3 mb-10">
        <h2 className="text-2xl font-medium">Zone d&apos;intervention</h2>
        <h1 className="text-5xl font-normal">Partout en Île-de-France</h1>
        <p className="text-[#6B5E54]">
          De Paris aux Yvelines, nos équipes se déplacent pour garantir <br />{" "}
          la pérennité de votre patrimoine bâti.
        </p>
      </div>

      <div className="flex justify-between gap-10">
        <div className="w-1/2">
          {locations.map((loc, idx) => (
            <div
              key={loc.id}
              onMouseEnter={() => setActive(idx)}
              onMouseLeave={() => setActive(null)}
              onClick={() => setActive(idx)}
              className={`p-7 rounded-lg shadow-lg flex items-center gap-10 w-4/6 mb-6 cursor-pointer transition-colors duration-150 ${
                active === idx
                  ? "ring-2 ring-[#D2B48C] bg-[#f7f1e8]"
                  : "hover:ring-2 hover:ring-[#D2B48C]"
              }`}
            >
              <div>
                <h1 className="p-4 rounded-lg bg-[#F4EFE6] text-[#5D3A1A]">
                  {loc.id}
                </h1>
              </div>
              <div>
                <h2>{loc.label}</h2>
                <p className="text-[#6B5E54]">{loc.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-1/2 rounded-2xl overflow-hidden">
          <div className="relative w-full h-180 rounded-2xl overflow-hidden shadow-lg">
            <iframe
              className="absolute top-0 left-0 w-full h-full pointer-events-none"
              src={mapSrc}
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen
              aria-hidden={false}
              title="Carte de zone d'intervention"
            />
            <div className="absolute inset-0 pointer-events-none">
              {locations.map((loc, idx) => (
                <div
                  key={loc.id}
                  className={`map-marker absolute -translate-x-1/2 -translate-y-1/2 ${
                    active === idx ? "active" : ""
                  }`}
                  style={{ top: loc.top, left: loc.left }}
                >
                  <div className="marker-dot"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Activities;
