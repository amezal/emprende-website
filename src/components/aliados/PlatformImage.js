import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

const PlatformImage = ({platform}) => {

  let img = null;

  switch (platform) {
    case 'instagram':
      img = <StaticImage
        src='../../images/instagram.png'
        width={30}
        height={30}
      />
      break;
    case 'behance':
      img = <StaticImage
        src='../../images/behance.png'
        width={30}
        height={30}
      />
      break;
    default:
      img = <StaticImage
        src='../../images/website.png'
        width={30}
        height={30}
      />
      break;
  }

  return img
}

export default PlatformImage