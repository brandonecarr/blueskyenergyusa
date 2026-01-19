import { Leaf, Wrench } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { features } from "@/lib/constants";
import Image from "next/image";

const iconMap = {
  leaf: Leaf,
  wrench: Wrench,
};

export function ExpertsSection() {
  return (
    <section className="py-24 pt-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <Badge variant="outline" className="mb-6">
              Who are we?
            </Badge>

            <h2 className="text-3xl md:text-[38px] font-bold text-brand-primary leading-tight mb-10">
              Experts In The World Of Solar Energy.
            </h2>

            {/* Features */}
            <div className="space-y-8">
              {features.map((feature, index) => {
                const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-surface-alt flex items-center justify-center">
                      <IconComponent size={18} className="text-brand-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-brand-primary mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right - Team Photo */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl">
              <Image
                src="/whoWeAre.jpg"
                alt="Blue Sky Energy team installing solar panels"
                width={1376}
                height={768}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
