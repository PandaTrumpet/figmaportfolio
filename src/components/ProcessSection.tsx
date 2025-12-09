const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'Understanding your goals, audience, and market position',
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'Crafting a roadmap that aligns design with business objectives',
  },
  {
    number: '03',
    title: 'Design',
    description: 'Building visual systems that communicate and convert',
  },
  {
    number: '04',
    title: 'Development',
    description: 'Bringing ideas to life with clean, scalable code',
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="px-6 md:px-12 lg:px-20 py-24 md:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <div className="w-16 h-[2px] bg-[#050608] mb-8" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight max-w-3xl">
            Strategy First, Pixels Second
          </h2>
          <p className="text-lg md:text-xl opacity-70 mt-6 max-w-2xl">
            Our process is designed to eliminate guesswork and deliver results that matter.
          </p>
        </div>

        {/* Steps - Desktop: Horizontal, Mobile: Vertical */}
        <div className="relative">
          {/* Connecting line - Desktop */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-[2px] bg-[#050608] opacity-10" />

          {/* Steps Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connecting dot */}
                <div className="hidden lg:block absolute top-12 left-0 w-3 h-3 bg-[#050608] rounded-full transform -translate-y-1/2" />

                {/* Step Number */}
                <div className="text-[4rem] leading-none opacity-15 mb-4">
                  {step.number}
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="opacity-70 leading-relaxed text-sm md:text-base">
                  {step.description}
                </p>

                {/* Mobile connector line */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden w-[2px] h-12 bg-[#050608] opacity-10 mt-8 ml-6" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 md:mt-28 p-12 md:p-16 border-2 border-[#050608] relative overflow-hidden">
          {/* Subtle pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #050608 0, #050608 1px, transparent 0, transparent 50%)',
            backgroundSize: '10px 10px'
          }} />

          <div className="relative z-10 max-w-2xl">
            <h3 className="text-3xl md:text-4xl mb-6">
              Every project is different. Our process adapts to you.
            </h3>
            <p className="text-lg opacity-70 mb-8">
              Let&apos;s talk about what you&apos;re building and how we can help bring it to life.
            </p>
            <button className="px-8 py-4 bg-[#050608] text-[#F5EFE7] transition-all hover:scale-[1.02] hover:shadow-lg">
              Schedule a Discovery Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}