import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import { useStaticQuery, graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';
import Requisitos from '../components/formar-parte/Requisitos';
import Beneficios from '../components/formar-parte/Beneficios';
import '../styles/style.scss';

const FormarParte = () => {

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
      }
      <Requisitos />
      <hr />
      <Beneficios />
    </Layout>
  )
}

export default FormarParte;