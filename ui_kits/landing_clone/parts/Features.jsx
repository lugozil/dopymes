import React from "react";

/* ============================================================
   Trust logo strip + "Di Hola con TodoPymes" 6 feature cards.
   Cada card replica el mockup de Quo, con identidad TodoPymes.
   ============================================================ */

function TrustStrip() {
  const names = ["SIGNAL", "FOCUS", "XOCO HOUSE", "LUMOTICA", "GLAMOUR SPA", "CLÍNICA VIDA"];
  return (
    <section style={{ maxWidth: 1240, margin: "0 auto", padding: "44px 28px 8px" }}>
      <p style={{ textAlign: "center", fontSize: 15, color: "var(--text-muted)", marginBottom: 26 }}>Impulsando Pymes en Europa y Latinoamérica</p>
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 26, opacity: 0.55 }}>
        {names.map((n, i) => (
          <span key={n} style={{ fontFamily: "var(--font-sans)", fontWeight: i % 2 ? "var(--fw-black)" : "var(--fw-bold)", fontSize: i % 3 === 0 ? 22 : 18, letterSpacing: i % 2 ? "0.08em" : "-0.01em", color: "var(--tp-slate-700)", textTransform: i % 2 ? "uppercase" : "none" }}>{n}</span>
        ))}
      </div>
      <div style={{ borderBottom: "1px solid var(--border-subtle)", marginTop: 30 }} />
    </section>
  );
}

function CardShell({ title, cta, children }) {
  return (
    <div style={{ background: "var(--tp-slate-100)", borderRadius: 20, padding: "30px 30px 0", display: "flex", flexDirection: "column", overflow: "hidden", minHeight: 430 }}>
      <h3 style={{ fontSize: "clamp(20px,1.7vw,25px)", fontWeight: "var(--fw-bold)", color: "var(--text-strong)", letterSpacing: "-0.01em", lineHeight: 1.15 }}>{title}</h3>
      <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 7, marginTop: 14, fontSize: 15, fontWeight: "var(--fw-semibold)", color: "var(--text-strong)" }}>{cta} <span aria-hidden style={{ fontSize: 16 }}>→</span></a>
      <div style={{ marginTop: "auto", paddingTop: 26 }}>{children}</div>
    </div>
  );
}

/* 1 · número de WhatsApp Business */
function MockNumbers() {
  const rows = [
    ["MX", "+52 55 1042 9147", "CDMX", false],
    ["CO", "+57 320 368 5046", "Bogotá", true],
    ["PE", "+51 1 800 656 8810", "Lima · Toll-free", false],
    ["CL", "+56 2 2851 6951", "Santiago", false],
  ];
  return (
    <div style={{ background: "#fff", borderRadius: "14px 14px 0 0", padding: 14, boxShadow: "0 -2px 0 var(--border-subtle)", display: "flex", flexDirection: "column", gap: 8 }}>
      {rows.map((r, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: 11, padding: "11px 13px", borderRadius: 11, border: r[3] ? "1.5px solid var(--tp-azul-acento)" : "1px solid var(--border-subtle)", boxShadow: r[3] ? "0 0 0 4px var(--focus-ring)" : "none", background: "#fff" }}>
          <span style={{ width: 24, height: 18, borderRadius: 4, background: "var(--tp-blue-100)", color: "var(--tp-blue-700)", fontSize: 10, fontWeight: "var(--fw-bold)", display: "flex", alignItems: "center", justifyContent: "center" }}>{r[0]}</span>
          <span style={{ flex: 1, fontSize: 14, fontWeight: "var(--fw-semibold)", color: "var(--text-strong)" }}>{r[1]}</span>
          <span style={{ fontSize: 12, color: "var(--text-muted)" }}>{r[2]}</span>
        </div>
      ))}
    </div>
  );
}

/* 2 · bandeja compartida — burbujas */
function MockChat() {
  return (
    <div style={{ paddingBottom: 30, display: "flex", flexDirection: "column", gap: 14 }}>
      <div style={{ alignSelf: "flex-start", display: "flex", alignItems: "center", gap: 9, background: "var(--tp-blue-100)", borderRadius: 12, padding: "10px 13px" }}>
        <span style={{ width: 26, height: 26, flex: "none", borderRadius: "50%", background: "var(--tp-azul-acento)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12 }}>✓</span>
        <div style={{ lineHeight: 1.3 }}><div style={{ fontSize: 13, fontWeight: "var(--fw-bold)", color: "var(--tp-blue-700)", whiteSpace: "nowrap" }}>Llamada atendida</div><div style={{ fontSize: 11, color: "var(--tp-blue-700)" }}>Duración · 0:42</div></div>
        <Avatar name="L F" size={26} style={{ marginLeft: 4 }} />
      </div>
      <div style={{ alignSelf: "flex-end", display: "flex", alignItems: "flex-end", gap: 8 }}>
        <div style={{ maxWidth: 230, background: "var(--tp-azul-acento)", color: "#fff", borderRadius: 14, borderBottomRightRadius: 4, padding: "10px 13px", fontSize: 13.5 }}>Hola Cris, el equipo tendrá la propuesta lista hoy mismo.</div>
        <Avatar name="C R" tone="slate" size={26} />
      </div>
      <div style={{ alignSelf: "flex-end", display: "flex", alignItems: "center", gap: 8 }}>
        <div style={{ background: "var(--tp-slate-200)", borderRadius: 999, padding: "9px 13px", display: "flex", gap: 4 }}>
          {[0, 1, 2].map(d => <span key={d} style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--tp-slate-500)" }} />)}
        </div>
        <Avatar name="A G" size={26} />
      </div>
    </div>
  );
}

/* 3 · enrutamiento — árbol */
function MockRouting() {
  return (
    <div style={{ background: "#fff", borderRadius: "14px 14px 0 0", padding: 16, display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ alignSelf: "flex-end", display: "flex", alignItems: "center", gap: 8, background: "var(--tp-success-soft)", borderRadius: 10, padding: "8px 11px" }}>
        <img src={ICONS + "mensajes.png"} style={{ width: 16, height: 16 }} alt="" />
        <span style={{ fontSize: 12.5, fontWeight: "var(--fw-semibold)", color: "#0f7a37" }}>Entra un lead</span>
      </div>
      <div style={{ alignSelf: "center", fontSize: 11, fontWeight: "var(--fw-semibold)", color: "var(--text-muted)", background: "var(--tp-slate-100)", borderRadius: 999, padding: "4px 11px" }}>En horario</div>
      <div style={{ display: "flex", gap: 10 }}>
        <div style={{ flex: 1, border: "1px solid var(--border-subtle)", borderRadius: 11, padding: "11px", display: "flex", flexDirection: "column", gap: 5 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 7 }}><img src={ICONS + "equipo.png"} style={{ width: 15, height: 15 }} alt="" /><span style={{ fontSize: 12.5, fontWeight: "var(--fw-semibold)", color: "var(--text-strong)" }}>Equipo</span></div>
          <div style={{ fontSize: 11, color: "var(--text-muted)" }}>Suena 30s</div>
        </div>
        <div style={{ flex: 1, border: "1px solid var(--border-subtle)", borderRadius: 11, padding: "11px", display: "flex", flexDirection: "column", gap: 5 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 7 }}><img src={ICONS + "configuracion.png"} style={{ width: 15, height: 15 }} alt="" /><span style={{ fontSize: 12.5, fontWeight: "var(--fw-semibold)", color: "var(--text-strong)" }}>Sona IA</span></div>
          <div style={{ fontSize: 11, color: "var(--text-muted)" }}>Si nadie responde</div>
        </div>
      </div>
    </div>
  );
}

/* 4 · agente IA — resumen de lead */
function MockAI() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10, paddingBottom: 30 }}>
      <div style={{ alignSelf: "flex-start", display: "flex", alignItems: "center", gap: 8, background: "var(--tp-blue-100)", borderRadius: 10, padding: "8px 11px" }}>
        <Avatar name="So na" size={24} />
        <div><div style={{ fontSize: 12.5, fontWeight: "var(--fw-bold)", color: "var(--tp-blue-700)" }}>Sona atendió</div><div style={{ fontSize: 10.5, color: "var(--tp-blue-700)" }}>Nadie más respondió · 1:30</div></div>
      </div>
      <div style={{ background: "#fff", border: "1px solid var(--border-subtle)", borderRadius: 12, padding: 14 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 8 }}>
          <span style={{ fontSize: 13, fontWeight: "var(--fw-bold)", color: "var(--text-strong)" }}>Nuevo lead</span>
          <Badge variant="brand" size="sm">Resumen IA</Badge>
        </div>
        <p style={{ fontSize: 12, color: "var(--text-body)", lineHeight: 1.5, margin: 0 }}>Cliente busca cotización de instalación. Presupuesto medio, decisión esta semana.</p>
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 10, fontSize: 12, fontWeight: "var(--fw-semibold)", color: "var(--tp-warning)" }}>⚑ Tomar mensaje</div>
        <div style={{ marginTop: 8, fontSize: 11.5, color: "var(--text-muted)" }}><b style={{ color: "var(--text-strong)" }}>Nombre</b> · Sara Díaz &nbsp;·&nbsp; <b style={{ color: "var(--text-strong)" }}>Ciudad</b> · Medellín</div>
      </div>
    </div>
  );
}

/* 5 · analíticas — barras */
function MockChart() {
  const bars = [[46, "var(--tp-blue-300)"], [78, "var(--tp-azul-acento)"], [60, "var(--tp-blue-400)"]];
  return (
    <div style={{ background: "#fff", borderRadius: "14px 14px 0 0", padding: 16 }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
        <span style={{ fontSize: 14, fontWeight: "var(--fw-bold)", color: "var(--text-strong)" }}>Llamadas</span>
        <span style={{ fontSize: 13, color: "var(--text-muted)" }}>1,437</span>
      </div>
      <div style={{ display: "flex", alignItems: "flex-end", gap: 16, height: 120, marginTop: 14, position: "relative" }}>
        {bars.map((b, i) => (
          <div key={i} style={{ flex: 1, height: b[0] + "%", background: b[1], borderRadius: "8px 8px 0 0" }} />
        ))}
        <div style={{ position: "absolute", right: 0, top: 0, background: "#fff", border: "1px solid var(--border-subtle)", borderRadius: 9, boxShadow: "var(--shadow-md)", padding: "8px 10px", fontSize: 10.5 }}>
          <div style={{ fontWeight: "var(--fw-bold)", color: "var(--text-strong)", marginBottom: 4 }}>2 Feb · <span style={{ color: "var(--tp-success)" }}>↑2%</span></div>
          {[["Perdidas", 12, "var(--tp-danger)"], ["Entrantes", 91, "var(--tp-azul-acento)"], ["Salientes", 128, "var(--tp-blue-700)"]].map(r => (
            <div key={r[0]} style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 2 }}><span style={{ width: 7, height: 7, borderRadius: "50%", background: r[2] }} /><span style={{ color: "var(--text-muted)", flex: 1 }}>{r[0]}</span><b style={{ color: "var(--text-strong)" }}>{r[1]}</b></div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* 6 · integraciones — grid de iconos */
function MockIntegrations() {
  const set = ["mensajes", "nube", "calendario", "usuario", "analisis", "internet", "estadistica", "configuracion", "equipo", "agenda", "informacion", "ajustes"];
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(70px, 1fr))", gap: 10, paddingBottom: 30 }}>
      {set.map((n, i) => (
        <div key={i} style={{ aspectRatio: "1", background: "#fff", border: "1px solid var(--border-subtle)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "var(--shadow-xs)" }}>
          <img src={ICONS + n + ".png"} style={{ width: "46%", height: "46%", objectFit: "contain" }} alt="" />
        </div>
      ))}
    </div>
  );
}

export function Features() {
  const cards = [
    { t: "Activa tu WhatsApp Business en minutos", c: "Conseguir número", m: <MockNumbers /> },
    { t: "Comparte un número y mantén a tu equipo alineado", c: "Bandeja compartida", m: <MockChat /> },
    { t: "Enruta cada lead a la persona correcta al instante", c: "Enrutamiento", m: <MockRouting /> },
    { t: "Nunca pierdas un lead. Deja que la IA responda cuando tu equipo no puede", c: "Agente IA", m: <MockAI /> },
    { t: "Detecta problemas antes de que te cuesten ventas", c: "Analíticas", m: <MockChart /> },
    { t: "Sincroniza llamadas y chats con tus herramientas favoritas", c: "Integraciones", m: <MockIntegrations /> },
  ];
  return (
    <>
      <TrustStrip />
      <section style={{ maxWidth: 1240, margin: "0 auto", padding: "70px 28px 90px" }}>
        <h2 style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap", fontSize: "clamp(30px,4vw,52px)", fontWeight: "var(--fw-black)", letterSpacing: "-0.02em", color: "var(--text-strong)", marginBottom: 48 }}>
          Di
          <span style={{ display: "inline-flex", transform: "rotate(-3deg)", background: "var(--tp-azul-acento)", color: "#fff", borderRadius: 14, padding: "4px 20px", boxShadow: "var(--shadow-brand)" }}>Hola</span>
          con TodoPymes
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 22 }}>
          {cards.map((c, i) => <CardShell key={i} title={c.t} cta={c.c}>{c.m}</CardShell>)}
        </div>
      </section>
    </>
  );
}
