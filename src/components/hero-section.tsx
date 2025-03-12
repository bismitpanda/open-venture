import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="text-center py-48 px-4">
      <h1 className="text-3xl xl:text-7xl md:text-5xl font-black mb-4">
        <p>
          Your <span className="text-red-500">All-in-One</span> Concierge for
        </p>
        <p>Life in the U.S.</p>
      </h1>
      <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
        From visas to housing, taxes, and business setup—we make your transition
        seamless so you can focus on what matters.
      </p>
      <div className="flex justify-center gap-4 sm:flex-row flex-col">
        <Link href="https://calendly.com/greencardinc-nikin/30min">
          <Button className="p-5" variant="default">
            Book a free consultation
          </Button>
        </Link>
        <Link href="#services">
          <Button className="p-5" variant="outline">
            View Services <ArrowDown />
          </Button>
        </Link>
      </div>
    </section>
  );
}
