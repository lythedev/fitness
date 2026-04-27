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
};
