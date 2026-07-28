import React from "react";

/* ============================================================
   Recursos / Partners · programas + beneficios + success +
   other ways + get in touch.  Identidad TodoPymes.
   ============================================================ */

/* ---- ¿Qué programa es para ti? — 3 bloques alternados ---- */
function ProgramRow({ tone, eyebrow, eyebrowColor, title, body, cta, visual, reverse, onCta }) {
  const text = (
    <div style={{ padding: "44px 48px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <div style={{ fontSize: 15, fontWeight: "var(--fw-bold)", color: eyebrowColor, marginBottom: 14 }}>{eyebrow}</div>
      <h3 style={{ fontSize: "clamp(22px,2vw,28px)", fontWeight: "var(--fw-bold)", color: "var(--text-strong)", lineHeight: 1.2, marginBottom: 14 }}>{title}</h3>
      <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--text-muted)", margin: 0, maxWidth: 460 }}>{body}</p>
      <button onClick={onCta} style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 22, fontSize: 16, fontWeight: "var(--fw-semibold)", color: eyebrowColor, background: "none", border: "none", padding: 0, cursor: "pointer", fontFamily: "var(--font-sans)" }}>{cta} <span aria-hidden>→</span></button>
    </div>
  );
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", borderRadius: 18, overflow: "hidden", background: tone.light }}>
      {reverse ? <>{text}<div style={{ background: tone.dark, display: "flex", alignItems: "center", justifyContent: "center", padding: 36, minHeight: 320 }}>{visual}</div></>
               : <><div style={{ background: tone.dark, display: "flex", alignItems: "center", justifyContent: "center", padding: 36, minHeight: 320 }}>{visual}</div>{text}</>}
    </div>
  );
}

function ReferralCard({ accent }) {
  return (
    <div style={{ background: "#fff", borderRadius: 16, padding: 20, boxShadow: "var(--shadow-lg)", width: "min(320px,100%)" }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 14 }}>
        <span style={{ fontSize: 38, fontWeight: "var(--fw-black)", color: "var(--text-strong)" }}>24</span>
        <span style={{ fontSize: 18, fontWeight: "var(--fw-semibold)", color: "var(--text-strong)" }}>Referidos</span>
      </div>
      {[["Zahara N.", "equipo de 18"], ["Adán Y.", "equipo de 3"], ["Serena H.", "equipo de 7"]].map((r, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: 11, padding: "9px 0", borderTop: i ? "1px solid var(--border-subtle)" : "none" }}>
          <span style={{ width: 24, height: 24, borderRadius: "50%", background: "var(--tp-azul-profundo)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: "var(--fw-bold)" }}>$</span>
          <span style={{ flex: 1, fontSize: 14, fontWeight: "var(--fw-semibold)", color: "var(--text-strong)" }}>{r[0]}</span>
          <span style={{ fontSize: 13, color: "var(--text-muted)" }}>{r[1]}</span>
        </div>
      ))}
    </div>
  );
}

function ExpertCard() {
  return (
    <div style={{ position: "relative", width: "min(340px,100%)" }}>
      <div style={{ background: "#fff", borderRadius: 16, padding: 18, boxShadow: "var(--shadow-lg)" }}>
        <div style={{ fontSize: 16, fontWeight: "var(--fw-bold)", color: "var(--text-strong)" }}>Ingresos</div>
        <div style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 10 }}>Este mes</div>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
          <svg viewBox="0 0 150 60" style={{ width: 150, height: 56 }}><path d="M2 54 L30 44 L56 46 L86 26 L112 30 L146 6" fill="none" stroke="var(--tp-azul-profundo)" strokeWidth="2.5" strokeLinecap="round" /></svg>
          <span style={{ fontSize: 30, fontWeight: "var(--fw-black)", color: "var(--text-strong)" }}>+11%</span>
        </div>
      </div>
      <div style={{ position: "absolute", left: 16, bottom: -22, width: 88, height: 96, background: "#fff", borderRadius: 8, boxShadow: "var(--shadow-md)", clipPath: "polygon(0 0,100% 0,100% 78%,50% 100%,0 78%)", display: "flex", flexDirection: "column", alignItems: "center", padding: "12px 6px 0" }}>
        <span style={{ fontSize: 9, fontWeight: "var(--fw-bold)", textAlign: "center", color: "var(--text-strong)", lineHeight: 1.15 }}>Experto<br />TodoPymes<br />Certificado</span>
        <span style={{ marginTop: 6, width: 22, height: 22, borderRadius: "50%", background: "var(--tp-azul-acento)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12 }}>★</span>
      </div>
    </div>
  );
}

function TechGrid() {
  const set = ["mensajes", "nube", "calendario", "usuario", "analisis", "internet", "estadistica"];
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(65px, 1fr))", gap: 12, width: "min(340px,100%)" }}>
      {set.map((n, i) => (
        <span key={i} style={{ aspectRatio: "1", background: "#fff", borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "var(--shadow-sm)" }}>
          <img src={ICONS + n + ".png"} style={{ width: "48%", height: "48%", objectFit: "contain" }} alt="" />
        </span>
      ))}
      <span style={{ aspectRatio: "1", borderRadius: 14, border: "2px dashed var(--tp-success)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--tp-success)", fontSize: 26 }}>+</span>
    </div>
  );
}

export function Programs() {
  return (
    <section style={{ background: "#fff" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "84px 28px" }}>
        <h2 style={{ textAlign: "center", fontSize: "clamp(28px,3.6vw,50px)", fontWeight: "var(--fw-black)", letterSpacing: "-0.02em", lineHeight: 1.1, color: "var(--text-strong)", marginBottom: 44 }}>¿Qué programa de partner es ideal para ti?</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <ProgramRow
            tone={{ light: "var(--tp-blue-50)", dark: "linear-gradient(140deg, var(--tp-blue-300), var(--tp-blue-100))" }}
            eyebrow="Partners afiliados" eyebrowColor="var(--tp-azul-acento)"
            title="Empieza a ganar refiriendo a tu comunidad a TodoPymes"
            body="Un registro rápido, seguimiento simple de referidos y comisiones competitivas hacen fácil monetizar tu plataforma y ayudar a las PyMEs a descubrir TodoPymes."
            cta="Aplica ahora" visual={<ReferralCard />} onCta={() => window.__openModal && window.__openModal("affiliate")} />
          <ProgramRow
            tone={{ light: "var(--tp-blue-50)", dark: "linear-gradient(140deg, var(--tp-blue-400), var(--tp-azul-acento))" }}
            eyebrow="Partners de agencia" eyebrowColor="var(--tp-blue-700)" reverse
            title="Desbloquea revenue share multi-año como Experto Certificado"
            body="Amplía tus servicios y entrega valor inmediato con el centro de mando #1 en satisfacción al cliente, apalancando soporte exclusivo de go-to-market para acelerar el crecimiento."
            cta="Conviértete en Experto" visual={<ExpertCard />} onCta={() => window.__openModal && window.__openModal("agency")} />
          <ProgramRow
            tone={{ light: "var(--tp-success-soft)", dark: "linear-gradient(140deg, #bbe8cd, var(--tp-success-soft))" }}
            eyebrow="Partners de tecnología" eyebrowColor="#0f7a37"
            title="Llega a nuevas audiencias integrando tu producto con TodoPymes"
            body="Aprovecha las potentes APIs de TodoPymes para integrar mensajes, contactos y funciones con IA — potenciando tu plataforma, agilizando flujos y abriendo oportunidades de co-marketing."
            cta="Conoce más" visual={<TechGrid />} onCta={() => window.__openModal && window.__openModal("tech")} />
        </div>
      </div>
    </section>
  );
}

/* ---- Caso de éxito (video) ---- */
export function PartnerStory() {
  return (
    <section style={{ background: "var(--tp-slate-50)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "84px 28px" }}>
        <h2 style={{ fontSize: "clamp(26px,3vw,40px)", fontWeight: "var(--fw-black)", letterSpacing: "-0.02em", lineHeight: 1.1, color: "var(--text-strong)", marginBottom: 36 }}>Cómo FERREMAX hizo crecer su negocio con TodoPymes</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 40, alignItems: "center" }}>
          <div style={{ position: "relative", borderRadius: 16, overflow: "hidden" }}>
            <image-slot id="tp-rec-video" shape="rounded" radius="16" placeholder="Suelta el video del caso de éxito" style={{ display: "block", width: "100%", height: 340, background: "var(--tp-blue-200)" }}></image-slot>
            <span style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
              <span style={{ width: 68, height: 68, borderRadius: "50%", background: "var(--tp-azul-acento)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, paddingLeft: 5, boxShadow: "0 8px 24px rgba(0,0,0,.35)" }}>▶</span>
            </span>
          </div>
          <div>
            <p style={{ fontSize: "clamp(18px,1.7vw,23px)", fontWeight: "var(--fw-semibold)", lineHeight: 1.35, color: "var(--text-strong)", margin: 0 }}>
              "Ser partner de TodoPymes cambió las reglas del juego… el soporte excepcional del equipo asegura que nuestra alianza genere valor continuo para nuestros clientes en común."
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 24 }}>
              <Avatar name="Jeremías Duarte" size={50} shape="circle" />
              <div><div style={{ fontSize: 16, fontWeight: "var(--fw-bold)", color: "var(--text-strong)" }}>Jeremías Duarte</div><div style={{ fontSize: 14, color: "var(--text-muted)" }}>Fundador y CEO, FERREMAX</div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- Partner benefits (6 cards con top de color) ---- */
export function Benefits() {
  const cards = [
    { ic: "estadistica", t: "20% de revenue share por cada cliente referido", top: "var(--tp-success-soft)" },
    { ic: "informacion", t: "Partner Manager dedicado y soporte", top: "var(--tp-warning-soft)" },
    { ic: "internet", t: "Oportunidades de co-marketing que destacan tus servicios", top: "#fde0d6" },
    { ic: "equipo", t: "Comunidad exclusiva de Expertos TodoPymes", top: "var(--tp-blue-100)" },
    { ic: "configuracion", t: "Capacitación de producto y certificación de partner", top: "#e6ddfb" },
    { ic: "nube", t: "Cuenta demo y acceso anticipado a las funciones nuevas", top: "#fbd9ec" },
  ];
  return (
    <section style={{ background: "#fff" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "84px 28px" }}>
        <h2 style={{ textAlign: "center", fontSize: "clamp(28px,3.6vw,50px)", fontWeight: "var(--fw-black)", letterSpacing: "-0.02em", lineHeight: 1.2, color: "var(--text-strong)", marginBottom: 12 }}>
          <div>Beneficios de partner</div>
          <div>que impulsan tu éxito</div>
        </h2>
        <p style={{ textAlign: "center", fontSize: 16, color: "var(--text-muted)", maxWidth: 560, margin: "0 auto 44px", lineHeight: 1.5 }}>Al unirte al Programa de Partners de TodoPymes te conviertes en parte de una comunidad vibrante de profesionales con visión de futuro.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 22 }}>
          {cards.map((c, i) => (
            <div key={i} style={{ border: "1px solid var(--border-subtle)", borderRadius: 16, overflow: "hidden", boxShadow: "var(--shadow-xs)" }}>
              <div style={{ background: c.top, height: 84, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ width: 44, height: 44, borderRadius: "50%", background: "rgba(255,255,255,.7)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src={ICONS + c.ic + ".png"} style={{ width: 22, height: 22 }} alt="" />
                </span>
              </div>
              <div style={{ padding: "26px 22px 30px", textAlign: "center", minHeight: 96, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <h3 style={{ fontSize: 16.5, fontWeight: "var(--fw-bold)", color: "var(--text-strong)", lineHeight: 1.35 }}>{c.t}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- What success looks like (oscuro, 3 cálculos) ---- */
export function SuccessLooks() {
  const cards = [
    { t: "Plan Essential anual · 5 personas", calc: "$1,440 × 5 = $7,200", pay: "Ganas $1,440" },
    { t: "Plan Professional anual · 10 personas", calc: "$2,400 × 10 = $24,000", pay: "Ganas $4,800" },
    { t: "Plan Enterprise anual · 20 personas", calc: "$4,320 × 20 = $86,400", pay: "Ganas $17,280" },
  ];
  return (
    <section style={{ background: "var(--tp-blue-950)", padding: "84px 28px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: "clamp(28px,3.6vw,50px)", fontWeight: "var(--fw-black)", letterSpacing: "-0.02em", color: "#fff", marginBottom: 12 }}>Así se ve el éxito</h2>
        <p style={{ textAlign: "center", fontSize: 16, color: "rgba(255,255,255,.6)", maxWidth: 640, margin: "0 auto 44px", lineHeight: 1.5 }}>Ya sea un freelancer o un equipo de 100 personas, ganas cada vez que un referido se suscribe a TodoPymes.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 22 }}>
          {cards.map((c, i) => (
            <div key={i} style={{ background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.1)", borderRadius: 14, padding: "26px 24px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 16 }}>
                <span style={{ width: 22, height: 22, borderRadius: "50%", background: "var(--tp-azul-acento)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11 }}>$</span>
                <span style={{ fontSize: 16, fontWeight: "var(--fw-bold)", color: "#fff" }}>{c.t}</span>
              </div>
              <div style={{ fontSize: 16, color: "rgba(255,255,255,.7)", marginBottom: 10 }}>{c.calc}</div>
              <div style={{ fontSize: 18, fontWeight: "var(--fw-bold)", color: "var(--tp-blue-300)" }}>{c.pay}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- Other ways to partner (2 cards ilustradas) ---- */
export function OtherWays() {
  const cards = [
    { id: "tp-rec-vc", t: "Ofrece un beneficio a tu comunidad VC & startup", b: "Dale a tus empresas de portafolio y redes un descuento exclusivo de TodoPymes, ayudándoles a escalar más rápido con comunicaciones de negocio modernas y flexibles." },
    { id: "tp-rec-franchise", t: "Crece como partner de franquicias", b: "Mantén bajos los costos de los franquiciados mientras impulsas ventas y entregas mejores experiencias, todo con un sistema pensado para negocios multi-sucursal en crecimiento." },
  ];
  return (
    <section style={{ background: "#fff" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "84px 28px" }}>
        <h2 style={{ textAlign: "center", fontSize: "clamp(28px,3.6vw,50px)", fontWeight: "var(--fw-black)", letterSpacing: "-0.02em", lineHeight: 1.1, color: "var(--text-strong)", marginBottom: 44 }}>Otras formas de ser partner de TodoPymes</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}>
          {cards.map((c, i) => (
            <div key={i} style={{ border: "1px solid var(--border-subtle)", borderRadius: 18, overflow: "hidden", boxShadow: "var(--shadow-xs)" }}>
              <image-slot id={c.id} shape="rect" placeholder="Ilustración de marca" style={{ display: "block", width: "100%", height: 220, background: i ? "var(--tp-blue-100)" : "var(--tp-warning-soft)" }}></image-slot>
              <div style={{ padding: "26px 28px 30px" }}>
                <h3 style={{ fontSize: 21, fontWeight: "var(--fw-bold)", color: "var(--text-strong)", marginBottom: 12 }}>{c.t}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--text-muted)", margin: 0 }}>{c.b}</p>
                <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 20, fontSize: 16, fontWeight: "var(--fw-semibold)", color: "var(--tp-azul-acento)" }}>Contáctanos <span aria-hidden>→</span></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- Get in touch (quote + form) ---- */
function Field({ label, children }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
      <label style={{ fontSize: 14, fontWeight: "var(--fw-bold)", color: "var(--text-strong)" }}>{label}</label>
      {children}
    </div>
  );
}
const inputStyle = { fontFamily: "var(--font-sans)", fontSize: 15, color: "var(--text-body)", padding: "13px 15px", borderRadius: 12, border: "1px solid var(--border-default)", background: "#fff", outline: "none", width: "100%", boxSizing: "border-box" };

export function GetInTouch() {
  return (
    <section style={{ background: "var(--tp-slate-50)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "84px 28px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 48, alignItems: "start" }}>
        <div>
          <h2 style={{ fontSize: "clamp(34px,4.4vw,60px)", fontWeight: "var(--fw-black)", letterSpacing: "-0.03em", color: "var(--text-strong)", margin: 0 }}>Hablemos</h2>
          <p style={{ fontSize: 17, lineHeight: 1.55, color: "var(--text-muted)", margin: "18px 0 32px", maxWidth: 400 }}>Reúnete con nuestro equipo de Alianzas para conocer más y conversar ideas. Encontremos el ajuste ideal para tu negocio.</p>
          <div style={{ background: "var(--tp-slate-100)", borderRadius: 16, padding: "26px 28px", maxWidth: 420 }}>
            <p style={{ fontSize: 19, fontWeight: "var(--fw-semibold)", lineHeight: 1.4, color: "var(--text-strong)", margin: 0 }}>"Nos comprometemos a construir relaciones exitosas con nuestros partners que ayuden a sus negocios a prosperar y crecer."</p>
            <div style={{ display: "flex", marginTop: 18 }}>
              <Avatar name="Mateo R" size={44} shape="circle" style={{ border: "3px solid var(--tp-slate-100)" }} />
              <Avatar name="Lucía P" tone="slate" size={44} shape="circle" style={{ border: "3px solid var(--tp-slate-100)", marginLeft: -12 }} />
            </div>
          </div>
        </div>

        <div style={{ background: "#fff", border: "1px solid var(--border-subtle)", borderRadius: 18, padding: "32px 34px", boxShadow: "var(--shadow-sm)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 18, marginBottom: 18 }}>
            <Field label="Nombre*"><input style={inputStyle} placeholder="Nombre" /></Field>
            <Field label="Apellido*"><input style={inputStyle} placeholder="Apellido" /></Field>
          </div>
          <div style={{ marginBottom: 18 }}><Field label="Correo de trabajo*"><input style={inputStyle} placeholder="tu@empresa.com" /></Field></div>
          <div style={{ marginBottom: 18 }}><Field label="Nombre de la empresa*"><input style={inputStyle} placeholder="Nombre de la empresa" /></Field></div>
          <div style={{ marginBottom: 18 }}><Field label="¿Cómo te gustaría ser partner?*"><div style={{ ...inputStyle, display: "flex", alignItems: "center", justifyContent: "space-between", color: "var(--text-muted)", cursor: "pointer" }}>Seleccionar <span style={{ fontSize: 11 }}>▾</span></div></Field></div>
          <div style={{ marginBottom: 24 }}><Field label="¿Algo más que el equipo deba saber?*"><textarea style={{ ...inputStyle, minHeight: 110, resize: "vertical" }} placeholder="Comentarios adicionales…"></textarea></Field></div>
          <Button variant="primary" size="lg" fullWidth>Enviar</Button>
        </div>
      </div>
    </section>
  );
}
