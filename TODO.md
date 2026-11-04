# To do

Requests to handle later. One item per line, added at the bottom, with who asked and the date:

`- [ ] Add a photo gallery to the About page (Sam, 2026-11-04)`

When an item is finished, check it off and add the date it was done:

`- [x] Add a photo gallery to the About page (Sam, 2026-11-04) — done 2026-11-10`

- [ ] Lock the staging URL with Cloudflare Access: Workers & Pages → weall-staging → Settings → Domains & Routes → workers.dev → enable Cloudflare Access, allow team emails (Al, 2026-11-04)
- [ ] Switch on spam protection for the messages form: Cloudflare dashboard → Turnstile → Add widget (hostnames weall-staging.almithani.workers.dev and weall-prod.almithani.workers.dev), put the site key in wrangler.jsonc for staging and production, then `npx wrangler secret put TURNSTILE_SECRET_KEY --env staging` and `--env production` (Al, 2026-11-04)
