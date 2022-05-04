import React, { useEffect, useState, useRef } from 'react'

const Equipo = () => {

  const equipo = [
    {
      img: 'https://picsum.photos/240/240',
      name: 'Petrona',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing.'
    },
    {
      img: 'https://picsum.photos/240/240',
      name: 'Aasdfa',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing.'
    },
    {
      img: 'https://picsum.photos/240/240',
      name: 'Luisita',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing.'
    },
    {
      img: 'https://picsum.photos/240/240',
      name: 'Chepita',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing.'
    },
  ]
  const [active, setActive] = useState(0);
  const [visibleItems, setVisibleItems] = useState(3);
  const [numberOfPages, setNumberOfPages] = useState(2);
  const carouselRef = useRef(null);

  const setSlides = () => {
    let visible = 3;
    if (window.outerWidth <= 568) { visible = 1; console.log(equipo.length - visible + 1) }
    else if (window.outerWidth <= 1024) { visible = 2 }
    else { visible = 3 }

    //number of pages
    const nop = equipo.length - visible + 1;
    setVisibleItems(visible);
    setNumberOfPages(nop);
  }

  useEffect(() => {
    window.addEventListener('resize', setSlides);
    return (() => window.removeEventListener('resize', setSlides));
  }, [])

  const goToSlide = (i) => {
    setActive(i);
    const width = carouselRef.current.children[0].getBoundingClientRect().width;
    carouselRef.current.scrollTo({ left: width * i, behavior: 'smooth' })

  }


  return (
    <section className="equipo">
      <div className="container">
        <h2>El equipo</h2>
        <div className="equipo__carousel" ref={carouselRef}>
          {equipo.map(integrante => (
            <div className="integrante" key={integrante.name}>
              <img
                src={integrante.img}
                alt={integrante.name}
              />
              <p>{integrante.text}</p>
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