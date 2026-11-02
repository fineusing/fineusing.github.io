import { en } from "./locales/en";
import { cn } from "./locales/cn";
import { ja } from "./locales/ja";
import { tc } from "./locales/tc";
import { fr } from "./locales/fr";
import { de } from "./locales/de";

export const locales = ["en", "cn", "ja", "tc", "fr", "de"] as const;
export type Locale = (typeof locales)[number];
export const DEFAULT_LOCALE: Locale = "en";

const dictionaries: Record<Locale, any> = {
  en,
  cn,
  ja,
  tc,
  fr,
  de,
};

export function getDictionary(locale: Locale) {
  return dictionaries[locale] || dictionaries[DEFAULT_LOCALE];
}

export function getBasePath(locale: Locale) {
  return locale === DEFAULT_LOCALE ? "" : `/${locale}`;
}

export function getLocalizedPath(targetLocale: Locale, path: string) {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  if (targetLocale === DEFAULT_LOCALE) {
    return cleanPath;
  }
  return `/${targetLocale}${cleanPath}`;
}

export function getLangHref(locale: Locale, path: string) {
  if (locale === DEFAULT_LOCALE) {
    return `/cn${path}`;
  }
  return path;
}
