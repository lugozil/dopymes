import React from "react";

/* ============================================================
   Precios · Hero (alineado a la izquierda) + cards de planes
   con el layout de referencia: precio horizontal, CTA arriba,
   features con encabezado "Todo lo de X, y además:".
   Datos reales de TodoPymes.
   ============================================================ */

const PLANS = [
  {
    name: "Essential",
    tagline: "Lo esencial para arrancar tu negocio con fuerza.",
    monthly: 150, annual: 1440,
    cta: "Empezar gratis", variant: "outline",
    featHeader: "El plan incluye:",
    features: [
      ["Workflows:", " Automatiza tareas repetitivas"],
      ["Social Sync:", " Conecta tus redes sociales"],
      ["Leads:", " Contactos y usuarios ilimitados"],
      ["Sales Funnels:", " Convierte visitas en clientes"],
    ],
  },
  {
    name: "Professional",
    tagline: "Para negocios que quieren escalar al siguiente nivel.",
    monthly: 250, annual: 2400,
    cta: "Empezar gratis", variant: "secondary", featured: true,
    featHeader: "Todo lo de Essential, y además:",
    features: [
      ["WhatsApp API:", " Integra tu principal canal de ventas"],
      ["AI Assistant:", " Agente IA 24/7 para tus leads"],
      ["Advanced Marketing:", " Email & Workflows Pro"],
      ["Soporte prioritario", ""],
    ],
  },
  {
    name: "Enterprise",
    tagline: "Poder ilimitado para agencias y operaciones grandes.",
    monthly: 450, annual: 4320,
    cta: "Contactar a ventas", variant: "outline",
    featHeader: "Todo lo de Professional, y además:",
    features: [
      ["Unlimited Power:", " Embudos y seguimiento sin límites"],
      ["Web Builder:", " Constructor y alojamiento de sitios web"],
      ["API Ecosystem:", " Integración externa total"],
      ["Soporte dedicado + SLA", ""],
    ],
  },
];

function Check() {
  return (
    <span style={{ flex: "none", marginTop: 2, color: "var(--tp-success)", fontSize: 16, fontWeight: "var(--fw-bold)", lineHeight: 1 }}>✓</span>
  );
}

function Toggle({ annual, setAnnual }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 4, background: "var(--tp-slate-100)", borderRadius: "var(--radius-pill)", padding: 5 }}>
      {[["Mensual", false], ["Anual", true]].map(([label, val]) => (
        <button key={label} onClick={() => setAnnual(val)} style={{
          fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: "var(--fw-semibold)", cursor: "pointer", border: "none",
          padding: "10px 22px", borderRadius: "var(--radius-pill)", display: "inline-flex", alignItems: "center", gap: 8,
          background: annual === val ? "#fff" : "transparent",
          color: annual === val ? "var(--text-strong)" : "var(--text-muted)",
          boxShadow: annual === val ? "var(--shadow-xs)" : "none",
          transition: "all var(--dur-fast) var(--ease-out)",
        }}>
          {label}
          {val && <span style={{ fontSize: 12.5, fontWeight: "var(--fw-bold)", color: "var(--tp-azul-acento)" }}>Paga menos</span>}
        </button>
      ))}
    </div>
  );
}

function PlanCard({ plan, annual }) {
  const perMonth = annual ? Math.round(plan.annual / 12) : plan.monthly;
  const save = plan.monthly * 12 - plan.annual;
  const fmt = (n) => "$" + n.toLocaleString("en-US");
  const featured = plan.featured;
  return (
    <div style={{
      display: "flex", flexDirection: "column",
      background: featured ? "var(--tp-slate-100)" : "#fff",
      border: "1px solid " + (featured ? "var(--tp-slate-200)" : "var(--border-subtle)"),
      borderRadius: 18,
      padding: "30px 30px 34px",
    }}>
      {/* name + save badge */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
        <h3 style={{ fontSize: 26, fontWeight: "var(--fw-bold)", color: "var(--text-strong)", letterSpacing: "-0.01em" }}>{plan.name}</h3>
        <span style={{ fontSize: 12, fontWeight: "var(--fw-semibold)", color: "var(--tp-blue-700)", background: "var(--tp-blue-100)", borderRadius: 7, padding: "4px 9px", whiteSpace: "nowrap" }}>Ahorra {fmt(save)}/año</span>
      </div>

      {/* description */}
      <p style={{ fontSize: 16, lineHeight: 1.45, color: "var(--text-muted)", margin: "16px 0 0", minHeight: 46 }}>{plan.tagline}</p>

      {/* price block — horizontal */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: 14, margin: "26px 0 0" }}>
        <div style={{ display: "flex", alignItems: "flex-start", color: "var(--text-strong)" }}>
          <span style={{ fontSize: 24, fontWeight: "var(--fw-bold)", marginTop: 8 }}>$</span>
          <span style={{ fontSize: 60, fontWeight: "var(--fw-black)", letterSpacing: "-0.03em", lineHeight: 0.95 }}>{perMonth}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: 6, lineHeight: 1.35 }}>
          <span style={{ fontSize: 15, color: "var(--text-body)", fontWeight: "var(--fw-medium)" }}>por mes</span>
          <span style={{ fontSize: 14, color: "var(--text-muted)" }}>{annual ? "Facturado anual: " + fmt(plan.annual) : "Facturado mes a mes"}</span>
        </div>
      </div>

      {/* CTA above features */}
      <div style={{ margin: "26px 0 0" }}>
        <Button variant={plan.variant} size="lg" fullWidth onClick={() => window.__openModal && window.__openModal("cta")}>{plan.cta}</Button>
      </div>

      {/* features */}
      <div style={{ borderTop: "1px solid " + (featured ? "var(--tp-slate-200)" : "var(--border-subtle)"), margin: "28px 0 0", paddingTop: 24 }}>
        <div style={{ fontSize: 16, fontWeight: "var(--fw-bold)", color: "var(--text-strong)", marginBottom: 18 }}>{plan.featHeader}</div>
        <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 15 }}>
          {plan.features.map((f, i) => (
            <li key={i} style={{ display: "flex", gap: 11, alignItems: "flex-start" }}>
              <Check />
              <span style={{ fontSize: 15, lineHeight: 1.45, color: "var(--text-body)" }}>
                <b style={{ fontWeight: "var(--fw-semibold)", color: "var(--text-strong)" }}>{f[0]}</b>{f[1]}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function PriceHero() {
  const [annual, setAnnual] = React.useState(true);
  return (
    <section style={{ background: "#fff" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "56px 28px 84px" }}>
        {/* title — left aligned */}
        <h1 style={{ fontFamily: "var(--font-sans)", fontWeight: "var(--fw-black)", fontSize: "clamp(44px,6.2vw,84px)", lineHeight: 1.0, letterSpacing: "-0.035em", color: "var(--text-strong)", margin: 0 }}>
          Comienza tu prueba gratis
        </h1>
        <p style={{ fontSize: "clamp(17px,1.6vw,22px)", lineHeight: 1.4, color: "var(--text-muted)", margin: "22px 0 0", maxWidth: 720 }}>
          Prueba TodoPymes sin riesgo por 14 días. Cancela cuando quieras — hasta te lo recordamos.
        </p>

        {/* toggle row */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 20, flexWrap: "wrap", margin: "56px 0 32px" }}>
          <Toggle annual={annual} setAnnual={setAnnual} />
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 16, fontWeight: "var(--fw-semibold)", color: "var(--text-strong)" }}>Todos los precios en USD</div>
            <div style={{ fontSize: 14, color: "var(--text-muted)" }}>Impuestos aplicables se agregan al finalizar</div>
          </div>
        </div>

        {/* cards */}
        <div className="tp-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, alignItems: "start" }}>
          {PLANS.map((p) => <PlanCard key={p.name} plan={p} annual={annual} />)}
        </div>
      </div>
    </section>
  );
}
