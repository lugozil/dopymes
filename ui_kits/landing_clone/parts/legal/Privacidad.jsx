import React from "react";

/* ============================================================
   Política de Privacidad — texto placeholder genérico.
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

export function Privacidad() {
  return (
    <section style={{ background: "#fff" }}>
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "64px 28px 96px" }}>
        <div className="tp-eyebrow">Legal</div>
        <h1 style={{ fontSize: "clamp(30px,4vw,44px)", fontWeight: "var(--fw-black)", letterSpacing: "-0.02em", color: "var(--text-strong)", margin: "10px 0 8px" }}>
          Política de Privacidad
        </h1>
        <p style={{ fontSize: 15, color: "var(--text-muted)", margin: 0 }}>Última actualización: por definir</p>

        <p style={{ marginTop: 28, fontSize: 15.5, lineHeight: "var(--lh-relaxed)", color: "var(--text-body)", background: "var(--tp-warning-soft)", border: "1px solid var(--tp-warning)", borderRadius: 12, padding: "14px 18px" }}>
          Este texto es un borrador de referencia generado automáticamente y no constituye asesoría legal. Debe ser revisado y validado por un abogado antes de publicarse.
        </p>

        <Section title="1. Información que recopilamos">
          Recopilamos información que nos proporcionas directamente (nombre, correo, teléfono, datos de tu negocio) y datos generados por el uso del Servicio (mensajes de WhatsApp gestionados en la plataforma, registros de llamadas, actividad de la cuenta).
        </Section>

        <Section title="2. Cómo usamos tu información">
          Usamos la información para prestar y mejorar el Servicio, dar soporte, procesar pagos, enviar comunicaciones relevantes y cumplir con obligaciones legales aplicables.
        </Section>

        <Section title="3. Con quién compartimos información">
          No vendemos tus datos personales. Podemos compartir información con proveedores que nos ayudan a operar el Servicio (hosting, procesamiento de pagos, mensajería de WhatsApp Business API), sujetos a obligaciones de confidencialidad.
        </Section>

        <Section title="4. Almacenamiento y seguridad">
          Implementamos medidas técnicas y organizativas razonables para proteger tu información contra acceso no autorizado, pérdida o alteración. Ningún sistema es 100% seguro, por lo que no podemos garantizar seguridad absoluta.
        </Section>

        <Section title="5. Conservación de datos">
          Conservamos tu información mientras tu cuenta esté activa o según sea necesario para cumplir obligaciones legales, resolver disputas y hacer cumplir nuestros acuerdos.
        </Section>

        <Section title="6. Tus derechos">
          Dependiendo de tu jurisdicción, puedes tener derecho a acceder, corregir, eliminar o portar tus datos personales, así como a oponerte u limitar ciertos tratamientos. Puedes ejercer estos derechos escribiéndonos a los datos de contacto abajo.
        </Section>

        <Section title="7. Cookies y tecnologías similares">
          Utilizamos cookies y tecnologías similares para el funcionamiento del Servicio, análisis de uso y mejora de la experiencia. Puedes gestionar tus preferencias de cookies desde la configuración de tu navegador.
        </Section>

        <Section title="8. Transferencias internacionales">
          Tu información puede procesarse en servidores ubicados fuera de tu país de residencia. En esos casos, adoptamos salvaguardas razonables para proteger tus datos conforme a la legislación aplicable.
        </Section>

        <Section title="9. Cambios a esta política">
          Podemos actualizar esta Política de Privacidad periódicamente. Notificaremos cambios materiales a través del Servicio o por correo electrónico.
        </Section>

        <Section title="10. Contacto">
          Para preguntas sobre esta Política de Privacidad o para ejercer tus derechos de datos, escríbenos a <b style={{ color: "var(--text-strong)" }}>contacto@todopymes.com</b>.
        </Section>
      </div>
    </section>
  );
}
