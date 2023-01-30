import React from 'react';
import InfiniteCarousel from 'react-leaf-carousel';

const Infinite = ({isMobile, children}) => {

  return (
    <InfiniteCarousel
      breakpoints={[
        {
          breakpoint: 568,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,

          },
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
      ]}
      lazyLoad={false}
      dots={isMobile}
      arrows={!isMobile}
      showSides={false}
      slidesToScroll={2}
      slidesToShow={4}
      scrollOnDevice={false}
      autoCycle={false}
      slidesSpacing={50}
    >
      {children}
    </InfiniteCarousel>
  );
}

export default Infinite;