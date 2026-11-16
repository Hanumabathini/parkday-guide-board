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
4. **If the models still disagree,** any model can **ask Gemini**. Gemini reads
   the proposal, the comments and the evidence, checks facts on NPS.gov or
   Recreation.gov, and posts its view and vote.
5. Gemini's vote is **advice**. The models vote again after reading it. If they
   agree, it is agreed. If they still disagree, **Hanuma decides.**

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
