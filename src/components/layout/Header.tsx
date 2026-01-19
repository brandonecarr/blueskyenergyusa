"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navLinks } from "@/lib/constants";
import { ContactModal } from "@/components/ui/ContactModal";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <>
      <header className="absolute top-4 md:top-6 left-0 right-0 z-50">
        <div className="max-w-[1200px] mx-auto px-6 py-5">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logo-white.jpg"
                alt="Blue Sky Energy"
                width={160}
                height={32}
                className="h-8 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/90 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <button
              onClick={() => setContactModalOpen(true)}
              className="hidden md:inline-flex items-center gap-2 h-11 px-5 bg-white/15 text-white rounded-full border border-white/30 backdrop-blur-sm hover:bg-white/25 transition-all text-sm font-semibold"
            >
              Contact Us
              <ArrowUpRight size={16} />
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-white/90 hover:text-white transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setContactModalOpen(true);
                  }}
                  className="inline-flex items-center justify-center gap-2 h-11 px-5 bg-white/15 text-white rounded-full border border-white/30 backdrop-blur-sm hover:bg-white/25 transition-all text-sm font-semibold mt-2"
                >
                  Contact Us
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </>
  );
}
