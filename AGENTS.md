# KeyDraw Agent Guide

Read `GOAL.md` before planning or changing behavior. Its NORTH STAR is the drift anchor.

## Product constraints

- Preserve calm any-key exploration: no wrong answers, scoring, timers, failure states, audio, analytics, ads, accounts, or required progression.
- Keep object count bounded and respect reduced-motion preferences.
- Keep this instruction visible throughout kid mode: **Hold Escape for 4 seconds or press Ctrl+Alt+Q to exit.**
- A webpage cannot reliably block operating-system shortcuts; do not claim otherwise.

## Delivery

- GitHub is the source of truth.
- `dev` is the default integration branch.
- `main` is production and release-only. Never merge or push development work into `main` without Alberto's explicit request and two confirmations.
- Production is deployed through Cloudflare at `keydraw.jbtcr.com`.
