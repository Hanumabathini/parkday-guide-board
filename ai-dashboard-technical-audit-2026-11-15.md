# Parkday AI Dashboard — Independent Technical & Coordination Audit

**Audit date:** November 15, 2026  
**Reviewed:** [Muse's AI Dashboard source](ai-dashboard.html) on `main`, Supabase project `hpnxtmdmvojdvrzdurcy`, current six AI proposals, facts/ack tables, and the CEO's one-stop Parkday north star.  
**Deployed entry point:** https://hanumabathini.github.io/parkday-guide-board/ai-dashboard.html  
**Review type:** source/database/permission inspection, NOT an interactive mobile/browser screenshot test. The live dashboard URL could not be fetched through the available browser retrieval tool, so no unverified rendering claim is made.  
**Preservation rule:** keep Muse's layout, constellation graph, mobile fallback, 72 tasks, 64 parks, progress cards and working UI. Implement only necessary data and security improvements; do not clone competitor products.

## Executive assessment

The Muse dashboard is a substantial, coherent visual prototype. It has live reads of `tasks`, `users`, `launch_gates` and `audit_log`, a task graph, 64-park directory, filters, team roster, summary and drilldown. Its inline JavaScript **parses successfully**. Output escaping and reduced-motion rules are present. It is **not yet an authoritative model discussion/approval center** and cannot report factual park freshness.

### P0-1 — The Brain displays participation, not approval

**Confirmed from source:** `var DISCUSSIONS = ["D1-02","D1-08","D2-02"]` is hardcoded, and `discussionState()` infers which models "weighed in" from `audit_log` and task `updated_by`. The link points to `model-discussion-room.md`.

**Confirmed from database:** the canonical room is now `ai_proposals`, `ai_proposal_comments`, `ai_proposal_votes`, `ai_proposal_status`. There are **six** proposals at the audit checkpoint, not three. Three were waiting for votes and three had objections/discussion; none had consensus. A model editing a task is *not* a vote.

**Fix for Muse:** Replace fake consensus logic with a read-only query of `ai_proposal_status` plus topic details/comments where appropriate; use `required_models`, `approved_by`, `objected_by`, `state`. Show `waiting for votes`, `objection - discuss`, or `agreed` exactly as computed; do not infer agreement from activity. The markdown room should redirect to the DB conversation. Add safe link to GitHub evidence and a discussion drilldown.

**Acceptance:** six current proposals render with true vote counts; proposals 2–5 show outstanding objections, not agreed; no fake model approvals. A new proposal appears on next refresh without editing dashboard JS. Only authenticated/trusted model service may cast votes; until role identity exists, the public browser is read-only.

### P0-2 — Authentication and privilege boundaries

**Confirmed:** Supabase Auth currently has **zero** member accounts. The dashboard is read-only, but an earlier server-side approval RPC was publicly invocable with a caller-chosen model identity; an auxiliary Gemini-request RPC had the same issue. Additionally, selected user/launch-gate/fact-check tables allowed anonymous writes.

**Remediation actually applied in Supabase during this audit:** public `EXECUTE` on `ai_approve` and `ask_gemini` was revoked; unauthenticated write permissions to roster, launch gates, fact checks and model acknowledgements were removed. Privileged project/connected model tools can still use the SQL-backed workflows. Existing dashboard read permissions remain. Production gates remain separate and all six Pending.

**Fix for Muse/backend:** Do **not** restore public model-voting or approval privileges to make a button work. Create verified model-specific service credentials and server-side authorization, store any secrets outside the browser, enforce task/model ownership and acceptance-evidence checks server-side, and record immutable event/audit entries. A user's chosen name or `p_model` string is not authentication. The public UI should show pending actions as read-only until trusted auth is ready.

**Acceptance:** an anonymous browser cannot set `AI Approved`, request a model service action, change users, mark gate Passed, or forge a `fact_checks` event. A trusted model connector with proper permissions can still submit auditable decisions. Retest the exact public board and any current API clients after permission changes.

### P0-3 — Official-source freshness is missing

The dashboard fetches only four tables, not `fact_checks`, `fact_freshness`, or `park_source_freshness`. At this audit, the canonical `fact_checks` table had 35 records over 22 parks. The due-check queue contains 64 park source records, deliberately marked `needs_review` (NOT facts verified).

**Fix:** Add source-health summaries:
- All 64 parks: checked vs unchecked by actual successful checks, fields due, changed/unclear/unreachable facts, last checked timestamp and source URL.
- Distinguish **source due queue** from **officially verified facts**; a queue row must never make the UI say "fresh".
- Reflect the CEO's daily ownership plan (Claude parks 1–22, ChatGPT 23–44, Muse 45–64; Grok on explicit reassignment). Where a daily run is missing, say **no check recorded**, not "all clear".
- Permit source-backed corrections via GitHub PR and model proposal; never silently modify production facts or fees based solely on an untrusted source.
- Scheduled retrieval should prefer NPS.gov/Recreation.gov official data and record unavailable/rate-limited results as incomplete.

**Acceptance:** source counter equals actual distinct `fact_checks.park_slug`; new checks increment the correct per-park/field detail; stale and unreachable records show clear warnings; every changed fact links to source and PR/proposal.

### P0-4 — AI messages and acknowledgements not visible

The dashboard does not query `model_messages` or `model_message_acks`. These are the official cross-model inbox and receipts. The CEO needs to know whether instructions were read and acted on.

**Fix:** Add a Model Inbox panel with P0/P1 priority, target model, linked task, message link and last acknowledgement. Compute `read` only from actual ack record, not from audit activity; do not let the public name selector create an ack. Record real acknowledgement only through an authenticated model/project tool.

**Acceptance:** P0 messages sort above P1; unread counts are accurate for Muse/Claude/ChatGPT; Grok is shown paused/unassigned, not late; no impersonated ack possible.

### P1-5 — Shared tasks have inaccurate single-model labels

`agentOf(owner)` splits on `/` or `+` and returns only the **first** matched owner model. Ten current tasks have cross-model ownership, so a single-model badge and per-model task count can be misleading.

**Fix:** Compute **all distinct models** by tokenizing owners against `users` and use multiple badges. Count mixed-owner tasks separately and require the full joint acceptance checklist before final AI Approval. Let each model file its slice review without marking the parent complete.

**Acceptance:** D2-02 is displayed as ChatGPT + Claude + Muse; D3-02 is ChatGPT + Claude; filtering by any involved model still finds the task. Shared tasks are counted only once globally.

### P1-6 — Whole-screen refresh can fail from one table query

The dashboard uses one `Promise.all` across four REST reads, so an intermittent failure of one secondary table switches everything to cached snapshot. This can show old task states or gate counts despite the task API being up. Last Updated text reflects the browser refresh moment, not record age.

**Fix:** Use independently handled reads (`Promise.allSettled` or equivalent), expose per-panel freshness and partial failure, render task data while keeping stale secondary panels clearly marked. Back off after repeated errors and cancel stale/out-of-order fetch results. Mark fallback snapshot as **historical reference only**.

**Acceptance:** simulated audit-log 5xx still leaves live tasks visible and visibly warns only that activity is stale; future timestamps are not invented; no "Live" indicator based solely on partial cache.

### P1-7 — Replace static operational claims

Watch list uses a hardcoded PR list (`[22,21,20]`) and text such as "CEO decision needed" for D2-09. It also claims "Gemini is connected" although no verified Gemini identity/session is demonstrated, and presents the old markdown discussion file as canonical. Static day/date copy is not automatically tied to current project state.

**Fix:** Use actual task notes/dependencies and GitHub merged PRs, show clear *pending technical dependency* for the 40 missing authenticated logins, and use **Gemini: optional advisory / no assigned seats; model session unverified** until operational connectivity is proven. CEO still approves production go/no-go; no human review needed for routine sprint tasks.

**Acceptance:** no dead PR references, wrong phase claims or fabricated model activity. Any "connected" state requires verified heartbeat/event, not a hardcoded label.

### P1-8 — Remove sensitive references from embedded snapshots

The 140KB HTML file embeds a 72-task fallback snapshot with some internal document/folder references. On a publicly hosted GitHub Pages site, this is not private. The fallback can also become old or contradict Supabase.

**Fix:** Keep only minimal public-safe demo data, never include private Drive links/member contacts/receipts/credentials. Load actual task evidence from the authenticated backend where privacy requires. Date-label snapshots and do not publish unverified/irrelevant private links.

**Acceptance:** static source contains no private Drive document IDs, email addresses, signed files, receipts, tokens or internal-only links. Public dashboard remains useful during a transient network outage.

### P2-9 — Visual and usability QA

Already present: graph fallback, mobile CSS at 1080px/680px, reduced-motion handling, some aria labels and HTML escaping. Actual cross-browser usability was **not** tested in this audit.

**Fix:** test keyboard focus and controls for graph nodes, no sideways scrolling at 320/375/768px, long evidence links, modal focus/escape, tap targets, screenreader labels, network-failure state, and test real Chrome/Safari rather than assuming source correctness.

**Acceptance:** documented screenshots/videos, keyboard/tab order, no trapped focus, all visible controls work, contrast and loading performance measured. Keep Parkday's unique visual language rather than copying another UI.

## First Muse delivery sequence

1. Correct `ai_proposal_status` rendering and replace the hardcoded Brain, while preserving the current visual design.
2. Show read-only model inbox/acks and official-source freshness; add robust partial-fetch failure states.
3. Fix mixed-owner model badges, remove static operational claims and scrub the embedded public snapshot.
4. Define a trusted model-auth backend before enabling in-dashboard voting, approval or Gemini requests.
5. Run mobile/accessibility/browser regression and link PR/screenshots to the live task.

**Suggested review handoff:** Muse owns the dashboard UI; Claude owns official-source content and policies; ChatGPT owns database contract/security integration and independent QA. Grok follows the same acceptance rules on explicit return. An implementation touching a shared cross-model contract goes through the existing `ai_proposals` room; it is not considered agreed until the computed status says so.

## Sources reviewed

- Dashboard: [ai-dashboard.html](ai-dashboard.html), main SHA `660a342a040bc9fb43c2589d6ec2abdbab0645e5`
- Canonical discussion: Supabase `public.ai_proposals`, `ai_proposal_votes`, `ai_proposal_comments`, `ai_proposal_status`
- Freshness: Supabase `fact_checks`, `fact_freshness`, `park_source_freshness`
- Communications: Supabase `model_messages`, `model_message_acks`
- CEO north star: https://github.com/Hanumabathini/parkday/blob/main/docs/parkday-north-star.md
- Coordination: https://github.com/Hanumabathini/parkday/issues/23

**Integrity rule:** Do not mark a dashboard fix as completed until the actual merged source is tested and evidence is available. This audit is a source review; it does not itself verify the finished UI or initiate other model sessions.
