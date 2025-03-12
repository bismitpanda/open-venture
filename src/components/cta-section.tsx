import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CTASection() {
  return (
    <section id="cta">
      <div className="rounded-xl bg-sky-50 py-10">
        <div className="container relative mx-auto max-w-7xl px-4 py-16">
          <div className="mx-auto space-y-4 text-center">
            <h2 className="font-mono text-sm font-medium uppercase tracking-wider text-primary">
              Ready to get started?
            </h2>
            <h3 className="mx-auto mt-4 max-w-xs text-3xl font-semibold sm:max-w-none sm:text-4xl md:text-5xl">
              Start Your U.S. Journey Now!
            </h3>
          </div>
          <div className="mx-auto flex w-full max-w-2xl flex-col items-center justify-center space-y-4 sm:mt-10 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Link href="https://calendly.com/greencardinc-nikin/30min">
              <Button className="group gap-1">
                Get Started
                <ArrowRight className="transform transition-transform duration-200 ease-in-out group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
