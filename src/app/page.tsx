import React from "react";
import { Button } from "@/components/ui/button";
import {
  Home,
  GraduationCap,
  CreditCard,
  Calculator,
  Building2,
  ArrowDown,
} from "lucide-react";
import Navbar from "@/components/navbar";
import TestimonialSection from "@/components/testimonial";
import ServiceCard from "@/components/service-card";
import { PartnerSection } from "@/components/partner-button";
import Footer from "@/components/footer";
import { AvatarStack } from "@/components/avatar-stack";

export default function Page() {
  const stats = [
    {
      number: "10,000+",
      description: "Immigrants satisfied with our services since 2018.",
    },
    { number: "2,000+", description: "Successfully secured Green Cards" },
    { number: "20%", description: "Savings on tax filing for our clients" },
    {
      number: "1,000+",
      description: "Visa holders transitioned jobs without status slip",
    },
    { number: "Top 10", description: "Immigration law firms partner with us" },
  ];

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
    <div className="min-h-screen">
      <Navbar />

      <section className="text-center py-48 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Your All-in-One Concierge for Life in the U.S.
        </h1>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          From visas to housing, taxes, and business setup—we make your
          transition seamless so you can focus on what matters.
        </p>
        <div className="flex justify-center gap-4">
          <Button variant="default">Talk to an Immigration Expert</Button>
          <Button variant="outline">
            View Services <ArrowDown />
          </Button>
        </div>
      </section>

      <section className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-row max-w-fit mx-auto space-x-10">
            <span className="text-5xl font-bold bg-gradient-to-br from-[#1454A1] to-[#AC049B] text-transparent bg-clip-text">
              10,000+
            </span>
            <AvatarStack
              avatars={[
                "/avatars/avatar-1.jpg",
                "/avatars/avatar-2.jpg",
                "/avatars/avatar-3.jpg",
                "/avatars/avatar-4.jpg",
                "/avatars/avatar-5.jpg",
                "/avatars/avatar-6.jpg",
              ]}
              maxAvatarsAmount={6}
              className="items-center"
            />
          </div>
          <div className="text-3xl font-light my-4 mx-auto max-w-fit">
            Immigrants satisfied with our services since 2018.
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-blue-600">
                  {stat.number}
                </div>
                <p className="text-sm text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>

        <TestimonialSection />
      </section>

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

      <PartnerSection />
      <Footer />
    </div>
  );
}
