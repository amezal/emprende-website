import React from 'react';

const Beneficios = () => {
  return (
    <section className="beneficios">
      <div className="container">
        <h2>Beneficios</h2>
        <div className="beneficios__list">
          <div className="beneficio">
            <img src="https://picsum.photos/100/100" alt="beneficio" />
            <p>Te posicionarás como una marca con propósito, comprometida con la sostenibilidad y las personas</p>
          </div>
          <div className="beneficio">
            <img src="https://picsum.photos/100/100" alt="beneficio" />
            <p>Tendrás una conexión más cercana con tus clientes, ya que promovemos a emprendimientos de diferentes industrias</p>
          </div>
          <div className="beneficio">
            <img src="https://picsum.photos/100/100" alt="beneficio" />
            <p>Ganarás promoción y alcance de marca por medio de nuestras menciones en medios impresos y digitales</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Beneficios;