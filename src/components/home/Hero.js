import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';
import BackgroundImage from 'gatsby-background-image';

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

  const image = getImage(data.allWpPost.nodes[0].featuredImage.node.localFile)
  const bgImage = convertToBgImage(image);
  const h1 = data.allWpPost.nodes[0].content;
  const cta = data.allWpPost.nodes[0].title;
  console.log(h1);
  return (
    <BackgroundImage
      Tag="section"
      className="hero"
      {...bgImage}
      preserveStackingContext
    >
      <div className="container" dangerouslySetInnerHTML={{
        __html: `
        ${h1}
        <button>${cta}</button>
        `}}>
      </div>
    </BackgroundImage>
  )

}

export default Hero;