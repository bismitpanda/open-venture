import React from "react";
import { Button } from "@/components/ui/button";
import { Linkedin, Instagram, Twitter, ChevronRight } from "lucide-react";

export function Footer() {
  const socialLinks = [
    { label: "Twitter", icon: Twitter, href: "#" },
    { label: "Instagram", icon: Instagram, href: "#" },
    { label: "LinkedIn", icon: Linkedin, href: "#" },
  ];

  return (
    // TODO: fix color
    <footer className="bg-blue-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Your Future in the U.S. Starts Here.
        </h2>
        <Button variant="outline" className="bg-white text-blue-900">
          Start Your Journey
          <ChevronRight />
        </Button>
        <div className="mt-12">
          <img
            src="/logo-white.svg"
            alt="Open Venture"
            className="h-8 mx-auto mb-6"
          />
          <div className="flex justify-center space-x-4">
            {socialLinks.map(({ label, icon: Icon, href }) => (
              <a
                key={label}
                href={href}
                className="text-white hover:text-gray-300"
              >
                <span className="sr-only">{label}</span>
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
