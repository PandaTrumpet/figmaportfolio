// export const ADDONS_LS_KEY = "sv_addons_selected_v1";

// export function safeReadAddons(): string[] {
//   if (typeof window === "undefined") return [];
//   try {
//     const raw = localStorage.getItem(ADDONS_LS_KEY);
//     const parsed = raw ? JSON.parse(raw) : [];
//     return Array.isArray(parsed)
//       ? parsed.filter((x) => typeof x === "string")
//       : [];
//   } catch {
//     return [];
//   }
// }

// export function safeWriteAddons(values: string[]) {
//   if (typeof window === "undefined") return;
//   try {
//     localStorage.setItem(ADDONS_LS_KEY, JSON.stringify(values));
//   } catch {
//     // ignore
//   }
// }

// export function toggleAddon(name: string): string[] {
//   const current = safeReadAddons();
//   const next = current.includes(name)
//     ? current.filter((x) => x !== name)
//     : [...current, name];
//   safeWriteAddons(next);
//   return next;
// }

export const ADDONS_LS_KEY = "sv_addons_selected_v1";
export const PACKAGE_LS_KEY = "sv_package_selected_v1";

export function safeReadAddons(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(ADDONS_LS_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed)
      ? parsed.filter((x) => typeof x === "string")
      : [];
  } catch {
    return [];
  }
}

export function safeWriteAddons(values: string[]) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(ADDONS_LS_KEY, JSON.stringify(values));
  } catch {}
}

export function toggleAddon(name: string): string[] {
  const current = safeReadAddons();
  const next = current.includes(name)
    ? current.filter((x) => x !== name)
    : [...current, name];
  safeWriteAddons(next);
  return next;
}

// ✅ PACKAGE
export function safeReadPackage(): string {
  if (typeof window === "undefined") return "";
  try {
    const raw = localStorage.getItem(PACKAGE_LS_KEY);
    return typeof raw === "string" ? raw : "";
  } catch {
    return "";
  }
}

export function safeWritePackage(value: string) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(PACKAGE_LS_KEY, value);
  } catch {}
}

export function clearPricingSelection() {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(ADDONS_LS_KEY);
    localStorage.removeItem(PACKAGE_LS_KEY);
  } catch {}
}