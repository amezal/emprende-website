import React from 'react'
import { Helmet } from 'react-helmet';

const SEO = ({ title, description, image }) => {
  const keywords = ['Emprende', 'Emprendimientos', 'Programa Emprende',
  'Programa Emprende', 'Programa Emprende Nicaragua', 'Emprendimientos Nicaragua',
  'Emprendimiento']
  const url = 'https://emprendeca.com'
  image = `${url}${image}`
  description = description.replace(/<br\s*\/>/g, '');
  return (
    <Helmet 
      title={`${title} | Programa Emprende`} 
      meta={[
        { name: `description`, content: description },
        { name: `keywords`, content:  keywords.toString()},
        { name: `robots`, content:  'index, follow'},
        { name: `image`, content: image },
        { name: `og:locale`, content: 'es_NI' },
        { name: `og:type`, content: 'website' },
        { name: `og:site_name`, content: 'Programa Emprende' },
        { name: `og:title`, content: title },
        { name: `og:description`, content: description },
        { name: `og:url`, content: 'https://emprendeca.com/' },
        { name: `og:image`, content: image },
        { name: `twitter:title`, content: title },
        { name: `twitter:description`, content: description },
        { name: `twitter:image`, content: image },
      ]}
    />
  )
}

export default SEO;