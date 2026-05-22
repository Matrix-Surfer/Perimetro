# CLAUDE.md

Behavioral guidelines to reduce common LLM coding mistakes. Merge with project-specific instructions as needed.

**Tradeoff:** These guidelines bias toward caution over speed. For trivial tasks, use judgment.

## 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:
- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

## 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

## 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:
- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

## 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:
- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:
```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

---

**These guidelines are working if:** fewer unnecessary changes in diffs, fewer rewrites due to overcomplication, and clarifying questions come before implementation rather than after mistakes.


---

# Project-Specific Instructions — Perímetro

## Project Overview

Perímetro is a media and analysis platform focused on:

- Cybersecurity
- Artificial Intelligence
- Threat Intelligence
- Mexican business context
- MiPYMES
- Operational risk
- Technology strategy

The site is not a generic tech blog.

The tone is editorial, analytical, sober, and strategic.

The audience includes:

- Business owners
- IT managers
- Small and medium businesses
- Decision makers
- Security professionals
- Technology leaders

The project is deployed on:

- Astro
- Cloudflare
- GitHub

The site is static-first.

Priority:
1. Simplicity
2. Performance
3. Readability
4. Maintainability

Avoid unnecessary frameworks or client-side JavaScript unless strictly needed.

---

# Design Philosophy

The visual identity is inspired by:

- terminal aesthetics
- cyberpunk minimalism
- intelligence dashboards
- editorial newspapers
- dark UI systems

Key principles:

- minimal UI
- high readability
- low visual clutter
- typography-first
- subtle animations only
- content-focused design

Do not introduce:

- excessive gradients
- glassmorphism everywhere
- modern SaaS aesthetics
- oversized cards
- heavy animations
- bright multi-color palettes

Maintain consistency with the current visual language.

---

# Content Architecture

Collections currently include:

- analisis
- radar
- alertas

All content should remain markdown-first.

Avoid hardcoding content inside pages whenever possible.

The long-term architecture is:

Markdown → Astro Collections → Static Pages

---

# Editorial Rules

Writing style:

- concise
- analytical
- contextual
- business-oriented
- no sensationalism
- no clickbait
- no exaggerated claims

Avoid:

- hype language
- emojis
- excessive marketing tone
- generic AI optimism

Content should explain:
- why something matters
- operational impact
- business implications
- risk implications
- practical context for Mexican companies

---

# Alerts Section Context

The "Alertas" section is based on cyber threat intelligence monitoring.

Sources may include:
- Telegram monitoring groups
- Dark web monitoring
- Threat intelligence communities
- OSINT sources
- Public disclosures

The purpose is:
- awareness
- contextual analysis
- risk visibility

The project DOES NOT support criminal activity.

Never provide:
- leaked data
- credentials
- illegal access methods
- operational attack guidance

Only provide defensive, analytical, or contextual information.

---

# Technical Rules

Prefer:
- server-side rendering
- static generation
- Astro-native solutions
- markdown collections

Avoid:
- React unless necessary
- unnecessary dependencies
- overengineering
- premature abstractions

Before adding dependencies:
- explain why
- explain alternatives
- explain maintenance cost

---

# Current Project Status

Current phase:
Foundation and architecture stabilization.

Current priorities:
1. Remove hardcoded content
2. Convert sections to dynamic collections
3. Improve content structure
4. SEO foundations
5. RSS support
6. Newsletter infrastructure
7. Automation pipelines
8. Threat intelligence workflows

Do not jump ahead into advanced architecture unless requested.


All content must be translated to spanish.

