import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Carousel from './Carousel';

const Hero = () => {
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
  return (
    <section className="hero">
      {/* <Carousel data={heros} /> */}
    </section>
  )

}

export default Hero;