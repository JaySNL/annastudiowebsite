/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // Remove the appDir option as it's now the default in Next.js 14+
    serverComponentsExternalPackages: [],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Explicitly tell Next.js to use the older webpack configuration
  webpack: (config, { isServer }) => {
    // Force specific versions of packages
    config.resolve.alias = {
      ...config.resolve.alias,
      // Use dynamic import instead of require
      'tailwindcss': 'tailwindcss/lib/index.js',
    }
    return config
  },
}

export default nextConfig
