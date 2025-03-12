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
      text: "The business incubation services provided by OV have been nothing short of transformative. From day one, the team offered unparalleled guidance on everything from business structuring and funding strategies to immigration support and market expansion. Their expertise in helping immigrant entrepreneurs navigate complex regulatory and financial landscapes made all the difference in turning our vision into a thriving business.",
      author: "Abhisek B",
      date: "October 15, 2024",
      avatarUrl: "/avatars/avatar-1.jpg",
    },
    {
      rating: 4,
      text: "I got everything I needed to create a solid O-1A case. The knowledge base introduced me to the websites I needed to build my evidence. I had access to people who were doing exactly what I was doing - as well as people who've reached the finish line of the process! I could speak to vetted lawyers who evaluated my case. There is always new information being shared and discussed. Overall, I got more out of the Unshackled community than I paid for!",
      author: "Dominic D",
      date: "March 11, 2024",
      avatarUrl: "/avatars/avatar-2.jpg",
    },
    {
      rating: 5,
      text: "In addition to helping me secure affordable housing near Boston University, Studentslanding also took care of my financial setup. They helped me open a bank account and even got me a credit card, making it easy to manage my expenses from day one. Their support made my move stress-free and gave me a strong start in a new country. I highly recommend them to any international student looking for a smooth transition.",
      author: "Kartik B",
      date: "September 18, 2023",
      avatarUrl: "/avatars/avatar-1.jpg",
    },
    {
      rating: 4,
      text: "The business incubation services at OV took us from 0 to 1, providing not just mentorship and product development guidance but also essential support like office space and immigration assistance. Their holistic approach made it easier for us to focus on growth while they handled the complexities of setting up and scaling. If you're an entrepreneur looking for a strong foundation, this is the perfect launchpad.",
      author: "Sai K",
      date: "December 22, 2022",
      avatarUrl: "/avatars/avatar-2.jpg",
    },
    {
      rating: 5,
      text: "Finding housing as an international student was stressful, but Studentslanding made it effortless. They matched me with great roommates and even accepted my deposit while I was still in India. The housing was not only affordable but also right next to Northeastern University, making my transition incredibly smooth. I highly recommend their services for anyone looking for convenient and hassle-free student housing.",
      author: "Gowtham S",
      date: "February 27, 2022",
      avatarUrl: "/avatars/avatar-3.jpg",
    },
    {
      rating: 5,
      text: "I was in the H-1B lottery for three years straight and still didn't get selected. Eventually, my company's lawyer asked me if I had any papers or publications. When I said `no`, they discouraged me from pursuing the O-1A path at that time. So I didn't. But then once again my name wasn't picked a fourth time in the H-1B lottery. This time my back was against the wall. That's when I discovered Unshackled. Within the next 6 months, my O-1A approved.",
      author: "Narul K",
      date: "Jan 10 2025",
      avatarUrl: "/avatars/avatar-2.jpg",
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
