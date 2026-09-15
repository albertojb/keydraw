# KeyDraw Goal

**NORTH STAR:** A parent starts KeyDraw and hands over the keyboard so a 3.5-year-old can explore any keys freely and receive calm, delightful visual responses without wrong answers.

## Goal

Create a joyful, low-stimulation keyboard playground that motivates a toddler to keep exploring keys through colorful ASCII-style creatures and vehicles.

## Core decision

A parent opens `keydraw.jbtcr.com`, clicks **Start**, and hands over the keyboard; the child can then press any key or many keys together and always get a gentle response.

## Definition of done

- `keydraw.jbtcr.com` serves the production game through Cloudflare.
- A parent can click **Start** to enter true browser fullscreen.
- Every keyboard key produces a response; simultaneous and repeated keypresses remain safe and responsive.
- Responses include colorful ASCII-style zoo animals, farm animals, household pets, planes, space shuttles, spaceships, boats, and friendly dinosaurs.
- Motion, color, density, and pacing remain calm: no harsh flashing, rapid scene changes, or accumulating clutter.
- The game occasionally invites the child to find a particular key, but all other keys still work and there is no wrong-answer response.
- Parent exit instructions remain visible throughout kid mode: **Hold Escape for 4 seconds or press Ctrl+Alt+Q to exit.**
- Holding Escape shows visible progress, releasing it early cancels the exit, and either completed shortcut leaves kid mode and fullscreen.
- The game works in current desktop versions of Chrome, Edge, Firefox, and Safari to the extent allowed by each browser's fullscreen behavior.
- The source is maintained in GitHub and production deployment is reproducible.

## Out of scope

- Scoring, levels, timers, lives, failure states, competitive mechanics, or required progression.
- Ads, tracking, accounts, personal data, external links, purchases, or network-dependent gameplay inside kid mode.
- Audio or speech.
- Teaching curricula, formal assessment, or requiring correct answers.
- Preventing operating-system shortcuts such as Alt+F4, Command+Q, or power controls, which a webpage cannot reliably intercept.
- Touch-first mobile gameplay for the initial release.

## Fixed constraints

- Designed first for a 3.5-year-old using a physical keyboard.
- Parent starts the session; the child should not need a mouse or reading ability afterward.
- Any-key and multi-key input must never break the game.
- Visuals are colorful ASCII-style compositions, not high-intensity effects.
- True fullscreen follows the proven KeyFriends pattern: request fullscreen from the Start action, capture keyboard events, and use a timed Escape exit.
- Escape hold duration is 4 seconds; Ctrl+Alt+Q is the alternate exit.
- GitHub is the source of truth.
- Cloudflare hosts production at `keydraw.jbtcr.com`.
