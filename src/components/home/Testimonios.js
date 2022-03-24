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

  const myRef = useRef(null);
  const [current, setCurrent] = useState(Math.round(testimonials.length / 2));
  const [carouselRef, setCarouselRef] = useState(null);
  const [items, setItems] = useState(testimonials);

  useEffect(() => {
    if (myRef.current) {
      setCarouselRef(myRef.current);
      const width = myRef.current.firstChild.getBoundingClientRect().width;
      const arr = [...items]
      const first = arr[0];
      const second = arr[1];
      const last = arr[arr.length - 1];
      const stl = arr[arr.length - 2];
      setItems([stl, last, ...arr, first, second]);
      myRef.current.scrollTo({ left: width * (Math.round(testimonials.length / 2)), behavior: 'instant' });
    }
  }, [myRef])


  const nextSlide = () => {
    let next = current + 1;
    const width = carouselRef.firstChild.getBoundingClientRect().width;

    if (next + 2 > items.length - 1) {
      const index = 1;
      carouselRef.scrollTo({ left: width * index, behavior: 'instant' });
      next = 2;
    }

    const pos = carouselRef.scrollLeft + width;
    carouselRef.scrollTo({ left: pos, behavior: 'smooth' })
    setCurrent(next);
  }

  const prevSlide = () => {
    let prev = current - 1;
    const width = carouselRef.firstChild.getBoundingClientRect().width;

    if (prev - 2 < 0) {
      console.log('lala');
      const index = items.length - 2;
      carouselRef.scrollTo({ left: width * index, behavior: 'instant' });
      prev = items.length - 3;
    }

    const pos = carouselRef.scrollLeft - width;
    carouselRef.scrollTo({ left: pos, behavior: 'smooth' });
    setCurrent(prev);
  }


  return (
    <section className="testimonials">
      <div className="testimonials__carousel" ref={myRef}>
        {
          items.map((tes, i) => (
            <div className="testimonials__item" key={tes.title + i}>
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
                {<FaChevronLeft size="30px" />}
              </button>
              <button className="next-slide controls" onClick={() => (i === current) && nextSlide()}>
                {<FaChevronRight size="30px" />}
              </button>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Testimonios;