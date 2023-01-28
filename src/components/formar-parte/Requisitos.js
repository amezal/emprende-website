import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Requisitos = () => {
  return (
    <div className="requisitos">
      <div className="container">
        <StaticImage
          className="img"
          src="../../images/Requisitos.png"
          title="Sugar Twist Bakery - Stephanie Jerez"
          alt="Sugar Twist Bakery - Stephanie Jerez"
        />
        <div className="text">
          <h2>Requisitos para emprendedores</h2>
          <p className="subtitulo">
            Promovemos a los emprendimientos en la región que producen con
            materia prima local.
          </p>
          <ol>
            <li>Producir 100% local.</li>
            <li>Presencia de marca en redes sociales.</li>
            <li>Productos innovadores y creativos.</li>
            <li>Procesos de fabricación sostenibles.</li>
          </ol>
          <Link className="llenar-formulario" to="/contacto">Llenar formulario</Link>
        </div>
      </div>
    </div>
  );
};

export default Requisitos;
