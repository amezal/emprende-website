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
            <b>Sé un promotor del desarrollo y progreso económico del país. </b>
            Promoviendo el emprendimiento, promovés tu marca.
          </h1>
        </span>
        <button>Button</button>
      </Hero>
      <Requisitos />
      <Beneficios />
    </Layout>
  )
}

export default FormarParte;