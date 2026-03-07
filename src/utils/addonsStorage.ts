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

// export const ADDONS_LS_KEY = "sv_addons_selected_v1";
// export const PACKAGE_LS_KEY = "sv_package_selected_v1";

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
//   } catch {}
// }

// export function toggleAddon(name: string): string[] {
//   const current = safeReadAddons();
//   const next = current.includes(name)
//     ? current.filter((x) => x !== name)
//     : [...current, name];
//   safeWriteAddons(next);
//   return next;
// }

// // ✅ PACKAGE
// export function safeReadPackage(): string {
//   if (typeof window === "undefined") return "";
//   try {
//     const raw = localStorage.getItem(PACKAGE_LS_KEY);
//     return typeof raw === "string" ? raw : "";
//   } catch {
//     return "";
//   }
// }

// export function safeWritePackage(value: string) {
//   if (typeof window === "undefined") return;
//   try {
//     localStorage.setItem(PACKAGE_LS_KEY, value);
//   } catch {}
// }

// export function clearPricingSelection() {
//   if (typeof window === "undefined") return;
//   try {
//     localStorage.removeItem(ADDONS_LS_KEY);
//     localStorage.removeItem(PACKAGE_LS_KEY);
//   } catch {}
// }

export const ADDONS_LS_KEY = "sv_addons_selected_v1";
export const PACKAGE_LS_KEY = "sv_package_selected_v1";

const ADDONS_CHANGE_EVENT = "sv_addons_change";
const PACKAGE_CHANGE_EVENT = "sv_package_change";

const EMPTY_ADDONS: readonly string[] = Object.freeze([]);
const EMPTY_PACKAGE = "";

let cachedAddonsSnapshot: readonly string[] = EMPTY_ADDONS;
let cachedPackageSnapshot: string = EMPTY_PACKAGE;

function canUseDOM() {
  return typeof window !== "undefined";
}

function arraysEqual(a: readonly string[], b: readonly string[]) {
  if (a === b) return true;
  if (a.length !== b.length) return false;

  for (let i = 0; i < a.length; i += 1) {
    if (a[i] !== b[i]) return false;
  }

  return true;
}

function readAddonsFromStorage(): readonly string[] {
  if (!canUseDOM()) return EMPTY_ADDONS;

  try {
    const raw = window.localStorage.getItem(ADDONS_LS_KEY);
    const parsed = raw ? JSON.parse(raw) : [];

    if (!Array.isArray(parsed)) return EMPTY_ADDONS;

    const normalized = parsed.filter(
      (item): item is string => typeof item === "string",
    );

    return normalized.length > 0 ? normalized : EMPTY_ADDONS;
  } catch {
    return EMPTY_ADDONS;
  }
}

function updateCachedAddonsSnapshot(): readonly string[] {
  const next = readAddonsFromStorage();

  if (!arraysEqual(cachedAddonsSnapshot, next)) {
    cachedAddonsSnapshot = next;
  }

  return cachedAddonsSnapshot;
}

function readPackageFromStorage(): string {
  if (!canUseDOM()) return EMPTY_PACKAGE;

  try {
    const raw = window.localStorage.getItem(PACKAGE_LS_KEY);
    return typeof raw === "string" ? raw : EMPTY_PACKAGE;
  } catch {
    return EMPTY_PACKAGE;
  }
}

function updateCachedPackageSnapshot(): string {
  const next = readPackageFromStorage();

  if (cachedPackageSnapshot !== next) {
    cachedPackageSnapshot = next;
  }

  return cachedPackageSnapshot;
}

// --------------------
// ADDONS
// --------------------

export function safeReadAddons(): readonly string[] {
  return updateCachedAddonsSnapshot();
}

export function safeWriteAddons(values: readonly string[]) {
  if (!canUseDOM()) return;

  try {
    const normalized = values.filter(
      (item): item is string => typeof item === "string",
    );
    const next = normalized.length > 0 ? [...normalized] : [];

    window.localStorage.setItem(ADDONS_LS_KEY, JSON.stringify(next));
    cachedAddonsSnapshot = next.length > 0 ? next : EMPTY_ADDONS;
    window.dispatchEvent(new Event(ADDONS_CHANGE_EVENT));
  } catch {
    // ignore
  }
}

export function toggleAddon(name: string): readonly string[] {
  const current = getAddonsSnapshot();

  const next = current.includes(name)
    ? current.filter((item) => item !== name)
    : [...current, name];

  safeWriteAddons(next);
  return cachedAddonsSnapshot;
}

export function subscribeAddons(callback: () => void) {
  if (!canUseDOM()) return () => {};

  const handleChange = () => {
    updateCachedAddonsSnapshot();
    callback();
  };

  window.addEventListener("storage", handleChange);
  window.addEventListener(ADDONS_CHANGE_EVENT, handleChange);

  return () => {
    window.removeEventListener("storage", handleChange);
    window.removeEventListener(ADDONS_CHANGE_EVENT, handleChange);
  };
}

export function getAddonsSnapshot(): readonly string[] {
  return updateCachedAddonsSnapshot();
}

export function getAddonsServerSnapshot(): readonly string[] {
  return EMPTY_ADDONS;
}

// --------------------
// PACKAGE
// --------------------

export function safeReadPackage(): string {
  return updateCachedPackageSnapshot();
}

export function safeWritePackage(value: string) {
  if (!canUseDOM()) return;

  try {
    const next = typeof value === "string" ? value : EMPTY_PACKAGE;

    window.localStorage.setItem(PACKAGE_LS_KEY, next);
    cachedPackageSnapshot = next;
    window.dispatchEvent(new Event(PACKAGE_CHANGE_EVENT));
  } catch {
    // ignore
  }
}

export function subscribePackage(callback: () => void) {
  if (!canUseDOM()) return () => {};

  const handleChange = () => {
    updateCachedPackageSnapshot();
    callback();
  };

  window.addEventListener("storage", handleChange);
  window.addEventListener(PACKAGE_CHANGE_EVENT, handleChange);

  return () => {
    window.removeEventListener("storage", handleChange);
    window.removeEventListener(PACKAGE_CHANGE_EVENT, handleChange);
  };
}

export function getPackageSnapshot(): string {
  return updateCachedPackageSnapshot();
}

export function getPackageServerSnapshot(): string {
  return EMPTY_PACKAGE;
}

// --------------------
// CLEAR
// --------------------

export function clearPricingSelection() {
  if (!canUseDOM()) return;

  try {
    window.localStorage.removeItem(ADDONS_LS_KEY);
    window.localStorage.removeItem(PACKAGE_LS_KEY);

    cachedAddonsSnapshot = EMPTY_ADDONS;
    cachedPackageSnapshot = EMPTY_PACKAGE;

    window.dispatchEvent(new Event(ADDONS_CHANGE_EVENT));
    window.dispatchEvent(new Event(PACKAGE_CHANGE_EVENT));
  } catch {
    // ignore
  }
}