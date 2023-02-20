import React, { useState, useRef, useEffect } from 'react'
import { getImage } from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';
import BackgroundImage from 'gatsby-background-image';
import { navigate } from 'gatsby';
import smoothScroll from '../../utils/smoothScroll';

const Carousel = ({ data }) => {
  const [heros, setHeros] = useState(data.map(hero => {
    const image = getImage(hero.image.localFile);
    const imageMobile = getImage(hero.imageMobile.localFile);
    const bgImage = convertToBgImage(image);
    const bgImageMobile = convertToBgImage(imageMobile);
    const sources = [
      bgImage.fluid,
      {
        ...bgImageMobile.fluid,
        media: `(max-width: 568px)`,
      },
    ]
    return {
      h1: hero.ctaText,
      cta: hero.ctaButton,
      fc: hero.fontColor,
      sources: sources,
      alt: hero.image.altText,
      redirect: hero.redirect
    }
  }))

  const [current, setCurrent] = useState(1);
  const [carouselRef, setCarouselRef] = useState(null);
  const myRef = useRef(null);

  //autoplay
  useEffect(() => {
    // const id = setInterval(nextSlide, 7000);
    // return () => clearInterval(id);
  })

  useEffect(() => {
    if (myRef.current) {
      setCarouselRef(myRef.current);
      //Copy last hero item to the start of the array so it can loop around
      const last = heros[heros.length - 1];
      const arr = [last, ...heros];
      setHeros(arr);
      //Scroll to the first hero item (index 1 in array)
      myRef.current.scrollLeft = myRef.current.children[0].getBoundingClientRect().width;
    }
  }, [myRef])


  const nextSlide = () => {
    let next = current + 1;
    const child = carouselRef.children[0].getBoundingClientRect();

    /*Scroll instantly to the copied item when it gets
    to the last item, so the loop is seamless */

    if (next > heros.length - 1) {
      carouselRef.scrollTo({ left: 0, behavior: 'instant' });
      next = 1;
    }

    /* Scroll smoothly to the next item in the carousel */
    carouselRef.scrollTo({ left: child.width * next, behavior: 'smooth' });
    setCurrent(next);
  }

  const goToSlide = (i) => {
    const width = carouselRef.children[0].getBoundingClientRect().width;
    /* Since an item was shifted into the start of the array, we skip 1 index */
    // carouselRef.scrollTo({ left: child.width * (i + 1), behavior: 'smooth' });
    const to = width * (i + 1);
    const duration = 100; 
    smoothScroll(carouselRef, to, duration);
    setCurrent(i + 1);
  }
  console.log(heros)
  return (
    <section className="hero">
      <div className={`hero__carousel ${carouselRef && `hero__carousel__smooth`}`} ref={myRef}>
        {heros.map((hero, i) => (
          <BackgroundImage
            Tag="div"
            className={`hero__carousel__bg`}
            id={hero.cta + i}
            key={hero.cta + i}
            fluid={hero.sources}
            title={hero.alt}
            alt={hero.alt}
            preserveStackingContext
          >
            <div 
              className={`container hero__carousel__content ${`hero__carousel__content${current === i ? '--current' : ''}`}`}
              title={hero.alt}
            >
              <span title="">
                <h1 dangerouslySetInnerHTML={{ __html: `${hero.h1}` }} style={{ color: hero.fc }}></h1>
              </span>
              <span className="cta-container" title="">
                <button 
                  onClick={() => navigate(hero.redirect)}
                >
                  {hero.cta}
                  </button>
              </span>
            </div>
          </BackgroundImage>
        ))}
      </div>

      <div className="controls">
        {data.map((hero, i) => (
          <button onClick={() => goToSlide(i)}
            key={i}
            className={`controls__slider${i + 1 === current ? '--current' : ''}`}
          >
          </button>
        ))}
      </div>
    </section>
  )
}

export default Carousel