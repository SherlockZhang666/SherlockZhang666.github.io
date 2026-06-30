# Personal Homepage

A clean, single-page academic homepage (Embodied AI · Robotics · Tactile · 3D Vision),
hosted on GitHub Pages. Plain HTML/CSS/JS — no build step.

**Live URL:** https://sherlockzhang666.github.io

## How to edit

Everything you need to change is in **`index.html`**, marked with `<!-- EDIT: ... -->`
comments. Replace the placeholder text with your real info:

- Your name, role, and bio (the hero section)
- News, research areas, publications
- Education / experience / honors (CV section)
- Email and profile links (Email, CV, Google Scholar, GitHub, LinkedIn)

### Add your photo
Drop a square photo at `assets/img/profile.jpg`. Until then a gray placeholder shows.

### Add your CV
Drop your PDF at `assets/cv.pdf`. The "CV" buttons link there.

### Change colors
Edit the color tokens at the top of `assets/css/style.css` (`:root { --navy: ... }`).

## Preview locally

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploy

Push to the `master` (or `main`) branch, then in the repo:
**Settings → Pages → Build and deployment → Source: "Deploy from a branch"**,
branch = your default branch, folder = `/ (root)`. Live in ~1 minute.
