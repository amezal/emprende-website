import React from 'react'
import { Link } from 'gatsby'
import { FaInstagram, FaFacebookSquare, FaTiktok, FaYoutube } from 'react-icons/fa';
import { StaticImage } from 'gatsby-plugin-image';

const Footer = () => {

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__left">
          <StaticImage src="../images/Logo1.png" height="70"
            loading="eager" alt="logo" className="img"
            placeholder='none' quality="100" formats={["png"]} />
          <h3>¿Querés promover el <br /> progreso económico <br /> de la región?</h3>
          <button>Apoyar</button>
        </div>

        <div className="footer__right">
          <Link to="/contacto">Contactanos</Link>
          <div className="footer__right__socials">
            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/emprende.ca/"><FaInstagram size="25px" /> </a>
            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/emprender.ca"><FaFacebookSquare size="25px" /> </a>
            <a target="_blank" rel="noreferrer" href="https://www.tiktok.com/@emprende.ca"><FaTiktok size="25px" /> </a>
            <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCa7zHM8AdmiUGJhMK7f2TLw"><FaYoutube size="25px" /> </a>
          </div>
          <p>2022 Programa Emprende. Todos los derechos reservados.</p>
          <b>Desarrollado por: Sidekick & Armando Meza</b>
        </div>
      </div>
    </footer>
  )
}

export default Footer