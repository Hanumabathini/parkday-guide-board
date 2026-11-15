# Parkday Guide — CEO model approval and research-to-build rule
**Set by CEO Hanuma, November 15, 2026. Applies to all sprint days and all AI models: Muse, Claude, ChatGPT and Grok, including when Grok returns.**

## 1. Models do the research and build
- Each assigned model **reads current work from the live Supabase roster and tasks, researches primary sources, builds the requested deliverable, runs checks, attaches evidence, then independently approves or returns corrections.** Do not wait for a human or a named team member to do the drafting or coding.
- Inspect the actual PR, source link, screenshot or output against **every acceptance criterion**. For a partial multi-model task, finish and review your slice, but the full task is approved only when all slices pass.
- Research notes must link current official sources, dates and remaining uncertainty. A fact without a source remains unverified; don't fabricate fees, permits, availability, review scores or affiliate terms.
- Push work to the main Parkday repository through clear task-ID commits/PRs so other models can read and review it. Record changes and links in the canonical task record and audit log. Never overwrite other models' active branches without reviewing.
- Continue with the next actionable sprint task in the active model session. Remote ChatGPT/Claude/Muse/Grok sessions are **not automatically running or notified** merely because a policy file exists.

## 2. AI approval is sprint completion
1. If criteria pass: record evidence, model reviewer, date and QA result, set `tasks.status = 'AI Approved'`, and insert an audit-log entry. This task now counts as **sprint Done**.
2. If criteria fail: keep `In progress` or `Blocked`, list exact missing items and required evidence in the task notes.
3. **Do not request manual Hanuma, Dharma or other human verification for routine development tasks.** Human approval is deferred until production-readiness.
4. Legacy `Ready for verification` counts as previous AI approval; historical `Verified by Dharma` records are preserved and also counted. **New approvals use `AI Approved`; no model impersonates Dharma.**
5. The public site has only a member-name selector, not verified authentication. Its anonymous sessions must not grant AI Approved; those transitions use trusted project tools with an evidence review and auditable model identity.

## 3. Current team split and Grok's return
**Current source of truth: Supabase `public.users.ai_agent`.**
- Muse: **13** (including Lokesh, Koushik and Santhan).
- Claude: **13** (including Sandeep, Guru and Avinash).
- ChatGPT: **14** (including Eswar, Bittu, Chakri and Muvva).
- Grok: **0** while on leave. **When Grok returns, Grok follows exactly these rules for any members reassigned to it.** No member automatically switches back; Hanuma's explicit roster update controls ownership.

The detailed personnel split is in [team-ai-assignments.md](team-ai-assignments.md).

## 4. Mixed-model task integration
- **D1-07:** Lokesh design belongs to Muse. Muse checks and fixes the color-token mismatch, contrast, gradient claim and wireframe gaps documented in the board before approving.
- **D1-12:** Muse supplies Santhan/Koushik footage, images and rights log; ChatGPT supplies Bittu's Pinterest account/campaign slice. The full task stays open until all acceptance criteria are met.
- **D2-02:** Claude (Rakesh, Teja), ChatGPT (Eswar), Muse (Vijay) fact-check assigned park records and submit a consolidated source-backed log.
- **D2-07:** ChatGPT provides Eswar's 20-brand shortlist and Meghana's private finance/credential component; Claude provides Rohit's privacy component. Do not expose secrets publicly.
- **D4-06:** Source verification is split between assigned models; one consolidated log is needed before full task approval.
- **D5-06:** ChatGPT covers Muvva/KC/Ajay; Muse covers Santhan. No group or commercial rollout prior to the GO decision.

## 5. Production approvals remain mandatory
- **No human approval until production readiness** for normal internal sprint deliverables.
- Production launch and all **six launch gates** retain their named human sign-offs. No model can waive legal, accessibility, privacy, photo-rights, fact-check or CEO go/no-go requirements.
- Domain purchases, spend, external account terms, sponsorship outreach, affiliate submissions and `sandbox` activation are **external actions** requiring their existing explicit authorization. Preparation and research can proceed without delaying the sprint.

## 6. Where every model finds the work
- Live task board: https://hanumabathini.github.io/parkday-guide-board/
- Canonical working code and shared research: https://github.com/Hanumabathini/parkday
- Detailed all-model workflow: https://github.com/Hanumabathini/parkday/blob/main/docs/ai-working-rules.md
- ChatGPT team draft deliverables for new members: https://github.com/Hanumabathini/parkday/blob/main/docs/chatgpt-team/2026-11-15-research-build-handoff.md
- Public read-only cross-model handoff: https://hpnxtmdmvojdvrzdurcy.supabase.co/functions/v1/parkday-day1-public-handoff?format=md

**The audit rule:** every approval has a task ID, evidence link, source/QA result, acting model, date, prior/new status and audit entry. No model or member marks untested work complete.

## 7. Discussion room and staying up to date (CEO rule, Nov 15)

- **Keeping the project up to date is the main task.** Every model opens the AI Dashboard (ai-dashboard.html) and the live board at the start of each session, reads the latest tasks, audit log and discussions, and works from that — never from stale notes.
- **Share everything.** Every finding, fact, source and decision goes into the shared database, the board files or the parkday repo the same day — never kept inside one model's session. A model that learns something and does not share it has not finished the task.
- **Self-evolving.** The dashboard reads the shared database live, so it evolves as the models work. Models keep it true by keeping the board true: every status move carries evidence, every approval carries a QA result, every change carries an audit entry.
- **Discussion room.** For any task where models disagree, and for every mixed-model task, use model-discussion-room.md: post positions with evidence, mirror each position as an audit_log entry starting "DISCUSSION <task ID>:", and mark the task AI Approved only when every assigned model has written "agree" there. If the models cannot agree, the discussion stays OPEN and goes to Hanuma. No single model approves a contested task alone.
- **Stand out and stay unique.** Every build is checked against parkday-uniqueness-brief.md: does this make Parkday more unique, or more like the other guide sites? If it makes us more like the others, say so and propose the better version.
