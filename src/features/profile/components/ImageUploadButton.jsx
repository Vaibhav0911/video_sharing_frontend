import React, { useRef } from "react";

function ImageUploadButton({ label = "Change", onChange, loading = false }) {
  const inputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) onChange(file);
  };

  return (
    <>
      <button
        type="button"
        disabled={loading}
        onClick={() => inputRef.current.click()}
        className="rounded-full bg-black/70 px-4 py-2 text-sm font-medium text-white hover:bg-black disabled:opacity-60"
      >
        {loading ? "Uploading..." : label}
      </button>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        hidden
        onChange={handleFileChange}
      />
    </>
  );
}

export default ImageUploadButton;