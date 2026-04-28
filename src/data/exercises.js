// Canonical exercise library. Routines reference these by key and may override
// `name`, `cue`, or `timer` per use.

export const exercises = {
  hipThrust: {
    name: "Barbell Hip Thrust",
    image: "hip-thrust",
    cue: "Squeeze glutes hard at the top. Chin tucked.",
  },
  rdl: {
    name: "Romanian Deadlift",
    image: "romanian-deadlift",
    cue: "Push hips back, soft knees, feel the hamstring stretch.",
  },
  bulgarian: {
    name: "Bulgarian Split Squat",
    image: "bulgarian-split-squat",
    cue: "Front foot far enough that knee tracks over ankle.",
  },
  cableKickback: {
    name: "Cable Kickback",
    image: "cable-kickback",
    cue: "Slow on the way back. No swinging.",
  },
  goblet: {
    name: "Goblet Squat (or Hack Squat)",
    image: "goblet-squat",
    cue: "Chest up, sit between your hips.",
  },
  walkingLunge: {
    name: "Walking Lunges",
    image: "walking-lunge",
    cue: "Long stride. Push through front heel.",
  },
  hipAbduction: {
    name: "Seated Hip Abduction",
    image: "hip-abduction",
    cue: "Lean forward slightly to bias upper glute.",
  },
  hamCurl: {
    name: "Hamstring Curl",
    image: "hamstring-curl",
    cue: "Slow eccentric — 3 sec down.",
  },
  shoulderPress: {
    name: "Dumbbell Shoulder Press",
    image: "shoulder-press",
    cue: "Press straight up. Don't flare elbows wide.",
  },
  latPulldown: {
    name: "Lat Pulldown",
    image: "lat-pulldown",
    cue: "Pull to upper chest. Lead with elbows.",
  },
  dbRow: {
    name: "Dumbbell Row",
    image: "db-row",
    cue: "Row to hip, not chest. Squeeze shoulder blade.",
  },
  pushup: {
    name: "Push-ups",
    image: "pushup",
    cue: "Knees down if needed. Full range of motion.",
  },
  bicepCurl: {
    name: "Bicep Curl + Tricep Extension",
    image: "bicep-curl",
    cue: "Slow on the way down. No swinging.",
  },
  pallof: {
    name: "Pallof Press",
    image: "pallof-press",
    cue: "Resist rotation. Core stays tight.",
  },
  hangingKnee: {
    name: "Hanging Knee Raise",
    image: "hanging-knee-raise",
    cue: "Curl knees up, no swinging.",
  },
  woodchopper: {
    name: "Cable Woodchopper",
    image: "woodchopper",
    cue: "Rotate from the core, not the arms.",
  },
  deadbug: {
    name: "Dead Bug",
    image: "dead-bug",
    cue: "Lower back stays pressed into floor.",
  },
  plank: {
    name: "Plank",
    image: "plank",
    cue: "Squeeze glutes and quads. Don't let hips sag.",
    timer: 45,
  },
  sidePlank: {
    name: "Side Plank",
    image: "side-plank",
    cue: "Stack hips. Don't let them drop.",
    timer: 30,
  },

  // Pilates — core & posture
  hundred: {
    name: "The Hundred",
    image: "the-hundred",
    cue: "Pump arms in small beats. Inhale 5, exhale 5. Low back pressed down.",
    timer: 60,
  },
  rollUp: {
    name: "Roll-Up",
    image: "roll-up",
    cue: "Reach long. Peel up one vertebra at a time — no momentum.",
  },
  singleLegStretch: {
    name: "Single Leg Stretch",
    image: "single-leg-stretch",
    cue: "Head and shoulders lifted. Switch legs slow and controlled.",
  },
  crissCross: {
    name: "Criss-Cross",
    image: "criss-cross",
    cue: "Rotate from the ribs, not the elbow. Reach back knee long.",
  },
  swan: {
    name: "Swan",
    image: "swan",
    cue: "Lengthen first, then lift. Glutes engaged, neck long.",
  },
  sideLegLift: {
    name: "Side-Lying Leg Lift",
    image: "side-leg-lift",
    cue: "Lift from the outer hip. Keep waist long off the mat.",
  },
  forearmPlank: {
    name: "Forearm Plank",
    image: "forearm-plank",
    cue: "Tuck pelvis. Drive heels back, crown of head forward.",
    timer: 45,
  },

  // Pilates — glutes & lower body
  pelvicCurl: {
    name: "Pelvic Curl Bridge",
    image: "pelvic-curl",
    cue: "Roll up bone by bone. Squeeze glutes at the top, then roll down slow.",
  },
  singleLegBridge: {
    name: "Single Leg Bridge",
    image: "single-leg-bridge",
    cue: "Hips stay level. Drive through the heel of the working leg.",
  },
  clamshellPulse: {
    name: "Clamshell Pulse",
    image: "clamshell-pulse",
    cue: "Heels glued together. Don't let your top hip roll back.",
  },
  donkeyKick: {
    name: "Donkey Kick",
    image: "donkey-kick",
    cue: "Press the heel to the ceiling. No arching the low back.",
  },
  sideLegCircle: {
    name: "Side-Lying Leg Circle",
    image: "side-leg-circle",
    cue: "Small, controlled circles. Move from the hip socket.",
  },
  innerThighLift: {
    name: "Inner Thigh Lift",
    image: "inner-thigh-lift",
    cue: "Top leg crossed in front. Lift the bottom leg from the inner thigh.",
  },
  birdDog: {
    name: "Bird Dog",
    image: "bird-dog",
    cue: "Reach opposite hand and foot long. Hips square to the floor.",
  },
};
