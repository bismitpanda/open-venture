import React from "react";

export interface PartnerButtonProps {
  name: string;
  logoUrl?: string;
}

const PartnerButton = ({ name, logoUrl }: PartnerButtonProps) => {
  return (
    <div className="grayscale hover:grayscale-0 transition-all">
      <img
        src={logoUrl || `/partners/${name.toLowerCase()}.svg`}
        alt={name}
        className="h-8"
      />
    </div>
  );
};

export const PartnerSection = () => {
  const partners = ["ZARA", "CHANEL", "Students Landing"];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-xl font-medium text-center mb-8">Partnered With</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {partners.map((partner) => (
            <PartnerButton key={partner} name={partner} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerButton;
