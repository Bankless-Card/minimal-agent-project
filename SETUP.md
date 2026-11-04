# Getting set up

This guide gets your computer ready to edit your website. It takes about 20 minutes, once. Your site operator can help you through it.

After this, you never need to type commands. You just talk to your AI assistant.

## 1. Install these four things

Install them in this order, accepting the default options each time.

| What | Where to get it | Notes |
| --- | --- | --- |
| **Git** | https://git-scm.com/downloads | Keeps track of changes to your site. On a Mac, it may already be installed. |
| **Node.js, version 24** | https://nodejs.org/en/download | Runs your site on your computer. Choose version **24**. |
| **GitHub CLI** | https://cli.github.com | Connects your computer to where your site is stored. |
| **One AI assistant app** (pick one) | See below | The assistant you'll talk to. |

**AI assistant: pick one.**

- **Claude:** https://claude.ai/download. After installing, use the **Code** tab, not regular chat.
- **Codex:** https://openai.com/codex
- **Antigravity:** https://antigravity.google

**Restart your computer** after installing everything, so the apps can find each other.

## 2. Get your site's folder

Your operator gives you access to your site on GitHub and helps you download its folder the first time. Put it somewhere easy to find, like your Documents folder.

## 3. Say "get me set up"

1. Open your AI assistant app and open your site's folder in it.
2. Type: **get me set up**
3. The assistant checks your computer. If anything is missing, it tells you what to install and gives you the link. Install it, restart the assistant app, and say "get me set up" again.
4. The assistant opens a GitHub page in your browser. Click **Authorize**.
5. If it asks for your name and email, give them. They're attached to your changes so your operator knows who made them.

When it's done, your site opens in your browser. That's the preview. Only you can see it.

## Everyday use

| Say this | What happens |
| --- | --- |
| **start the site** | Gets the latest version and opens the preview in your browser. Say this at the start of every session. |
| *Describe what you want* | "Change the opening hours to 9 to 5", "Add a photo of our team to the About page". The preview updates as the assistant works. |
| **ship it** | Checks everything and sends your changes to the staging site, a private copy your team can review. You get a link. |
| **undo** | Goes back. The assistant tells you what it would undo and asks before doing it. |
| **add that to the to-do list** | Saves a request for later. |

When your team is happy with the staging site, **tell your operator it's ready**. They review it and put it live. You can't accidentally change the live site.

If the assistant says to contact your operator, do that. It means something needs a person to look at it, and nothing has been lost.

## Assistant settings (Codex and Antigravity)

Claude is already configured by your site's folder. For Codex or Antigravity, your assistant will ask before running commands. When it asks:

- **Approve:** anything starting with `npm run`, `npm ci`, `git status`, `gh auth`, or `git config --local`.
- **Never approve:** anything with `sudo`, `brew`, `winget`, `choco`, `curl`, `install -g`, `git push`, `git reset`, or `git rebase`. Say no and contact your operator.

If the app has a setting to "always allow" a command, it's fine to use it for `npm run` commands only.
