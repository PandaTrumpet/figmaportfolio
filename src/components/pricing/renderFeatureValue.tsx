import { Check, X } from "lucide-react";

export function renderFeatureValue(value: boolean | string) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="w-6 h-6 mx-auto" />
    ) : (
      <X className="w-6 h-6 mx-auto opacity-30" />
    );
  }
  return <span className="text-sm md:text-base opacity-70">{value}</span>;
}
