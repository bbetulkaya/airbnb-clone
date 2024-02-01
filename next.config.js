module.exports = {
  images: {
    remotePatterns: [
        {
          protocol: 'https',
          hostname: 'links.papareact.com',
          pathname: '**',
        },
        {
          protocol: 'https',
          hostname: 'a0.muscache.com',
          pathname: '**',
        },
        {
          protocol: 'https',
          hostname: 'upload.wikimedia.org',
          pathname: '**',
        }
      ],
  },
};
