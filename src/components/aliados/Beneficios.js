import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Beneficios = () => {
  return (
    <section className="beneficios">
      <div className="container">
        <div className="aliados">
        <h2>Aliados Emprende</h2>
        <p>
          Convertite en una empresa aliada para juntos potenciar el progreso económico en  la región.
        </p>
        </div>
        <hr />
        <h2>Beneficios para tu marca</h2>
        <div className="beneficios__list">
          <div className="beneficio">
            <StaticImage
              src='../../images/Beneficios01.png'
              quality={100}
              className='beneficio__img'
              width={150}
            />
            <h4>Posicionamiento</h4>
            <p>Tu marca comprometida con la sostenibilidad y las personas</p>
          </div>
          <div className="beneficio">
            <StaticImage
              src='../../images/Beneficios02.png'
              quality={100}
              className='beneficio__img'
              width={150}
            />
            <h4>Conexión</h4>
            <p>Con el segmento de mercado emprendedor</p>
          </div>
          <div className="beneficio">
            <StaticImage
              src='../../images/Beneficios03.png'
              quality={100}
              className='beneficio__img'
              width={150}
            />
            <h4>Alcance</h4>
            <p>Por medio de nuestras menciones en medios impresos y digitales</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Beneficios;