import React from 'react';
import { Link, navigate } from 'gatsby';
import Logo from '../images/Logo2.png';
import { StaticImage } from 'gatsby-plugin-image';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/">
          <StaticImage src="../images/Logo2.png" height="40"
            loading="eager" alt="logo" backgroundColor='transparent'
            placeholder='none' />
        </Link>
        <Link to="/sobre-nosotros">Sobre nosotros</Link>
        <Link to="/aliados">Aliados</Link>
        <Link to="/eventos">Eventos</Link>
        <Link to="/formar-parte">Forma parte</Link>
        <div className="btn">
          <button onClick={() => navigate('/contacto')}>Contactanos</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar