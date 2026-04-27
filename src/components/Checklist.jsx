import { Check, Circle } from "lucide-react";
import Timer from "./Timer";
import { COLORS, FONT_SANS } from "../theme";

export default function Checklist({ title, duration, items, keyPrefix, completed, onToggle }) {
  return (
    <section>
      <div className="flex items-baseline justify-between mb-4">
        <h2 className="text-2xl font-semibold" style={{ color: COLORS.ink }}>{title}</h2>
        <span
          className="text-xs uppercase tracking-widest"
          style={{ color: COLORS.terracotta, fontFamily: FONT_SANS, fontWeight: 700 }}
        >
          {duration}
        </span>
      </div>
      <div
        className="rounded-2xl p-5 border shadow-sm space-y-3"
        style={{ backgroundColor: COLORS.card, borderColor: COLORS.border }}
      >
        {items.map((item, i) => {
          const text = typeof item === "string" ? item : item.text;
          const timer = typeof item === "object" ? item.timer : undefined;
          const key = `${keyPrefix}-${i}`;
          const done = completed[key];
          return (
            <div key={i} className="flex items-start gap-3">
              <button
                onClick={() => onToggle(key)}
                className="flex items-start gap-3 flex-1 text-left"
              >
                {done ? (
                  <Check size={18} style={{ color: COLORS.sage }} className="mt-0.5 shrink-0" />
                ) : (
                  <Circle size={18} style={{ color: COLORS.border }} className="mt-0.5 shrink-0" />
                )}
                <span
                  className={done ? "line-through opacity-50" : ""}
                  style={{ color: COLORS.ink, fontFamily: FONT_SANS, fontSize: "15px" }}
                >
                  {text}
                </span>
              </button>
              {timer && (
                <div className="shrink-0">
                  <Timer seconds={timer} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
