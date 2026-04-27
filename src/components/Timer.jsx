import { useState, useEffect, useRef } from "react";
import { Play, Square, RotateCcw } from "lucide-react";
import { COLORS, FONT_SANS } from "../theme";

function playBeep() {
  try {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return;
    const ctx = new Ctx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.value = 880;
    osc.type = "sine";
    gain.gain.setValueAtTime(0.25, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.6);
    osc.start();
    osc.stop(ctx.currentTime + 0.6);
  } catch {
    // ignore — audio unavailable
  }
}

function vibrate() {
  if (typeof navigator !== "undefined" && navigator.vibrate) {
    navigator.vibrate([200, 100, 200]);
  }
}

function format(s) {
  const mm = Math.floor(s / 60);
  const ss = s % 60;
  return `${mm}:${ss.toString().padStart(2, "0")}`;
}

export default function Timer({ seconds }) {
  const [remaining, setRemaining] = useState(seconds);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!running) return;
    intervalRef.current = setInterval(() => {
      setRemaining((r) => {
        if (r <= 1) {
          clearInterval(intervalRef.current);
          setRunning(false);
          playBeep();
          vibrate();
          return 0;
        }
        return r - 1;
      });
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, [running]);

  const done = !running && remaining === 0;

  const onClick = () => {
    if (running) {
      setRunning(false);
      setRemaining(seconds);
    } else {
      if (remaining === 0) setRemaining(seconds);
      setRunning(true);
    }
  };

  const Icon = running ? Square : done ? RotateCcw : Play;

  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-3 py-1 rounded-full text-sm transition-colors"
      style={{
        backgroundColor: running ? COLORS.terracotta : COLORS.blush,
        color: running ? "#ffffff" : COLORS.terracotta,
        fontFamily: FONT_SANS,
        fontWeight: 600,
      }}
      aria-label={running ? "Stop timer" : done ? "Reset timer" : "Start timer"}
    >
      <Icon size={14} fill="currentColor" strokeWidth={running ? 0 : 2} />
      <span style={{ fontVariantNumeric: "tabular-nums" }}>{format(remaining)}</span>
    </button>
  );
}
