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
            }
          }
        }
      }
    `
  );

  const heros = data.allWpHero.nodes.map(node => node.hero);
  console.log(heros);
  return (
    <section className="hero">
      <Carousel data={heros} />
    </section>
  )

}

export default Hero;