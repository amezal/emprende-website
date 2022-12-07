import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

const NicaraguaLoVale = () => {
  const data = useStaticQuery(
    graphql`
      query{
        allWpMediaItem(
          limit: 3
          filter: {slug: {regex: "/lovale/"}}
          sort: {fields: id, order: ASC}
        ) {
          edges {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    placeholder: DOMINANT_COLOR
                    formats: [AUTO, WEBP, AVIF]
                    blurredOptions: {width: 50}
                    quality:100)
                }
              }
            }
          }
        }
      }
    `
  );
  const links = ['https://www.instagram.com/p/Cj-2vmCrsYS/', 'https://www.instagram.com/p/Cih0JerrTiH/', 'https://www.instagram.com/p/Ci3f1gMLxdM/']
  const images = data.allWpMediaItem.edges.map(edge => edge.node.localFile.childImageSharp.gatsbyImageData);

  return (
    <section className="nicaragua-lo-vale">
      <div className="container">
        <h2>#Nicaragua<span className="lo-vale">LoVale</span></h2>
        <p>Te contamos cuál es nuestro propósito y lo que hacemos para lograrlo.</p>
        <div className="images">
          {
            images.map((image, i) => (
              <a href={links[i]} key={i}>
                <GatsbyImage
                  image={image}
                  className="image"
                  width="300px"
                  height="284px"
                  />
              </a>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default NicaraguaLoVale;