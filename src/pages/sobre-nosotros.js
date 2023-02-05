import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import { useStaticQuery, graphql } from 'gatsby';
import NuestrosObjetivos from '../components/sobre-nosotros/NuestrosObjetivos';
import Equipo from '../components/sobre-nosotros/Equipo';
import '../styles/style.scss';
import SEO from '../components/SEO';

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
  `);
  const hero = data.wpHero.hero;
  const image = hero.image.localFile.childImageSharp.gatsbyImageData.images.fallback.src
  
  return (
    <Layout>
      <SEO
        title="Sobre Nosotros"
        description={hero.ctaText}
        image={image}
      />
      {
        data &&
        <Hero hero={hero}/>
      }
      <NuestrosObjetivos />
      <hr />
      <Equipo />
    </Layout>
  )
}

export default SobreNosotros;