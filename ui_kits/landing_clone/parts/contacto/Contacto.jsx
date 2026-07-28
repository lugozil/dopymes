import React from "react";

/* ============================================================
   Página de Contacto — opciones directas: correo, llamada, WhatsApp.
   ============================================================ */
const OPTIONS = [
  {
    ic: "mensajes", title: "Escríbenos por correo", value: "miguel@dopymes.com",
    href: "mailto:miguel@dopymes.com", cta: "Enviar correo", tone: "var(--tp-blue-100)",
  },
  {
    ic: "internet", title: "Llamada directa", value: "+1 786 574 3707",
    href: "tel:+17865743707", cta: "Llamar ahora", tone: "var(--tp-gris-claro)",
  },
  {
    ic: "estadistica", title: "Habla por WhatsApp", value: "+598 97 085 862",
    href: "https://wa.me/59897085862", cta: "Abrir WhatsApp", tone: "var(--tp-success-soft)",
  },
];

export function Contacto() {
  return (
    <section style={{ background: "var(--surface-page)" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "84px 28px 100px", textAlign: "center" }}>
        <span className="tp-eyebrow">Contacto</span>
        <h1 style={{ fontFamily: "var(--font-sans)", fontWeight: "var(--fw-black)", fontSize: "clamp(38px,5vw,64px)", lineHeight: 1.05, letterSpacing: "-0.03em", color: "var(--text-strong)", margin: "14px 0 0" }}>
          Hablemos de tu <span style={{ color: "var(--tp-azul-acento)" }}>negocio</span>
        </h1>
        <p style={{ fontSize: "clamp(16px,1.4vw,19px)", lineHeight: 1.55, color: "var(--text-muted)", margin: "20px auto 0", maxWidth: 560 }}>
          Elige el canal que prefieras — nuestro equipo responde rápido y sin vueltas.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 22, marginTop: 52, textAlign: "left" }}>
          {OPTIONS.map((o, i) => (
            <div key={i} style={{ background: "#fff", border: "1px solid var(--border-subtle)", borderRadius: 18, padding: "30px 26px", boxShadow: "var(--shadow-xs)", display: "flex", flexDirection: "column" }}>
              <span style={{ width: 50, height: 50, borderRadius: 14, background: o.tone, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                <img src={ICONS + o.ic + ".png"} style={{ width: 24, height: 24 }} alt="" />
              </span>
              <h3 style={{ fontSize: 18, fontWeight: "var(--fw-bold)", color: "var(--text-strong)", marginBottom: 8 }}>{o.title}</h3>
              <p style={{ fontSize: 16, fontWeight: "var(--fw-semibold)", color: "var(--tp-azul-acento)", margin: "0 0 22px" }}>{o.value}</p>
              <div style={{ marginTop: "auto" }}>
                <Button variant="secondary" size="md" fullWidth onClick={() => window.open(o.href, "_blank")}>{o.cta}</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
