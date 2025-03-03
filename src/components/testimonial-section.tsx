"use client";

import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CarouselIndicator } from "@/components/carousel-indicator";
import { TestimonialCard } from "@/components/testimonial-card";

export function TestimonialSection() {
  const testimonials = [
    {
      rating: 5,
      text: "Expert Guidance! Open Venture has been exceptionally professional and helpful...",
      author: "Michael K",
      date: "January 12, 2024",
      avatarUrl: "/avatars/avatar-1.jpg",
    },
    {
      rating: 4,
      text: "Expert Guidance Every Step of the Way...",
      author: "Kevin T",
      date: "January 15, 2024",
      avatarUrl: "/avatars/avatar-2.jpg",
    },
    {
      rating: 5,
      text: "Amazing Support! Their team has been incredible...",
      author: "Aaron S",
      date: "January 18, 2024",
      avatarUrl: "/avatars/avatar-3.jpg",
    },
    {
      rating: 5,
      text: "Expert Guidance! Open Venture has been exceptionally professional and helpful...",
      author: "Michael K",
      date: "January 12, 2024",
      avatarUrl: "/avatars/avatar-1.jpg",
    },
    {
      rating: 4,
      text: "Expert Guidance Every Step of the Way...",
      author: "Kevin T",
      date: "January 15, 2024",
      avatarUrl: "/avatars/avatar-2.jpg",
    },
    {
      rating: 5,
      text: "Amazing Support! Their team has been incredible...",
      author: "Aaron S",
      date: "January 18, 2024",
      avatarUrl: "/avatars/avatar-3.jpg",
    },
    {
      rating: 5,
      text: "Expert Guidance! Open Venture has been exceptionally professional and helpful...",
      author: "Michael K",
      date: "January 12, 2024",
      avatarUrl: "/avatars/avatar-1.jpg",
    },
    {
      rating: 4,
      text: "Expert Guidance Every Step of the Way...",
      author: "Kevin T",
      date: "January 15, 2024",
      avatarUrl: "/avatars/avatar-2.jpg",
    },
    {
      rating: 5,
      text: "Amazing Support! Their team has been incredible...",
      author: "Aaron S",
      date: "January 18, 2024",
      avatarUrl: "/avatars/avatar-3.jpg",
    },
  ];

  const [api, setApi] = useState<CarouselApi>();
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (api) {
      api.on("scroll", () => {
        setActiveSlide(api.selectedScrollSnap());
      });
    }
  }, [api]);

  return (
    <section className="py-16 px-4 md:mx-50">
      <Carousel opts={{ loop: true }} setApi={setApi} className="w-full">
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem className="xl:basis-1/3 lg:basis-1/2" key={index}>
              <div className="p-1">
                <TestimonialCard {...testimonial} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="sm:inline-flex hidden" />
        <CarouselNext className="hidden sm:inline-flex" />
      </Carousel>
      <CarouselIndicator
        totalSlides={testimonials.length}
        activeSlide={activeSlide}
      />
    </section>
  );
}
