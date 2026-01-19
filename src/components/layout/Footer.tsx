"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import { siteConfig, footerLinks, socialLinks, legalLinks } from "@/lib/constants";

const socialIconMap = {
  Facebook: Facebook,
  Instagram: Instagram,
  Twitter: Twitter,
  LinkedIn: Linkedin,
  YouTube: Youtube,
};

export function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email subscription
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <footer className="bg-brand-primary text-white">
      {/* Top Section - Email Bar */}
      <div className="border-b border-white/10">
        <div className="max-w-[1200px] mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
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

            {/* Email Input */}
            <form onSubmit={handleSubmit} className="w-full md:w-auto">
              <div className="relative flex items-center">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email"
                  className="w-full md:w-80 h-12 pl-5 pr-14 bg-white/10 border border-white/20 rounded-full text-white placeholder:text-white/50 focus:outline-none focus:border-white/40 transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 w-9 h-9 rounded-full bg-white flex items-center justify-center hover:bg-white/90 transition-colors"
                  aria-label="Subscribe"
                >
                  <ArrowRight size={16} className="text-brand-primary" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Middle Section - Links */}
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Browse */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Browse</h4>
            <ul className="space-y-3">
              {footerLinks.browse.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Learn</h4>
            <ul className="space-y-3">
              {footerLinks.learn.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              {footerLinks.contact.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Address</h4>
            <address className="not-italic text-sm text-white/70 leading-relaxed">
              {siteConfig.address.street}
              <br />
              {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
              <br />
              <br />
              {siteConfig.address.phone}
            </address>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => {
                const IconComponent = socialIconMap[social.label as keyof typeof socialIconMap];
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                    aria-label={social.label}
                  >
                    {IconComponent && <IconComponent size={14} />}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Legal */}
      <div className="border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/50">
              &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-4 md:gap-6">
              {legalLinks.map((link, index) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-xs text-white/50 hover:text-white/80 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
