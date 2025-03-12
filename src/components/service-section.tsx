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
      icon: CreditCard,
      title: "Visas & Green Card",
      description:
        "Leverage our expertise to secure a fast-track O1 work visa and an EB1A Green Card",
      features: [
        "Profile building to fill gaps in your qualifications",
        "Work with Tier 1 law firms",
        "No annual caps, lottery or employer sponsorship required",
      ],
    },
    {
      icon: Home,
      title: "Housing & Relocation",
      description:
        "Navigating homeownership or relocation in the U.S.? We make it seamless by providing the following services",
      features: [
        "Mortgage & financing for high-skilled professionals",
        "Understanding lease agreements & home loans",
        "Relocation support for job changes",
      ],
    },
    {
      icon: Calculator,
      title: "Tax Filing Made Simple",
      description:
        "Don't let U.S. tax laws confuse you. We ensure your tax filing is stress-free & compliant with the right deductions.",
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
    {
      icon: GraduationCap,
      title: "Media Services",
      description:
        "Boost your professional presence with strategic media placements and expert articles.",
      features: [
        "Personal branding through high-tier publications",
        "Thought leadership to showcase your expertise",
        "Strengthen your case for EB-1A & career growth",
      ],
    },
  ];

  return (
    <section className="py-16 max-w-7xl mx-auto px-4">
      <h2 className="text-2xl font-bold text-center mb-12">
        Services We Provide
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
}
