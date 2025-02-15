import React from 'react';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <section className="services">
      <div className="service-card" onClick={() => handleNavigation('/Contact')}>
        <h2>Asesoría Jurídica</h2>
        <p>Brindamos orientación legal personalizada para resolver dudas y prevenir conflictos. Analizamos cada caso en detalle para ofrecer estrategias efectivas y soluciones adaptadas a tus necesidades.</p>
      </div>
      <div className="service-card" onClick={() => handleNavigation('/Contact')}>
        <h2>Redacción y Revisión de Documentos Legales</h2>
        <p>Elaboramos y revisamos contratos, acuerdos, demandas y otros documentos jurídicos, garantizando su legalidad, claridad y protección de tus intereses.</p>
      </div>
      <div className="service-card" onClick={() => handleNavigation('/Contact')}>
        <h2>Defensa y Representación Legal</h2>
        <p>Te representamos en procesos judiciales y administrativos, defendiendo tus derechos con profesionalismo y compromiso en diversas áreas del derecho.</p>
      </div>
    </section>
  );
};

export default Services;
