import React from 'react'
import { Link } from 'gatsby'
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
          <a target="_blank" rel="noreferrer" href="https://www.facebook.com/emprender.ca">
                <StaticImage
                  src="../images/facebook-round.svg"
                  height="25"
                  loading="eager"
                  placeholder="none"
                />
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.tiktok.com/@emprende.ca">
                <StaticImage
                  src="../images/tiktok-round.svg"
                  height="25"
                  loading="eager"
                  placeholder="none"
                />
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCa7zHM8AdmiUGJhMK7f2TLw">
                <StaticImage
                  src="../images/youtube-round.svg"
                  height="25"
                  loading="eager"
                  placeholder="none"
                />
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.instagram.com/emprende.ca/">
                <StaticImage
                  src="../images/instagram-round.svg"
                  height="25"
                  loading="eager"
                  placeholder="none"
                />
              </a>
          </div>
          <p>2022 Programa Emprende. Todos los derechos reservados.</p>
          <b>Desarrollado por: Sidekick & Armando Meza</b>
        </div>
      </div>
    </footer>
  )
}

export default Footer