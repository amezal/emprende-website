import React, { useState } from 'react'
import { StaticImage } from 'gatsby-plugin-image';

const Equipo = () => {

  const numberOfPages = 2;
  const [active, setActive] = useState(0);

  const equipo = [
    {
      img: 'https://picsum.photos/240/240',
      name: 'Petrona',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing.'
    },
    {
      img: 'https://picsum.photos/240/240',
      name: 'Aasdfa',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing.'
    },
    {
      img: 'https://picsum.photos/240/240',
      name: 'Luisita',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing.'
    },
  ]

  return (
    <section className="equipo">
      <div className="container">
        <h2>El equipo</h2>
        <div className="equipo__carousel">
          {equipo.map(integrante => (
            <div className="integrante" key={integrante.name}>
              <img
                src={integrante.img}
                alt={integrante.name}
              />
              <p>{integrante.text}</p>
            </div>
          ))}
        </div>
        <div className="equipo__controls">
          {
            [...Array(numberOfPages)].map((btn, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={active === i ? 'active' : ''}
              >
                <div></div>
              </button>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Equipo