import React from "react";

/* ============================================================
   NavBar compartido (home + soluciones). El logo enlaza al home
   y "Soluciones" a la página de soluciones. `active` resalta la
   sección actual.
   ============================================================ */
export function NavBar({ active = "" }) {
  const [open, setOpen] = React.useState(false);
  const links = [
    { label: "Producto", href: "/", key: "producto" },
    { label: "Soluciones", href: "/soluciones", key: "soluciones" },
    { label: "Recursos", href: "/recursos", key: "recursos" },
    { label: "Precios", href: "/precios", key: "precios" },
  ];
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 40, background: "rgba(255,255,255,0.85)", backdropFilter: "blur(12px)", borderBottom: "1px solid var(--border-subtle)" }}>
      <nav className="tp-nav-row" style={{ maxWidth: 1240, margin: "0 auto", display: "flex", alignItems: "center", gap: 30, padding: "16px 28px" }}>
        <a href="/" style={{ display: "inline-flex" }}>
          <img src={LOGOS + "todopymes-principal.png"} alt="TodoPymes" style={{ height: 28 }} />
        </a>
        <div className="tp-nav-links" style={{ display: "flex", alignItems: "center", gap: 26, marginLeft: 8 }}>
          {links.map((l, i) => (
            <a key={l.key} href={l.href} style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 15, fontWeight: active === l.key ? "var(--fw-semibold)" : "var(--fw-medium)", color: active === l.key ? "var(--tp-azul-acento)" : "var(--text-strong)" }}>
              {l.label}{i !== 3 && <span style={{ fontSize: 10, opacity: 0.5 }}>▾</span>}
            </a>
          ))}
        </div>
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 14 }}>
          <div className="tp-nav-secondary" style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <a href="https://app.dopymes.com/" target="_blank" rel="noopener" style={{ fontSize: 15, fontWeight: "var(--fw-medium)", color: "var(--text-strong)" }}>Iniciar sesión</a>
            <Button variant="outline" size="sm" onClick={() => window.openWA("Hola, quiero hablar con el equipo de ventas de TodoPymes.")}>Hablar con ventas</Button>
          </div>
          <span className="tp-nav-primary-btn">
            <Button variant="primary" size="sm" onClick={() => window.openWA("Hola, quiero probar TodoPymes gratis.")}>Pruébalo gratis</Button>
          </span>
          <button
            className="tp-nav-toggle"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            style={{ display: "none", flex: "none", width: 40, height: 40, border: "1px solid var(--border-default)", borderRadius: 10, background: "#fff", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: 18, lineHeight: 1, color: "var(--text-strong)" }}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </nav>
      {open && (
        <div className="tp-nav-mobile-panel" style={{ borderTop: "1px solid var(--border-subtle)", background: "#fff", padding: "8px 28px 24px", display: "flex", flexDirection: "column" }}>
          {links.map((l) => (
            <a key={l.key} href={l.href} style={{ padding: "13px 2px", fontSize: 16, fontWeight: active === l.key ? "var(--fw-semibold)" : "var(--fw-medium)", color: active === l.key ? "var(--tp-azul-acento)" : "var(--text-strong)", borderBottom: "1px solid var(--border-subtle)" }}>{l.label}</a>
          ))}
          <a href="https://app.dopymes.com/" target="_blank" rel="noopener" style={{ padding: "13px 2px", fontSize: 16, fontWeight: "var(--fw-medium)", color: "var(--text-strong)", borderBottom: "1px solid var(--border-subtle)" }}>Iniciar sesión</a>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 16 }}>
            <Button variant="outline" fullWidth onClick={() => window.openWA("Hola, quiero hablar con el equipo de ventas de TodoPymes.")}>Hablar con ventas</Button>
            <Button variant="primary" fullWidth onClick={() => window.openWA("Hola, quiero probar TodoPymes gratis.")}>Pruébalo gratis</Button>
          </div>
        </div>
      )}
    </header>
  );
}
