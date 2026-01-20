import { Leaf, Wrench, DollarSign, Battery, TrendingDown, Zap } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import Image from "next/image";

const advantages = [
  {
    icon: Wrench,
    title: "Expert Installation",
    description:
      "NABCEP certified, US Veteran installers delivering quality and precision design engineering. Licensed California Contractor (#1016637).",
  },
  {
    icon: DollarSign,
    title: "Simple Solar Solutions",
    description:
      "We make it extremely simple for you to go solar with $0 down residential and commercial financing options available.",
  },
  {
    icon: Leaf,
    title: "Environmental Stewardship",
    description:
      "Passionate about harnessing a clean energy future with Tier 1, name brand, CSI approved equipment and peak energy production guaranteed.",
  },
];

const services = [
  {
    icon: Battery,
    title: "Energy Storage Integration",
    description:
      "Store excess solar electricity at your home instead of sending it back to the grid. Draw down stored energy at night when your panels aren't producing.",
  },
  {
    icon: TrendingDown,
    title: "Commercial Demand Charge Mitigation",
    description:
      "We help commercial clients save considerably by mitigating kW demand surcharges that often make up a substantial portion of the total bill.",
  },
  {
    icon: Zap,
    title: "Peak Shaving Through Load Shifting",
    description:
      "Charge during off-hours and discharge during operational hours to significantly reduce peak demand charges from the utility.",
  },
];

export function ExpertsSection() {
  return (
    <section className="py-24 pt-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6">
            The BlueSky Advantage
          </Badge>

          <h2 className="text-3xl md:text-[44px] font-bold text-brand-primary leading-tight mb-6">
            30+ Years of Combined Solar Excellence
          </h2>

          <p className="text-text-secondary leading-relaxed max-w-2xl mx-auto">
            BlueSky Energy&apos;s signature solar installation service is available throughout the greater Los Angeles area. We specialize in energy storage integration for both residential and commercial projects.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <div className="relative overflow-hidden rounded-3xl">
            <Image
              src="/whoWeAre.jpg"
              alt="Blue Sky Energy team installing solar panels"
              width={1376}
              height={768}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Advantages */}
          <div className="space-y-8">
            {advantages.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-surface-alt flex items-center justify-center">
                    <IconComponent size={20} className="text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-brand-primary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-surface-alt rounded-3xl p-8 hover:bg-gray-100 transition-colors"
              >
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-6">
                  <IconComponent size={22} className="text-brand-primary" />
                </div>
                <h3 className="text-base font-bold text-brand-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
