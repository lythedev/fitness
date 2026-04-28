import { useState } from "react";
import { Check, Circle, ChevronDown } from "lucide-react";
import Timer from "./Timer";
import ExerciseImage from "./ExerciseImage";
import { COLORS, FONT_SANS } from "../theme";
import { getMovePath, getFilename } from "../data";

export default function Checklist({ title, duration, items, keyPrefix, completed, onToggle }) {
  const [expanded, setExpanded] = useState({});

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
          const isObj = typeof item === "object" && item !== null;
          const text = isObj ? (item.name ?? item.text) : item;
          const timer = isObj ? item.timer : undefined;
          const image = isObj ? item.image : undefined;
          const cue = isObj ? item.cue : undefined;
          const key = `${keyPrefix}-${i}`;
          const done = completed[key];
          const isOpen = !!expanded[key];
          const canExpand = !!(image || cue);

          return (
            <div key={i}>
              <div className="flex items-start gap-3">
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
                {canExpand && (
                  <button
                    onClick={() => setExpanded((e) => ({ ...e, [key]: !e[key] }))}
                    aria-label={isOpen ? "Hide details" : "Show details"}
                    aria-expanded={isOpen}
                    className="shrink-0 p-1 -m-1 rounded-md transition-transform"
                    style={{
                      color: COLORS.inkSoft,
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    <ChevronDown size={18} />
                  </button>
                )}
              </div>

              {canExpand && isOpen && (
                <div className="mt-3 ml-7 rounded-xl overflow-hidden border" style={{ borderColor: COLORS.border }}>
                  {image && (
                    <ExerciseImage
                      src={getMovePath(image)}
                      name={text}
                      filename={getFilename(image)}
                    />
                  )}
                  {cue && (
                    <p
                      className="text-sm italic leading-relaxed px-4 py-3"
                      style={{ color: COLORS.inkSoft, backgroundColor: COLORS.card }}
                    >
                      {cue}
                    </p>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
