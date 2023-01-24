import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React, { useState } from 'react';

function GaleriaEventos() {

  const [selectedImage, setSelectedImage] = useState(0)

  const data = useStaticQuery(graphql`
    query MyQuery {
      allWpMediaItem(
        filter: {title: {regex: "/eventos/"}}
        sort: {fields: title, order: ASC}
      ) {
        nodes {
          title
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `);

  const images = data.allWpMediaItem.nodes.map(node => (
    node.localFile.childImageSharp.gatsbyImageData
  ))

  const changeSelectedImage = (e) => {console.log(e)}

  return (
    <section className="galeria-eventos">
      <div className="container">
        <h2>Eventos emprende</h2>
        <p className="subtitulo">
          Disfrutá de marcas locales en un ambiente lleno de talento y creatividad.
        </p>
        <div className="galeria">
          <div className="main">
            <GatsbyImage
              className="main__image"
              image={images[selectedImage]}
              atl="evento"
            />
          </div>
          <div className="scroll">
            {
              data && images.map((image, index) => (
                <div onClick={() => setSelectedImage(index)} key={index}>
                  <GatsbyImage
                    className={`scroll__image ${index === selectedImage ? 'selected': ''}`}
                    image={image}
                    />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default GaleriaEventos