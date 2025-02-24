import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

export interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  features,
}: ServiceCardProps) => {
  return (
    <Card className="p-6">
      <div className="text-blue-600 mb-4">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      <Button variant="link" className="mt-4">
        Know more
      </Button>
    </Card>
  );
};

export default ServiceCard;
