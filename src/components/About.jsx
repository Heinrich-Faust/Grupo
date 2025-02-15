import React from "react";
import { FaBalanceScale, FaBullseye, FaEye } from "react-icons/fa";
import misionImg from "../assets/misión.jfif";
import visionImg from "../assets/misión2.jpg";
import nosotrosImg from "../assets/misión1.jpg";

const About = () => {
  return (
    <section className="about-container">
      <div className="about-section" style={{ backgroundImage: `url(${nosotrosImg})` }}>
        <FaBalanceScale className="about-icon" />
        <h1>Acerca de Nosotros</h1>
        <p>
          Somos una firma comprometida con la excelencia y la justicia. Nuestra prioridad es 
          ofrecer soluciones legales efectivas con un enfoque ético, profesional y personalizado.
        </p>
      </div>

      <div className="about-section" style={{ backgroundImage: `url(${misionImg})` }}>
        <FaBullseye className="about-icon" />
        <h2>Misión</h2>
        <p>
          Brindar asesoría y representación legal con los más altos estándares de calidad, 
          protegiendo los intereses de nuestros clientes y garantizando su tranquilidad.
        </p>
      </div>

      <div className="about-section" style={{ backgroundImage: `url(${visionImg})` }}>
        <FaEye className="about-icon" />
        <h2>Visión</h2>
        <p>
          Ser una firma líder en el ámbito jurídico, reconocida por nuestra ética, 
          compromiso y resultados, generando confianza y seguridad en cada caso que atendemos.
        </p>
      </div>
    </section>
  );
};

export default About;
