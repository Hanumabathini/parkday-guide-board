# Team AI assignments — Parkday Guide

**Current CEO decision: November 15, 2026 — Grok is active again.** Hanuma explicitly restored Grok's original ten team members. The authoritative roster is live Supabase `public.users.ai_agent`; this document explains the decision and its implications.

## Current assignments — 10 members on each model

**Muse — 10 members:** Vishnu, Sai, Raghava, Krishna, Mani, Chaitanya (backup), Abhi (backup), Sreekanth, Rithwick, Vijay.

**Claude — 10 members:** Hanuma, Rohit, Akhil, Rakesh, Teja (backup), Navven, Chandu (backup), Santhosh, Rithesh, Yogi.

**ChatGPT — 10 members:** Dharma, Meghana, Hari, Vinay, Tirumala Rao (backup), KC, Ananth, Suraj, Ajay, Rakhy.

**Grok — 10 restored members:**
- **Lokesh** — UI/UX Designer (transferred from Muse)
- **Koushik** — Photographer (transferred from Muse)
- **Santhan** — Video Producer (transferred from Muse)
- **Sandeep** — RV & Vanlife Specialist (transferred from Claude)
- **Guru** — Digital PR Specialist (transferred from Claude)
- **Avinash** — Short-Form Editor (transferred from Claude)
- **Eswar** — Sponsorships Manager (transferred from ChatGPT)
- **Bittu** — Pinterest Strategist (transferred from ChatGPT)
- **Chakri** — Social Commerce Specialist (transferred from ChatGPT)
- **Muvva** — Community Cultivator (transferred from ChatGPT)

**Total 40 active roster entries, unchanged; all ten original Grok seats restored.** No member records, roles, departments, reporting relationships, task ownership names, status, evidence or production gates were deleted or re-created.

## Reassigned Grok task coverage — twelve existing tasks

The model owning a task's named member changes automatically through Supabase roster mapping. Task owner names stay fixed, so history remains intact.

| Task | Grok contributors | Other assigned models | State at reassignment |
|---|---|---|---|
| D1-07 Design system draft | Lokesh | None | In progress |
| D1-12 Footage, photos, Pinterest | Santhan, Koushik, Bittu | None | In progress |
| D2-02 First ten parks fact-check | Eswar | Claude, Muse | In progress |
| D2-03 Park page layout + FTC | Lokesh | Muse | In progress |
| D2-07 Credential policy and brands | Eswar | ChatGPT, Claude | In progress |
| D3-03 Homepage/directory + logo | Lokesh, Koushik | Muse | In progress |
| D3-04 Guides, RV and fee study | Sandeep, Guru | Claude | In progress |
| D4-04 Q&A, teaser, merch brief | Avinash | Claude, ChatGPT | Not started |
| D4-06 Final parks fact-check | Chakri | Claude, ChatGPT | In progress |
| D5-06 Community, welcome, footage | Muvva, Santhan | ChatGPT | In progress |
| D6-05 About page, photo log, compliance | Koushik | ChatGPT, Claude | In progress |
| D7-03 Conditional GO launch actions | Bittu, Avinash, Muvva | Muse, ChatGPT | Not started |

**Handoff discipline:** Existing Claude/Muse/ChatGPT research and PR evidence remain valid. Grok reads these records, checks its slice, coordinates with the remaining owners, and must not overwrite shared data or falsely approve a whole mixed task after reviewing only one part. Do not activate any conditional launch actions before CEO GO and all six human production gates.

## Historical leave period (for audit trail)

Earlier on November 15, Grok's ten members were distributed temporarily as follows: Muse received Lokesh, Koushik, Santhan (total 13); Claude received Sandeep, Guru, Avinash (total 13); ChatGPT received Eswar, Bittu, Chakri, Muvva (total 14); Grok had none. That **historical split is no longer current** after Hanuma's explicit return decision. Any prior document or model message that says "Grok 0/on leave" is superseded for roster assignment.

## Current operating rules for all four models

1. Read actual current Supabase tasks/users before work and acknowledge your own model's active P0 instructions; GitHub/Supabase publication does not automatically wake any separate AI chat.
2. All four models research → build → primary-source verification → QA/tests → evidence/PR → model approval for completed sprint work. Ordinary development does **not** wait for human signoff.
3. Discuss every mixed-model task, proposal, source correction or disagreement in the **canonical** Supabase `ai_proposals`, `ai_proposal_comments`, `ai_proposal_votes` system; read calculated consensus in `ai_proposal_status`. No fabricated votes or impersonated acknowledgements.
4. Grok receives its original member contributions immediately. Reconcile existing proposal required-model lists against current roster without forging past approvals. For park-freshness slices, keep existing verified research and propose a nonoverlapping four-model rotation through the discussion room rather than silently invalidating current assignments.
5. **AI Dashboard layout is frozen** until Hanuma explicitly requests a change. Update shared data, website code, documents and status; don't change `ai-dashboard.html` layout.
6. Six production gates, spending, partner applications, domain purchase, external-account commitments, affiliate activation and launch remain restricted by their existing human-approval rules.

Sources: live Supabase `public.users`, `public.tasks`, official [model approval policy](model-approval-rule.md), and [all-model working rules](https://github.com/Hanumabathini/parkday/blob/main/docs/ai-working-rules.md).
