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

### Später (wenn Case Studies freigegeben)

- [ ] Echte Cases in `src/data/work-patterns.ts` eintragen bzw. unter `/work/` erweitern

## Erledigt (Referenz)

- [x] GSC: Indexierung für Haupt-EN/DE-URLs beantragt (Kontingent 2026-07-18)
- [x] Sitemap: `https://larsullrich.de/sitemap-index.xml`
- [x] EN Topic-Cluster + DE-Spiegel + hreflang + Audit-CTAs live

## Notes

- Cloudflare: `is_robots_txt_managed=false`, `ai_training=block`
- robots.txt: `ai-input=yes`, `ai-train=no`; search bots allowed
- EN is primary (`x-default`); DE is mirror under `/de/`
