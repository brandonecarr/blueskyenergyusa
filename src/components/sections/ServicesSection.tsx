import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

const offerings = [
  {
    title: "Full-Service Solar Integration",
    description:
      "We navigate your project from initial planning through financing, permitting, interconnection, construction, and final commissioning. We make the entire process simple and easy for our clients.",
  },
  {
    title: "Operations & Maintenance",
    description:
      "Our O&M technicians have detailed knowledge of PV in both residential and commercial environments. We are OSHA and NFPA 70E certified, trained on inverter maintenance, and experienced in all aspects of photovoltaic technology.",
  },
  {
    title: "Quality Design & Engineering",
    description:
      "We believe in quality engineering, uncompromising integrity, and unparalleled performance—all at the core of our work ethic. This culture has made us one of the most experienced EPC and solar PV integrators in California.",
  },
];

export function ServicesSection() {
  return (
    <section className="py-24 bg-surface-alt">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6">
            In Pursuit of Excellence
          </Badge>
          <h2 className="text-3xl md:text-[38px] font-bold text-brand-primary mb-4">
            About Our Company
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto leading-relaxed">
            BlueSky Energy, Inc. is a recognized expert in solar PV technology, providing high quality and affordable solutions. We are 100% client-centered solar integrators with a 96% net promoter score verified by a 3rd party company.
          </p>
        </div>

        {/* Image Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden group">
            <img
              src="/residential.jpg"
              alt="Residential solar panel installation with BlueSky Energy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <h3 className="absolute bottom-6 left-6 text-xl font-bold text-white">
              Residential Solar Solutions
            </h3>
          </div>
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden group">
            <img
              src="/commercial.jpg"
              alt="Commercial rooftop solar panel installation"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <h3 className="absolute bottom-6 left-6 text-xl font-bold text-white">
              Commercial Solar Projects
            </h3>
          </div>
        </div>

        {/* Service Rows */}
        <div className="bg-white rounded-3xl shadow-card overflow-hidden">
          {offerings.map((offering, index) => (
            <div
              key={index}
              className={`flex items-center justify-between p-6 md:p-8 group cursor-pointer hover:bg-surface-alt transition-colors ${
                index !== offerings.length - 1 ? "border-b border-line" : ""
              }`}
            >
              <div className="flex-1 pr-8">
                <h3 className="text-lg md:text-xl font-bold text-brand-primary mb-2">
                  {offering.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed max-w-2xl">
                  {offering.description}
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
