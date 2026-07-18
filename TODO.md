# TODO

## Operator: Google index + DACH visibility

### Phase 0 (do now)

- [ ] Search Console (domain property `larsullrich.de`): request indexing for
  - `/`
  - `/about/`
  - `/agent-reliability/`
  - `/fractional-cto-caio/`
  - `/eu-ai-act-readiness/`
  - `/work/patterns/`
  - `/services/readiness-audit/`
  - `/de/`
  - `/de/agenten-zuverlaessigkeit/`
  - `/de/fractional-cto-caio/`
  - `/de/eu-ai-act-readiness/`
  - `/de/impressum/`
- [ ] Confirm sitemap lists EN + DE URLs: `https://larsullrich.de/sitemap-index.xml`
- [ ] LinkedIn: headline/about = "Production AI, agent reliability, fractional CTO / CAIO · Berlin". Website `https://larsullrich.de`
- [ ] GitHub (`Vllrich`): bio + website `https://larsullrich.de`

### After 1-2 weeks

- [ ] GSC: impressions on brand + at least one non-brand query
- [ ] LLM smoke tests: "fractional CAIO Berlin", "agent reliability consultant", "Lars Ullrich AI"
- [ ] LinkedIn: 1 post each on agent reliability and EU AI Act readiness, linking canonical pages

### When case studies are cleared

- [ ] Replace or extend patterns in `src/data/work-patterns.ts` with named (or still anonymous) cases under `/work/`

## Notes

- Cloudflare: `is_robots_txt_managed=false`, `ai_training=block`
- robots.txt: `ai-input=yes`, `ai-train=no`; search bots allowed
- EN is primary (`x-default`); DE is mirror under `/de/`
