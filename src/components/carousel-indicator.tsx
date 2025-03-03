import React, { useEffect, useRef } from "react";
import { motion } from "motion/react";

interface CarouselIndicatorProps {
  totalSlides: number;
  activeSlide: number;
}

export function CarouselIndicator({
  totalSlides,
  activeSlide,
}: CarouselIndicatorProps) {
  const prevActiveRef = useRef(activeSlide);
  const directionRef = useRef<"forward" | "backward" | null>(null);

  useEffect(() => {
    if (activeSlide > prevActiveRef.current) {
      directionRef.current = "forward";
    } else if (activeSlide < prevActiveRef.current) {
      directionRef.current = "backward";
    }

    prevActiveRef.current = activeSlide;
  }, [activeSlide]);

  return (
    <div className="w-full flex justify-center mt-8">
      <div className="relative w-64 h-1 bg-blue-300 rounded-full overflow-hidden">
        <motion.div
          className="absolute h-4 -top-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
          initial={false}
          animate={{
            left: `${(activeSlide / totalSlides) * 100}%`,
            width: `${100 / totalSlides}%`,
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            mass: 0.2,
          }}
        />

        {Array.from({ length: totalSlides }).map((_, index) => (
          <div
            key={index}
            className={`
              absolute top-0 h-1 rounded-full
              ${
                index < activeSlide
                  ? "bg-gray-300 opacity-50"
                  : "bg-gray-100 opacity-30"
              }
            `}
            style={{
              left: `${(index / totalSlides) * 100}%`,
              width: `${100 / totalSlides}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
