# Website Copy -- Proposed Changes (v2)
> Register: deskriptiv-technisch + direkt-ehrlich + nuechtern.
> Grundprinzip: die Arbeit beschreiben, nicht die Person bewerten.
> Keine Adjektivketten, keine "I write the code"-Slogans, kein Parallelismus.
> Wo es ein Kontrast braucht, wird er ehrlich benannt (was es IST, was es NICHT ist).

---

## REGISTER-REGELN (gelten fuer alle Aenderungen)

- Subjekt ist die Taetigkeit oder das System, nicht "I ... ich bin gut".
  Statt "I write the code" -> "The engagement includes code."
- Adjektive sparsam. Statt "dependable, cost-aware, genuinely useful"
  -> Zustaende/Taetigkeiten: "runs in production, costs are modeled,
  the team can maintain it."
- Kontraste ehrlich, nicht werblich. "not a prototype that stops at the demo"
  statt "built to truly deliver value".
- "I" darf vorkommen -- aber als Beschreibung dessen was passiert, nicht als
  Versprechen. Hoechstens 1x pro Abschnitt prominent.

---

## AENDERUNG 1: Hands-on konkretisieren (deskriptiv)

### 1a -- Hero Body (Cover.astro)

AKTUELL:
  I help startups and growing companies ship AI that actually works: real-time
  systems, automation, and custom AI built to scale and stay reliable. Twenty
  years building technology where failure was never an option.

VORSCHLAG:
  I help startups and growing companies move AI from prototype to production.
  The work is technical: architecture, implementation, and the reliability
  engineering that keeps a system running after launch. Twenty years building
  software where downtime had consequences.

NOTIZ:
  "move AI from prototype to production" = die Taetigkeit, kein Claim.
  "downtime had consequences" ist konkreter und nuechterner als "failure was
  never an option" (das war leicht pathetisch). Falls zu trocken: der alte
  Schluss-Satz kann bleiben.

---

### 1b -- WhatIDo Beat 3 (WhatIDo.astro)

AKTUELL:
  Title: Own the outcome
  Body: As an embedded technical lead I carry the result, not just the
  deliverable -- architecture, team, delivery, and what happens after launch.

VORSCHLAG:
  Title: Implementation, not just advice
  Body: The engagement includes code, architecture reviews, and production
  debugging. I work in the repository with the team, not from the outside.

NOTIZ:
  Title benennt direkt den Unterschied (ehrlich-direkt). Body beschreibt die
  Taetigkeit (code, reviews, debugging) statt eine Rolle zu behaupten
  ("embedded technical lead"). "not from the outside" ist der ehrliche Kontrast.

---

### 1c -- Services: Fractional CTO / CAIO (Services.astro)

AKTUELL:
  Embedded senior technical leadership without the full-time hire.
  Architecture, AI strategy, team, and delivery -- I own the outcome alongside
  you.

VORSCHLAG:
  Senior technical leadership without the full-time hire: architecture,
  AI strategy, code review, and delivery. The role stays technical, not
  purely advisory.

NOTIZ:
  "in the code and in the room" ist raus (war hochnaesig/Parallelismus).
  Ersetzt durch die nuechterne Aufzaehlung der Taetigkeiten + ehrlicher
  Kontrast "not purely advisory".

---

### 1d -- Services: AI Build Sprint (Services.astro)

AKTUELL:
  Hands-on delivery of one high-value AI system -- a RAG assistant, an agent
  workflow, or an automation -- built to run in production, not just to demo.

VORSCHLAG:
  One AI system, built to run in production: a RAG pipeline, an agent workflow,
  or an automation. Includes implementation, infrastructure, and deployment --
  not a prototype that stops at the demo.

NOTIZ:
  Kein "I build ... with you" mehr (war zu viel "I"). Subjekt ist das System.
  "Includes implementation, infrastructure, and deployment" = die Taetigkeit
  benannt. Der ehrliche Kontrast bleibt am Ende.

---

### 1e -- About Prose, letzter Satz (About.astro)

AKTUELL:
  ...Today I work as a fractional CTO/CAIO and hands-on builder -- the kind of
  technical foundation that lets small companies move faster than they should
  be able to, without breaking in production.

VORSCHLAG:
  ...Today I work as a fractional CTO/CAIO for teams that need senior technical
  depth without a full-time hire -- architecture and strategy, but also the
  implementation.

NOTIZ:
  "still in the terminal" ist raus (war zu cute). Der ehrliche Punkt steht am
  Ende nuechtern: "but also the implementation" -- das ist das Hands-on-Signal,
  ohne Slogan.

---

## AENDERUNG 2: Tech Stack / Tools

### Wo

Block am Ende der About-Section, unter der Disciplines-Liste, getrennt durch
einen Border-Top. Diskret, gleiche Typografie wie disciplines. Keine Skill-Bars,
keine Prozente, keine Sterne.

### Label

"STACK" (uppercase meta-label, gleicher Stil wie "Open to" in der Sidebar).
Kein Satz wie "Here are my skills" -- nur das Label und die Liste.

### Inhalt (Lars bitte gegenlesen / kuerzen)

Sortierung: was am meisten genutzt wird, vorne.

  Languages       Python, TypeScript, JavaScript, GLSL
  AI / ML         PyTorch, LangChain, LlamaIndex, OpenAI API, Anthropic Claude,
                  RAG pipelines, Hugging Face
  Infrastructure  Docker, GitHub Actions, PostgreSQL, Redis, pgvector / Pinecone,
                  Supabase, Hetzner
  Web & Real-time React, Next.js, Astro, WebGL2, Web Audio API

NOTIZ ZUR HALTUNG:
  Der Stack ist deskriptiv per Definition -- er behauptet nichts, er listet.
  Genau das passende Register. Nur aufnehmen was wirklich vertraut ist;
  eine ehrliche kurze Liste wirkt staerker als eine lange vollstaendige.

### Komponenten-Aenderung (About.astro)

Neues Datenobjekt nach "disciplines":

  const stack = [
    { cat: 'Languages',      items: ['Python', 'TypeScript', 'JavaScript', 'GLSL'] },
    { cat: 'AI / ML',        items: ['PyTorch', 'LangChain', 'LlamaIndex', 'OpenAI API', 'Anthropic Claude', 'RAG pipelines', 'Hugging Face'] },
    { cat: 'Infrastructure', items: ['Docker', 'GitHub Actions', 'PostgreSQL', 'Redis', 'pgvector / Pinecone', 'Supabase', 'Hetzner'] },
    { cat: 'Web & Real-time',items: ['React', 'Next.js', 'Astro', 'WebGL2', 'Web Audio API'] },
  ];

Darstellung pro Zeile:

  <div class="stack-row">
    <span class="stack-cat">Languages</span>
    <span class="stack-items">Python, TypeScript, JavaScript, GLSL</span>
  </div>

---

## ZUSAMMENFASSUNG

| Location | Was aendert sich | Register-Effekt |
|---|---|---|
| Hero body | "move AI from prototype to production" + reliability engineering | deskriptiv |
| WhatIDo Beat 3 | Title "Implementation, not just advice" / Taetigkeiten benannt | direkt-ehrlich |
| Services: Frac. CTO | Taetigkeitsliste + "not purely advisory" | nuechtern + ehrlich |
| Services: Build Sprint | System als Subjekt + "not a prototype that stops at the demo" | deskriptiv + ehrlich |
| About (letzter Satz) | "but also the implementation" | nuechtern |
| About: neuer Block | Tech Stack (4 Kategorien) | deskriptiv (listet) |

### Unveraendert

- Method (Perspective.astro) -- schon im Zielregister.
- Work -- evidenzbasiert, spricht fuer sich.
- Contact, Navigation, Footer.
- About Lead + Prosa (ausser letzter Satz).

### Optionaler Folgeschritt (separat zu entscheiden)

Wenn die ganze Seite konsequent nuechterner werden soll, waeren als Naechstes
die Adjektivketten dran -- v.a. im WhatIDo-Statement ("dependable, cost-aware,
and genuinely useful"). Das ist nicht Teil dieser zwei Aenderungen, aber der
logische dritte Schritt. Sag Bescheid, dann liste ich die Stellen.
