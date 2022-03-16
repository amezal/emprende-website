import React, { useState, useEffect } from 'react'
import { StaticImage } from 'gatsby-plugin-image';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonios = () => {


  return (
    <section className="testimonials">
      <div className="testimonials__carousel">
        <div className="testimonials__item">
          <StaticImage src="../../images/testimonial1.png"
            alt=""
            className="testimonials__item__img"
          />
          <div className="testimonials__item__stars">
            {[...Array(5)].map((star, i) => (
              <FaStar size="40px" />
            ))}
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco.
          </p>
          <p>Miembro desde <b>2019</b></p>
          <button className="prev-slide controls"><FaChevronLeft size="30px" /></button>
          <button className="next-slide controls"><FaChevronRight size="30px" /></button>
        </div>
      </div>
    </section>
  )
}

export default Testimonios;