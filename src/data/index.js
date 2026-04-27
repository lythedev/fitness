import { exercises } from "./exercises";
import { routines } from "./routines";
import { weekDays } from "./week";

export { exercises, routines };

export const IMAGE_EXT = "jpeg";
const IMAGE_FOLDER = `${import.meta.env.BASE_URL}images/exercises`;

export const getImagePath = (slug) => `${IMAGE_FOLDER}/${slug}.${IMAGE_EXT}`;
export const getFilename = (slug) => `${slug}.${IMAGE_EXT}`;

function resolveDay(d) {
  const r = routines[d.routineId];
  if (!r) return null;
  return {
    ...r,
    day: d.day,
    short: d.short,
    accent: d.accent,
    workout: r.workout
      ? r.workout.map((item) => ({ ...exercises[item.id], ...item }))
      : undefined,
  };
}

// Resolved week — each entry merges its routine with day-level fields
// (short name, accent) and resolves workout exercise refs against the library.
export const week = weekDays.map(resolveDay);

export const restCopy = {
  pilates: "Show up, move well, and let it feel good. No need to push intensity here — the lifting days do the heavy work.",
  active: "Get outside if you can. Walking is one of the most underrated tools for body composition. Aim for 7–10k steps.",
  rest: "Recovery is when growth actually happens. Hydrate, sleep, eat your protein. The work this week pays off through rest.",
};
