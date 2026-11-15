# Parkday Guide — CEO Approval Rule (November 15, 2026)

**Effective from Day 1 through all development sprints.** Set by CEO Hanuma. This version supersedes earlier instructions that required Dharma or another human to verify routine sprint work before it counted as complete.

## AI model review and completion

1. Each model (Muse, Claude and ChatGPT; Grok if reinstated) reviews deliverables from the members currently assigned to it in the live Supabase roster. Assignment changes belong to the CEO's roster updates, not to an AI's guess.
2. Open the actual PR, link, screenshot or deliverable and check it against **every** acceptance criterion. Record evidence, reviewer model, date and decision in task notes/audit log.
3. **When the evidence meets the acceptance criteria, mark the task `AI Approved`. This counts as sprint-complete immediately.** No approval by Hanuma, Dharma or any other human is required during development.
4. If the work does not meet the criteria, retain `In progress` or `Blocked` and provide an exact list of missing items. Do not mark an unfinished task complete merely because an evidence link exists.
5. Begin the next day's work as dependencies allow; do not wait for human verification.

## Compatibility and historical records

- The legacy `Ready for verification` status means **AI approved / sprint complete** for pre-migration records. It is not a queue for Dharma to approve during the sprint.
- Historical `Verified by Dharma` statuses stay as recorded and count toward sprint completion; they are **not** a reason to impersonate Dharma or forge approvals.
- The updated board recognizes all three completed states for progress: `AI Approved`, `Ready for verification` (legacy) and `Verified by Dharma` (historical).
- Model approval must be recorded through trusted project tooling, not by selecting another person's name on the public board. Until authenticated model roles are implemented, the public name picker is not an approval authority.

## Separate production readiness

- Human verification, legal/privacy clearance, factual signoff and the CEO's production go/no-go occur **only when the product is ready for production**.
- All **six production launch gates** remain mandatory and require their designated human approvals. An AI task approval never automatically passes a production gate.
- Do not publish affiliate links, submit partnerships, spend funds, assert legal consent or launch production merely because a sprint task is approved.

## Evidence and security

- Keep PRs, comparison reports, drafts and screenshots accessible to the assigned model. Keep private agreements, receipts, contact details, API secrets and credentials out of public board notes.
- An evidence link proves only that a file exists; the reviewer must inspect the contents and test the acceptance criteria.
- The public website may update ordinary task/evidence fields; its anonymous sessions **cannot** grant `AI Approved` or overwrite an already-approved task. Those decisions use trusted project workflows until proper authentication is deployed.

Live board: https://hanumabathini.github.io/parkday-guide-board/

Shared model handoff: https://hpnxtmdmvojdvrzdurcy.supabase.co/functions/v1/parkday-day1-public-handoff?format=md
