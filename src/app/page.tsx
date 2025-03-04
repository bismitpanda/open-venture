import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowRight } from "lucide-react";
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
            <Button variant="default">Book a free consultation</Button>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
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

      <section id="cta">
        <div className="rounded-xl bg-sky-50 py-10">
          <div className="container relative mx-auto max-w-7xl px-4 py-16">
            <div className="mx-auto space-y-4 pb-6 text-center">
              <h2 className="font-mono text-sm font-medium uppercase tracking-wider text-primary">
                Ready to get started?
              </h2>
              <h3 className="mx-auto mt-4 max-w-xs text-3xl font-semibold sm:max-w-none sm:text-4xl md:text-5xl">
                Start Your US Visa Journey Now!
              </h3>
            </div>
            <div className="mx-auto mt-6 flex w-full max-w-2xl flex-col items-center justify-center space-y-4 sm:mt-10 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button className="group gap-1">
                Get Started
                <ArrowRight className="transform transition-transform duration-200 ease-in-out group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
