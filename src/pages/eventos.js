import React, { useEffect, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import SEO from '../components/SEO';
import ProximosEventos from '../components/eventos/ProximosEventos';
import Calendario from '../components/eventos/Calendario';
import '../styles/style.scss';
import GaleriaEventos from '../components/eventos/GaleriaEventos';


const Eventos = () => {

  const data = useStaticQuery(graphql`
  query{
    wpHero(hero: {page: {eq: "eventos"}}) {
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
  `)
  const hero = data.wpHero.hero;
  const image = hero.image.localFile.childImageSharp.gatsbyImageData.images.fallback.src

  return (
    <Layout>
      <SEO
        title="Eventos" 
        description={hero.ctaText}
        image={image}
      />
      {
        data &&
        <Hero hero={hero}/>
      }
      <Calendario />
      <hr />
      <GaleriaEventos />
    </Layout>
  )
}

export default Eventos;