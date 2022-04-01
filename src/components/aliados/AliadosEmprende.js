import React, { useEffect, useState } from 'react';
import loadable from '@loadable/component';

const Carousel = loadable(() => import('./Infinite'));


const AliadosEmprende = () => {

  return (
    <section className="aliados-emprende">
      <div className="container">
        <h2>Aliados Emprende</h2>
      </div>
      <div className="carousel">

        <Carousel />

      </div>
    </section>
  )
}

export default AliadosEmprende;