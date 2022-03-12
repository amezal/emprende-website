import React, { useState, useRef, useEffect } from 'react'
import { getImage } from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';
import BackgroundImage from 'gatsby-background-image';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Carousel = ({ children, className, data }) => {

  const [heros, setHeros] = useState(data.map(hero => {
    const image = getImage(hero.featuredImage.node.localFile);
    const bgImage = convertToBgImage(image);
    return {
      h1: hero.content,
      cta: hero.title,
      img: bgImage,
    }
  }))

  const [current, setCurrent] = useState(1);
  const [carouselRef, setCarouselRef] = useState(null);
  const myRef = useRef(null);

  useEffect(() => {
    const id = setInterval(nextSlide, 4000);
    return () => clearInterval(id);
  })

  useEffect(() => {
    if (myRef.current) {
      setCarouselRef(myRef.current);
      const last = heros[heros.length - 1];
      const arr = [last, ...heros];
      setHeros(arr);
      myRef.current.scrollTop = myRef.current.children[1].getBoundingClientRect().height;
    }
  }, [myRef])


  const nextSlide = () => {
    let next = current + 1;
    const child = carouselRef.children[0].getBoundingClientRect();
    if (next + 1 > heros.length - 1) {
      carouselRef.scrollTo({ top: child.height * (current - 1), behavior: 'instant' });
      const newHeros = [...heros, heros[current - (data.length % 2)]];
      newHeros.shift();
      setHeros(newHeros);
      next = current;
    }
    carouselRef.scrollTo({ top: child.height * next, behavior: 'smooth' });
    setCurrent(next);
  }

  const prevSlide = () => {
    let prev = current - 1;
    const child = carouselRef.children[0].getBoundingClientRect();
    if (prev - 1 < 0) {
      carouselRef.scrollTo({ top: child.height * (current + 1), behavior: 'instant' });
      const newHeros = [heros[current + (data.length % 2)], ...heros];
      newHeros.pop();
      setHeros(newHeros);
      prev = current;
    }
    carouselRef.scrollTo({ top: child.height * prev, behavior: 'smooth' });
    setCurrent(prev);
  }

  const goToSlide = (title) => {
    const i = heros.findIndex(hero => (
      hero.cta === title
    ))
    setCurrent(i);
    const child = carouselRef.children[0].getBoundingClientRect();
    carouselRef.scrollTo({ top: child.height * i, behavior: 'smooth' });
  }

  return (
    <>
      <div className={`${className} ${carouselRef && `${className}__smooth`}`} ref={myRef}>
        {heros.map((hero, i) => (
          <BackgroundImage
            Tag="div"
            className={`${className}__bg`}
            {...hero.img}
            id={hero.cta + i}
            key={hero.cta + i}
            preserveStackingContext
          >
            <div className={`container ${className}__content`}>
              <span dangerouslySetInnerHTML={{ __html: `${hero.h1}` }}></span>
              <button>{hero.cta}</button>
            </div>
          </BackgroundImage>
        ))}
      </div>

      <div className="controls">
        <button className="controls__prev" onClick={prevSlide}><FaChevronUp size="1.5rem" /></button>
        {data.map((hero, i) => (
          <button onClick={() => goToSlide(hero.title)}
            key={i}
            className={`controls__slider${hero.title === heros[current].cta ? '--current' : ''}`}
          >
          </button>
        ))}
        <button className="controls__next" onClick={nextSlide}><FaChevronDown size="1.5rem" /></button>
      </div>
    </>
  )
}

export default Carousel