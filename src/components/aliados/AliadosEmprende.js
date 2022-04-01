import React from 'react';
import InfiniteCarousel from 'react-leaf-carousel';

const AliadosEmprende = () => {
  return (
    <section className="aliados-emprende">
      <div className="container">
        <h2>Aliados Emprende</h2>
      </div>
      <div className="carousel">
        <InfiniteCarousel
          breakpoints={[
            {
              breakpoint: 200,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            }
          ]}
          lazyLoad={false}
          dots={false}
          showSides={false}
          // sidesOpacity={0.2}
          // sideSize={0.1}
          slidesToScroll={2}
          slidesToShow={4}
          scrollOnDevice={true}
          autoCycle={true}
          slidesSpacing={50}
        >
          <div>
            <img alt="" src="https://picsum.photos/150" />
          </div>
          <div>
            <img alt="" src="https://picsum.photos/150" />
          </div>
          <div>
            <img alt="" src="https://picsum.photos/150" />
          </div>
          <div>
            <img alt="" src="https://picsum.photos/150" />
          </div>
          <div>
            <img alt="" src="https://picsum.photos/150" />
          </div>
        </InfiniteCarousel>
      </div>
      {/* <div className="aliados-emprende__list">
          <img src="https://picsum.photos/151/150" alt="aliado" className="aliado" />
          <img src="https://picsum.photos/151/151" alt="aliado" className="aliado" />
          <img src="https://picsum.photos/150/150" alt="aliado" className="aliado" />
          <img src="https://picsum.photos/150/151" alt="aliado" className="aliado" />
          <img src="https://picsum.photos/151/150" alt="aliado" className="aliado" />
        </div> */}
    </section>
  )
}

export default AliadosEmprende;