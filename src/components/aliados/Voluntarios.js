import React from 'react';

const Voluntarios = () => {
  return (
    <section className="voluntarios">
      <div className="container">
        <h3>
          <b>¿Quieres apoyar con tu talento al desarrollo del emprendimiento nacional? </b>
          <br />
          Apoyá como voluntario con tu conocimiento y talento.
        </h3>
        <div className="voluntarios__list">

          <div className="voluntarios__list__item">
            <img src="https://picsum.photos/210/210" alt="persona" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, debitis.</p>
          </div>

          <div className="voluntarios__list__item">
            <img src="https://picsum.photos/210/210" alt="persona" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, debitis.</p>
          </div>

          <div className="voluntarios__list__item">
            <img src="https://picsum.photos/210/210" alt="persona" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, debitis.</p>
          </div>

        </div>
        <button>Formar Parte</button>
      </div>
    </section>
  )
}

export default Voluntarios;