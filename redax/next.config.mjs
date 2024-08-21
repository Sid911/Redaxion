/** @type {import('next').NextConfig} */
const nextConfig = { images: { unoptimized: true } };

export default nextConfig;
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   // Only apply 'export' for production builds
//   ...(process.env.NODE_ENV === 'production' && { output: 'export' }),
// };

// export default nextConfig;