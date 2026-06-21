# Website Content Review — larsullrich.de

_Editorial review against the standards of a CTO / software developer / innovation architect / creative technologist. Audience assumed: intelligent, technically literate, impatient._

Scope reviewed: meta/SEO (`Layout.astro`), navigation + hero (`Cover.astro`), `WhatIDo.astro`, `Perspective.astro` (Method), `Services.astro`, `Clients.astro`, `About.astro`, `Contact.astro`, plus the two unused components `Work.astro` and `Velocity.astro`.

---

## 1. Executive Summary

The writing is already well above average for a personal/consulting site: it has a real voice, avoids most marketing fluff, and the "it has to work the first time" thesis is genuinely differentiating. The problems are concentrated, not pervasive.

The five things that matter most:

1. **Your strongest credibility asset is hidden.** `Work.astro` — the concrete project list (Micropsi/MIRAI, CORPUS, Porsche, ECM, Einstein on the Beach) — is **not imported into the page**. The site instead shows a scrolling logo marquee (`Clients.astro`). You're leading with logos (weak proof) and omitting specifics (strong proof). This is the single highest-impact fix and it's a one-line import, not a writing change.

2. **The fabricated-precision scorecard is a credibility risk.** "Where clients typically score on first engagement" with values like `7.40 / 10` and `3.10 / 10` implies a measured, repeatable assessment instrument you almost certainly don't have. A technical reader will immediately ask "measured how, across what n?" Two-decimal precision on an invented metric undermines the exact credibility the rest of the site earns.

3. **One idea is repeated four times in slightly different words.** "Twenty years where failure wasn't an option" appears as: hero ("downtime had consequences"), WhatIDo ("failure was never an option… work the first time, every time"), Perspective ("no second take"), About ("twenty years"). It's your best line — but said once, hard, it lands; said four times, it reads as a tic.

4. **"Prototype → production" is also overused** across the title, meta description, hero H1, hero body, and WhatIDo. It's a good positioning phrase, but when the same three words appear five times in the first screenful, they stop carrying meaning.

5. **Two small but real trust/correctness bugs:** the displayed contact email (`contact@larsullrich.de`) does not match the address the form actually sends to (`mail@larsullrich.de`), and the nav item labeled **"Method"** links to a section whose heading/identity is **"Perspective"**. Both are cheap to fix and both erode the "everything works" impression you're selling.

---

## 2. Editorial Review (section by section)

### Meta / SEO (`Layout.astro`)
- Description (159 chars) is solid and specific. Minor: "two decades of real-time and creative engineering" + "ship, scale, and stay reliable" is slightly listy. Acceptable for SEO.
- **Inconsistency:** `<title>` uses a hyphen ("Production-grade AI & Fractional CTO"); `og:title` uses an en dash ("–"). Pick one.
- "systems that ship, scale, and stay reliable" is a tricolon that recurs verbatim in the footer. Once is a tagline; twice is filler.

### Hero (`Cover.astro`)
- H1 "Turning prototype into production." — strong, concrete, good. Keep.
- Body: "The work is technical: architecture, implementation, and the reliability engineering that keeps a system running after launch." — excellent, specific, keep.
- "Twenty years building software where downtime had consequences." — good line, but see redundancy note. This is the best home for the "stakes" idea; consider making it the *only* place that uses the abstract framing.
- CTA "Start a conversation" — generic. Everyone says this. "See how I work" (secondary) is better because it's specific. Consider a primary CTA tied to an actual offer (e.g. "Book a readiness audit") since you have productized services.

### What I Do (`WhatIDo.astro`)
- Statement paragraph is strong: "what to build, what to buy, what it costs to run, and who maintains it after launch" is concrete and exactly the CTO framing your audience wants. Keep.
- Sub-paragraph repeats the stakes theme ("failure was never an option… work the first time, every time"). The *list* (real-time audio, live performance, GPU pipelines, industrial robotics) is the valuable part — it's evidence. The framing sentence around it is the redundant part.
- Beat 3 title "Implementation, not just advice" is good positioning. Beat 1 "Not every problem needs AI, and not every AI needs a custom model" is the sharpest line in this section — it signals judgment and restraint, which is rare and credible.

### Method / Perspective (`Perspective.astro`)
- "Signal to system — a method, not a guess." — clever, on-brand for a creative technologist, and it earns its place. Keep.
- The four steps (Tune in / Compose the architecture / Ship and harden / Adopt responsibly) are good. "Most AI failures are framing failures" is a strong, opinionated claim — keep it.
- **Scorecard: the weak point.** "four dimensions that account for nearly every production AI failure" is an unsupported absolute. Combined with invented two-decimal scores, this reads as data theater. Either (a) make it explicitly illustrative ("a typical first-engagement snapshot"), drop decimals, and round to whole numbers, or (b) cut it. Right now it costs more credibility than it buys.
- Closing "The stages got smaller. The systems got larger. The instinct stayed the same." — genuinely good. The art-to-engineering arc is your differentiator; this earns it.

### Services (`Services.astro`)
- The strongest, cleanest section. Three tiers, fixed scope / project / monthly, concrete tags. This is exactly right for an impatient buyer.
- "not a prototype that stops at the demo" reinforces your thesis well.
- "EU AI Act check" / "Risk & EU AI Act check" is a credible, specific, EU-market-relevant differentiator. Good.
- Minor: "Board-level reporting" under Fractional CTO is the only tag that drifts toward generic. Fine to keep.

### Clients (`Clients.astro`)
- "Who I've worked with" + a marquee of SONY, PORSCHE, BMW, ARRI, KORG, etc. **Credibility caveat:** big logos invite the question "in what capacity?" A technical/senior reader is more impressed by *what you did* than *whose logo you can show*. If any of these were indirect (agency, sub-contract, installation vendor), the unqualified logo wall risks overclaiming.
- Recommendation: pair logos with the project specifics from `Work.astro` so the logo is backed by a verifiable deliverable.

### About (`About.astro`)
- "an unusual origin story" — slightly self-congratulatory and generic ("unusual" tells, doesn't show). The actual story (Germany/Spain → London → Berlin; a decade of audiovisual work → a decade of startups) *is* unusual; let it speak. Cut the label.
- "ship AI that actually works" — "that actually works" is a defensive cliché (implies others don't; protests too much). Your specifics already prove this. Cut "actually."
- The bio prose is good and concrete. The stack list is appropriately dense for the audience — keep it long; this reader *wants* to scan it.
- "without a full-time hire" appears in both About and Services. Acceptable (different sections) but be aware.

### Contact (`Contact.astro`)
- "Tell me what you're building and where it's stuck. If I'm the right person to help, I'll say so — and if I'm not, I'll tell you that too." — excellent. Honest, confident, not salesy. Keep verbatim.
- "I respond within 24 hours" — good, concrete commitment.
- **Bug:** displayed address `contact@larsullrich.de` ≠ form's `to_email: mail@larsullrich.de`. Align these.
- Footer "Production-grade AI. Built to ship, scale, and stay reliable." — third appearance of the "ship/scale/reliable" tricolon. Vary or cut.

### Unused components
- `Work.astro` — **import this.** It's your best content. (See Strategic Observations.)
- `Velocity.astro` — "Diagnose · Architect · Build · Harden · Ship" scrolling strip. Decorative; if used, it slightly reinforces the method. Low priority either way.

---

## 3. Rewritten Version

Only sections with meaningful changes are shown. Where a line is already strong, it's kept verbatim and marked _(keep)_.

### Meta description
> Fractional CTO/CAIO and hands-on engineer. I take AI systems from prototype to production — and keep them running after launch. Two decades building real-time software where downtime had consequences.

(Use the same hyphen/en-dash style in `<title>` and `og:title`.)

### Hero
- H1: **Turning prototype into production.** _(keep)_
- Body: _(keep — already tight)_
- Primary CTA: **Book a readiness audit** (or keep "Start a conversation" if you want a low-commitment entry)
- Secondary CTA: **See how I work** _(keep)_

### What I Do
- Statement: _(keep verbatim — it's the best paragraph on the site)_
- Sub (trim the framing, keep the evidence):
> Real-time audio, live performance, GPU pipelines, industrial robotics — twenty years building software where there's no second take. That's the standard I bring to AI in production.

(Note: this becomes the *single* canonical home for the "no second take / stakes" idea. Remove the variants from the hero and Perspective so it lands once.)

### Method / Perspective
- Lead: **Signal to system — a method, not a guess.** _(keep)_
- Steps: _(keep all four)_
- Scorecard context (if kept) — make it honestly illustrative and drop false precision:
> A typical first engagement, scored across the four dimensions where production AI usually breaks. Most teams arrive strong on framing and weak on production readiness.

  And round the numbers: Problem framing **7**, Stack & architecture **6**, Production readiness **4**, Governance **3** (out of 10). If you can't defend a number, don't print it to two decimals.
- Closing: _(keep verbatim)_

### About
- Lead (cut "unusual origin story" and "actually"):
> A CTO and AI builder with twenty years across art, sound, and engineering — now helping companies put AI into production and keep it there.
- Prose: _(keep)_

### Contact
- Intro: _(keep verbatim)_
- Footer line (vary the tricolon):
> Production-grade AI — built to ship and to keep running.

---

## 4. Strategic Observations

**Positioning is clear and defensible.** "Fractional CTO/CAIO who also writes the code, with a real-time/creative-engineering background" is a specific, hard-to-copy position. The art→industry→AI arc is your moat; the site mostly uses it well. Don't dilute it.

**Proof hierarchy is inverted.** You're currently leading your credibility with a logo marquee (weak: "association") and hiding your project list (strong: "here is what I shipped and why it was hard"). Senior/technical buyers discount logos and reward specifics. Importing `Work.astro` and positioning it *above* or *in place of* the logo strip would materially increase trust with exactly the audience you're targeting.

**The credibility budget is being spent in the wrong place.** The whole site argues "I am precise and things work." The invented two-decimal scorecard quietly contradicts that — it's the one element a skeptical engineer can poke and find hollow. Either ground it (real, defensible, rounded) or remove it. Precision you can't defend is more damaging on *this* site than on a generic one, because rigor is your core claim.

**Repetition is the main editorial debt.** Three ideas — "twenty years / stakes," "prototype → production," and "ship, scale, reliable" — carry most of the messaging, and each is stated 3–5 times. The fix isn't to remove them; it's to assign each idea one canonical home and cut the echoes. The content will feel sharper and more confident, not thinner.

**Trust micro-bugs matter disproportionately here.** A mismatched contact email and a nav label ("Method") that doesn't match its destination ("Perspective") are tiny, but on a site whose entire pitch is "everything I build works reliably," they're exactly the details a careful reader notices. Fix the email mismatch, and either rename the section to "Method" or relabel the nav to "Perspective" so language and structure agree.

**UX / reader-time: good.** Scannable, well-structured, services are immediately legible, and the contact ask is honest and low-friction. The 24-hour response commitment and the "I'll tell you if I'm not the right fit" line are trust accelerators — keep them prominent.

**Net:** This is already a strong, voice-driven site that respects the reader. The biggest gains are structural (surface the work, fix the scorecard, de-duplicate the three core phrases) rather than line-level rewriting. Do those four things and the content will fully match the standard it's claiming.
