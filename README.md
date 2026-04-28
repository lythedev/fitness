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

Drop files into `public/images/exercises/` using these exact names (extension set in `src/data/index.js` via `IMAGE_EXT`, default `jpeg`). The slug per exercise lives on the `image` field in `src/data/exercises.js`:

```
hip-thrust              romanian-deadlift       bulgarian-split-squat
cable-kickback          goblet-squat            walking-lunge
hip-abduction           hamstring-curl          shoulder-press
lat-pulldown            db-row                  pushup
bicep-curl              pallof-press            hanging-knee-raise
woodchopper             dead-bug                side-plank
plank

# pilates — core & posture
the-hundred             roll-up                 single-leg-stretch
criss-cross             swan                    side-leg-lift
forearm-plank

# pilates — glutes & lower body
pelvic-curl             single-leg-bridge       clamshell-pulse
donkey-kick             side-leg-circle         inner-thigh-lift
bird-dog
```

Missing images render an inline placeholder showing the expected filename — no broken-image icons.

## Routing

Uses `HashRouter` from `react-router-dom`, so URLs look like `/fitness/#/day/0`. This avoids 404s on refresh under GitHub Pages, which can't rewrite SPA routes server-side.

- `/` — week list
- `/day/:dayIndex` — day detail (0–6, Mon–Sun)

## Data model

The schedule is split into three layers so adding a new routine is a few lines, not a full re-write:

- **`src/data/exercises.js`** — canonical exercise library. Each entry has `name`, `image` (file slug), `cue`, and optional `timer` (default seconds for time-based moves like Plank).
- **`src/data/routines.js`** — named routines (e.g. `gluteDay`, `upperBodyCore`). A workout entry references an exercise by id and supplies per-routine `sets`; it can override `name`, `cue`, or `timer` for that specific use. Warm-up / cool-down items are plain strings (rep-based) or `{ text, timer }` (timed).
- **`src/data/week.js`** — the week schedule, mapping each day to a `routineId` and a day-flavored `accent` line. Reorder the week or swap routines without touching the routine itself.
- **`src/data/index.js`** — resolves the schedule and re-exports a single `week` array (each entry has its routine merged in and exercise refs replaced with full objects). UI code imports from `"../data"` and never touches the raw layers.

To add a new routine: define it in `routines.js`, then point a day at it in `week.js`.

## Project structure

```
.github/workflows/deploy.yml   # Build + deploy to Pages on push to main
public/images/exercises/       # Exercise photos (committed to repo)
src/
  main.jsx                     # React entry, wraps App in HashRouter
  App.jsx                      # Routes shell + shared completed state
  index.css                    # Tailwind directives
  theme.js                     # Color palette, type styles, font stacks
  data/
    exercises.js               # Exercise library (name, image, cue, timer)
    routines.js                # Named routines composed from exercises
    week.js                    # Week schedule (day → routineId)
    index.js                   # Resolves and re-exports week + helpers
  pages/
    WeekView.jsx               # Week list page
    DayView.jsx                # Day detail page
  components/
    DayCard.jsx                # Row in week list
    DayHero.jsx                # Colored header on day detail
    ExerciseCard.jsx           # Single exercise with image, sets, cue, timer
    ExerciseImage.jsx          # Image with auto-placeholder on 404
    Checklist.jsx              # Warm-up / cool-down checkable list (with timers)
    Timer.jsx                  # Countdown pill with audio + vibration
vite.config.js                 # base: "/fitness/"
```
