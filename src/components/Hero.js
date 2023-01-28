import React, { useEffect, useState } from "react";
import BackgroundImage from "gatsby-background-image";
import { getImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";

const Hero = ({ hero }) => {
  const [loaded, setLoaded] = useState(false);
  console.log(hero)
  const image = getImage(hero.image.localFile);
  const imageMobile = getImage(hero.imageMobile.localFile);
  const bgImage = convertToBgImage(image);
  const bgImageMobile = convertToBgImage(imageMobile);
  hero.sources = [
    bgImage.fluid,
    {
      ...bgImageMobile.fluid,
      media: `(max-width: 568px)`,
    },
  ]

  useEffect(() => {
    setLoaded(true);
  }, [hero]);

  return (
    <BackgroundImage
      Tag="section"
      className="hero2"
      fluid={hero.sources}
      preserveStackingContext
    >
      <div
        className={`container hero2__content${
          loaded ? " hero2__content--current" : ""
        }`}
      >
        <span>
          <h1
            dangerouslySetInnerHTML={{ __html: `${hero.ctaText}` }}
            style={{ color: hero.fontColor }}
          ></h1>
        </span>
        <button>{hero.ctaButton}</button>
      </div>
    </BackgroundImage>
  );
};

export default Hero;
