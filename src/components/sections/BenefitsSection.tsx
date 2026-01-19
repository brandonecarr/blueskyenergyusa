import { Leaf, Home, Shield } from "lucide-react";
import { benefits } from "@/lib/constants";

const iconMap = {
  leaf: Leaf,
  home: Home,
  shield: Shield,
};

export function BenefitsSection() {
  return (
    <section className="relative py-32">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=1920&h=800&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Benefits Cards */}
      <div className="relative max-w-[1200px] mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-floating p-4 md:p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => {
              const IconComponent = iconMap[benefit.icon as keyof typeof iconMap];
              return (
                <div
                  key={index}
                  className="bg-white border border-line rounded-2xl p-6 hover:shadow-card transition-shadow"
                >
                  <div className="w-10 h-10 rounded-full bg-surface-alt flex items-center justify-center mb-4">
                    <IconComponent size={18} className="text-brand-primary" />
                  </div>
                  <h3 className="text-base font-bold text-brand-primary mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
