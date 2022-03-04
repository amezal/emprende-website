import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image';
import { FaInstagram, FaFacebookSquare, FaTiktok, FaYoutube } from 'react-icons/fa';


const Footer = () => {

  const socials = [FaInstagram, FaFacebookSquare, FaTiktok, FaYoutube];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__left">
          <img src="https://picsum.photos/81/81" alt="logo" />
          <h3>¿Querés unirte a nosotros <br /> para hacer <br /> realidad este propósito?</h3>
          <button>Button</button>
        </div>

        <div className="footer__right">
          <Link>Contactanos</Link>
          <div className="footer__right__socials">
            <Link target="_blank" to="https://www.instagram.com/emprende.ca/"><FaInstagram size="47px" /> </Link>
            <Link target="_blank" to="https://www.facebook.com/"><FaFacebookSquare size="47px" /> </Link>
            <Link target="_blank" to="https://www.tiktok.com/"><FaTiktok size="47px" /> </Link>
            <Link target="_blank" to="https://www.youtube.com/"><FaYoutube size="47px" /> </Link>
          </div>
          <p>2022 Programa Emprende. Todos los derechos reservados.</p>
          <b>Desarrollado por: Sidekick & Armando Meza</b>
        </div>
      </div>
    </footer>
  )
}

export default Footer