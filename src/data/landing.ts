import type { SiteLang } from "../lib/i18n";

export type LandingLang = SiteLang;

export interface LandingIds {
  whatIDo: string;
  method: string;
  services: string;
  work: string;
  consult: string;
  faq: string;
  contact: string;
}

export interface LandingCopy {
  meta: {
    title: string;
    description: string;
  };
  ids: LandingIds;
  cover: {
    descriptor: string;
    navLabel: string;
    menuOpen: string;
    menuClose: string;
    heroLabel: string;
    headline: string;
    headlineAlt: string;
    body: string;
    ctaPrimary: string;
  };
  whatIDo: {
    heading: string;
    statement: string;
    services: string[];
    beats: { title: string; body: string }[];
  };
  method: {
    leadLine1: string;
    leadLine2: string;
    sub: string;
    steps: { code: string; body: string }[];
    scorecardTitle: string;
    scorecardContext: string;
    scorecard: { dim: string; weight: string; score: number }[];
    stmtMid: string;
    stmtStrong: string;
  };
  services: {
    displayLines: string[];
    sub: string;
    items: {
      title: string;
      cat: string;
      format: string;
      icon: string;
      desc: string;
      tags: string[];
      href?: string;
    }[];
  };
  work: {
    heading: string;
    sub: string;
    readCase: string;
  };
  clients: {
    label: string;
  };
  consult: {
    displayLine1: string;
    displayLine2: string;
    lead: string;
    points: string[];
    ctaPrimary: string;
    ctaSecondary: string;
    moreContext: string;
    workLink: string;
    notesLink: string;
    aboutLink: string;
  };
  faq: {
    displayLine1: string;
    displayLine2: string;
    items: {
      q: string;
      a: string;
      moreHref?: string;
      moreLabel?: string;
    }[];
  };
  contact: {
    displayLine1: string;
    displayLine2: string;
    intro: string;
    noteStart: string;
    noteAudit: string;
    noteAuditSuffix: string;
    availability: string;
    form: {
      name: string;
      namePh: string;
      email: string;
      emailPh: string;
      subject: string;
      subjectPh: string;
      message: string;
      messagePh: string;
      submit: string;
      sending: string;
      tryAgain: string;
      error: string;
      errName: string;
      errEmail: string;
      errEmailInvalid: string;
      errSubject: string;
      errMessage: string;
      errMessageShort: string;
      successTitle: string;
      successBody: string;
      close: string;
      closesIn: string;
    };
    footer: {
      tagline: string;
      work: string;
      notes: string;
      about: string;
      copyright: string;
      navLabel: string;
    };
  };
}

const en: LandingCopy = {
  meta: {
    title: "Lars Ullrich - Production AI, Agent Reliability & Fractional CTO",
    description:
      "I help growing companies get AI into production, and keep it running. Often agents, often on open models you host yourself. Full-stack engineer and fractional CTO/CAIO, with two decades of engineering behind the work.",
  },
  ids: {
    whatIDo: "what-i-do",
    method: "method",
    services: "services",
    work: "work",
    consult: "consult",
    faq: "faq",
    contact: "contact",
  },
  cover: {
    descriptor: "Full-Stack Engineer & Fractional CTO",
    navLabel: "Main navigation",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    heroLabel: "Hero",
    headline: "Cut through the noise",
    headlineAlt: "Build what matters",
    body: "Engineering leadership for growing companies, ship software that holds up in production, keep it running, and only put AI where it earns its place.",
    ctaPrimary: "Request a scope call",
  },
  whatIDo: {
    heading: "What I do",
    statement:
      "I own the technical decisions from first use case to production: what to build, what to buy, what it costs to run, and who operates it after launch. Strategy when you need it, engineering when you need that too.",
    services: [
      "Production AI",
      "Corporate LLM",
      "Agent reliability",
      "Full-stack engineering",
      "Fractional CTO / CAIO",
    ],
    beats: [
      {
        title: "Find the right use case",
        body: "Not every problem needs AI, and not every AI needs an agent. I help you pick the few use cases that pay for themselves, and rule out the ones that won't.",
      },
      {
        title: "Build the system",
        body: "Agents, RAG, automation, and the systems around them. Built for reliability, observability, and a cost you can predict. Hosted, or on open models you control.",
      },
      {
        title: "Build and operate, not just advise",
        body: "Code, architecture reviews, production debugging, and staying on to keep it running. I work in your repository, not from the outside.",
      },
    ],
  },
  method: {
    leadLine1: "From signal",
    leadLine2: "to system.",
    sub: "From a demo that works to a system you can leave running.",
    steps: [
      {
        code: "Tune in",
        body: "Understand the real problem, the data, and the constraints before writing code or reaching for a model. Most failures are framing failures, not technical ones.",
      },
      {
        code: "Compose the architecture",
        body: "Choose the right stack and shape the system: services, data, and where AI actually earns its place. Design for reliability, cost, and the team that inherits it.",
      },
      {
        code: "Ship and harden",
        body: "Get it live, then make it dependable: tests, monitoring, guardrails, evals where AI is involved, and clear ownership.",
      },
      {
        code: "Adopt responsibly",
        body: "Governance sized to your company: security, data protection, EU AI Act readiness where it applies, decisions you can explain.",
      },
    ],
    scorecardTitle: "Readiness scorecard",
    scorecardContext:
      "A typical first engagement, scored across the four dimensions where production systems usually break. Most teams arrive strong on framing and weak on production readiness.",
    scorecard: [
      { dim: "Problem framing", weight: "35%", score: 7 },
      { dim: "Stack & architecture", weight: "30%", score: 6 },
      { dim: "Production readiness", weight: "25%", score: 4 },
      { dim: "Governance", weight: "10%", score: 3 },
    ],
    stmtMid: "The environments change",
    stmtStrong: "The standard for shipping doesn't",
  },
  services: {
    displayLines: ["Diagnose", "Build", "Run", "Lead"],
    sub: "A focused audit, a corporate LLM stack, one system shipped, ongoing reliability, or embedded leadership. Pick the depth you need.",
    items: [
      {
        title: "Readiness & Production Audit",
        cat: "Strategy",
        format: "Fixed scope · 1-2 weeks",
        icon: "/graphics/icon-ai-readiness-audit.svg",
        desc: "A focused review of your product, data, and stack: where AI fits, where it doesn't, and what it takes to run in production. You leave with a prioritized use-case shortlist, an honest build/buy/skip call, and a cost model.",
        tags: [
          "Use-case mapping",
          "Agent feasibility",
          "Build vs buy",
          "Risk & EU AI Act check",
          "Cost model",
        ],
        href: "/services/readiness-audit/",
      },
      {
        title: "Build Sprint",
        cat: "Full-Stack",
        format: "Project · 6-10 weeks",
        icon: "/graphics/icon-build-sprint.svg",
        desc: "One system shipped to production: the app, the infrastructure, and the AI inside it. Hosted or on open models you control. Not a prototype that stops at the demo.",
        tags: [
          "Frontend to infra",
          "Python & TypeScript",
          "Agents & RAG",
          "Open or hosted models",
          "Monitoring & guardrails",
        ],
      },
      {
        title: "Corporate LLM",
        cat: "Platform",
        format: "Project · 6-12 weeks",
        icon: "/graphics/icon-corporate-llm.svg",
        desc: "A company LLM stack you can actually run: private or open models, RAG over your data, access control, cost limits, and ops. Built for internal use under your policies, not a consumer chatbot bolted on.",
        tags: [
          "Private / open models",
          "RAG over company data",
          "Access & audit trails",
          "Cost & rate limits",
          "EU-ready ops",
        ],
        href: "/corporate-llm/",
      },
      {
        title: "Reliability Retainer",
        cat: "Operations",
        format: "Monthly · ongoing",
        icon: "/graphics/icon-reliability-retainer.svg",
        desc: "The keep-it-running part, as a standing engagement: evals, monitoring, guardrails, drift checks, incident response, and EU AI Act re-assessment. For teams who already shipped and should not be operating it alone.",
        tags: [
          "Evals & monitoring",
          "Guardrails",
          "Drift & cost control",
          "Incident response",
        ],
        href: "/agent-reliability/",
      },
      {
        title: "Fractional CTO / CAIO",
        cat: "Leadership",
        format: "Monthly retainer",
        icon: "/graphics/icon-fractional-cto.svg",
        desc: "Senior technical leadership without the full-time hire: architecture, delivery, code review, and AI strategy. Technical, not purely advisory.",
        tags: [
          "Architecture & roadmap",
          "Team & vendor selection",
          "Delivery ownership",
          "Board-level reporting",
        ],
        href: "/fractional-cto-caio/",
      },
    ],
  },
  work: {
    heading: "Work",
    sub: "Selected projects. Names held back.",
    readCase: "Read the case",
  },
  clients: {
    label: "Past clients",
  },
  consult: {
    displayLine1: "Not sure",
    displayLine2: "where to start?",
    lead: "Most teams begin with a Readiness & Production Audit. Fixed scope, 1-2 weeks. Clear recommendation before you fund a build.",
    points: [
      "Use-case shortlist and an honest build / buy / skip call",
      "Cost model you can take into a decision",
      "Agent feasibility and EU AI Act check where it applies",
    ],
    ctaPrimary: "Request a scope call",
    ctaSecondary: "See the audit",
    moreContext: "More context:",
    workLink: "work",
    notesLink: "notes",
    aboutLink: "about",
  },
  faq: {
    displayLine1: "Questions,",
    displayLine2: "answered.",
    items: [
      {
        q: "What does a fractional CTO / CAIO actually do?",
        a: "Senior technical leadership on a part-time or project basis: architecture, roadmap, delivery ownership, team and vendor selection, and AI strategy. The role stays technical, not purely advisory. In practice that means code reviews, architecture decisions, and production debugging alongside the team, without the cost of a full-time hire.",
        moreHref: "/fractional-cto-caio/",
        moreLabel: "Fractional CTO / CAIO",
      },
      {
        q: 'What do you mean by "agent reliability"?',
        a: "A demo agent and a production agent are different problems. In a demo it answers once, watched by a human. In production it acts on its own, repeatedly, against changing data. The failure modes are looping, hallucinated actions, runaway cost, and silent regressions. Reliability is the work that makes that safe: evals you can trust, guardrails, bounded autonomy, monitoring, and a clear rollback path. It is the part most teams skip.",
        moreHref: "/agent-reliability/",
        moreLabel: "Agent reliability",
      },
      {
        q: "Do you work with open models, or only hosted APIs like OpenAI?",
        a: "Both. Hosted APIs are often the fastest start. But when data has to stay in your infrastructure, when per-token cost does not scale, or when you want to avoid vendor lock-in, I build on open models like Llama, Mistral, or Qwen, self-hosted on infrastructure you control. I run open models in production today, so this is not theoretical.",
        moreHref: "/corporate-llm/",
        moreLabel: "Corporate LLM",
      },
      {
        q: 'What is a "Corporate LLM"?',
        a: "A company LLM stack under your policies: private or open models, RAG over your data, access control, cost limits, and ops. Not a consumer chatbot bolted onto Slack. When the need is a shared internal platform rather than one product feature, that is the Corporate LLM engagement.",
        moreHref: "/corporate-llm/",
        moreLabel: "Corporate LLM",
      },
      {
        q: "Do you only advise, or do you also write the code?",
        a: "The engagement includes code. I work inside your repository, not from the outside, and I stay on to operate what we ship. Depending on the engagement, that spans implementation, architecture reviews, production debugging, and ongoing reliability.",
      },
      {
        q: "How do you decide whether a company actually needs AI?",
        a: "Not every problem needs AI, and not every AI needs an agent. I start with the use case: what problem are you solving, and does AI change the outcome enough to justify running it? Most AI failures are framing failures. The technology is rarely the hard part. The Readiness & Production Audit answers this before any build work begins.",
      },
      {
        q: 'What is the "EU AI Act check" in the readiness audit?',
        a: "It is part of the Readiness & Production Audit. I assess whether a proposed AI system falls under the Act's scope, which risk category it lands in, and what compliance obligations that creates. It also covers data protection and governance, scaled to your size and intended use. For live systems, the Reliability Retainer re-assesses this as the rules and your usage change.",
        moreHref: "/eu-ai-act-readiness/",
        moreLabel: "EU AI Act readiness",
      },
      {
        q: "Which engagement should I start with?",
        a: "Unsure whether AI is the right move? Start with the Readiness & Production Audit: fixed scope, a use-case shortlist, an honest build/buy/skip call, and a cost model. Need a company-wide LLM platform? Corporate LLM. Already know what to build as one product? A Build Sprint. Already shipped? The Reliability Retainer keeps it running.",
        moreHref: "/services/readiness-audit/",
        moreLabel: "Readiness & Production Audit",
      },
      {
        q: "Where are you based, and do you work remotely?",
        a: "I am based in Berlin and have lived here since 2007. I work with startups and growing companies regardless of location. Email me at contact@larsullrich.de. I read every message personally and usually reply within a day.",
      },
    ],
  },
  contact: {
    displayLine1: "Let's",
    displayLine2: "Talk.",
    intro:
      "Tell me what you're building and where it's stuck. If I'm the right person to help, I'll say so. If I'm not, I'll tell you that too.",
    noteStart: "Best starting point for most teams:",
    noteAudit: "Readiness & Production Audit",
    noteAuditSuffix: "(fixed scope, 1-2 weeks).",
    availability:
      "Currently open to AI readiness audits, corporate LLM builds, agent and production builds, reliability retainers, and fractional CTO/CAIO engagements.",
    form: {
      name: "Name",
      namePh: "Your full name",
      email: "Email",
      emailPh: "your@email.com",
      subject: "Subject",
      subjectPh: "What is this about?",
      message: "Message",
      messagePh: "What are you building, and where is it stuck?",
      submit: "Request a scope call",
      sending: "Sending...",
      tryAgain: "Try Again",
      error: "Something went wrong. Please try again in a moment.",
      errName: "Name is required",
      errEmail: "Email is required",
      errEmailInvalid: "Please enter a valid email",
      errSubject: "Subject is required",
      errMessage: "Message is required",
      errMessageShort: "At least 10 characters",
      successTitle: "Message sent",
      successBody:
        "Thanks. I read every message personally and usually reply within a day.",
      close: "Close",
      closesIn: "Closes in",
    },
    footer: {
      tagline: "Production AI and agents. Built to ship, and to keep running.",
      work: "Work",
      notes: "Notes",
      about: "About",
      copyright: "All rights reserved.",
      navLabel: "Footer navigation",
    },
  },
};

const de: LandingCopy = {
  meta: {
    title:
      "Lars Ullrich - Production AI, Agenten-Zuverlässigkeit & Fractional CTO",
    description:
      "Lars Ullrich, Berlin: Production AI, Agenten-Zuverlässigkeit und Fractional CTO / CAIO. Ich helfe wachsenden Unternehmen, KI in Produktion zu bringen und am Laufen zu halten.",
  },
  ids: {
    whatIDo: "was-ich-tue",
    method: "methode",
    services: "leistungen",
    work: "arbeit",
    consult: "beratung",
    faq: "faq",
    contact: "kontakt",
  },
  cover: {
    descriptor: "Full-Stack Engineer & Fractional CTO",
    navLabel: "Hauptnavigation",
    menuOpen: "Menü öffnen",
    menuClose: "Menü schließen",
    heroLabel: "Hero",
    headline: "Klarheit statt Lärm.",
    headlineAlt: "Bauen, was zählt.",
    body: "Technische Führung für wachsende Unternehmen — Software, die in Produktion hält und läuft. KI nur dort, wo sie ihren Platz verdient.",
    ctaPrimary: "Scope-Call anfragen",
  },
  whatIDo: {
    heading: "Was ich mache",
    statement:
      "Ich übernehme die technischen Entscheidungen vom ersten Use Case bis in die Produktion: was bauen, was kaufen, was der Betrieb kostet, und wer es danach fährt. Strategie, wenn ihr die braucht. Engineering, wenn ihr das braucht.",
    services: [
      "Production AI",
      "Corporate LLM",
      "Agenten-Zuverlässigkeit",
      "Full-Stack Engineering",
      "Fractional CTO / CAIO",
    ],
    beats: [
      {
        title: "Den richtigen Use Case finden",
        body: "Nicht jedes Problem braucht KI, und nicht jede KI braucht einen Agenten. Ich helfe euch, die wenigen Use Cases zu wählen, die sich rechnen, und den Rest auszusortieren.",
      },
      {
        title: "Das System bauen",
        body: "Agenten, RAG, Automation und die Systeme darum herum. Gebaut für Zuverlässigkeit, Observability und Kosten, die ihr planen könnt. Hosted, oder auf offenen Modellen, die ihr kontrolliert.",
      },
      {
        title: "Bauen und betreiben, nicht nur beraten",
        body: "Code, Architecture Reviews, Production Debugging, und dabei bleiben, damit es läuft. Ich arbeite in eurem Repository, nicht von außen.",
      },
    ],
  },
  method: {
    leadLine1: "Vom Signal",
    leadLine2: "zum System.",
    sub: "Von einer Demo, die funktioniert, zu einem System, das ihr laufen lassen könnt.",
    steps: [
      {
        code: "Einsteigen",
        body: "Das echte Problem, die Daten und die Constraints verstehen, bevor Code oder Modell. Die meisten Fehler sind Framing-Fehler, keine Technikfehler.",
      },
      {
        code: "Architektur setzen",
        body: "Den richtigen Stack wählen und das System formen: Services, Daten, und wo KI wirklich ihren Platz verdient. Für Zuverlässigkeit, Kosten und das Team, das es erbt.",
      },
      {
        code: "Shippen und härten",
        body: "Live bringen, dann belastbar machen: Tests, Monitoring, Guardrails, Evals wo KI im Spiel ist, und klare Ownership.",
      },
      {
        code: "Verantwortlich übernehmen",
        body: "Governance in eurer Größe: Security, Datenschutz, EU-AI-Act-Readiness wo nötig, Entscheidungen, die erklärbar sind.",
      },
    ],
    scorecardTitle: "Readiness-Scorecard",
    scorecardContext:
      "Ein typisches Erstengagement, bewertet über die vier Dimensionen, an denen Production-Systeme meist brechen. Die meisten Teams kommen stark im Framing und schwach in Production Readiness.",
    scorecard: [
      { dim: "Problem Framing", weight: "35%", score: 7 },
      { dim: "Stack & Architektur", weight: "30%", score: 6 },
      { dim: "Production Readiness", weight: "25%", score: 4 },
      { dim: "Governance", weight: "10%", score: 3 },
    ],
    stmtMid: "Die Umgebungen ändern sich",
    stmtStrong: "Der Maßstab fürs Shippen nicht",
  },
  services: {
    displayLines: ["Diagnose", "Build", "Run", "Lead"],
    sub: "Ein fokussierter Audit, ein Corporate-LLM-Stack, ein System in Produktion, laufende Reliability oder eingebettete Führung. Wählt die Tiefe, die ihr braucht.",
    items: [
      {
        title: "Readiness & Production Audit",
        cat: "Strategie",
        format: "Fester Scope · 1-2 Wochen",
        icon: "/graphics/icon-ai-readiness-audit.svg",
        desc: "Ein fokussierter Blick auf Produkt, Daten und Stack: wo KI passt, wo nicht, und was Produktion wirklich kostet. Ihr geht mit Use-Case-Shortlist, ehrlichem Build/Buy/Skip und einem Kostenmodell.",
        tags: [
          "Use-Case-Mapping",
          "Agenten-Feasibility",
          "Build vs Buy",
          "Risiko & EU-AI-Act-Check",
          "Kostenmodell",
        ],
        href: "/services/readiness-audit/",
      },
      {
        title: "Build Sprint",
        cat: "Full-Stack",
        format: "Projekt · 6-10 Wochen",
        icon: "/graphics/icon-build-sprint.svg",
        desc: "Ein System in Produktion: App, Infra und die KI darin. Hosted oder auf offenen Modellen, die ihr kontrolliert. Kein Prototyp, der bei der Demo endet.",
        tags: [
          "Frontend bis Infra",
          "Python & TypeScript",
          "Agenten & RAG",
          "Offene oder gehostete Modelle",
          "Monitoring & Guardrails",
        ],
      },
      {
        title: "Corporate LLM",
        cat: "Plattform",
        format: "Projekt · 6-12 Wochen",
        icon: "/graphics/icon-corporate-llm.svg",
        desc: "Ein Unternehmens-LLM-Stack, den ihr wirklich betreiben könnt: private oder offene Modelle, RAG über eure Daten, Zugriffskontrolle, Kostenlimits und Ops. Für internen Einsatz unter euren Regeln, kein Consumer-Chatbot drangeklatscht.",
        tags: [
          "Private / offene Modelle",
          "RAG über Firmendaten",
          "Zugriff & Audit-Trails",
          "Kosten- & Rate-Limits",
          "EU-tauglicher Ops",
        ],
        href: "/de/corporate-llm/",
      },
      {
        title: "Reliability Retainer",
        cat: "Betrieb",
        format: "Monatlich · laufend",
        icon: "/graphics/icon-reliability-retainer.svg",
        desc: "Der Keep-it-running-Teil als laufendes Engagement: Evals, Monitoring, Guardrails, Drift-Checks, Incident Response und EU-AI-Act-Reassessment. Für Teams, die schon geshipped haben und das nicht allein betreiben sollten.",
        tags: [
          "Evals & Monitoring",
          "Guardrails",
          "Drift- & Kostenkontrolle",
          "Incident Response",
        ],
        href: "/de/agenten-zuverlaessigkeit/",
      },
      {
        title: "Fractional CTO / CAIO",
        cat: "Leadership",
        format: "Monats-Retainer",
        icon: "/graphics/icon-fractional-cto.svg",
        desc: "Senior technische Führung ohne Vollzeit-Hire: Architektur, Delivery, Code Review und AI-Strategie. Technisch, nicht nur Advisory.",
        tags: [
          "Architektur & Roadmap",
          "Team- & Vendor-Auswahl",
          "Delivery Ownership",
          "Board-Reporting",
        ],
        href: "/de/fractional-cto-caio/",
      },
    ],
  },
  work: {
    heading: "Arbeit",
    sub: "Ausgewählte Projekte. Namen zurückgehalten.",
    readCase: "Case lesen",
  },
  clients: {
    label: "Bisherige Kunden",
  },
  consult: {
    displayLine1: "Unklar,",
    displayLine2: "wo anfangen?",
    lead: "Die meisten Teams starten mit einem Readiness & Production Audit. Fester Scope, 1-2 Wochen. Klare Empfehlung, bevor ihr einen Build finanziert.",
    points: [
      "Use-Case-Shortlist und ehrlicher Build / Buy / Skip",
      "Kostenmodell, das in eine Entscheidung geht",
      "Agenten-Feasibility und EU-AI-Act-Check, wo relevant",
    ],
    ctaPrimary: "Scope-Call anfragen",
    ctaSecondary: "Audit ansehen",
    moreContext: "Mehr Kontext:",
    workLink: "Arbeit",
    notesLink: "Notizen",
    aboutLink: "About",
  },
  faq: {
    displayLine1: "Fragen,",
    displayLine2: "beantwortet.",
    items: [
      {
        q: "Was macht ein Fractional CTO / CAIO konkret?",
        a: "Senior technische Führung auf Teilzeit- oder Projektbasis: Architektur, Roadmap, Delivery Ownership, Team- und Vendor-Auswahl und AI-Strategie. Die Rolle bleibt technisch, nicht nur Advisory. In der Praxis: Code Reviews, Architekturentscheidungen und Production Debugging mit dem Team, ohne die Kosten eines Vollzeit-Hires.",
        moreHref: "/de/fractional-cto-caio/",
        moreLabel: "Fractional CTO / CAIO",
      },
      {
        q: "Was meinst du mit „Agenten-Zuverlässigkeit“?",
        a: "Ein Demo-Agent und ein Production-Agent sind unterschiedliche Probleme. In der Demo antwortet er einmal, unter Aufsicht. In Produktion handelt er allein, wiederholt, gegen sich ändernde Daten. Die Failure Modes: Loops, halluzinierte Aktionen, Kostenexplosion, stille Regressionen. Reliability ist die Arbeit, die das sicher macht: belastbare Evals, Guardrails, begrenzte Autonomie, Monitoring und ein klarer Rollback. Den Teil lassen die meisten Teams weg.",
        moreHref: "/de/agenten-zuverlaessigkeit/",
        moreLabel: "Agenten-Zuverlässigkeit",
      },
      {
        q: "Arbeitest du mit offenen Modellen, oder nur mit gehosteten APIs wie OpenAI?",
        a: "Beides. Gehostete APIs sind oft der schnellste Start. Wenn Daten in eurer Infra bleiben müssen, Token-Kosten nicht skalieren oder ihr Vendor-Lock-in vermeiden wollt, baue ich auf offenen Modellen wie Llama, Mistral oder Qwen, self-hosted auf Infra, die ihr kontrolliert. Ich betreibe offene Modelle heute in Produktion. Das ist nicht theoretisch.",
        moreHref: "/de/corporate-llm/",
        moreLabel: "Corporate LLM",
      },
      {
        q: "Was ist ein „Corporate LLM“?",
        a: "Ein Unternehmens-LLM-Stack unter euren Regeln: private oder offene Modelle, RAG über eure Daten, Zugriffskontrolle, Kostenlimits und Ops. Kein Consumer-Chatbot an Slack geklebt. Wenn ihr eine gemeinsame interne Plattform braucht statt eines Produktfeatures, ist das das Corporate-LLM-Engagement.",
        moreHref: "/de/corporate-llm/",
        moreLabel: "Corporate LLM",
      },
      {
        q: "Berätst du nur, oder schreibst du auch Code?",
        a: "Zum Engagement gehört Code. Ich arbeite in eurem Repository, nicht von außen, und bleibe dabei, um zu betreiben, was wir shippen. Je nach Engagement: Implementation, Architecture Reviews, Production Debugging und laufende Reliability.",
      },
      {
        q: "Wie entscheidest du, ob ein Unternehmen wirklich KI braucht?",
        a: "Nicht jedes Problem braucht KI, und nicht jede KI braucht einen Agenten. Ich starte beim Use Case: welches Problem löst ihr, und ändert KI das Ergebnis genug, um den Betrieb zu rechtfertigen? Die meisten KI-Fehler sind Framing-Fehler. Die Technik ist selten der harte Teil. Der Readiness & Production Audit beantwortet das, bevor Build-Arbeit startet.",
      },
      {
        q: "Was ist der „EU-AI-Act-Check“ im Readiness Audit?",
        a: "Er ist Teil des Readiness & Production Audits. Ich prüfe, ob ein geplantes KI-System unter den Act fällt, welche Risikokategorie gilt und welche Pflichten daraus folgen. Dazu Datenschutz und Governance, skaliert auf eure Größe und Nutzung. Bei Live-Systemen bewertet der Reliability Retainer das nach, wenn Regeln und Nutzung sich ändern.",
        moreHref: "/de/eu-ai-act-readiness/",
        moreLabel: "EU-AI-Act-Readiness",
      },
      {
        q: "Mit welchem Engagement sollte ich starten?",
        a: "Unklar, ob KI der richtige Schritt ist? Start mit dem Readiness & Production Audit: fester Scope, Use-Case-Shortlist, ehrlicher Build/Buy/Skip und Kostenmodell. Braucht ihr eine unternehmensweite LLM-Plattform? Corporate LLM. Wisst ihr schon, was als Produkt gebaut wird? Build Sprint. Schon geshipped? Der Reliability Retainer hält es am Laufen.",
        moreHref: "/services/readiness-audit/",
        moreLabel: "Readiness & Production Audit",
      },
      {
        q: "Wo sitzt du, und arbeitest du remote?",
        a: "Ich sitze in Berlin und lebe hier seit 2007. Ich arbeite mit Startups und wachsenden Unternehmen unabhängig vom Standort. Mail an contact@larsullrich.de. Ich lese jede Nachricht persönlich und antworte meist innerhalb eines Tages.",
      },
    ],
  },
  contact: {
    displayLine1: "Lass uns",
    displayLine2: "reden.",
    intro:
      "Schreib mir, was ihr baut und wo es hakt. Wenn ich der Richtige bin, sage ich das. Wenn nicht, auch.",
    noteStart: "Bester Start für die meisten Teams:",
    noteAudit: "Readiness & Production Audit",
    noteAuditSuffix: "(fester Scope, 1-2 Wochen).",
    availability:
      "Aktuell offen für AI-Readiness-Audits, Corporate-LLM-Builds, Agenten- und Production-Builds, Reliability-Retainer und Fractional CTO/CAIO.",
    form: {
      name: "Name",
      namePh: "Dein voller Name",
      email: "E-Mail",
      emailPh: "deine@email.com",
      subject: "Betreff",
      subjectPh: "Worum geht es?",
      message: "Nachricht",
      messagePh: "Was baut ihr, und wo hängt es?",
      submit: "Scope-Call anfragen",
      sending: "Senden...",
      tryAgain: "Nochmal versuchen",
      error: "Etwas ist schiefgelaufen. Bitte gleich nochmal versuchen.",
      errName: "Name ist Pflicht",
      errEmail: "E-Mail ist Pflicht",
      errEmailInvalid: "Bitte eine gültige E-Mail eingeben",
      errSubject: "Betreff ist Pflicht",
      errMessage: "Nachricht ist Pflicht",
      errMessageShort: "Mindestens 10 Zeichen",
      successTitle: "Nachricht gesendet",
      successBody:
        "Danke. Ich lese jede Nachricht persönlich und antworte meist innerhalb eines Tages.",
      close: "Schließen",
      closesIn: "Schließt in",
    },
    footer: {
      tagline:
        "Production AI und Agenten. Gebaut zum Shippen, und zum Weiterlaufen.",
      work: "Arbeit",
      notes: "Notizen",
      about: "About",
      copyright: "Alle Rechte vorbehalten.",
      navLabel: "Footer-Navigation",
    },
  },
};

const byLang: Record<LandingLang, LandingCopy> = { en, de };

export function landingCopy(lang: LandingLang = "en"): LandingCopy {
  return byLang[lang];
}

export function landingHomeHref(lang: LandingLang): string {
  return lang === "de" ? "/de/" : "/";
}

export function landingNotesHref(lang: LandingLang): string {
  return lang === "de" ? "/de/notizen/" : "/notes/";
}

export function landingWorkIndexHref(lang: LandingLang): string {
  return lang === "de" ? "/de/arbeit/muster/" : "/work/patterns/";
}

export function landingImpressumHref(lang: LandingLang): string {
  return lang === "de" ? "/de/impressum/" : "/impressum/";
}

export function landingLocaleSwitchHref(lang: LandingLang): string {
  return lang === "de" ? "/" : "/de/";
}

/** Audit product page is EN-only for now; both locales link here. */
export function landingAuditHref(_lang: LandingLang = "en"): string {
  return "/services/readiness-audit/";
}

export function landingSectionHref(
  lang: LandingLang,
  key: keyof LandingIds,
): string {
  const ids = landingCopy(lang).ids;
  const home = landingHomeHref(lang);
  return `${home}#${ids[key]}`;
}
