import React from "react";

const ICON_NAMES = [
  "agenda", "ajustes", "analisis", "calendario", "configuracion",
  "equipo", "estadistica", "informacion", "internet", "mensajes",
  "nube", "usuario",
];

/**
 * TodoPymes — Icon
 * Renders a brand line icon (deep-navy PNG, transparent background).
 * Pass `tone="white"` for the white variant on dark surfaces.
 * `basePath` points at the assets/icons folder relative to the host page.
 */
export function Icon({
  name,
  size = 22,
  tone = "navy", // "navy" | "white"
  basePath = "assets/icons/",
  src = null,
  style = {},
  alt = "",
  ...rest
}) {
  const url = src || `${basePath}${tone === "white" ? "white/" : ""}${name}.png`;
  return (
    <img
      src={url}
      alt={alt || name}
      width={size}
      height={size}
      style={{ width: size, height: size, objectFit: "contain", display: "block", ...style }}
      {...rest}
    />
  );
}

/**
 * Icon framed in a rounded "pastilla" — the brand's standard presentation.
 */
export function IconPill({
  name,
  size = 40,
  iconSize = null,
  tone = "navy",
  background = "var(--surface-icon)",
  basePath = "assets/icons/",
  radius = "var(--radius-sm)",
  style = {},
}) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
        background,
        borderRadius: radius,
        flex: "none",
        ...style,
      }}
    >
      <Icon name={name} tone={tone} basePath={basePath} size={iconSize || Math.round(size * 0.56)} />
    </span>
  );
}

Icon.NAMES = ICON_NAMES;
