import React from "react";

/* ============================================================
   Términos y Condiciones — texto placeholder genérico.
   NOTA: este contenido es un borrador de referencia y debe ser
   revisado por un abogado antes de publicarse en producción.
   ============================================================ */

function Section({ title, children }) {
  return (
    <div style={{ marginTop: 36 }}>
      <h2 style={{ fontSize: 20, fontWeight: "var(--fw-bold)", color: "var(--text-strong)", marginBottom: 12 }}>{title}</h2>
      <div style={{ fontSize: 15.5, lineHeight: "var(--lh-relaxed)", color: "var(--text-body)" }}>{children}</div>
    </div>
  );
}

export function Terminos() {
  return (
    <section style={{ background: "#fff" }}>
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "64px 28px 96px" }}>
        <div className="tp-eyebrow">Legal</div>
        <h1 style={{ fontSize: "clamp(30px,4vw,44px)", fontWeight: "var(--fw-black)", letterSpacing: "-0.02em", color: "var(--text-strong)", margin: "10px 0 8px" }}>
          Términos y Condiciones
        </h1>
        <p style={{ fontSize: 15, color: "var(--text-muted)", margin: 0 }}>Última actualización: por definir</p>

        <p style={{ marginTop: 28, fontSize: 15.5, lineHeight: "var(--lh-relaxed)", color: "var(--text-body)", background: "var(--tp-warning-soft)", border: "1px solid var(--tp-warning)", borderRadius: 12, padding: "14px 18px" }}>
          Este texto es un borrador de referencia generado automáticamente y no constituye asesoría legal. Debe ser revisado y validado por un abogado antes de publicarse.
        </p>

        <Section title="1. Aceptación de los términos">
          Al acceder o utilizar los servicios de TodoPymes ("el Servicio"), aceptas quedar sujeto a estos Términos y Condiciones. Si no estás de acuerdo con alguna parte de estos términos, no debes utilizar el Servicio.
        </Section>

        <Section title="2. Descripción del servicio">
          TodoPymes ofrece una plataforma que integra WhatsApp, CRM, agenda y automatizaciones para pequeñas y medianas empresas. Nos reservamos el derecho de modificar, suspender o descontinuar cualquier funcionalidad del Servicio en cualquier momento.
        </Section>

        <Section title="3. Cuentas de usuario">
          Eres responsable de mantener la confidencialidad de tus credenciales de acceso y de toda actividad que ocurra bajo tu cuenta. Debes notificarnos de inmediato ante cualquier uso no autorizado.
        </Section>

        <Section title="4. Uso aceptable">
          Te comprometes a no utilizar el Servicio para fines ilícitos, para enviar comunicaciones no solicitadas (spam), ni para infringir derechos de terceros, incluyendo propiedad intelectual y protección de datos personales.
        </Section>

        <Section title="5. Pagos y facturación">
          Los planes pagos se facturan de forma recurrente según la periodicidad contratada. Los precios pueden cambiar con previo aviso razonable. Las cancelaciones aplican a partir del siguiente ciclo de facturación, salvo que la ley aplicable indique lo contrario.
        </Section>

        <Section title="6. Propiedad intelectual">
          El Servicio, su software, marca e interfaces son propiedad de TodoPymes o de sus licenciantes. Nada en estos términos te otorga derechos de propiedad sobre el Servicio.
        </Section>

        <Section title="7. Limitación de responsabilidad">
          El Servicio se ofrece "tal cual" y "según disponibilidad". En la máxima medida permitida por la ley, TodoPymes no será responsable por daños indirectos, incidentales o consecuentes derivados del uso del Servicio.
        </Section>

        <Section title="8. Terminación">
          Podemos suspender o cancelar tu acceso al Servicio si incumples estos términos. Puedes cancelar tu cuenta en cualquier momento desde la configuración de tu cuenta o contactando a soporte.
        </Section>

        <Section title="9. Cambios a estos términos">
          Podemos actualizar estos términos periódicamente. Notificaremos cambios materiales a través del Servicio o por correo electrónico. El uso continuado del Servicio tras la publicación de cambios constituye tu aceptación de los mismos.
        </Section>

        <Section title="10. Contacto">
          Para preguntas sobre estos Términos y Condiciones, escríbenos a <b style={{ color: "var(--text-strong)" }}>contacto@todopymes.com</b>.
        </Section>
      </div>
    </section>
  );
}
