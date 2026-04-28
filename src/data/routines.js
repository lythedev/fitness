import { Flame, Heart, Moon, Footprints } from "lucide-react";
import { warmups, cooldowns, closings } from "./blocks";

// A routine is a recipe: title + type + ordered warm-up / workout / cool-down,
// plus an optional `closing` tagline shown at the bottom of the day.
// Workout entries reference exercises by id and supply per-routine `sets`,
// optionally overriding `name`, `cue`, or `timer` from the exercise library.
// An optional `group` letter pairs consecutive exercises into a superset.
// Warm-up / cool-down items are strings (rep-based) or { text, timer } (timed),
// composed from named blocks in `blocks.js` so phrasing stays consistent.

export const routines = {
  gluteDay: {
    type: "lift",
    title: "Lower Body — Glute Day",
    icon: Flame,
    closing: closings.progressiveOverload,
    warmup: warmups.glute,
    workout: [
      { id: "hipThrust",     sets: "4 × 6–8" },
      { id: "rdl",           sets: "3 × 8–10" },
      { id: "bulgarian",     sets: "3 × 8–10 each" },
      { id: "cableKickback", sets: "3 × 12–15 each", group: "A" },
      { id: "pallof",        sets: "3 × 10 each side", group: "A" },
      { id: "hangingKnee",   sets: "3 × 10–12" },
    ],
    cooldown: cooldowns.glute,
  },

  upperBodyCore: {
    type: "lift",
    title: "Upper Body + Core",
    icon: Flame,
    closing: closings.progressiveOverload,
    warmup: warmups.upper,
    workout: [
      { id: "shoulderPress",   sets: "3 × 8–10",          group: "A" },
      { id: "latPulldown",     sets: "3 × 8–10",          group: "A" },
      { id: "dbRow",           sets: "3 × 10 each side",  group: "B" },
      { id: "bicepCurl",       sets: "3 × 10",            group: "B" },
      { id: "tricepExtension", sets: "3 × 10",            group: "B" },
      { id: "pushup",          sets: "3 × AMRAP",         group: "C" },
      { id: "woodchopper",     sets: "3 × 10 each side",  group: "C" },
      { id: "plank",           sets: "3 × 30–45 sec" },
    ],
    cooldown: cooldowns.upper,
  },

  gluteQuad: {
    type: "lift",
    title: "Lower Body — Glute + Quad",
    icon: Flame,
    closing: closings.progressiveOverload,
    warmup: warmups.gluteQuad,
    workout: [
      { id: "goblet",       sets: "4 × 8–10" },
      {
        id: "hipThrust",
        sets: "3 × 12–15",
        name: "Hip Thrust (lighter)",
        cue: "Higher reps today. Focus on the squeeze.",
      },
      { id: "walkingLunge", sets: "3 × 10 each leg" },
      { id: "hipAbduction", sets: "4 × 15–20",         group: "A" },
      { id: "hamCurl",      sets: "3 × 10–12",         group: "A" },
      { id: "deadbug",      sets: "3 × 8–10 each",     group: "B" },
      { id: "sidePlank",    sets: "3 × 30 sec each",   group: "B" },
    ],
    cooldown: cooldowns.gluteQuad,
  },

  pilatesCore: {
    type: "pilates",
    title: "Pilates — Core & Posture",
    icon: Heart,
    closing: closings.pilatesControl,
    warmup: warmups.pilatesCore,
    workout: [
      { id: "hundred",          sets: "1 × 100 breaths" },
      { id: "rollUp",           sets: "3 × 8" },
      { id: "singleLegStretch", sets: "3 × 10 each" },
      { id: "crissCross",       sets: "3 × 12 each side" },
      { id: "swan",             sets: "3 × 8" },
      { id: "sideLegLift",      sets: "3 × 12 each side" },
      { id: "forearmPlank",     sets: "3 × 45 sec" },
    ],
    cooldown: cooldowns.pilatesCore,
  },

  pilatesLower: {
    type: "pilates",
    title: "Pilates — Glutes & Lower Body",
    icon: Heart,
    closing: closings.pilatesLight,
    warmup: warmups.pilatesLower,
    workout: [
      { id: "pelvicCurl",      sets: "3 × 12" },
      { id: "singleLegBridge", sets: "3 × 10 each" },
      { id: "clamshellPulse",  sets: "3 × 15 each side" },
      { id: "donkeyKick",      sets: "3 × 12 each" },
      { id: "sideLegCircle",   sets: "3 × 10 each direction" },
      { id: "innerThighLift",  sets: "3 × 15 each" },
      { id: "birdDog",         sets: "3 × 8 each" },
    ],
    cooldown: cooldowns.pilatesLower,
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
