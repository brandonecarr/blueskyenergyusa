"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/constants";

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonial = testimonials[currentIndex];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-[38px] font-bold text-brand-primary leading-tight mb-6">
              What Our Clients Say
            </h2>
            <p className="text-sm text-text-secondary leading-relaxed max-w-md">
              We wanted to reduce our carbon footprint, and going solar was the perfect way to do that.
            </p>
          </div>

          {/* Right - Testimonial Card */}
          <div className="bg-white rounded-3xl shadow-card p-8 relative">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Photo */}
              <div className="flex-shrink-0">
                <div className="w-24 h-32 md:w-32 md:h-40 rounded-2xl overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Quote */}
              <div className="flex-1">
                {/* Pagination Dots */}
                <div className="flex items-center gap-1.5 mb-4">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-colors ${
                        index === currentIndex
                          ? "bg-red-500"
                          : "bg-gray-200 hover:bg-gray-300"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <Quote size={24} className="text-surface-alt mb-4" />

                <p className="text-sm text-text-secondary leading-relaxed mb-6">
                  {testimonial.quote}
                </p>

                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-sm font-bold text-brand-primary">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-text-muted">{testimonial.title}</p>
                  </div>

                  {/* Navigation Arrows */}
                  <div className="flex gap-2">
                    <button
                      onClick={prevTestimonial}
                      className="w-10 h-10 rounded-full border border-line flex items-center justify-center hover:bg-surface-alt transition-colors"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft size={18} className="text-brand-primary" />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="w-10 h-10 rounded-full border border-line flex items-center justify-center hover:bg-surface-alt transition-colors"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight size={18} className="text-brand-primary" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
