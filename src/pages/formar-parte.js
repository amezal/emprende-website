import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import { useStaticQuery, graphql } from 'gatsby';
import Requisitos from '../components/formar-parte/Requisitos';
import Beneficios from '../components/formar-parte/Beneficios';
import '../styles/style.scss';
import SEO from '../components/SEO';

const FormarParte = () => {

  const data = useStaticQuery(graphql`
  query{
    wpHero(hero: {page: {eq: "formar-parte"}}) {
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

  return (
    <Layout>
      <SEO title="Formar Parte - Emprende" description="AAA"/>
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