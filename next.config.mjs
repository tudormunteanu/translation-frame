// next.config.js
const nextConfig = {

  async redirects() {
    return [
      {
        source: '/',
        destination: '/start',
        permanent: true,
      },
    ]
  },
}

export default nextConfig;
