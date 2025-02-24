import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export interface TestimonialProps {
  rating: number;
  text: string;
  author: string;
  date: string;
}

const TestimonialCard = ({ rating, text, author, date }: TestimonialProps) => (
  <Card className="min-w-[300px] mx-4">
    <CardContent className="pt-6">
      <div className="flex mb-2">
        {[...Array(rating)].map((_, i) => (
          <span key={i} className="text-yellow-400">
            ★
          </span>
        ))}
      </div>
      <p className="text-gray-600 mb-4">{text}</p>
      <div className="flex items-center">
        <div className="ml-3">
          <p className="font-medium">{author}</p>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

const TestimonialSection = () => {
  const testimonials = [
    {
      rating: 5,
      text: "Expert Guidance! Open Venture has been exceptionally professional and helpful...",
      author: "Michael K",
      date: "January 12, 2024",
    },
    {
      rating: 4,
      text: "Expert Guidance Every Step of the Way...",
      author: "Kevin T",
      date: "January 15, 2024",
    },
    {
      rating: 5,
      text: "Amazing Support! Their team has been incredible...",
      author: "Aaron S",
      date: "January 18, 2024",
    },
    {
      rating: 5,
      text: "Expert Guidance! Open Venture has been exceptionally professional and helpful...",
      author: "Michael K",
      date: "January 12, 2024",
    },
    {
      rating: 4,
      text: "Expert Guidance Every Step of the Way...",
      author: "Kevin T",
      date: "January 15, 2024",
    },
    {
      rating: 5,
      text: "Amazing Support! Their team has been incredible...",
      author: "Aaron S",
      date: "January 18, 2024",
    },
    {
      rating: 5,
      text: "Expert Guidance! Open Venture has been exceptionally professional and helpful...",
      author: "Michael K",
      date: "January 12, 2024",
    },
    {
      rating: 4,
      text: "Expert Guidance Every Step of the Way...",
      author: "Kevin T",
      date: "January 15, 2024",
    },
    {
      rating: 5,
      text: "Amazing Support! Their team has been incredible...",
      author: "Aaron S",
      date: "January 18, 2024",
    },
  ];

  return (
    <section className="py-16 px-4 mx-50 bg-blue-50">
      <Carousel opts={{ loop: true }} className="w-full">
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem className="md:basis-1/2 lg:basis-1/4" key={index}>
              <div className="p-1">
                <TestimonialCard {...testimonial} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default TestimonialSection;
