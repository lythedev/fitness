# Fitness

A weekly workout planner — two lift days, two pilates days, recovery in between. Built with Vite + React + Tailwind, deployed to GitHub Pages.

Live: https://lythedev.github.io/fitness/

## Prerequisites

- Node.js 20+ (`node -v`)
- npm 10+ (ships with Node)

## Setup

```bash
git clone https://github.com/lythedev/fitness.git
cd fitness
npm install
```

## Run locally

```bash
npm run dev
```

Opens at http://localhost:5173/fitness/ (note the `/fitness/` path — it matches the production base).

## Build

```bash
npm run build      # outputs to ./dist
npm run preview    # serves the production build locally
```

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and publishes to GitHub Pages.

**One-time repo setup:** Settings → Pages → Source: **GitHub Actions**.

## Adding exercise images

Drop files into `public/images/exercises/` using these exact names (extension set in `src/App.jsx` via `IMAGE_EXT`, default `jpg`):

```
hip-thrust              romanian-deadlift       bulgarian-split-squat
cable-kickback          goblet-squat            walking-lunge
hip-abduction           hamstring-curl          shoulder-press
lat-pulldown            db-row                  pushup
bicep-curl              pallof-press            hanging-knee-raise
woodchopper             dead-bug                side-plank
plank
```

Missing images render an inline placeholder showing the expected filename — no broken-image icons.

## Project structure

```
.github/workflows/deploy.yml   # Build + deploy to Pages on push to main
public/images/exercises/       # Exercise photos (committed to repo)
src/App.jsx                    # Main component — week data + UI
src/main.jsx                   # React entry
src/index.css                  # Tailwind directives
vite.config.js                 # base: "/fitness/"
```
