// Reusable warm-up / cool-down primitives and named blocks.
// Every move is { name, image, cue, timer? }. Blocks are arrays of moves.

// Single shared catalog: cardio primers, mobility/activation reps, and stretches.
// Same shape so the Checklist UI can render them uniformly with a diagram + cue.
export const moves = {
  // Cardio primers
  inclineWalk3: {
    name: "3 min incline walk or bike",
    image: "incline-walk",
    cue: "Easy pace. Just enough to warm the body.",
    timer: 180,
  },
  inclineWalk3Plain: {
    name: "3 min incline walk",
    image: "incline-walk",
    cue: "Brisk but conversational. Set incline to 5–8%.",
    timer: 180,
  },
  light2: {
    name: "2 min light cardio",
    image: "light-cardio",
    cue: "Walk, bike, or march — get the blood moving.",
    timer: 120,
  },
  marchBreath2: {
    name: "2 min easy march + nasal breathing",
    image: "march",
    cue: "In through the nose, out through the nose. Settle in.",
    timer: 120,
  },
  march2: {
    name: "2 min march in place",
    image: "march",
    cue: "Lift the knees. Swing the arms naturally.",
    timer: 120,
  },

  // Mobility / activation
  bwGluteBridges: {
    name: "10 bodyweight glute bridges",
    image: "glute-bridge",
    cue: "Drive through the heels. Squeeze hard at the top.",
  },
  bwSquats: {
    name: "10 bodyweight squats",
    image: "bodyweight-squat",
    cue: "Sit between your hips. Knees track over toes.",
  },
  bandedGluteBridges: {
    name: "10 banded glute bridges",
    image: "banded-glute-bridge",
    cue: "Press the knees out against the band the whole time.",
  },
  bandedClamshells: {
    name: "10 banded clamshells each side",
    image: "clamshell",
    cue: "Stack the hips. Don't let the top one roll back.",
  },
  bandedLateralWalks: {
    name: "10 banded lateral walks each direction",
    image: "banded-lateral-walk",
    cue: "Stay low. Keep tension on the band the whole step.",
  },
  bandedMonsterWalks: {
    name: "10 banded monster walks",
    image: "monster-walk",
    cue: "Small steps forward and back. Knees pressed out.",
  },
  walkingLunges: {
    name: "10 walking lunges",
    image: "walking-lunge",
    cue: "Long stride. Push through the front heel.",
  },
  pilatesGluteBridges: {
    name: "Bodyweight glute bridges — 10 reps",
    image: "glute-bridge",
    cue: "Slow and controlled. Peel the spine up one bone at a time.",
  },
  pilatesSquatsReach: {
    name: "Bodyweight squats with reach — 10 reps",
    image: "squat-reach",
    cue: "Reach overhead as you stand. Lengthen tall.",
  },
  armCircles: {
    name: "Arm circles — 10 each direction",
    image: "arm-circle",
    cue: "Big circles, then smaller. Loosen the shoulders.",
  },
  bandPullAparts: {
    name: "Band pull-aparts — 15 reps",
    image: "band-pull-apart",
    cue: "Squeeze the shoulder blades together. Stay tall.",
  },
  catCow: {
    name: "Cat-cow — 8 reps",
    image: "cat-cow",
    cue: "Move with the breath. Inhale arch, exhale round.",
  },
  scapPushups: {
    name: "Scapular push-ups — 10 reps",
    image: "scap-pushup",
    cue: "Just the shoulder blades — keep the arms straight.",
  },
  pelvicTilts: {
    name: "Pelvic tilts — 10 reps",
    image: "pelvic-tilt",
    cue: "Small rocks. Find neutral, then tuck and untuck.",
  },
  rollDowns: {
    name: "Roll downs — 5 reps",
    image: "roll-down",
    cue: "Chin to chest. Melt down one vertebra at a time.",
  },
  spineTwist: {
    name: "Seated spine twist — 8 each side",
    image: "seated-spine-twist",
    cue: "Sit tall first, then rotate from the ribs.",
  },
  hipCircles: {
    name: "Hip circles — 8 each direction",
    image: "hip-circle",
    cue: "Hands on hips. Big slow circles each way.",
  },

  // Stretches (cool-downs)
  pigeon: {
    name: "Pigeon pose — 1 min each side",
    image: "pigeon",
    cue: "Square the hips. Breathe into the front glute.",
    timer: 60,
  },
  figure4: {
    name: "Figure-4 stretch — 1 min each side",
    image: "figure-4",
    cue: "On your back. Pull the bottom thigh toward your chest.",
    timer: 60,
  },
  happyBaby: {
    name: "Happy baby — 1 min",
    image: "happy-baby",
    cue: "Grip the outside of the feet. Rock gently side to side.",
    timer: 60,
  },
  childsPose: {
    name: "Child's pose — 1 min",
    image: "childs-pose",
    cue: "Hips back to heels, forehead down. Breathe wide into the back.",
    timer: 60,
  },
  childsPoseSideReach: {
    name: "Child's pose with side reach — 30 sec each side",
    image: "childs-pose-side-reach",
    cue: "Walk the hands to one side, then the other.",
    timer: 30,
  },
  couchStretch: {
    name: "Couch stretch — 1 min each side",
    image: "couch-stretch",
    cue: "Back foot up against the wall. Squeeze the back glute.",
    timer: 60,
  },
  quadStretch: {
    name: "Standing quad stretch — 30 sec each",
    image: "quad-stretch",
    cue: "Pull the heel to the butt. Knees together. Tuck the pelvis.",
    timer: 30,
  },
  hamstringStretch: {
    name: "Seated hamstring stretch — 1 min each side",
    image: "hamstring-stretch",
    cue: "Lengthen the spine first, then hinge from the hips.",
    timer: 60,
  },
  forwardFold: {
    name: "Standing forward fold — 1 min",
    image: "forward-fold",
    cue: "Soft knees. Let the head and arms hang heavy.",
    timer: 60,
  },
  seatedForwardFold: {
    name: "Seated forward fold — 1 min",
    image: "seated-forward-fold",
    cue: "Hinge from the hips, not the lower back.",
    timer: 60,
  },
  supineTwist60: {
    name: "Supine spinal twist — 1 min each side",
    image: "supine-twist",
    cue: "Knees over to one side, opposite arm wide. Look away.",
    timer: 60,
  },
  supineTwist30: {
    name: "Supine spinal twist — 30 sec each side",
    image: "supine-twist",
    cue: "Same shape — keep the shoulders pinned to the floor.",
    timer: 30,
  },
  doorwayChest: {
    name: "Doorway chest stretch — 30 sec each side",
    image: "doorway-chest",
    cue: "Forearm on the frame. Step through gently.",
    timer: 30,
  },
  shoulderCross: {
    name: "Cross-body shoulder stretch — 30 sec each",
    image: "shoulder-cross",
    cue: "Pull the arm across. Keep the shoulder pulled down.",
    timer: 30,
  },
  threadNeedle: {
    name: "Thread the needle — 30 sec each side",
    image: "thread-the-needle",
    cue: "From all fours, thread one arm under the other.",
    timer: 30,
  },
  cobraChildFlow: {
    name: "Cobra to child's flow — 30 sec",
    image: "cobra-child-flow",
    cue: "Cobra on the inhale, child's pose on the exhale.",
    timer: 30,
  },
};

// Named blocks — composed from moves. Routines reference these directly.
export const warmups = {
  glute: [
    moves.inclineWalk3,
    moves.bwGluteBridges,
    moves.bwSquats,
    moves.bandedClamshells,
    moves.bandedLateralWalks,
  ],
  upper: [
    moves.light2,
    moves.armCircles,
    moves.bandPullAparts,
    moves.catCow,
    moves.scapPushups,
  ],
  gluteQuad: [
    moves.inclineWalk3Plain,
    moves.bwSquats,
    moves.walkingLunges,
    moves.bandedGluteBridges,
    moves.bandedMonsterWalks,
  ],
  pilatesCore: [
    moves.marchBreath2,
    moves.catCow,
    moves.pelvicTilts,
    moves.rollDowns,
    moves.spineTwist,
  ],
  pilatesLower: [
    moves.march2,
    moves.hipCircles,
    moves.catCow,
    moves.pilatesGluteBridges,
    moves.pilatesSquatsReach,
  ],
};

export const cooldowns = {
  glute: [
    moves.pigeon,
    moves.quadStretch,
    moves.hamstringStretch,
    moves.childsPoseSideReach,
  ],
  upper: [
    moves.doorwayChest,
    moves.shoulderCross,
    moves.childsPose,
    moves.threadNeedle,
  ],
  gluteQuad: [
    moves.couchStretch,
    moves.figure4,
    moves.forwardFold,
    moves.happyBaby,
  ],
  pilatesCore: [
    moves.supineTwist60,
    moves.childsPose,
    moves.cobraChildFlow,
    moves.seatedForwardFold,
  ],
  pilatesLower: [
    moves.pigeon,
    moves.figure4,
    moves.happyBaby,
    moves.supineTwist30,
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
