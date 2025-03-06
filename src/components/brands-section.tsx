import React from "react";
import Image from "next/image";

export function PartnerSection() {
  const brands = [
    "students-landing",
    "greencard",
    "unshackled",
    "shout-start",
    "open-tax-advisors",
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-medium text-center mb-8">Our Brands</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {brands.map((brand) => (
            <div key={brand}>
              <Image
                src={`/brands/${brand.toLowerCase()}.jpg`}
                alt={brand}
                height={180}
                width={480}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
