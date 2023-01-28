import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
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
    wpHero(hero: {page: {eq: "aliados"}}) {
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
      {
        data &&
        <Hero hero={hero}/>
      }
      <Beneficios />
      <hr />
      <ComoApoyar />
      <hr />
      <AliadosEmprende />
      <Voluntarios />

    </Layout>
  )
}

export default Aliados