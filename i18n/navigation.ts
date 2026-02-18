import { createNavigation } from "next-intl/navigation";

export const locales = ["en", "he", "ru"] as const;

export const { Link, usePathname, useRouter, getPathname } = createNavigation({
  locales,
});
