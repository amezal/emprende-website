import React from 'react'
import { StaticImage } from 'gatsby-plugin-image';

const NuestraMision = () => {
  return (
    <section className="nuestra-mision">
      <div className="container">

        <div className="nuestra-mision__intro">
          <h2>Nuestra Misión</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className="nuestra-mision__item">
          <div className="item__text">
            <h3>Nuestra Historia</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          </div>
          <StaticImage
            src='https://picsum.photos/500/300'
            alt='lala'
            className='item__img'
          />
        </div>

        <div className="nuestra-mision__item">
          <StaticImage
            src='https://picsum.photos/500/300'
            alt='lala'
            className='item__img'
          />
          <div className="item__text">
            <h3>Que nos mueve</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NuestraMision