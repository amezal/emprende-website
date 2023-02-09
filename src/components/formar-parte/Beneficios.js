import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const Beneficios = () => {
  return (
    <div className="beneficios-fp">
      <div className="container">
        <h2>Beneficios para tu marca</h2>
        <p className="subtitulo">
          Te damos la mano para que tu emprendimiento crezca.
        </p>
        <div className="beneficios-fp__list">
          <div className="item">
            <StaticImage
              src="../../images/BeneficiosFP01.png"
              className="img"
            />
            <p>Exhibir y vender tus productos en nuestras ferias.</p>
          </div>
          <div className="item">
            <StaticImage
              src="../../images/BeneficiosFP02.png"
              className="img"
            />
            <p>Mover inventario y obtener ingresos.</p>
          </div>
          <div className="item">
            <StaticImage
              src="../../images/BeneficiosFP03.png"
              className="img"
            />
            <p>Generar conexiones y contactos.</p>
          </div>
          <div className="item">
            <StaticImage
              src="../../images/BeneficiosFP04.png"
              className="img"
            />
            <p>
              Ganar exposición gracias a las menciones de aliados e influencers.
            </p>
          </div>
          <div className="item">
            <StaticImage
              src="../../images/BeneficiosFP05.png"
              className="img"
            />
            <p>Acceder a capacitaciones, webinars o talleres.</p>
          </div>
          <div className="item">
            <StaticImage
              src="../../images/BeneficiosFP06.png"
              className="img"
            />
            <p>Apoyo de toda una comunidad de empresarios y emprendedores.</p>
          </div>
        </div>
        <Link className="llenar-formulario" to="/contacto">
          Llenar formulario
        </Link>
      </div>
    </div>
  );
};

export default Beneficios;
