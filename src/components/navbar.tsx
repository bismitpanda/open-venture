import React from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const navItems = [
    { label: "Housing", href: "#" },
    { label: "Publishing", href: "#" },
    { label: "Tax Filing", href: "#" },
    { label: "Visa Assistance", href: "#" },
    { label: "Incubator", href: "#" },
  ];

  return (
    <header className="flex justify-between items-center mt-4 p-4 max-w-7xl mx-auto">
      <div className="flex items-center">
        <img src="/logo.svg" alt="Open Venture" className="h-8" />
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
      <Button>Get in Touch</Button>
    </header>
  );
};

export default Navbar;
