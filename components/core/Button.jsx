import React from "react";

/**
 * TodoPymes — Button
 * The CTA is Azul Acento with a soft glow ("sistema activo"); secondary is
 * deep brand blue. Rounded, confident, never timid.
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  iconLeft = null,
  iconRight = null,
  fullWidth = false,
  disabled = false,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: { padding: "8px 14px", fontSize: "13px", radius: "var(--radius-sm)", gap: "6px" },
    md: { padding: "11px 20px", fontSize: "15px", radius: "var(--radius-md)", gap: "8px" },
    lg: { padding: "15px 28px", fontSize: "16px", radius: "var(--radius-lg)", gap: "10px" },
  };
  const s = sizes[size] || sizes.md;

  const variants = {
    primary: {
      background: "var(--action-primary)",
      color: "#fff",
      boxShadow: "var(--shadow-brand)",
      border: "1px solid transparent",
    },
    secondary: {
      background: "var(--action-secondary)",
      color: "#fff",
      boxShadow: "var(--shadow-sm)",
      border: "1px solid transparent",
    },
    outline: {
      background: "transparent",
      color: "var(--text-strong)",
      boxShadow: "none",
      border: "1.5px solid var(--border-default)",
    },
    ghost: {
      background: "transparent",
      color: "var(--text-link)",
      boxShadow: "none",
      border: "1px solid transparent",
    },
  };
  const v = variants[variant] || variants.primary;

  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: s.gap,
    fontFamily: "var(--font-sans)",
    fontWeight: "var(--fw-semibold)",
    fontSize: s.fontSize,
    lineHeight: 1,
    padding: s.padding,
    borderRadius: s.radius,
    width: fullWidth ? "100%" : "auto",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    transition: "transform var(--dur-fast) var(--ease-out), filter var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)",
    whiteSpace: "nowrap",
    ...v,
    ...style,
  };

  const onDown = (e) => { if (!disabled) e.currentTarget.style.transform = "scale(0.97)"; };
  const onUp = (e) => { e.currentTarget.style.transform = "scale(1)"; };
  const onEnter = (e) => {
    if (disabled) return;
    if (variant === "primary") { e.currentTarget.style.background = "var(--action-primary-hover)"; }
    else if (variant === "secondary") { e.currentTarget.style.background = "var(--action-secondary-hover)"; }
    else if (variant === "outline") { e.currentTarget.style.borderColor = "var(--border-strong)"; e.currentTarget.style.background = "var(--tp-slate-50)"; }
    else { e.currentTarget.style.background = "var(--tp-blue-50)"; }
  };
  const onLeave = (e) => {
    e.currentTarget.style.background = v.background;
    e.currentTarget.style.borderColor = v.border.includes("transparent") ? "transparent" : "var(--border-default)";
    e.currentTarget.style.transform = "scale(1)";
  };

  return (
    <button
      type="button"
      disabled={disabled}
      style={base}
      onMouseDown={onDown}
      onMouseUp={onUp}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
