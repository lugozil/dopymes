import React from "react";

/* ============================================================
   Precios · banner Sona (IA) + tabla comparativa + Add-ons + FAQ.
   ============================================================ */

/* --- Banner Sona (oscuro) --- */
export function SonaBanner() {
  return (
    <section style={{ background: "var(--surface-page)", paddingBottom: 20 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 28px" }}>
        <div style={{ background: "var(--surface-brand)", borderRadius: 22, padding: "36px 40px", display: "flex", alignItems: "center", gap: 26, flexWrap: "wrap", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", right: -40, top: -60, width: 280, height: 280, borderRadius: "50%", background: "radial-gradient(circle, rgba(12,106,249,.45), transparent 70%)" }} />
          <span style={{ width: 60, height: 60, flex: "none", borderRadius: 16, background: "rgba(255,255,255,.1)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
            <img src={ICONS + "white/configuracion.png"} style={{ width: 30, height: 30 }} alt="" />
          </span>
          <div style={{ flex: 1, minWidth: 260, position: "relative" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <h3 style={{ fontSize: 23, fontWeight: "var(--fw-bold)", color: "#fff" }}>Sona IA, incluida en todos los planes</h3>
              <span style={{ fontSize: 11, fontWeight: "var(--fw-bold)", letterSpacing: "var(--ls-caps)", textTransform: "uppercase", color: "var(--tp-blue-900)", background: "var(--tp-blue-300)", borderRadius: 999, padding: "4px 10px" }}>Nuevo</span>
            </div>
            <p style={{ fontSize: 15, color: "var(--text-on-brand-muted)", margin: "8px 0 0", maxWidth: 620, lineHeight: 1.5 }}>
              Tu agente de IA responde llamadas y mensajes 24/7, califica leads y agenda citas — para que ninguna oportunidad se quede sin atender.
            </p>
          </div>
          <div style={{ position: "relative" }}>
            <Button variant="primary" size="md">Conocer a Sona</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --- Tabla comparativa --- */
const COLS = ["Essential", "Professional", "Enterprise"];
const GROUPS = [
  {
    name: "Funciones principales",
    rows: [
      { label: "Contactos y leads", tag: "", vals: ["Ilimitados", "Ilimitados", "Ilimitados"] },
      { label: "Usuarios del equipo", vals: ["Ilimitados", "Ilimitados", "Ilimitados"] },
      { label: "Workflows de automatización", vals: ["check", "check", "check"] },
      { label: "Embudos de venta (Sales Funnels)", vals: ["Básicos", "Avanzados", "Sin límites"] },
      { label: "Conexión de redes sociales", tag: "Social Sync", vals: ["check", "check", "check"] },
      { label: "Formularios inteligentes", vals: ["check", "check", "check"] },
      { label: "Landing pages incluidas", vals: ["3", "10", "Ilimitadas"] },
    ],
  },
  {
    name: "Mensajería e IA",
    rows: [
      { label: "WhatsApp API oficial", tag: "Add-on", vals: ["—", "check", "check"] },
      { label: "AI Assistant — Agente IA 24/7", vals: ["—", "check", "check"] },
      { label: "Respuestas automáticas con IA", vals: ["—", "check", "check"] },
      { label: "Resúmenes y transcripciones IA", vals: ["—", "check", "check"] },
      { label: "Email marketing & secuencias", tag: "Advanced", vals: ["Básico", "Pro", "Pro"] },
    ],
  },
  {
    name: "Crecimiento y plataforma",
    rows: [
      { label: "Web Builder + alojamiento", vals: ["—", "—", "check"] },
      { label: "Seguimiento y embudos sin límites", vals: ["—", "—", "check"] },
      { label: "API Ecosystem — integración externa", vals: ["—", "Parcial", "Total"] },
      { label: "Analíticas y reportes", vals: ["Básicas", "Avanzadas", "Avanzadas"] },
      { label: "Soporte", vals: ["Email", "Prioritario", "Dedicado + SLA"] },
    ],
  },
];

function Cell({ v }) {
  if (v === "check") return <span style={{ color: "var(--tp-success)", fontSize: 19, fontWeight: "var(--fw-bold)" }}>✓</span>;
  if (v === "—") return <span style={{ color: "var(--tp-slate-300)", fontSize: 18 }}>—</span>;
  return <span style={{ fontSize: 14.5, fontWeight: "var(--fw-semibold)", color: "var(--text-strong)" }}>{v}</span>;
}

export function CompareTable() {
  return (
    <section style={{ background: "#fff" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "84px 28px" }}>
        <h2 style={{ textAlign: "center", fontSize: "clamp(28px,3.4vw,46px)", fontWeight: "var(--fw-black)", letterSpacing: "-0.02em", color: "var(--text-strong)", marginBottom: 8 }}>Compara los planes</h2>
        <p style={{ textAlign: "center", fontSize: 16, color: "var(--text-muted)", marginBottom: 40 }}>Todo lo que incluye cada plan, en detalle.</p>

        {/* sticky-ish header */}
        <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 1fr", alignItems: "end", gap: 12, padding: "16px 16px", borderBottom: "2px solid var(--border-default)", position: "sticky", top: 64, background: "#fff", zIndex: 5 }}>
          <span style={{ fontSize: 15, fontWeight: "var(--fw-bold)", color: "var(--text-strong)" }}>Funciones</span>
          {COLS.map((c, i) => (
            <span key={c} style={{ textAlign: "center", fontSize: 16, fontWeight: "var(--fw-bold)", color: i === 1 ? "var(--tp-azul-acento)" : "var(--text-strong)" }}>{c}</span>
          ))}
        </div>

        {GROUPS.map((g) => (
          <div key={g.name}>
            <div style={{ padding: "26px 16px 12px", fontSize: 13, fontWeight: "var(--fw-bold)", letterSpacing: "var(--ls-caps)", textTransform: "uppercase", color: "var(--tp-azul-acento)" }}>{g.name}</div>
            {g.rows.map((r, ri) => (
              <div key={ri} style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 1fr", alignItems: "center", gap: 12, padding: "15px 16px", borderTop: "1px solid var(--border-subtle)", background: ri % 2 ? "var(--tp-slate-50)" : "#fff" }}>
                <span style={{ display: "flex", alignItems: "center", gap: 9, fontSize: 15, color: "var(--text-body)" }}>
                  {r.label}
                  {r.tag && <span style={{ fontSize: 11, fontWeight: "var(--fw-semibold)", color: "var(--tp-blue-700)", background: "var(--tp-blue-100)", borderRadius: 6, padding: "2px 8px", whiteSpace: "nowrap" }}>{r.tag}</span>}
                </span>
                {r.vals.map((v, vi) => (
                  <span key={vi} style={{ textAlign: "center" }}><Cell v={v} /></span>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

/* --- Add-ons --- */
export function AddOns() {
  const items = [
    { ic: "mensajes", t: "Números adicionales", p: "$5 /mes c/u", b: "Suma líneas para nuevas zonas o equipos, con código de área local." },
    { ic: "internet", t: "WhatsApp API oficial", p: "Desde $19 /mes", b: "Activa tu canal principal de ventas con la API verificada de WhatsApp Business." },
    { ic: "configuracion", t: "Créditos extra de IA", p: "Desde $29 /mes", b: "Amplía las conversaciones y minutos que maneja Sona IA por tu cuenta." },
  ];
  return (
    <section style={{ background: "var(--surface-page)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "84px 28px" }}>
        <h2 style={{ fontSize: "clamp(26px,3vw,42px)", fontWeight: "var(--fw-black)", letterSpacing: "-0.02em", color: "var(--text-strong)", marginBottom: 8 }}>Complementos</h2>
        <p style={{ fontSize: 16, color: "var(--text-muted)", marginBottom: 36 }}>Potencia cualquier plan con lo que tu negocio necesite.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 22 }}>
          {items.map((a, i) => (
            <div key={i} style={{ background: "#fff", border: "1px solid var(--border-subtle)", borderRadius: 18, padding: "26px 26px 28px", boxShadow: "var(--shadow-xs)" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
                <span style={{ width: 46, height: 46, borderRadius: 12, background: "var(--surface-icon)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src={ICONS + a.ic + ".png"} style={{ width: 24, height: 24 }} alt="" />
                </span>
                <span style={{ fontSize: 15, fontWeight: "var(--fw-bold)", color: "var(--tp-azul-acento)", whiteSpace: "nowrap" }}>{a.p}</span>
              </div>
              <h3 style={{ fontSize: 18, fontWeight: "var(--fw-bold)", color: "var(--text-strong)", marginBottom: 8 }}>{a.t}</h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.55, color: "var(--text-muted)", margin: 0 }}>{a.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --- FAQ acordeón --- */
const FAQS = [
  ["¿Puedo cambiar de plan cuando quiera?", "Sí. Puedes subir o bajar de plan en cualquier momento desde tu panel; el ajuste se prorratea automáticamente y no hay penalizaciones."],
  ["¿Qué pasa al terminar la prueba de 14 días?", "Te avisamos antes de que termine. Si decides continuar, eliges un plan; si no, tu cuenta pasa a modo limitado sin cargos sorpresa."],
  ["¿El precio anual realmente ahorra 20%?", "Sí. Al pagar anual obtienes dos meses gratis respecto al pago mensual — el descuento ya está reflejado en el precio que ves."],
  ["¿La WhatsApp API tiene costo aparte?", "La integración está incluida desde el plan Professional. Los costos de conversación que cobra Meta se facturan según tu volumen y son transparentes."],
  ["¿Necesito conocimientos técnicos para empezar?", "No. TodoPymes está pensado para dueños de negocio: configuras tus flujos en minutos y nuestro equipo te acompaña durante la migración."],
  ["¿Ofrecen factura y soporte en mi país?", "Sí. Facturamos en toda Latinoamérica y el Caribe y damos soporte en español, con atención prioritaria en los planes Professional y Enterprise."],
];

function FaqItem({ q, a, open, onClick }) {
  return (
    <div style={{ borderBottom: "1px solid var(--border-subtle)" }}>
      <button onClick={onClick} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, padding: "22px 4px", background: "transparent", border: "none", cursor: "pointer", textAlign: "left" }}>
        <span style={{ fontSize: 17, fontWeight: "var(--fw-semibold)", color: "var(--text-strong)" }}>{q}</span>
        <span style={{ width: 30, height: 30, flex: "none", borderRadius: "50%", background: open ? "var(--tp-azul-acento)" : "var(--tp-slate-100)", color: open ? "#fff" : "var(--text-strong)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, transition: "all var(--dur-fast) var(--ease-out)" }}>{open ? "−" : "+"}</span>
      </button>
      <div style={{ maxHeight: open ? 200 : 0, overflow: "hidden", transition: "max-height var(--dur-base) var(--ease-out)" }}>
        <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--text-muted)", margin: "0 4px 22px", maxWidth: 720 }}>{a}</p>
      </div>
    </div>
  );
}

export function Faq() {
  const [open, setOpen] = React.useState(0);
  return (
    <section style={{ background: "#fff" }}>
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "84px 28px" }}>
        <h2 style={{ textAlign: "center", fontSize: "clamp(28px,3.4vw,46px)", fontWeight: "var(--fw-black)", letterSpacing: "-0.02em", color: "var(--text-strong)", marginBottom: 40 }}>Preguntas frecuentes</h2>
        <div>
          {FAQS.map(([q, a], i) => (
            <FaqItem key={i} q={q} a={a} open={open === i} onClick={() => setOpen(open === i ? -1 : i)} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* --- Switch from any provider (banda azul claro) --- */
export function SwitchFree() {
  const cards = [
    { ic: "internet", t: "Guía paso a paso", b: "Tiempos claros, actualizaciones en tiempo real y soporte cuando lo necesites." },
    { ic: "equipo", t: "Soporte prioritario en el cambio", b: "Resolvemos todas tus dudas rápido, acompañándote durante la migración." },
    { ic: "nube", t: "Sigue disponible todo el tiempo", b: "La mayoría de clientes no experimenta ninguna interrupción del servicio." },
  ];
  return (
    <section style={{ background: "var(--tp-blue-50)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "84px 28px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20, flexWrap: "wrap", marginBottom: 40 }}>
          <h2 style={{ fontSize: "clamp(28px,3.4vw,46px)", fontWeight: "var(--fw-black)", letterSpacing: "-0.02em", color: "var(--text-strong)", margin: 0, maxWidth: 560 }}>Cámbiate desde cualquier proveedor, gratis</h2>
          <div style={{ display: "flex", gap: 12 }}>
            <Button variant="outline" size="md">Pruébalo gratis</Button>
            <Button variant="secondary" size="md">Migra tu número</Button>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 22 }}>
          {cards.map((c, i) => (
            <div key={i} style={{ background: "rgba(255,255,255,.7)", border: "1px solid var(--tp-blue-200)", borderRadius: 18, padding: "26px 26px 28px" }}>
              <span style={{ width: 46, height: 46, borderRadius: 12, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18, boxShadow: "var(--shadow-xs)" }}>
                <img src={ICONS + c.ic + ".png"} style={{ width: 24, height: 24 }} alt="" />
              </span>
              <h3 style={{ fontSize: 19, fontWeight: "var(--fw-bold)", color: "var(--text-strong)", marginBottom: 8 }}>{c.t}</h3>
              <p style={{ fontSize: 15, lineHeight: 1.55, color: "var(--text-muted)", margin: 0 }}>{c.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
