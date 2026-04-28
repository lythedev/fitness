// The week schedule: each day points to a routine and supplies a day-flavored accent.
// Swap the routineId to reorganize the week without touching the routine itself.

export const weekDays = [
  { day: "Monday",    short: "Mon", routineId: "gluteDay",      accent: "Heaviest day. Hip thrusts are the priority." },
  { day: "Tuesday",   short: "Tue", routineId: "pilatesCore",   accent: "Core, spine, and posture. Reformer or mat." },
  { day: "Wednesday", short: "Wed", routineId: "upperBodyCore", accent: "30–40 minutes. Keeps proportions balanced." },
  { day: "Thursday",  short: "Thu", routineId: "pilatesLower",  accent: "Glute activation and hip mobility. Light load, deep work." },
  { day: "Friday",    short: "Fri", routineId: "gluteQuad",     accent: "Different angles than Monday. Higher reps." },
  { day: "Saturday",  short: "Sat", routineId: "walkOrPilates", accent: "30–45 min walk outside, or gentle mat. Recovery, not training." },
  { day: "Sunday",    short: "Sun", routineId: "rest",          accent: "Full rest. Foam roll if tight, otherwise — take it." },
];
