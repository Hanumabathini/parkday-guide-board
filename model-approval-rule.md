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

## 3. Current team split — CEO restored Grok's original team (Nov 15)

**Source of truth: live Supabase `public.users.ai_agent`.** Grok is active again after Hanuma explicitly reassigned the original ten members. All four teams have **10 active members**.

- **Muse (10):** Vishnu, Sai, Raghava, Krishna, Mani, Chaitanya, Abhi, Sreekanth, Rithwick, Vijay.
- **Claude (10):** Hanuma, Rohit, Akhil, Rakesh, Teja, Navven, Chandu, Santhosh, Rithesh, Yogi.
- **ChatGPT (10):** Dharma, Meghana, Hari, Vinay, Tirumala Rao, KC, Ananth, Suraj, Ajay, Rakhy.
- **Grok (10):** Lokesh, Koushik, Santhan, Sandeep, Guru, Avinash, Eswar, Bittu, Chakri, Muvva.

The temporary 13/13/14/0 distribution during Grok's leave is **historical and superseded**. The detailed names, original task slices, and historical transfer record are in [team-ai-assignments.md](team-ai-assignments.md). Grok must read existing task evidence before continuing its 12 affected tasks. No statuses or previously checked facts are reset.

## 4. Mixed-model task integration
- **D1-07:** Lokesh design now belongs to Grok. Grok checks and preserves Muse's prior color-token corrections, contrast, gradient claim and wireframe gaps documented in the board before approving.
- **D1-12:** Grok owns Santhan/Koushik footage, images and rights log and Bittu's Pinterest account/campaign slice; preserve work already contributed by Muse and ChatGPT. The full task stays open until all acceptance criteria are met.
- **D2-02:** Claude (Rakesh, Teja), Grok (Eswar), Muse (Vijay) fact-check assigned park records and submit a consolidated source-backed log.
- **D2-07:** Grok owns Eswar's 20-brand shortlist; ChatGPT owns Meghana's private finance/credential component; Claude owns Rohit's privacy component. Prior ChatGPT research is valid handoff evidence. Do not expose secrets publicly.
- **D4-06:** Source verification is split between assigned models; one consolidated log is needed before full task approval.
- **D5-06:** Grok covers Muvva/Santhan; ChatGPT covers KC/Ajay. No group or commercial rollout prior to the GO decision.

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

## 7. Shared work and canonical discussion (CEO instruction, Nov 15)

- **Work independently and continuously.** Muse, Claude, ChatGPT and Grok upon return: research, build, source-check, test and publish work for your currently assigned roster. Keep all member tasks and data current in Supabase; post a PR, evidence link, test result and dated progress report. Do not wait for human sprint approval.
- **One official discussion room:** `public.ai_proposals` (topics), `public.ai_proposal_comments` (evidence-backed discussion), `public.ai_proposal_votes` (approve/object) and `public.ai_proposal_status` (computed consensus). Do **not** treat `model-discussion-room.md` as a second authoritative voting system; it may only link/archive discussion.
- **Share findings with every model.** Before implementing any shared/cross-model change, post the intent and evidence in that single Supabase discussion room; continue unrelated independent tasks while waiting. When everyone required approves with no objections, the shared change may proceed, *except dashboard layout changes*, which additionally require explicit Hanuma authorization.
- **Use the shared model inbox:** read `model_messages` in P0/P1 order, acknowledge only your own actual receipt in `model_message_acks`. Publishing a message does not automatically notify a remote AI session. Never impersonate another model, user or approver.
- **Keep Parkday unique and current.** Confirm changeable park facts using dated official sources, compare existing verified values, log source checks, keep the traveler site original and maintain its unified park discovery → planning → budget → preparation experience. Do not copy competitors' proprietary pages or unlicensed images.
- **Sprint completion is separate from human production sign-off.** After verifying every acceptance criterion, the responsible AI model may record `AI Approved` with source/test/evidence and audit attribution. A mixed-owner task needs every applicable slice. Six production launch gates still require their named humans.

## 8. AI Dashboard layout FROZEN (CEO instruction, Nov 15, 2026)

**The current published `ai-dashboard.html` layout is final until CEO Hanuma explicitly requests a change.**

- **NO model** — Muse, Claude, ChatGPT, Grok or advisory Gemini — may redesign, re-upload, replace or modify the dashboard layout, visual styling, graph hierarchy, panels, positioning, typography, CSS or navigation without Hanuma's explicit instruction. Model unanimity alone cannot override this rule.
- The layout is **Brain → models → team leads → members → tasks → data**. Preserve the current dashboard source; no deletion/re-addition, wholesale rebuild or alternative layout rollout.
- **YES: keep the dashboard's data current** via normal shared Supabase task/status/evidence, member assignment, facts, audit, and discussion workflows. Keep working on the actual Parkday travel website and new deliverables. Those projects are **not frozen**.
- If a design improvement, new dashboard component or layout bug is found, post the details and evidence to `ai_proposals` and the task/issue backlog. **Do not implement any dashboard-layout change until Hanuma expressly authorizes it.** Discussions may continue without blocking regular work.
- Leave the six mandatory human production gates untouched unless their actual authorized approvers act.
- All model sessions must open this document and the P0 `model_messages` CEO instruction (#24) when working on this project; log real acknowledgement for themselves only.

