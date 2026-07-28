import React from "react";

/* ============================================================
   Stories (video carousel, fondo azul profundo) + Switch provider.
   ============================================================ */

function ArrowBtn({ children }) {
  return (
    <button style={{ width: 54, height: 54, borderRadius: "50%", border: "1px solid rgba(255,255,255,.25)", background: "transparent", color: "#fff", fontSize: 20, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>{children}</button>
  );
}

export function Stories() {
  return (
    <section style={{ background: "var(--tp-blue-950)", padding: "84px 28px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <h2 style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap", fontSize: "clamp(28px,3.6vw,50px)", fontWeight: "var(--fw-black)", letterSpacing: "-0.02em", color: "#fff", marginBottom: 40 }}>
          Negocios que <span style={{ color: "var(--tp-blue-400)" }}>crecen</span> con TodoPymes
        </h2>

        <div style={{ background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 22, padding: 22, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 30, alignItems: "center" }}>
          {/* video */}
          <div style={{ position: "relative", borderRadius: 14, overflow: "hidden" }}>
            <image-slot id="tp-story-video" shape="rounded" radius="14" placeholder="Suelta el video o la portada de tu caso de éxito" style={{ display: "block", width: "100%", height: 380 }}></image-slot>
            <span style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
              <span style={{ width: 76, height: 76, borderRadius: "50%", background: "var(--tp-azul-acento)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, boxShadow: "0 8px 24px rgba(0,0,0,.4)", paddingLeft: 6 }}>▶</span>
            </span>
            <div style={{ position: "absolute", left: 22, bottom: 20, pointerEvents: "none" }}>
              <div style={{ fontSize: 54, fontWeight: "var(--fw-black)", color: "#fff", lineHeight: 1, letterSpacing: "-0.02em" }}>4x</div>
              <div style={{ fontSize: 14, color: "rgba(255,255,255,.85)", marginTop: 4 }}>más rápido en tiempos de respuesta</div>
            </div>
          </div>
          {/* quote */}
          <div>
            <div style={{ fontFamily: "var(--font-sans)", fontWeight: "var(--fw-black)", fontSize: 22, color: "rgba(255,255,255,.5)", letterSpacing: "0.02em", marginBottom: 18 }}>Glamour&nbsp;Spa</div>
            <p style={{ fontSize: "clamp(18px,1.7vw,24px)", fontWeight: "var(--fw-semibold)", lineHeight: 1.35, color: "#fff", margin: 0 }}>
              "Estamos tan seguros que lo decimos: súbete a TodoPymes. Ahórrate el tiempo, ahórrate el dolor de cabeza."
            </p>
            <div style={{ marginTop: 20 }}>
              <div style={{ fontSize: 16, fontWeight: "var(--fw-bold)", color: "#fff" }}>Carolina Méndez</div>
              <div style={{ fontSize: 14, color: "rgba(255,255,255,.6)" }}>Co-Fundadora @ Glamour Spa</div>
            </div>
            <div style={{ marginTop: 26 }}><Button variant="primary" size="md">Leer la historia</Button></div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Switch from any provider ---------------- */

function Award({ label, color }) {
  return (
    <div style={{ width: 84, textAlign: "center" }}>
      <div style={{ position: "relative", width: 66, height: 84, margin: "0 auto" }}>
        <div style={{ position: "absolute", inset: 0, background: color, clipPath: "polygon(0 0,100% 0,100% 74%,50% 100%,0 74%)", borderRadius: 7 }} />
        <div style={{ position: "absolute", left: 0, right: 0, top: 0, height: 76, background: "#fff", border: "1px solid var(--border-subtle)", clipPath: "polygon(0 0,100% 0,100% 72%,50% 100%,0 72%)", display: "flex", flexDirection: "column", alignItems: "center", padding: "11px 6px 0" }}>
          <div style={{ fontSize: 7, fontWeight: "var(--fw-bold)", letterSpacing: "0.08em", color: "var(--text-muted)" }}>2026</div>
          <div style={{ fontSize: 10.5, fontWeight: "var(--fw-black)", color: "var(--text-strong)", lineHeight: 1.05, marginTop: 4 }}>{label}</div>
        </div>
      </div>
    </div>
  );
}

export function SwitchProvider() {
  const cards = [
    { ic: "internet", t: "Guía paso a paso", b: "Tiempos claros, actualizaciones en tiempo real y soporte cuando lo necesites." },
    { ic: "equipo", t: "Soporte prioritario durante el cambio", b: "Resolvemos todas tus dudas rápido, acompañándote durante la migración." },
    { ic: "nube", t: "Sigue disponible todo el tiempo", b: "La mayoría de clientes no experimenta ninguna interrupción del servicio." },
  ];
  const awards = [
    ["Mejor Usabilidad", "var(--tp-warning)"],
    ["Admin más fácil", "var(--tp-warning)"],
    ["Top 50", "var(--tp-azul-acento)"],
    ["Top 100", "var(--tp-azul-acento)"],
    ["Alto desempeño", "var(--tp-blue-400)"],
    ["Mayor adopción", "var(--tp-blue-400)"],
    ["Mejores Resultados", "var(--tp-azul-corporativo)"],
  ];
  return (
    <section style={{ maxWidth: 1240, margin: "0 auto", padding: "84px 28px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap", justifyContent: "space-between", marginBottom: 40 }}>
        <h2 style={{ fontSize: "clamp(28px,3.4vw,46px)", fontWeight: "var(--fw-black)", letterSpacing: "-0.02em", color: "var(--text-strong)", margin: 0 }}>Cámbiate desde cualquier proveedor, gratis</h2>
        <div style={{ display: "flex", gap: 12 }}>
          <Button variant="outline" size="md">Pruébalo gratis</Button>
          <Button variant="secondary" size="md">Migra tu número</Button>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 22 }}>
        {cards.map((c, i) => (
          <div key={i} style={{ background: "var(--tp-slate-100)", borderRadius: 18, padding: "26px 26px 30px" }}>
            <span style={{ width: 46, height: 46, borderRadius: 12, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18, boxShadow: "var(--shadow-xs)" }}>
              <img src={ICONS + c.ic + ".png"} style={{ width: 24, height: 24 }} alt="" />
            </span>
            <h3 style={{ fontSize: 20, fontWeight: "var(--fw-bold)", color: "var(--text-strong)", marginBottom: 8 }}>{c.t}</h3>
            <p style={{ fontSize: 15, lineHeight: 1.55, color: "var(--text-muted)", margin: 0 }}>{c.b}</p>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, flexWrap: "wrap", marginTop: 48 }}>
        <p style={{ fontSize: 22, fontWeight: "var(--fw-medium)", color: "var(--text-strong)", maxWidth: 320, margin: 0, lineHeight: 1.3 }}>
          TodoPymes es el <b style={{ fontWeight: "var(--fw-bold)" }}>#1 en satisfacción</b> <span style={{ color: "var(--text-muted)" }}>al cliente en G2.</span>
        </p>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {awards.map((a, i) => <Award key={i} label={a[0]} color={a[1]} />)}
        </div>
      </div>
    </section>
  );
}
