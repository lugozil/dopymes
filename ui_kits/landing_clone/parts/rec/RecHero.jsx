import React from "react";

/* ============================================================
   Recursos / Partners · Hero + tira de confianza + "Why partner".
   Réplica estructural de Quo con identidad TodoPymes.
   ============================================================ */

/* Ilustración orbital con tarjetas flotantes */
function Orbit() {
  return (
    <div style={{ position: "relative", width: "100%", height: 440, display: "flex", alignItems: "center", justifyContent: "center" }}>
      {/* anillos */}
      {[440, 340, 250].map((d, i) => (
        <span key={i} style={{ position: "absolute", width: d, height: d, borderRadius: "50%", border: "1px solid var(--border-default)" }} />
      ))}
      {/* puntos en órbita */}
      {[[50, 6], [92, 38], [80, 86], [30, 92], [10, 60], [62, 4]].map((p, i) => (
        <span key={i} style={{ position: "absolute", left: p[0] + "%", top: p[1] + "%", width: 16, height: 16, borderRadius: "50%", background: "var(--tp-azul-acento)" }} />
      ))}
      {/* núcleo */}
      <span style={{ position: "relative", width: 190, height: 190, borderRadius: "50%", background: "var(--tp-azul-profundo)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "var(--shadow-lg)" }}>
        <img src={LOGOS + "icono-white.png"} alt="TodoPymes" style={{ width: 78, height: 78 }} />
      </span>
      {/* tarjeta Ingresos */}
      <div style={{ position: "absolute", left: "6%", top: "20%", width: 230, background: "var(--tp-blue-100)", borderRadius: 16, padding: 16, boxShadow: "var(--shadow-md)" }}>
        <div style={{ fontSize: 15, fontWeight: "var(--fw-bold)", color: "var(--text-strong)" }}>Ingresos</div>
        <div style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 6 }}>Este mes</div>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
          <svg viewBox="0 0 120 50" style={{ width: 120, height: 44 }}><path d="M2 44 L24 36 L44 38 L66 22 L88 24 L116 6" fill="none" stroke="var(--tp-azul-profundo)" strokeWidth="2.5" strokeLinecap="round" /><path d="M116 6 l-7 1 m7 -1 l-1 7" stroke="var(--tp-azul-profundo)" strokeWidth="2.5" strokeLinecap="round" fill="none" /></svg>
          <span style={{ fontSize: 26, fontWeight: "var(--fw-black)", color: "var(--text-strong)" }}>+8%</span>
        </div>
      </div>
      {/* tarjeta Referidos */}
      <div style={{ position: "absolute", right: "4%", bottom: "14%", width: 250, background: "var(--tp-azul-acento)", borderRadius: 16, padding: 16, boxShadow: "var(--shadow-lg)", color: "#fff" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 10 }}>
          <span style={{ fontSize: 30, fontWeight: "var(--fw-black)" }}>32</span>
          <span style={{ fontSize: 15, fontWeight: "var(--fw-semibold)" }}>Referidos</span>
        </div>
        {[["Sara Reid", "eq. 4"], ["Kayla Lao", "eq. 26"], ["Tyler Cruz", "eq. 18"]].map((r, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, padding: "5px 0", opacity: i === 2 ? 0.55 : 1 }}>
            <span style={{ width: 18, height: 18, flex: "none", borderRadius: "50%", background: "rgba(255,255,255,.25)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: "var(--fw-bold)" }}>$</span>
            <span style={{ flex: 1, fontSize: 13, fontWeight: "var(--fw-semibold)" }}>{r[0]}</span>
            <span style={{ fontSize: 12, opacity: 0.85, whiteSpace: "nowrap" }}>{r[1]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function RecHero() {
  return (
    <section style={{ background: "#fff" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "64px 28px 40px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
        <div>
          <h1 style={{ fontFamily: "var(--font-sans)", fontWeight: "var(--fw-black)", fontSize: "clamp(40px,5.4vw,74px)", lineHeight: 1.02, letterSpacing: "-0.035em", color: "var(--text-strong)", margin: 0 }}>
            Crece tu negocio como <span style={{ color: "var(--tp-azul-acento)" }}>partner</span> de TodoPymes
          </h1>
          <p style={{ fontSize: "clamp(16px,1.4vw,19px)", lineHeight: 1.55, color: "var(--text-muted)", margin: "22px 0 0", maxWidth: 480 }}>
            Únete a nuestra comunidad de partners para desbloquear nuevos ingresos, ampliar tus servicios y deleitar a tus clientes con el centro de mando de la próxima generación de negocios.
          </p>
          <div style={{ marginTop: 32 }}>
            <Button variant="primary" size="lg">Ver programas de partners</Button>
          </div>
        </div>
        <Orbit />
      </div>

      {/* tira de confianza */}
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "30px 28px 64px" }}>
        <p style={{ textAlign: "center", fontSize: 17, color: "var(--text-muted)", marginBottom: 26 }}>Más de 2,000 partners hacen crecer su negocio con TodoPymes</p>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 26, opacity: 0.5 }}>
          {["FERREMAX", "Andina VC", "HubLatam", "JOBBER", "bengali", "CM Integrado"].map((n, i) => (
            <span key={n} style={{ fontFamily: "var(--font-sans)", fontWeight: "var(--fw-black)", fontSize: i % 2 ? 20 : 23, letterSpacing: i % 2 ? "0.06em" : "-0.01em", color: "var(--tp-slate-700)", textTransform: i % 2 ? "uppercase" : "none" }}>{n}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --- Why partner (oscuro, 4 beneficios) --- */
export function WhyPartner() {
  const items = [
    { ic: "estadistica", t: "Gana más clientes", b: "Nuestras soluciones impulsan la eficiencia y la satisfacción del cliente." },
    { ic: "analisis", t: "Haz crecer tus ingresos", b: "Incentivos de partner líderes en la industria aseguran que ganes cada vez que refieres." },
    { ic: "configuracion", t: "Mantente a la vanguardia", b: "Con IA, automatización e integración que escalan junto a tus clientes." },
    { ic: "equipo", t: "Únete a la comunidad", b: "Sé el primero en acceder a nuestras funciones y betas más recientes." },
  ];
  return (
    <section style={{ background: "var(--tp-blue-950)", padding: "80px 28px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "0.8fr 1.2fr", gap: 48 }}>
        <h2 style={{ fontSize: "clamp(30px,3.6vw,50px)", fontWeight: "var(--fw-black)", letterSpacing: "-0.02em", lineHeight: 1.08, color: "#fff", margin: 0 }}>
          ¿Por qué ser partner de TodoPymes?
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px 40px" }}>
          {items.map((it, i) => (
            <div key={i}>
              <div style={{ display: "flex", alignItems: "center", gap: 11, marginBottom: 10 }}>
                <span style={{ width: 34, height: 34, borderRadius: 9, background: "rgba(12,106,249,.18)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src={ICONS + "white/" + it.ic + ".png"} style={{ width: 18, height: 18 }} alt="" />
                </span>
                <h3 style={{ fontSize: 18, fontWeight: "var(--fw-bold)", color: "#fff" }}>{it.t}</h3>
              </div>
              <p style={{ fontSize: 15, lineHeight: 1.55, color: "rgba(255,255,255,.6)", margin: 0, paddingLeft: 45 }}>{it.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
