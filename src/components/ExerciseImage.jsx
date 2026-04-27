import { useState } from "react";
import { ImageOff } from "lucide-react";
import { COLORS, FONT_SANS } from "../theme";

export default function ExerciseImage({ src, name, filename }) {
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
        <div className="text-xs italic" style={{ fontFamily: FONT_SANS }}>
          Add <span className="font-semibold">{filename}</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className="w-full overflow-hidden"
      style={{ aspectRatio: "4 / 3", backgroundColor: COLORS.cream }}
    >
      <img
        src={src}
        alt={name}
        className="w-full h-full object-contain"
        onError={() => setErrored(true)}
      />
    </div>
  );
}
