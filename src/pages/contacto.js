import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';
import { FaInstagram, FaYoutube, FaTiktok, FaFacebookSquare } from 'react-icons/fa';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import '../styles/style.scss';

const Contacto = () => {
  const data = useStaticQuery(graphql`
  query{
    wpPost(featuredImage: {node: {title: {eq: "hero-bg3"}}}) {
      featuredImage {
        node {
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 1920, 
                placeholder: BLURRED, 
                formats: [AUTO, WEBP, AVIF]
                blurredOptions:{width:100}
              )
            }
          }
        }
      }
    }
  }
  `)

  const image = getImage(data.wpPost.featuredImage.node.localFile);
  const bgImage = convertToBgImage(image);
  return (
    <Layout>
      <Hero img={bgImage}>
        <span>
          <h1>
            <b>Sé un promotor del desarrollo y proceso económico del país. </b>
            Promoviendo el emprendimiento, promovés tu marca.
          </h1>
        </span>
      </Hero>
      <section className="contacto">
        <div className="container">
          <form action="/">
            <h4><b>Envianos un mensaje</b></h4>
            <div className="separator">
              <input type="text" placeholder="Nombre" name="nombre" />
              <input type="text" placeholder="Apellido" name="apellido" />
            </div>
            <input type="text" placeholder="Correo" name="email" />
            <input type="text" placeholder="Filtro" name="filtro" />
            <textarea name="mensaje" placeholder="Mensaje" cols="30" rows="6" required=""></textarea>
            <button type="submit">Button</button>
          </form>

          <h3>emprende.programa@gmail.com</h3>

          <div className="socials">
            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/emprende.ca/"><FaInstagram size="43px" /> </a>
            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/emprender.ca"><FaFacebookSquare size="43px" /> </a>
            <a target="_blank" rel="noreferrer" href="https://www.tiktok.com/@emprende.ca"><FaTiktok size="43px" /> </a>
            <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCa7zHM8AdmiUGJhMK7f2TLw"><FaYoutube size="43px" /> </a>
          </div>

        </div>
      </section>

    </Layout>
  )
}

export default Contacto;