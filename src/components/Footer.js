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
            <a target="_blank" href="https://www.instagram.com/emprende.ca/"><FaInstagram size="47px" /> </a>
            <a target="_blank" href="https://www.facebook.com/emprender.ca"><FaFacebookSquare size="47px" /> </a>
            <a target="_blank" href="https://www.tiktok.com/@emprende.ca"><FaTiktok size="47px" /> </a>
            <a target="_blank" href="https://www.youtube.com/channel/UCa7zHM8AdmiUGJhMK7f2TLw"><FaYoutube size="47px" /> </a>
          </div>
          <p>2022 Programa Emprende. Todos los derechos reservados.</p>
          <b>Desarrollado por: Sidekick & Armando Meza</b>
        </div>
      </div>
    </footer>
  )
}

export default Footer