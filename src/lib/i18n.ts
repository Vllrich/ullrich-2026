export type SiteLang = 'en' | 'de';

export interface AlternateLink {
  hreflang: string;
  /** Absolute URL or site-relative path */
  href: string;
}

export function absoluteUrl(path: string): string {
  const base = 'https://larsullrich.de';
  if (path.startsWith('http')) return path;
  return new URL(path, base).href;
}

/** Build en / de / x-default alternates. x-default always points to the English URL. */
export function languageAlternates(enPath: string, dePath: string): AlternateLink[] {
  return [
    { hreflang: 'en', href: absoluteUrl(enPath) },
    { hreflang: 'de', href: absoluteUrl(dePath) },
    { hreflang: 'x-default', href: absoluteUrl(enPath) },
  ];
}
