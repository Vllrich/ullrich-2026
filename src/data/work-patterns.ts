/**
 * Engagement patterns and anonymized case studies for /work/patterns/
 * and /de/arbeit/muster/. Keep client names generic until cleared.
 */

export type WorkLang = 'en' | 'de';

export interface WorkEntryCopy {
  title: string;
  sector: string;
  /** Short teaser for catalog / landing */
  blurb: string;
  /** Longer narrative for the detail page. Separate paragraphs with \n\n. */
  story: string;
  clientLabel?: string;
}

export interface WorkEntry {
  /** Stable slug, e.g. /work/company-knowledge-agent/ */
  id: string;
  /** Set when a named or anonymized case study is ready to show as proof */
  caseStudyReady?: boolean;
  /** Graphic under /public/graphics/ */
  image: string;
  en: WorkEntryCopy;
  de: WorkEntryCopy;
}

export interface LocalizedWorkEntry extends WorkEntryCopy {
  id: string;
  caseStudyReady: boolean;
  image: string;
}

/** Anonymized case studies. Shown above generic patterns. */
export const workCases: WorkEntry[] = [
  {
    id: 'company-knowledge-agent',
    caseStudyReady: true,
    image: '/graphics/case-knowledge-agent.svg',
    en: {
      title: 'Starting a company knowledge agent with one real workflow',
      sector: 'Retail ops with several stores',
      clientLabel: 'A German retailer (name held back)',
      blurb:
        "They'd sketched a pile of AI helpers. Nothing was live. The painful gap was supplier order confirmations, read by hand. The first release was that confirmation workflow: review queue, company rules, people still deciding. Ops now handles confirmations in the live system instead of the inbox. One foothold toward a knowledge agent for the whole firm.",
      story:
        "Most of what this retailer knew lived in email, spreadsheets, or someone's head. They'd already sketched AI helpers for ordering, complaints, stock, store reporting. None of it was running.\n\nThe urgent hole was supplier order confirmations. Staff were reading those by hand, and mistakes were expensive. That confirmation workflow came first, end to end. Mail comes in. Documents get read. The system proposes what changed, matches it to the order, and applies the company's rules. People still decide. There's a review queue, a full history, and a small assistant that can look things up. If it wants to change anything, someone has to confirm. Corrections stick.\n\nWhat changed: confirmations run in a real ops system, not as a mail chore. Corrections feed back into the process. And there's a way of working that can spread: one workflow at a time, shared company knowledge, humans in the loop. Confirmations were the first foothold. The longer bet is a knowledge agent for the whole firm.",
    },
    de: {
      title: 'Firmen-Wissensagent: mit einem echten Workflow anfangen',
      sector: 'Retail-Ops mit mehreren Stores',
      clientLabel: 'Deutscher Händler (Name zurückgehalten)',
      blurb:
        'Viele KI-Helfer waren skizziert. Live war nichts. Der Engpass waren Auftragsbestätigungen, die das Team von Hand las. Als Erstes ging genau dieser Workflow live: Review, Firmenregeln, Menschen entscheiden weiter. Ops prüft Bestätigungen jetzt im System, nicht mehr im Posteingang. Ein erster Halt auf dem Weg zum Wissensagenten für die ganze Firma.',
      story:
        'Das meiste Wissen lag in Mails, Tabellen oder in Köpfen. KI-Helfer für Bestellung, Reklamation, Bestände und Store-Reporting waren schon skizziert. Live war nichts davon.\n\nDer akute Engpass waren Auftragsbestätigungen von Lieferanten. Die las das Team von Hand, und Fehler waren teuer. Zuerst kam genau dieser Workflow, durchgängig. Mails kommen rein. Dokumente werden gelesen. Das System schlägt vor, was sich geändert hat, matched zur Bestellung und wendet die Firmenregeln an. Entscheiden tun weiterhin Menschen. Es gibt eine Review-Warteschlange, eine nachvollziehbare Historie und einen kleinen Assistenten, der nachschlagen kann. Schreiben darf er nur, wenn jemand bestätigt. Korrekturen bleiben hängen.\n\nWas sich geändert hat: Bestätigungen laufen in einem echten Ops-System, nicht als Mail-Pflicht. Korrekturen fließen zurück in den Prozess. Und es gibt ein Vorgehen, das sich ausweiten lässt: ein Workflow nach dem anderen, gemeinsames Firmenwissen, Menschen im Loop. Die Bestätigung war der erste Halt. Die längere Wette ist ein Wissensagent für die ganze Firma.',
    },
  },
  {
    id: 'eu-ai-platform',
    caseStudyReady: true,
    image: '/graphics/case-eu-ai-platform.svg',
    en: {
      title: 'Turning lab AI into something customers can actually use',
      sector: 'AI product company in the EU',
      clientLabel: 'An EU AI company (name held back)',
      blurb:
        'Serious models and strong demos, almost no product layer. Login, accounts, background jobs, and a proper API went in. Partners can integrate without calling a researcher first. Models stay theirs. Clear ownership when something breaks.',
      story:
        "They had serious models on serious hardware, and demos that impressed. What they didn't have was the product layer: login, customer accounts, jobs that finish overnight, a way for a partner's software to call in safely, monitoring when something piles up. It still felt like a research lab with a nice website.\n\nThe work turned that into something you can operate. Models stay in the EU, on machines they control. Outside callers hit a proper product API with keys and accounts. Heavy work runs in the background so the website doesn't hang. When queues grow or errors spike, someone gets notified. Deploys are pinned so you know what went live.\n\nWhat changed: partners and internal apps plug in on a product path, not a research favor. The models are still theirs. You can run it like a product, with someone on the hook when it breaks.",
    },
    de: {
      title: 'Lab-KI in etwas verwandeln, das Kunden wirklich nutzen',
      sector: 'AI-Produktfirma in der EU',
      clientLabel: 'EU-AI-Unternehmen (Name zurückgehalten)',
      blurb:
        'Ernsthafte Modelle und starke Demos, fast keine Produktschicht. Login, Accounts, Hintergrund-Jobs und eine echte API kamen dazu. Partner docken an, ohne zuerst Research anzurufen. Die Modelle bleiben bei ihnen. Klare Ownership, wenn etwas bricht.',
      story:
        'Sie hatten ernsthafte Modelle auf ernsthafter Hardware und Demos, die überzeugten. Was fehlte, war die Produktschicht: Login, Kundenkonten, Jobs, die über Nacht fertig werden, ein sicherer Weg für Partner-Software, Monitoring, wenn etwas stockt. Es fühlte sich noch wie ein Research-Lab mit netter Website an.\n\nDaraus wurde ein betreibbarer Pfad. Modelle bleiben in der EU, auf eigener Hardware. Externe rufen über eine echte Produkt-API mit Keys und Accounts an. Schwere Arbeit läuft im Hintergrund, damit die Website nicht hängt. Wenn Queues wachsen oder Fehler steigen, bekommt jemand Bescheid. Deploys sind gepinnt, damit klar ist, was live ging.\n\nWas sich geändert hat: Partner und interne Apps docken über einen Produktpfad an, nicht über Research-Gefälligkeit. Die Modelle gehören weiter ihnen. Man kann es wie ein Produkt betreiben, mit jemandem am Haken, wenn es bricht.',
    },
  },
  {
    id: 'robot-vision-tooling',
    caseStudyReady: true,
    image: '/graphics/case-robot-vision-tooling.svg',
    en: {
      title: 'High-performance robot vision tooling engineers can actually use',
      sector: 'Industrial robotics · EU',
      clientLabel: 'A European AI company (name held back)',
      blurb:
        'Industrial robots need vision that holds up under messy reality: position, light, shape, background. The models were there. The tooling was not. Training lived in Python on a server. Fine for research. Too slow when engineers need to inspect and edit networks with millions of ML nodes every day. The engagement rebuilt that stack in C++ and OpenGL and shipped a high-performance navigator and editor for those networks. Same research-to-engineering gap a lot of SaaS teams hit.',
      story:
        'The product was AI for industrial robots that have to deal with variance in position, light, shape, and background. Underneath sat a familiar tooling problem. The ML environment lived as Python on a server. Researchers could work. Engineers who needed to browse, inspect, and edit large networks day to day could not. Performance fell apart once you were dealing with millions of ML nodes.\n\nThat split shows up outside robotics too: demos and training notebooks on one side, production engineering on the other. The work ported the ML environment into C++ and OpenGL and built a navigator and editor around it so people could see structure and change what the workflow required, at a scale the old stack could not carry.\n\nIt was a longer, EU-funded collaboration in industrial robotics. Transferable part is the tooling move: get model work out of a research server habit and into something an engineering team can operate under load. What changed: the team could navigate and edit networks with millions of nodes without staying glued to the old Python-on-server path.',
    },
    de: {
      title: 'Hochperformantes Robotik-Vision-Tooling, das Entwickler wirklich nutzen',
      sector: 'Industrielle Robotik · EU',
      clientLabel: 'Europäisches AI-Unternehmen (Name zurückgehalten)',
      blurb:
        'Industrieroboter brauchen Vision, die mit unruhiger Realität klar kommt: Position, Licht, Form, Hintergrund. Die Modelle waren da. Das Tooling nicht. Training lebte in Python auf dem Server. Für Research okay. Zu langsam, wenn Entwickler Netze mit Millionen von ML-Nodes täglich prüfen und editieren müssen. Das Engagement hat den Stack in C++ und OpenGL neu aufgesetzt und einen hochperformanten Navigator und Editor für diese Netze geliefert. Dieselbe Research-zu-Engineering-Lücke kennen viele SaaS-Teams.',
      story:
        'Das Produkt war KI für Industrieroboter, die mit Varianz in Position, Licht, Form und Hintergrund klar kommen müssen. Darunter lag ein bekanntes Tooling-Problem. Die ML-Umgebung lief als Python auf dem Server. Research konnte arbeiten. Entwickler, die große Netze täglich durchstöbern, prüfen und ändern müssen, kamen nicht weiter. Die Performance brach ein, sobald Millionen von ML-Nodes im Spiel waren.\n\nDie Spaltung kennt man auch außerhalb der Robotik: Demos und Training auf der einen Seite, Production-Engineering auf der anderen. Die Arbeit hat die ML-Umgebung nach C++ und OpenGL portiert und einen Navigator und Editor gebaut, damit man Struktur sieht und ändern kann, was der Workflow braucht, in einer Größenordnung, die der alte Stack nicht getragen hat.\n\nDas war eine längere, EU-geförderte Zusammenarbeit in industrieller Robotik. Übertragbar ist der Tooling-Schritt: Modellarbeit aus der Research-Server-Gewohnheit holen und in etwas bringen, das ein Engineering-Team unter Last betreiben kann. Was sich geändert hat: das Team konnte Netze mit Millionen von Nodes navigieren und editieren, ohne am alten Python-auf-Server-Pfad kleben zu bleiben.',
    },
  },
];

/** Generic engagement patterns (not yet tied to a cleared case). */
export const workPatterns: WorkEntry[] = [
  {
    id: 'agent-ops',
    caseStudyReady: false,
    image: '/graphics/pattern-agent-ops.svg',
    en: {
      title: 'An agent you can leave alone on a Tuesday',
      sector: 'Product teams and internal tools',
      blurb:
        "Demo looked sharp. Overnight on real data it looped, burned budget, or failed quietly. We bound what it can touch, test before release, watch for weirdness, and make rollback something people actually hit.",
      story:
        "In the demo, everything looked sharp. Someone clicked, everyone nodded. Then it ran overnight on real data and started looping, burning budget, or failing so quietly nobody noticed until Friday.\n\nWe lock down what it can touch. We test before each release. We cap how much it can spend and how far it can go. We watch for weird behavior. And we make sure there's a rollback people will actually hit.\n\nYou can leave it running. You know how it fails. Someone owns the pager.",
    },
    de: {
      title: 'Ein Agent, den man dienstags allein lassen kann',
      sector: 'Produktteams und interne Tools',
      blurb:
        'In der Demo alles scharf. Nachts auf echten Daten: Loop, Budget weg, oder stiller Fail. Wir begrenzen Reichweite, testen vor dem Release, schauen auf Seltsames und sorgen für ein Rollback, das das Team auch zieht.',
      story:
        'In der Demo wirkte alles scharf. Jemand klickte, alle nickten. Dann lief er nachts auf echten Daten und begann zu loopen, Budget zu verbrennen oder so still zu scheitern, dass es erst freitags auffiel.\n\nWir begrenzen, was er anfassen darf. Wir testen vor jedem Release. Wir deckeln Ausgaben und Reichweite. Wir schauen auf seltsames Verhalten. Und wir sorgen für ein Rollback, das das Team auch wirklich zieht.\n\nIhr könnt ihn laufen lassen. Ihr kennt die Fehlermodi. Jemand besitzt den Pager.',
    },
  },
  {
    id: 'open-models',
    caseStudyReady: false,
    image: '/graphics/pattern-open-models.svg',
    en: {
      title: 'Running your own models when the API bill gets weird',
      sector: 'Teams with data or cost pressure',
      blurb:
        "Cloud APIs were fine until volume, legal, or the invoice said otherwise. We put open models on infrastructure you control. Same product surface. Cost you can forecast.",
      story:
        "Cloud APIs were fine at the start. Then volume went up, or legal said the data can't leave, or the invoice made finance twitchy. Suddenly the easy path felt stuck.\n\nWe put open models on infrastructure you control (Llama, Mistral, Qwen, that crowd). Same product surface for users. Retrieval over your docs. Ops you'd trust on a Monday morning.\n\nYou know where the data sits. You can forecast cost. Reliability is something you can talk about without hand-waving.",
    },
    de: {
      title: 'Eigene Modelle, wenn die API-Rechnung seltsam wird',
      sector: 'Teams mit Daten- oder Kostendruck',
      blurb:
        'Cloud-APIs waren okay, bis Volumen, Legal oder die Rechnung dazwischenkamen. Wir stellen offene Modelle auf Infrastruktur, die ihr kontrolliert. Dieselbe Produktfläche. Kosten, die man einschätzen kann.',
      story:
        'Cloud-APIs waren am Anfang in Ordnung. Dann stieg das Volumen, oder Legal sagte, die Daten dürfen nicht raus, oder die Rechnung machte Finance nervös. Der einfache Weg fühlte sich plötzlich festgefahren an.\n\nWir stellen offene Modelle auf Infrastruktur, die ihr kontrolliert (Llama, Mistral, Qwen und Co.). Für Nutzer dieselbe Produktfläche. Suche über eure Docs. Ops, denen ihr an einem Montagmorgen traut.\n\nIhr wisst, wo die Daten liegen. Kosten lassen sich einschätzen. Über Zuverlässigkeit könnt ihr sprechen, ohne zu wedeln.',
    },
  },
  {
    id: 'corporate-llm',
    caseStudyReady: false,
    image: '/graphics/pattern-corporate-llm.svg',
    en: {
      title: 'One company LLM for the whole team',
      sector: 'Internal platforms and knowledge work',
      blurb:
        "Every team had bolted a chat somewhere. Nobody knew where prompts went. We set up one shared stack under your rules. New teams plug in without reinventing the pipes.",
      story:
        "Every team had bolted a chat tool onto Slack or Notion. Nobody could say where the prompts went. Costs jumped. When something broke, ownership was a shrug.\n\nWe set up a shared company stack under your rules. Models you choose. Answers grounded in docs you've approved. Clear who can ask what. Budgets. Monitoring. A path to keep it healthy after launch.\n\nOne place for internal AI. New teams plug in without reinventing the pipes each time.",
    },
    de: {
      title: 'Ein Firmen-LLM fürs ganze Team',
      sector: 'Interne Plattformen und Wissensarbeit',
      blurb:
        'Jedes Team hatte irgendeinen Chat irgendwo. Niemand wusste, wohin die Prompts gingen. Wir setzen einen gemeinsamen Stack unter euren Regeln auf. Neue Teams docken an, ohne die Rohre neu zu erfinden.',
      story:
        'Jedes Team hatte irgendeinen Chat an Slack oder Notion gehängt. Niemand konnte sagen, wohin die Prompts gingen. Kosten sprangen. Wenn etwas brach, war Ownership ein Schulterzucken.\n\nWir setzen einen gemeinsamen Firmen-Stack unter euren Regeln auf. Modelle, die ihr wählt. Antworten auf Docs, die ihr freigegeben habt. Klar, wer was fragen darf. Budgets. Monitoring. Ein Pfad, ihn nach dem Launch gesund zu halten.\n\nEin Ort für interne KI. Neue Teams docken an, ohne die Rohre jedes Mal neu zu erfinden.',
    },
  },
  {
    id: 'readiness-audit',
    caseStudyReady: false,
    image: '/graphics/pattern-readiness.svg',
    en: {
      title: "Figuring out what's worth building before you spend",
      sector: 'Growing companies under AI pressure',
      blurb:
        'Someone wants "AI" on the roadmap. Maybe a prototype impressed in a meeting. In one to two weeks we sort what might earn its keep, what to skip, and what it might cost.',
      story:
        'Someone upstairs wants "AI" on the roadmap. Maybe there\'s a prototype that impressed in a meeting. Nobody\'s sure it pays for itself, or survives contact with real users.\n\nFixed-scope Readiness & Production Audit, usually one to two weeks. We shortlist use cases that might earn their keep. We ask whether an agent even helps. We call build, buy, or skip. We sketch cost. We check the EU AI Act when it applies.\n\nYou leave with a clear go or stop, sized to the team you actually have.',
    },
    de: {
      title: 'Klären, was sich zu bauen lohnt, bevor ihr Geld ausgebt',
      sector: 'Wachsende Unternehmen unter KI-Druck',
      blurb:
        'Irgendwer will "KI" auf der Roadmap. Vielleicht hat ein Prototyp in einem Meeting beeindruckt. In ein bis zwei Wochen klären wir, was sich tragen könnte, was ihr skippt, und was es kosten mag.',
      story:
        'Irgendwer oben will "KI" auf der Roadmap. Vielleicht gibt es einen Prototyp, der in einem Meeting beeindruckt hat. Ob er sich trägt oder echte Nutzer überlebt, weiß niemand sicher.\n\nReadiness & Production Audit mit festem Scope, meist ein bis zwei Wochen. Wir listen Use Cases, die sich tragen könnten. Wir fragen, ob ein Agent überhaupt hilft. Wir sagen Build, Buy oder Skip. Wir skizzieren Kosten. Den EU AI Act checken wir, wenn er greift.\n\nIhr geht mit einem klaren Go oder Stopp raus, passend zum Team, das ihr wirklich habt.',
    },
  },
  {
    id: 'reliability-retainer',
    caseStudyReady: false,
    image: '/graphics/pattern-retainer.svg',
    en: {
      title: 'Staying after the launch party',
      sector: 'Teams that already shipped AI',
      blurb:
        'The build sprint ended. Quality drifted, costs crept, incidents had no owner. The retainer covers ongoing ops: watch the system, keep guardrails honest, respond when something breaks.',
      story:
        'The build sprint ended. Then quality drifted, costs crept, and incidents had no clear owner. Governance was a Google Doc nobody opened.\n\nReliability Retainer: watch the system, keep the guardrails honest, catch drift and spend early, respond to incidents, revisit the AI Act when usage moves.\n\nOngoing care without hiring a full AI ops team on day one.',
    },
    de: {
      title: 'Bleiben, wenn die Launch-Party vorbei ist',
      sector: 'Teams, die schon KI live haben',
      blurb:
        'Der Build-Sprint war vorbei. Qualität driftete, Kosten krochen, Incidents ohne Owner. Der Retainer deckt den laufenden Betrieb ab: System beobachten, Guardrails ehrlich halten, reagieren wenn etwas bricht.',
      story:
        'Der Build-Sprint war vorbei. Dann driftete die Qualität, Kosten krochen, Incidents hatten keinen klaren Owner. Governance war ein Google Doc, das niemand öffnete.\n\nReliability Retainer: System beobachten, Guardrails ehrlich halten, Drift und Ausgaben früh sehen, bei Incidents reagieren, den AI Act wieder anschauen, wenn sich die Nutzung bewegt.\n\nLaufende Betreuung, ohne am Tag eins ein volles AI-Ops-Team einzustellen.',
    },
  },
];

export function localizeWorkEntry(entry: WorkEntry, lang: WorkLang): LocalizedWorkEntry {
  return {
    id: entry.id,
    caseStudyReady: Boolean(entry.caseStudyReady),
    image: entry.image,
    ...entry[lang],
  };
}

/** Cases first, then generic patterns. */
export function workEntriesFor(lang: WorkLang): LocalizedWorkEntry[] {
  return [...workCases, ...workPatterns].map((entry) => localizeWorkEntry(entry, lang));
}

export function allWorkEntries(): WorkEntry[] {
  return [...workCases, ...workPatterns];
}

export function findWorkEntry(id: string): WorkEntry | undefined {
  return allWorkEntries().find((entry) => entry.id === id);
}

export function workHref(id: string, lang: WorkLang = 'en'): string {
  return lang === 'de' ? `/de/arbeit/${id}/` : `/work/${id}/`;
}

export function workIndexHref(lang: WorkLang = 'en'): string {
  return lang === 'de' ? '/de/arbeit/muster/' : '/work/patterns/';
}

export function workNeighbors(
  id: string,
  lang: WorkLang,
): { prev?: LocalizedWorkEntry; next?: LocalizedWorkEntry } {
  const list = workEntriesFor(lang);
  const i = list.findIndex((entry) => entry.id === id);
  if (i < 0) return {};
  return {
    prev: i > 0 ? list[i - 1] : undefined,
    next: i < list.length - 1 ? list[i + 1] : undefined,
  };
}
