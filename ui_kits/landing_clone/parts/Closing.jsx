import React from "react";

/* ============================================================
   ¿Listo para empezar? (dark) + CTA final + Footer.
   ============================================================ */

function StartCard({ icon, title, sub, msg }) {
  return (
    <div role="button" tabIndex={0} onClick={() => window.openWA(msg)} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") window.openWA(msg); }} style={{ position: "relative", border: "1px solid rgba(255,255,255,.12)", borderRadius: 18, padding: "28px 26px", minHeight: 230, display: "flex", flexDirection: "column", background: "rgba(255,255,255,.02)", cursor: "pointer" }}>
      <span style={{ width: 64, height: 64, borderRadius: 16, background: "rgba(12,106,249,.14)", border: "1px solid rgba(12,106,249,.3)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "auto" }}>
        <img src={ICONS + "white/" + icon + ".png"} style={{ width: 30, height: 30 }} alt="" />
      </span>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 12, marginTop: 26 }}>
        <div style={{ fontSize: 21, fontWeight: "var(--fw-bold)", lineHeight: 1.2, color: "#fff" }}>
          {title} <span style={{ color: "rgba(255,255,255,.5)", fontWeight: "var(--fw-medium)" }}>{sub}</span>
        </div>
        <span style={{ width: 40, height: 40, flex: "none", borderRadius: "50%", background: "rgba(255,255,255,.08)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>→</span>
      </div>
    </div>
  );
}

export function GetStarted({ title = "¿Listo para empezar?", subtitle = "Explora funciones, aprende más o elige entre miles de números." }) {
  return (
    <section style={{ background: "var(--tp-blue-950)", padding: "84px 28px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <h2 style={{ fontSize: "clamp(26px,3vw,40px)", fontWeight: "var(--fw-bold)", letterSpacing: "-0.015em", color: "#fff", marginBottom: 40, maxWidth: 760 }}>
          {title} <span style={{ color: "rgba(255,255,255,.5)" }}>{subtitle}</span>
        </h2>
        <div className="tp-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 22 }}>
          <StartCard icon="internet" title="Elige un número nuevo" sub="o usa el que ya tienes" msg="Hola, quiero activar un número con TodoPymes." />
          <StartCard icon="analisis" title="Mira una demo" sub="y empieza con TodoPymes" msg="Hola, quiero agendar una demo de TodoPymes." />
          <StartCard icon="estadistica" title="Ve los precios," sub="elige un plan y empieza" msg="Hola, quiero conocer los planes y precios de TodoPymes." />
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20, flexWrap: "wrap", marginTop: 56 }}>
          <div>
            <div style={{ fontSize: 24, fontWeight: "var(--fw-bold)", color: "#fff" }}>¿Tienes más preguntas?</div>
            <div style={{ fontSize: 15, color: "rgba(255,255,255,.55)", marginTop: 4 }}>Pide un resumen con IA de TodoPymes y pregunta lo que quieras</div>
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            {["configuracion", "informacion"].map(n => (
              <span key={n} style={{ width: 56, height: 56, borderRadius: 14, border: "1px solid rgba(255,255,255,.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img src={ICONS + "white/" + n + ".png"} style={{ width: 24, height: 24 }} alt="" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Final CTA ---------------- */

function BigBtn({ label, dark, onClick }) {
  return (
    <button onClick={onClick} style={{
      position: "relative", flex: 1, minWidth: 280, textAlign: "left", cursor: "pointer",
      background: dark ? "var(--surface-brand)" : "var(--tp-slate-100)",
      color: dark ? "#fff" : "var(--text-strong)",
      border: "none", borderRadius: 20, padding: "46px 90px 40px 32px",
      fontFamily: "var(--font-sans)", fontWeight: "var(--fw-bold)", fontSize: 24, lineHeight: 1.25,
      boxShadow: dark ? "var(--shadow-lg)" : "none",
    }}>
      {label}
      <span style={{ position: "absolute", top: 24, right: 28, width: 52, height: 52, borderRadius: "50%", background: "var(--tp-azul-acento)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, boxShadow: "var(--shadow-brand)" }}>↗</span>
    </button>
  );
}

export function FinalCta({ title = "El dinero está", accent = "en juego" }) {
  return (
    <section style={{ background: "#fff" }}>
      <div className="tp-grid-2" style={{ maxWidth: 1240, margin: "0 auto", padding: "84px 28px 64px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
        <h2 style={{ fontSize: "clamp(32px,3.6vw,54px)", fontWeight: "var(--fw-black)", letterSpacing: "-0.03em", lineHeight: 1.1, color: "var(--text-strong)", margin: 0 }}>
          <div>{title}</div>
          <div style={{ color: "var(--tp-azul-acento)" }}>{accent}</div>
        </h2>
        <div style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
          <BigBtn label="Pruébalo gratis" dark onClick={() => window.openWA("Hola, quiero probar TodoPymes gratis.")} />
          <BigBtn label="Hablar con ventas" onClick={() => window.openWA("Hola, quiero hablar con el equipo de ventas de TodoPymes.")} />
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */

export function Footer() {
  const cols = [
    ["Descargas", ["Comparar", "Integraciones", "Sé partner", "Encuentra un partner", "Acerca de", "Empleos", "Contáctanos", "Seguridad", "Estado del sistema", "Novedades"]],
    ["Funciones", ["Recepcionista IA", "Servicio de respuestas", "Atención automática", "Constructor de flujos", "Enrutamiento", "TodoPymes MCP", "TodoPymes API", "Agente Sona IA", "Desvío de llamadas"]],
    ["Recursos", ["Centro de recursos", "Historias de clientes", "Webinars", "Blog", "Demo", "Podcast", "Prensa"]],
    ["Del blog", ["Cómo conseguir un número virtual", "Cómo tener un segundo número", "Mejores alternativas de WhatsApp", "Cómo tener 2 números en 1 teléfono", "Mejores servicios de SMS para PyMEs", "Mira todos los posts →"]],
  ];
  return (
    <footer style={{ background: "#fff", borderTop: "1px solid var(--border-subtle)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "56px 28px 40px" }}>
        <div className="tp-grid-4-footer" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1.3fr", gap: 32 }}>
          {cols.map((c, ci) => (
            <div key={c[0]}>
              <div style={{ fontSize: 16, fontWeight: "var(--fw-bold)", color: "var(--text-strong)", marginBottom: 18 }}>{c[0]}</div>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {c[1].map(l => <li key={l}><a href="#" style={{ fontSize: 15, color: "var(--text-muted)" }}>{l}</a></li>)}
              </ul>
              {ci === 0 && <a href="#" style={{ display: "inline-block", marginTop: 18, fontSize: 15, fontWeight: "var(--fw-semibold)", color: "var(--text-strong)" }}>Explorar más →</a>}
            </div>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap", marginTop: 48, paddingTop: 28, borderTop: "1px solid var(--border-subtle)" }}>
          <img src={LOGOS + "todopymes-principal.png"} alt="TodoPymes" style={{ height: 24 }} />
          <span style={{ fontSize: 13, color: "var(--text-muted)" }}>Automatizar · Conectar · Optimizar · Crecer</span>
          <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 18, fontSize: 13, color: "var(--text-muted)" }}>
            <a href="/terminos" style={{ color: "var(--text-muted)" }}>Términos</a>
            <a href="/privacidad" style={{ color: "var(--text-muted)" }}>Privacidad</a>
            <span>© 2026 TodoPymes · LATAM y el Caribe</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
