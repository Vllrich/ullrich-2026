# AGENTS.md

Guidance for AI agents working in this repository.

## Project

Personal site for Lars Ullrich, built with Astro. Positioning: production AI and agent reliability, full-stack engineering, and fractional CTO/CAIO work. Source of truth for wording is `LANDING-PAGE-COPY.md`; the live copy lives in `src/components/*.astro`. Keep the two in sync when changing user-facing text.

## Writing style (all user-facing copy)

This is the house style for the site. Follow it for every headline, body line, button, FAQ answer, and meta description.

### Hard rules

- **No long dashes.** Never use em dashes (`—`) or en dashes (`–`). Use a period, comma, colon, or a plain hyphen (`-`) instead. For ranges write `1-2 weeks`, not `1–2 weeks`. (Middots `·` used as separators are fine.)
- **Short over long.** Default to fewer words. Nobody reads a paragraph in a hero in 2026. Prefer two short sentences over one long one. Cut any clause that doesn't earn its place.
- **Don't over-specify the niche.** The real-time / audio / opera / robotics background is a credibility signal, not the audience. Keep references to it general and brief. Never frame the offer in a way that sounds like it's only for creative, media, or hardware clients. A SaaS or fintech founder must still feel addressed.
- **Concrete, not corporate.** Plain English, active voice, specific nouns. No buzzwords, no marketing filler.
- **First person.** Lars speaks as "I", consistently. Never third person ("Lars does...").
- **No fragile guarantees.** "Usually within a day", not "within 24 hours". Don't promise precise metrics the site can't back up.

### Tone

Confident, technical, honest. Sounds like an engineer who has shipped and operated systems, not a marketing page. State tradeoffs plainly. Don't hype.

### Quick checklist before shipping copy

1. Any `—` or `–`? Replace it.
2. Can this be shorter? Cut it.
3. Does it accidentally sound like it's only for creative/media/hardware clients? Generalize it.
4. First person and consistent?
5. Any unbacked metric or guarantee? Soften it.
