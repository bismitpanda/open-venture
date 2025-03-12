import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  const navItems = [
    {
      label: "Visa Assistance",
      href: "https://calendly.com/greencardinc/immigration-support-30min",
    },
    { label: "Housing", href: "https://wa.me/18573813062" },
    {
      label: "Tax Filing",
      href: "https://www.opentaxadvisors.com/booking-calendar/complimentary-consultation?timezone=America%2FNew_York&referral=service_details_widget",
    },
    {
      label: "Incubator",
      href: "https://calendly.com/greencardinc-nikin/30min",
    },
    {
      label: "Media Services",
      href: "https://calendly.com/greencardinc-nikin/30min",
    },
  ];

  return (
    <header className="flex justify-between items-center mt-4 p-4 max-w-7xl mx-auto">
      <div className="flex items-center h-8">
        <Image
          src="/logo-extended.png"
          alt="Open Venture"
          height={44}
          width={225}
        />
      </div>
      <nav className="hidden md:flex space-x-6">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            {item.label}
          </a>
        ))}
      </nav>
      <Link href="https://calendly.com/greencardinc-nikin/30min">
        <Button>Get in Touch</Button>
      </Link>
    </header>
  );
}
