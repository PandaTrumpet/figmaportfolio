"use client";

type Props = {
  industries: string[];
  types: string[];
  selectedIndustry: string;
  selectedType: string;
  onIndustryChange: (v: string) => void;
  onTypeChange: (v: string) => void;
};

export function PortfolioFilters({
  industries,
  types,
  selectedIndustry,
  selectedType,
  onIndustryChange,
  onTypeChange,
}: Props) {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-12 border-t-2 border-b-2 border-[#050608] bg-white sticky top-0 z-40">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-sm uppercase tracking-wider opacity-50 mb-4">
              Industry
            </p>
            <div className="flex flex-wrap gap-3">
              {industries.map((industry) => (
                <button
                  key={industry}
                  onClick={() => onIndustryChange(industry)}
                  className={`px-4 py-2 border-2 border-[#050608] transition-all ${
                    selectedIndustry === industry
                      ? "bg-[#050608] text-[#F5EFE7]"
                      : "bg-[#F5EFE7] hover:bg-[#050608] hover:text-[#F5EFE7]"
                  }`}
                >
                  {industry}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-wider opacity-50 mb-4">
              Type
            </p>
            <div className="flex flex-wrap gap-3">
              {types.map((type) => (
                <button
                  key={type}
                  onClick={() => onTypeChange(type)}
                  className={`px-4 py-2 border-2 border-[#050608] transition-all ${
                    selectedType === type
                      ? "bg-[#050608] text-[#F5EFE7]"
                      : "bg-[#F5EFE7] hover:bg-[#050608] hover:text-[#F5EFE7]"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
