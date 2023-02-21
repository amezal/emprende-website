import React, { useEffect, useState, useRef } from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import smoothScroll from '../../utils/smoothScroll';

const Equipo = () => {

  const data = useStaticQuery(graphql`
  query {
    allWpMiembro(sort: {fields: date}) {
      nodes {
        equipo {
          name
          title
          text
          img {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 140
                  height: 140
                  placeholder: DOMINANT_COLOR
                  formats: [AUTO, WEBP, AVIF]
                  blurredOptions: {width: 50}
                  quality: 100
                )
              }
            }
          }
        }
      }
    }
  }
  `)

  const equipo = data.allWpMiembro.nodes.map(node => node.equipo)
  const [active, setActive] = useState(0);
  const [visibleItems, setVisibleItems] = useState(3);
  const [numberOfPages, setNumberOfPages] = useState(2);
  const carouselRef = useRef(null);

  const setSlides = () => {
    let visible = 3;
    if (window.outerWidth <= 568) {
      visible = 1;
    } else if (window.outerWidth <= 1024) {
      visible = 2;
    } else {
      visible = 3;
    }

    //number of pages
    const nop = equipo.length - visible + 1;
    setVisibleItems(visible);
    setNumberOfPages(nop);
  }

  useEffect(() => {
    window.addEventListener('resize', setSlides);
    setSlides();
    return (() => window.removeEventListener('resize', setSlides));
  })

  const goToSlide = (i) => {
    setActive(i);
    const width = carouselRef.current.children[0].getBoundingClientRect().width;
    const to = width * i;
    const duration = 600; 
    smoothScroll(carouselRef.current, to, duration);
  }


  return (
    <section className="equipo">
      <div className="container">
        <h2>Equipo Emprende</h2>
        <p className="subtitulo">
          Profesionales voluntarios en diferentes áreas, trabajando
          en pro del desarrollo del ecosistema emprendedor.
        </p>
        <div className="equipo__carousel" ref={carouselRef}>
          {equipo.map(integrante => (
            <div className="integrante" key={integrante.name}>
              <GatsbyImage
                image={integrante.img.localFile.childImageSharp.gatsbyImageData}
                title={integrante.name}
                alt={integrante.name}
                className="integrante__img"
                width={175}
                height={175}
              />
              <div className="integrante__text">
                <p>
                  <b>{integrante.name}</b>
                </p>
                <p>
                  <span>{integrante.title}</span>
                </p>
                <p>{integrante.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="equipo__controls">
          {
            [...Array(numberOfPages)].map((btn, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={active === i ? 'active' : ''}
              >
                <div></div>
              </button>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Equipo