import { Flame, Heart, Moon, Footprints } from "lucide-react";

// A routine is a recipe: title + type + ordered warm-up / workout / cool-down.
// Workout entries reference exercises by id and supply per-routine `sets`,
// optionally overriding `name`, `cue`, or `timer` from the exercise library.
// Warm-up / cool-down items are strings (rep-based) or { text, timer } (timed).

export const routines = {
  gluteDay: {
    type: "lift",
    title: "Lower Body — Glute Day",
    icon: Flame,
    warmup: [
      { text: "3 min incline walk or bike", timer: 180 },
      "10 bodyweight glute bridges",
      "10 bodyweight squats",
      "10 banded clamshells each side",
      "10 banded lateral walks each direction",
    ],
    workout: [
      { id: "hipThrust", sets: "4 × 6–8" },
      { id: "rdl", sets: "3 × 8–10" },
      { id: "bulgarian", sets: "3 × 8–10 each" },
      { id: "cableKickback", sets: "3 × 12–15 each" },
      { id: "pallof", sets: "3 × 10 each side" },
      { id: "hangingKnee", sets: "3 × 10–12" },
    ],
    cooldown: [
      { text: "Pigeon pose — 1 min each side", timer: 60 },
      { text: "Standing quad stretch — 30 sec each", timer: 30 },
      { text: "Seated hamstring stretch — 1 min each side", timer: 60 },
      { text: "Child's pose with side reach — 30 sec each side", timer: 30 },
    ],
  },

  upperBodyCore: {
    type: "lift",
    title: "Upper Body + Core",
    icon: Flame,
    warmup: [
      { text: "2 min light cardio", timer: 120 },
      "Arm circles — 10 each direction",
      "Band pull-aparts — 15 reps",
      "Cat-cow — 8 reps",
      "Scapular push-ups — 10 reps",
    ],
    workout: [
      { id: "shoulderPress", sets: "3 × 8–10" },
      { id: "latPulldown", sets: "3 × 8–10" },
      { id: "dbRow", sets: "3 × 10 each side" },
      { id: "pushup", sets: "3 × AMRAP" },
      { id: "bicepCurl", sets: "3 × 10 each (superset)" },
      { id: "woodchopper", sets: "3 × 10 each side" },
      { id: "plank", sets: "3 × 30–45 sec" },
    ],
    cooldown: [
      { text: "Doorway chest stretch — 30 sec each side", timer: 30 },
      { text: "Cross-body shoulder stretch — 30 sec each", timer: 30 },
      { text: "Child's pose — 1 min", timer: 60 },
      { text: "Thread the needle — 30 sec each side", timer: 30 },
    ],
  },

  gluteQuad: {
    type: "lift",
    title: "Lower Body — Glute + Quad",
    icon: Flame,
    warmup: [
      { text: "3 min incline walk", timer: 180 },
      "10 bodyweight squats",
      "10 walking lunges",
      "10 banded glute bridges",
      "10 banded monster walks",
    ],
    workout: [
      { id: "goblet", sets: "4 × 8–10" },
      {
        id: "hipThrust",
        sets: "3 × 12–15",
        name: "Hip Thrust (lighter)",
        cue: "Higher reps today. Focus on the squeeze.",
      },
      { id: "walkingLunge", sets: "3 × 10 each leg" },
      { id: "hipAbduction", sets: "4 × 15–20" },
      { id: "hamCurl", sets: "3 × 10–12" },
      { id: "deadbug", sets: "3 × 8–10 each" },
      { id: "sidePlank", sets: "3 × 30 sec each" },
    ],
    cooldown: [
      { text: "Couch stretch — 1 min each side", timer: 60 },
      { text: "Figure-4 stretch — 1 min each side", timer: 60 },
      { text: "Standing forward fold — 1 min", timer: 60 },
      { text: "Happy baby — 1 min", timer: 60 },
    ],
  },

  pilates: {
    type: "pilates",
    title: "Pilates",
    icon: Heart,
  },

  walkOrPilates: {
    type: "active",
    title: "Walk or Light Pilates",
    icon: Footprints,
  },

  rest: {
    type: "rest",
    title: "Rest",
    icon: Moon,
  },
};
