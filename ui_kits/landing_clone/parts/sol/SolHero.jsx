import React from "react";

/* ============================================================
   Solutions · Hero — "Servicios a domicilio".
   Texto a la izquierda + collage (foto + tarjeta de llamada +
   ilustración) a la derecha. Réplica de la estructura de Quo.
   ============================================================ */

function CallCard() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 11, background: "#fff", border: "1px solid var(--border-subtle)", borderRadius: 14, padding: "12px 14px", boxShadow: "var(--shadow-md)" }}>
      <span style={{ width: 34, height: 34, flex: "none", borderRadius: "50%", background: "var(--tp-success)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ display: "flex", gap: 1.5, alignItems: "flex-end", height: 13 }}>
          <i style={{ width: 2.5, height: 6, background: "#fff", borderRadius: 1 }} />
          <i style={{ width: 2.5, height: 12, background: "#fff", borderRadius: 1 }} />
          <i style={{ width: 2.5, height: 8, background: "#fff", borderRadius: 1 }} />
        </span>
      </span>
      <div style={{ lineHeight: 1.3 }}>
        <div style={{ fontSize: 13.5, fontWeight: "var(--fw-bold)", color: "var(--text-strong)", whiteSpace: "nowrap" }}>Llamada en curso…</div>
        <div style={{ fontSize: 12, color: "var(--text-muted)", whiteSpace: "nowrap" }}>Emily contestó</div>
      </div>
    </div>
  );
}

function ApptCard() {
  const d = new Date();
  let fecha = d.toLocaleDateString("es-ES", { day: "numeric", month: "long" });
  fecha = fecha.charAt(0).toUpperCase() + fecha.slice(1);
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 11, background: "#fff", border: "1px solid var(--border-subtle)", borderRadius: 14, padding: "12px 14px", boxShadow: "var(--shadow-md)" }}>
      <span style={{ width: 34, height: 34, flex: "none", borderRadius: "50%", background: "var(--tp-azul-acento)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}><img src={ICONS + "agenda.png"} style={{ width: 17, height: 17 }} alt="" /></span>
      <div style={{ lineHeight: 1.3 }}>
        <div style={{ fontSize: 13.5, fontWeight: "var(--fw-bold)", color: "var(--text-strong)", whiteSpace: "nowrap" }}>Cita programada</div>
        <div style={{ fontSize: 12, color: "var(--text-muted)", whiteSpace: "nowrap" }}>{fecha}</div>
      </div>
    </div>
  );
}

export function SolHero() {
  return (
    <section style={{ background: "#fff" }}>
      <div className="tp-grid-2" style={{ maxWidth: 1240, margin: "0 auto", padding: "64px 28px 56px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
        {/* text */}
        <div>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--tp-azul-acento)", color: "#fff", fontSize: 13.5, fontWeight: "var(--fw-bold)", padding: "7px 15px", borderRadius: "var(--radius-pill)", whiteSpace: "nowrap" }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#fff" }} />
            Servicios a domicilio
          </span>
          <h1 style={{ fontFamily: "var(--font-sans)", fontWeight: "var(--fw-black)", fontSize: "clamp(30px,3.2vw,42px)", lineHeight: 1.16, letterSpacing: "-0.02em", color: "var(--text-strong)", margin: "22px 0 0" }}>
            Responde a cada cliente al instante y gana más trabajos
          </h1>
          <p style={{ fontSize: "clamp(16px,1.4vw,19px)", lineHeight: 1.55, color: "var(--text-muted)", margin: "22px 0 0", maxWidth: 480 }}>
            Pon a todo tu equipo en un solo número con una bandeja única para cada llamada, mensaje y nota de voz — así ningún lead se escapa, estés en obra, con un cliente o ya cerrando el día.
          </p>
          <div style={{ display: "flex", gap: 14, marginTop: 32 }}>
            <Button variant="secondary" size="lg" onClick={() => window.openWA("Hola, quiero probar TodoPymes gratis.")}>Pruébalo gratis</Button>
            <Button variant="outline" size="lg" onClick={() => window.openWA("Hola, quiero hablar con el equipo de ventas de TodoPymes.")}>Hablar con ventas</Button>
          </div>
        </div>

        {/* collage */}
        <div className="tp-grid-2" style={{ display: "grid", gridTemplateColumns: "1.15fr 1fr", gap: 16, minHeight: 440 }}>
          <image-slot id="tp-sol-hero-photo" src="ilustraciones/movil.png" shape="rounded" radius="18" fit="cover" position="50% 40%" placeholder="Suelta una foto de un técnico / servicio a domicilio" style={{ display: "block", width: "100%", height: "100%" }}></image-slot>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ background: "var(--tp-slate-100)", borderRadius: 18, padding: 18, display: "flex", alignItems: "center", justifyContent: "center", flex: "0 0 44%" }}>
              <CallCard />
            </div>
            <div style={{ background: "var(--tp-blue-200)", borderRadius: 18, padding: 18, display: "flex", alignItems: "center", justifyContent: "center", flex: 1 }}>
              <ApptCard />
            </div>
          </div>
        </div>
      </div>

      {/* reviews strip */}
      <div style={{ borderTop: "1px solid var(--border-subtle)" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "24px 28px", display: "flex", alignItems: "center", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 9, fontSize: 15, flexWrap: "wrap", justifyContent: "center" }}>
            <span style={{ width: 22, height: 22, borderRadius: "50%", background: "var(--tp-azul-acento)", color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 12 }}>★</span>
            <span style={{ fontWeight: "var(--fw-bold)", color: "var(--text-strong)", whiteSpace: "nowrap" }}>4.8 estrellas</span>
            <span style={{ fontWeight: "var(--fw-semibold)", color: "var(--text-strong)", marginLeft: 6 }}>El #1 para equipos de servicios a domicilio</span>
          </div>
        </div>
      </div>
    </section>
  );
}
