import { ArrowRight, Leaf } from "lucide-react";

const specs = [
  { label: "Certification", value: "IEC/UL 61730\nCSC Listed" },
  { label: "Inverter Power", value: "3.8kW/7.6kW" },
  { label: "Dimensions", value: "74.4×37.2×1.57\"\n(including frame)" },
  { label: "Certification", value: "IEC/UL 61730\nCSC Listed" },
];

export function ProductSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-[38px] font-bold text-brand-primary leading-tight mb-4">
                Powering Your Future With Clean,
              </h2>
              <p className="text-sm text-text-secondary leading-relaxed">
                Join hundreds of companies embracing sustainable solutions globally.
              </p>
            </div>

            <button className="inline-flex items-center gap-2 h-11 px-6 bg-brand-primary text-white rounded-full font-semibold hover:bg-[#161C1A] transition-colors text-sm">
              Learn more
              <ArrowRight size={16} />
            </button>

            {/* Mini Card */}
            <div className="bg-surface-alt rounded-2xl p-5">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white flex items-center justify-center">
                  <Leaf size={14} className="text-accent-green" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-primary mb-1">
                    Environmentally friendly
                  </h4>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    Renewable energy will no carbon emissions, helping reduce global warming.
                  </p>
                </div>
              </div>
              <p className="text-xs text-text-muted mt-3 underline cursor-pointer hover:text-text-secondary">
                Learn more
              </p>
            </div>
          </div>

          {/* Center - Product Image */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Sunburst Rays */}
              <div className="absolute inset-0 flex items-center justify-center">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-32 bg-gradient-to-t from-transparent to-accent-green/20 origin-bottom"
                    style={{
                      transform: `rotate(${i * 30}deg) translateY(-50%)`,
                    }}
                  />
                ))}
              </div>

              {/* Oval Image Container */}
              <div className="relative w-64 h-96 rounded-full overflow-hidden shadow-floating">
                <img
                  src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=400&h=600&fit=crop"
                  alt="Wind turbine in landscape"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right - Specs */}
          <div className="space-y-6">
            {specs.map((spec, index) => (
              <div key={index} className="text-right">
                <p className="text-xs text-text-muted mb-1">{spec.label}</p>
                <p className="text-sm font-semibold text-brand-primary whitespace-pre-line">
                  {spec.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
