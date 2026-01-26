import type React from "react";

export function IconBadge({ icon }: { icon: string | React.ReactNode }) {
  if (typeof icon === "string") {
    return <span aria-hidden="true">{icon}</span>;
  }
  return <>{icon}</>;
}
