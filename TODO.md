# TODO

## Operator: GEO / LLM visibility (after deploy)

- [ ] Search Console (domain property `larsullrich.de`): request indexing for `/about/`, `/agent-reliability/`, `/fractional-cto-caio/`, `/llms.txt`
- [ ] Confirm sitemap lists the new URLs after deploy
- [ ] LinkedIn: align headline/about with site positioning ("Production AI, agent reliability, fractional CTO / CAIO", Berlin). Link `https://larsullrich.de`
- [ ] GitHub profile (`Vllrich`): bio + website URL `https://larsullrich.de`
- [ ] After 1-2 weeks, smoke-test prompts in ChatGPT, Perplexity, Grok:
  - "fractional CAIO Berlin"
  - "agent reliability consultant"
  - "Lars Ullrich AI"
  - Success: correct name, role, and URL cited

## Notes

- Cloudflare: `is_robots_txt_managed=false`, `ai_training=block`, origin `robots.txt` allows search/retrieval bots and signals `ai-input=yes, ai-train=no`
- Training crawlers stay blocked at robots + edge
