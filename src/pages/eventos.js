import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useStaticQuery, graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import ProximosEventos from '../components/eventos/ProximosEventos';
import Calendario from '../components/eventos/Calendario';
import InstagramPosts from '../components/eventos/InstagramPosts';
import '../styles/style.scss';
import GaleriaEventos from '../components/eventos/GaleriaEventos';


const Eventos = () => {

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

  return (
    <Layout>
      {
        data &&
        <Hero hero={hero}/>
      }      <Calendario />
      <hr />
      <GaleriaEventos />
    </Layout>
  )
}

export default Eventos;