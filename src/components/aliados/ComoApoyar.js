import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const ComoApoyar = () => {
  return (
    <section className="como-apoyar">
      <div className="container">
        <h2 className="mobile">Cómo apoyar</h2>
        <StaticImage
                src='../../images/ComoApoyar.png'
                quality={100}
                className='como-apoyar__img'
                width={420}
                title="Killari Store - Josselyn Cabrera"
                alt="Killari Store - Josselyn Cabrera"
              />
        <div className="como-apoyar__list">
          <h2 className="desktop">Cómo apoyar</h2>
          <ol>
            <li>Organizando ferias y eventos.</li>  
            <li>Impartiento webinars o talleres.</li>
            <li>Financiando económicamente las actividades.</li>
            <li>Brindando espacio físico para los emprendedores.</li>
            <li>Conectándonos con oportunidades.</li>
            <li>Promoviendo nuestros productos locales.</li>
          </ol>
        </div>
      </div>
    </section>
  )
}

export default ComoApoyar;