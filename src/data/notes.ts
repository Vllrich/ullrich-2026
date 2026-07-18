export type Note = {
  id: string;
  lang: 'en' | 'de';
  href: string;
  title: string;
  eyebrow: string;
  summary: string;
  /** Paired note id in the other language, when it exists. */
  twinId?: string;
};

/** Reading order for EN notes. */
export const notesEn: Note[] = [
  {
    id: 'readiness-audit',
    lang: 'en',
    href: '/services/readiness-audit/',
    title: 'Readiness & Production Audit',
    eyebrow: 'Service',
    summary: 'One to two weeks. Figure out what is worth building before you spend.',
  },
  {
    id: 'agent-reliability',
    lang: 'en',
    href: '/agent-reliability/',
    title: 'Agent reliability',
    eyebrow: 'Practice',
    summary: 'Tests, limits, monitoring, and a rollback the team will actually use.',
    twinId: 'agenten-zuverlaessigkeit',
  },
  {
    id: 'corporate-llm',
    lang: 'en',
    href: '/corporate-llm/',
    title: 'Corporate LLM',
    eyebrow: 'Platform',
    summary: 'A company LLM stack under your rules, data, and cost limits.',
    twinId: 'corporate-llm-de',
  },
  {
    id: 'eu-ai-act',
    lang: 'en',
    href: '/eu-ai-act-readiness/',
    title: 'EU AI Act readiness',
    eyebrow: 'Compliance',
    summary: 'Does it apply, what risk class, and what that means day to day.',
    twinId: 'eu-ai-act-de',
  },
  {
    id: 'fractional-cto',
    lang: 'en',
    href: '/fractional-cto-caio/',
    title: 'Fractional CTO / CAIO',
    eyebrow: 'Leadership',
    summary: 'Senior judgment and delivery, part-time, with hands in the repo.',
    twinId: 'fractional-cto-de',
  },
  {
    id: 'patterns',
    lang: 'en',
    href: '/work/patterns/',
    title: 'Engagement patterns',
    eyebrow: 'Work',
    summary: 'How the work usually shows up. No invented case metrics.',
  },
  {
    id: 'about',
    lang: 'en',
    href: '/about/',
    title: 'About',
    eyebrow: 'Profile',
    summary: 'Berlin. Engineer and technical lead. Systems that have to keep working.',
  },
];

export const notesDe: Note[] = [
  {
    id: 'agenten-zuverlaessigkeit',
    lang: 'de',
    href: '/de/agenten-zuverlaessigkeit/',
    title: 'Agenten-Zuverlässigkeit',
    eyebrow: 'Praxis',
    summary: 'Tests, Limits, Monitoring und ein Rollback, den das Team auch zieht.',
    twinId: 'agent-reliability',
  },
  {
    id: 'corporate-llm-de',
    lang: 'de',
    href: '/de/corporate-llm/',
    title: 'Corporate LLM',
    eyebrow: 'Plattform',
    summary: 'Firmen-LLM-Stack unter euren Regeln, Daten und Kostenlimits.',
    twinId: 'corporate-llm',
  },
  {
    id: 'eu-ai-act-de',
    lang: 'de',
    href: '/de/eu-ai-act-readiness/',
    title: 'EU-AI-Act-Readiness',
    eyebrow: 'Compliance',
    summary: 'Greift der Act, welche Risikoklasse, und was das im Alltag heißt.',
    twinId: 'eu-ai-act',
  },
  {
    id: 'fractional-cto-de',
    lang: 'de',
    href: '/de/fractional-cto-caio/',
    title: 'Fractional CTO / CAIO',
    eyebrow: 'Leadership',
    summary: 'Senior-Urteil und Delivery in Teilzeit, mit Händen im Repo.',
    twinId: 'fractional-cto',
  },
];

export function notesFor(lang: 'en' | 'de'): Note[] {
  return lang === 'de' ? notesDe : notesEn;
}

export function findNote(id: string, lang: 'en' | 'de'): Note | undefined {
  return notesFor(lang).find((n) => n.id === id);
}

export function findNoteByHref(href: string, lang: 'en' | 'de'): Note | undefined {
  const normalized = href.endsWith('/') ? href : `${href}/`;
  return notesFor(lang).find((n) => n.href === normalized);
}

export function neighbors(id: string, lang: 'en' | 'de'): { prev?: Note; next?: Note } {
  const list = notesFor(lang);
  const i = list.findIndex((n) => n.id === id);
  if (i < 0) return {};
  return {
    prev: i > 0 ? list[i - 1] : undefined,
    next: i < list.length - 1 ? list[i + 1] : undefined,
  };
}

export function continueReading(id: string, lang: 'en' | 'de', count = 3): Note[] {
  const list = notesFor(lang);
  const i = list.findIndex((n) => n.id === id);
  if (i < 0) return list.slice(0, count);
  const rest = [...list.slice(i + 1), ...list.slice(0, i)];
  return rest.slice(0, count);
}
