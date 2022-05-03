import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Beneficios from '../components/aliados/Beneficios';
import ComoApoyar from '../components/aliados/ComoApoyar';
import AliadosEmprende from '../components/aliados/AliadosEmprende';
import Voluntarios from '../components/aliados/Voluntarios';
import '../styles/style.scss';

const Aliados = () => {

  const data = useStaticQuery(graphql`
  query{
    wpHero(hero: {page: {eq: "sobre-nosotros"}}) {
      hero {
        ctaButton
        ctaText
        fontColor
        page
        image{
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
  const hero = data.wpHero.hero;

  const image = getImage(hero.image.localFile);
  const bgImage = convertToBgImage(image);
  return (
    <Layout>
      <Hero img={bgImage}>
        <span>
          <h1 dangerouslySetInnerHTML={{ __html: `${hero.ctaText}` }} style={{ color: hero.fontColor }}>
          </h1>
        </span>
        <button>{hero.ctaButton}</button>
      </Hero>

      <Beneficios />
      <ComoApoyar />
      <AliadosEmprende />
      <Voluntarios />

    </Layout>
  )
}

export default Aliados