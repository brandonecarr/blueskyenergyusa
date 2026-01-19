import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/constants";

export function ServicesSection() {
  return (
    <section className="py-24 bg-surface-alt">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-[38px] font-bold text-brand-primary mb-4">
            Futures That We Provide
          </h2>
          <p className="text-sm text-text-secondary max-w-xl mx-auto leading-relaxed">
            Access harmony on mobile app to get more experience. With the app you can
            interaction and communication on the road more easily.
          </p>
        </div>

        {/* Image Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&h=600&fit=crop"
              alt="Wind farm with blue sky"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <h3 className="absolute bottom-6 left-6 text-xl font-bold text-white">
              Energy Efficiency & Saving
            </h3>
          </div>
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1548337138-e87d889cc369?w=800&h=600&fit=crop"
              alt="Wind farm at sunset"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <h3 className="absolute bottom-6 left-6 text-xl font-bold text-white">
              Eco-Friendly Technology
            </h3>
          </div>
        </div>

        {/* Service Rows */}
        <div className="bg-white rounded-3xl shadow-card overflow-hidden">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex items-center justify-between p-6 md:p-8 group cursor-pointer hover:bg-surface-alt transition-colors ${
                index !== services.length - 1 ? "border-b border-line" : ""
              }`}
            >
              <div className="flex-1 pr-8">
                <h3 className="text-lg md:text-xl font-bold text-brand-primary mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed max-w-2xl">
                  {service.description}
                </p>
              </div>
              <button className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-primary text-white flex items-center justify-center group-hover:bg-[#161C1A] transition-colors">
                <ArrowUpRight size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
