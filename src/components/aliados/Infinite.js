import React from 'react';
import InfiniteCarousel from 'react-leaf-carousel';

const Infinite = ({children}) => {
  return (
    <InfiniteCarousel
      breakpoints={[
        {
          breakpoint: 200,
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
      dots={false}
      showSides={false}
      // sidesOpacity={0.2}
      // sideSize={0.1}
      slidesToScroll={2}
      slidesToShow={4}
      scrollOnDevice={true}
      autoCycle={false}
      slidesSpacing={50}
    >
      {children}
    </InfiniteCarousel>
  );
}

export default Infinite;