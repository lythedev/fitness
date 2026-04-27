import { Check } from "lucide-react";
import ExerciseImage from "./ExerciseImage";
import Timer from "./Timer";
import { COLORS, FONT_SANS } from "../theme";
import { getImagePath, getFilename } from "../data";

export default function ExerciseCard({ exercise, done, onToggle }) {
  return (
    <div
      className={`rounded-2xl border shadow-sm overflow-hidden transition-opacity ${done ? "opacity-60" : ""}`}
      style={{ backgroundColor: COLORS.card, borderColor: COLORS.border }}
    >
      <ExerciseImage
        src={getImagePath(exercise.image)}
        name={exercise.name}
        filename={getFilename(exercise.image)}
      />
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="text-xl leading-tight font-semibold" style={{ color: COLORS.ink }}>
            {exercise.name}
          </h3>
          <button onClick={onToggle} className="shrink-0 mt-1">
            {done ? (
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center shadow-sm"
                style={{ backgroundColor: COLORS.sage }}
              >
                <Check size={16} className="text-white" />
              </div>
            ) : (
              <div
                className="w-7 h-7 rounded-full border-2"
                style={{ borderColor: COLORS.border }}
              />
            )}
          </button>
        </div>
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
        <p className="text-sm italic leading-relaxed" style={{ color: COLORS.inkSoft }}>
          {exercise.cue}
        </p>
      </div>
    </div>
  );
}
