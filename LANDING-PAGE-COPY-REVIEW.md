# Editorial Review — `LANDING-PAGE-COPY.md`

**Reviewer brief:** Senior technology editor / enterprise architect / industry analyst.
**Standard applied:** Would this survive in a respected technology publication? Would a skeptical CTO believe every sentence? Does it read differently from the average SaaS site?

---

## Executive summary

This is well above average. Most of the copy has clearly been written by someone who has actually shipped systems, and a real effort has been made to avoid the usual marketing vocabulary. The buzzword list in the brief barely applies here — I found almost none of the banned phrases.

The remaining problems are subtler and fall into four buckets:

1. **Unsupported quantification.** A scorecard with exact weights and scores, and a "within 24 hours" promise, both assert precision the page can't back up. These are the highest-risk items for a skeptical reader.
2. **A few sentences that still float.** "Systems where there's no second take," "the instinct stayed the same," and parts of the About lead lean on mood rather than fact.
3. **Voice inconsistency.** The page alternates between first person ("I help...") and third person ("Lars works inside the repository..."). A CTO notices this immediately and reads the third-person parts as agency-written.
4. **Missing the one thing a buyer most wants.** There is no evidence layer connecting the impressive client logos (Sony, Porsche, BMW) to the AI-in-production claim. The strongest proof on the page is disconnected from the strongest claim.

Overall section scores (10 = original and credible, 1 = generic marketing):

| Section          | Score | Verdict                                       |
| ---------------- | ----- | --------------------------------------------- |
| Page meta & SEO  | 7     | Solid; description slightly overstuffed       |
| Hero             | 9     | Strong, restrained, specific                  |
| What I Do        | 8     | Good; one floaty supporting line              |
| Method           | 7     | Strong steps; scorecard is a credibility risk |
| Services         | 9     | Concrete and honest; best section on the page |
| Clients          | 6     | Great logos, zero context — wasted proof      |
| About            | 8     | Genuine voice; lead slightly purple           |
| FAQ              | 7     | Useful; voice switches to third person        |
| Contact & Footer | 8     | Confident and human; "24 hours" needs care    |

---

## Section 0 — Page meta & SEO

### Authenticity

The title and description name real, concrete things: "fractional CTO/CAIO," "two decades of real-time and creative engineering." The phrase "turn AI from prototype into production" is the page's actual thesis, not a tagline bolted on for search engines. Good.

### Genericity audit

- _"Lars Ullrich - Production-grade AI, Full-Stack Engineer & Fractional CTO"_ — **9.** Clear, specific, no fluff.
- _"systems that ship, scale, and stay reliable"_ — **6.** This is the one place the meta slips into rhythm-over-substance. A tricolon of verbs ("ship, scale, stay reliable") is exactly the cadence readers associate with generated copy. It says less than the sentence around it.
- _"two decades of real-time and creative engineering"_ — **9.** Specific and unusual; this is the differentiator and it's doing real work.

### Credibility review

"Scale" is the weakest word in the description. The rest of the page is honest about being one senior engineer who works inside a repo — it does not claim to operate hyperscale infrastructure. Promising systems that "scale" in the meta sets an expectation the body deliberately (and wisely) doesn't make. A CTO who reads both will notice the seam.

### Technical depth

The structured-data block is appropriate and complete. "Knows about" reads like a genuine skill graph rather than keyword stuffing.

### Differentiation

The real-time / creative-engineering angle is the differentiator and it surfaces here. Keep it.

### Reader perspective

Fine for a CTO skimming a search result. The description is a touch long and front-loads three claims before the differentiator.

### Rewrite

> **Title:** Lars Ullrich — Production AI, Full-Stack Engineer & Fractional CTO
>
> **Meta description:** I help startups and growing companies get AI past the prototype stage and into production — and keep it running afterward. Full-stack engineer and fractional CTO/CAIO, with two decades of real-time and creative engineering behind the work.

Removes the "ship, scale, stay reliable" cadence and the "scale" overclaim; keeps the differentiator.

---

## Section 1 — Hero

### Authenticity

This is the strongest opening on the page. "I help startups and growing companies get AI into production - and keep it there" is a real, narrow claim. The follow-up — "architecture, implementation, and the reliability engineering that keeps a system running after launch" — names the actual work and signals that the author knows the hard part is post-launch, not the demo. That single insight does more for credibility than any adjective could.

### Genericity audit

- _"Turning prototype into production"_ — **9.** Concrete, owns a real and common failure mode. Could be sharper (see rewrite) but it is not generic.
- _"get AI into production - and keep it there"_ — **10.** The "keep it there" is the credible half most sites omit.
- _"the reliability engineering that keeps a system running after launch"_ — **9.** Names a discipline, not a benefit.

### Credibility review

Nothing here overreaches. The only note: "Turning prototype into production" is now a recognizable category phrase ("POC to production," "demo to prod"). It's true and earned here, but it's no longer surprising. Consider whether the headline can carry a sharper edge while the body keeps the plain statement.

### Technical depth

"Reliability engineering" is the right term and is used correctly. A CTO reads that and assumes the author knows what an SLO and an on-call rotation are. Good signal.

### Differentiation

The hero differentiates on _what happens after the demo works_ — the exact place most AI projects die. That's a defensible position.

### Reader perspective

A CTO or technical founder would keep reading. It sounds like a person, not a deck.

### Rewrite

The body is already strong; I'd leave it almost untouched. Optional headline sharpening:

> **Headline:** Most AI demos never survive production.
> **Subhead/body (unchanged in spirit):** I help startups and growing companies get AI into production — and keep it there. The work is technical: architecture, implementation, and the reliability engineering that keeps a system running after launch.

If you prefer to keep the calmer headline, "Turning prototype into production" is fine — just know it's the one line here that a buyer has seen before.

---

## Section 2 — What I Do

### Authenticity

The intro statement is excellent and specific: "what to build, what to buy, what it costs to run, and who maintains it after launch." Those four clauses are real decisions, and "who maintains it after launch" is the kind of detail only someone who has owned a system in production thinks to mention. The three beats are similarly grounded — "RAG, agents, automation" and "production debugging" are concrete nouns, not categories.

### Genericity audit

- _"I own the technical decisions from the first use case to a production system: what to build, what to buy, what it costs to run, and who maintains it after launch."_ — **10.** This is the model sentence for the whole page.
- _"Strategy when you need it - and the engineering when you need that too."_ — **8.** Good, human, slightly cute. Acceptable.
- _"Real-time audio, live performance, GPU pipelines, industrial robotics - systems where there's no second take. That's the standard I bring to AI in production."_ — **6.** The list of domains is great and specific. But "systems where there's no second take" and "that's the standard I bring" are mood, not mechanism. A CTO will ask: _what_ standard, concretely? Latency budgets? Failure handling? The line gestures at rigor without naming it.
- _"Not every problem needs AI, and not every AI needs a custom model. I help you pick the few use cases that pay for themselves."_ — **9.** Confident, contrarian, credible. "Pay for themselves" implies you'll quantify ROI — make sure the audit actually does.
- _"architected for reliability, observability, and cost control"_ — **8.** Three real engineering concerns, correctly named. Borderline list-cadence but the terms are load-bearing.
- _"I work in the repository with the team, not from the outside."_ — **10.** The single most differentiating sentence on the page. This is what separates the author from a slide-deck consultant.

### Credibility review

"Systems where there's no second take" is the one place this section trades a verifiable claim for atmosphere. The fix isn't to delete the domains (they're the differentiator) — it's to say what the live-performance background actually taught, in engineering terms.

### Technical depth

High. RAG/agents/automation, reliability/observability/cost control, architecture reviews, production debugging — all used correctly. No faking.

### Differentiation

"I work in the repository with the team" plus the real-time/robotics background is a genuine, hard-to-copy position. Lead with it.

### Reader perspective

An engineering manager reads this and thinks "this person has actually been on-call." That's the reaction you want.

### Rewrite

Intro and beats are strong; I'd change only the supporting line:

> **Supporting line:** Real-time audio, live performance, GPU pipelines, industrial robotics — domains where a failure happens in front of an audience or a moving machine, and you don't get to retry. That bias toward graceful failure and tight latency budgets is what I carry into AI systems that have to run unattended.

This keeps the voice and the domains but replaces "no second take / that's the standard" with the actual engineering lesson (graceful failure, latency budgets).

---

## Section 3 — Method

### Authenticity

The four steps are genuinely good. "Most AI failures are framing failures" is a real, opinionated claim that an experienced practitioner would make and defend. "Design for ... the team that inherits it" again shows post-launch thinking. "Human-in-the-loop" and "clear ownership" are operational, not decorative.

### Genericity audit

- _Header: "Signal to system - a method, not a guess."_ — **7.** "Signal to system" is an evocative nod to the audio background and mostly works. "A method, not a guess" is slightly defensive — it argues against an accusation no one made yet. The headline is doing style work; that's fine here, but it's the page's most decorative line.
- _"Understand the real problem, the data, and the constraints before touching a model. Most AI failures are framing failures."_ — **9.** Strong, specific, opinionated.
- _"Choose the right tools - often RAG and agents over custom models - and design for reliability, cost, and the team that inherits it."_ — **9.** The "RAG and agents over custom models" is a real, useful position.
- _"Get it live, then make it dependable: monitoring, guardrails, human-in-the-loop, and clear ownership."_ — **9.** Concrete operational vocabulary.
- _"Governance that fits your size - data protection, EU AI Act readiness, and transparent decisions, without slowing you down."_ — **8.** Good. "Without slowing you down" is a mild reassurance cliché but earns its place by being honest about the tradeoff governance usually imposes.
- _Closing: "The stages got smaller. The systems got larger. The instinct stayed the same."_ — **6.** This is a nice piece of writing and ties the performance background to the engineering one. But "the instinct stayed the same" is a claim about a feeling, not a capability. A skeptical reader files it as a flourish. It's the kind of line that's earned only if the rest of the page has shown the instinct concretely (it mostly has) — so it survives, but it's the softest sentence in the section.

### Credibility review — the scorecard is the problem

This is the single highest-risk element on the entire page.

> | Problem framing | 35% | 7 / 10 |
> | Stack & architecture | 30% | 6 / 10 |
> | Production readiness | 25% | 4 / 10 |
> | Governance | 10% | 3 / 10 |

The weights (35/30/25/10) and the scores (7/6/4/3) assert a level of measurement precision the page never justifies. An enterprise architect will immediately ask:

- Whose project is this? Real, anonymized, or illustrative?
- How is "production readiness" scored 4/10 rather than 3 or 5 — what's the rubric?
- Why is governance weighted exactly 10%? Why not 15%?

If this is a real anonymized engagement, _say so_ and the table becomes powerful evidence. If it's illustrative, the false precision actively hurts — it reads as a designed infographic dressed up as data, which is exactly the "AI-generated / marketing" tell the brief asks to remove. Round numbers presented as measured data are a classic credibility leak.

### Technical depth

The four dimensions are well chosen and the "strong on framing, weak on production readiness" observation is true to life. The depth is real; only the numeric packaging is suspect.

### Differentiation

The method is more credible than most because it dwells on the unglamorous end (hardening, ownership, governance). Keep that emphasis.

### Reader perspective

A CTO trusts steps 01–04. The scorecard makes that same CTO slightly suspicious — the opposite of its intent.

### Rewrite

Steps: keep nearly as-is. I'd soften only the header and closing, and reframe the scorecard.

> **Header:** From signal to system. A method I can show you, not a pitch.
>
> **Scorecard context:** This is a composite of where first engagements typically land, scored across the four dimensions where production AI usually breaks. The pattern is consistent: teams arrive strong on framing and weak on what it takes to run.
>
> **Scorecard rows — relabel scores as ranges, not point values:**
>
> - Problem framing — usually strong
> - Stack & architecture — mixed
> - Production readiness — usually the weak point
> - Governance — rarely addressed yet

If you want to keep numbers, add one line stating they're a composite from real audits and name the rubric ("scored 1–10 on a fixed checklist"). Precision is only an asset when its source is visible.

> **Closing:** The stages got smaller. The systems got larger. **The discipline carried over.**

"Discipline" is more defensible than "instinct" — it implies a transferable practice rather than a vibe.

---

## Section 4 — Services

### Authenticity

Best section on the page. Every description names deliverables, not benefits. "A prioritized use-case shortlist, an honest build/buy/skip call, and a clear path forward" — those are artifacts you can hand over. "Not a prototype that stops at the demo" is a direct, confident dig at the industry norm. "The role stays technical, not purely advisory" preempts the exact objection buyers have about fractional execs.

### Genericity audit

- _Header: "Diagnose. Build. Lead."_ — **9.** Three verbs that map cleanly to the three tiers. Earns its brevity.
- _Subhead: "A focused audit, one system shipped to production, or embedded technical leadership - pick the depth you need."_ — **9.** Clear ladder of commitment. "Pick the depth you need" respects the buyer.
- _Audit description_ — **9.** "where AI fits, where it doesn't" and "build/buy/skip" are honest and specific. "A clear path forward" (last clause) is the one soft phrase — it's the kind of filler the rest of the sentence doesn't need.
- _Build Sprint description_ — **10.** "the application, the infrastructure, and the AI that runs inside it" is precise. "Not a prototype that stops at the demo" is the differentiator restated where it counts.
- _Fractional CTO description_ — **9.** "without the full-time hire" and "stays technical, not purely advisory" are exactly the buyer's concerns, answered.
- _Tags_ throughout — **9.** "Risk & EU AI Act check," "Python & TypeScript," "Board-level reporting" — concrete, scannable, no fluff.

### Credibility review

Two small flags:

1. **No pricing or scope anchor anywhere.** "Fixed scope," "Project," "Monthly" tell format but not size. A serious buyer wants at least an order of magnitude (a week? a quarter? a day rate band?). Omitting it is a defensible choice, but know that the most senior buyers read total price-silence as either "too expensive to list" or "made up per call." A duration range ("typically 1–2 weeks," "6–10 week engagement") would raise credibility without committing to a number.
2. **"pay for themselves" (from What I Do) connects here** — the audit promises a "cost model," which is good. Make sure the audit deliverable list and that earlier ROI claim stay consistent.

### Technical depth

Strong and accurate. "Frontend to infra," "Monitoring & guardrails," "Architecture & roadmap" — the full-stack claim is substantiated by the stack section later, so it holds.

### Differentiation

The three-tier ladder (diagnose → build → lead) with execution included at every level is a clear, credible offer. This section is the page's backbone.

### Reader perspective

A technical founder reads this and knows exactly what they'd be buying. That clarity is rare and valuable.

### Rewrite

Only minor trims; this section is close to publication-ready.

> **Audit description:** A focused review of your product, data, and stack — where AI fits, where it doesn't, and what it takes to run in production. You leave with a prioritized use-case shortlist, an honest build/buy/skip call for each, and a cost model. _(typically 1–2 weeks)_

Dropped "a clear path forward" (the filler) and added a duration anchor. Apply the same duration treatment to Build Sprint and Fractional CTO if you're comfortable committing to ranges.

---

## Section 5 — Clients

### Authenticity

The logos are real and impressive: Sony, Porsche, BMW, ARRI Media, KORG, Micropsi Industries, ECM Records, Berliner Festspiele. This is the strongest _proof_ asset on the entire page.

### Genericity audit

- _"Who I've worked with"_ — **7.** Honest, unpretentious label. Better than "Trusted by" (which would be a banned cliché). Good instinct.
- The marquee itself — **6 as currently used.** Not because the names are weak — because they're presented with zero context, which wastes them.

### Credibility review — the central missed opportunity

Here is the problem an experienced analyst flags instantly:

The page's headline claim is **AI in production**. The proof on display is a list of **brands from automotive, audio, opera, and film** — i.e., the real-time/creative background. There is **no visible bridge** between the two. A skeptical CTO reads "BMW · Porsche · Sony" next to an AI-CTO pitch and thinks one of two things:

1. "Were these AI engagements, or audio/visual work from a previous life being recycled to sell AI?" (credibility risk), or
2. "Impressive — but what did he actually _do_ for them?" (curiosity left unanswered).

A scrolling marquee of logos with no roles attached is, structurally, the same device every agency uses. The names are exceptional; the _treatment_ is generic. Even one line per marquee — or a single sentence framing what these engagements were — converts a logo wall into evidence.

Also worth a compliance check: confirm you have the right to display these marks and that the relationships are accurately characterized (employer vs. client vs. project-via-studio). Misrepresenting a logo relationship is the fastest way to lose a senior buyer's trust if they happen to know someone there — and in Berlin's scene, they might.

### Technical depth

N/A for a logo strip, but the _opportunity_ is to add it: one verb per client ("real-time show control," "audio tooling," "robotics integration") would simultaneously prove range and head off the "is this just recycled" doubt.

### Differentiation

The client list IS the differentiation — almost no AI consultant has shipped for Porsche's and an opera house's stages. Surfacing _what_ the work was would make this the most persuasive section on the page instead of decorative.

### Reader perspective

Right now: "nice logos." With context: "this person operates at a level I want." The gap between those two reactions is one sentence of framing.

### Rewrite

> **Section label:** Where the work has shipped
>
> **Framing line (new, above the marquee):** Two decades of engagements across automotive, audio, film, robotics, and the performing arts — real-time systems, custom tooling, and the production engineering behind them.
>
> _(Optional, highest-impact: attach a one-word discipline to each logo, e.g. PORSCHE — real-time visuals · MICROPSI INDUSTRIES — robotics integration · ECM RECORDS — audio tooling.)_

One framing sentence turns a generic logo wall into the page's best credibility asset.

---

## Section 6 — About

### Authenticity

The bio is genuinely good and clearly autobiographical. "I grew up between Germany and Spain, studied in London, and have been based in Berlin since 2007" is specific, verifiable, and human — exactly the texture that signals a real person. The two-decade arc (real-time AV → startups → fractional) is a coherent, believable career, and "shipping custom software and AI systems" lands because the earlier paragraph earned it.

### Genericity audit

- _Lead: "An engineer and technical leader with twenty years across art, sound, and code - now helping companies put AI into production and keep it there."_ — **7.** "Across art, sound, and code" is a nice triad and mostly true to the bio. But it's the most stylized sentence in the section, and "art, sound, and code" edges toward the lyrical. It works because the bio backs it up — but on its own it's the kind of line that could open a designer's portfolio. Keep, but know it's the soft spot.
- _"The first decade was real-time audiovisual work - graphics, audio tools, and interactive installations for galleries, opera houses, and electronic music stages."_ — **10.** Specific venues and outputs. Excellent.
- _"The second decade brought that into startups: leading engineering teams, owning product and architecture, and shipping custom software and AI systems."_ — **9.** Concrete responsibilities.
- _"Today I do that for teams that need senior technical depth without a full-time hire - architecture and strategy, but also the implementation."_ — **9.** Restates the core positioning cleanly.
- Disciplines / Stack lists — **9.** The stack is detailed and internally consistent (Python/TS, PyTorch/LangChain, Docker/K8s/Terraform, Three.js/WebGL2, TouchDesigner/Max/JUCE). It substantiates both the "AI" and the "real-time" claims. This is the technical evidence the Clients section is missing — good that it's here.

### Credibility review

The stack list is long. A skeptical reader's risk with any long stack list is "claimed familiarity vs. real depth." Eleven languages and ~40 tools invites the question "how deep in each, really?" This is minor because the career arc makes breadth plausible — but consider whether a few of the longer rows could be trimmed to the tools you'd defend in a technical interview. A shorter, fully-defensible list reads as _more_ credible than an exhaustive one.

Specifically: listing Java, C#, Lua, and Rust alongside Python and TypeScript is a breadth flex that a CTO may probe. If you'd genuinely architect a production system in any of them, keep it; if some are "used once," they dilute the strong ones.

### Technical depth

High and consistent. No mismatch between claims and the stack. The pairing of `pgvector / Pinecone` and `RAG pipelines` shows the AI tooling is real, not nominal.

### Differentiation

The art-to-code arc is the differentiator, and About is where it's most fully earned. This section and Services are the two pillars.

### Reader perspective

A CIO or technical founder finishes this and believes the person is real and senior. The only residual doubt is "is the stack breadth genuine depth?" — addressable by trimming.

### Rewrite

Bio is strong; I'd touch only the lead to make it slightly more grounded:

> **Lead:** An engineer and technical leader, twenty years from real-time audiovisual systems to startup architecture — now helping companies put AI into production and keep it running.

Trades "art, sound, and code" (lyrical) for "real-time audiovisual systems to startup architecture" (the actual arc), and "keep it there" → "keep it running" for precision. Optionally trim the Languages and Creative Tech rows to the tools you'd defend under questioning.

---

## Section 7 — FAQ

### Authenticity

The answers are substantive and reuse the page's real positions rather than inventing new ones. "Most AI failures are framing failures - the technology is rarely the hard part" is a genuine, defensible point of view. The EU AI Act answer is specific about mechanism (scope → risk category → compliance obligations), which signals the author actually understands the regulation rather than name-dropping it.

### Genericity audit

- _"A fractional CTO or CAIO provides senior technical leadership on a part-time or project basis..."_ — **8.** Clear, accurate, useful. Slightly textbook but appropriate for an FAQ.
- _"The role stays technical throughout, not purely advisory. In practice that means code reviews, architecture decisions, and production debugging alongside the team..."_ — **9.** "In practice that means" + concrete list is exactly how to answer this well.
- _EU AI Act answer_ — **9.** "whether a proposed AI system falls under the Act's scope, which risk category it belongs to, and what compliance obligations that creates" — precise and correct. This is a strong trust signal for European buyers.
- _"Most AI failures are framing failures — the technology is rarely the hard part."_ — **9.** Strong reuse of the thesis.
- _"he responds within 24 hours" / "responds within 24 hours"_ — **6.** See credibility note. The content is fine; the promise is the risk.

### Credibility review — two flags

1. **Voice switches to third person.** "Lars works inside the repository," "Lars is based in Berlin," "he responds within 24 hours." The rest of the page is first person ("I help," "I own"). This switch is the single clearest "this section may have been written by/for someone else" tell on the page. Technical buyers are unusually sensitive to it because it reads like a PR bio spliced into a personal site. Pick one voice. For a solo practitioner, first person throughout is more credible and more distinctive.
2. **"Responds within 24 hours" appears three times** (FAQ ×1, Contact availability, Maintenance note) and is stated as a guarantee. A repeated, specific SLA you can't always meet is a small but real credibility liability — the first time you reply on day three, the promise inverts. "Usually within a day" or "I read every message and reply personally, usually within a day or two" keeps the warmth without the breakable guarantee.

### Technical depth

The EU AI Act and fractional-role answers both demonstrate real domain knowledge. No faking.

### Differentiation

"The role stays technical, not purely advisory" recurs here and is the right thing to hammer — it's the differentiator against both agencies and traditional fractional execs.

### Reader perspective

Genuinely useful FAQ — it answers buying questions, not invented ones. Fix the voice and a CTO trusts it fully.

### Rewrite (representative — apply the voice/SLA fix throughout)

> **Do you only advise, or do you also write the code?**
> The engagement includes code. I work inside the repository with the team, not from the outside. Depending on the engagement, that spans implementation, architecture reviews, and production debugging — strategy when you need it, and the engineering when you need that too.
>
> **Where are you based, and do you work remotely?**
> I'm based in Berlin and have lived here since 2007, and I work with startups and growing companies regardless of location. Email me at contact@larsullrich.de — I read every message personally and usually reply within a day or two.

---

## Section 8 — Contact & Footer

### Authenticity

The contact intro is the most human moment on the page and it's excellent: "Tell me what you're building and where it's stuck. If I'm the right person to help, I'll say so - and if I'm not, I'll tell you that too." That second sentence — volunteering to disqualify himself — is a real trust move. It's the opposite of marketing, and a senior buyer notices.

### Genericity audit

- _Headline: "Let's Talk."_ — **7.** A near-universal contact CTA. It's fine and unobjectionable, but it's the most generic two words on the page. Not worth fighting over; just noting it isn't differentiated.
- _"Tell me what you're building and where it's stuck. If I'm the right person to help, I'll say so - and if I'm not, I'll tell you that too."_ — **10.** Best closing line on the page. Keep verbatim.
- _"Currently open to fractional CTO/CAIO engagements, AI strategy advisory, and select production builds."_ — **9.** "Select production builds" signals selectivity honestly. Good.
- _"I respond within 24 hours."_ — **6.** Same breakable-SLA note as the FAQ. Soften to "usually within a day."
- _Form placeholder: "What are you building, and where is it stuck?"_ — **9.** Echoes the intro; reinforces the consultative posture in the form itself. Nice detail.
- _Footer tagline: "Production-grade AI - built to ship and to keep running."_ — **8.** Concise and on-message. "Production-grade" is borderline (it's a common SaaS modifier) but the "built to ship and to keep running" half redeems it with the post-launch theme.

### Credibility review

- The "If I'm not, I'll tell you" promise is a _standard the author now has to live up to._ That's good — just be aware it sets an expectation that you'll actually decline misfits. It's a credibility asset only if honored.
- The 24-hour claim is the only thing to soften here.
- Form mechanics (states, validation, error fallback "Email directly: contact@larsullrich.de") are all clean, honest microcopy. The error fallback giving a direct email is a thoughtful, trust-preserving touch.

### Technical depth

Microcopy is professional. The graceful-degradation error message ("Something went wrong. Email directly...") is itself a small demonstration of the reliability mindset the page sells. Quietly on-brand.

### Differentiation

The "I'll tell you if I'm not the right fit" stance differentiates more than any headline could. It's the human equivalent of the "not a prototype that stops at the demo" line — both signal someone confident enough to turn work away.

### Reader perspective

A CTO leaves this section with a clear, low-friction next step and a favorable impression of the person's integrity. Strong finish.

### Rewrite

Keep almost everything. Only the SLA:

> **Availability note:** Currently open to fractional CTO/CAIO engagements, AI strategy advisory, and select production builds. .

---

## Appendix — Maintenance mode

Low stakes (only shown when the site is down), but two quick notes for consistency:

- _"Something's brewing. Say hello."_ — **6.** "Something's brewing" is a generic placeholder-page phrase. Fine for a maintenance screen, but if you want it on-brand, something like "Temporarily offline. The work continues." matches the page's restraint better.
- The 24-hour promise recurs here too — apply the same softening if you change it elsewhere, for consistency.

---

## Consolidated priority fixes

In order of credibility impact:

1. **Reframe or source the Method scorecard.** Either label it a composite from real audits with a stated rubric, or convert exact scores to qualitative ranges. False precision is the page's biggest single risk. _(Section 3)_
2. **Give the Clients logos context.** Add one framing sentence (or a discipline tag per logo) connecting the brands to the work. This converts the page's best proof asset from decoration into evidence, and pre-empts "is this recycled?" _(Section 5)_
3. **Unify voice to first person.** The FAQ and parts of Contact slip into third person ("Lars works...", "he responds..."). For a solo practitioner this is the clearest "agency-written" tell. _(Sections 7, 8)_
4. **Soften the "within 24 hours" guarantee** to "usually within a day," everywhere it appears (FAQ, Contact, Maintenance). A repeated, specific SLA inverts the first time it's missed. _(Sections 7, 8, Appendix)_
5. **Replace mood lines with mechanism.** "Systems where there's no second take" → the actual engineering lesson; "the instinct stayed the same" → "the discipline carried over." _(Sections 2, 3)_
6. **Trim the meta "ship, scale, stay reliable" cadence** and the "scale" overclaim. _(Section 0)_
7. **Optional: add duration/scope anchors to Services** and **trim the stack list** to fully-defensible tools. _(Sections 4, 6)_

## What to protect (do not "improve" these)

- Hero body: "architecture, implementation, and the reliability engineering that keeps a system running after launch."
- What I Do intro: "what to build, what to buy, what it costs to run, and who maintains it after launch."
- "I work in the repository with the team, not from the outside."
- "Not a prototype that stops at the demo."
- "The role stays technical, not purely advisory."
- Contact intro: "If I'm the right person to help, I'll say so - and if I'm not, I'll tell you that too."

These six lines are why the page reads as credible. They are the author's real voice. Every rewrite above is calibrated to sound like the person who wrote _these_ sentences — not to replace them with anything smoother.

---

## Final quality check

- _Would this survive in a respected technology magazine?_ The body copy largely would; the scorecard and the context-free logo wall would draw an editor's pencil. Both are addressed above.
- _Would a skeptical CTO believe every sentence?_ Not quite — the scorecard's precision, the breakable 24-hour SLA, and the third-person FAQ are the three sentences that invite doubt. Everything else holds.
- _Does it read differently from the average SaaS site?_ Yes, materially — the "keep it running," "who maintains it after launch," and "I'll tell you if I'm not the right fit" lines are not on 500 competitor sites.
- _Author's voice preserved?_ Yes. The rewrites trade flourish for mechanism but keep the plain, confident, slightly contrarian tone throughout.
