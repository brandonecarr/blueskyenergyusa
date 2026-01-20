import { Battery, Zap, TrendingDown } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

const services = [
  {
    icon: Battery,
    title: "Energy Storage Integration",
    description:
      "Store excess solar electricity at your home instead of sending it back to the grid. Solar batteries convert DC energy from your panels and store it as AC power for later use, allowing you to draw down stored energy at night when your panels aren't producing.",
  },
  {
    icon: TrendingDown,
    title: "Commercial Demand Charge Mitigation",
    description:
      "Unlike residential consumers, larger electricity consumers pay demand charges on a kW basis. We help commercial clients save considerably by mitigating these surcharges that often make up a substantial portion of the total bill.",
  },
  {
    icon: Zap,
    title: "Peak Shaving Through Load Shifting",
    description:
      "Reduce energy costs by using local energy storage to compensate for large consumption during peak hours. Charge during off-hours and discharge during operational hours to significantly reduce peak demand charges from the utility.",
  },
];

export function ProductSection() {
  return (
    <section className="py-24 bg-surface-alt">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Centered Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <Badge variant="outline" className="mb-6">
            Our Services
          </Badge>

          <h2 className="text-3xl md:text-[38px] font-bold text-brand-primary leading-tight mb-6">
            Powering Your Future With Clean Energy
          </h2>

          <p className="text-text-secondary leading-relaxed">
            BlueSky Energy&apos;s signature solar installation service is available throughout the greater Los Angeles area. We help clients navigate the complexities of capital investment in renewable energy, specializing in energy storage integration for both residential and commercial projects.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-surface-alt flex items-center justify-center mb-6">
                  <IconComponent size={22} className="text-brand-primary" />
                </div>
                <h3 className="text-lg font-bold text-brand-primary mb-3">
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
