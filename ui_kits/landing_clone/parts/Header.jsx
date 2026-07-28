import React from "react";

/* ============================================================
   Nav + Hero — clon estructural de Quo con identidad TodoPymes.
   Usa los primitivos del DS (Button, Badge) que viven en el mismo
   scope compuesto, y las globales ICONS / LOGOS.
   ============================================================ */

function Star() {
  return (
    <span style={{ width: 22, height: 22, borderRadius: "50%", background: "var(--tp-azul-acento)", color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 12 }}>★</span>
  );
}

function NavBarLocal() { return null; }

/* The product preview that sits on the blue panel (mirrors Quo's inbox). */
function AppPreview() {
  const chats = [
    { n: "Comercial Andina", m: "¡Perfecto, gracias!", t: "9:41", a: "brand", unread: false },
    { n: "Mario · TechSol", m: "Mario: Suena bien", t: "Ayer", a: "slate", unread: false },
    { n: "Sofía Castro", m: "↗ Llamada perdida", t: "Jul 7", a: "brand", unread: true },
    { n: "Diego Pérez", m: "¡Genial! Te aviso si…", t: "Jul 5", a: "slate", unread: false },
    { n: "(365) 654-3233", m: "Nuevo lead desde Landing", t: "Jul 5", a: "slate", unread: false },
  ];
  return (
    <div style={{ background: "#fff", borderRadius: 16, boxShadow: "0 30px 70px rgba(0,36,63,.35)", overflow: "hidden", display: "grid", gridTemplateColumns: "188px 232px 1fr", width: "min(880px, 92%)", height: 392, border: "1px solid rgba(255,255,255,.6)" }}>
      {/* rail */}
      <div style={{ background: "var(--surface-brand)", padding: "16px 12px", display: "flex", flexDirection: "column", gap: 4 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "2px 6px 14px" }}>
          <img src={LOGOS + "icono-white.png"} style={{ width: 22, height: 22 }} alt="" />
          <span style={{ color: "#fff", fontWeight: "var(--fw-bold)", fontSize: 14 }}>TodoPymes</span>
        </div>
        {[["estadistica", "Panel"], ["usuario", "Leads"], ["mensajes", "Mensajes"], ["calendario", "Agenda"], ["analisis", "Analíticas"]].map((it, i) => (
          <div key={it[0]} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 8px", borderRadius: 8, background: i === 2 ? "rgba(255,255,255,.14)" : "transparent" }}>
            <img src={ICONS + "white/" + it[0] + ".png"} style={{ width: 15, height: 15, opacity: i === 2 ? 1 : 0.7 }} alt="" />
            <span style={{ color: i === 2 ? "#fff" : "var(--text-on-brand-muted)", fontSize: 12.5, fontWeight: i === 2 ? "var(--fw-semibold)" : "var(--fw-medium)" }}>{it[1]}</span>
          </div>
        ))}
        <div style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: 7, padding: "8px", background: "rgba(255,255,255,.07)", borderRadius: 8 }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--tp-success)" }} />
          <span style={{ color: "#fff", fontSize: 11, fontWeight: "var(--fw-semibold)" }}>Activo 24/7</span>
        </div>
      </div>
      {/* chat list */}
      <div style={{ borderRight: "1px solid var(--border-subtle)", display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", gap: 6, padding: "12px 12px 8px" }}>
          {["Abiertos", "Sin leer", "Sin responder"].map((f, i) => (
            <span key={f} style={{ fontSize: 10.5, fontWeight: "var(--fw-semibold)", padding: "4px 8px", borderRadius: 999, background: i === 0 ? "var(--tp-blue-100)" : "transparent", color: i === 0 ? "var(--tp-blue-700)" : "var(--text-muted)" }}>{f}</span>
          ))}
        </div>
        {chats.map((c, i) => (
          <div key={i} style={{ display: "flex", gap: 9, alignItems: "center", padding: "9px 12px", background: i === 0 ? "var(--tp-slate-50)" : "transparent" }}>
            <Avatar name={c.n} tone={c.a} size={30} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 6 }}>
                <span style={{ fontSize: 12, fontWeight: "var(--fw-semibold)", color: "var(--text-strong)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{c.n}</span>
                <span style={{ fontSize: 10, color: "var(--text-muted)", flex: "none" }}>{c.t}</span>
              </div>
              <div style={{ fontSize: 11, color: c.unread ? "var(--text-strong)" : "var(--text-muted)", fontWeight: c.unread ? "var(--fw-semibold)" : "var(--fw-regular)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{c.m}</div>
            </div>
            {c.unread && <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--tp-azul-acento)", flex: "none" }} />}
          </div>
        ))}
      </div>
      {/* conversation */}
      <div style={{ display: "flex", flexDirection: "column", background: "var(--tp-slate-50)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 9, padding: "11px 14px", background: "#fff", borderBottom: "1px solid var(--border-subtle)" }}>
          <Avatar name="Sofía Castro" size={28} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 12.5, fontWeight: "var(--fw-semibold)", color: "var(--text-strong)" }}>Sofía Castro</div>
            <div style={{ fontSize: 10.5, color: "var(--text-muted)" }}>(410) 793-4326</div>
          </div>
          <img src={ICONS + "mensajes.png"} style={{ width: 16, height: 16, opacity: .6 }} alt="" />
          <img src={ICONS + "calendario.png"} style={{ width: 16, height: 16, opacity: .6 }} alt="" />
        </div>
        <div style={{ flex: 1, padding: "16px 14px", display: "flex", flexDirection: "column", gap: 10, justifyContent: "flex-end" }}>
          <div style={{ alignSelf: "center", fontSize: 10, color: "var(--text-muted)" }}>Hoy, 9:36</div>
          <div style={{ alignSelf: "flex-start", maxWidth: "78%", background: "#fff", border: "1px solid var(--border-subtle)", borderRadius: 14, borderBottomLeftRadius: 4, padding: "9px 12px", fontSize: 12.5, color: "var(--text-body)" }}>Hola, ¿me pueden enviar la cotización?</div>
          <div style={{ alignSelf: "flex-end", maxWidth: "80%", background: "var(--tp-azul-acento)", color: "#fff", borderRadius: 14, borderBottomRightRadius: 4, padding: "9px 12px", fontSize: 12.5 }}>¡Claro Sofía! Te la envío ahora mismo por aquí.</div>
          <div style={{ alignSelf: "flex-start", display: "flex", alignItems: "center", gap: 8, background: "var(--tp-success-soft)", borderRadius: 12, padding: "8px 11px" }}>
            <span style={{ width: 24, height: 24, borderRadius: "50%", background: "var(--tp-success)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12 }}>✓</span>
            <span style={{ fontSize: 11.5, fontWeight: "var(--fw-semibold)", color: "#0f7a37" }}>Sona IA respondió · 1:30</span>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, margin: "0 14px 14px", background: "#fff", border: "1px solid var(--border-default)", borderRadius: 12, padding: "9px 12px" }}>
          <span style={{ fontSize: 12, color: "var(--text-muted)", flex: 1 }}>Escribe un mensaje…</span>
          <span style={{ width: 26, height: 26, borderRadius: 8, background: "var(--tp-azul-acento)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13 }}>➤</span>
        </div>
      </div>
    </div>
  );
}

function Callout({ children, style }) {
  return (
    <div style={{ position: "absolute", background: "var(--surface-brand)", color: "#fff", fontSize: 13, fontWeight: "var(--fw-semibold)", lineHeight: 1.35, padding: "12px 15px", borderRadius: 12, maxWidth: 210, boxShadow: "0 12px 30px rgba(0,36,63,.4)", zIndex: 3, ...style }}>{children}</div>
  );
}

export function Header() {
  return (
    <>
      <NavBar active="" />
      <section style={{ background: "#fff", textAlign: "center", padding: "62px 28px 0" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 9, fontSize: 15 }}>
          <Star />
          <span style={{ fontWeight: "var(--fw-bold)", color: "var(--text-strong)", whiteSpace: "nowrap" }}>4.8 estrellas</span>
          <span style={{ color: "var(--border-strong)" }}>|</span>
          <span style={{ color: "var(--text-muted)", whiteSpace: "nowrap" }}>3,000+ reseñas</span>
        </div>
        <h1 style={{ fontFamily: "var(--font-sans)", fontWeight: "var(--fw-black)", fontSize: "clamp(34px, 5vw, 66px)", lineHeight: 1.08, letterSpacing: "-0.03em", color: "var(--text-strong)", maxWidth: 1080, margin: "26px auto 0" }}>
          Nunca más pierdas un lead<br />por no responder a tiempo
        </h1>
        <p style={{ fontSize: "clamp(16px, 1.5vw, 20px)", lineHeight: 1.5, color: "var(--text-muted)", maxWidth: 720, margin: "24px auto 0" }}>
          TodoPymes es el centro de mando todo-en-uno que reúne Landings, WhatsApp, CRM y agenda en un solo lugar — para que tu negocio venda solo, incluso fuera de horario.
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", marginTop: 32 }}>
          <Button variant="primary" size="lg" onClick={() => window.__openModal && window.__openModal("cta")}>Pruébalo gratis</Button>
          <Button variant="outline" size="lg" iconLeft={<span style={{ fontSize: 12 }}>▶</span>} onClick={() => window.__openModal && window.__openModal("video")}>Ver cómo funciona</Button>
        </div>
        <p style={{ fontSize: 14, color: "var(--text-muted)", marginTop: 26 }}>
          Disponible en <b style={{ color: "var(--text-strong)" }}>iOS, Android, Web</b> y <b style={{ color: "var(--text-strong)" }}>WhatsApp API</b>
        </p>

        {/* blue product panel */}
        <div style={{ position: "relative", marginTop: 48 }}>
          <div style={{ background: "linear-gradient(160deg, var(--tp-blue-400), var(--tp-azul-acento))", borderTopLeftRadius: 22, borderTopRightRadius: 22, padding: "70px 0 0", display: "flex", justifyContent: "center", minHeight: 300, overflow: "hidden", maxWidth: 1240, margin: "0 auto" }}>
            <AppPreview />
            <Callout style={{ left: "3%", bottom: 70, textAlign: "left" }}>Consigue un número nuevo o usa el que ya tienes</Callout>
            <Callout style={{ left: "5%", top: 30, textAlign: "left" }}>Invita a tu equipo</Callout>
            <Callout style={{ right: "3%", top: 70, textAlign: "left" }}>Recibe llamadas y mensajes en todos tus dispositivos</Callout>
          </div>
        </div>
      </section>
    </>
  );
}
