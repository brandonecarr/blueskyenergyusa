"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { stats } from "@/lib/constants";
import { ContactModal } from "@/components/ui/ContactModal";

export function HeroSection() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <section className="relative">
      {/* Hero Container */}
      <div className="relative mx-4 md:mx-6 mt-4 md:mt-6">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-3xl rounded-bl-none -scale-x-100"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&h=1080&fit=crop')",
          }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 hero-overlay rounded-3xl rounded-bl-none" />
        </div>

        {/* Content Area */}
        <div className="relative min-h-[calc(100vh-32px)] md:min-h-[calc(100vh-48px)] flex flex-col">
          <div className="flex-1 max-w-[1200px] mx-auto w-full px-6 md:px-12 pt-24 pb-40 flex flex-col">
            <div className="flex-1 flex flex-col justify-center max-w-xl -mt-16">
              {/* Badge */}
              <span className="inline-block text-sm text-white/90 mb-6 px-3 py-1.5 bg-white/15 rounded-full backdrop-blur-sm w-fit">
                New Year, New Deals
              </span>

              {/* Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-[64px] font-bold text-white leading-[1.05] mb-6 tracking-tight">
                Solar Solutions for a Greener Planet
              </h1>

              {/* Subtext */}
              <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-md mb-8">
                Discover renewable energy with our cutting-edge solar panels.
                Designed for sustainability and cost-efficiency.
              </p>

              {/* CTA Button - White with black icon */}
              <div>
                <button
                  onClick={() => setContactModalOpen(true)}
                  className="inline-flex items-center gap-3 h-12 pl-6 pr-1.5 bg-white text-brand-primary rounded-full font-semibold hover:bg-white/95 transition-colors group"
                >
                  <span>Get Started</span>
                  <span className="w-9 h-9 rounded-full bg-brand-primary flex items-center justify-center">
                    <ArrowUpRight size={16} className="text-white" />
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Stats Bar - absolutely positioned at bottom left */}
          <div className="absolute bottom-0 left-0">
            <div className="relative">
              <div className="bg-white rounded-tr-3xl md:rounded-tr-[32px] py-8 px-6 md:px-12">
                <div className="flex gap-8 md:gap-16">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className={`${
                        index !== stats.length - 1
                          ? "border-r border-line pr-8 md:pr-16"
                          : ""
                      }`}
                    >
                      <div className="text-3xl md:text-[40px] font-bold text-brand-primary mb-1 tracking-tight">
                        {stat.value}
                      </div>
                      <p className="text-xs md:text-sm text-text-muted leading-snug max-w-[140px]">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              {/* Inverted rounded corner at bottom-right */}
              <div className="absolute bottom-0 right-0 translate-x-full w-8 h-8 overflow-hidden -rotate-90">
                <div className="absolute top-0 left-0 w-16 h-16 rounded-full shadow-[0_0_0_50px_white]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </section>
  );
}
