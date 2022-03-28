import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';
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
    wpPost(featuredImage: {node: {title: {eq: "hero-bg2"}}}) {
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
            <b>Sé un promotor del desarrollo y proceso económico del país. </b>
            Promoviendo el emprendimiento, promovés tu marca.
          </h1>
        </span>
        <button>Apoyar ahora</button>
      </Hero>

      <Beneficios />
      <ComoApoyar />
      <AliadosEmprende />
      <Voluntarios />

    </Layout>
  )
}

export default Aliados