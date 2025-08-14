/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "frame-src 'self' https://*.youtube.com https://*.youtube-nocookie.com https://physiomaps.com; default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://*.youtube.com https://*.youtube-nocookie.com https://*.googlevideo.com https://*.gstatic.com;"
          }
        ]
      }
    ]
  }
};

export default nextConfig;