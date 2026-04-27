import React, { useState } from "react";
import { ChevronLeft, Check, Circle, Flame, Heart, Moon, Footprints, ImageOff } from "lucide-react";

// ═══════════════════════════════════════════════════════════════
// 📁 IMAGE FOLDER SETUP
// ═══════════════════════════════════════════════════════════════
//
// Save your images to: /public/images/exercises/
//
// Use these EXACT filenames (any of these extensions work:
// .jpg, .jpeg, .png, .webp — just update IMAGE_EXT below):
//
//   hip-thrust.jpg
//   romanian-deadlift.jpg
//   bulgarian-split-squat.jpg
//   cable-kickback.jpg
//   goblet-squat.jpg
//   walking-lunge.jpg
//   hip-abduction.jpg
//   hamstring-curl.jpg
//   shoulder-press.jpg
//   lat-pulldown.jpg
//   db-row.jpg
//   pushup.jpg
//   bicep-curl.jpg
//   pallof-press.jpg
//   hanging-knee-raise.jpg
//   woodchopper.jpg
//   dead-bug.jpg
//   side-plank.jpg
//   plank.jpg
//
// If any image is missing, a placeholder shows automatically.
// ═══════════════════════════════════════════════════════════════

const IMAGE_FOLDER = `${import.meta.env.BASE_URL}images/exercises`;
const IMAGE_EXT = "jpg"; // change to "png", "webp", etc. if needed

// Maps each exercise to its filename (without extension)
const IMAGE_FILENAMES = {
  hipThrust:      "hip-thrust",
  rdl:            "romanian-deadlift",
  bulgarian:      "bulgarian-split-squat",
  cableKickback:  "cable-kickback",
  goblet:         "goblet-squat",
  walkingLunge:   "walking-lunge",
  hipAbduction:   "hip-abduction",
  hamCurl:        "hamstring-curl",
  shoulderPress:  "shoulder-press",
  latPulldown:    "lat-pulldown",
  dbRow:          "db-row",
  pushup:         "pushup",
  bicepCurl:      "bicep-curl",
  pallof:         "pallof-press",
  hangingKnee:    "hanging-knee-raise",
  woodchopper:    "woodchopper",
  deadbug:        "dead-bug",
  sidePlank:      "side-plank",
  plank:          "plank",
};

const getImagePath = (key) => `${IMAGE_FOLDER}/${IMAGE_FILENAMES[key]}.${IMAGE_EXT}`;

// ═══════════════════════════════════════════════════════════════

const COLORS = {
  bg: "#fffaf2",
  card: "#ffffff",
  ink: "#2a1810",
  inkSoft: "#7a5d4a",
  terracotta: "#e07a52",
  blush: "#f4ddd0",
  cream: "#faf0de",
  sage: "#9eb088",
  border: "#f0e3d0",
};

const typeStyles = {
  lift:    { bg: "#e07a52", text: "#ffffff", tag: "Lift" },
  pilates: { bg: "#f4ddd0", text: "#2a1810", tag: "Pilates" },
  active:  { bg: "#9eb088", text: "#ffffff", tag: "Active" },
  rest:    { bg: "#faf0de", text: "#2a1810", tag: "Rest" },
};

const ExerciseImage = ({ src, name, filename }) => {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div
        className="w-full flex flex-col items-center justify-center gap-2 px-4 text-center"
        style={{
          aspectRatio: "4 / 3",
          backgroundColor: COLORS.cream,
          color: COLORS.inkSoft,
        }}
      >
        <ImageOff size={28} strokeWidth={1.5} />
        <div className="text-xs italic" style={{ fontFamily: "Manrope, sans-serif" }}>
          Add <span className="font-semibold">{filename}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full overflow-hidden" style={{ aspectRatio: "4 / 3", backgroundColor: COLORS.cream }}>
      <img
        src={src}
        alt={name}
        className="w-full h-full object-cover"
        onError={() => setErrored(true)}
      />
    </div>
  );
};

const week = [
  {
    day: "Monday", short: "Mon", type: "lift",
    title: "Lower Body — Glute Day",
    accent: "Heaviest day. Hip thrusts are the priority.",
    icon: Flame,
    warmup: [
      "3 min incline walk or bike",
      "10 bodyweight glute bridges",
      "10 bodyweight squats",
      "10 banded clamshells each side",
      "10 banded lateral walks each direction",
    ],
    workout: [
      { name: "Barbell Hip Thrust", sets: "4 × 6–8", imageKey: "hipThrust", cue: "Squeeze glutes hard at the top. Chin tucked." },
      { name: "Romanian Deadlift", sets: "3 × 8–10", imageKey: "rdl", cue: "Push hips back, soft knees, feel the hamstring stretch." },
      { name: "Bulgarian Split Squat", sets: "3 × 8–10 each", imageKey: "bulgarian", cue: "Front foot far enough that knee tracks over ankle." },
      { name: "Cable Kickback", sets: "3 × 12–15 each", imageKey: "cableKickback", cue: "Slow on the way back. No swinging." },
      { name: "Pallof Press", sets: "3 × 10 each side", imageKey: "pallof", cue: "Resist rotation. Core stays tight." },
      { name: "Hanging Knee Raise", sets: "3 × 10–12", imageKey: "hangingKnee", cue: "Curl knees up, no swinging." },
    ],
    cooldown: [
      "Pigeon pose — 1 min each side",
      "Standing quad stretch — 30 sec each",
      "Seated hamstring stretch — 1 min each side",
      "Child's pose with side reach — 30 sec each side",
    ],
  },
  {
    day: "Tuesday", short: "Tue", type: "pilates",
    title: "Pilates",
    accent: "Reformer or mat — your call. Enjoy it.",
    icon: Heart,
  },
  {
    day: "Wednesday", short: "Wed", type: "lift",
    title: "Upper Body + Core",
    accent: "30–40 minutes. Keeps proportions balanced.",
    icon: Flame,
    warmup: [
      "2 min light cardio",
      "Arm circles — 10 each direction",
      "Band pull-aparts — 15 reps",
      "Cat-cow — 8 reps",
      "Scapular push-ups — 10 reps",
    ],
    workout: [
      { name: "Dumbbell Shoulder Press", sets: "3 × 8–10", imageKey: "shoulderPress", cue: "Press straight up. Don't flare elbows wide." },
      { name: "Lat Pulldown", sets: "3 × 8–10", imageKey: "latPulldown", cue: "Pull to upper chest. Lead with elbows." },
      { name: "Dumbbell Row", sets: "3 × 10 each side", imageKey: "dbRow", cue: "Row to hip, not chest. Squeeze shoulder blade." },
      { name: "Push-ups", sets: "3 × AMRAP", imageKey: "pushup", cue: "Knees down if needed. Full range of motion." },
      { name: "Bicep Curl + Tricep Extension", sets: "3 × 10 each (superset)", imageKey: "bicepCurl", cue: "Slow on the way down. No swinging." },
      { name: "Cable Woodchopper", sets: "3 × 10 each side", imageKey: "woodchopper", cue: "Rotate from the core, not the arms." },
      { name: "Plank", sets: "3 × 30–45 sec", imageKey: "plank", cue: "Squeeze glutes and quads. Don't let hips sag." },
    ],
    cooldown: [
      "Doorway chest stretch — 30 sec each side",
      "Cross-body shoulder stretch — 30 sec each",
      "Child's pose — 1 min",
      "Thread the needle — 30 sec each side",
    ],
  },
  {
    day: "Thursday", short: "Thu", type: "pilates",
    title: "Pilates",
    accent: "Same as Tuesday. Move and breathe.",
    icon: Heart,
  },
  {
    day: "Friday", short: "Fri", type: "lift",
    title: "Lower Body — Glute + Quad",
    accent: "Different angles than Monday. Higher reps.",
    icon: Flame,
    warmup: [
      "3 min incline walk",
      "10 bodyweight squats",
      "10 walking lunges",
      "10 banded glute bridges",
      "10 banded monster walks",
    ],
    workout: [
      { name: "Goblet Squat (or Hack Squat)", sets: "4 × 8–10", imageKey: "goblet", cue: "Chest up, sit between your hips." },
      { name: "Hip Thrust (lighter)", sets: "3 × 12–15", imageKey: "hipThrust", cue: "Higher reps today. Focus on the squeeze." },
      { name: "Walking Lunges", sets: "3 × 10 each leg", imageKey: "walkingLunge", cue: "Long stride. Push through front heel." },
      { name: "Seated Hip Abduction", sets: "4 × 15–20", imageKey: "hipAbduction", cue: "Lean forward slightly to bias upper glute." },
      { name: "Hamstring Curl", sets: "3 × 10–12", imageKey: "hamCurl", cue: "Slow eccentric — 3 sec down." },
      { name: "Dead Bug", sets: "3 × 8–10 each", imageKey: "deadbug", cue: "Lower back stays pressed into floor." },
      { name: "Side Plank", sets: "3 × 30 sec each", imageKey: "sidePlank", cue: "Stack hips. Don't let them drop." },
    ],
    cooldown: [
      "Couch stretch — 1 min each side",
      "Figure-4 stretch — 1 min each side",
      "Standing forward fold — 1 min",
      "Happy baby — 1 min",
    ],
  },
  {
    day: "Saturday", short: "Sat", type: "active",
    title: "Walk or Light Pilates",
    accent: "30–45 min walk outside, or gentle mat. Recovery, not training.",
    icon: Footprints,
  },
  {
    day: "Sunday", short: "Sun", type: "rest",
    title: "Rest",
    accent: "Full rest. Foam roll if tight, otherwise — take it.",
    icon: Moon,
  },
];

export default function App() {
  const [selectedDay, setSelectedDay] = useState(null);
  const [completed, setCompleted] = useState({});

  const toggleComplete = (key) => {
    setCompleted((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  if (selectedDay !== null) {
    const d = week[selectedDay];
    const style = typeStyles[d.type];
    const Icon = d.icon;

    return (
      <div className="min-h-screen" style={{ fontFamily: "Fraunces, Georgia, serif", backgroundColor: COLORS.bg }}>
        <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Manrope:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

        <div className="px-6 pt-12 pb-10 relative overflow-hidden" style={{ backgroundColor: style.bg, color: style.text }}>
          <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full bg-white/25 blur-2xl" />
          <button onClick={() => setSelectedDay(null)} className="flex items-center gap-1 text-sm opacity-90 hover:opacity-100 mb-6 relative" style={{ fontFamily: "Manrope, sans-serif" }}>
            <ChevronLeft size={16} />
            Week
          </button>
          <div className="flex items-start justify-between relative">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] opacity-75 mb-2" style={{ fontFamily: "Manrope, sans-serif", fontWeight: 600 }}>
                {d.day} · {style.tag}
              </div>
              <h1 className="text-4xl leading-tight font-semibold">{d.title}</h1>
              <p className="text-sm opacity-85 mt-3 max-w-xs italic">{d.accent}</p>
            </div>
            <Icon size={28} className="opacity-70 mt-1 shrink-0" />
          </div>
        </div>

        {d.type !== "lift" ? (
          <div className="px-6 py-12">
            <div className="rounded-3xl p-8 shadow-md border" style={{ backgroundColor: COLORS.card, borderColor: COLORS.border }}>
              <p className="text-lg leading-relaxed" style={{ color: COLORS.ink }}>
                {d.type === "pilates" && "Show up, move well, and let it feel good. No need to push intensity here — the lifting days do the heavy work."}
                {d.type === "active" && "Get outside if you can. Walking is one of the most underrated tools for body composition. Aim for 7–10k steps."}
                {d.type === "rest" && "Recovery is when growth actually happens. Hydrate, sleep, eat your protein. The work this week pays off through rest."}
              </p>
            </div>
          </div>
        ) : (
          <div className="px-6 py-8 space-y-10">
            <section>
              <div className="flex items-baseline justify-between mb-4">
                <h2 className="text-2xl font-semibold" style={{ color: COLORS.ink }}>Warm-up</h2>
                <span className="text-xs uppercase tracking-widest" style={{ color: COLORS.terracotta, fontFamily: "Manrope, sans-serif", fontWeight: 700 }}>5–7 min</span>
              </div>
              <div className="rounded-2xl p-5 border shadow-sm space-y-3" style={{ backgroundColor: COLORS.card, borderColor: COLORS.border }}>
                {d.warmup.map((item, i) => {
                  const key = `${selectedDay}-warmup-${i}`;
                  const done = completed[key];
                  return (
                    <button key={i} onClick={() => toggleComplete(key)} className="flex items-start gap-3 w-full text-left">
                      {done ? <Check size={18} style={{ color: COLORS.sage }} className="mt-0.5 shrink-0" /> : <Circle size={18} style={{ color: COLORS.border }} className="mt-0.5 shrink-0" />}
                      <span className={done ? "line-through opacity-50" : ""} style={{ color: COLORS.ink, fontFamily: "Manrope, sans-serif", fontSize: "15px" }}>
                        {item}
                      </span>
                    </button>
                  );
                })}
              </div>
            </section>

            <section>
              <div className="flex items-baseline justify-between mb-4">
                <h2 className="text-2xl font-semibold" style={{ color: COLORS.ink }}>The Work</h2>
                <span className="text-xs uppercase tracking-widest" style={{ color: COLORS.terracotta, fontFamily: "Manrope, sans-serif", fontWeight: 700 }}>Track your lifts</span>
              </div>
              <div className="space-y-4">
                {d.workout.map((ex, i) => {
                  const key = `${selectedDay}-ex-${i}`;
                  const done = completed[key];
                  const filename = `${IMAGE_FILENAMES[ex.imageKey]}.${IMAGE_EXT}`;
                  return (
                    <div key={i} className={`rounded-2xl border shadow-sm overflow-hidden transition-opacity ${done ? "opacity-60" : ""}`} style={{ backgroundColor: COLORS.card, borderColor: COLORS.border }}>
                      <ExerciseImage src={getImagePath(ex.imageKey)} name={ex.name} filename={filename} />
                      <div className="p-5">
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <h3 className="text-xl leading-tight font-semibold" style={{ color: COLORS.ink }}>{ex.name}</h3>
                          <button onClick={() => toggleComplete(key)} className="shrink-0 mt-1">
                            {done ? (
                              <div className="w-7 h-7 rounded-full flex items-center justify-center shadow-sm" style={{ backgroundColor: COLORS.sage }}>
                                <Check size={16} className="text-white" />
                              </div>
                            ) : (
                              <div className="w-7 h-7 rounded-full border-2" style={{ borderColor: COLORS.border }} />
                            )}
                          </button>
                        </div>
                        <div className="inline-block text-sm mb-3 tracking-wide px-3 py-1 rounded-full" style={{ color: COLORS.terracotta, backgroundColor: COLORS.blush, fontFamily: "Manrope, sans-serif", fontWeight: 600 }}>
                          {ex.sets}
                        </div>
                        <p className="text-sm italic leading-relaxed" style={{ color: COLORS.inkSoft }}>{ex.cue}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            <section>
              <div className="flex items-baseline justify-between mb-4">
                <h2 className="text-2xl font-semibold" style={{ color: COLORS.ink }}>Cool-down</h2>
                <span className="text-xs uppercase tracking-widest" style={{ color: COLORS.terracotta, fontFamily: "Manrope, sans-serif", fontWeight: 700 }}>5 min</span>
              </div>
              <div className="rounded-2xl p-5 border shadow-sm space-y-3" style={{ backgroundColor: COLORS.card, borderColor: COLORS.border }}>
                {d.cooldown.map((item, i) => {
                  const key = `${selectedDay}-cooldown-${i}`;
                  const done = completed[key];
                  return (
                    <button key={i} onClick={() => toggleComplete(key)} className="flex items-start gap-3 w-full text-left">
                      {done ? <Check size={18} style={{ color: COLORS.sage }} className="mt-0.5 shrink-0" /> : <Circle size={18} style={{ color: COLORS.border }} className="mt-0.5 shrink-0" />}
                      <span className={done ? "line-through opacity-50" : ""} style={{ color: COLORS.ink, fontFamily: "Manrope, sans-serif", fontSize: "15px" }}>
                        {item}
                      </span>
                    </button>
                  );
                })}
              </div>
            </section>

            <div className="pt-2 pb-12 text-center">
              <p className="text-sm italic" style={{ color: COLORS.inkSoft }}>
                Add 5 lbs or 1–2 reps somewhere this week.<br/>That's how glutes grow.
              </p>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ fontFamily: "Fraunces, Georgia, serif", backgroundColor: COLORS.bg }}>
      <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Manrope:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      <div className="px-6 pt-14 pb-8 relative">
        <div className="absolute top-10 right-4 w-32 h-32 rounded-full blur-3xl opacity-50" style={{ backgroundColor: COLORS.blush }} />
        <div className="absolute top-32 -left-8 w-40 h-40 rounded-full blur-3xl opacity-40" style={{ backgroundColor: COLORS.cream }} />
        <div className="relative">
          <div className="text-xs uppercase tracking-[0.3em] mb-4" style={{ color: COLORS.terracotta, fontFamily: "Manrope, sans-serif", fontWeight: 700 }}>
            Your Week · Glute &amp; Core
          </div>
          <h1 className="text-5xl leading-[1.05] font-semibold mb-3" style={{ color: COLORS.ink }}>
            Build the<br/>
            <em className="font-normal" style={{ fontStyle: "italic", color: COLORS.terracotta }}>shape</em> you<br/>
            actually want.
          </h1>
          <p className="text-base mt-4 max-w-sm leading-relaxed" style={{ color: COLORS.inkSoft, fontFamily: "Manrope, sans-serif" }}>
            Two lifting days do the heavy work. Two pilates days for core and joy. The rest is recovery.
          </p>
        </div>
      </div>

      <div className="px-6 pb-12 space-y-3">
        {week.map((d, i) => {
          const style = typeStyles[d.type];
          const Icon = d.icon;
          return (
            <button key={i} onClick={() => setSelectedDay(i)} className="w-full rounded-2xl p-5 text-left flex items-center gap-4 hover:scale-[0.99] transition-transform"
              style={{ backgroundColor: style.bg, color: style.text, boxShadow: "0 4px 12px rgba(42, 24, 16, 0.08)" }}>
              <div className="w-12 text-center">
                <div className="text-[10px] uppercase tracking-widest opacity-75" style={{ fontFamily: "Manrope, sans-serif", fontWeight: 700 }}>
                  {d.short}
                </div>
                <div className="text-3xl font-semibold leading-none mt-1">{i + 1}</div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs uppercase tracking-widest opacity-75 mb-1" style={{ fontFamily: "Manrope, sans-serif", fontWeight: 700 }}>
                  {style.tag}
                </div>
                <div className="text-xl leading-tight truncate font-semibold">{d.title}</div>
              </div>
              <Icon size={22} className="opacity-75 shrink-0" />
            </button>
          );
        })}
      </div>

      <div className="px-6 pb-16">
        <div className="border-t pt-6" style={{ borderColor: COLORS.border }}>
          <p className="text-sm italic leading-relaxed text-center" style={{ color: COLORS.inkSoft }}>
            "Progressive overload is the whole game.<br/>
            Add weight or reps every week or two."
          </p>
        </div>
      </div>
    </div>
  );
}
