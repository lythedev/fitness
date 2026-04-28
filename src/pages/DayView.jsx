import { useParams, useNavigate, Navigate } from "react-router-dom";
import DayHero from "../components/DayHero";
import Checklist from "../components/Checklist";
import ExerciseCard from "../components/ExerciseCard";
import { week, restCopy } from "../data";
import { COLORS, FONT_SANS, FONT_SERIF } from "../theme";

export default function DayView({ completed, onToggle }) {
  const { dayIndex } = useParams();
  const navigate = useNavigate();
  const idx = parseInt(dayIndex, 10);
  const d = week[idx];

  if (!d) return <Navigate to="/" replace />;

  return (
    <div className="min-h-screen" style={{ fontFamily: FONT_SERIF, backgroundColor: COLORS.bg }}>
      <DayHero day={d} onBack={() => navigate("/")} />

      {!d.workout ? (
        <div className="px-6 py-12">
          <div
            className="rounded-3xl p-8 shadow-md border"
            style={{ backgroundColor: COLORS.card, borderColor: COLORS.border }}
          >
            <p className="text-lg leading-relaxed" style={{ color: COLORS.ink }}>
              {restCopy[d.type]}
            </p>
          </div>
        </div>
      ) : (
        <div className="px-6 py-8 space-y-10">
          <Checklist
            title="Warm-up"
            duration="5–7 min"
            items={d.warmup}
            keyPrefix={`${idx}-warmup`}
            completed={completed}
            onToggle={onToggle}
          />

          <section>
            <div className="flex items-baseline justify-between mb-4">
              <h2 className="text-2xl font-semibold" style={{ color: COLORS.ink }}>
                The Work
              </h2>
              <span
                className="text-xs uppercase tracking-widest"
                style={{ color: COLORS.terracotta, fontFamily: FONT_SANS, fontWeight: 700 }}
              >
                {d.type === "pilates" ? "Move with control" : "Track your lifts"}
              </span>
            </div>
            <div className="space-y-4">
              {groupRows(d.workout).map((row, ri) => {
                if (row.type === "single") {
                  return renderExercise(row.ex, row.i, idx, completed, onToggle);
                }
                return (
                  <div
                    key={`g-${ri}`}
                    className="rounded-2xl p-3 border-2 border-dashed space-y-3"
                    style={{ borderColor: COLORS.terracotta, backgroundColor: COLORS.blush }}
                  >
                    <div className="flex items-center justify-between px-2 pt-1">
                      <span
                        className="text-xs uppercase tracking-widest"
                        style={{ color: COLORS.terracotta, fontFamily: FONT_SANS, fontWeight: 700 }}
                      >
                        Superset {row.label}
                      </span>
                      <span
                        className="text-xs"
                        style={{ color: COLORS.inkSoft, fontFamily: FONT_SANS }}
                      >
                        Alternate, minimal rest between
                      </span>
                    </div>
                    {row.items.map(({ ex, i }) =>
                      renderExercise(ex, i, idx, completed, onToggle)
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          <Checklist
            title="Cool-down"
            duration="5 min"
            items={d.cooldown}
            keyPrefix={`${idx}-cooldown`}
            completed={completed}
            onToggle={onToggle}
          />

          {d.closing && (
            <div className="pt-2 pb-12 text-center">
              <p className="text-sm italic whitespace-pre-line" style={{ color: COLORS.inkSoft }}>
                {d.closing}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// Pull the leading set count from a sets string like "4 × 6–8" or
// "1 × 100 breaths". Returns 0 if the string doesn't start with a number.
function parseSetCount(sets) {
  if (typeof sets !== "string") return 0;
  const match = sets.match(/^\s*(\d+)/);
  return match ? parseInt(match[1], 10) : 0;
}

function renderExercise(ex, i, idx, completed, onToggle) {
  const key = `${idx}-ex-${i}`;
  const setCount = parseSetCount(ex.sets);
  const doneSets = Array.from({ length: setCount }, (_, s) => !!completed[`${key}-set-${s}`]);
  return (
    <ExerciseCard
      key={key}
      exercise={ex}
      setCount={setCount}
      doneSets={doneSets}
      onToggleSet={(s) => onToggle(`${key}-set-${s}`)}
    />
  );
}

// Collapse consecutive workout entries sharing a `group` letter into a single
// superset row; ungrouped entries pass through as singles.
function groupRows(workout) {
  const rows = [];
  let cur = null;
  workout.forEach((ex, i) => {
    if (ex.group) {
      if (cur && cur.label === ex.group) {
        cur.items.push({ ex, i });
      } else {
        cur = { type: "group", label: ex.group, items: [{ ex, i }] };
        rows.push(cur);
      }
    } else {
      cur = null;
      rows.push({ type: "single", ex, i });
    }
  });
  return rows;
}
