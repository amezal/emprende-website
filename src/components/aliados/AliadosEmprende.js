import React, { useEffect, useState } from "react";
import loadable from "@loadable/component";
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';


const Carousel = loadable(() => import("./Infinite"));

const AliadosEmprende = () => {
  const data = useStaticQuery(
    graphql`
      query{
        allWpAliado {
          edges {
            node {
              id
              title
              featuredImage {
                node {
                  localFile {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  );
  const aliados = data.allWpAliado.edges.map((edge) => ({
    title: edge.title,
    image: edge.node.featuredImage.node.localFile.childImageSharp.gatsbyImageData,
  }));


  return (
    <section className="aliados-emprende">
      <div className="container">
        <h2>Empresas Aliadas</h2>
      </div>
      <div className="carousel">
        {data && (
          <Carousel>
            {aliados.map((aliado) => (
              <GatsbyImage
                image={aliado.image}
                className="image"
                alt={aliado.title}
                width="300px"
                height="284px"
                loading="eager"
              />
            ))}
          </Carousel>
        )}
      </div>

      <button className="cta">Más información</button>
    </section>
  );
};

export default AliadosEmprende;
