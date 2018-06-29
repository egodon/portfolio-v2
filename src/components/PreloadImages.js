import React from 'react';
import { Head } from 'react-static';

const PreloadImages = ({ section }) => {
  if (section === 'projects') {
    return (
      <Head>
        <link rel="preload" as="image" href="images/chuchat.jpg" />
        <link rel="preload" as="image" href="images/hackernews.jpg" />
        <link rel="preload" as="image" href="images/linklib.jpg" />
        <link rel="preload" as="image" href="images/scratch.png" />
        <link rel="preload" as="image" href="images/portfolio.jpg" />
      </Head>
    );
  }

  if (section === 'about') {
    return (
      <Head>
        <link rel="preload" as="image" href="images/person-at-desk.svg" />
        <link rel="preload" as="image" href="images/code.svg" />
        <link rel="preload" as="image" href="images/paintbrush.svg" />
        <link rel="preload" as="image" href="images/gray-lines.svg" />
        <link rel="preload" as="image" href="images/fuel-gauge.svg" />
      </Head>
    );
  }
};

export default PreloadImages;
