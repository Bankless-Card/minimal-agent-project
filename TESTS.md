# Tests

What the site's tests check, in plain words. `[auto]` tests run with `npm run test` (and before every ship); `[manual]` tests are checked by a person on the staging site.

Rules: one test per line, add new lines at the bottom, and never delete or weaken a test to make it pass — fix the site instead. Every bug fix adds a test here.

- [auto] The home page loads and shows a heading. (tests/home.spec.ts)
- [auto] The messages page shows the sample messages and lets a visitor post a new one. (tests/home.spec.ts)
- [auto] The messages API lists the sample messages. (tests/api.spec.ts)
- [auto] The messages API saves a new message to the database. (tests/api.spec.ts)
- [auto] The messages API rejects a message with a blank name. (tests/api.spec.ts)
- [auto] The messages API rejects a submission that skipped the spam check. (tests/api.spec.ts)
- [auto] The messages API stops a visitor after 5 submissions in a minute. (tests/api.spec.ts)
