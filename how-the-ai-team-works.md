# How the Parkday AI team works

For every team member and every AI model. Plain-English version of the rules
set by CEO Hanuma on November 15, 2026. Written by Claude.

## Who does what
- **40 team members, four working AI models.** Hanuma restored Grok's
  original 10 seats on November 15, 2026; now Muse, Claude, ChatGPT and Grok
  each have **10 members**. See [team-ai-assignments.md](team-ai-assignments.md)
  and use live Supabase users.ai_agent as the current roster.
- **The model does the work for its members.** It researches, drafts, builds
  and checks each task. It does not wait for the member.
- **Perplexity is the advisory research reviewer.** It replaces Gemini for new
  escalations and recurring GitHub/source research. Perplexity owns no team seats,
  does not replace a model vote, and is not yet verified running automatically.
  See [Perplexity's charter](https://github.com/Hanumabathini/parkday/blob/main/docs/research/perplexity/perplexity-research-advisory-charter.md).

## How work gets approved
1. The model checks the work against the task's acceptance criteria.
2. If it passes, the model marks it **AI Approved** with an evidence link
   (a file, page, pull request or commit). Muse and others use the board's
   `ai_approve` action, which refuses an approval without evidence.
3. If it fails, the task stays **In progress** with a note saying exactly
   what is missing.
4. No human approval is needed until production. Going live, buying the
   domain, affiliate links and any spending still need Hanuma.

## When work touches more than one model: the discussion room
1. A model opens a **proposal** on the board (what it wants to do and why,
   with evidence).
2. The other models **comment** and **vote**: approve or object, with a reason.
3. The proposal is **agreed** only when every required model approves and no
   one objects. Nothing is built until it is agreed.
4. **If disagreement persists for a day,** ask Perplexity for independent
   source-grounded advice using its GitHub research charter. Record the request
   in issue #23; do not assume Perplexity received it until it responds.
5. Perplexity's report is **nonbinding advice**: the four models reconsider
   and independently vote. No outside model supplies an execution-model vote.
   Reserved launch/spending decisions remain with Hanuma.

## Keeping Parkday up to date (the main job)
- Every morning, by **7:00 a.m. Central**, each model re-checks its share of the
  64 parks against NPS.gov: Claude parks 1 to 22, ChatGPT 23 to 44, Muse 45 to 64.
- Every check is logged with the date and source. Anything not checked in 14
  days is flagged as stale and checked first.
- If a fee, date or rule changed, the model fixes it everywhere on the site and
  posts the change in the discussion room for the others to review.

## How the models talk to each other
- **Instructions:** the board's message list. Each model reads it at the start
  of every session and confirms each message.
- **Work:** pushed to the Parkday repo so every model can see it.
- **Reports:** each model writes a report when it finishes a day's tasks, then
  starts the next day straight away.


## Dashboard layout is frozen — CEO rule (November 15, 2026)
- **Do not change `ai-dashboard.html` layout**: keep the current Brain → models → leads → members → tasks → data hierarchy, all visible components, arrangement and styling unless Hanuma personally requests a dashboard design change. Agreement in the AI room alone does not authorize layout changes.
- **Do keep updating project data and tasks** in Supabase, build the Parkday travel site, research official sources, run tests, publish GitHub PRs and share evidence with the other models. The dashboard reflects updated data; its layout stays the same.
- **Discuss every shared/mixed-model task** through the **canonical Supabase discussion room**: `ai_proposals` → `ai_proposal_comments` → `ai_proposal_votes` → `ai_proposal_status`. The old `model-discussion-room.md` is historical, not a second source of agreement.
- Proposed dashboard UI improvements are logged for a future CEO decision, not implemented. Routine AI approvals still need evidence and pass criteria; human sign-offs are for the six production gates.
- Read and acknowledge the CEO P0 message #24 as your own model only. Separate AI sessions are not automatically started by a shared message.

## Where to look
- **AI Dashboard:** https://hanumabathini.github.io/parkday-guide-board/ai-dashboard.html
  (tasks, members and progress, discussion room, freshness)
- **Board:** https://hanumabathini.github.io/parkday-guide-board/


## CEO latest five-model governance — mandatory discussion before every push

**Effective Nov 15, 2026; this supersedes older advisory-only descriptions in this page.** Muse, Claude, ChatGPT, Grok and Perplexity are council participants. Perplexity has been added to eligible proposal/vote schema, but its distinct authenticated voting connection is still unverified. Gemini has no new operational assignments. For any new push to the product or board repository, including docs/research, the author must first present the exact proposed diff, rationale, tests and sources in the canonical council, invite the required eligible models to discuss, and obtain *independent authenticated pre-push approvals*. An approved push is not automatically approved for merge. If Perplexity's vote cannot be verified, keep the approval pending; do not impersonate it or use public Supabase write keys. Historic commits without such records receive a clearly dated **retrospective** review, not falsely backdated consent.

**Election of one lead:** No model is automatically appointed leader. All five are invited to deliberate and independently vote for one lead based on whole-project knowledge, QA, coordination, availability and security. Until the election is properly complete, the position remains vacant and the existing owners coordinate normally.

**Lead covers any absent model:** The elected lead checks trusted model presence. After at least 120 minutes without verified activity **and** `offline=true`, coordinate temporary cover for that model's actionable unfinished tasks across the active team, documenting original owner, covering model, exact task/PR and evidence. Preserve all 40 seats and model votes. On the missing model's verified return, hand back its work with links/tests and request its own acknowledgement/review; no overlapping edits after handoff. If the lead itself is absent, the other active models must select interim coverage using documented evidence rather than inventing another leader or vote.

**Sources:** [full policy](https://github.com/Hanumabathini/parkday/blob/main/docs/governance/five-model-pre-push-approval-and-retro-review.md), [working rules](https://github.com/Hanumabathini/parkday/blob/main/docs/ai-working-rules.md), [Perplexity charter](https://github.com/Hanumabathini/parkday/blob/main/docs/research/perplexity/perplexity-research-advisory-charter.md). No frozen dashboard layout changes, spending, affiliate activation or launch decisions are authorized.


## Election result — CEO-confirmed November 15, 2026

**ChatGPT is the elected project coordination lead.** The CEO explicitly instructed that every expressed election vote counts, including the 10:46 PM CT Perplexity submission, and accepted the final **4–1 result** on proposal #24. Candidate selections: Muse → ChatGPT (CEO-relayed direct statement); Claude → ChatGPT (canonical Supabase vote); Grok → ChatGPT ([issue #23 comment](https://github.com/Hanumabathini/parkday/issues/23#issuecomment-6907501083)); Perplexity → ChatGPT ([issue #23 comment](https://github.com/Hanumabathini/parkday/issues/23#issuecomment-6907594644)); ChatGPT → Claude (canonical Supabase vote). The project-owner adjudication is logged as ChatGPT's attributed report in Supabase proposal #24 comment #64, **not** as impersonated Grok/Muse/Perplexity authenticated database votes. Missing model-specific write credentials still must be fixed before later required model approvals.

The elected lead must review all 72 tasks and the work of Muse, Claude, Grok and Perplexity, lead discussions before each new push, coordinate temporary coverage for any verifiably absent model (offline + at least 120 minutes), and hand covered tasks back with PRs/tests on return. Preserve original ten-seat assignments, independent council votes and all CEO release/security gates. The [AI Dashboard](https://hanumabathini.github.io/parkday-guide-board/ai-dashboard.html) now identifies ChatGPT as lead; no layout redesign was authorized.


## Latest CEO organizational structure — ChatGPT leads; Perplexity executes (Nov 15, 2026)

This **supersedes the older 10-seat ChatGPT roster and advisory-only Perplexity language earlier in this document**. ChatGPT remains the elected project coordination lead but no longer holds a ten-member execution roster. **Four execution models: Muse, Claude, Grok, Perplexity — 10 people each.** The former ChatGPT seats (Dharma, Meghana, Hari, Vinay, Tirumala Rao, KC, Ananth, Suraj, Ajay, Rakhy) now belong to Perplexity in the authoritative live Supabase roster. The other 30 seats and all named task owners remain unchanged. Full roster: [team-ai-assignments.md](team-ai-assignments.md).

The elected lead (ChatGPT) audits all tasks and code/research across the four models, organizes exact-diff pre-push discussions and post-push QA, prevents overlapping edits, arranges qualified temporary coverage after a model is verified offline for >=120 minutes, and hands back tasks with PR/test evidence on return. **Perplexity's model assignment is not evidence that its GitHub/Supabase integration has working authenticated write capabilities.** Muse also requires its own authenticated, RLS-compliant mechanism for votes, comments and message acknowledgements. A publishable/anon key can only act within permitted RLS policies; neither model should receive a shared `service_role` key.

History and votes from previous owners remain unchanged; future five-participant council proposals involve four execution models plus ChatGPT lead unless a proposal explicitly documents a different required quorum. CEO spending/production gates and the frozen dashboard layout remain intact.


## CEO approved Proposal #25 — Brain remains the shared centre

**The Brain is the five-participant independent council/discussion room, not ChatGPT itself.** The AI Dashboard now uses a **five-node circular/pentagon council ring around Brain**: Grok, Perplexity, ChatGPT (elected project lead), Muse and Claude, evenly spaced. **All five nodes connect directly to Brain for discussion and independent votes.** ChatGPT additionally connects to each of the other four execution models via separate dashed coordination links. The four models retain their expandable team leads → 40 members → tasks → data branches; ChatGPT has no execution-team seats. Lead coordination does not replace consensus, primary-source fact checks, or CEO approval gates.

The CEO directly authorized this layout on November 15, 2026, in response to council proposal #25. [Dashboard commit 7746731](https://github.com/Hanumabathini/parkday-guide-board/commit/7746731cd74de45b2b3d501d080c4e00d7f7ef7f) and [board commit e82decf](https://github.com/Hanumabathini/parkday-guide-board/commit/e82decfff606a471d74cf9ad56ad11abb020fc6b) implement the design. All existing model seats and task records remain unchanged. Other models' authenticated votes on proposal #25 must not be fabricated; the separate secure Muse/Perplexity write-channel work is still pending.
