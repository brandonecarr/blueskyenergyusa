import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ExpertsSection } from "@/components/sections/ExpertsSection";
import { ProductSection } from "@/components/sections/ProductSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { BlogSection } from "@/components/sections/BlogSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ExpertsSection />
        <ProductSection />
        <ServicesSection />
        <BenefitsSection />
        <TestimonialsSection />
        <BlogSection />
      </main>
      <Footer />
    </>
  );
}
