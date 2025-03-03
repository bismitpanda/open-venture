import {
  Home,
  GraduationCap,
  CreditCard,
  Calculator,
  Building2,
} from "lucide-react";
import { ServiceCard } from "@/components/service-card";

export function ServiceSection() {
  const services = [
    {
      icon: Home,
      title: "Housing & Relocation",
      description: "Navigate homeownership or rentals in the U.S.",
      features: [
        "Mortgage & financing for high-skilled professionals",
        "Understanding lease agreements & home loans",
        "Relocation support for job changes",
      ],
    },
    {
      icon: GraduationCap,
      title: "Education & Publications",
      description:
        "Build your professional presence with strategic media placements and expert insights.",
      features: [
        "Personal branding through high-tier publications",
        "Thought leadership to showcase your expertise",
        "Strengthen your case for EB-1A & career growth",
      ],
    },
    {
      icon: CreditCard,
      title: "Visas & Green Card",
      description:
        "For EB-1A, NIW & O-1 applicants. Let us handle your immigration journey.",
      features: [
        "EB-1A petition & documentation strategy",
        "Letters of recommendation & case presentation",
        "Spouse & dependent support",
      ],
    },
    {
      icon: Calculator,
      title: "Tax Filing Made Simple",
      description:
        "Navigate U.S. taxes confidently with our expert guidance and support.",
      features: [
        "Avoid IRS penalties & double taxation",
        "Tax filing for EB-1A & Green Cards",
        "ITIN, Social Security, and investment tax guidance",
      ],
    },
    {
      icon: Building2,
      title: "Incubator & Business Support",
      description:
        "Starting a business in the U.S.? We connect you to the right incubators, funding, and legal setup.",
      features: [
        "Business visa & LLC setup help",
        "Startup incubator & networking access",
        "Funding & investment opportunities",
      ],
    },
  ];

  return (
    <section className="py-16 max-w-7xl mx-auto px-4">
      <h2 className="text-2xl font-bold text-center mb-12">
        Assistance We Offer
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
}
