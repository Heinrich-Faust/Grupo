import React from "react";
import { FaEnvelope, FaWhatsapp, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact-container">
      <h1>Contacto</h1>
      <p>Si necesitas asesoría o información, no dudes en comunicarte con nosotros:</p>

      <div className="contact-info">
        <div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <h2>Correo Electrónico</h2>
          <p>
            <a href="mailto:grupoconsultorah@gmail.com">grupoconsultorah@gmail.com</a>
          </p>
        </div>

        <div className="contact-card" >
          <FaWhatsapp className="contact-icon" />
          <h2>WhatsApp</h2>
          <p>
            <a href="https://wa.me/+573112890034" target="_blank" rel="noopener noreferrer">
            Consulta con nosotros
            </a>
          </p>
        </div>

        <div className="contact-card">
          <FaPhone className="contact-icon" />
          <h2>Teléfono</h2>
          <p>
            <a href="tel:+573112890034">+57 311 289 0034</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
