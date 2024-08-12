/** @type {import('next').NextConfig} */

import { withContentlayer } from 'next-contentlayer';

const nextConfig = {
  images: {
    domains: ['picsum.photos', 'images.unsplash.com', 'assets.aceternity.com'], // Add any other domains you plan to use here
  },
};

export default withContentlayer(nextConfig);
