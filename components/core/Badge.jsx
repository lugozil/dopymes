import React from "react";

/**
 * TodoPymes — Badge
 * Small status pill. `dot` adds a leading status dot (e.g. "En ejecución").
 */
export function Badge({
  children,
  variant = "neutral", // neutral | brand | success | warning | danger | active
  dot = false,
  size = "md",
  style = {},
  ...rest
}) {
  const palettes = {
    neutral: { bg: "var(--tp-slate-100)", fg: "var(--text-body)", dot: "var(--tp-slate-500)" },
    brand:   { bg: "var(--tp-blue-100)",  fg: "var(--tp-blue-700)", dot: "var(--tp-azul-acento)" },
    success: { bg: "var(--tp-success-soft)", fg: "#0f7a37", dot: "var(--tp-success)" },
    warning: { bg: "var(--tp-warning-soft)", fg: "#9a6717", dot: "var(--tp-warning)" },
    danger:  { bg: "var(--tp-danger-soft)",  fg: "#a8332b", dot: "var(--tp-danger)" },
    active:  { bg: "var(--tp-success-soft)", fg: "#0f7a37", dot: "var(--tp-success)" },
  };
  const p = palettes[variant] || palettes.neutral;
  const sz = size === "sm"
    ? { padding: "3px 8px", fontSize: "11px" }
    : { padding: "5px 11px", fontSize: "12px" };

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        background: p.bg,
        color: p.fg,
        fontFamily: "var(--font-sans)",
        fontWeight: "var(--fw-semibold)",
        borderRadius: "var(--radius-pill)",
        whiteSpace: "nowrap",
        lineHeight: 1.2,
        ...sz,
        ...style,
      }}
      {...rest}
    >
      {dot && (
        <span
          style={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: p.dot,
            flex: "none",
            boxShadow: variant === "active" ? `0 0 0 3px ${p.bg}` : "none",
          }}
        />
      )}
      {children}
    </span>
  );
}
