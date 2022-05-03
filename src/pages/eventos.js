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

  const image = getImage(hero.image.localFile);
  const bgImage = convertToBgImage(image);

  const [events, setEvents] = useState(null);

  useEffect(async () => {
    const url = 'https://script.google.com/macros/s/AKfycbyllI0NWsGKaFmGA8kFXgmzaajSy4Seq5hUIn6BRVoZTDS56jSFmNRHqqPziWxEGyA-9Q/exec';
    const e = await axios.get(url)
    const { data } = e;
    setEvents(data);
  }, [])


  return (
    <Layout>
      <Hero img={bgImage}>
        <span>
          <h1 dangerouslySetInnerHTML={{ __html: `${hero.ctaText}` }} style={{ color: hero.fontColor }}>
          </h1>
        </span>
        <button>{hero.ctaButton}</button>
      </Hero>
      {events &&
        <>
          <ProximosEventos event={events[0]} />
          <Calendario events={events} />
        </>
      }
      <InstagramPosts />
    </Layout>
  )
}

export default Eventos;