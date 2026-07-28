import React from "react";

/* ============================================================
   Modal flotante compartido — CTA (iframe GHL placeholder) y Video.
   Se abre vía window.__openModal("cta" | "video") desde cualquier
   botón; el propio componente registra el listener global.
   ============================================================ */
export function LeadModal() {
  const [open, setOpen] = React.useState(null); // "cta" | "video" | "affiliate" | "agency" | "tech" | null

  React.useEffect(() => {
    window.__openModal = (type) => setOpen(type);
    const onKey = (e) => { if (e.key === "Escape") setOpen(null); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  if (!open) return null;

  const FORM_COPY = {
    cta: ["Pruébalo gratis", "Empieza con TodoPymes", "Formulario de contratación — se conectará al formulario real (GHL)."],
    affiliate: ["Partners afiliados", "Aplica al programa de afiliados", "Formulario de aplicación — se conectará al formulario real (GHL)."],
    agency: ["Partners de agencia", "Conviértete en Experto Certificado", "Formulario de aplicación — se conectará al formulario real (GHL)."],
    tech: ["Partners de tecnología", "Integra tu producto con TodoPymes", "Formulario de contacto técnico — se conectará al formulario real (GHL)."],
  };
  const isForm = open !== "video";
  const [eyebrow, heading, sub] = FORM_COPY[open] || FORM_COPY.cta;

  return (
    <div
      onClick={() => setOpen(null)}
      style={{ position: "fixed", inset: 0, zIndex: 1000, background: "rgba(0,20,36,.6)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{ position: "relative", width: "100%", maxWidth: open === "video" ? 900 : 520, background: "#fff", borderRadius: 20, boxShadow: "0 40px 90px rgba(0,20,36,.4)", overflow: "hidden" }}
      >
        <button
          onClick={() => setOpen(null)}
          aria-label="Cerrar"
          style={{ position: "absolute", top: 14, right: 14, zIndex: 2, width: 36, height: 36, borderRadius: "50%", border: "none", background: "rgba(0,51,87,.08)", color: "var(--text-strong)", fontSize: 18, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
        >×</button>

        {isForm ? (
          <div>
            <div style={{ padding: "28px 30px 0" }}>
              <div className="tp-eyebrow">{eyebrow}</div>
              <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: "var(--fw-bold)", fontSize: 24, color: "var(--text-strong)", margin: "8px 0 4px" }}>{heading}</h3>
              <p style={{ fontSize: 14, color: "var(--text-muted)", margin: 0 }}>{sub}</p>
            </div>
            <iframe
              title="Formulario TodoPymes"
              src="about:blank"
              style={{ display: "block", width: "100%", height: 480, border: "none", marginTop: 18, background: "var(--tp-slate-50)" }}
            />
          </div>
        ) : (
          <div style={{ background: "#000" }}>
            <video
              src="https://storage.googleapis.com/coverr-main/mp4/Chasing-Waterfalls.mp4"
              controls
              autoPlay
              style={{ display: "block", width: "100%", height: "auto", maxHeight: "80vh" }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
