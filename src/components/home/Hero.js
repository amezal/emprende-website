import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Carousel from './Carousel';

const Hero = () => {
  const data = useStaticQuery(
    graphql`
      query{
        allWpPost(filter: {categories: {nodes: {elemMatch: {name: {eq: "Hero"}}}}}) {
          nodes {
            title
            content
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
      }
    `
  );

  const heros = data.allWpPost.nodes;
  return (
    <section className="hero">
      <Carousel className="hero__carousel" data={heros} />
    </section>
  )

}

export default Hero;