# KeyDraw

A calm, any-key keyboard playground for a 3.5-year-old. A parent starts the game, then every keypress creates colorful ASCII-style animals, vehicles, boats, dinosaurs, or spacecraft without scores, failure states, audio, or overstimulating effects.

**[▶ Play it live](https://keydraw.jbtcr.com/)**

MIT-licensed open source. If you enjoy it, [support Alberto on Ko-fi](https://ko-fi.com/kekojb).

The product definition is in [GOAL.md](GOAL.md). The draft delivery sequence is in [ROADMAP.md](ROADMAP.md).

## Branch model

- `dev` is the default integration branch. Work branches start from `dev` and merge back into `dev` through one pull request per development run.
- `main` is production and release-only. It advances from `dev` only after an explicit human request and two confirmations; automated development cycles never merge into it.

## License

MIT — see [LICENSE](LICENSE).
