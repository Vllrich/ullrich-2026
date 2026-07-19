import type { SiteLang } from './i18n';

export type NavKey = 'work' | 'notes' | 'services' | 'about' | 'contact';

export interface NavItem {
  key: NavKey;
  href: string;
  label: string;
}

export function primaryNav(lang: SiteLang = 'en'): NavItem[] {
  if (lang === 'de') {
    return [
      { key: 'work', href: '/de/arbeit/muster/', label: 'Arbeit' },
      { key: 'notes', href: '/de/notizen/', label: 'Notizen' },
      { key: 'services', href: '/de/#leistungen', label: 'Leistungen' },
      { key: 'about', href: '/about/', label: 'About' },
      { key: 'contact', href: '/de/#kontakt', label: 'Kontakt' },
    ];
  }

  if (lang === 'es') {
    return [
      { key: 'work', href: '/work/patterns/', label: 'Trabajo' },
      { key: 'notes', href: '/notes/', label: 'Notas' },
      { key: 'services', href: '/es/#servicios', label: 'Servicios' },
      { key: 'about', href: '/about/', label: 'About' },
      { key: 'contact', href: '/es/#contacto', label: 'Contacto' },
    ];
  }

  return [
    { key: 'work', href: '/work/patterns/', label: 'Work' },
    { key: 'notes', href: '/notes/', label: 'Notes' },
    { key: 'services', href: '/#services', label: 'Services' },
    { key: 'about', href: '/about/', label: 'About' },
    { key: 'contact', href: '/#contact', label: 'Contact' },
  ];
}

/** Which primary nav item should look active for this path. */
export function activeNavKey(pathname: string): NavKey | null {
  const path = pathname.endsWith('/') ? pathname : `${pathname}/`;

  if (path.startsWith('/work/') || path.startsWith('/de/arbeit/')) return 'work';
  if (
    path === '/notes/' ||
    path === '/de/notizen/' ||
    path.startsWith('/corporate-llm/') ||
    path.startsWith('/de/corporate-llm/') ||
    path.startsWith('/agent-reliability/') ||
    path.startsWith('/de/agenten-zuverlaessigkeit/') ||
    path.startsWith('/fractional-cto-caio/') ||
    path.startsWith('/de/fractional-cto-caio/') ||
    path.startsWith('/eu-ai-act-readiness/') ||
    path.startsWith('/de/eu-ai-act-readiness/') ||
    path.startsWith('/services/')
  ) {
    return 'notes';
  }
  if (path.startsWith('/about/')) return 'about';
  return null;
}
