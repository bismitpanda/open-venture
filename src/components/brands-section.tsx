import React from "react";

export function PartnerSection() {
  const brands = ["ZARA", "CHANEL", "Students Landing"];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-xl font-medium text-center mb-8">Our Brands</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {brands.map((brand) => (
            <div
              key={brand}
              className="grayscale hover:grayscale-0 transition-all"
            >
              <img
                src={`/partners/${brand.toLowerCase()}.jpg`}
                alt={brand}
                className="h-8"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
