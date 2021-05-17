import React from 'react'
import { NextSeo } from 'next-seo'

const Seo = ({ title, url, imageUrl = '', description = '' }) => {
  return (
    <NextSeo
      title={title}
      description={description}
      canonical=""
      openGraph={{
        url: `${url}`,
        title,
        type: 'website',
        description: '',
        images: [
          {
            url: imageUrl,
            width: 800,
            height: 600,
            alt: 'Nasze logo',
          },
          {
            url: imageUrl,
            width: 900,
            height: 800,
            alt: 'Nasze logo',
          },
        ],
        site_name: 'Cosmo PK',
      }}
      twitter={{
        handle: '@handle',
        site: '@site',
        cardType: 'summary_large_image',
      }}
    />
  )
}

export default Seo
