# Landing Page Copy

All user-facing wording on the landing page (`/`), organized by section in page order.

> **Source:** `src/pages/index.astro` and its components.  
> **Last extracted:** 2026-06-27

---

## Page meta & SEO

**Browser title**

> Lars Ullrich - Production-grade AI, Full-Stack Engineer & Fractional CTO

**Meta description**

> I help startups and growing companies turn AI from prototype into production - systems that ship, scale, and stay reliable. Full-stack engineer and fractional CTO/CAIO, with two decades of real-time and creative engineering.

**Structured data (summary)**

- **Person:** Lars Ullrich — Fractional CTO / CAIO & Full-Stack AI Engineer
- **Job title (schema):** Fractional CTO / CAIO & Full-Stack AI Engineer
- **Email:** contact@larsullrich.de
- **Location:** Berlin, DE
- **Knows about:** AI systems & ML, RAG / agents / automation, Real-time graphics & GPU, Audio engineering & DSP, Product architecture
- **Service catalog:** Readiness & Production Audit, Build Sprint, Fractional CTO / CAIO

---

## 1. Navigation & Hero

*Component: `Cover.astro`*

### Navigation

| Element | Copy |
|---------|------|
| Logo | LARS ULLRICH |
| Descriptor | Production-grade AI · Full-Stack Engineer & Fractional CTO |
| Nav link | What I Do |
| Nav link | Method |
| Nav link | Services |
| Nav link | About |
| Nav link | Contact |
| Menu button (closed) | Open menu |
| Menu button (open) | Close menu |

### Hero

**Headline**

> Turning prototype into production

**Body**

> I help startups and growing companies get AI into production - and keep it there. The work is technical: architecture, implementation, and the reliability engineering that keeps a system running after launch.

**CTAs**

| Button | Copy |
|--------|------|
| Primary | Start a conversation |
| Secondary | See how I work |

---

## 2. What I Do

*Component: `WhatIDo.astro` · Section ID: `#what-i-do`*

### Intro

**Statement**

> For teams adopting AI, I own the technical decisions from the first use case to a production system: what to build, what to buy, what it costs to run, and who maintains it after launch. Strategy when you need it - and the engineering when you need that too.

**Supporting line**

> Real-time audio, live performance, GPU pipelines, industrial robotics - systems where there's no second take. That's the standard I bring to AI in production.

### Three beats

#### Find the right use case

> Not every problem needs AI, and not every AI needs a custom model. I help you pick the few use cases that pay for themselves.

#### Build the system

> RAG, agents, automation - and the applications and integrations around them, architected for reliability, observability, and cost control.

#### Implementation, not just advice

> The engagement includes code, architecture reviews, and production debugging. I work in the repository with the team, not from the outside.

---

## 3. Method

*Component: `Perspective.astro` · Section ID: `#method`*

### Header

**Headline**

> Signal to system -  
> a method,  
> not a guess.

**Subhead**

> What it takes to move from a working demo to a system you can run.

### Method steps

| # | Title | Body |
|---|-------|------|
| 01 | Tune in | Understand the real problem, the data, and the constraints before touching a model. Most AI failures are framing failures. |
| 02 | Compose the architecture | Choose the right tools - often RAG and agents over custom models - and design for reliability, cost, and the team that inherits it. |
| 03 | Ship and harden | Get it live, then make it dependable: monitoring, guardrails, human-in-the-loop, and clear ownership. |
| 04 | Adopt responsibly | Governance that fits your size - data protection, EU AI Act readiness, and transparent decisions, without slowing you down. |

### Readiness scorecard

**Title**

> Readiness scorecard

**Context**

> A typical first engagement, scored across the four dimensions where production AI usually breaks. Most teams arrive strong on framing and weak on production readiness.

| Dimension | Weight | Score |
|-----------|--------|-------|
| Problem framing | 35% | 7 / 10 |
| Stack & architecture | 30% | 6 / 10 |
| Production readiness | 25% | 4 / 10 |
| Governance | 10% | 3 / 10 |

### Closing statement

> The stages got smaller.  
> **The systems got larger. The instinct stayed the same.**

---

## 4. Services

*Component: `Services.astro` · Section ID: `#services`*

### Header

**Headline**

> Diagnose.  
> Build.  
> Lead.

**Subhead**

> A focused audit, one system shipped to production, or embedded technical leadership - pick the depth you need.

### Service 1 — Readiness & Production Audit

| Field | Copy |
|-------|------|
| Category | Strategy |
| Format | Fixed scope |
| Description | A focused review of your product, data, and stack - where AI fits, where it doesn't, and what it takes to run in production. You get a prioritized use-case shortlist, an honest build/buy/skip call, and a clear path forward. |
| Tags | Use-case mapping · Build vs buy · Risk & EU AI Act check · Cost model |

### Service 2 — Build Sprint

| Field | Copy |
|-------|------|
| Category | Full-Stack |
| Format | Project |
| Description | One system, shipped to production: the application, the infrastructure, and the AI that runs inside it. Implementation and deployment included - not a prototype that stops at the demo. |
| Tags | Frontend to infra · Python & TypeScript · RAG & agents · Monitoring & guardrails |

### Service 3 — Fractional CTO / CAIO

| Field | Copy |
|-------|------|
| Category | Leadership |
| Format | Monthly |
| Description | Senior technical leadership without the full-time hire: architecture, delivery, code review, and AI strategy. The role stays technical, not purely advisory. |
| Tags | Architecture & roadmap · Team & vendor selection · Delivery ownership · Board-level reporting |

---

## 5. Clients

*Component: `Clients.astro`*

**Section label**

> Who I've worked with

**Brand names (marquee)**

SONY · PORSCHE · BMW · ARRI MEDIA · KORG · MICROPSI INDUSTRIES · CORPUS.MUSIC · THEATER DORTMUND · OPER DORTMUND · ECM RECORDS · AMP SOUND BRANDING · BERLINER FESTSPIELE · SILEX INVESTMENT

---

## 6. About

*Component: `About.astro` · Section ID: `#about`*

### Lead

> An engineer and technical leader with twenty years across art, sound, and code - now helping companies put AI into production and keep it there.

### Bio

> I grew up between Germany and Spain, studied in London, and have been based in Berlin since 2007. The first decade was real-time audiovisual work - graphics, audio tools, and interactive installations for galleries, opera houses, and electronic music stages. The second decade brought that into startups: leading engineering teams, owning product and architecture, and shipping custom software and AI systems. Today I do that for teams that need senior technical depth without a full-time hire - architecture and strategy, but also the implementation.

### Disciplines

- Fractional CTO / CAIO
- AI Systems & Machine Learning
- RAG, Agents & Automation
- Real-Time Graphics & GPU
- Audio Engineering & DSP
- Product Architecture

### Stack

| Category | Technologies |
|----------|--------------|
| Languages | Python, TypeScript, JavaScript, C, C++, C#, Java, Rust, Lua, GLSL |
| AI / ML | PyTorch, LangChain, LlamaIndex, OpenAI API, Anthropic Claude, RAG pipelines, Hugging Face |
| Infrastructure | Docker, GitHub Actions, PostgreSQL, Redis, pgvector / Pinecone, Supabase, Hetzner |
| Scale & Ops | Nginx, Kubernetes, Terraform, Ansible, Cloudflare, Kafka, RabbitMQ, AWS, GCP, Grafana |
| Web & Real-time | React, Next.js, Astro, Three.js, WebGL2, WebAssembly, Web Audio API |
| Creative Tech | TouchDesigner, vvvv, Max/MSP, Unity, Processing, JUCE, OpenFrameworks |

### Sidebar meta

| Label | Value |
|-------|-------|
| Location | Berlin, DE |
| Coordinates | 52°31′ N · 13°23′ E |
| Open to | AI readiness & production audits |
| | AI build sprints |
| | Fractional CTO / CAIO |

---

## 7. FAQ

*Component: `FAQ.astro` · Section ID: `#faq`*

**Headline**

> Questions,  
> answered.

### Q&A

**What does a fractional CTO / CAIO actually do?**

> A fractional CTO or CAIO provides senior technical leadership on a part-time or project basis — architecture, roadmap, delivery ownership, team and vendor selection, and AI strategy. The role stays technical throughout, not purely advisory. In practice that means code reviews, architecture decisions, and production debugging alongside the team, without the overhead of a full-time hire.

**Do you only advise, or do you also write the code?**

> The engagement includes code. Lars works inside the repository with the team — not from the outside. Depending on the engagement type, the work spans implementation, architecture reviews, and production debugging. Strategy when you need it, and the engineering when you need that too.

**How do you decide whether a company actually needs AI?**

> Not every problem needs AI, and not every AI needs a custom model. The starting point is always the use case: what problem are you actually solving, and does AI change the outcome in a meaningful way? Most AI failures are framing failures — the technology is rarely the hard part. The Readiness & Production Audit is designed to answer this question before any build work begins.

**What is the "EU AI Act check" in the readiness audit?**

> The EU AI Act check is part of the Readiness & Production Audit. It assesses whether a proposed AI system falls under the Act's scope, which risk category it belongs to, and what compliance obligations that creates. The audit also covers data protection and governance considerations, scaled to the company's size and the system's intended use.

**Which engagement should I start with?**

> If you are unsure whether AI is the right move or where to start, the Readiness & Production Audit is the right first step: fixed scope, a prioritized use-case shortlist, an honest build/buy/skip call, and a cost model. If you already know what you want to build, a Build Sprint ships one system to production — application, infrastructure, and the AI inside it.

**Where are you based, and do you work remotely?**

> Lars is based in Berlin, Germany, where he has lived since 2007. He works with startups and growing companies regardless of location. You can reach him at contact@larsullrich.de — he responds within 24 hours.

---

## 8. Contact & Footer

*Component: `Contact.astro` · Section ID: `#contact`*

### Contact block

**Headline**

> Let's  
> Talk.

**Intro**

> Tell me what you're building and where it's stuck. If I'm the right person to help, I'll say so - and if I'm not, I'll tell you that too.

**Email**

> contact@larsullrich.de

**Availability note**

> Currently open to fractional CTO/CAIO engagements, AI strategy advisory, and select production builds. I respond within 24 hours.

### Contact form

| Field | Label | Placeholder |
|-------|-------|-------------|
| Name | Name | Your full name |
| Email | Email | your@email.com |
| Subject | Subject | What is this about? |
| Message | Message | What are you building, and where is it stuck? |

**Submit button states**

| State | Copy |
|-------|------|
| Default | Send Message |
| Loading | Sending... |
| Success | Message Sent |
| Error | Try Again |

**Validation messages**

- Name is required
- Email is required
- Please enter a valid email
- Subject is required
- Message is required
- At least 10 characters

**Error fallback**

> Something went wrong. Email directly: contact@larsullrich.de

### Footer

| Element | Copy |
|---------|------|
| Logo | LARS ULLRICH |
| Tagline | Production-grade AI - built to ship and to keep running. |
| Social link | GitHub |
| Social link | Instagram |
| Social link | LinkedIn |
| Legal link | Impressum |
| Copyright | © 2026 Lars Ullrich. All rights reserved. |

---

## Appendix: Maintenance mode

*Component: `Maintenance.astro` · Shown when `PUBLIC_MAINTENANCE_MODE=true`*

Replaces the full landing page with a simplified contact view.

| Element | Copy |
|---------|------|
| Brand | LARS ULLRICH |
| Tagline | Back soon. |
| Label | - Get in Touch |
| Headline | Something's brewing. Say hello. |
| Descriptor | Production-grade AI · Full-Stack Engineer · Fractional CTO/CAIO |
| Note | The site is temporarily offline for maintenance. Leave a message and I'll get back to you within 24 hours. |

**Form labels & placeholders**

| Field | Label | Placeholder |
|-------|-------|-------------|
| Name | Name | Your full name |
| Email | Email | your.email@example.com |
| Subject | Subject | What's the project? |
| Message | Message | What are you trying to solve? |

**Button & error copy** — same as main contact form (Send Message, Sending..., Message Sent, Try Again, validation messages, error fallback).
