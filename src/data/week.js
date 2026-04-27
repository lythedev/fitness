// The week schedule: each day points to a routine and supplies a day-flavored accent.
// Swap the routineId to reorganize the week without touching the routine itself.

export const weekDays = [
  { day: "Monday",    short: "Mon", routineId: "gluteDay",      accent: "Heaviest day. Hip thrusts are the priority." },
  { day: "Tuesday",   short: "Tue", routineId: "pilates",       accent: "Reformer or mat — your call. Enjoy it." },
  { day: "Wednesday", short: "Wed", routineId: "upperBodyCore", accent: "30–40 minutes. Keeps proportions balanced." },
  { day: "Thursday",  short: "Thu", routineId: "pilates",       accent: "Same as Tuesday. Move and breathe." },
  { day: "Friday",    short: "Fri", routineId: "gluteQuad",     accent: "Different angles than Monday. Higher reps." },
  { day: "Saturday",  short: "Sat", routineId: "walkOrPilates", accent: "30–45 min walk outside, or gentle mat. Recovery, not training." },
  { day: "Sunday",    short: "Sun", routineId: "rest",          accent: "Full rest. Foam roll if tight, otherwise — take it." },
];
