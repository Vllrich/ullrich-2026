# Landing Page Copy

All user-facing wording on the landing page (`/`), organized by section in page order.

> **Source:** `src/pages/index.astro` and its components.  
> **Last revised:** 2026-07-18 (About moved off the landing page to `/about/`; Consult CTA section added. See `AGENTS.md` for the house style.)

---

## Page meta & SEO

**Browser title**

> Lars Ullrich - Production AI, Agent Reliability & Fractional CTO

**Meta description**

> I help growing companies get AI into production, and keep it running. Often agents, often on open models you host yourself. Full-stack engineer and fractional CTO/CAIO, with two decades of engineering behind the work.

**Structured data (summary)**

- **Person:** Lars Ullrich - Fractional CTO / CAIO & Full-Stack AI Engineer
- **Email:** contact@larsullrich.de
- **Location:** Berlin, DE
- **Knows about:** Production AI, agent reliability, AI systems & ML, agents / RAG / automation, AI reliability & evaluation, open-weight & self-hosted models, fractional CTO / CAIO, real-time graphics & GPU, audio engineering & DSP, product architecture
- **Service catalog:** Readiness & Production Audit, Build Sprint, Reliability Retainer, Fractional CTO / CAIO

**Citation surfaces (standalone pages)**

| URL | Purpose |
| --- | --- |
| `/about/` | Entity page: who Lars is |
| `/agent-reliability/` | Definition of agent reliability |
| `/fractional-cto-caio/` | Fractional CTO / CAIO role |
| `/corporate-llm/` | Corporate LLM platform engagement |
| `/de/corporate-llm/` | German mirror |
| `/eu-ai-act-readiness/` | EU AI Act readiness (audit scope) |
| `/work/patterns/` | Anonymized engagement patterns (cases later) |
| `/services/readiness-audit/` | Top-of-funnel audit product page |
| `/de/` … | German mirror for DACH intent |
| `/llms.txt` | Short machine-readable summary |
| `/.well-known/llms-full.txt` | Longer extract for LLMs |

---

## 1. Navigation & Hero

_Component: `Cover.astro`_

### Navigation

| Element    | Copy                                                                     |
| ---------- | ------------------------------------------------------------------------ |
| Logo       | LARS ULLRICH                                                             |
| Descriptor | Agent reliability · Full-Stack Engineer & Fractional CTO                  |
| Nav links  | What I Do · Method · Services · About (`/about/`) · Start (`#consult`) · Contact |

### Hero

**Headline**

> Anyone can build a demo  
> Running it is the job

**Body**

> I help growing companies ship software that holds up in production, and keep it running. AI included, when it earns its place

**CTAs**

| Button    | Copy                 |
| --------- | -------------------- |
| Primary   | Start a conversation |
| Secondary | See how I work       |

---

## 2. What I Do

_Component: `WhatIDo.astro` · Section ID: `#what-i-do`_

### Intro

**Statement**

> I own the technical decisions from first use case to production: what to build, what to buy, what it costs to run, and who operates it after launch. Strategy when you need it, engineering when you need that too.

**Services list**

- Production AI
- Corporate LLM
- Agent reliability
- Full-stack engineering
- Fractional CTO / CAIO

### Three beats

#### Find the right use case

> Not every problem needs AI, and not every AI needs an agent. I help you pick the few use cases that pay for themselves, and rule out the ones that won't.

#### Build the system

> Agents, RAG, automation, and the systems around them. Built for reliability, observability, and a cost you can predict. Hosted, or on open models you control.

#### Build and operate, not just advise

> Code, architecture reviews, production debugging, and staying on to keep it running. I work in your repository, not from the outside.

---

## 3. Method

_Component: `Perspective.astro` · Section ID: `#method`_

### Header

**Headline**

> From signal  
> to system.

**Subhead**

> From a demo that works to a system you can leave running.

### Method steps

| #   | Title                    | Body                                                                                                                                                             |
| --- | ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 01  | Tune in                  | Understand the real problem, the data, and the constraints before writing code or reaching for a model. Most failures are framing failures, not technical ones.  |
| 02  | Compose the architecture | Choose the right stack and shape the system: services, data, and where AI actually earns its place. Design for reliability, cost, and the team that inherits it. |
| 03  | Ship and harden          | Get it live, then make it dependable: tests, monitoring, guardrails, evals where AI is involved, and clear ownership.                                            |
| 04  | Adopt responsibly        | Governance sized to your company: security, data protection, EU AI Act readiness where it applies, decisions you can explain.                                    |

### Readiness scorecard

**Title**

> Readiness scorecard

**Context**

> A typical first engagement, scored across the four dimensions where production systems usually break. Most teams arrive strong on framing and weak on production readiness.

| Dimension            | Weight | Score (/ 10) |
| -------------------- | ------ | ------------ |
| Problem framing      | 35%    | 7            |
| Stack & architecture | 30%    | 6            |
| Production readiness | 25%    | 4            |
| Governance           | 10%    | 3            |

### Closing statement

> The environments change  
> **The standard for shipping doesn't**

---

## 4. Services

_Component: `Services.astro` · Section ID: `#services`_

### Header

**Headline**

> Diagnose  
> Build  
> Run  
> Lead

**Subhead**

> A focused audit, a corporate LLM stack, one system shipped, ongoing reliability, or embedded leadership. Pick the depth you need.

### Service 1 - Readiness & Production Audit

| Field       | Copy                                                                                                                                                                                                                          |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Category    | Strategy                                                                                                                                                                                                                      |
| Format      | Fixed scope · 1-2 weeks                                                                                                                                                                                                       |
| Description | A focused review of your product, data, and stack: where AI fits, where it doesn't, and what it takes to run in production. You leave with a prioritized use-case shortlist, an honest build/buy/skip call, and a cost model. |
| Tags        | Use-case mapping · Agent feasibility · Build vs buy · Risk & EU AI Act check · Cost model                                                                                                                                     |

### Service 2 - Build Sprint

| Field       | Copy                                                                                                                                                               |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Category    | Full-Stack                                                                                                                                                         |
| Format      | Project · 6-10 weeks                                                                                                                                               |
| Description | One system shipped to production: the app, the infrastructure, and the AI inside it. Hosted or on open models you control. Not a prototype that stops at the demo. |
| Tags        | Frontend to infra · Python & TypeScript · Agents & RAG · Open or hosted models · Monitoring & guardrails                                                           |

### Service 3 - Corporate LLM

| Field       | Copy                                                                                                                                                                                                 |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Category    | Platform                                                                                                                                                                                             |
| Format      | Project · 6-12 weeks                                                                                                                                                                                 |
| Description | A company LLM stack you can actually run: private or open models, RAG over your data, access control, cost limits, and ops. Built for internal use under your policies, not a consumer chatbot bolted on. |
| Tags        | Private / open models · RAG over company data · Access & audit trails · Cost & rate limits · EU-ready ops                                                                                            |
| Title link  | [/corporate-llm/](/corporate-llm/)                                                                                                                                                                   |

### Service 4 - Reliability Retainer

| Field       | Copy                                                                                                                                                                                                                 |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Category    | Operations                                                                                                                                                                                                           |
| Format      | Monthly · ongoing                                                                                                                                                                                                    |
| Description | The keep-it-running part, as a standing engagement: evals, monitoring, guardrails, drift checks, incident response, and EU AI Act re-assessment. For teams who already shipped and should not be operating it alone. |
| Tags        | Evals & monitoring · Guardrails · Drift & cost control · Incident response                                                                                                                                           |
| Title link  | [/agent-reliability/](/agent-reliability/)                                                                                                                                                                           |

### Service 5 - Fractional CTO / CAIO

| Field       | Copy                                                                                                                                          |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Category    | Leadership                                                                                                                                    |
| Format      | Monthly retainer                                                                                                                              |
| Description | Senior technical leadership without the full-time hire: architecture, delivery, code review, and AI strategy. Technical, not purely advisory. |
| Tags        | Architecture & roadmap · Team & vendor selection · Delivery ownership · Board-level reporting                                                 |
| Title link  | [/fractional-cto-caio/](/fractional-cto-caio/)                                                                                                 |

---

## 5. Clients

_Component: `Clients.astro`_

**Section label**

> Who I've worked with

**Brand names (marquee)**

SONY · PORSCHE · BMW · ARRI MEDIA · KORG · MICROPSI INDUSTRIES · CORPUS.MUSIC · THEATER DORTMUND · OPER DORTMUND · ECM RECORDS · AMP SOUND BRANDING · BERLINER FESTSPIELE · SILEX INVESTMENT

---

## 6. Consult (CTA)

_Component: `Consult.astro` · Section ID: `#consult`_

Replaces the old landing About block. Full bio, stack, and meta live on [`/about/`](/about/) (`src/pages/about.astro`).

**Headline**

> Not sure  
> where to start?

**Lead**

> Most teams begin with a Readiness & Production Audit. Fixed scope, 1-2 weeks. Clear recommendation before you fund a build.

**Points**

- Use-case shortlist and an honest build / buy / skip call
- Cost model you can take into a decision
- Agent feasibility and EU AI Act check where it applies

**CTAs**

| Element   | Copy                 | Target                         |
| --------- | -------------------- | ------------------------------ |
| Primary   | Start a conversation | `#contact`                     |
| Secondary | Readiness Audit      | `/services/readiness-audit/`   |
| Tertiary  | About                | `/about/`                      |

---

## 6b. About (standalone page)

_Page: `/about/` · `src/pages/about.astro` (not on the landing page)_

### Lead

> I'm an engineer and technical lead based in Berlin. I care most about systems that have to keep working.

### Bio

> I've been building software for about 25 years. I started as a developer, writing apps and the real-time GPU and audio code where a dropped frame is a bug you can hear. A lot of it was for the stage and custom software clients. For years I worked as a creative developer for theater and performance, including with artists like Philip Glass. In startups, that work grew into more than writing code. I took on architecture, started leading small teams, and over time ran engineering as a CTO, building plenty of infrastructure and custom systems along the way.
>
> These days I help companies get AI into production and keep it running. Usually the unglamorous parts: the infra, the plumbing, the custom pieces that don't come in a box. Often agents, often on open models they host themselves. Corporate LLM stacks when the company needs a shared capability under its own policies.

### Disciplines

- Fractional CTO / CAIO
- AI Systems & Machine Learning
- Agents, RAG & Automation
- AI Reliability & Evaluation
- Corporate LLM
- Real-Time Graphics & GPU
- Audio Engineering & DSP
- Product Architecture

### Stack

| Category        | Technologies                                                                                                                                              |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Languages       | Python, TypeScript, JavaScript, C, C++, C#, Rust, GLSL                                                                                                    |
| AI / ML         | PyTorch, LangChain, LlamaIndex, OpenAI & Anthropic APIs, open-weight models (Llama, Mistral, Qwen), vLLM, RAG pipelines, evals & guardrails, Hugging Face |
| Infrastructure  | Docker, GitHub Actions, PostgreSQL, Redis, pgvector / Pinecone, Supabase, Hetzner                                                                         |
| Scale & Ops     | Nginx, Kubernetes, Terraform, Ansible, Cloudflare, Kafka, AWS, GCP, Grafana                                                                               |
| Web & Real-time | React, Next.js, Astro, Three.js, WebGL2, WebAssembly, Web Audio API                                                                                       |
| Creative Tech   | TouchDesigner, vvvv, Max/MSP, Unity, JUCE, OpenFrameworks                                                                                                 |

### Sidebar meta

| Label       | Value                                                                                                                                      |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Location    | Berlin, DE                                                                                                                                 |
| Coordinates | 52°31′ N · 13°23′ E                                                                                                                        |
| Open to     | AI readiness & production audits · Corporate LLM builds · AI & agent build sprints · Reliability retainers · Fractional CTO / CAIO |

---

## 7. FAQ

_Component: `FAQ.astro` · Section ID: `#faq`_

**Headline**

> Questions,  
> answered.

### Q&A

**What does a fractional CTO / CAIO actually do?**

> Senior technical leadership on a part-time or project basis: architecture, roadmap, delivery ownership, team and vendor selection, and AI strategy. The role stays technical, not purely advisory. In practice that means code reviews, architecture decisions, and production debugging alongside the team, without the cost of a full-time hire.
>
> Link: [Fractional CTO / CAIO](/fractional-cto-caio/)

**What do you mean by "agent reliability"?**

> A demo agent and a production agent are different problems. In a demo it answers once, watched by a human. In production it acts on its own, repeatedly, against changing data. The failure modes are looping, hallucinated actions, runaway cost, and silent regressions. Reliability is the work that makes that safe: evals you can trust, guardrails, bounded autonomy, monitoring, and a clear rollback path. It is the part most teams skip.
>
> Link: [Agent reliability](/agent-reliability/)

**Do you work with open models, or only hosted APIs like OpenAI?**

> Both. Hosted APIs are often the fastest start. But when data has to stay in your infrastructure, when per-token cost does not scale, or when you want to avoid vendor lock-in, I build on open models like Llama, Mistral, or Qwen, self-hosted on infrastructure you control. I run open models in production today, so this is not theoretical.
>
> Link: [Corporate LLM](/corporate-llm/)

**What is a "Corporate LLM"?**

> A company LLM stack under your policies: private or open models, RAG over your data, access control, cost limits, and ops. Not a consumer chatbot bolted onto Slack. When the need is a shared internal platform rather than one product feature, that is the Corporate LLM engagement.
>
> Link: [Corporate LLM](/corporate-llm/)

**Do you only advise, or do you also write the code?**

> The engagement includes code. I work inside your repository, not from the outside, and I stay on to operate what we ship. Depending on the engagement, that spans implementation, architecture reviews, production debugging, and ongoing reliability.

**How do you decide whether a company actually needs AI?**

> Not every problem needs AI, and not every AI needs an agent. I start with the use case: what problem are you solving, and does AI change the outcome enough to justify running it? Most AI failures are framing failures. The technology is rarely the hard part. The Readiness & Production Audit answers this before any build work begins.

**What is the "EU AI Act check" in the readiness audit?**

> It is part of the Readiness & Production Audit. I assess whether a proposed AI system falls under the Act's scope, which risk category it lands in, and what compliance obligations that creates. It also covers data protection and governance, scaled to your size and intended use. For live systems, the Reliability Retainer re-assesses this as the rules and your usage change.

**Which engagement should I start with?**

> Unsure whether AI is the right move? Start with the Readiness & Production Audit: fixed scope, a use-case shortlist, an honest build/buy/skip call, and a cost model. Already know what to build? A Build Sprint ships one system to production. Already shipped? The Reliability Retainer keeps it running.

**Where are you based, and do you work remotely?**

> I am based in Berlin and have lived here since 2007. I work with startups and growing companies regardless of location. Email me at contact@larsullrich.de. I read every message personally and usually reply within a day.

---

## 8. Contact & Footer

_Component: `Contact.astro` · Section ID: `#contact`_

### Contact block

**Headline**

> Let's  
> Talk.

**Intro**

> Tell me what you're building and where it's stuck. If I'm the right person to help, I'll say so. If I'm not, I'll tell you that too.

**Availability note**

> Currently open to AI readiness audits, corporate LLM builds, agent and production builds, reliability retainers, and fractional CTO/CAIO engagements.

### Contact form

| Field   | Label   | Placeholder                                   |
| ------- | ------- | --------------------------------------------- |
| Name    | Name    | Your full name                                |
| Email   | Email   | your@email.com                                |
| Subject | Subject | What is this about?                           |
| Message | Message | What are you building, and where is it stuck? |

**Submit button states**

| State   | Copy         |
| ------- | ------------ |
| Default | Send Message |
| Loading | Sending...   |
| Success | Message Sent |
| Error   | Try Again    |

**Validation messages**

- Name is required
- Email is required
- Please enter a valid email
- Subject is required
- Message is required
- At least 10 characters

**Error fallback**

> Something went wrong. Please try again in a moment.

**Success panel (in place of form, same footprint, auto-closes after 15s)**

| Element | Copy                                                                    |
| ------- | ----------------------------------------------------------------------- |
| Title   | Message sent                                                            |
| Body    | Thanks. I read every message personally and usually reply within a day. |
| Button  | Close                                                                   |
| Timer   | Closes in Ns                                                            |

### Footer

| Element      | Copy                                                          |
| ------------ | ------------------------------------------------------------- |
| Logo         | LARS ULLRICH                                                  |
| Tagline      | Production AI and agents. Built to ship, and to keep running. |
| Social links | GitHub · Instagram · LinkedIn                                 |
| Legal link   | Impressum                                                     |
| Copyright    | © 2026 Lars Ullrich. All rights reserved.                     |

---

## Appendix: Maintenance mode

_Component: `Maintenance.astro` · Shown when `PUBLIC_MAINTENANCE_MODE=true`_

Replaces the full landing page with a simplified contact view.

| Element    | Copy                                                                                                                   |
| ---------- | ---------------------------------------------------------------------------------------------------------------------- |
| Brand      | LARS ULLRICH                                                                                                           |
| Tagline    | Back soon.                                                                                                             |
| Label      | - Get in Touch                                                                                                         |
| Headline   | Temporarily offline. The work continues.                                                                               |
| Descriptor | Production AI · Agent reliability · Fractional CTO/CAIO                                                                |
| Note       | The site is offline for maintenance for a short while. Leave a message and I'll get back to you, usually within a day. |

**Form labels & placeholders:** Name (Your full name), Email (your.email@example.com), Subject (What's the project?), Message (What are you trying to solve?).

**Button states:** same as main contact form. **Error fallback:** Something went wrong. Email directly: contact@larsullrich.de
