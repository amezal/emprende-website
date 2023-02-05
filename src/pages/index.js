import React from "react"
import 'sanitize.css';
import 'sanitize.css/forms.css';
import 'sanitize.css/typography.css';
import '../styles/style.scss';

import Layout from '../components/Layout';
import Carousel from '../components/home/Carousel';
import NuestroProposito from '../components/home/NuestroProposito';
import NuestroImpacto from '../components/home/NuestroImpacto';
import Testimonios from '../components/home/Testimonios';
import NicaraguaLoVale from "../components/home/NicaraguaLoVale";
import SEO from "../components/SEO";
import { graphql, useStaticQuery } from "gatsby";


const HomePage = () => {
  const data = useStaticQuery(
    graphql`
      query{
        allWpHero(filter: {hero: {page: {eq: "home"}}}) {
          nodes {
            hero {
              ctaButton
              ctaText
              fontColor
              page
              redirect
              image {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData(
                      width: 1920
                      placeholder: DOMINANT_COLOR
                      formats: [AUTO, WEBP, AVIF]
                      blurredOptions: {width: 50}
                      quality:100
                    )
                  }
                }
              }
              imageMobile {
                localFile {
                  childImageSharp {
                    gatsbyImageData(
                      placeholder: DOMINANT_COLOR
                      formats: [AUTO, WEBP, AVIF]
                      blurredOptions: {width: 50}
                      quality:100
                    )
                  }
                }
              }
            }
          }
        }
      }
    `
  );

  const heros = data.allWpHero.nodes.map(node => node.hero);
  const image = heros[0].image.localFile.childImageSharp.gatsbyImageData.images.fallback.src

  return (
    <Layout>
      <SEO 
        title="Inicio"
        description={heros[0].ctaText}
        image={image}
      />
      <Carousel data={heros}/>
      <NuestroProposito />
      <hr />
      <NuestroImpacto />a
      <hr />
      <NicaraguaLoVale />
      <hr />
      <Testimonios />
    </Layout>
  );
}

export default HomePage;
