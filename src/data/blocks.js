// Reusable warm-up / cool-down primitives and named blocks.
// Atoms are single items (string for rep-based, { text, timer } for timed).
// Blocks are arrays composed from atoms — routines reference blocks directly.

// Cardio primers
export const cardio = {
  inclineWalk3:      { text: "3 min incline walk or bike",      timer: 180 },
  inclineWalk3Plain: { text: "3 min incline walk",              timer: 180 },
  light2:            { text: "2 min light cardio",              timer: 120 },
  marchBreath2:      { text: "2 min easy march + nasal breathing", timer: 120 },
  march2:            { text: "2 min march in place",            timer: 120 },
};

// Mobility / activation reps (rep-based, no timer)
export const mobility = {
  bwGluteBridges:   "10 bodyweight glute bridges",
  bwSquats:         "10 bodyweight squats",
  bandedGluteBridges: "10 banded glute bridges",
  bandedClamshells: "10 banded clamshells each side",
  bandedLateralWalks: "10 banded lateral walks each direction",
  bandedMonsterWalks: "10 banded monster walks",
  walkingLunges:    "10 walking lunges",
  pilatesGluteBridges: "Bodyweight glute bridges — 10 reps",
  pilatesSquatsReach:  "Bodyweight squats with reach — 10 reps",
  armCircles:       "Arm circles — 10 each direction",
  bandPullAparts:   "Band pull-aparts — 15 reps",
  catCow:           "Cat-cow — 8 reps",
  scapPushups:      "Scapular push-ups — 10 reps",
  pelvicTilts:      "Pelvic tilts — 10 reps",
  rollDowns:        "Roll downs — 5 reps",
  spineTwist:       "Seated spine twist — 8 each side",
  hipCircles:       "Hip circles — 8 each direction",
};

// Stretches (timed, used in cool-downs)
export const stretches = {
  pigeon:             { text: "Pigeon pose — 1 min each side",            timer: 60 },
  figure4:            { text: "Figure-4 stretch — 1 min each side",       timer: 60 },
  happyBaby:          { text: "Happy baby — 1 min",                       timer: 60 },
  childsPose:         { text: "Child's pose — 1 min",                     timer: 60 },
  childsPoseSideReach:{ text: "Child's pose with side reach — 30 sec each side", timer: 30 },
  couchStretch:       { text: "Couch stretch — 1 min each side",          timer: 60 },
  quadStretch:        { text: "Standing quad stretch — 30 sec each",      timer: 30 },
  hamstringStretch:   { text: "Seated hamstring stretch — 1 min each side", timer: 60 },
  forwardFold:        { text: "Standing forward fold — 1 min",            timer: 60 },
  seatedForwardFold:  { text: "Seated forward fold — 1 min",              timer: 60 },
  supineTwist60:      { text: "Supine spinal twist — 1 min each side",    timer: 60 },
  supineTwist30:      { text: "Supine spinal twist — 30 sec each side",   timer: 30 },
  doorwayChest:       { text: "Doorway chest stretch — 30 sec each side", timer: 30 },
  shoulderCross:      { text: "Cross-body shoulder stretch — 30 sec each", timer: 30 },
  threadNeedle:       { text: "Thread the needle — 30 sec each side",     timer: 30 },
  cobraChildFlow:     { text: "Cobra to child's flow — 30 sec",           timer: 30 },
};

// Named blocks — composed from atoms. Routines reference these directly.
export const warmups = {
  glute: [
    cardio.inclineWalk3,
    mobility.bwGluteBridges,
    mobility.bwSquats,
    mobility.bandedClamshells,
    mobility.bandedLateralWalks,
  ],
  upper: [
    cardio.light2,
    mobility.armCircles,
    mobility.bandPullAparts,
    mobility.catCow,
    mobility.scapPushups,
  ],
  gluteQuad: [
    cardio.inclineWalk3Plain,
    mobility.bwSquats,
    mobility.walkingLunges,
    mobility.bandedGluteBridges,
    mobility.bandedMonsterWalks,
  ],
  pilatesCore: [
    cardio.marchBreath2,
    mobility.catCow,
    mobility.pelvicTilts,
    mobility.rollDowns,
    mobility.spineTwist,
  ],
  pilatesLower: [
    cardio.march2,
    mobility.hipCircles,
    mobility.catCow,
    mobility.pilatesGluteBridges,
    mobility.pilatesSquatsReach,
  ],
};

export const cooldowns = {
  glute: [
    stretches.pigeon,
    stretches.quadStretch,
    stretches.hamstringStretch,
    stretches.childsPoseSideReach,
  ],
  upper: [
    stretches.doorwayChest,
    stretches.shoulderCross,
    stretches.childsPose,
    stretches.threadNeedle,
  ],
  gluteQuad: [
    stretches.couchStretch,
    stretches.figure4,
    stretches.forwardFold,
    stretches.happyBaby,
  ],
  pilatesCore: [
    stretches.supineTwist60,
    stretches.childsPose,
    stretches.cobraChildFlow,
    stretches.seatedForwardFold,
  ],
  pilatesLower: [
    stretches.pigeon,
    stretches.figure4,
    stretches.happyBaby,
    stretches.supineTwist30,
  ],
};

// Closing taglines used by multiple routines.
export const closings = {
  progressiveOverload:
    "Add 5 lbs or 1–2 reps somewhere this week.\nThat's how glutes grow.",
  pilatesControl:
    "Quality over reps. Stay long, breathe deep,\ncontrol every inch.",
  pilatesLight:
    "Lighter than lift days, but the glutes\nstill earn their keep.",
};

// Common rep schemes — name them once so a tweak propagates.
export const sets = {
  strength:    "4 × 6–8",
  hypertrophy: "3 × 8–10",
  accessory:   "3 × 10–12",
};
