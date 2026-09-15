# Epic 1 — Calm Keyboard Playground

## User flow

1. A parent opens the game and sees a short explanation plus a large **Start** button.
2. The exit instruction is plainly visible before starting.
3. Clicking **Start** requests browser fullscreen and begins kid mode.
4. The child presses any individual key or several keys together.
5. Each accepted press creates or transforms one colorful ASCII-style object with gentle motion.
6. The game occasionally displays an optional invitation to find one key.
7. A parent exits by holding Escape for 4 seconds or pressing Ctrl+Alt+Q.

## Acceptance criteria

### Start and fullscreen

- The start screen is understandable without setup and does not begin from an ordinary child keypress.
- **Start** requests fullscreen directly from the click event and starts kid mode even if fullscreen is denied.
- Focus remains on the game after starting and after ordinary clicks or window focus changes.

### Input

- Printable keys, digits, punctuation, arrows, modifiers, navigation keys, function keys where the browser exposes them, and simultaneous key combinations all yield safe behavior.
- Auto-repeat is rate-limited so a held key remains responsive without flooding the display.
- Pressing many keys together cannot throw an error, lock the interface, select text, scroll the page, or accumulate unbounded objects.
- Browser-reserved and operating-system-reserved shortcuts are documented rather than falsely claimed as blockable.

### Objects and visual behavior

- The initial catalog contains at least 24 recognizable text-art objects across all required families: zoo animals, farm animals, household pets, planes, space shuttles, spaceships, boats, and friendly dinosaurs.
- Objects are rendered from ordinary text characters and remain legible at common laptop resolutions.
- A keypress varies object, palette, and placement without using rapid flashing.
- No more than three prominent objects are visible simultaneously; old objects fade gently and are removed.
- Animation uses slow easing and respects `prefers-reduced-motion`.
- There is no score, timer, failure feedback, streak, confetti burst, screen shake, or audio.

### Optional key invitations

- Invitations occur infrequently and show one large key symbol with a short optional cue.
- Any other key still creates the normal positive response.
- Matching the invited key may create a slightly warmer response but no intense celebration.
- Invitations disappear automatically and never block play.

### Parent controls

- This exact instruction remains visible throughout kid mode: **Hold Escape for 4 seconds or press Ctrl+Alt+Q to exit.**
- Pressing Escape begins a visible four-second progress indicator.
- Releasing Escape before four seconds cancels the exit and clears the indicator.
- Holding Escape for four seconds leaves kid mode and calls `document.exitFullscreen()` when fullscreen is active.
- Ctrl+Alt+Q exits immediately and suppresses the Q gameplay response.
- Ordinary taps of Escape do not create objects.
- If the browser itself exits fullscreen before the timer completes, kid mode stays safe and the parent instruction remains available; the game must not misrepresent browser-enforced behavior.

### Privacy and dependencies

- Gameplay works after the page has loaded without further network requests.
- No account, storage, analytics, advertising, cookies, or personal information is used.
- No external link is focusable or clickable in kid mode.

## Verification

- Automated checks cover catalog size/categories, bounded object count, rate limiting, prompt non-blocking behavior, and exit timing logic.
- Manual browser checks cover Chrome, Edge, Firefox, and Safari where available.
- A rapid-input test sends overlapping keydown/keyup events for at least 30 seconds with no uncaught errors or persistent slowdown.
- A visual review checks 1366×768 and 1920×1080 layouts, reduced-motion mode, and the parent instruction at all times in kid mode.
