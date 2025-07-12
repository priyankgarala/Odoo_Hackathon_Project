/* ------------------------------------------------------------------ */
/*  Tiny helper: TagInput                                              */

import { useState } from "react";

/* ------------------------------------------------------------------ */
export default function TagInput({ tags, onChange, placeholder = "Press Enter…" }) {
  const [value, setValue] = useState("");

  const addTag = () => {
    const newTag = value.trim();
    if (newTag && !tags.includes(newTag)) onChange([...tags, newTag]);
    setValue("");
  };

  const removeAt = (idx) => onChange(tags.filter((_, i) => i !== idx));

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((t, idx) => (
        <span
          key={idx}
          className="flex items-center gap-1 rounded bg-indigo-100 px-2 py-1 text-sm"
        >
          {t}
          <button
            type="button"
            onClick={() => removeAt(idx)}
            className="text-xs text-indigo-700"
          >
            ✕
          </button>
        </span>
      ))}

      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => (e.key === "Enter" ? (addTag(), e.preventDefault()) : null)}
        placeholder={placeholder}
        className="min-w-[8rem] flex-grow rounded border px-2 py-1 text-sm focus:outline-none focus:ring"
      />
    </div>
  );
}