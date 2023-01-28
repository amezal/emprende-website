import React, { useState } from "react";
import { Link, navigate } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/">
          <StaticImage
            src="../images/Logo2.png"
            height="40"
            loading="eager"
            alt="logo"
            backgroundColor="transparent"
            placeholder="none"
          />
        </Link>
        <Link to="/sobre-nosotros">Sobre nosotros</Link>
        <Link to="/aliados">Aliados</Link>
        <Link to="/eventos">Eventos</Link>
        <Link to="/formar-parte">Forma parte</Link>
        <div className="btn">
          <button onClick={() => navigate("/contacto")}>Contactanos</button>
        </div>
      </div>
      <div className="mobile">
        <div className="bar">
          <div onClick={toggleMenu}>
            <StaticImage
              src="../images/burger.png"
              height="200"
              loading="eager"
              alt="logo"
              backgroundColor="transparent"
              placeholder="none"
            />
          </div>
          <Link to="/">
            <StaticImage
              src="../images/Logo2.png"
              height="27"
              loading="eager"
              alt="logo"
              backgroundColor="transparent"
              placeholder="none"
            />
          </Link>
          <Link to="/contacto">
            <StaticImage
              src="../images/messages.png"
              height="30"
              loading="eager"
              alt="logo"
              backgroundColor="transparent"
              placeholder="none"
            />
          </Link>
        </div>
        <div className={`menu ${showMenu ? "show" : ""}`}>
          <div className="menu-container">
            <div className="close">
              <StaticImage
                src="../images/Logo1.png"
                height="40"
                loading="eager"
                placeholder="none"
              />
              <button onClick={toggleMenu}>
                Cerrar
                <StaticImage
                  src="../images/X.png"
                  height="16"
                  loading="eager"
                  placeholder="none"
                />
              </button>
            </div>
            <div className="links">
              <Link to="/">Inicio</Link>
              <Link to="/sobre-nosotros">Sobre nosotros</Link>
              <Link to="/aliados">Aliados</Link>
              <Link to="/formar-parte">Forma parte</Link>
              <Link to="/eventos">Eventos</Link>
            </div>
            <button className="contactanos">Contactanos</button>
            <div className="socials">
              <a target="_blank" rel="noreferrer" href="https://www.facebook.com/emprender.ca">
                <StaticImage
                  src="../images/facebook-round.svg"
                  height="40"
                  loading="eager"
                  placeholder="none"
                />
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.tiktok.com/@emprende.ca">
                <StaticImage
                  src="../images/tiktok-round.svg"
                  height="40"
                  loading="eager"
                  placeholder="none"
                />
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCa7zHM8AdmiUGJhMK7f2TLw">
                <StaticImage
                  src="../images/youtube-round.svg"
                  height="40"
                  loading="eager"
                  placeholder="none"
                />
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.instagram.com/emprende.ca/">
                <StaticImage
                  src="../images/instagram-round.svg"
                  height="40"
                  loading="eager"
                  placeholder="none"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
