import React from 'react';

const Voluntarios = () => {
  return (
    <section className="voluntarios">
      <div className="container">
        <h2>Voluntarios Emprende</h2>
        <p className="subtitulo">Poné tus habilidades en acción. Unite a nuestro programa e impactá en la comunidad</p>
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
        <button>Aplicar ahora</button>
      </div>
    </section>
  )
}

export default Voluntarios;