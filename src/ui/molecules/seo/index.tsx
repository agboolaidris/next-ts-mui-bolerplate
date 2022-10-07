import React from 'react';
import { NextSeo } from 'next-seo';

interface Props {
  title?: string;
  description?: string;
  urlPath?: string;
}

function SEO({ title, description, urlPath }: Props) {
  const url = urlPath
    ? process.env.NEXT_PUBLIC_URL + '/' + urlPath
    : process.env.NEXT_PUBLIC_URL;
  const Idescription =
    description ||
    `A software engineer and fashion enthusiast residing in Lagos, Nigeria. I
  am highly experienced in developing secure and dynamic applications.`;
  const Ititle = title || 'Home | Agboola Idris';
  return (
    <NextSeo
      title={Ititle}
      description={Idescription}
      canonical={url}
      openGraph={{
        url: url,
        title: Ititle,
        description: Idescription,
        images: [
          {
            url: process.env.NEXT_PUBLIC_URL + '/icon.png',
            width: 800,
            height: 600,
            alt: 'Og Image Alt',
            type: 'image/png',
          },
        ],
        site_name: 'Agboola Idris Portfolio',
      }}
      twitter={{
        handle: '@handle',
        site: '@site',
        cardType: 'summary_large_image',
      }}
      additionalMetaTags={[
        {
          name: 'viewport',
          content: 'initial-scale=1, width=device-width',
        },
      ]}
    />
  );
}

export default SEO;
