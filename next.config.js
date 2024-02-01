module.exports = {
  images: {
    remotePatterns: [
        {
          protocol: 'https',
          hostname: 'links.papareact.com',
          pathname: '**',
        },
        {
          protocol: 'http',
          hostname: 'links.papareact.com',
          pathname: '**',
        },
      ],
  },
};
