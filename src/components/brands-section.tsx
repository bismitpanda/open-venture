import React from "react";
import Image from "next/image";

export function PartnerSection() {
  const brands = [
    "students-landing",
    "greencard",
    "unshackled",
    "shout-start",
    "open-tax-advisors",
    "open-axle",
  ] as const;

  return (
    <section className="py-16 mb-10">
      <div className="mx-auto px-24">
        <h2 className="text-3xl font-medium text-center mb-8">Our Brands</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 items-center justify-items-center">
          {brands.map((brand) => (
            <div key={brand}>
              <Image
                src={`/brands/${brand}.png`}
                alt={brand}
                height={200}
                width={600}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
