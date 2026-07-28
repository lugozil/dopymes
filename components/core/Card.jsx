import React from "react";

/**
 * TodoPymes — Card
 * White surface, soft blue-tinted shadow, rounded. The default container.
 * `tone="brand"` flips it to a deep-blue hero card with light text.
 */
export function Card({
  children,
  tone = "default", // default | sunken | brand | brandAlt
  padding = "var(--space-6)",
  interactive = false,
  style = {},
  ...rest
}) {
  const tones = {
    default: { background: "var(--surface-card)", color: "var(--text-body)", border: "1px solid var(--border-subtle)", boxShadow: "var(--shadow-sm)" },
    sunken:  { background: "var(--surface-sunken)", color: "var(--text-body)", border: "1px solid var(--border-subtle)", boxShadow: "none" },
    brand:   { background: "var(--surface-brand)", color: "var(--text-on-brand)", border: "1px solid transparent", boxShadow: "var(--shadow-md)" },
    brandAlt:{ background: "var(--surface-brand-alt)", color: "var(--text-on-brand)", border: "1px solid transparent", boxShadow: "var(--shadow-md)" },
  };
  const t = tones[tone] || tones.default;

  const onEnter = (e) => {
    if (!interactive) return;
    e.currentTarget.style.transform = "translateY(-2px)";
    e.currentTarget.style.boxShadow = "var(--shadow-lg)";
  };
  const onLeave = (e) => {
    if (!interactive) return;
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = t.boxShadow;
  };

  return (
    <div
      style={{
        borderRadius: "var(--radius-lg)",
        padding,
        transition: "transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
        cursor: interactive ? "pointer" : "default",
        ...t,
        ...style,
      }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      {...rest}
    >
      {children}
    </div>
  );
}
