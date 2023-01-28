import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React, { useState } from 'react';

function GaleriaEventos() {

  const [selectedImage, setSelectedImage] = useState(0)

  const data = useStaticQuery(graphql`
    query MyQuery {
      allWpMediaItem(
        filter: {title: {regex: "/galeria-eventos/"}}
        sort: {fields: title, order: ASC}
      ) {
        nodes {
          altText
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

  const images = data.allWpMediaItem.nodes.map(node => ({
    src: node.localFile.childImageSharp.gatsbyImageData,
    alt: node.altText || 'Evento'
  }))

  const changeSelectedImage = (e) => {
    // TODO
  }

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
              image={images[selectedImage].src}
              title={images[selectedImage].alt}
              alt={images[selectedImage].alt}
              loading="eager"
            />
          </div>
          <div className="scroll">
            {
              data && images.map((image, index) => (
                <div onClick={() => setSelectedImage(index)} key={index}>
                  <GatsbyImage
                    className={`scroll__image ${index === selectedImage ? 'selected': ''}`}
                    image={image.src}
                    title={image.alt}
                    alt={image.alt}
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