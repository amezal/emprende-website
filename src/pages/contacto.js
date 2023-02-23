import React from 'react';
import axios from 'axios';
import { useStaticQuery, graphql } from 'gatsby';
import { getImage, StaticImage } from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';
import { FaInstagram, FaYoutube, FaTiktok, FaFacebookSquare } from 'react-icons/fa';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import '../styles/style.scss';
import SEO from '../components/SEO';

const Contacto = () => {

  const data = useStaticQuery(graphql`
  query{
    wpHero(hero: {page: {eq: "contacto"}}) {
      hero {
        ctaButton
        ctaText
        fontColor
        page
        redirect
        image{
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 1920, 
                placeholder: NONE, 
                formats: [AUTO, WEBP, AVIF]
                blurredOptions:{width:50}
                quality:100
              )
            }
          }
        }
        imageMobile{
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 568, 
                placeholder: NONE, 
                formats: [AUTO, WEBP, AVIF]
                blurredOptions:{width:50}
                quality:100
              )
            }
          }
        }
      }
    }
  }
  `)
  const hero = data.wpHero.hero;
  const image = hero.image.localFile.childImageSharp.gatsbyImageData.images.fallback.src

  const callApi = async (e) => {
    e.preventDefault();

    const url = "https://formsubmit.co/ajax/emprende.programa@gmail.com"

    const params = e.target;

    const body = {
      'Nombre': `${params[0].value} ${params[0].value}`,
      'Email': params[2].value,
      '¿Cómo querés unirte?': params[3].value,
      '¿De qué manera te gustaría colaborar?': params[4].value,
      'Mensaje': params[5].value,
    }

    await axios.post(url, body, {
      headers: {
        'Content-Type': 'application/json'
      }
    })

  }

  return (
    <Layout>
      <SEO
        title="Contacto"
        description={hero.ctaText}
        image={image}
      />
      {
        data &&
        <Hero hero={hero}/>
      }
      <section className="contacto">
        <div className="container">
          <h2>¡Hagamos esto juntos!</h2>
          <p className="subtitulo">Contanos cómo querés apoyar.</p>
          <form onSubmit={callApi}>
            <h4><b>Envianos un mensaje</b></h4>
            <div className="separator">
              <input type="text" placeholder="Nombre" name="nombre" />
              <input type="text" placeholder="Apellido" name="apellido" />
            </div>
            <input type="text" placeholder="Correo" name="email" />
            <select name="select1">
              <option value="" disabled selected>¿Cómo querés unirte?</option>
              <option value="Empresa aliada">Empresa aliada</option>
              <option value="Voluntario">Voluntario</option>
            </select>
            <select name="select2">
              <option value="" disabled selected>¿De qué manera te gustaría colaborar?</option>
              <option value="Organizando ferias y eventos">
                Organizando ferias y eventos
              </option>
              <option value="Brindando espacio físico para los emprendedores">
                Brindando espacio físico para los emprendedores
              </option>
              <option value="Impartiendo webinars o talleres">
                Impartiendo webinars o talleres
              </option>
              <option value="Conectándonos con oportunidades">
                Conectándonos con oportunidades
              </option>
              <option value="Financiando económicamente las actividades">
                Financiando económicamente las actividades
              </option>
              <option value="Promoviendo nuestros productos locales">
                Promoviendo nuestros productos locales
              </option>
              <option value="Donando tu talento como voluntario">
                Donando tu talento como voluntario
              </option>
            </select>
            <textarea name="mensaje" placeholder="Mensaje" cols="30" rows="6" required=""></textarea>
            <button type="submit">Enviar solicitud</button>
          </form>

          <h3 className="email">emprende.programa@gmail.com</h3>

          <div className="socials">
          <a target="_blank" rel="noreferrer" href="https://www.facebook.com/emprender.ca">
                <StaticImage
                  className="img"
                  src="../images/facebook-round-blue.svg"
                  height="60"
                  loading="eager"
                  placeholder="none"
                />
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.tiktok.com/@emprende.ca">
                <StaticImage
                  className="img"
                  src="../images/tiktok-round-blue.svg"
                  height="60"
                  loading="eager"
                  placeholder="none"
                />
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCa7zHM8AdmiUGJhMK7f2TLw">
                <StaticImage
                  className="img"
                  src="../images/youtube-round-blue.svg"
                  height="60"
                  loading="eager"
                  placeholder="none"
                />
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.instagram.com/emprende.ca/">
                <StaticImage
                  className="img"
                  src="../images/instagram-round-blue.svg"
                  height="60"
                  loading="eager"
                  placeholder="none"
                />
              </a>
          </div>

        </div>
      </section>

    </Layout>
  )
}

export default Contacto;