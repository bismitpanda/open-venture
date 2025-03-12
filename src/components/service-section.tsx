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
        "Secure you fast-track O-1 work visa or EB-1A Green Card with our expert guidance",
      features: [
        "Profile building to fill qualification gaps",
        "Work with Tier 1 law firms",
        "No annual caps, lottery, or employer sponsorship required",
      ],
      cta: "Schedule a Free Consultation",
      calendlyLink:
        "https://calendly.com/greencardinc/immigration-support-30min",
    },
    {
      icon: Home,
      title: "Housing & Relocation",
      description:
        "We make your move to the U.S. seamless with end-to-end support",
      features: [
        "Roommate matching and lease guidance",
        "U.S. bank accounts, credit cards, and SIM card activation",
        "Deposit assitance (pay in India)",
      ],
      cta: "Connect on WhatsApp",
      calendlyLink: "https://wa.me/18573813062",
    },
    {
      icon: Calculator,
      title: "Tax Filing Made Simple",
      description:
        "U.S. tax laws can be complex—we make filing stress-free and compliant",
      features: [
        "Avoid IRS penalties & double taxation",
        "Expert tax filing for J-1, F-1, H-1B, and O-1",
        "ITIN applications and U.S. investment taxation",
      ],
      cta: "Schedule a Free Tax Consultation",
      calendlyLink:
        "https://www.opentaxadvisors.com/booking-calendar/complimentary-consultation?timezone=America%2FNew_York&referral=service_details_widget",
    },
    {
      icon: Building2,
      title: "Incubator & Business Support",
      description:
        "Turn your idea into a U.S. startup with our comprehensive support",
      features: [
        "Technical support to build your 0 to 1 prototype",
        "O-1 work visas for your team",
        "Incorporation, office space, and accounting",
      ],
      cta: "Talk to a Business Expert",
      calendlyLink: "https://calendly.com/greencardinc-nikin/30min",
    },
    {
      icon: GraduationCap,
      title: "Media Services",
      description:
        "Boost your professional and startup brand with strategic media placements",
      features: [
        "Get featured in top-tier publications",
        "Establish thought leadership in your industry",
        "Strengthen your O-1 / EB-1A case, startup and career",
      ],
      cta: "Book a Strategy Call",
      calendlyLink: "https://calendly.com/greencardinc-nikin/30min",
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
