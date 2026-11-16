# Team AI assignments — Parkday Guide

**CEO decision — November 15, 2026:** ChatGPT is the **elected project coordination lead**, supervising four execution models: **Muse, Claude, Grok, Perplexity**. Each execution model owns exactly ten existing member seats (40 total). The former ten ChatGPT seats have been assigned to Perplexity. Live `public.users.ai_agent` is authoritative; historical model ownership and votes are preserved in existing comments, tasks, commits and audit history.

## Current roster

- **Muse (10):** Vishnu, Sai, Raghava, Krishna, Mani, Chaitanya, Abhi, Sreekanth, Rithwick, Vijay.
- **Claude (10):** Hanuma, Rohit, Akhil, Rakesh, Teja, Navven, Chandu, Santhosh, Rithesh, Yogi.
- **Grok (10):** Lokesh, Koushik, Santhan, Sandeep, Guru, Avinash, Eswar, Bittu, Chakri, Muvva.
- **Perplexity (10, transferred from ChatGPT):** Dharma, Meghana, Hari, Vinay, Tirumala Rao, KC, Ananth, Suraj, Ajay, Rakhy.
- **ChatGPT:** elected coordination lead, **zero direct member seats**; oversees task scheduling, inter-model review and offline coverage. ChatGPT's former technical research and prior votes remain historically attributed to ChatGPT.

No human name, department, task owner, backup link, or task acceptance criteria was replaced. The reassignment changes the execution model responsible for these ten people's outstanding work.

## Perplexity onboarding requirements

Perplexity now appears as an execution model in the roster and AI Dashboard. This **does not by itself give Perplexity independent Supabase write credentials**. Its ability to review GitHub comments is separate from the secure write permission needed for task updates, proposal comments and votes. Create and test a **Perplexity-specific authenticated identity** with permission limited to its own records/actions; no shared Supabase `service_role`, secret API key, or model impersonation. Preserve independent source validation and all CEO launch gates.

## Muse connection requirements

Muse retains its original ten team members. Muse may use the Supabase project URL and **publishable** project key for read access, but those alone **do not authorize writes**. Muse's proposal votes, discussion comments and message acknowledgements must come from a verified Muse-specific authenticated session or a tightly scoped authenticated server-side endpoint that records the caller's actual identity. Existing RLS restrictions must not be disabled to bypass access errors. See security discussion [issue #68](https://github.com/Hanumabathini/parkday/issues/68) and council [issue #23](https://github.com/Hanumabathini/parkday/issues/23).

## Coordination rules

ChatGPT is the elected lead under CEO-confirmed election proposal #24 (final 4–1 expressed candidate tally; provenance retained in proposal comment #64). Before each new push, the required council models must discuss the exact proposed change and independently approve it; separate approval is required before merge. Older work without proof of prior approval receives candid retrospective review. If any model is verifiably offline for >=120 minutes, ChatGPT coordinates coverage by qualified available models and hands tasks back with PR/test evidence when it returns. No absent model's vote or acknowledgment may be forged.

The [AI Dashboard](https://hanumabathini.github.io/parkday-guide-board/ai-dashboard.html) must preserve its Brain → models → team leads → members → tasks → data layout. Production spending, domain, affiliate and six launch gates remain CEO-only.
