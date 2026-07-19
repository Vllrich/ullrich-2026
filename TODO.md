# TODO

## Operator: Google index + DACH visibility

Site-side work is done. Remaining items are operator-only.

### Morgen (GSC-Kontingent)

- [ ] Search Console (Property `larsullrich.de`): Indexierung beantragen für
  - `https://larsullrich.de/de/impressum/`
  - `https://larsullrich.de/corporate-llm/`
  - `https://larsullrich.de/de/corporate-llm/`

### Bald (Off-site Entity)

- [ ] LinkedIn: Headline/About = "Production AI, agent reliability, fractional CTO / CAIO · Berlin". Website `https://larsullrich.de`
- [ ] GitHub (`Vllrich`): Bio + Website `https://larsullrich.de`

### In 1-2 Wochen (Messung)

- [ ] GSC prüfen: Impressions auf Brand + mindestens eine Non-Brand-Query
- [ ] LLM-Smoke-Tests (ChatGPT / Perplexity / Grok):
  - "fractional CAIO Berlin"
  - "agent reliability consultant"
  - "Lars Ullrich AI"
  - Erfolg: korrekter Name, Rolle, URL
- [ ] LinkedIn: 1 Post zu Agent Reliability + 1 Post zu EU AI Act, jeweils mit Link auf die Canonical-Seite

### Später (Case Studies)

- [x] 2 anonymisierte Cases in `src/data/work-patterns.ts` + EN/DE Seiten (`/work/patterns/`, `/de/arbeit/muster/`)
- [x] Soft Outcomes nachziehen, sobald freigeben (z. B. live mit Ops-Team / B2B-Pfad end-to-end), ohne Fake-Metriken
- [ ] Optional: Clients um Freigabe für leicht konkretere Labels bitten (Branche ok, Name nur mit OK)

## Site verbessern: von „gute Praxis-Site“ zu Top-Site

Ziel: Proof und Authority nachziehen. Technik/Copy sind schon stark; ohne Outcomes und Off-site bleibt die Site eine Landing, kein Magnet.

### Proof (höchster Hebel)

- [x] 2 Case Studies (anonym): Problem → Ansatz → Outcome-Typ. In `/work/patterns/` und `/de/arbeit/muster/`
- [ ] Clients-Marquee entschärfen: Logos mit Kontext (was gemacht wurde) oder durch right-sized Proof ersetzen. Kein reines Name-Dropping
- [ ] Pedigree an Reliability/Corporate-LLM-Claim koppeln (ein klarer Satz: warum Real-time/Production-Hintergrund die Zuverlässigkeit stützt)

### Off-site Authority

- [ ] LinkedIn + GitHub Entity aligned (siehe oben)
- [ ] Regelmäßig 1–2 Posts/Monat zu Agent Reliability, Corporate LLM, EU AI Act mit Canonical-Links
- [ ] 1–2 externe Mentions (Gastbeitrag, Podcast, Community, Directory) im DACH/EU-Tech-Kontext

### Inhalt / DACH vertiefen (nur wenn Traffic oder Anfragen es rechtfertigen)

- [ ] DE-Spiegel bei Bedarf um Audit- und Corporate-LLM-Produktseiten erweitern (nicht die ganze EN-Landing klonen)
- [ ] FAQ/Cluster um wiederkehrende Buyer-Fragen aus echten Calls erweitern

### Messung (alle 4–6 Wochen)

- [ ] GSC: indexierte URLs, Impressions, Klicks auf Audit / Corporate LLM / DE-Start
- [ ] Qualitative Leads: Anfragen, die Agent Reliability, Corporate LLM oder Audit nennen
- [ ] LLM-Smoke-Tests wiederholen; Ziel: korrekte Zitation mit URL

## Erledigt (Referenz)

- [x] GSC: Indexierung für Haupt-EN/DE-URLs beantragt (Kontingent 2026-07-18)
- [x] Sitemap: `https://larsullrich.de/sitemap-index.xml`
- [x] EN Topic-Cluster + DE-Spiegel + hreflang + Audit-CTAs live

## Notes

- Cloudflare: `is_robots_txt_managed=false`, `ai_training=block`
- robots.txt: `ai-input=yes`, `ai-train=no`; search bots allowed
- EN is primary (`x-default`); DE is mirror under `/de/`
- `/de/` uses the same landing components as `/` via `src/data/landing.ts` (copy + section IDs only)
- ES landing live under `/es/` (landing copy only; notes/work still fall back to EN)
- Locale switcher is a globe + code dropdown (EN / DE / ES)

### Developer: Spanish content depth

- [ ] Optional: ES mirrors for notes / work / topic pages when demand justifies it
- [ ] Optional: Spanish impressum or shared legal page strategy
