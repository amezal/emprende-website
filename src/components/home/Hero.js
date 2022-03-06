import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const Hero = () => {
  const data = useStaticQuery(
    graphql`
      query{
        allWpMediaItem {
          nodes {
            localFile {
              childImageSharp {
                fluid(quality: 90, maxWidth: 1920) {
                  ...GatsbyImageSharpFluid_withWebp
                  originalName
                }
              }
            }
          }
        }
      }
    `
  );

  const imageData = data.allWpMediaItem.nodes[0].localFile.childImageSharp.fluid;

  return (
    <BackgroundImage
      Tag="section"
      className="hero"
      fluid={imageData}
    >
      <div className="container">
        <h1>Promoviendo el <br /> talento local</h1>
        <button>Button</button>
      </div>
    </BackgroundImage>
  )

}

export default Hero;