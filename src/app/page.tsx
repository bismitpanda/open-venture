import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { TestimonialSection } from "@/components/testimonial-section";
import { PartnerSection } from "@/components/brands-section";
import { Footer } from "@/components/footer";
import { AvatarStack } from "@/components/avatar-stack";
import Link from "next/link";
import { ServiceSection } from "@/components/service-section";

export default function Page() {
  const stats = [
    { number: "2,000+", description: "Successfully secured Green Cards" },
    { number: "20%", description: "Savings on tax filing for our clients" },
    {
      number: "1,000+",
      description: "Visa holders transitioned jobs without status slip",
    },
    { number: "Top 10", description: "Immigration law firms partner with us" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="text-center py-56 px-4">
        <h1 className="text-5xl md:text-5xl font-bold mb-4">
          Your All-in-One Concierge for Life in the U.S.
        </h1>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          From visas to housing, taxes, and business setup—we make your
          transition seamless so you can focus on what matters.
        </p>
        <div className="flex justify-center gap-4 sm:flex-row flex-col">
          <Link href="">
            <Button variant="default">Talk to an Immigration Expert</Button>
          </Link>
          <Link href="#services">
            <Button variant="outline">
              View Services <ArrowDown />
            </Button>
          </Link>
        </div>
      </section>

      <section id="services" className="bg-blue-50 py-16">
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

      <ServiceSection />

      <PartnerSection />

      <Footer />
    </div>
  );
}
