import React from 'react';
import { Head } from 'react-static';

const PrefetchImages = () => (
  <Head>
    <link rel="prefetch" href="images/chuchat.jpg" />
    <link rel="prefetch" href="images/hackernews.png" />
    <link rel="prefetch" href="images/linklib.jpg" />
    <link rel="prefetch" href="images/scratch.png" />
    <link rel="prefetch" href="images/portfolio.png" />
  </Head>
);

export default PrefetchImages;
