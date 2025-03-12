import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, LucideIcon } from "lucide-react";
import Link from "next/link";

export interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  cta: string;
  calendlyLink: string;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
  cta,
  calendlyLink,
}: ServiceCardProps) {
  return (
    <Card className="p-6 shadow-none justify-between">
      <div className="flex flex-row space-x-4 text-blue-900">
        <Icon className="w-6 h-6" />
        <h3 className="text-xl font-bold mb-2">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start">
            <span className="text-primary mr-2">
              <Check />
            </span>
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      <Link href={calendlyLink}>
        <Button variant="link" className="group mt-4 gap-2 hover:no-underline">
          {cta}
          <ArrowRight className="transform transition-transform duration-200 ease-in-out group-hover:translate-x-1" />
        </Button>
      </Link>
    </Card>
  );
}
