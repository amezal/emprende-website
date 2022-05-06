import React from 'react'
import { StaticImage } from 'gatsby-plugin-image';

const NuestraMision = () => {
  return (
    <section className="nuestra-mision">
      <div className="container">

        <div className="nuestra-mision__intro">
          <h2>Nuestra Misión</h2>
          <p>
            Somos la plataforma que promueve a los emprendedores nicaragüenses que están produciendo localmente.
          </p>
        </div>

        <div className="nuestra-mision__item">
          <div className="item__text">
            <h3>Nuestra Visión</h3>
            <p>
              Impulsar el emprendimiento a nivel regional, con el apoyo del sector empresarial de cada país;  para contribuir al desarrollo y progreso económico de la región.
            </p>
          </div>
          <StaticImage
            src='../../images/NuestraVision.png'
            alt='Nuestra visión'
            quality={100}
            className='item__img'
          />
        </div>

        <div className="nuestra-mision__item">
          <StaticImage
            src='../../images/TrabajamosPara.png'
            alt='lala'
            className='item__img'
          />
          <div className="item__text">
            <h3>Trabajamos para</h3>
            <p>
              <b>Promoverlos: </b>creamos espacios para que puedan exhibir y vender sus productos, en: ferias, eventos y medios digitales.
              <br />
              <br />
              <br />
              <br />
              <b>Darles herramientas:</b> brindamos contenido educativo en diferentes áreas (finanzas, marketing, diseño, innovación, y más) para ayudarlos a desarrollar su negocio de manera exitosa.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NuestraMision