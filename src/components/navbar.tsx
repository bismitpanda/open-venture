import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  const navItems = [
    { label: "Visa Assistance", href: "#" },
    { label: "Housing", href: "#" },
    { label: "Tax Filing", href: "#" },
    { label: "Incubator", href: "#" },
    { label: "Media Services", href: "#" },
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
