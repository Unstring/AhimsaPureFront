/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enables static exports
  images: {
    unoptimized: true, // Required for static export
  },
  // Since this is static, we need to disable server-side features
  trailingSlash: true,
}

module.exports = nextConfig 