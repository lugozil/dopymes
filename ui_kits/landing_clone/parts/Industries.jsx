import React from "react";

/* ============================================================
   "Hecho para cómo trabaja tu equipo" (industrias + ilustración)
   + "Mantén todo sincronizado" (grid de integraciones).
   ============================================================ */

export function Industries() {
  const pills = ["Servicios a domicilio", "Inmobiliarias", "Despachos legales", "Pequeños negocios", "Salud", "Startups", "Educación", "Soporte", "Operaciones", "Equipos de venta", "Franquicias"];
  const [active, setActive] = React.useState(0);
  return (
    <section style={{ background: "var(--tp-slate-100)" }}>
      <div className="tp-grid-2" style={{ maxWidth: 1240, margin: "0 auto", padding: "84px 28px", display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 40, alignItems: "center" }}>
        <div>
          <h2 style={{ fontSize: "clamp(30px,4vw,56px)", fontWeight: "var(--fw-black)", letterSpacing: "-0.025em", lineHeight: 1.04, color: "var(--text-strong)", marginBottom: 32 }}>
            Hecho para cómo trabaja tu equipo de verdad
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {pills.map((p, i) => (
              <button key={p} onClick={() => setActive(i)} style={{
                fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: "var(--fw-semibold)", cursor: "pointer",
                padding: "11px 18px", borderRadius: 12, border: "none",
                background: active === i ? "var(--surface-brand)" : "var(--tp-slate-200)",
                color: active === i ? "#fff" : "var(--text-strong)",
                transition: "background var(--dur-fast) var(--ease-out)",
              }}>{p}</button>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <image-slot id="tp-industry-illustration" shape="rounded" radius="18" placeholder="Suelta tu ilustración isométrica de marca" style={{ display: "block", width: "100%", maxWidth: 460, height: 360 }}></image-slot>
        </div>
      </div>
    </section>
  );
}

export function Integrations() {
  const set = ["mensajes", "nube", "calendario", "usuario", "analisis", "internet", "estadistica", "configuracion", "equipo", "agenda", "informacion", "ajustes", "mensajes", "nube", "calendario", "usuario", "analisis", "internet", "estadistica", "equipo"];
  return (
    <section style={{ background: "#fff" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "84px 28px" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 20, flexWrap: "wrap", marginBottom: 36 }}>
          <h2 style={{ fontSize: "clamp(28px,3.6vw,50px)", fontWeight: "var(--fw-black)", letterSpacing: "-0.02em", color: "var(--text-strong)", margin: 0 }}>Mantén todo sincronizado automáticamente</h2>
          <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 15, fontWeight: "var(--fw-semibold)", color: "var(--text-strong)", whiteSpace: "nowrap" }}>Ver todas las integraciones <span aria-hidden>→</span></a>
        </div>
        <div className="tp-grid-10" style={{ display: "grid", gridTemplateColumns: "repeat(10, 1fr)", gap: 14 }}>
          {set.map((n, i) => (
            <div key={i} style={{ aspectRatio: "1", background: "#fff", border: "1px solid var(--border-subtle)", borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "var(--shadow-xs)" }}>
              <img src={ICONS + n + ".png"} style={{ width: "48%", height: "48%", objectFit: "contain" }} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
