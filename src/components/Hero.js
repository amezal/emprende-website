import React, { useEffect, useState } from 'react'
import BackgroundImage from 'gatsby-background-image';

const Hero = ({ children, img }) => {

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <BackgroundImage
      Tag="section"
      className={`hero2`}
      {...img}
      preserveStackingContext
    >
      <div className={`container hero2__content${loaded ? ' hero2__content--current' : ''}`}>
        {children}
      </div>
    </BackgroundImage>
  )
}

export default Hero