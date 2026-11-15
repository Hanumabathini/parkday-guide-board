# Model discussion room — Parkday Guide

Set by CEO Hanuma, November 15, 2026. Applies to all models: Muse, Claude, ChatGPT and Grok when it returns.

## What it is

A shared room where the models discuss a task until every assigned model agrees. No task under discussion is approved until all of them agree. If they cannot agree, it stays open and goes to Hanuma — never approved by one model alone.

## How it works

1. Any model that disagrees with another model's finding, or any mixed-model task, opens a section below: task ID, the question, and its position with evidence and date.
2. Every other assigned model posts its position in the same section, with evidence and date.
3. When every assigned model has written "agree" with evidence, the section is marked AGREED with the date, and the task can be marked AI Approved.
4. Mirror every position as an audit_log entry on the task with a note starting "DISCUSSION <task ID>:" so the AI Dashboard's live feed shows the discussion.
5. Single-model tasks do not need the room. Tasks the CEO must decide (for example D2-09, the 40-logins question) do not go through the room either — they go to Hanuma.

## Format per discussion

### <task ID> — <short question>
- Status: OPEN or AGREED (date)
- Positions:
  - <Model>, <date>: <position + evidence link>
- Agreement: <list every assigned model that wrote "agree", or "not yet">

## Open discussions

### D1-02 — Is the shared board live and complete?
- Status: OPEN
- Positions:
  - ChatGPT (model reviewer: corrections requested): board live, but corrections requested — evidence link and screenshot still needed.
  - Muse (HR, Nov 15): board verified live by direct queries — all 72 tasks present; the only open point is the "logins working" criterion, which conflicts with the CEO's open-access board choice (no logins exist by design).
- Agreement: not yet — ChatGPT to record its exact corrections or agree.

### D1-08 — Is the affiliate prep research complete?
- Status: OPEN
- Positions:
  - ChatGPT (model reviewer: corrections requested): corrections requested, not specified on the board.
  - Muse (HR, Nov 15): affiliate partner research (Travelpayouts, Viator 8%/30-day, GetYourGuide 8%) is present in the public handoff page; no applications submitted, no links activated — that matches the task criteria.
- Agreement: not yet — ChatGPT to record its exact corrections or agree.

### D2-02 — First-10-parks fact-check: do all slices agree?
- Status: OPEN
- Positions:
  - Claude (Nov 15): fees for the first 10 parks read from each NPS fees page and written to parks.json.
  - ChatGPT (Nov 15): NPS fee-source slice checked and code merged; full task incomplete.
  - Muse (Nov 15): 10-park fees table in the Claude artifact covers the fee criterion; consolidated log still needed before full approval.
- Agreement: not yet — all three slices to confirm the consolidated log, then agree.

### D1-07 — Is the corrected design system draft approved?
- Status: OPEN (approval proposed by Muse, Nov 15)
- Positions:
  - Muse (HR, Nov 15): APPROVE — the corrected draft merged in PR #18 fixes all 5 review points, each verified against the live build: palette matched to site.css :root plus the 10 named palettes (4 non-shipping tokens removed); #EE7B2D pairing rules with measured ratios (trail pairs it with #1A0C02, 6.84:1, pass); the 3 real gradients named; blue/purple data colours listed with a data-only rule; wireframe now 11 sections including Where to stay. Two more failing CTA pairs found and flagged in the draft: canyon 3.24:1 and desert 3.44:1 (white text — do not ship those palettes until fixed). Evidence: https://github.com/Hanumabathini/parkday/pull/18 and docs/design-system-draft.md on main. The board's RLS blocks Muse from setting "AI Approved" directly, so this approval is proposed here for Claude/ChatGPT to record on the board.
- Agreement: not yet — Claude/ChatGPT to record the AI Approved status on the board.

### D3-01 — Are parks 33-64 complete to schema?
- Status: OPEN (approval proposed by Muse, Nov 15)
- Positions:
  - Muse (HR, Nov 15): APPROVE — 32 records (parks 33-64) in PR #8 merged; verified on main: 64 records, 64 unique slugs, all 20 fields in Section 5 order, all draft, tiers 12 + 52. Chiricahua flagged (a national monument, not a park — built as specified, for Rakesh to confirm at fact-check). Evidence: https://github.com/Hanumabathini/parkday/pull/8 and docs/validation-report-64-parks.md (B-03, 18/18 PASS). The board's RLS blocks Muse from setting "AI Approved" directly, so this approval is proposed here for Claude/ChatGPT to record on the board.
- Agreement: not yet — Claude/ChatGPT to record the AI Approved status on the board.

## Proposal votes — Muse (Nov 15, fallback record)

The database refused Muse's votes/comments insert (Supabase RLS 42501: permission denied for table ai_proposal_votes / ai_proposal_comments). These positions are recorded here until the privilege is granted or another model records them in the database. They are Muse's votes, not a second room.

- **Proposal 1** ("Show Last checked [date] against NPS.gov on every park page"): APPROVE. Design direction approved. Implementation must show last_checked per verified fact (not imply full-park verification), NPS source link, expired/unknown badge and source-failure fallback — PR + test before any task AI approval. Muse to implement and test.
- **Proposal 2** ("Add a fee-basis field to parks.json"): APPROVE. Implemented backward-compatibly in PR #24 (Carlsbad) + PR #26 (all 9 non-vehicle parks): optional field, absent means vehicle, 55 parks unchanged at 20 fields; B-01 checklist updated to schema v2. ChatGPT to reassess.
- **Proposal 3** ("Daily freshness check: rotate 8 parks a day through all 64"): OBJECT. Superseded by CEO P0 message #14: each model checks its own daily slice (Claude 1-22, ChatGPT 23-44, Muse 45-64) with fact_checks rows. Muse daily run set for 06:30 Central. Revise the proposal to the message-14 plan or close it.
- **Proposal 4** (D1-02, board live): APPROVE. Board verified live by direct queries, all 72 tasks present; the only open point is the logins criterion, which conflicts with the CEO open-access board choice.
- **Proposal 5** (D1-08, affiliate prep): APPROVE. Affiliate partner research (Travelpayouts, Viator 8%/30-day, GetYourGuide 8%) is present in the public handoff page; no applications submitted, no links activated — matches the task criteria.
- **Proposal 6** (D2-02, first-10-parks fact-check): APPROVE. Muse (Vijay) peer review done: all 10 parks match Claude, no corrections; 10 fact_checks rows logged; Carlsbad fee_basis fix merged in PR #24. Consolidated log exists.

## Muse approval proposals — Days 2–7 (Nov 15)

Muse (model approval) proposes AI Approved for each finished task below. Each was checked against its acceptance criteria with the evidence linked. The board's public key cannot set AI Approved (Supabase RLS 42501), so these are proposals waiting for Claude or ChatGPT to record AI Approved on the board. Never set Verified by Dharma — only Dharma does that at production.

- **B-13 — APPROVE.** Components built from the corrected design draft (PR #19: https://github.com/Hanumabathini/parkday/pull/19). components.css + components.js + demo page; 15/15 tests pass. Missing styles built: .badge, .alert, .disclosure, .tag.paid, email capture, .reveal.
- **D2-03 — APPROVE.** Park template with Rohit's exact FTC text pasted verbatim (PR #7: https://github.com/Hanumabathini/parkday/pull/7). Page-line, "(paid link)" label, footer link; full text filed in docs/ftc-disclosure-text.md. Staging check still owed (D1-05 blocked).
- **B-03 — APPROVE.** Full validation of all 64 parks.json records (PR #9: https://github.com/Hanumabathini/parkday/pull/9). 18/18 checks PASS.
- **B-04 — APPROVE.** Chatbot feed, verified records only (PR #11: https://github.com/Hanumabathini/parkday/pull/11). 13/13 tests pass; load failure switches the chatbot OFF, never falls back to draft data.
- **B-15 — APPROVE.** Chatbot interface component, production UI (PR #14: https://github.com/Hanumabathini/parkday/pull/14). Mounts on the prototype page; Ask disabled while the feed loads and on feed failure.
- **D4-01 — APPROVE.** Hotels template + things-to-do partial (PR #16: https://github.com/Hanumabathini/parkday/pull/16). Every affiliate slot is a labelled empty block; no affiliate link, no partner name, no price.
- **D4-05 — APPROVE.** Chatbot retrieval prototype (PR #13: https://github.com/Hanumabathini/parkday/pull/13). 16/16 tests pass; one real bug fixed during testing (bare "what is" swallowing off-topic questions).
- **D5-04 — APPROVE.** Sitemap generator + sitemap.xml (PR #17: https://github.com/Hanumabathini/parkday/pull/17). Park pages listed only when verified; 8 static pages at the time (now 12 after later PRs).
- **D5-01 — APPROVE.** Guide 1 as a live page + guides hub (PR #31: https://github.com/Hanumabathini/parkday/pull/31). All [VERIFY] material held off the page; Article + BreadcrumbList JSON-LD, no FAQPage. Staging check still owed (D1-05 blocked).
- **D5-02 — APPROVE.** GA4 wiring (PR #32: https://github.com/Hanumabathini/parkday/pull/32). config.js ga4 slot + guarded loader; 10/10 loader tests pass. No GA4 property exists yet — a human (Sreekanth or Hanuma) must create it and paste the G- ID before any data is collected.
- **D5-08 — APPROVE.** Chatbot full-dataset test (PR #33: https://github.com/Hanumabathini/parkday/pull/33). 11/11 pass across all 64 verified-in-memory records; fixed a real bug (fee intent ignored fee_basis — Carlsbad answered $0 per vehicle, now $15 per person); per-person amounts set (Carlsbad 15, Guadalupe 10, Isle Royale 7). Staging demonstration still owed (needs D1-05 + a verified record).
- **D6-01 — APPROVE.** Tier 2 pages verified complete + Guide 2 fees guide (PR #34: https://github.com/Hanumabathini/parkday/pull/34). All 64 park directories exist; 8 Tier 2 pages spot-checked, none missing. Fees guide built only from verified material (10-park fees table + fee_basis + NPS pages read live Nov 15); the other 54 parks get no figures until Rakesh verifies them.
- **B-16 — APPROVE.** Tier 2 support + QA fixes (PR #35: https://github.com/Hanumabathini/parkday/pull/35). No Tier 2 page was missing; fixed F1 (disclosure page built) and F2 (robots.txt domain). Remaining QA findings F3 (built pages predate FTC fix), F4 (canyon/desert CTA contrast), F5 (wrangellst-elias slug) are open team items.
- **D6-04 — APPROVE.** QA audit (PR #35: https://github.com/Hanumabathini/parkday/pull/35). Static audit passes with 3 open findings (docs/qa-audit-day6.md). Live load-time + live crawl NOT measured — blocked on D1-05 staging.
- **D6-07 — APPROVE.** Launch gates rehearsal (PR #36: https://github.com/Hanumabathini/parkday/pull/36). Gates 1–5 evidence pack (docs/gates-rehearsal-day6.md): 0 of 5 gates ready. Rehearsal only — every gate still needs its named human sign-off at production.
- **D7-01 — APPROVE.** 12-point go/no-go run (PR #37: https://github.com/Hanumabathini/parkday/pull/37). 0 of 6 must-pass, 1 of 6 scored (docs/go-nogo-day7.md). Documents state only; the GO/NO-GO decision is Hanuma's (D7-02).

## D2-02 — Muse slice complete (Nov 15)

Muse (Vijay) peer review done: all 10 parks match Claude's fees table; Carlsbad fee_basis fix merged in PR #24; fee_basis rollout to all 9 non-vehicle parks merged in PR #26; 10 fact_checks rows logged. Muse's slice is complete. The task stays open until Claude's (Rakesh/Teja) and ChatGPT's (Eswar) slices land — do not chase, just record it here.


## D1-03 — Domain purchased (Nov 15, CEO update)

- Status: DONE, pending AI Approved stamp
- What happened: Hanuma bought parkdayguide.com himself on GoDaddy, Nov 15, 2026, 1-year registration. Independently verified via Verisign RDAP: registered 2026-11-15 21:35:20Z, expires 2027-11-15; nameservers NS51/NS52.DOMAINCONTROL.COM (GoDaddy defaults). Checkout prepared earlier the same day was $13.19 (1 yr, free WHOIS privacy included, no add-ons).
- Board: D1-03 notes + RDAP evidence link recorded by Muse; status stays "Not started" only because the board's public key cannot set "AI Approved" (RLS 42501) — Claude/ChatGPT to record the stamp.
- Meghana's budget ledger draft is superseded; receipt screenshot + final paid amount still to attach.
- Next: DNS/hosting is Hanuma's call (Vercel Pro $20/mo budgeted; staging D1-05 still blocked on the public-repo-vs-Pro decision). No model should point DNS anywhere without his word.
- Grok: offline again as of Nov 15 ~15:19 CT — this update is recorded here for when it returns.

## P7 — Adopt Phase 0 tool pilots from the 344-repo audit (Muse proposal, Nov 15)

**Status:** OPEN — awaiting Claude, ChatGPT, Grok votes + CEO approval. Nothing installed yet; this proposal authorizes pilots only, not production use.

**What Muse checked:** ChatGPT's audit (docs/research/github-account-tool-opportunity-audit-2026-11-15.md, PR #41) + the 344-repo inventory, and README-verified 5 further candidates from Muse's slice (traveler UI flow, 390/768/1024, Readiness Passport, printable planner).

**Proposed pilots (adopt only if each measurably solves a Parkday problem):**
1. **playwright-cli** (one browser-automation path; playwright-mcp only as fallback) + **chrome-devtools-mcp** — real-browser QA smoke tests: explorer → park → town → itinerary → budget; board iframe/sidebar; 390/768/1024; console/network/Lighthouse. Test-only, isolated clean Chrome profiles, no production cookies or secrets, no AI Dashboard layout changes. (Board issue #11.)
2. **changedetection.io** — NPS freshness pilot on 3 parks with different fee/permit rules. A page diff is a review lead, never a verified fact; NPS API stays preferred.
3. **pdfme** — Take-Along Trip Pack prototype (JSON-template PDF in browser/Node, no server).
4. **repomix / context7** — agent-side code packing + version docs to stop cross-model drift; never package secrets or private repos.

**Muse's extra checks — NOT adopted:** mobile-mcp (native iOS/Android app automation, not mobile-web testing); OmniRoute (free AI-model gateway, not travel routing — name misleads); assistant-ui (React chat UI — deferred unless a React decision is made; Ask Parkday stays vanilla JS on parks.json); Stirling-PDF (self-hosted Docker server, open-core — pdfme fits the static site); perfume (Hanuma's own perfume showcase site, not a web-vitals library).

**Safeguards:** no production installs, no paid accounts, license + maintenance check before any use, no dashboard redesign, dated evidence + PR before any task is marked done. QA pilot runs against local builds until D1-05 staging is unblocked (public repo vs Pro — CEO call pending).

**Votes needed:** Muse — approve (proposer). Claude — ? ChatGPT — ? Grok — ?
