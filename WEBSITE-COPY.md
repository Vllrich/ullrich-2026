# Website copy (from source)

Snapshot of user-facing and SEO/legal text as defined in the repo. **Note:** `Projects` (`src/app/components/sections/Projects.tsx`) is not imported on `src/app/page.tsx`; copy below still reflects that component.

---

## SEO & metadata (`src/app/layout.tsx`)

- **Page title:** Lars Ullrich | Senior Full-Stack Engineer & CTO — AI Systems, Architecture & Creative Technology
- **Meta description:** Senior Software Engineer and CTO based in Germany. I design AI-powered systems, architect scalable backends, and build full-stack applications and creative technology experiences for global brands like Porsche, BMW, Audi and Sony.
- **Keywords:** (long comma-separated list in source)
- **Open Graph title / description:** same family as above
- **Open Graph site name:** Lars Ullrich
- **Open Graph image alt:** Lars Ullrich — Senior Full-Stack Engineer & CTO
- **Twitter title:** Lars Ullrich | Senior Full-Stack Engineer & CTO
- **Twitter description:** Senior Software Engineer and CTO based in Germany. Building AI-powered systems, scalable architectures, and creative technology experiences for Porsche, BMW, Sony and more.

## Skip link

- Skip to main content

## JSON-LD (structured data, `layout.tsx`)

Person: name, job titles, description, email `contact@larsullrich.de`, `knowsAbout` / `hasOccupation` strings as in file.

LocalBusiness: description, address, service types, opening hours (Mon–Fri 09:00–18:00), `OfferCatalog` service names and descriptions (Technical Leadership & System Architecture; AI Agents & Intelligent Systems; Full-Stack Web & App Development; GPU & Real-Time Graphics; Audio & DSP Engineering; Interactive & Immersive Installations).

---

## Navigation (`NavBarOptimized.tsx` / desktop motion)

- **Buttons:** CONTACT, MENU
- **Menu items:** 01 Home · 02 What We Do · 03 Code · 04 Innovation · 05 Services · 06 Contact (no Projects link in nav)
- **Social labels:** GitHub, Instagram, Facebook, Mail

---

## Hero (`Hero.tsx`)

- **Eyebrow:** CTO · Product · AI · Creative Technology
- **Headline:** Media. *Systems.* / Engineering.
- **Body:** I've spent twenty years building technology in places where it really had to work — **AI platforms, real-time systems,** live performances in front of thousands.

## Velocity strip (`VelocitySlider.tsx`)

- engineering — product — ai — creative direction — craft

## What I Do (`WhatWeDo.tsx`)

- **Label:** — What I Do
- **Lead:** The hardest problems are never purely technical — they live between what's possible, what's right for the user, and what the team can actually sustain. **Twenty years across engineering, product, and creative direction** has given me a useful perspective on **where things tend to go wrong.**

**Cards (title + subtitle only; longer `description` fields in source are not rendered):**

1. TECHNICAL LEADERSHIP & ARCHITECTURE — Systems that survive contact with reality.
2. PRODUCT OWNERSHIP — Technology without product judgment is expensive noise.
3. AI STRATEGY & INTEGRATION — Knowing what AI should replace, what it should augment, and what must stay human.

## Code / strategic vision (`CodeMeetsCanvas.tsx`)

- AI changes how we build. / **It doesn't change who's responsible for what ships.**
- CTA: Let's Talk

## Innovation / perspective (`Innovation.tsx`)

- **Label:** — Perspective
- **Lead:** Some of the most interesting work I've done didn't fit neatly / **into one discipline.**

**Grid items (title → description on hover):**

1. LIVE / OR NOTHING — Software that ran in front of audiences — opera, theater, large-scale installations. No staging environment, no rollback. You fix it before the curtain or you don't.
2. TWO / SIDES — Twenty years split between writing code and directing creative work. Neither felt like a detour — each made the other more useful.
3. BEFORE / THE WAVE — Training models on performance data and building generative systems before the current AI moment. The problems haven't changed much, just the tools.
4. SMALL / TEAMS — Most of this was built with small teams and tight budgets. That's where you find out what actually matters — and what you can safely skip.

## Services (`Services.tsx`)

- **Label:** — Services
- **Table headers:** Service · Description · Category

**Rows:** title, category, description, tags (as chip list on hover — all strings in source).

## Clients & collaborators marquee (`BrandSlider.tsx`)

- **Section label:** — Clients & Collaborators
- **Scrolling names:** CORPUS.MUSIC • MICROPSI INDUSTRIES • BMW • SONY • PORSCHE • ARRI MEDIA • THEATER DORTMUND • OPER DORTMUND • ECM RECORDS • SILEX INVESTMENT GROUP • ARRI MEDIA • (repeats)

## Projects (`Projects.tsx`)

- **Label:** — Selected Track Record
- **Intro:** My technical leadership didn't start in a boardroom. It started on stages, in studios, and inside machines — where software runs live in front of 2,000 people with no second take. That's where you learn what reliability, performance, and user experience actually mean.

**Selected activities (9 bullets):** as in source (AI music platforms, ML robotics, VR automotive, opera/theater video, spatial audio, DSP tools, robotic installations, product vision, ethical AI licensing).

- **Aside:** Along the way: custom DSP tools, granular synthesis engines, surround systems, pitch trackers, and real-time visual instruments — built in Max/MSP, Processing, Unity, OpenGL, and Java.

**Clients & Collaborators:** Clients: (list) · Collaborators: (list)

## Project cards data (`src/data/projects.js`)

Per project: title, description, type, label — CORPUS, Pixtunes, Micropsi MIRAI, SILEX VR, Theater Dortmund, Einstein on the Beach, The Sound of Porsche (exact strings in file).

## Contact section (`Contact.tsx`)

- **Label:** — Let's Talk
- **Intro:** Tell me what you're building. If it's complex, cross-disciplinary, and high-stakes — that's where I do my best work.
- **Form:** Name, Email, Subject, Message
- **Placeholders:** Your full name · your.email@example.com · What's the project? · What are you trying to solve?
- **Submit states:** Send Message · Sending... · Message Sent · Try Again
- **Error line:** Something went wrong. Email directly: hello@larsullrich.de
- **Column heading:** — Contact

## Contact modal (`ContactModal.tsx`)

- **Label:** — Get In Touch
- **Title:** Let's Work / Together
- **Body:** Currently taking on select engagements — CTO/CPO advisory, AI strategy, and complex technical builds. I respond within 24 hours.
- **Fields:** Name, Email, Subject, Message
- **Placeholders:** Your full name · your@email.com · Subject · Tell me about your project...
- **Validation messages:** Name is required · Email is required · Please enter a valid email · Subject is required · Message is required · Message must be at least 10 characters
- **Submit:** Send Message · Sending... · Sent! · Try Again

## Footer (`Footer.tsx`)

- **Logo title:** LARS ULLRICH
- **Description:** Building technology at the intersection of engineering, product, and creative vision.
- **Menu column:** Home, What We Do, Code, Innovation, Services, Projects, Contact
- **Legal column:** Impressum, Privacy Policy
- **Copyright:** © 2026 Lars Ullrich. All rights reserved.
- **Logo alt (default):** Lars Ullrich Logo

## Impressum modal (`ImpressumModal.tsx`)

- [IMPRESSUM] · Legal / Information · According to § 5 TMG
- Contact Information · Lars Ullrich · contact [at] larsullrich.de
- Tax Information · Tax ID: 31/566/01316
- Responsible for Content · Responsible for content according to § 55 Para. 2 RStV: Lars Ullrich

## Privacy modal (`PrivacyModal.tsx`)

- [PRIVACY POLICY] · Data / Protection · GDPR Compliant • Privacy Policy
- Sections: Data Collection (bullets), Legal Basis, Your Rights (bullets), Data Controller, Data Protection Inquiries
- Last updated: 2025-01-01

## Maintenance page (`src/app/maintenance/page.tsx`)

- **Title (meta):** Under Maintenance — Lars Ullrich
- **Meta description:** The site is currently under maintenance. Back shortly.
- **UI:** larsullrich.de · Under Maintenance · I'm currently making some improvements. The site will be back shortly. · contact@larsullrich.de

## Global error (`src/app/error.tsx`)

- Something went wrong! · We encountered an unexpected error. Please try again. · Try again
