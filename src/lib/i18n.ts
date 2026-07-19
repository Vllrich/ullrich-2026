export type SiteLang = 'en' | 'de' | 'es';

export const SITE_LANGS: SiteLang[] = ['en', 'de', 'es'];

export const LANG_CODE: Record<SiteLang, string> = {
  en: 'EN',
  de: 'DE',
  es: 'ES',
};

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

/** Build en / de / optional es / x-default alternates. x-default always points to the English URL. */
export function languageAlternates(
  enPath: string,
  dePath: string,
  esPath?: string,
): AlternateLink[] {
  const links: AlternateLink[] = [
    { hreflang: 'en', href: absoluteUrl(enPath) },
    { hreflang: 'de', href: absoluteUrl(dePath) },
  ];
  if (esPath) {
    links.push({ hreflang: 'es', href: absoluteUrl(esPath) });
  }
  links.push({ hreflang: 'x-default', href: absoluteUrl(enPath) });
  return links;
}

export function landingLocaleHrefs(): Record<SiteLang, string> {
  return { en: '/', de: '/de/', es: '/es/' };
}
