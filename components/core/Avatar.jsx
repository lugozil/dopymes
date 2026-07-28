import React from "react";

/**
 * TodoPymes — Avatar
 * Initials on a brand-blue tint, or an image. Square-rounded by default.
 */
export function Avatar({
  name = "",
  src = null,
  size = 40,
  shape = "rounded", // rounded | circle
  tone = "brand", // brand | slate
  style = {},
}) {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");
  const radius = shape === "circle" ? "50%" : "var(--radius-md)";
  const tones = {
    brand: { background: "var(--tp-blue-100)", color: "var(--tp-blue-700)" },
    slate: { background: "var(--tp-slate-200)", color: "var(--tp-slate-700)" },
  };
  const t = tones[tone] || tones.brand;

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
        borderRadius: radius,
        overflow: "hidden",
        flex: "none",
        fontFamily: "var(--font-sans)",
        fontWeight: "var(--fw-bold)",
        fontSize: Math.round(size * 0.38),
        letterSpacing: "0.01em",
        ...t,
        ...style,
      }}
    >
      {src ? (
        <img src={src} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      ) : (
        initials || "·"
      )}
    </span>
  );
}
