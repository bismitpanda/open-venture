import React from "react";
import { TestimonialSection } from "@/components/testimonial-section";
import { AvatarStack } from "@/components/avatar-stack";

export function StatsSection() {
  const stats = [
    { number: "100+", description: "O-1 and EB-1A approvals secured" },
    { number: "2,000+", description: "People assisted with housing each year" },
    { number: "$5M+", description: "Facilitated in tax refunds" },
    { number: "10+", description: "Businesses launched through our support" },
  ];

  return (
    <section id="services" className="bg-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-row max-w-fit mx-auto space-x-10">
          <span className="text-5xl font-bold bg-gradient-to-r from-primary to-red-500 text-transparent bg-clip-text">
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
        <div className="text-3xl font-light my-4 mx-auto max-w-fit text-center">
          Immigrants satisfied since 2019
        </div>
      </div>
      <div className="md:mx-50 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="md:hidden">
                <div className="text-4xl font-bold text-blue-600">
                  {stat.number}
                </div>
                <p className="text-sm text-gray-600">{stat.description}</p>
              </div>
              <div className="hidden md:block bg-white p-8 rounded-xl shadow-xl h-full">
                <div className="text-4xl font-bold">{stat.number}</div>
                <p className="mt-8 text-lg text-gray-600">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <TestimonialSection />
    </section>
  );
}
