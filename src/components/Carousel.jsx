import React, { useState, useEffect } from 'react';
import legal1 from '../assets/legal4.webp';
import legal2 from '../assets/legal0.webp';
import legal3 from '../assets/legal9.webp';

const Carousel = () => {
  const slides = [legal1, legal2, legal3];
  const [currentSlide, setCurrentSlide] = useState(0);

  const changeSlide = (direction) => {
    const newIndex = (currentSlide + direction + slides.length) % slides.length;
    setCurrentSlide(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      changeSlide(1);
    }, 3000); 
    return () => clearInterval(interval); 
  }, [currentSlide]);

  return (
    <section className="carousel-container">
      <div className="carousel" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
        {slides.map((image, index) => (
          <div className="slide" key={index}>
            <img src={image} alt={`Imagen ${index + 1}`} />
            <div className="caption">
              {index === 0 && (
                <>
                  <span className="latin-phrase">"Dura lex, sed lex"</span>
                  <br></br>
                  <span className="translation">"La ley es dura, pero es la ley."</span>
                </>
              )}
              {index === 1 && (
                <>
                  <span className="latin-phrase">"Da mihi factum, dabo tibi ius."</span>
                  <br></br>
                  <span className="translation"> "Dame el hecho, y te daré el derecho."</span>
                </>
              )}
              {index === 2 && (
                <>
                  <span className="latin-phrase">"Iustitia est constans et perpetua voluntas ius suum cuique tribuendi."</span>
                  <br></br>
                  <span className="translation">"La justicia es la constante y perpetua voluntad de dar a cada uno lo suyo."</span>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Controles de navegación */}
      <div className="controls">
        <span className="prev" onClick={() => changeSlide(-1)}>&#10094;</span>
        <span className="next" onClick={() => changeSlide(1)}>&#10095;</span>
      </div>
    </section>
  );
};

export default Carousel;
