import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import { useStaticQuery, graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';
import NuestraMision from '../components/sobre-nosotros/NuestraMision';
import Equipo from '../components/sobre-nosotros/Equipo';

const SobreNosotros = () => {

  const data = useStaticQuery(graphql`
  query{
    wpPost(featuredImage: {node: {title: {eq: "hero-bg3"}}}) {
      featuredImage {
        node {
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

  const image = getImage(data.wpPost.featuredImage.node.localFile);
  const bgImage = convertToBgImage(image);
  return (
    <Layout>
      <Hero img={bgImage}>
        <span>
          <h1>
            <b>PROGRAMA EMPRENDE</b> es una plataforma que
            apoya a los emprendedores nicaragüenses que
            están produciendo localmente
          </h1>
        </span>
        <button>Button</button>
      </Hero>
      <NuestraMision />
      <Equipo />
    </Layout>
  )
}

export default SobreNosotros;