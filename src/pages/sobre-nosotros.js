import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import { useStaticQuery, graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';
import NuestraMision from '../components/sobre-nosotros/NuestraMision';
import Equipo from '../components/sobre-nosotros/Equipo';
import '../styles/style.scss';

const SobreNosotros = () => {

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
                  placeholder: NONE, 
                  formats: [AUTO, WEBP, AVIF]
                  blurredOptions:{width:100}
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
      <NuestraMision />
      <Equipo />
    </Layout>
  )
}

export default SobreNosotros;