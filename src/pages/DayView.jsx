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

      {d.type !== "lift" ? (
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
                Track your lifts
              </span>
            </div>
            <div className="space-y-4">
              {d.workout.map((ex, i) => {
                const key = `${idx}-ex-${i}`;
                return (
                  <ExerciseCard
                    key={i}
                    exercise={ex}
                    done={!!completed[key]}
                    onToggle={() => onToggle(key)}
                  />
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

          <div className="pt-2 pb-12 text-center">
            <p className="text-sm italic" style={{ color: COLORS.inkSoft }}>
              Add 5 lbs or 1–2 reps somewhere this week.<br />
              That's how glutes grow.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
