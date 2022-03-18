import React, { useEffect, useState, useRef } from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonios = () => {

  const data = useStaticQuery(graphql`
    {
      allImageSharp(filter: {original: {src: {regex: "/testimonial/"}}}) {
        nodes {
          gatsbyImageData(
            width: 165
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            )
        }
      }
    }
  `)

  const images = data.allImageSharp.nodes;

  const testimonials = [
    {
      title: 'JG Desserts',
      img: images[0].gatsbyImageData,
      stars: 5,
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing
      elit, sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua. Ut enim ad minim veniam, quis
      nostrud exercitation ullamco.`,
      memberSince: 2019,
    },
    {
      title: 'Viña Mía',
      img: images[2].gatsbyImageData,
      stars: 4,
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing
      elit, sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua. Ut enim ad minim veniam, quis
      nostrud exercitation ullamco.`,
      memberSince: 2020,
    },
    {
      title: 'Buñuelitos',
      img: images[1].gatsbyImageData,
      stars: 5,
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing
      elit, sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua. Ut enim ad minim veniam, quis
      nostrud exercitation ullamco.`,
      memberSince: 2021,
    },
  ]

  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      setCarouselRef(ref.current);
      const width = ref.current.firstChild.getBoundingClientRect().width;
      ref.current.scrollLeft = width * (Math.round(testimonials.length / 2) - 1);
    }
  }, [ref])

  const [current, setCurrent] = useState(Math.round(testimonials.length / 2) - 1);
  const [carouselRef, setCarouselRef] = useState(null);

  const nextSlide = () => {
    carouselRef.scrollLeft += carouselRef.firstChild.getBoundingClientRect().width;
    setCurrent(current + 1);
  }

  const prevSlide = () => {
    carouselRef.scrollLeft -= carouselRef.firstChild.getBoundingClientRect().width;
    setCurrent(current - 1);
  }


  return (
    <section className="testimonials">
      <div className="testimonials__carousel" ref={ref}>
        {
          testimonials.map((tes, i) => (
            <div className="testimonials__item" key={tes.title}>
              <GatsbyImage
                image={tes.img}
                alt={tes.title}
                className="testimonials__item__img"
                width="165px"
                height="165px"
              />
              <div className="testimonials__item__stars">
                {[...Array(5)].map((star, i) => (
                  <FaStar size="40px" key={i} />
                ))}
              </div>

              <p>{tes.text}</p>
              <p>Miembro desde <b>{tes.memberSince}</b></p>

              <button className="prev-slide controls" onClick={() => (i === current) && prevSlide()}>
                {i > 0 && <FaChevronLeft size="30px" />}
              </button>
              <button className="next-slide controls" onClick={() => (i === current) && nextSlide()}>
                {i < testimonials.length - 1 && <FaChevronRight size="30px" />}
              </button>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Testimonios;