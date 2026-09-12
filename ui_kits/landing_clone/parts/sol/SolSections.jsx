import React from "react";

/* ============================================================
   Solutions · bloques de contenido (réplica de Quo).
   ============================================================ */

/* --- Tira oscura de 3 beneficios bajo el hero --- */
export function SolDarkCards() {
  const cards = [
    { ic: "estadistica", t: "Cada llamada perdida es el próximo trabajo de tu competencia", b: "Una sola llamada perdida puede costar entre $200 y $20,000 según el trabajo. TodoPymes asegura que tu equipo responda primero." },
    { ic: "configuracion", t: "Configuración fácil para equipos ocupados", b: "Consigue tu número de empresa en minutos. Activa a tu oficina y equipo de campo rápido. Sin configuraciones complejas." },
    { ic: "internet", t: "Hecho para crecer contigo", b: "Suma miembros en segundos, abre números para nuevas zonas y conserva cada conversación si alguien se va. Sin contratos." },
  ];
  return (
    <section style={{ background: "var(--tp-blue-950)", padding: "70px 28px" }}>
      <div className="tp-grid-3" style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 22 }}>
        {cards.map((c, i) => (
          <div key={i} style={{ background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 16, padding: "26px 26px 30px" }}>
            <span style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(12,106,249,.16)", border: "1px solid rgba(12,106,249,.3)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
              <img src={ICONS + "white/" + c.ic + ".png"} style={{ width: 20, height: 20 }} alt="" />
            </span>
            <h3 style={{ fontSize: 19, fontWeight: "var(--fw-bold)", color: "#fff", lineHeight: 1.2, marginBottom: 10 }}>{c.t}</h3>
            <p style={{ fontSize: 14.5, lineHeight: 1.55, color: "rgba(255,255,255,.6)", margin: 0 }}>{c.b}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* --- Triplete de feature cards (icono + título + body) --- */
function FeatureTriplet({ items }) {
  return (
    <div className="tp-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 22, marginTop: 56 }}>
      {items.map((it, i) => (
        <div key={i} style={{ border: "1px solid var(--border-subtle)", borderRadius: 16, padding: "22px 24px 26px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <img src={ICONS + it.ic + ".png"} style={{ width: 20, height: 20 }} alt="" />
            <span style={{ fontSize: 16.5, fontWeight: "var(--fw-bold)", color: "var(--text-strong)" }}>{it.t}</span>
          </div>
          <p style={{ fontSize: 14.5, lineHeight: 1.55, color: "var(--text-muted)", margin: 0 }}>{it.b}</p>
        </div>
      ))}
    </div>
  );
}

/* --- Sección genérica: texto + panel mockup + triplete --- */
export function SolSection({ title, accent, body, textSide = "left", panel, items, bg = "#fff" }) {
  const text = (
    <div>
      <h2 style={{ fontSize: "clamp(28px,3.4vw,46px)", fontWeight: "var(--fw-black)", letterSpacing: "-0.02em", lineHeight: 1.08, color: "var(--text-strong)", margin: 0 }}>
        {title} {accent && <span style={{ color: "var(--tp-azul-acento)" }}>{accent}</span>}
      </h2>
      <p style={{ fontSize: "clamp(15px,1.3vw,18px)", lineHeight: 1.55, color: "var(--text-muted)", margin: "18px 0 0", maxWidth: 440 }}>{body}</p>
    </div>
  );
  return (
    <section style={{ background: bg }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "84px 28px" }}>
        <div className="tp-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
          {textSide === "left" ? <>{text}{panel}</> : <>{panel}{text}</>}
        </div>
        <FeatureTriplet items={items} />
      </div>
    </section>
  );
}

/* ---------------- Mockups por sección ---------------- */

/* Panel azul con chat (Responde a cada oportunidad) */
export function PanelChat() {
  return (
    <div style={{ background: "linear-gradient(150deg, var(--tp-azul-acento), var(--tp-blue-700))", borderRadius: 22, padding: 26, minHeight: 380, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ background: "#fff", borderRadius: 18, boxShadow: "var(--shadow-xl)", padding: 18, width: "100%", maxWidth: 360, display: "flex", flexDirection: "column", gap: 12 }}>
        <div style={{ alignSelf: "flex-start", maxWidth: "85%", display: "flex", gap: 8, alignItems: "flex-end" }}>
          <Avatar name="Jennifer" tone="slate" size={26} />
          <div style={{ background: "var(--tp-slate-100)", borderRadius: 14, borderBottomLeftRadius: 4, padding: "9px 12px", fontSize: 13, color: "var(--text-body)" }}>Hola, ¿tienen disponibilidad hoy? Es urgente.</div>
        </div>
        <div style={{ alignSelf: "flex-end", maxWidth: "88%", display: "flex", gap: 8, alignItems: "flex-end" }}>
          <div style={{ background: "var(--tp-azul-acento)", color: "#fff", borderRadius: 14, borderBottomRightRadius: 4, padding: "9px 12px", fontSize: 13 }}>¡Buenos días, Jennifer! Estamos abiertos y tenemos espacio hoy. ¿Qué hora te conviene?</div>
          <Avatar name="Ana R" size={26} />
        </div>
        <div style={{ alignSelf: "flex-start", display: "flex", gap: 8, alignItems: "flex-end" }}>
          <Avatar name="Jennifer" tone="slate" size={26} />
          <div style={{ background: "var(--tp-slate-100)", borderRadius: 14, borderBottomLeftRadius: 4, padding: "9px 12px", fontSize: 13, color: "var(--text-body)" }}>¡Perfecto! Nos vemos a las 10 AM.</div>
        </div>
        <div style={{ alignSelf: "center", display: "flex", alignItems: "center", gap: 8, background: "var(--tp-success-soft)", borderRadius: 999, padding: "7px 14px" }}>
          <span style={{ width: 18, height: 18, borderRadius: "50%", background: "var(--tp-success)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11 }}>✓</span>
          <span style={{ fontSize: 12, fontWeight: "var(--fw-semibold)", color: "#0f7a37" }}>Cita agendada · hoy, 10:00 AM</span>
        </div>
        <div style={{ alignSelf: "stretch", display: "flex", alignItems: "center", gap: 9, background: "var(--tp-blue-50)", border: "1px dashed var(--tp-blue-200)", borderRadius: 12, padding: "9px 12px" }}>
          <span style={{ width: 22, height: 22, flex: "none", borderRadius: "50%", background: "var(--tp-azul-acento)", display: "flex", alignItems: "center", justifyContent: "center" }}><img src={ICONS + "agenda.png"} style={{ width: 12, height: 12 }} alt="" /></span>
          <span style={{ fontSize: 12, color: "var(--tp-blue-700)" }}><b style={{ fontWeight: "var(--fw-bold)" }}>Recordatorio interno:</b> confirmar equipo disponible a las 9:45 AM.</span>
        </div>
      </div>
    </div>
  );
}

/* Panel azul con notas internas (Mantén a todos en la misma página) */
export function PanelNotes() {
  return (
    <div style={{ background: "linear-gradient(150deg, var(--tp-blue-400), var(--tp-azul-acento))", borderRadius: 22, padding: 26, minHeight: 400, display: "flex", flexDirection: "column", justifyContent: "center", gap: 16 }}>
      <div style={{ alignSelf: "flex-start", maxWidth: "82%", display: "flex", gap: 8 }}>
        <Avatar name="Carlos M" tone="slate" size={28} />
        <div style={{ background: "rgba(255,255,255,.22)", color: "#fff", borderRadius: 14, borderBottomLeftRadius: 4, padding: "10px 13px", fontSize: 13, lineHeight: 1.4 }}>Gracias por avisar de la filtración. Vi una mancha formándose en el techo pero no sabía que estaba relacionada.</div>
      </div>
      <div style={{ background: "#fff", borderRadius: 16, boxShadow: "var(--shadow-lg)", padding: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
          <span style={{ fontSize: 12.5, fontWeight: "var(--fw-bold)", color: "var(--text-strong)" }}>2 comentarios</span>
          <span style={{ fontSize: 11, color: "var(--text-muted)" }}>Hoy, 2:08 PM</span>
        </div>
        <div style={{ display: "flex", gap: 9, marginBottom: 10 }}>
          <Avatar name="Gabriel M" size={24} />
          <div style={{ background: "var(--tp-blue-50)", borderRadius: 10, padding: "8px 11px", fontSize: 12.5, color: "var(--text-body)" }}><b style={{ color: "var(--tp-azul-acento)" }}>@Gabriel Morales</b> encontró daño temprano cerca de la ventilación.</div>
        </div>
        <div style={{ display: "flex", gap: 9, marginBottom: 12 }}>
          <Avatar name="Rosa T" size={24} />
          <div style={{ background: "var(--tp-warning-soft)", borderRadius: 10, padding: "8px 11px", fontSize: 12.5, color: "var(--text-body)" }}>Buen ojo. Lo anoto en la orden y llamo al cliente para explicarle.</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, background: "var(--tp-slate-100)", borderRadius: 10, padding: "9px 12px" }}>
          <span style={{ fontSize: 12, color: "var(--text-muted)", flex: 1 }}>Responder internamente…</span>
          <span style={{ width: 24, height: 24, borderRadius: "50%", background: "var(--tp-azul-acento)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12 }}>↑</span>
        </div>
      </div>
      <div style={{ alignSelf: "flex-end", display: "flex", alignItems: "center", gap: 11, background: "#fff", borderRadius: 14, padding: "11px 14px", boxShadow: "var(--shadow-md)" }}>
        <span style={{ width: 30, height: 30, borderRadius: "50%", background: "var(--tp-success)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13 }}>♪</span>
        <div style={{ lineHeight: 1.25 }}><div style={{ fontSize: 13, fontWeight: "var(--fw-bold)", color: "var(--text-strong)", whiteSpace: "nowrap" }}>Llamada en curso…</div><div style={{ fontSize: 11.5, color: "var(--text-muted)", whiteSpace: "nowrap" }}>Jacob contestó</div></div>
      </div>
    </div>
  );
}

/* Panel navy con árbol de flujo (Las llamadas se contestan) */
export function PanelFlow() {
  const node = (icon, title, sub) => (
    <div style={{ background: "#fff", borderRadius: 12, padding: "12px 14px", boxShadow: "var(--shadow-md)", minWidth: 178 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <img src={ICONS + icon + ".png"} style={{ width: 16, height: 16 }} alt="" />
        <span style={{ fontSize: 13.5, fontWeight: "var(--fw-bold)", color: "var(--text-strong)", whiteSpace: "nowrap" }}>{title}</span>
      </div>
      <div style={{ fontSize: 11.5, color: "var(--text-muted)", marginTop: 4, whiteSpace: "nowrap" }}>{sub}</div>
    </div>
  );
  const tag = (t) => <span style={{ fontSize: 10.5, fontWeight: "var(--fw-semibold)", color: "#fff", background: "var(--tp-azul-acento)", borderRadius: 999, padding: "3px 10px" }}>{t}</span>;
  return (
    <div style={{ background: "var(--tp-azul-profundo)", borderRadius: 22, padding: "34px 26px", minHeight: 360, display: "flex", flexDirection: "column", alignItems: "center", gap: 14, overflow: "hidden" }}>
      <div style={{ display: "flex", gap: 60, flexWrap: "wrap", justifyContent: "center" }}>{tag("Marca 1")}{tag("Marca 2")}</div>
      <div style={{ display: "flex", gap: 26, alignItems: "flex-start", flexWrap: "wrap", justifyContent: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
          {node("usuario", "Suena al equipo", "David K., 30s")}
          {tag("Si nadie contesta")}
          {node("configuracion", "Sona IA", "Deja que Sona conteste")}
        </div>
        {node("mensajes", "Reenviar", "A la oficina")}
      </div>
    </div>
  );
}

/* Panel azul-corporativo con insights de llamadas (Decisiones más inteligentes) */
export function PanelInsights() {
  return (
    <div style={{ background: "var(--tp-azul-corporativo)", borderRadius: 22, padding: 28, minHeight: 360, position: "relative", display: "flex", alignItems: "center" }}>
      <div style={{ background: "#fff", borderRadius: 14, boxShadow: "var(--shadow-lg)", padding: "14px 16px", width: 280 }}>
        <div style={{ fontSize: 13, color: "var(--text-strong)" }}><b>Sonó a todos</b> <span style={{ color: "var(--text-muted)" }}>por 30 segundos</span></div>
        {[["Amy Smith", "Fuera de horario"], ["Merritt Cooper", "Rechazó la llamada"], ["David Kumar", "Contestó la llamada"]].map((r, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 12 }}>
            <Avatar name={r[0]} tone={i === 2 ? "brand" : "slate"} size={28} />
            <div><div style={{ fontSize: 13, fontWeight: "var(--fw-semibold)", color: "var(--text-strong)", whiteSpace: "nowrap" }}>{r[0]}</div><div style={{ fontSize: 11.5, color: "var(--text-muted)", whiteSpace: "nowrap" }}>{r[1]}</div></div>
          </div>
        ))}
      </div>
      <div style={{ position: "absolute", right: 30, bottom: 34, background: "#fff", borderRadius: 14, boxShadow: "var(--shadow-xl)", padding: 16, width: 220 }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 12 }}><span style={{ fontSize: 14, fontWeight: "var(--fw-bold)", color: "var(--text-strong)" }}>Llamadas</span><span style={{ fontSize: 13, color: "var(--text-muted)" }}>1,437</span></div>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 12, height: 86 }}>
          {[[52, "var(--tp-blue-300)"], [80, "var(--tp-azul-acento)"], [64, "var(--tp-blue-400)"]].map((b, i) => (
            <div key={i} style={{ flex: 1, height: b[0] + "%", background: b[1], borderRadius: "7px 7px 0 0" }} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* --- Testimonial (claro, una sola historia) --- */
export function SolStory() {
  return (
    <section style={{ background: "#fff" }}>
      <div className="tp-grid-2" style={{ maxWidth: 1240, margin: "0 auto", padding: "20px 28px 84px", display: "grid", gridTemplateColumns: "0.85fr 1.15fr", gap: 48, alignItems: "center" }}>
        <div>
          <p style={{ fontSize: "clamp(22px,2vw,30px)", fontWeight: "var(--fw-bold)", lineHeight: 1.3, letterSpacing: "-0.01em", color: "var(--text-strong)", margin: 0 }}>
            "Estamos tan seguros que lo decimos: súbete a TodoPymes. Ahórrate el tiempo, ahórrate el dolor de cabeza."
          </p>
          <div style={{ margin: "20px 0 0", fontSize: 15, color: "var(--text-muted)" }}><b style={{ color: "var(--text-strong)" }}>Carolina Méndez</b> · Co-Fundadora @ Glamour Spa</div>
          <div style={{ marginTop: 24 }}><Button variant="secondary" size="md" onClick={() => window.openWA("Hola, quiero conocer la historia de Glamour Spa con TodoPymes.")}>Leer la historia de Glamour Spa →</Button></div>
        </div>
        <div style={{ position: "relative", borderRadius: 16, overflow: "hidden" }}>
          <image-slot id="tp-sol-video" src="ilustraciones/home.png" shape="rounded" radius="16" fit="contain" placeholder="Suelta la imagen del caso de éxito" style={{ display: "block", width: "100%", height: 360 }}></image-slot>
        </div>
      </div>
    </section>
  );
}

/* --- Testimonios (sección oscura, 3 cards) --- */
export function SolTestimonials() {
  const t = [
    { n: "Jon Christensen", r: "Co-fundador @ Bidmii", q: "Batallábamos para captar las comunicaciones fuera de horario y perdíamos oportunidades. Ahora tenemos la certeza de que cada llamada entrante se atiende rápido." },
    { n: "Brent Colquitt", r: "Dueño, OC Tasker", q: "Con las grabaciones y transcripciones solo decimos 'cuéntame dónde vives y tu correo'. Lo registra todo para consultarlo después. Es fantástico." },
    { n: "Viktoria Olskaia", r: "Dueña, Classmaids", q: "Migrar mis dos números fue facilísimo. Aprecio la interfaz directa de TodoPymes y toda la ayuda que recibí para configurar el servicio." },
  ];
  return (
    <section style={{ background: "var(--tp-blue-950)", padding: "84px 28px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: "clamp(26px,3vw,40px)", fontWeight: "var(--fw-black)", letterSpacing: "-0.02em", color: "#fff", marginBottom: 44 }}>Con la confianza de equipos de servicios a domicilio</h2>
        <div className="tp-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 22 }}>
          {t.map((c, i) => (
            <div key={i} style={{ background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 16, padding: 26 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, paddingBottom: 18, borderBottom: "1px solid rgba(255,255,255,.1)" }}>
                <Avatar name={c.n} size={42} />
                <div><div style={{ fontSize: 15, fontWeight: "var(--fw-bold)", color: "#fff" }}>{c.n}</div><div style={{ fontSize: 13, color: "rgba(255,255,255,.55)" }}>{c.r}</div></div>
              </div>
              <p style={{ fontSize: 15, lineHeight: 1.55, color: "rgba(255,255,255,.82)", margin: "18px 0 0" }}>{c.q}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --- Herramientas / integraciones --- */
export function SolTools() {
  const tiles = ["mensajes", "nube", "calendario", "usuario", "analisis", "internet", "estadistica"];
  return (
    <section style={{ background: "#fff" }}>
      <div className="tp-grid-2" style={{ maxWidth: 1240, margin: "0 auto", padding: "84px 28px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
        <div>
          <h2 style={{ fontSize: "clamp(28px,3.4vw,46px)", fontWeight: "var(--fw-black)", letterSpacing: "-0.02em", lineHeight: 1.08, color: "var(--text-strong)", margin: 0 }}>TodoPymes mejora tus otras herramientas</h2>
          <p style={{ fontSize: "clamp(15px,1.3vw,18px)", lineHeight: 1.55, color: "var(--text-muted)", margin: "18px 0 0", maxWidth: 440 }}>
            Cuando TodoPymes se conecta a tu CRM y herramientas de gestión, cada llamada, mensaje y nota de voz se registra automáticamente. Tu equipo copia menos notas entre sistemas y cierra más trabajos.
          </p>
          <div style={{ marginTop: 28 }}><Button variant="primary" size="md" onClick={() => window.openWA("Hola, quiero ver todas las integraciones de TodoPymes.")}>Ver todas las integraciones →</Button></div>
        </div>
        <div style={{ background: "var(--tp-slate-100)", borderRadius: 22, padding: 30, minHeight: 340, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 18 }}>
          <span style={{ width: 64, height: 64, borderRadius: 16, background: "var(--surface-brand)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "var(--shadow-md)" }}>
            <img src={LOGOS + "icono-white.png"} style={{ width: 34, height: 34 }} alt="TodoPymes" />
          </span>
          <span style={{ width: 22, height: 22, borderRadius: "50%", background: "var(--tp-azul-acento)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>+</span>
          <div className="tp-grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
            {tiles.map((n, i) => (
              <span key={i} style={{ width: 58, height: 58, borderRadius: 14, background: "#fff", border: "1px solid var(--border-subtle)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "var(--shadow-xs)" }}>
                <img src={ICONS + n + ".png"} style={{ width: 26, height: 26 }} alt="" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
