import React from "react";

/* ============================================================
   NavBar compartido (home + soluciones). El logo enlaza al home
   y "Soluciones" a la página de soluciones. `active` resalta la
   sección actual.
   ============================================================ */
export function NavBar({ active = "" }) {
  const links = [
    { label: "Producto", href: "TodoPymes Web.html", key: "producto" },
    { label: "Soluciones", href: "TodoPymes Soluciones.html", key: "soluciones" },
    { label: "Recursos", href: "TodoPymes Recursos.html", key: "recursos" },
    { label: "Precios", href: "TodoPymes Precios.html", key: "precios" },
  ];
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 40, background: "rgba(255,255,255,0.85)", backdropFilter: "blur(12px)", borderBottom: "1px solid var(--border-subtle)" }}>
      <nav style={{ maxWidth: 1240, margin: "0 auto", display: "flex", alignItems: "center", gap: 30, padding: "16px 28px" }}>
        <a href="TodoPymes Web.html" style={{ display: "inline-flex" }}>
          <img src={LOGOS + "todopymes-principal.png"} alt="TodoPymes" style={{ height: 28 }} />
        </a>
        <div style={{ display: "flex", alignItems: "center", gap: 26, marginLeft: 8 }}>
          {links.map((l, i) => (
            <a key={l.key} href={l.href} style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 15, fontWeight: active === l.key ? "var(--fw-semibold)" : "var(--fw-medium)", color: active === l.key ? "var(--tp-azul-acento)" : "var(--text-strong)" }}>
              {l.label}{i !== 3 && <span style={{ fontSize: 10, opacity: 0.5 }}>▾</span>}
            </a>
          ))}
        </div>
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 14 }}>
          <a href="https://app.dopymes.com/" target="_blank" rel="noopener" style={{ fontSize: 15, fontWeight: "var(--fw-medium)", color: "var(--text-strong)" }}>Iniciar sesión</a>
          <Button variant="outline" size="sm" onClick={() => window.location.href = "TodoPymes Contacto.html"}>Hablar con ventas</Button>
          <Button variant="primary" size="sm" onClick={() => window.__openModal && window.__openModal("cta")}>Pruébalo gratis</Button>
        </div>
      </nav>
    </header>
  );
}
