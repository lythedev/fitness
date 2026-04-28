import { Check } from "lucide-react";
import ExerciseImage from "./ExerciseImage";
import Timer from "./Timer";
import { COLORS, FONT_SANS } from "../theme";
import { getImagePath, getFilename } from "../data";

export default function ExerciseCard({ exercise, setCount, doneSets, onToggleSet }) {
  const totalSets = setCount || 0;
  const allDone = totalSets > 0 && doneSets.length === totalSets && doneSets.every(Boolean);

  return (
    <div
      className={`rounded-2xl border shadow-sm overflow-hidden transition-opacity ${allDone ? "opacity-60" : ""}`}
      style={{ backgroundColor: COLORS.card, borderColor: COLORS.border }}
    >
      <ExerciseImage
        src={getImagePath(exercise.image)}
        name={exercise.name}
        filename={getFilename(exercise.image)}
      />
      <div className="p-5">
        <h3 className="text-xl leading-tight font-semibold mb-2" style={{ color: COLORS.ink }}>
          {exercise.name}
        </h3>
        <div className="flex items-center gap-2 flex-wrap mb-3">
          <span
            className="inline-block text-sm tracking-wide px-3 py-1 rounded-full"
            style={{
              color: COLORS.terracotta,
              backgroundColor: COLORS.blush,
              fontFamily: FONT_SANS,
              fontWeight: 600,
            }}
          >
            {exercise.sets}
          </span>
          {exercise.timer && <Timer seconds={exercise.timer} />}
        </div>
        {totalSets > 0 && (
          <div className="flex items-center gap-2 flex-wrap mb-3">
            <span
              className="text-xs uppercase tracking-widest"
              style={{ color: COLORS.inkSoft, fontFamily: FONT_SANS, fontWeight: 700 }}
            >
              Sets
            </span>
            <div className="flex gap-2">
              {Array.from({ length: totalSets }).map((_, s) => {
                const done = !!doneSets[s];
                return (
                  <button
                    key={s}
                    onClick={() => onToggleSet(s)}
                    aria-label={`Set ${s + 1} ${done ? "complete" : "incomplete"}`}
                    aria-pressed={done}
                    className="shrink-0"
                  >
                    {done ? (
                      <div
                        className="w-9 h-9 rounded-full flex items-center justify-center shadow-sm"
                        style={{ backgroundColor: COLORS.sage }}
                      >
                        <Check size={18} className="text-white" />
                      </div>
                    ) : (
                      <div
                        className="w-9 h-9 rounded-full border-2 flex items-center justify-center text-xs"
                        style={{
                          borderColor: COLORS.border,
                          color: COLORS.inkSoft,
                          fontFamily: FONT_SANS,
                          fontWeight: 600,
                        }}
                      >
                        {s + 1}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}
        <p className="text-sm italic leading-relaxed" style={{ color: COLORS.inkSoft }}>
          {exercise.cue}
        </p>
      </div>
    </div>
  );
}
