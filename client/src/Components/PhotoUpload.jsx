import React, { useState, useRef } from "react";

/* ------------------------------------------------------------------ */
/*  Tiny helper: PhotoUpload                                           */
/* ------------------------------------------------------------------ */
export default function PhotoUpload({ photos, onChange, max = 8 }) {
  const inputRef = useRef(null);

  // open file picker when user clicks the drop‑zone
  const openPicker = () => inputRef.current?.click();

  const handleFiles = (files) => {
    const chosen = Array.from(files).slice(0, max - photos.length);
    onChange([...photos, ...chosen]);
  };

  const removeAt = (idx) => {
    const next = photos.filter((_, i) => i !== idx);
    onChange(next);
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple
        className="hidden"
        onChange={(e) => handleFiles(e.target.files)}
      />

      {/* Drop area / button */}
      <div
        onClick={openPicker}
        className="flex h-32 cursor-pointer items-center justify-center rounded border-2 border-dashed p-4 text-sm text-gray-500 hover:bg-gray-50"
      >
        Click or drag images here (max {max})
      </div>

      {/* Thumbnails */}
      {photos.length > 0 && (
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {photos.map((file, idx) => (
            <div key={idx} className="relative group">
              <img
                src={URL.createObjectURL(file)}
                alt={`upload-${idx}`}
                className="h-28 w-full rounded object-cover"
              />
              <button
                type="button"
                onClick={() => removeAt(idx)}
                className="absolute right-1 top-1 hidden rounded bg-black/60 px-1 text-xs text-white group-hover:block"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}